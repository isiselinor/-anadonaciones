/* PROYECTOS: sección de la portada (tarjetas) + página completa de cada proyecto.
   Los datos vienen de window.nexosProyectos(lang) (proyectos-data.js). */
const NSPR = window.NEXOSDesignSystem_0519e6;

const PR_UI = {
  ES: {
    eyebrow: 'Proyectos', titulo: 'Lo que tu ayuda está construyendo',
    lead: 'Cada proyecto muestra cuánto necesita, cuánto llevamos y en qué se usa cada dólar.',
    verProyecto: 'Ver proyecto →', de: 'de', meta: 'meta', volver: '← Volver',
    llevamos: 'Llevamos recaudado', deMeta: 'de una meta de', avance: 'Avance', falta: 'Falta',
    actualizado: 'Actualizado', donarProyecto: 'Donar a este proyecto', buscaNombre: '¿Ya donaste? Busca tu nombre →',
    estRecien: 'Recién empezamos', estAbierta: 'Recaudación abierta', estMeta: 'Meta alcanzada',
    loQuePaso: 'Lo que pasó',
    procesoTit: 'El proceso, paso a paso', procesoSub: 'Toca cada etapa para ver qué pasa, quién lo hace y qué vas a poder ver.',
    etapa: 'Etapa', deN: 'de', hecho: 'Hecho', aqui: 'Estamos aquí', proximo: 'Próximo', quien: 'Quién', veras: 'Lo que vas a ver',
    fotosTit: 'Fotos del proyecto', fotosSub: 'Del daño a la reparación. Toca una foto para verla en grande.',
    pronto: 'Muy pronto', prontoTxt: 'Estamos tomando las fotos de esta etapa. Las vas a ver aquí.',
    cerrar: 'Cerrar', anterior: 'Foto anterior', siguiente: 'Foto siguiente',
    repartoTit: 'Cómo se reparte lo recaudado', repartoSub: 'El dinero cubre primero lo más urgente y después lo siguiente. Así ves qué parte ya está cubierta y cuál falta.',
    cubierto: 'Cubierto', cubriendo: 'Cubriéndose', pendiente: 'Pendiente',
    kitsTit: '¿Qué necesita cada músico?', kitsSub: 'Elige un instrumento y mira qué incluye su kit. Cualquier aporte suma: entre varios completamos cada kit.',
    kitCuesta: 'Un kit cuesta', porMusico: 'por músico, precio de referencia', incluye: 'Incluye', aportarKit: 'Aportar a este kit',
    cualquierMonto: 'Cualquier monto suma. No necesitas cubrir el kit completo.',
    kitsNota: 'Precios de referencia calculados con el listado de los músicos de la orquesta (medias de mercado).',
    aportarTit: '¿Cómo aportar?', enlacePronto: 'Enlace disponible pronto',
    aliados: 'Aliados', beneficiarios: 'Beneficiarios', junto: 'Junto a'
  },
  EN: {
    eyebrow: 'Projects', titulo: 'What your help is building',
    lead: 'Each project shows what it needs, how far we are and where every dollar goes.',
    verProyecto: 'See project →', de: 'of', meta: 'goal', volver: '← Back',
    llevamos: 'Raised so far', deMeta: 'of a goal of', avance: 'Progress', falta: 'To go',
    actualizado: 'Updated', donarProyecto: 'Donate to this project', buscaNombre: 'Already donated? Find your name →',
    estRecien: 'Just getting started', estAbierta: 'Fundraising open', estMeta: 'Goal reached',
    loQuePaso: 'What happened',
    procesoTit: 'The process, step by step', procesoSub: 'Tap each stage to see what happens, who does it and what you will be able to see.',
    etapa: 'Stage', deN: 'of', hecho: 'Done', aqui: 'We are here', proximo: 'Next', quien: 'Who', veras: 'What you will see',
    fotosTit: 'Project photos', fotosSub: 'From damage to repair. Tap a photo to enlarge it.',
    pronto: 'Coming soon', prontoTxt: 'We are taking the photos for this stage. You will see them here.',
    cerrar: 'Close', anterior: 'Previous photo', siguiente: 'Next photo',
    repartoTit: 'How the money is allocated', repartoSub: 'Funds cover the most urgent needs first, then the next ones. You can see what is already covered and what is missing.',
    cubierto: 'Covered', cubriendo: 'In progress', pendiente: 'Pending',
    kitsTit: 'What does each musician need?', kitsSub: 'Pick an instrument to see what its kit includes. Every donation counts: together we complete each kit.',
    kitCuesta: 'A kit costs', porMusico: 'per musician, reference price', incluye: 'Includes', aportarKit: 'Give to this kit',
    cualquierMonto: 'Any amount helps. You don’t need to cover a whole kit.',
    kitsNota: 'Reference prices based on the orchestra musicians’ own list (market averages).',
    aportarTit: 'How to give', enlacePronto: 'Link coming soon',
    aliados: 'Partners', beneficiarios: 'Beneficiaries', junto: 'With'
  }
};

function prFmt(n, lang) {
  const v = Math.round(Number(n) || 0);
  return lang === 'EN' ? v.toLocaleString('en-US') : String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const PR = {
  wrap: { maxWidth: 1180, margin: '0 auto', padding: '0 24px' },
  eyebrow: { fontSize: 11, fontWeight: 800, letterSpacing: 1.4, textTransform: 'uppercase', color: 'var(--muted)' },
  h2: { fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, letterSpacing: '-.6px', lineHeight: 1.15, margin: 0, color: 'var(--ink)', textWrap: 'balance' },
  sub: { fontSize: 16, lineHeight: 1.6, color: 'var(--muted)', margin: '8px 0 0', maxWidth: 660 },
  chip: { display: 'inline-block', fontSize: 12, fontWeight: 700, borderRadius: 999, padding: '5px 11px' },
  card: { background: '#fff', border: '1px solid var(--line)', borderRadius: 22 },
  pill: function (on) { return { border: '1.5px solid ' + (on ? 'var(--blue)' : 'var(--line)'), background: on ? 'var(--blue)' : '#fff', color: on ? '#fff' : 'var(--ink)', borderRadius: 999, padding: '0 18px', minHeight: 44, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }; },
  ghost: { border: '1.5px solid var(--blue)', color: 'var(--blue)', background: '#fff', fontWeight: 700, borderRadius: 999, padding: '0 20px', minHeight: 44, fontSize: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', alignSelf: 'flex-start' },
  coral: { background: 'var(--accent)', color: '#fff', fontWeight: 800, borderRadius: 999, padding: '0 24px', minHeight: 46, fontSize: 15, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', boxShadow: 'var(--shadow-cta)' }
};
const PR_ST = {
  hecho: { bg: 'var(--ink)', fg: '#fff' },
  curso: { bg: 'color-mix(in oklab, var(--blue) 12%, white)', fg: 'var(--blue)' },
  prox: { bg: '#eef0f5', fg: '#4a5170' }
};

function PrBar({ pct, h, color }) {
  return (<div style={{ height: h || 10, borderRadius: 999, background: 'color-mix(in oklab, var(--blue) 12%, white)', overflow: 'hidden' }}>
    <div style={{ height: '100%', width: Math.max(0, Math.min(100, pct)) + '%', background: color || 'var(--blue)', borderRadius: 999, transition: 'width .4s' }}></div>
  </div>);
}

/* ---------- Sección de la portada ---------- */
function ProyectosSection({ lang, onOpen }) {
  const u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  const lista = window.nexosProyectos(lang);
  if (!lista.length) return null;
  return (
    <section id="proyectos" style={{ padding: 'clamp(56px,8vw,96px) 0', background: 'var(--soft)' }}>
      <div style={PR.wrap}>
        <div style={{ ...PR.eyebrow, color: 'var(--accent)' }}>{u.eyebrow}</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.05, margin: '10px 0 0', color: 'var(--ink)' }}>{u.titulo}</h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 620, margin: '14px 0 0' }}>{u.lead}</p>
        <div style={{ marginTop: 34, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
          {lista.map(function (p) {
            const pct = p.meta ? p.recaudado / p.meta * 100 : 0;
            return (
              <a key={p.id} href={'#p-' + p.id} onClick={function (e) { e.preventDefault(); onOpen(p.id); }} className="opener"
                style={{ ...PR.card, overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'var(--ink)', boxShadow: 'var(--shadow-card)' }}>
                {p.foto ? <img src={p.foto} alt="" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                  : <div style={{ aspectRatio: '4/3', background: 'var(--peach)' }}></div>}
                <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {p.estado ? <span style={{ ...PR.chip, ...{ background: PR_ST.curso.bg, color: PR_ST.curso.fg }, alignSelf: 'flex-start' }}>{p.estado}</span> : null}
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700 }}>{p.nombre}</div>
                  {p.lema ? <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>{p.lema}</div> : null}
                  {p.meta ? <React.Fragment>
                    <PrBar pct={pct} h={8} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>
                      <span><b style={{ color: 'var(--blue)' }}>US$ {prFmt(p.recaudado, lang)}</b> {u.de} US$ {prFmt(p.meta, lang)}</span>
                      <span style={{ color: 'var(--muted)' }}>{Math.round(pct)}%</span>
                    </div>
                  </React.Fragment> : null}
                  <span style={{ marginTop: 'auto', paddingTop: 4, color: 'var(--accent)', fontWeight: 800, fontSize: 14 }}>{u.verProyecto}</span>
                </div>
              </a>);
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Página completa del proyecto ---------- */
function ProyectoPage({ id, lang, onClose, onDonate }) {
  const L = lang === 'EN' ? 'EN' : 'ES';
  const u = PR_UI[L];
  const scroller = React.useRef(null);
  const [fase, setFase] = React.useState(null);
  const [gtab, setGtab] = React.useState(0);
  const [lb, setLb] = React.useState(null);
  const [kit, setKit] = React.useState(0);

  React.useEffect(function () {
    if (!id) return;
    setFase(null); setGtab(0); setLb(null); setKit(0);
    function k(e) { if (e.key === 'Escape') { if (lb !== null) setLb(null); else onClose(); } }
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (scroller.current) scroller.current.scrollTop = 0;
    return function () { document.removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [id]);

  if (!id) return null;
  const p = window.nexosProyectos(lang).filter(function (x) { return x.id === id; })[0];
  if (!p) return null;

  const meta = p.meta || 0, rec = Math.min(p.recaudado, meta || p.recaudado);
  const pct = meta ? rec / meta * 100 : 0;
  const estadoRec = meta && rec >= meta ? u.estMeta : rec > 0 ? u.estAbierta : u.estRecien;
  const eyebrow = [p.ubicacion, p.aliados.length ? (u.junto + ' ' + p.aliados.map(function (a) { return a.nombre; }).join(', ')) : ''].filter(Boolean).join(' · ');

  // Etapas
  const nE = p.etapas.length;
  const actual = Math.min(Math.max(p.etapaActual - 1, 0), Math.max(nE - 1, 0));
  const selF = fase === null ? actual : fase;
  const etapaInfo = function (i) { return i < actual ? ['hecho', u.hecho] : i === actual ? ['curso', u.aqui] : ['prox', u.proximo]; };
  const act = p.etapas[selF];

  // Gastos: se cubren en orden
  let resto = rec;
  const gastos = p.gastos.map(function (g) {
    const cub = Math.max(0, Math.min(g.monto, resto)); resto -= cub;
    const st = cub >= g.monto && g.monto > 0 ? ['hecho', u.cubierto] : cub > 0 ? ['curso', u.cubriendo] : ['prox', u.pendiente];
    return Object.assign({}, g, { cub: cub, st: st });
  });

  // Galería
  const grupos = [];
  p.fotos.forEach(function (f) { if (grupos.indexOf(f.grupo) === -1) grupos.push(f.grupo); });
  const gi = Math.min(gtab, Math.max(grupos.length - 1, 0));
  const fotosTab = p.fotos.filter(function (f) { return f.grupo === grupos[gi]; });

  const irABuscador = function (e) {
    e.preventDefault(); onClose();
    setTimeout(function () { const el = document.getElementById('reporte'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 60);
  };
  const tile = { background: 'color-mix(in oklab, var(--blue) 6%, white)', borderRadius: 12, padding: '12px 14px' };

  return (
    <div className="sp-root" ref={scroller} role="dialog" aria-modal="true" aria-label={p.nombre}
      style={{ position: 'fixed', inset: 0, zIndex: 35, background: '#fff', overflow: 'auto' }}>
      {/* barra superior */}
      <div style={{ position: 'sticky', top: 0, zIndex: 3, background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ ...PR.wrap, height: 60, display: 'flex', alignItems: 'center', gap: 14 }}>
          <a href="#top" onClick={function (e) { e.preventDefault(); onClose(); }} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', minWidth: 0 }}>
            <img src="logo-nexos-mark.png" alt="NEXOS" style={{ height: 26 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.nombre}</span>
          </a>
          <button onClick={onClose} style={{ marginLeft: 'auto', background: 'none', border: '1px solid var(--line)', borderRadius: 999, padding: '8px 16px', fontSize: 13, fontWeight: 700, color: 'var(--ink)', cursor: 'pointer', whiteSpace: 'nowrap' }}>{u.volver}</button>
        </div>
      </div>

      {/* portada */}
      <header style={{ background: 'var(--peach)' }}>
        <div style={{ ...PR.wrap, padding: 'clamp(28px,5vw,48px) 24px', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
          <div style={{ flex: '999 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {eyebrow ? <span style={{ ...PR.eyebrow, color: 'var(--ink)' }}>{eyebrow}</span> : null}
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-1.6px', fontSize: 'clamp(38px,6vw,64px)', margin: 0, lineHeight: 1.02, color: 'var(--ink)' }}>{p.nombre}</h1>
            {p.lema ? <p style={{ margin: 0, fontSize: 'clamp(19px,2.4vw,24px)', lineHeight: 1.3, fontWeight: 700, color: 'var(--accent)' }}>{p.lema}</p> : null}
            {p.resumen ? <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, maxWidth: 600, color: 'var(--ink)' }}>{p.resumen}</p> : null}
          </div>
          {meta ? (
            <div style={{ flex: '1 1 320px', minWidth: 0, background: '#fff', borderRadius: 22, padding: 24, display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 10px 30px rgba(28,35,64,.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ ...PR.chip, background: PR_ST.curso.bg, color: PR_ST.curso.fg }}>{estadoRec}</span>
                {p.actualizado ? <span style={{ fontSize: 12, color: 'var(--muted)' }}>{u.actualizado} {p.actualizado}</span> : null}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{u.llevamos}</span>
                <span style={{ fontSize: 40, fontWeight: 800, color: 'var(--blue)', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>US$ {prFmt(rec, lang)}</span>
                <span style={{ fontSize: 15 }}>{u.deMeta} <b>US$ {prFmt(meta, lang)}</b></span>
              </div>
              <PrBar pct={pct} h={12} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 10 }}>
                <div style={tile}><div style={{ fontSize: 12, color: 'var(--muted)' }}>{u.avance}</div><b style={{ fontSize: 20, fontVariantNumeric: 'tabular-nums' }}>{Math.round(pct)}%</b></div>
                <div style={tile}><div style={{ fontSize: 12, color: 'var(--muted)' }}>{u.falta}</div><b style={{ fontSize: 20, color: 'var(--blue)', fontVariantNumeric: 'tabular-nums' }}>US$ {prFmt(Math.max(meta - rec, 0), lang)}</b></div>
              </div>
              <button onClick={onDonate} style={PR.coral}>{u.donarProyecto}</button>
              <a href="#reporte" onClick={irABuscador} style={{ fontSize: 14, fontWeight: 700 }}>{u.buscaNombre}</a>
            </div>) : null}
        </div>
      </header>

      {/* lo que pasó + cifras */}
      {(p.historia.length || p.cifras.length) ? (
        <section style={{ ...PR.wrap, padding: 'clamp(40px,6vw,56px) 24px 12px', display: 'flex', flexWrap: 'wrap', gap: '32px 48px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={PR.eyebrow}>{u.loQuePaso}</span>
            {p.historia.map(function (t, i) { return <p key={i} style={{ margin: 0, fontSize: 19, lineHeight: 1.7, color: 'var(--ink)' }}>{t}</p>; })}
            {p.destacado ? <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, fontWeight: 700, color: 'var(--accent)' }}>{p.destacado}</p> : null}
          </div>
          {p.cifras.length ? (
            <div style={{ flex: '1 1 440px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 12 }}>
              {p.cifras.map(function (c, i) {
                return (<div key={i} style={{ background: 'color-mix(in oklab, var(--blue) 6%, white)', borderRadius: 18, padding: 22, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
                  <b style={{ fontSize: 46, lineHeight: 1, fontWeight: 800, color: 'var(--blue)', fontVariantNumeric: 'tabular-nums' }}>{c.n}</b>
                  <span style={{ fontSize: 14, lineHeight: 1.45, color: 'var(--ink)' }}>{c.texto}</span>
                </div>);
              })}
            </div>) : null}
        </section>) : null}

      {/* proceso */}
      {nE ? (
        <section style={{ ...PR.wrap, padding: 'clamp(40px,6vw,56px) 24px', display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div><h2 style={PR.h2}>{u.procesoTit}</h2><p style={PR.sub}>{u.procesoSub}</p></div>
          <div style={{ overflowX: 'auto', padding: '12px 8px 8px' }}>
            <div style={{ position: 'relative', display: 'flex', gap: 8, minWidth: Math.max(nE * 128, 320) }}>
              {nE > 1 ? <div style={{ position: 'absolute', left: (50 / nE) + '%', width: ((nE - 1) * 100 / nE) + '%', top: 25, height: 4, background: 'var(--line)', borderRadius: 999 }}></div> : null}
              {nE > 1 ? <div style={{ position: 'absolute', left: (50 / nE) + '%', width: (actual * 100 / nE) + '%', top: 25, height: 4, background: 'var(--blue)', borderRadius: 999 }}></div> : null}
              {p.etapas.map(function (e, i) {
                const st = etapaInfo(i)[0]; const on = i === selF;
                return (
                  <button key={i} type="button" aria-pressed={on} onClick={function () { setFase(i); }}
                    style={{ flex: '1 1 0', minWidth: 120, border: 0, background: 'none', padding: 0, fontFamily: 'inherit', color: 'var(--ink)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center', position: 'relative' }}>
                    <span style={{ width: 52, height: 52, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, boxSizing: 'border-box',
                      background: st === 'hecho' ? 'var(--ink)' : st === 'curso' ? 'var(--blue)' : '#fff', color: st === 'prox' ? 'var(--muted)' : '#fff',
                      border: st === 'prox' ? '2px solid var(--line)' : '0', boxShadow: on ? '0 0 0 5px var(--peach)' : 'none' }}>{i + 1}</span>
                    <b style={{ fontSize: 15 }}>{e.titulo}</b>
                    <span style={{ fontSize: 12, fontWeight: 700, color: st === 'curso' ? 'var(--blue)' : 'var(--muted)' }}>{etapaInfo(i)[1]}</span>
                  </button>);
              })}
            </div>
          </div>
          {act ? (
            <div style={{ border: '1px solid var(--line)', borderRadius: 22, padding: 28, display: 'flex', flexWrap: 'wrap', gap: 28, background: 'var(--soft)' }}>
              <div style={{ flex: '2 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)' }}>{u.etapa.toUpperCase()} {selF + 1} {u.deN.toUpperCase()} {nE}</span>
                  <span style={{ ...PR.chip, background: PR_ST[etapaInfo(selF)[0]].bg, color: PR_ST[etapaInfo(selF)[0]].fg }}>{etapaInfo(selF)[1]}</span>
                </div>
                <b style={{ fontSize: 24 }}>{act.titulo}</b>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65 }}>{act.texto}</p>
              </div>
              <div style={{ flex: '1 1 260px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {act.quien ? <div><div style={{ ...PR.eyebrow, letterSpacing: 1 }}>{u.quien}</div><div style={{ fontSize: 15, paddingTop: 4 }}>{act.quien}</div></div> : null}
                {act.evidencia.length ? <div><div style={{ ...PR.eyebrow, letterSpacing: 1 }}>{u.veras}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 8 }}>
                    {act.evidencia.map(function (ev, j) { return <span key={j} style={{ fontSize: 13, border: '1px solid var(--blue-lt)', borderRadius: 999, padding: '6px 12px', background: '#fff' }}>{ev}</span>; })}
                  </div></div> : null}
                {act.enlace ? <a href={act.enlace} target="_blank" rel="noopener" style={{ fontSize: 14, fontWeight: 700 }}>{act.evidencia[0] || act.enlace} →</a> : null}
              </div>
            </div>) : null}
        </section>) : null}

      {/* fotos */}
      {p.fotos.length ? (
        <section style={{ ...PR.wrap, padding: '12px 24px clamp(40px,6vw,56px)', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '14px 24px' }}>
            <div><h2 style={PR.h2}>{u.fotosTit}</h2><p style={PR.sub}>{u.fotosSub}</p></div>
            {grupos.length > 1 ? <div role="tablist" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {grupos.map(function (g, i) {
                const n = p.fotos.filter(function (f) { return f.grupo === g; }).length;
                return <button key={g} role="tab" aria-selected={i === gi} onClick={function () { setGtab(i); setLb(null); }} style={PR.pill(i === gi)}>{g} · {n}</button>;
              })}
            </div> : null}
          </div>
          {fotosTab.length ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 12 }}>
              {fotosTab.map(function (f, i) {
                return (<button key={f.src} onClick={function () { setLb(i); }} className="zoomable" aria-label={f.pie}
                  style={{ border: 0, padding: 0, background: 'none', cursor: 'zoom-in', textAlign: 'left', fontFamily: 'inherit', color: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <img src={f.src} alt={f.pie} loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
                  <span style={{ fontSize: 14, lineHeight: 1.4 }}>{f.pie}</span>
                </button>);
              })}
            </div>) : (
            <div style={{ border: '1.5px dashed var(--blue-lt)', background: 'var(--soft)', borderRadius: 18, padding: '40px 24px', textAlign: 'center' }}>
              <b style={{ fontSize: 18 }}>{u.pronto}</b>
              <div style={{ fontSize: 15, color: 'var(--muted)', marginTop: 6 }}>{u.prontoTxt}</div>
            </div>)}
          {lb !== null && fotosTab[lb] ? (
            <div className="lb-root" role="dialog" aria-modal="true" onClick={function (e) { if (e.target === e.currentTarget) setLb(null); }}
              style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(28,35,64,.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 24 }}>
              <img className="lb-img" src={fotosTab[lb].src} alt={fotosTab[lb].pie} style={{ maxWidth: '100%', maxHeight: '74vh', objectFit: 'contain', borderRadius: 12 }} />
              <span style={{ color: '#fff', fontSize: 15, textAlign: 'center' }}>{fotosTab[lb].pie} · {lb + 1} / {fotosTab.length}</span>
              <div style={{ display: 'flex', gap: 10 }}>
                <button aria-label={u.anterior} onClick={function () { setLb((lb - 1 + fotosTab.length) % fotosTab.length); }} style={PR.pill(false)}>←</button>
                <button onClick={function () { setLb(null); }} style={PR.pill(false)}>{u.cerrar}</button>
                <button aria-label={u.siguiente} onClick={function () { setLb((lb + 1) % fotosTab.length); }} style={PR.pill(false)}>→</button>
              </div>
            </div>) : null}
        </section>) : null}

      {/* reparto */}
      {gastos.length ? (
        <section style={{ background: 'var(--soft)' }}>
          <div style={{ ...PR.wrap, padding: 'clamp(40px,6vw,56px) 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div><h2 style={PR.h2}>{u.repartoTit}</h2><p style={PR.sub}>{u.repartoSub}</p></div>
            <div style={{ ...PR.card, padding: '8px 26px' }}>
              {gastos.map(function (g, i) {
                return (<div key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: '8px 16px', padding: '18px 0', borderBottom: i < gastos.length - 1 ? '1px solid var(--line)' : '0', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 700 }}>{i + 1}</span>
                      <b style={{ fontSize: 17 }}>{g.titulo}</b>
                      <span style={{ ...PR.chip, background: PR_ST[g.st[0]].bg, color: PR_ST[g.st[0]].fg }}>{g.st[1]}</span>
                    </div>
                    {g.texto ? <span style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--muted)' }}>{g.texto}</span> : null}
                  </div>
                  <span style={{ fontSize: 15, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}><b style={{ color: 'var(--blue)' }}>US$ {prFmt(g.cub, lang)}</b> {u.de} US$ {prFmt(g.monto, lang)}</span>
                  <div style={{ gridColumn: '1 / -1' }}><PrBar pct={g.monto ? g.cub / g.monto * 100 : 0} h={10} /></div>
                </div>);
              })}
            </div>
            {p.notaPresupuesto ? <span style={{ fontSize: 13, color: 'var(--muted)' }}>{p.notaPresupuesto}</span> : null}
          </div>
        </section>) : null}

      {/* kits */}
      {p.kits.length ? (
        <section style={{ ...PR.wrap, padding: 'clamp(40px,6vw,56px) 24px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div><h2 style={PR.h2}>{u.kitsTit}</h2><p style={PR.sub}>{u.kitsSub}</p></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {p.kits.map(function (k, i) { return <button key={i} aria-pressed={i === kit} onClick={function () { setKit(i); }} style={PR.pill(i === kit)}>{k.titulo}</button>; })}
          </div>
          {p.kits[kit] ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', borderRadius: 22, overflow: 'hidden', border: '1px solid var(--line)' }}>
              <div style={{ flex: '1 1 280px', minWidth: 0, background: 'var(--ink)', color: '#fff', padding: 30, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ ...PR.eyebrow, color: 'var(--blue-lt)' }}>{u.kitCuesta}</span>
                <span style={{ fontSize: 40, fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>US$ {p.kits[kit].precio}</span>
                <span style={{ fontSize: 15 }}>{p.kits[kit].instrumentos}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,.72)' }}>{u.porMusico}</span>
              </div>
              <div style={{ flex: '2 1 380px', minWidth: 0, padding: 30, display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
                <b style={{ fontSize: 16 }}>{u.incluye}</b>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>{p.kits[kit].texto}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', paddingTop: 4 }}>
                  <button onClick={onDonate} style={PR.coral}>{u.aportarKit}</button>
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--muted)', maxWidth: 300 }}>{u.cualquierMonto}</span>
                </div>
              </div>
            </div>) : null}
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>{u.kitsNota}</span>
        </section>) : null}

      {/* cómo aportar */}
      {p.aportes.length ? (
        <section style={{ background: 'var(--peach)' }}>
          <div style={{ ...PR.wrap, padding: 'clamp(40px,6vw,52px) 24px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            <h2 style={PR.h2}>{u.aportarTit}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
              {p.aportes.map(function (a, i) {
                const esDonar = a.enlace.toLowerCase() === 'donar';
                return (<div key={i} style={{ ...PR.card, borderRadius: 18, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <b style={{ fontSize: 17 }}>{a.titulo}</b>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--muted)' }}>{a.texto}</p>
                  <div style={{ marginTop: 'auto' }}>
                    {esDonar ? <button onClick={onDonate} style={PR.coral}>{a.boton || u.donarProyecto}</button>
                      : a.enlace ? <a href={a.enlace} target="_blank" rel="noopener" style={PR.ghost}>{(a.boton || a.enlace) + ' →'}</a>
                      : <span style={{ fontSize: 13, color: 'var(--muted)' }}>{u.enlacePronto}</span>}
                  </div>
                </div>);
              })}
            </div>
          </div>
        </section>) : null}

      {/* aliados y beneficiarios */}
      {(p.aliados.length || p.beneficiarios.length) ? (
        <section style={{ ...PR.wrap, padding: '44px 24px', display: 'flex', flexWrap: 'wrap', gap: '24px 40px' }}>
          {[[u.aliados, p.aliados], [u.beneficiarios, p.beneficiarios]].filter(function (g) { return g[1].length; }).map(function (g) {
            return (<div key={g[0]} style={{ flex: '1 1 320px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={PR.eyebrow}>{g[0]}</span>
              {g[1].map(function (o, i) {
                const inner = (<React.Fragment>
                  {o.logo ? <img src={o.logo} alt="" style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 14, flex: 'none' }} />
                    : <span style={{ width: 72, height: 72, borderRadius: 14, flex: 'none', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--muted)' }}>{o.nombre.charAt(0)}</span>}
                  <b style={{ fontSize: 17, lineHeight: 1.35, color: 'var(--ink)' }}>{o.nombre}</b>
                </React.Fragment>);
                return o.enlace
                  ? <a key={i} href={o.enlace} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>{inner}</a>
                  : <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>{inner}</div>;
              })}
            </div>);
          })}
        </section>) : null}

      <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,.75)' }}>
        <div style={{ ...PR.wrap, padding: '28px 24px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', fontSize: 14 }}>
          <span>NEXOS · @somos.nexosve</span>
          <button onClick={onDonate} style={PR.coral}>{u.donarProyecto}</button>
        </div>
      </footer>
    </div>
  );
}

window.ProyectosSection = ProyectosSection;
window.ProyectoPage = ProyectoPage;
