/**
 * PROYECTOS de NEXOS — archivo nuevo para el Apps Script del Sheet.
 *
 * Cómo instalarlo (una sola vez):
 *  1. En el Sheet: Extensiones → Apps Script.
 *  2. Botón "+" junto a "Archivos" → Secuencia de comandos → nómbralo "Proyectos".
 *  3. Pega todo este archivo y guarda.
 *  4. En Code.gs, dentro de getDatosPublicos(), en la lista del "return { … }",
 *     agrega esta línea justo debajo de  textos: leerTextosConfig_(),
 *         proyectos: leerProyectos_(),
 *  5. Implementar → Administrar implementaciones → lápiz → Versión: "Nueva versión" → Implementar.
 *
 * Del Sheet solo se leen montos y fotos (los textos están en la página):
 *  - "Proyectos":        A=Proyecto | B=Meta (US$) | C=Recaudado (US$) | D=Etapa actual | E=Actualizado | F=Categoría en Gastos
 *  - "Fotos_proyectos":  A=Proyecto | B=Galería | C=Pie de foto | D=Enlace de la foto | E=Pie en inglés (opcional)
 * La fila 1 es el encabezado; los datos empiezan en la fila 2.
 */
function leerProyectos_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tz = Session.getScriptTimeZone();
  var celda = function (v) { return v instanceof Date ? Utilities.formatDate(v, tz, 'dd/MM/yyyy') : v; };
  var filas = function (nombre, cols) {
    var h = ss.getSheetByName(nombre);
    if (!h || h.getLastRow() < 2) return [];
    return h.getRange(2, 1, h.getLastRow() - 1, cols).getValues()
      .filter(function (r) { return String(r[0] || '').trim(); });
  };
  var montos = filas('Proyectos', 6).map(function (r) {
    return { proyecto: String(r[0]).trim(), meta: r[1], recaudado: r[2], etapa: r[3], actualizado: celda(r[4]), categoria: String(r[5] || '').trim() };
  });

  // Gasto automático: suma de la pestaña Gastos para la categoría de cada proyecto (columna F de "Proyectos"),
  // convertida a US$ con la tasa de la fecha de cada gasto (misma lógica que el resto de egresos).
  var gastos = {};
  montos.forEach(function (m) { if (m.categoria) gastos[m.categoria.toLowerCase()] = { total: 0, items: [] }; });
  if (Object.keys(gastos).length) {
    try {
      leerEgresos_(leerTasasHistorial_()).forEach(function (e) {
        var g = gastos[String(e.categoria || '').trim().toLowerCase()];
        if (!g) return;
        g.total = redondear2_(g.total + e.monto);
        g.items.push({ concepto: e.concepto, monto: e.monto });
      });
    } catch (err) { /* si falla la lectura de gastos, la página sigue funcionando sin este dato */ }
  }

  return {
    montos: montos,
    gastos: gastos,
    fotos: filas('Fotos_proyectos', 5).map(function (r) {
      return { proyecto: String(r[0]).trim(), galeria: String(r[1] || '').trim(), pie: String(r[2] || '').trim(), enlace: String(r[3] || '').trim(), pie_en: String(r[4] || '').trim() };
    })
  };
}

/* ==================================================================
 * RESUMEN INTERNO POR PROYECTO (solo para el equipo, NO se publica)
 * ------------------------------------------------------------------
 *  - Ingresos: columna G "Proyecto" de la pestaña Movimientos (opcional).
 *    Vacía = ingreso general. El sitio sigue calculando todo de forma global.
 *  - Egresos: la "Categoría en Gastos" de cada proyecto (columna F de "Proyectos"),
 *    la misma que ya usa la página para "Ya invertido".
 *  - Escribe la pestaña "Resumen proyectos". Se actualiza junto con el Resumen general
 *    (ver la línea que se agrega en actualizarTodo) o desde Extensiones → Macros si hiciera falta.
 * ================================================================== */
var RESUMEN_PROY_HOJA = 'Resumen proyectos';

function actualizarResumenProyectos() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hist = leerTasasHistorial_();
  var tz = Session.getScriptTimeZone();

  // Proyectos y su categoría de gastos (la última fila con dato manda, como en la página)
  var proyectos = [], catDe = {};
  var hp = ss.getSheetByName('Proyectos');
  if (hp && hp.getLastRow() >= 2) {
    hp.getRange(2, 1, hp.getLastRow() - 1, 6).getValues().forEach(function (r) {
      var nom = String(r[0] || '').trim();
      if (!nom) return;
      if (proyectos.indexOf(nom) === -1) proyectos.push(nom);
      if (String(r[5] || '').trim()) catDe[nom] = String(r[5]).trim().toLowerCase();
    });
  }
  var SIN = 'Sin proyecto (general)';
  var base = function () { return { count: 0, usd: 0, porMes: {}, porMoneda: {}, egresos: 0, items: [] }; };
  var res = {}; proyectos.concat([SIN]).forEach(function (p) { res[p] = base(); });

  // Ingresos (Movimientos A:G, misma lectura que el resumen general + columna G)
  var hm = getHojaMovim_();
  var ult = hm.getLastRow();
  if (ult >= MOVIM.filaInicio) {
    hm.getRange(MOVIM.filaInicio, 1, ult - MOVIM.filaInicio + 1, 7).getValues().forEach(function (r) {
      var donante = String(r[MOVIM.colDonante - 1]).trim().toLowerCase();
      if (!donante || donante === 'total' || donante === 'donante' || donante === 'persona') return;
      var monto = aNumero_(r[MOVIM.colMonto - 1]);
      if (monto === null || monto === 0) return;
      var mc = monedaCanon_(r[MOVIM.colMoneda - 1]);
      if (!mc) return;
      var fecha = r[MOVIM.colFecha - 1] instanceof Date ? r[MOVIM.colFecha - 1] : null;
      var usd = aUSD_(mc.moneda, monto, tasaEn_(hist, fecha));
      var p = String(r[6] || '').trim() || SIN;
      if (!res[p]) res[p] = base();
      var x = res[p];
      x.count++; x.usd += usd;
      var mes = fecha ? Utilities.formatDate(fecha, tz, 'yyyy-MM') : 'Sin fecha';
      x.porMes[mes] = x.porMes[mes] || { count: 0, usd: 0 };
      x.porMes[mes].count++; x.porMes[mes].usd += usd;
      x.porMoneda[mc.moneda] = x.porMoneda[mc.moneda] || { count: 0, monto: 0, usd: 0 };
      x.porMoneda[mc.moneda].count++; x.porMoneda[mc.moneda].monto += monto; x.porMoneda[mc.moneda].usd += usd;
    });
  }

  // Egresos por categoría del proyecto
  var proyDeCat = {}; Object.keys(catDe).forEach(function (p) { proyDeCat[catDe[p]] = p; });
  leerEgresos_(hist).forEach(function (e) {
    var p = proyDeCat[String(e.categoria || '').trim().toLowerCase()];
    if (!p) return;
    res[p].egresos += e.monto; res[p].items.push([e.concepto, redondear2_(e.monto)]);
  });

  // Escribir la pestaña
  var h = ss.getSheetByName(RESUMEN_PROY_HOJA) || ss.insertSheet(RESUMEN_PROY_HOJA);
  h.clear();
  var filas = [], negritas = [];
  var titulo = function (t) { filas.push([t, '', '', '', '']); negritas.push(filas.length); };
  var enc = function (a) { filas.push(a); negritas.push(filas.length); };

  filas.push(['RESUMEN INTERNO POR PROYECTO — no se publica en la página', '', '', '', '']); negritas.push(1);
  filas.push(['Actualizado: ' + new Date().toLocaleString('es-AR') + ' · Montos en US$ con la tasa de la fecha de cada movimiento', '', '', '', '']);
  filas.push(['', '', '', '', '']);
  enc(['Proyecto', 'Donaciones (cant.)', 'Ingresos (US$)', 'Egresos (US$)', 'Diferencia (US$)']);
  var tI = 0, tE = 0, tC = 0;
  Object.keys(res).forEach(function (p) {
    var x = res[p];
    filas.push([p, x.count, redondear2_(x.usd), p === SIN ? '' : redondear2_(x.egresos), p === SIN ? '' : redondear2_(x.usd - x.egresos)]);
    tI += x.usd; tE += x.egresos; tC += x.count;
  });
  enc(['TOTAL', tC, redondear2_(tI), redondear2_(tE), '']);

  filas.push(['', '', '', '', '']);
  titulo('INGRESOS POR MES');
  enc(['Proyecto', 'Mes', 'Donaciones (cant.)', 'Ingresos (US$)', '']);
  Object.keys(res).forEach(function (p) {
    Object.keys(res[p].porMes).sort().forEach(function (m) { filas.push([p, m, res[p].porMes[m].count, redondear2_(res[p].porMes[m].usd), '']); });
  });

  filas.push(['', '', '', '', '']);
  titulo('INGRESOS POR MONEDA');
  enc(['Proyecto', 'Moneda', 'Donaciones (cant.)', 'Monto en su moneda', 'Equivalente (US$)']);
  Object.keys(res).forEach(function (p) {
    Object.keys(res[p].porMoneda).forEach(function (m) { var y = res[p].porMoneda[m]; filas.push([p, m, y.count, redondear2_(y.monto), redondear2_(y.usd)]); });
  });

  filas.push(['', '', '', '', '']);
  titulo('EGRESOS POR PROYECTO (según su categoría en Gastos)');
  enc(['Proyecto', 'Concepto', 'Egreso (US$)', '', '']);
  proyectos.forEach(function (p) { res[p].items.forEach(function (it) { filas.push([p, it[0], it[1], '', '']); }); });

  h.getRange(1, 1, filas.length, 5).setValues(filas);
  negritas.forEach(function (n) { h.getRange(n, 1, 1, 5).setFontWeight('bold').setBackground('#f7e3dc'); });
  h.getRange(1, 1).setFontSize(12);
  h.setColumnWidth(1, 260); h.setColumnWidths(2, 4, 160);
}
