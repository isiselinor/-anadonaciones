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
