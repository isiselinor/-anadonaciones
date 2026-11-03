/**
 * ============================================================
 *  AUTOMATIZACIÓN DE DONACIONES  (versión API para Netlify)
 *  Fuente de datos = pestañas que TÚ llenas a mano:
 *    - "Movimientos": cada donación (Donante, Monto, Moneda, Responsable, Método de pago)
 *    - "gastos":      egresos (Responsable, Descripción, Bs, USD, Fecha, Categoría)
 *    - "Tasas":       tasas de cambio editables
 *    - "Metodos":     métodos de pago que se muestran en el botón Donar
 *  El script LEE esas hojas, genera "Resumen", y doGet devuelve JSON (JSONP) para Netlify.
 * ============================================================
 */

// ---------- HOJA DE MOVIMIENTOS (fuente manual de donaciones) ----------
// Columnas: A=Donante, B=Monto, C=Medio de Pago, D=Responsable, E=Moneda, F=Fecha. Datos desde la fila 2.
// La Fecha (opcional) sirve para aplicar la tasa vigente en ese día. Si va vacía, usa la tasa más antigua.
const MOVIM = { hoja: 'Movimientos', filaInicio: 2, colDonante: 1, colMonto: 2, colMetodo: 3, colResponsable: 4, colMoneda: 5, colFecha: 6 };
const HOJA_RESUMEN = 'Resumen';

// ---------- TASAS DE CAMBIO (historial con fecha, editable) ----------
// Hoja "Tasas": A=Desde (fecha) | B=Pesos (ARS)/USD | C=Bolívares (Bs)/USD | D=USD por 1 EUR
// Cada fila = una tasa vigente DESDE esa fecha. Para cambiar la tasa, agregas una fila nueva con la fecha.
const TASAS_DEFAULT = { arsPorUsd: 1550, bsPorUsd: 800, usdPorEur: 1.138 };
const TASAS_HOJA = 'Tasas';

// ---------- GASTOS (pestaña aparte) ----------
//   A=Responsable | B=Descripción | C=Monto Bs | D=Monto USD | E=Fecha | F=Categoría | G=Proyecto
const GASTOS = { hoja: 'gastos', filaInicio: 2, colConcepto: 2, colBs: 3, colUsd: 4, colFecha: 5, colCategoria: 6, colProyecto: 7 };
const CAT_DEFAULT = 'Sin categoría';
const PROY_DEFAULT = 'Sin proyecto';

// ---------- MÉTODOS DE PAGO (pestaña para el botón Donar) ----------
//   A=Método | B=Campo | C=Valor | D=Copiar (opcional) | E=Enlace (sí/no)
const METODOS = { hoja: 'Metodos', filaInicio: 2 };

// ---------- CONFIG (pestaña clave/valor: enlaces de Drive, tagline, etc.) ----------
//   A=Clave | B=Valor
const CONFIG_HOJA = 'Config';

// ------------------------------------------------------------------
//  HELPERS de moneda / números
// ------------------------------------------------------------------
// Convierte el texto libre de la columna Moneda a un código canónico + símbolo.
function monedaCanon_(texto) {
  var t = String(texto).trim().toLowerCase();
  if (t === 'usdt') return { moneda: 'USDT', simbolo: 'USDT' };
  if (t === 'ars' || t.indexOf('peso') === 0 || t.indexOf('argentin') !== -1) return { moneda: 'ARS', simbolo: 'ARS $' };
  if (t === 'bs' || t === 'ves' || t.indexOf('boliv') !== -1) return { moneda: 'VES', simbolo: 'Bs' };
  if (t === 'usd' || t.indexOf('dolar') !== -1 || t.indexOf('dólar') !== -1) return { moneda: 'USD', simbolo: 'US$' };
  if (t === 'eur' || t.indexOf('euro') !== -1) return { moneda: 'EUR', simbolo: '€' };
  return null; // moneda no reconocida -> la fila se ignora
}

// Convierte un monto a USD según su moneda y las tasas dadas.
function aUSD_(moneda, monto, t) {
  switch (moneda) {
    case 'ARS':  return monto / t.arsPorUsd;
    case 'VES':  return monto / t.bsPorUsd;
    case 'EUR':  return monto * t.usdPorEur;
    case 'USD':  return monto;
    case 'USDT': return monto;
    default:     return 0;
  }
}

// Convierte "47.871,03" / 47871.03 / "559,989" a número (formato es-AR)
function aNumero_(v) {
  if (v === null || v === undefined || v === '') return null;
  if (typeof v === 'number') return isFinite(v) ? v : null;
  var s = String(v).trim().replace(/\s/g, '').replace(/[^\d.,-]/g, '');
  if (s === '') return null;
  if (s.indexOf(',') !== -1) s = s.replace(/\./g, '').replace(',', '.');
  var n = parseFloat(s);
  return isFinite(n) ? n : null;
}

// Redondea a 2 decimales devolviendo número.
function redondear2_(n) { return Math.round((Number(n) || 0) * 100) / 100; }

// Busca una pestaña por nombre (tolerante a mayúsculas). Devuelve null si no existe.
function buscarHoja_(nombre) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = ss.getSheetByName(nombre);
  if (hoja) return hoja;
  var todas = ss.getSheets();
  for (var j = 0; j < todas.length; j++) {
    if (todas[j].getName().toLowerCase().trim() === nombre.toLowerCase()) return todas[j];
  }
  return null;
}

// ------------------------------------------------------------------
//  LECTURA: Movimientos (donaciones, fuente manual)
// ------------------------------------------------------------------
function getHojaMovim_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = buscarHoja_(MOVIM.hoja);
  if (!hoja) {
    hoja = ss.insertSheet(MOVIM.hoja);
    hoja.getRange(1, 1, 1, 6)
      .setValues([['Donante', 'Monto', 'Medio de Pago', 'Responsable', 'Moneda', 'Fecha']])
      .setFontWeight('bold').setBackground('#1c2541').setFontColor('#ffffff');
    hoja.setFrozenRows(1);
  }
  return hoja;
}

function leerMovimientos_() {
  var hoja = getHojaMovim_();
  var movimientos = [];
  var ult = hoja.getLastRow();
  if (ult < MOVIM.filaInicio) return movimientos;

  var n = ult - MOVIM.filaInicio + 1;
  var vals = hoja.getRange(MOVIM.filaInicio, 1, n, 6).getValues();
  for (var i = 0; i < n; i++) {
    var donante = String(vals[i][MOVIM.colDonante - 1]).trim();
    var clave = donante.toLowerCase();
    if (clave === '' || clave === 'total' || clave === 'donante' || clave === 'persona') continue;
    var monto = aNumero_(vals[i][MOVIM.colMonto - 1]);
    if (monto === null || monto === 0) continue;
    var mc = monedaCanon_(vals[i][MOVIM.colMoneda - 1]);
    if (!mc) continue; // moneda no reconocida
    var fechaVal = vals[i][MOVIM.colFecha - 1];
    movimientos.push({
      donante: donante,
      monto: monto,
      moneda: mc.moneda,
      simbolo: mc.simbolo,
      responsable: String(vals[i][MOVIM.colResponsable - 1]).trim() || 'Sin asignar',
      metodo: String(vals[i][MOVIM.colMetodo - 1]).trim() || 'Sin especificar',
      fecha: (fechaVal instanceof Date) ? fechaVal : null,
    });
  }
  return movimientos;
}

// ------------------------------------------------------------------
//  LECTURA: Tasas
// ------------------------------------------------------------------
function getHojaTasas_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = buscarHoja_(TASAS_HOJA);
  if (!hoja) {
    hoja = ss.insertSheet(TASAS_HOJA);
    hoja.getRange(1, 1, 1, 4)
      .setValues([['Desde (fecha)', 'Pesos (ARS) por 1 USD', 'Bolívares (Bs) por 1 USD', 'USD por 1 EUR']])
      .setFontWeight('bold').setBackground('#1c2541').setFontColor('#ffffff');
    // Primera fila sin fecha = tasa base para todo lo viejo/sin fecha.
    hoja.getRange(2, 1, 1, 4).setValues([['', TASAS_DEFAULT.arsPorUsd, TASAS_DEFAULT.bsPorUsd, TASAS_DEFAULT.usdPorEur]]);
    hoja.setFrozenRows(1);
  }
  return hoja;
}

// Historial de tasas ordenado por fecha (más viejo primero). Sin fecha = la más antigua.
function leerTasasHistorial_() {
  var hoja = getHojaTasas_();
  var ult = hoja.getLastRow();
  var hist = [];
  if (ult >= 2) {
    hoja.getRange(2, 1, ult - 1, 4).getValues().forEach(function (r) {
      var ars = aNumero_(r[1]), bs = aNumero_(r[2]), eur = aNumero_(r[3]);
      if (ars || bs || eur) {
        hist.push({
          desde: (r[0] instanceof Date) ? r[0] : null,
          arsPorUsd: ars || TASAS_DEFAULT.arsPorUsd,
          bsPorUsd:  bs  || TASAS_DEFAULT.bsPorUsd,
          usdPorEur: eur || TASAS_DEFAULT.usdPorEur,
        });
      }
    });
  }
  if (!hist.length) hist.push({ desde: null, arsPorUsd: TASAS_DEFAULT.arsPorUsd, bsPorUsd: TASAS_DEFAULT.bsPorUsd, usdPorEur: TASAS_DEFAULT.usdPorEur });
  hist.sort(function (a, b) {
    var da = a.desde ? a.desde.getTime() : -8.64e15;   // null = muy viejo
    var db = b.desde ? b.desde.getTime() : -8.64e15;
    return da - db;
  });
  return hist;
}

// Tasa vigente en una fecha: última fila con Desde <= fecha (sin fecha usa la más vieja).
function tasaEn_(hist, fecha) {
  var t = hist[0];
  if (fecha instanceof Date) {
    for (var i = 0; i < hist.length; i++) {
      var d = hist[i].desde;
      if (!d || d.getTime() <= fecha.getTime()) t = hist[i]; else break;
    }
  }
  return t;
}

// Tasa más reciente (para mostrar en la nota de la web y en el Resumen).
function tasaActual_(hist) { return hist[hist.length - 1]; }

// ------------------------------------------------------------------
//  LECTURA: Egresos (gastos) + agrupación por categoría
// ------------------------------------------------------------------
function leerEgresos_(hist) {
  var hoja = buscarHoja_(GASTOS.hoja);
  if (!hoja) return [];
  var ini = GASTOS.filaInicio;
  var ult = hoja.getLastRow();
  var egresos = [];
  if (ult < ini) return egresos;

  var n = ult - ini + 1;
  var ancho = GASTOS.colProyecto - GASTOS.colConcepto + 1;
  var vals = hoja.getRange(ini, GASTOS.colConcepto, n, ancho).getValues();
  var iBs    = GASTOS.colBs - GASTOS.colConcepto;
  var iUsd   = GASTOS.colUsd - GASTOS.colConcepto;
  var iFecha = GASTOS.colFecha - GASTOS.colConcepto;
  var iCat   = GASTOS.colCategoria - GASTOS.colConcepto;
  var iProy  = GASTOS.colProyecto - GASTOS.colConcepto;
  for (var i = 0; i < n; i++) {
    var concepto = String(vals[i][0]).trim();
    var clave = concepto.toLowerCase();
    if (clave === '') continue;
    if (clave.indexOf('total') === 0) break;
    var bs  = aNumero_(vals[i][iBs]) || 0;
    var usd = aNumero_(vals[i][iUsd]) || 0;
    var fechaVal = vals[i][iFecha];
    var fecha = (fechaVal instanceof Date) ? fechaVal : null;
    var t = tasaEn_(hist, fecha);                 // tasa vigente en la fecha del gasto
    var enUsd = (bs / t.bsPorUsd) + usd;
    if (enUsd === 0) continue;
    var categoria = String(vals[i][iCat]).trim() || CAT_DEFAULT;
    var proyecto = String(vals[i][iProy] || '').trim() || PROY_DEFAULT;
    egresos.push({ concepto: concepto, monto: redondear2_(enUsd), bs: bs, usd: usd, categoria: categoria, proyecto: proyecto });
  }
  return egresos;
}

// ---------- Descripciones de categorías (pestaña "Categorias") ----------
const CAT_HOJA = 'Categorias';

// Crea/asegura la hoja "Categorias" con una fila por categoría existente.
// Columnas: A=Categoría (ES) | B=Descripción (ES) | C=Categoría (EN) | D=Descripción (EN)
function ensureCategorias_(categorias) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = buscarHoja_(CAT_HOJA);
  if (!hoja) {
    hoja = ss.insertSheet(CAT_HOJA);
    hoja.setFrozenRows(1);
  }
  // Asegura los 4 encabezados (por si la hoja ya existía con 2 columnas)
  hoja.getRange(1, 1, 1, 4).setValues([['Categoría', 'Descripción (ES)', 'Categoría (EN)', 'Descripción (EN)']])
    .setFontWeight('bold').setBackground('#1c2541').setFontColor('#ffffff');
  var ult = hoja.getLastRow();
  var existentes = {};
  if (ult >= 2) {
    hoja.getRange(2, 1, ult - 1, 1).getValues().forEach(function (r) {
      var k = String(r[0]).trim().toLowerCase(); if (k) existentes[k] = true;
    });
  }
  var faltan = [];
  categorias.forEach(function (cat) {
    var k = String(cat).trim().toLowerCase();
    if (k && !existentes[k]) { existentes[k] = true; faltan.push([cat, '']); }
  });
  if (faltan.length) hoja.getRange(hoja.getLastRow() + 1, 1, faltan.length, 2).setValues(faltan);
  return hoja;
}

// Lee descripciones y traducciones -> mapa {categoriaLower: {desc, nombreEN, descEN}}. Solo lectura.
function leerDescCategorias_() {
  var hoja = buscarHoja_(CAT_HOJA);
  var mapa = {};
  if (!hoja) return mapa;
  var ult = hoja.getLastRow();
  if (ult < 2) return mapa;
  hoja.getRange(2, 1, ult - 1, 4).getValues().forEach(function (r) {
    var k = String(r[0]).trim().toLowerCase();
    if (k) mapa[k] = {
      desc: String(r[1]).trim(),
      nombreEN: String(r[2]).trim(),
      descEN: String(r[3]).trim(),
    };
  });
  return mapa;
}

function agruparEgresos_(egresos) {
  var mapa = {}, orden = [];
  egresos.forEach(function (e) {
    if (!mapa[e.categoria]) { mapa[e.categoria] = { categoria: e.categoria, total: 0, items: [] }; orden.push(e.categoria); }
    mapa[e.categoria].total += e.monto;
    mapa[e.categoria].items.push({ concepto: e.concepto, monto: e.monto });
  });
  var arr = orden.map(function (k) { mapa[k].total = redondear2_(mapa[k].total); return mapa[k]; });
  arr.sort(function (a, b) { return b.total - a.total; });
  return arr;
}

// Invertido por proyecto (columna G de Gastos) -> [{proyecto, total, gastos, items}], de mayor a menor.
function agruparPorProyecto_(egresos) {
  var mapa = {}, orden = [];
  egresos.forEach(function (e) {
    if (!mapa[e.proyecto]) { mapa[e.proyecto] = { proyecto: e.proyecto, total: 0, gastos: 0, items: [] }; orden.push(e.proyecto); }
    mapa[e.proyecto].total += e.monto;
    mapa[e.proyecto].gastos++;
    mapa[e.proyecto].items.push({ concepto: e.concepto, monto: e.monto, categoria: e.categoria });
  });
  var arr = orden.map(function (k) { mapa[k].total = redondear2_(mapa[k].total); return mapa[k]; });
  arr.sort(function (a, b) { return b.total - a.total; });
  return arr;
}

// ------------------------------------------------------------------
//  LECTURA: Métodos de pago (para el botón Donar)
// ------------------------------------------------------------------
function leerMetodos_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = buscarHoja_(METODOS.hoja);
  if (!hoja) {
    // Crea la pestaña con encabezados + un ejemplo para que sepas el formato.
    hoja = ss.insertSheet(METODOS.hoja);
    hoja.getRange(1, 1, 1, 5)
      .setValues([['Método', 'Campo', 'Valor', 'Copiar (opcional)', 'Enlace (sí/no)']])
      .setFontWeight('bold').setBackground('#1c2541').setFontColor('#ffffff');
    hoja.getRange(2, 1, 2, 5).setValues([
      ['Zelle', 'Correo', 'maria.leonor.cordero@gmail.com', '', 'no'],
      ['Revolut', 'Enlace', 'revolut.me/leitovi93', 'https://revolut.me/leitovi93', 'sí'],
    ]);
    hoja.setFrozenRows(1);
  }
  var ult = hoja.getLastRow();
  if (ult < METODOS.filaInicio) return [];
  var n = ult - METODOS.filaInicio + 1;
  var vals = hoja.getRange(METODOS.filaInicio, 1, n, 5).getValues();
  var mapa = {}, orden = [];
  for (var i = 0; i < n; i++) {
    var metodo = String(vals[i][0]).trim();
    if (metodo === '' || metodo.toLowerCase() === 'método' || metodo.toLowerCase() === 'metodo') continue;
    var campo = String(vals[i][1]).trim();
    var valor = String(vals[i][2]).trim();
    if (campo === '' && valor === '') continue;
    var copiar = String(vals[i][3]).trim();
    var enl = String(vals[i][4]).trim().toLowerCase();
    var esEnlace = (enl === 'sí' || enl === 'si' || enl === 'yes' || enl === 'x' || enl === 'true' || enl === '1');
    if (!mapa[metodo]) { mapa[metodo] = { metodo: metodo, campos: [] }; orden.push(metodo); }
    mapa[metodo].campos.push({ campo: campo, valor: valor, copiar: copiar || valor, enlace: esEnlace });
  }
  return orden.map(function (k) { return mapa[k]; });
}

// ------------------------------------------------------------------
//  LECTURA: Config (enlaces de Drive, tagline)  -> mapa {clave: valor}
// ------------------------------------------------------------------
// Config con columnas: A=Clave | B=Valor (ES) | C=Valor (EN). Devuelve {clave: {es, en}}.
function leerConfig_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = buscarHoja_(CONFIG_HOJA);
  var DEFAULTS = [
    ['enlace_facturas', '', ''],
    ['enlace_fotos', '', ''],
    ['tagline', 'Ayuda transparente que llega más lejos', 'Transparent help that reaches further'],
    ['mision_titulo', 'Nuestra misión', 'Our mission'],
    ['mision',
      'Somos <b>el puente</b> entre la voluntad de los que quieren aportar y la resiliencia de las comunidades que hoy necesitan reconstruirse. Somos la prueba de que cuando las manos se juntan de forma transparente, la ayuda llega <b>más lejos, más rápido y de forma más humana</b>.',
      'We are <b>the bridge</b> between the will of those who want to give and the resilience of communities that today need to rebuild. We are proof that when hands come together transparently, help reaches <b>further, faster, and in a more human way</b>.'],
  ];
  if (!hoja) hoja = ss.insertSheet(CONFIG_HOJA);
  // Asegura los 3 encabezados (por si la hoja ya existía con 2 columnas)
  hoja.getRange(1, 1, 1, 3).setValues([['Clave', 'Valor (ES)', 'Valor (EN)']])
    .setFontWeight('bold').setBackground('#1c2541').setFontColor('#ffffff');
  hoja.setFrozenRows(1);

  var mapa = {};
  var ult = hoja.getLastRow();
  if (ult >= 2) {
    hoja.getRange(2, 1, ult - 1, 3).getValues().forEach(function (r) {
      var k = String(r[0]).trim().toLowerCase();
      if (k) mapa[k] = { es: String(r[1]).trim(), en: String(r[2]).trim() };
    });
  }
  // Agrega las claves que falten (para hojas Config ya creadas antes)
  var faltan = DEFAULTS.filter(function (d) { return !(d[0] in mapa); });
  if (faltan.length) {
    hoja.getRange(hoja.getLastRow() + 1, 1, faltan.length, 3).setValues(faltan);
    faltan.forEach(function (d) { mapa[d[0]] = { es: d[1], en: d[2] }; });
  }
  return mapa;
}

// ------------------------------------------------------------------
//  MENÚ + DISPARADORES
// ------------------------------------------------------------------
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('💸 Donaciones')
    .addItem('Actualizar resumen ahora', 'actualizarTodo')
    .addToUi();
}

function onEditActualizar(e) {
  try {
    if (!e || !e.range) return;
    var nombre = (e.range.getSheet().getName() || '').toLowerCase();
    if (nombre === MOVIM.hoja.toLowerCase() ||
        nombre === GASTOS.hoja.toLowerCase() ||
        nombre === TASAS_HOJA.toLowerCase() ||
        nombre === METODOS.hoja.toLowerCase() ||
        nombre === CAT_HOJA.toLowerCase() ||
        nombre === CONFIG_HOJA.toLowerCase()) {
      actualizarTodo();
    }
  } catch (err) { /* silencioso */ }
}

// ------------------------------------------------------------------
//  GENERAR HOJA RESUMEN
// ------------------------------------------------------------------
function actualizarTodo() {
  try { actualizarResumenProyectos(); } catch (e) {}
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  leerConfig_();   // asegura que existan las filas de la hoja Config (tagline, misión, enlaces)
  var movs = leerMovimientos_();
  var hist = leerTasasHistorial_();
  var tasas = tasaActual_(hist);   // tasa más reciente (solo para mostrar)

  // Por moneda (+ USD por fila, según la tasa vigente en la fecha de cada donación)
  var porMoneda = {}, totalUSD = 0;
  var porMetodo = {}, ordenMet = [], porResp = {}, ordenResp = [];
  movs.forEach(function (m) {
    var u = aUSD_(m.moneda, m.monto, tasaEn_(hist, m.fecha));
    if (!porMoneda[m.moneda]) porMoneda[m.moneda] = { count: 0, total: 0, usd: 0, simbolo: m.simbolo };
    porMoneda[m.moneda].count++; porMoneda[m.moneda].total += m.monto; porMoneda[m.moneda].usd += u;
    totalUSD += u;
    if (!porMetodo[m.metodo]) { porMetodo[m.metodo] = { count: 0, usd: 0 }; ordenMet.push(m.metodo); }
    porMetodo[m.metodo].count++; porMetodo[m.metodo].usd += u;
    if (!porResp[m.responsable]) { porResp[m.responsable] = { count: 0, usd: 0 }; ordenResp.push(m.responsable); }
    porResp[m.responsable].count++; porResp[m.responsable].usd += u;
  });

  // Egresos (cada uno con la tasa vigente en su fecha)
  var egresos = leerEgresos_(hist);
  var totalEgresos = 0;
  egresos.forEach(function (e) { totalEgresos += e.monto; });
  var saldo = totalUSD - totalEgresos;

  // ---- Construir Resumen ----
  var hojaR = buscarHoja_(HOJA_RESUMEN) || ss.insertSheet(HOJA_RESUMEN);
  hojaR.clearContents();
  var out = [], negras = [];

  out.push(['RESUMEN DE DONACIONES', '', '', '']);
  out.push(['Actualizado:', new Date(), '', '']);
  out.push(['', '', '', '']);

  negras.push(out.length + 1);
  out.push(['Por moneda — con equivalente en USD', '', '', '']);
  out.push(['Moneda', 'Donaciones', 'Total', 'Equivalente USD']);
  Object.keys(porMoneda).forEach(function (mon) {
    var d = porMoneda[mon];
    out.push([d.simbolo + ' (' + mon + ')', d.count, d.total, redondear2_(d.usd)]);
  });

  out.push(['', '', '', '']);
  negras.push(out.length + 1);
  out.push(['TOTAL ESTIMADO EN USD', '', '', redondear2_(totalUSD)]);

  out.push(['', '', '', '']);
  negras.push(out.length + 1);
  out.push(['Por método de pago', 'Donaciones', '', 'USD']);
  ordenMet.forEach(function (k) { out.push([k, porMetodo[k].count, '', redondear2_(porMetodo[k].usd)]); });

  out.push(['', '', '', '']);
  negras.push(out.length + 1);
  out.push(['Por responsable', 'Donaciones', '', 'USD']);
  ordenResp.forEach(function (k) { out.push([k, porResp[k].count, '', redondear2_(porResp[k].usd)]); });

  var catsEg = agruparEgresos_(egresos);
  ensureCategorias_(catsEg.map(function (c) { return c.categoria; }));

  out.push(['', '', '', '']);
  negras.push(out.length + 1);
  out.push(['EGRESOS POR CATEGORÍA (USD)', '', '', '']);
  catsEg.forEach(function (cat) {
    negras.push(out.length + 1);
    out.push([cat.categoria, '', '', redondear2_(cat.total)]);
    cat.items.forEach(function (it) { out.push(['   ' + it.concepto, '', '', redondear2_(it.monto)]); });
  });
  negras.push(out.length + 1);
  out.push(['Total egresos', '', '', redondear2_(totalEgresos)]);

  out.push(['', '', '', '']);
  negras.push(out.length + 1);
  out.push(['SALDO DISPONIBLE (recaudado − egresos)', '', '', redondear2_(saldo)]);

  out.push(['', '', '', '']);
  negras.push(out.length + 1);
  out.push(['Tasa ACTUAL (el historial se aplica por fecha, hoja Tasas)', '', '', '']);
  out.push(['Pesos (ARS) por 1 USD', tasas.arsPorUsd, '', '']);
  out.push(['Bolívares (Bs) por 1 USD', tasas.bsPorUsd, '', '']);
  out.push(['USD por 1 EUR', tasas.usdPorEur, '', '']);

  out.push(['', '', '', '']);
  out.push(['Total de donaciones registradas', movs.length, '', '']);

  hojaR.getRange(1, 1, out.length, 4).setValues(out);
  hojaR.getRange(1, 1, 1, 4).merge().setFontSize(16).setFontWeight('bold').setBackground('#1c2541').setFontColor('#ffffff');
  negras.forEach(function (f) {
    hojaR.getRange(f, 1, 1, 4).setFontWeight('bold').setBackground('#3a506b').setFontColor('#ffffff');
  });
  hojaR.autoResizeColumns(1, 4);

  try { CacheService.getScriptCache().remove('datosJson'); } catch (err) {} // refresca la web al instante
  ss.toast('Resumen actualizado: ' + movs.length + ' donaciones. ≈ USD ' + redondear2_(totalUSD), '✅ Listo', 5);
  return { ok: true, total: movs.length, totalUSD: totalUSD };
}

// ------------------------------------------------------------------
//  API: doGet (JSONP para Netlify)
// ------------------------------------------------------------------
function doGet(e) {
  var json = obtenerJsonCacheado_();
  var cb = e && e.parameter && e.parameter.callback;
  if (cb) {
    return ContentService.createTextOutput(cb + '(' + json + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

// Devuelve el JSON desde caché (rápido). Si no hay, lo calcula y lo guarda 2 minutos.
function obtenerJsonCacheado_() {
  var cache = CacheService.getScriptCache();
  var hit = cache.get('datosJson');
  if (hit) return hit;
  var json = JSON.stringify(getDatosPublicos());
  try { cache.put('datosJson', json, 120); } catch (err) { /* si excede tamaño, se ignora */ }
  return json;
}

function getDatosPublicos() {
  var movs = leerMovimientos_();
  var hist = leerTasasHistorial_();
  var tasas = tasaActual_(hist);   // tasa más reciente (para la nota de la web)

  var porMoneda = {}, totalUSD = 0;
  var setMet = {}, metodosPago = [];
  movs.forEach(function (m) {
    var u = aUSD_(m.moneda, m.monto, tasaEn_(hist, m.fecha));
    if (!porMoneda[m.moneda]) porMoneda[m.moneda] = { moneda: m.moneda, simbolo: m.simbolo, count: 0, total: 0, usd: 0 };
    porMoneda[m.moneda].count++; porMoneda[m.moneda].total += m.monto; porMoneda[m.moneda].usd += u;
    totalUSD += u;
    if (!setMet[m.metodo]) { setMet[m.metodo] = true; metodosPago.push(m.metodo); }
  });
  Object.keys(porMoneda).forEach(function (mon) { porMoneda[mon].usd = redondear2_(porMoneda[mon].usd); });
  metodosPago.sort();

  var egresos = leerEgresos_(hist);
  var totalEgresos = 0;
  egresos.forEach(function (e) { totalEgresos += e.monto; });
  var egPorCat = agruparEgresos_(egresos);
  var descMap = leerDescCategorias_();
  egPorCat.forEach(function (c) {
    var info = descMap[c.categoria.toLowerCase()] || {};
    c.descripcion = info.desc || '';
    c.categoriaEN = info.nombreEN || '';
    c.descripcionEN = info.descEN || '';
    c.pct = totalEgresos > 0 ? Math.round((c.total / totalEgresos) * 1000) / 10 : 0; // 1 decimal
  });

  var cfg = leerConfig_();

  return {
    actualizado: new Date().toLocaleString('es-AR'),
    totalDonaciones: movs.length,
    totalUSD: redondear2_(totalUSD),
    totalEgresos: redondear2_(totalEgresos),
    saldo: redondear2_(totalUSD - totalEgresos),
    egresosPorCategoria: egPorCat,
    invertidoPorProyecto: agruparPorProyecto_(egresos),
    tasas: tasas,
    porMoneda: Object.keys(porMoneda).map(function (k) { return porMoneda[k]; }),
    metodosPago: metodosPago,
    metodosDonacion: leerMetodos_(),
    movimientos: movs,
    enlaceFacturas: (cfg['enlace_facturas'] || {}).es || '',
    enlaceFotos: (cfg['enlace_fotos'] || {}).es || '',
    tagline: (cfg['tagline'] || {}).es || '',
    taglineEn: (cfg['tagline'] || {}).en || '',
    misionTitEs: (cfg['mision_titulo'] || {}).es || '',
    misionTitEn: (cfg['mision_titulo'] || {}).en || '',
    misionEs: (cfg['mision'] || {}).es || '',
    misionEn: (cfg['mision'] || {}).en || '',
    proyectos: leerProyectos_(),
  };
}