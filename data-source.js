/* Conector con el Apps Script de NEXOS.
   Pega aquí la URL del deployment (.../exec) y la página usa datos reales;
   si queda vacía, se muestran los datos de ejemplo de data.js.
   El script expone doGet con soporte JSONP (?callback=), así que no hace falta CORS. */
window.NEXOS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyKLVJVc4mT39F_xOuCSrjFfnIICHVYNQHpMTMlk9HxT8yg6KwwB6WLInSqY_QMsZg/exec';

(function () {
  const nf = function (n, dec) {
    return Number(n || 0).toLocaleString('es-AR', { minimumFractionDigits: dec == null ? 2 : dec, maximumFractionDigits: dec == null ? 2 : dec });
  };

  /* Textos editables de la hoja Config: acepta filas [{clave, es, en}] o un objeto
     { "quienes.titulo": {es, en} }. Devuelve siempre el objeto indexado por clave. */
  const normTextos = function (t) {
    if (!t) return null;
    if (Array.isArray(t)) {
      const o = {};
      t.forEach(function (r) {
        const k = String(r.clave || r.key || r.id || '').trim();
        if (k) o[k] = { es: r.es || r.ES || r.valor || '', en: r.en || r.EN || '' };
      });
      return Object.keys(o).length ? o : null;
    }
    return typeof t === 'object' ? t : null;
  };

  /* Normaliza la respuesta de getDatosPublicos() a la forma que consumen los componentes
     (montos ya formateados como texto es-AR). */
  window.nexosNormalizar = function (d) {
    const t = d.tasas || {};
    return {
      actualizado: d.actualizado || '',
      mision: d.misionEs || '',
      misionEn: d.misionEn || '',
      misionTitulo: d.misionTitEs || 'Nuestra misión',
      tagline: d.tagline || '',
      taglineEn: d.taglineEn || '',
      totalUSD: nf(d.totalUSD),
      totalEgresos: nf(d.totalEgresos),
      saldo: nf(d.saldo),
      totalDonaciones: d.totalDonaciones || 0,
      notaTasas: 'Conversión estimada · ARS ' + nf(t.arsPorUsd) + '/USD · Bs ' + nf(t.bsPorUsd) + '/USD · EUR×' + nf(t.usdPorEur, 3) + ' · USD y USDT 1:1',
      porMoneda: (d.porMoneda || []).map(function (m) {
        return { simbolo: m.simbolo, moneda: m.moneda, total: nf(m.total), count: m.count, usd: m.moneda === 'USD' || m.moneda === 'USDT' ? '' : nf(m.usd) };
      }),
      metodos: d.metodosPago || [],
      movimientos: (d.movimientos || []).map(function (m) {
        return { donante: m.donante, metodo: m.metodo, monto: nf(m.monto), simbolo: m.simbolo, moneda: m.moneda, responsable: m.responsable };
      }),
      egresos: (d.egresosPorCategoria || []).map(function (c) {
        return {
          categoria: c.categoria, descripcion: c.descripcion || '', total: nf(c.total), pct: String(c.pct).replace('.', ','),
          items: (c.items || []).map(function (it) { return { concepto: it.concepto, monto: nf(it.monto) }; })
        };
      }),
      textos: normTextos(d.textos || d.config || d.secciones),
      metodosDonacion: d.metodosDonacion || [],
      enlaceFacturas: d.enlaceFacturas || '',
      enlaceFotos: d.enlaceFotos || ''
    };
  };

  /* Carga vía JSONP y vuelve a renderizar. window.__nexosRender lo define cada página. */
  window.nexosCargar = function () {
    const url = window.NEXOS_ENDPOINT;
    if (!url) return;
    const cb = 'nexosCb_' + Date.now();
    window[cb] = function (data) {
      try {
        window.NEXOS_FIXTURE = window.nexosNormalizar(data);
        if (typeof window.__nexosRender === 'function') window.__nexosRender();
      } catch (err) { console.error('NEXOS: respuesta inesperada', err); }
      delete window[cb];
    };
    const s = document.createElement('script');
    s.src = url + (url.indexOf('?') > -1 ? '&' : '?') + 'callback=' + cb;
    s.onerror = function () { console.error('NEXOS: no se pudo leer ' + url + ' — revisa que el deployment sea "Cualquiera con el enlace".'); };
    document.head.appendChild(s);
  };

  document.addEventListener('DOMContentLoaded', window.nexosCargar);
})();
