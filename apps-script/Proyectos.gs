/**
 * PROYECTOS de NEXOS — archivo "Proyectos" del Apps Script del Sheet.
 *
 * Instalación (una sola vez):
 *  1. Extensiones → Apps Script → archivo "Proyectos": borra todo y pega este archivo. Guarda.
 *  2. En HOJA_DATOS.gs:
 *     - dentro de getDatosPublicos(), en el "return { … }", debe estar la línea:   proyectos: leerProyectos_(),
 *     - justo debajo de  function actualizarTodo() {  debe estar la línea:
 *           try { actualizarResumenProyectos(); } catch (e) {}
 *  3. Implementar → Administrar implementaciones → lápiz → Versión: "Nueva versión" → Implementar.
 *
 * Cómo se identifica un proyecto: por su CATEGORÍA, con el mismo nombre que el proyecto
 * (ej. "Volver a Sonar").
 *  - Gastos: columna F (Categoría), como siempre.
 *  - Movimientos: columna G (opcional). Vacía = ingreso general.
 *  - La lista de categorías vive en la pestaña "Categorias".
 * Lo público sigue calculándose de forma global. Lo invertido de cada proyecto ya viaja en
 * egresosPorCategoria; esta función solo envía las fotos.
 */
function leerProyectos_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var h = ss.getSheetByName('Fotos_proyectos');
  var fotos = [];
  if (h && h.getLastRow() >= 2) {
    fotos = h.getRange(2, 1, h.getLastRow() - 1, 5).getValues()
      .filter(function (r) { return String(r[0] || '').trim(); })
      .map(function (r) {
        return { proyecto: String(r[0]).trim(), galeria: String(r[1] || '').trim(), pie: String(r[2] || '').trim(), enlace: String(r[3] || '').trim(), pie_en: String(r[4] || '').trim() };
      });
  }
  return { fotos: fotos };
}

/* ==================================================================
 * RESUMEN INTERNO POR PROYECTO / CATEGORÍA (solo para el equipo, NO se publica)
 * Escribe la pestaña "Resumen proyectos". Se actualiza junto con el Resumen general.
 * ================================================================== */
var RESUMEN_PROY_HOJA = 'Resumen proyectos';

function actualizarResumenProyectos() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hist = leerTasasHistorial_();
  var tz = Session.getScriptTimeZone();
  var SIN = 'Sin categoría (ingreso general)';

  var orden = [], res = {};
  var asegura = function (c) {
    if (!res[c]) { res[c] = { count: 0, usd: 0, porMes: {}, porMoneda: {}, egresos: 0 }; orden.push(c); }
    return res[c];
  };
  // Orden: el de la pestaña Categorias
  var hc = ss.getSheetByName('Categorias');
  if (hc && hc.getLastRow() >= 2) {
    hc.getRange(2, 1, hc.getLastRow() - 1, 1).getValues().forEach(function (r) {
      var c = String(r[0] || '').trim(); if (c) asegura(c);
    });
  }

  // Ingresos marcados (Movimientos A:G)
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
      var x = asegura(String(r[6] || '').trim() || SIN);
      x.count++; x.usd += usd;
      var mes = fecha ? Utilities.formatDate(fecha, tz, 'yyyy-MM') : 'Sin fecha';
      x.porMes[mes] = x.porMes[mes] || { count: 0, usd: 0 };
      x.porMes[mes].count++; x.porMes[mes].usd += usd;
      x.porMoneda[mc.moneda] = x.porMoneda[mc.moneda] || { count: 0, monto: 0, usd: 0 };
      x.porMoneda[mc.moneda].count++; x.porMoneda[mc.moneda].monto += monto; x.porMoneda[mc.moneda].usd += usd;
    });
  }

  // Egresos por categoría (Gastos)
  leerEgresos_(hist).forEach(function (e) { asegura(String(e.categoria || '').trim() || CAT_DEFAULT).egresos += e.monto; });

  // Armar la pestaña
  var filas = [], negritas = [];
  var vacia = function () { filas.push(['', '', '', '', '']); };
  var enc = function (a) { filas.push(a); negritas.push(filas.length); };
  enc(['RESUMEN INTERNO POR PROYECTO / CATEGORÍA · se genera solo · no se publica', '', '', '', '']);
  filas.push(['Actualizado ' + new Date().toLocaleString('es-AR') + ' · US$ con la tasa de la fecha de cada movimiento', '', '', '', '']);
  filas.push(['Ingresos marcados = donaciones con categoría en la columna G de Movimientos.', '', '', '', '']);
  vacia();
  enc(['Categoría / proyecto', 'Donaciones marcadas', 'Ingresos marcados (US$)', 'Egresos (US$)', 'Diferencia (US$)']);
  var tI = 0, tE = 0, tC = 0;
  orden.forEach(function (c) {
    var x = res[c];
    if (!x.count && !x.egresos) return;
    filas.push([c, x.count, redondear2_(x.usd), c === SIN ? '' : redondear2_(x.egresos), x.count && c !== SIN ? redondear2_(x.usd - x.egresos) : '']);
    tI += x.usd; tE += x.egresos; tC += x.count;
  });
  enc(['TOTAL', tC, redondear2_(tI), redondear2_(tE), '']);

  var marcadas = orden.filter(function (c) { return res[c].count > 0; });
  vacia();
  enc(['Ingresos por mes · Categoría', 'Mes', 'Donaciones', 'Ingresos (US$)', '']);
  marcadas.forEach(function (c) {
    Object.keys(res[c].porMes).sort().forEach(function (m) { filas.push([c, m, res[c].porMes[m].count, redondear2_(res[c].porMes[m].usd), '']); });
  });
  vacia();
  enc(['Ingresos por moneda · Categoría', 'Moneda', 'Donaciones', 'Monto en su moneda', 'Equivalente (US$)']);
  marcadas.forEach(function (c) {
    Object.keys(res[c].porMoneda).forEach(function (m) { var y = res[c].porMoneda[m]; filas.push([c, m, y.count, redondear2_(y.monto), redondear2_(y.usd)]); });
  });

  var h = ss.getSheetByName(RESUMEN_PROY_HOJA) || ss.insertSheet(RESUMEN_PROY_HOJA);
  h.clear();
  h.getRange(1, 1, filas.length, 5).setValues(filas);
  negritas.forEach(function (n) { h.getRange(n, 1, 1, 5).setFontWeight('bold').setBackground('#f7e3dc'); });
  h.setColumnWidth(1, 280); h.setColumnWidths(2, 4, 170);
}
