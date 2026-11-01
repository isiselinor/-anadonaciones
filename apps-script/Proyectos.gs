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
 * Cómo se identifica un proyecto:
 *  - Movimientos, columna G "Proyecto" (opcional): menú con la lista de proyectos. Vacía = donación general.
 *    Para sumar un proyecto nuevo a la lista: Datos → Validación de datos en la columna G.
 *  - Gastos: el equipo usa la categoría que considere; si una categoría se llama igual que el
 *    proyecto (ej. "Volver a Sonar"), esos gastos se cuentan como egresos del proyecto.
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
  var SIN = 'Sin proyecto (donación general)';

  var orden = [], res = {};
  var asegura = function (c) {
    if (!res[c]) { res[c] = { count: 0, usd: 0, porMoneda: {}, egresos: 0 }; orden.push(c); }
    return res[c];
  };
  // Lista de proyectos: la misma del menú desplegable de la columna G de Movimientos.
  var hm = getHojaMovim_();
  try {
    var regla = hm.getRange(MOVIM.filaInicio, 7).getDataValidation();
    if (regla) (regla.getCriteriaValues()[0] || []).forEach(function (p) { p = String(p || '').trim(); if (p) asegura(p); });
  } catch (err) {}

  // Ingresos marcados (Movimientos A:G)
  var ult = hm.getLastRow();
  if (ult >= MOVIM.filaInicio) {
    hm.getRange(MOVIM.filaInicio, 1, ult - MOVIM.filaInicio + 1, 7).getValues().forEach(function (r) {
      var donante = String(r[MOVIM.colDonante - 1]).trim().toLowerCase();
      if (!donante || donante === 'total' || donante === 'donante' || donante === 'persona') return;
      var monto = aNumero_(r[MOVIM.colMonto - 1]);
      if (monto === null || monto === 0) return;
      var mc = monedaCanon_(r[MOVIM.colMoneda - 1]);
      if (!mc) return;
      var fecha = r[MOVIM.colFecha - 1] instanceof Date ? r[MOVIM.colFecha - 1] : null; // fecha de la tasa a aplicar
      var usd = aUSD_(mc.moneda, monto, tasaEn_(hist, fecha));
      var x = asegura(String(r[6] || '').trim() || SIN);
      x.count++; x.usd += usd;
      x.porMoneda[mc.moneda] = x.porMoneda[mc.moneda] || { count: 0, monto: 0, usd: 0 };
      x.porMoneda[mc.moneda].count++; x.porMoneda[mc.moneda].monto += monto; x.porMoneda[mc.moneda].usd += usd;
    });
  }

  // Egresos del proyecto: gastos cuya categoría en Gastos tiene el mismo nombre que el proyecto.
  leerEgresos_(hist).forEach(function (e) { var c = String(e.categoria || '').trim(); if (res[c] && c !== SIN) res[c].egresos += e.monto; });

  // Armar la pestaña
  var filas = [], negritas = [];
  var vacia = function () { filas.push(['', '', '', '', '']); };
  var enc = function (a) { filas.push(a); negritas.push(filas.length); };
  enc(['RESUMEN INTERNO POR PROYECTO · se genera solo · no se publica', '', '', '', '']);
  filas.push(['Actualizado ' + new Date().toLocaleString('es-AR') + ' · US$ con la misma tasa que usa el resumen general', '', '', '', '']);
  filas.push(['Donaciones marcadas = columna G de Movimientos. Egresos = gastos con la categoría del mismo nombre en Gastos.', '', '', '', '']);
  vacia();
  enc(['Proyecto', 'Donaciones marcadas', 'Ingresos marcados (US$)', 'Egresos (US$)', 'Diferencia (US$)']);
  var tI = 0, tE = 0, tC = 0;
  orden.forEach(function (c) {
    var x = res[c];
    filas.push([c, x.count, redondear2_(x.usd), c === SIN ? '' : redondear2_(x.egresos), x.count && c !== SIN ? redondear2_(x.usd - x.egresos) : '']);
    tI += x.usd; tE += x.egresos; tC += x.count;
  });
  enc(['TOTAL', tC, redondear2_(tI), redondear2_(tE), '']);

  // Desglose por moneda solo de los proyectos (lo general ya está en el Resumen)
  var marcadas = orden.filter(function (c) { return c !== SIN && res[c].count > 0; });
  if (marcadas.length) { vacia();
  enc(['Ingresos por moneda · Proyecto', 'Moneda', 'Donaciones', 'Monto en su moneda', 'Equivalente (US$)']);
  marcadas.forEach(function (c) {
    Object.keys(res[c].porMoneda).forEach(function (m) { var y = res[c].porMoneda[m]; filas.push([c, m, y.count, redondear2_(y.monto), redondear2_(y.usd)]); });
  }); }

  var h = ss.getSheetByName(RESUMEN_PROY_HOJA) || ss.insertSheet(RESUMEN_PROY_HOJA);
  h.clear();
  h.getRange(1, 1, filas.length, 5).setValues(filas);
  negritas.forEach(function (n) { h.getRange(n, 1, 1, 5).setFontWeight('bold').setBackground('#f7e3dc'); });
  h.setColumnWidth(1, 280); h.setColumnWidths(2, 4, 170);
}
