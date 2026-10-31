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
 * Lee dos pestañas:
 *  - "Proyectos":        una fila por proyecto (la fila 1 son los nombres de columna).
 *  - "Proyecto_detalle": varias filas por proyecto (cifras, etapas, fotos, gastos, kits, aportes, aliados).
 * Las columnas se buscan por su nombre en la fila 1, así que puedes moverlas de lugar.
 */
function leerProyectos_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var filas = leerTablaPorEncabezado_(ss.getSheetByName('Proyectos'));
  var detalle = leerTablaPorEncabezado_(ss.getSheetByName('Proyecto_detalle'));
  var porProyecto = {};
  detalle.forEach(function (d) {
    var id = String(d.proyecto || '').trim();
    if (!id || !String(d.tipo || '').trim()) return;
    (porProyecto[id] = porProyecto[id] || []).push(d);
  });
  return filas.filter(function (p) { return String(p.id || '').trim(); }).map(function (p) {
    p.id = String(p.id).trim();
    p.detalle = porProyecto[p.id] || [];
    return p;
  });
}

// Convierte una pestaña en una lista de objetos usando la fila 1 como nombres de campo.
function leerTablaPorEncabezado_(hoja) {
  if (!hoja || hoja.getLastRow() < 2) return [];
  var vals = hoja.getDataRange().getValues();
  var claves = vals[0].map(function (h) { return String(h || '').trim().toLowerCase(); });
  var tz = Session.getScriptTimeZone();
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    var fila = vals[i], o = {}, vacia = true;
    for (var j = 0; j < claves.length; j++) {
      if (!claves[j]) continue;
      var v = fila[j];
      if (v instanceof Date) v = Utilities.formatDate(v, tz, 'dd/MM/yyyy');
      if (v !== '' && v !== null) vacia = false;
      o[claves[j]] = v;
    }
    if (!vacia) out.push(o);
  }
  return out;
}
