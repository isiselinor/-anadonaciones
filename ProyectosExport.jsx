/* PROYECTOS: sección de la portada (tarjetas) + página completa de cada proyecto.
   Los datos vienen de window.nexosProyectos(lang) (proyectos-data.js). */
const NSPR = window.NEXOSDesignSystem_0519e6;

const PR_UI = {
  ES: {
    eyebrow: 'Proyectos', titulo: 'Lo que tu ayuda está construyendo',
    lead: 'Cada proyecto muestra cuánto necesita, cuánto llevamos y en qué se usa cada dólar.',
    verProyecto: 'Ver proyecto →', todos: '← Todos los proyectos', de: 'de', meta: 'meta', volver: '← Volver',
    llevamos: 'Llevamos recaudado', deMeta: 'de una meta de', avance: 'Avance', falta: 'Falta',
    actualizado: 'Actualizado', donarProyecto: 'Donar a este proyecto', buscaNombre: '¿Ya donaste? Busca tu nombre →',
    estRecien: 'Recién empezamos', estAbierta: 'Recaudación abierta', estMeta: 'Meta alcanzada',
    loQuePaso: 'Lo que pasó',
    procesoTit: 'El proceso, paso a paso', procesoSub: 'Toca cada etapa para ver en qué consiste.',
    etapa: 'Etapa', deN: 'de', hecho: 'Hecho', aqui: 'Estamos aquí', proximo: 'Próximo', quien: 'Quién', veras: 'Lo que vas a ver',
    fotosTit: 'Fotos del proyecto', fotosSub: 'Del daño a la reparación. Toca una foto para verla en grande.',
    pronto: 'Muy pronto', prontoTxt: 'Estamos tomando las fotos de esta etapa. Las vas a ver aquí.',
    cerrar: 'Cerrar', anterior: 'Foto anterior', siguiente: 'Foto siguiente',
    repartoTit: 'Progreso', repartoSub: 'Vamos de lo más urgente a lo menos urgente.', presupuestados: 'presupuestados', donar: 'Donar', enCurso: 'En curso',
    cubierto: 'Cubierto', cubriendo: 'Cubriéndose', pendiente: 'Pendiente',
    kitsTit: '¿Qué necesita cada músico?', kitsSub: 'Elige un instrumento y mira qué incluye su kit.',
    kitCuesta: 'Un kit cuesta', porMusico: 'por músico, precio de referencia', incluye: 'Incluye', aportarKit: 'Aportar a este kit',
    cualquierMonto: 'Cualquier monto suma. No necesitas cubrir el kit completo.',
    kitsNota: 'Precios de referencia calculados con el listado de los músicos de la orquesta (medias de mercado).',
    aportarTit: '¿Cómo aportar?', enlacePronto: 'Enlace disponible pronto',
    aliados: 'Aliados', beneficiarios: 'Beneficiarios', junto: 'Junto a',
    invertido: 'Ya invertido', verCompras: 'Ver en qué →', comprasTit: 'Lo que ya compramos', comprasSub: 'Cada compra sale de nuestra planilla de gastos y tiene su factura.', total: 'Total invertido', verFacturas: 'Ver facturas →',
    enCursoEy: 'En curso', ahoraTit: 'Lo que estamos haciendo ahora', todosLink: 'Todos los proyectos', conoce: 'Conoce el proyecto →',
    invertidos: 'invertidos', cerradosEy: 'Cerrados', cumplimosTit: 'Lo que ya cumplimos', comprasConFactura: 'compras con factura',
    miraTodo: 'Mira todo lo que hicimos →', recorridoTit: 'Nuestro recorrido', loQueViene: 'Lo que viene', proximoProy: 'El próximo proyecto', empiezaAporte: 'Empieza con tu aporte',
    pagEy: 'Proyectos', pagTit1: 'Cada donación', pagTit2: 'se convierte en ', pagTit3: 'un proyecto',
    pagLead: 'Con aliados en terreno decidimos dónde hace más falta. Cada proyecto tiene su meta, sus avances y sus cuentas abiertas.',
    sumateTit: 'Súmate a lo que viene', sumateTxt: 'Tu aporte va al fondo de NEXOS y lo invertimos en los proyectos en curso.',
    filtroTodos: 'Todos', porCategoria: 'En qué se invirtió', compras: 'compras'
  },
  EN: {
    eyebrow: 'Projects', titulo: 'What your help is building',
    lead: 'Each project shows what it needs, how far we are and where every dollar goes.',
    verProyecto: 'See project →', todos: '← All projects', de: 'of', meta: 'goal', volver: '← Back',
    llevamos: 'Raised so far', deMeta: 'of a goal of', avance: 'Progress', falta: 'To go',
    actualizado: 'Updated', donarProyecto: 'Donate to this project', buscaNombre: 'Already donated? Find your name →',
    estRecien: 'Just getting started', estAbierta: 'Fundraising open', estMeta: 'Goal reached',
    loQuePaso: 'What happened',
    procesoTit: 'The process, step by step', procesoSub: 'Tap each stage to see what it involves.',
    etapa: 'Stage', deN: 'of', hecho: 'Done', aqui: 'We are here', proximo: 'Next', quien: 'Who', veras: 'What you will see',
    fotosTit: 'Project photos', fotosSub: 'From damage to repair. Tap a photo to enlarge it.',
    pronto: 'Coming soon', prontoTxt: 'We are taking the photos for this stage. You will see them here.',
    cerrar: 'Close', anterior: 'Previous photo', siguiente: 'Next photo',
    repartoTit: 'Progress', repartoSub: 'We go from the most urgent to the least urgent.', presupuestados: 'budgeted', donar: 'Donate', enCurso: 'In progress',
    cubierto: 'Covered', cubriendo: 'In progress', pendiente: 'Pending',
    kitsTit: 'What does each musician need?', kitsSub: 'Pick an instrument to see what its kit includes.',
    kitCuesta: 'A kit costs', porMusico: 'per musician, reference price', incluye: 'Includes', aportarKit: 'Give to this kit',
    cualquierMonto: 'Any amount helps. You don’t need to cover a whole kit.',
    kitsNota: 'Reference prices based on the orchestra musicians’ own list (market averages).',
    aportarTit: 'How to give', enlacePronto: 'Link coming soon',
    aliados: 'Partners', beneficiarios: 'Beneficiaries', junto: 'With',
    invertido: 'Already invested', verCompras: 'See what →', comprasTit: 'What we have already bought', comprasSub: 'Every purchase comes from our expense sheet and has its invoice.', total: 'Total invested', verFacturas: 'See invoices →',
    enCursoEy: 'In progress', ahoraTit: 'What we are doing right now', todosLink: 'All projects', conoce: 'See the project →',
    invertidos: 'invested', cerradosEy: 'Closed', cumplimosTit: 'What we have already done', comprasConFactura: 'purchases with invoice',
    miraTodo: 'See everything we did →', recorridoTit: 'Our journey', loQueViene: 'What’s next', proximoProy: 'The next project', empiezaAporte: 'Starts with your donation',
    pagEy: 'Projects', pagTit1: 'Every donation', pagTit2: 'becomes ', pagTit3: 'a project',
    pagLead: 'With partners on the ground we decide where help is needed most. Each project has its goal, its progress and its open books.',
    sumateTit: 'Join what’s next', sumateTxt: 'Your donation goes to the NEXOS fund and we invest it in the projects in progress.',
    filtroTodos: 'All', porCategoria: 'Where it was invested', compras: 'purchases'
  }
};

function prCat(nombre, lang) {
  if (lang !== 'EN') return nombre;
  const f = window.NEXOS_FIXTURE; const r = ((f && f.egresosRaw) || []).filter(function (c) { return c.categoria === nombre; })[0];
  return (r && r.categoriaEN) || nombre;
}

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
  curso: { bg: 'color-mix(in oklab, var(--blue-lt) 30%, white)', fg: 'var(--blue)' },
  prox: { bg: '#eef0f5', fg: '#4a5170' }
};

function PrBar({ pct, h, color }) {
  return (<div style={{ height: h || 10, borderRadius: 999, background: 'color-mix(in oklab, var(--blue-lt) 30%, white)', overflow: 'hidden' }}>
    <div style={{ height: '100%', width: Math.max(0, Math.min(100, pct)) + '%', background: color || 'var(--accent)', borderRadius: 999, transition: 'width .4s' }}></div>
  </div>);
}

/* ---------- Tarjetas ---------- */
const PR_TAG = {
  curso: { background: 'var(--ink)', color: 'var(--amber)' },
  pronto: { background: 'var(--ink)', color: 'var(--amber)' },
  cerrado: { background: 'var(--blue-lt)', color: 'var(--ink)' }
};
function prPresupuesto(p) { return p.gastos.reduce(function (a, g) { return a + g.monto; }, 0) || p.meta || 0; }
function prTag(p) { return [p.estado, p.tipo !== 'cerrado' ? p.ubicacion : ''].filter(Boolean).join(' · '); }

function ProyectoCard({ p, lang, onOpen }) {
  const u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  const pres = prPresupuesto(p);
  const pct = pres ? p.gastado / pres * 100 : 0;
  return (
    <a href={'#p-' + p.id} onClick={function (e) { e.preventDefault(); onOpen(p.id); }} className="opener"
      style={{ background: '#fff', border: '1px solid var(--line-strong)', borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'var(--ink)' }}>
      {p.foto ? <img src={p.foto} alt="" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
        : <div style={{ aspectRatio: '16/9', background: 'var(--steel-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--ink)', letterSpacing: 2 }}>{p.nombre.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 3).toUpperCase()}</div>}
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <span style={{ ...PR.chip, ...PR_TAG[p.tipo], alignSelf: 'flex-start' }}>{prTag(p)}</span>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, lineHeight: 1.15 }}>{p.nombre}</div>
        {p.resumen && p.tipo !== 'curso' ? <div style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.55 }}>{p.resumen}</div>
          : p.lema ? <div style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.55 }}>{p.lema}</div> : null}
        {pres ? <PrBar pct={pct} h={10} color="var(--accent)" /> : null}
        {p.gastado ? <span style={{ fontSize: 15, fontVariantNumeric: 'tabular-nums' }}><b>US$ {prFmt(p.gastado, lang)}</b> {u.invertidos}{pres ? ' ' + u.de + ' US$ ' + prFmt(pres, lang) : ''}</span> : null}
        <span style={{ marginTop: 'auto', paddingTop: 4, fontWeight: 700, fontSize: 15 }}>{u.conoce}</span>
      </div>
    </a>);
}

function ZonaCerradaCard({ p, lang, onOpen, grande }) {
  const u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  return (
    <a href={'#p-' + p.id} onClick={function (e) { e.preventDefault(); onOpen(p.id); }} className="opener"
      style={{ background: 'var(--ink)', color: '#fff', borderRadius: 22, overflow: 'hidden', textDecoration: 'none', display: 'flex', flexWrap: 'wrap' }}>
      {grande && p.foto ? <img src={p.foto} alt="" style={{ flex: '1 1 380px', minWidth: 0, maxWidth: '100%', aspectRatio: '16/10', objectFit: 'cover' }} /> : null}
      <div style={{ flex: '1 1 380px', minWidth: 0, padding: grande ? 'clamp(24px,4vw,36px)' : 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ ...PR.chip, ...PR_TAG.cerrado, alignSelf: 'flex-start' }}>{[p.estado, p.ubicacion].filter(Boolean).join(' · ')}</span>
        <b style={{ fontFamily: 'var(--font-display)', fontSize: grande ? 34 : 24, lineHeight: 1.1 }}>{p.nombre}</b>
        <span style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--on-ink-soft)' }}>{grande ? p.resumen : p.lema}</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
          <div><b style={{ fontFamily: 'var(--font-display)', fontSize: grande ? 30 : 24, color: 'var(--amber)', fontVariantNumeric: 'tabular-nums' }}>US$ {prFmt(p.gastado, lang)}</b><div style={{ fontSize: 14, color: 'var(--on-ink-soft)' }}>{u.invertidos}</div></div>
          {grande && p.compras.length ? <div><b style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--amber)' }}>{prFmt(p.compras.length, lang)}</b><div style={{ fontSize: 14, color: 'var(--on-ink-soft)' }}>{u.comprasConFactura}</div></div> : null}
        </div>
        <span style={{ fontSize: 15, fontWeight: 700 }}>{u.miraTodo}</span>
      </div>
    </a>);
}

/* ---------- Inicio: proyectos en curso (máx. 3) ---------- */
function ProyectosSection({ lang, onOpen }) {
  const u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  const activos = window.nexosProyectos(lang).filter(function (p) { return p.tipo !== 'cerrado'; });
  if (!activos.length) return null;
  return (
    <section id="proyectos-inicio" style={{ padding: 'clamp(56px,8vw,80px) 0', background: 'var(--steel-1)' }}>
      <div style={{ ...PR.wrap, display: 'flex', flexDirection: 'column', gap: 26 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
          <div><div style={{ ...PR.eyebrow, color: 'var(--accent-text)' }}>{u.enCursoEy}</div><h2 style={{ ...PR.h2, fontSize: 'clamp(28px,4vw,38px)', marginTop: 10 }}>{u.ahoraTit}</h2></div>
          <a href="#proyectos" style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{u.todosLink + (activos.length > 3 ? ' (' + activos.length + ')' : '') + ' →'}</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
          {activos.slice(0, 3).map(function (p) { return <ProyectoCard key={p.id} p={p} lang={lang} onOpen={onOpen} />; })}
        </div>
      </div>
    </section>);
}

/* ---------- Página Proyectos ---------- */
function ProyectosPagina({ lang, onOpen, onDonate }) {
  const u = PR_UI[lang === 'EN' ? 'EN' : 'ES'];
  const todos = window.nexosProyectos(lang);
  const activos = todos.filter(function (p) { return p.tipo !== 'cerrado'; });
  const cerrados = todos.filter(function (p) { return p.tipo === 'cerrado'; });
  const [filtro, setFiltro] = React.useState('');
  const estados = []; activos.forEach(function (p) { if (estados.indexOf(p.estado) === -1) estados.push(p.estado); });
  const vista = filtro ? activos.filter(function (p) { return p.estado === filtro; }) : activos;
  const hitos = cerrados.concat(activos);
  return (
    <React.Fragment>
      <header style={{ background: 'var(--ink)', color: '#fff' }}>
        <div style={{ ...PR.wrap, paddingTop: 'clamp(48px,8vw,72px)', paddingBottom: 'clamp(44px,7vw,64px)', display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'flex-start' }}>
          <span style={{ ...PR.eyebrow, color: 'var(--amber)' }}>{u.pagEy}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,46px)', lineHeight: 1.08, letterSpacing: '-1px', margin: 0, maxWidth: 860, fontWeight: 700 }}>{u.pagTit1}<br />{u.pagTit2}<span style={{ color: 'var(--amber)', whiteSpace: 'nowrap' }}>{u.pagTit3}</span></h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--on-ink-soft)', maxWidth: 640 }}>{u.pagLead}</p>
        </div>
      </header>

      {activos.length ? (
        <section style={{ background: 'var(--steel-1)', padding: 'clamp(48px,7vw,64px) 0' }}>
          <div style={{ ...PR.wrap, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
              <div><div style={{ ...PR.eyebrow, color: 'var(--accent-text)' }}>{u.enCursoEy}</div><h2 style={{ ...PR.h2, fontSize: 'clamp(26px,3.6vw,34px)', marginTop: 10 }}>{u.ahoraTit}</h2></div>
              {activos.length > 3 && estados.length > 1 ? (
                <div role="group" aria-label={u.filtroTodos} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[''].concat(estados).map(function (e) { return <button key={e || 'todos'} type="button" aria-pressed={filtro === e} onClick={function () { setFiltro(e); }} style={PR.pill(filtro === e)}>{e || u.filtroTodos}</button>; })}
                </div>) : null}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
              {vista.map(function (p) { return <ProyectoCard key={p.id} p={p} lang={lang} onOpen={onOpen} />; })}
            </div>
          </div>
        </section>) : null}

      {cerrados.length ? (
        <section style={{ ...PR.wrap, padding: 'clamp(48px,7vw,64px) 24px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div><div style={{ ...PR.eyebrow, color: 'var(--accent-text)' }}>{u.cerradosEy}</div><h2 style={{ ...PR.h2, fontSize: 'clamp(26px,3.6vw,34px)', marginTop: 10 }}>{u.cumplimosTit}</h2></div>
          {cerrados.length === 1 ? <ZonaCerradaCard p={cerrados[0]} lang={lang} onOpen={onOpen} grande={true} />
            : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
                {cerrados.map(function (p) { return <ZonaCerradaCard key={p.id} p={p} lang={lang} onOpen={onOpen} />; })}
              </div>}
        </section>) : null}

      <section style={{ ...PR.wrap, padding: '32px 24px clamp(56px,8vw,72px)', display: 'flex', flexDirection: 'column', gap: 26 }}>
        <h2 style={{ ...PR.h2, fontSize: 28 }}>{u.recorridoTit}</h2>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', borderTop: '3px solid var(--line-strong)' }}>
          {hitos.concat([null]).map(function (p, i) {
            const color = !p ? null : p.tipo === 'cerrado' ? 'var(--ink)' : p.tipo === 'curso' ? 'var(--accent)' : 'var(--amber)';
            return (<li key={p ? p.id : 'next'} style={{ padding: '20px 16px 0 0', display: 'flex', flexDirection: 'column', gap: 6, position: 'relative' }}>
              <span style={{ position: 'absolute', top: -10, left: 0, width: 16, height: 16, borderRadius: '50%', boxSizing: 'border-box', background: color || '#fff', border: color ? 0 : '3px dashed var(--blue-lt)' }}></span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)' }}>{p ? (p.fecha || p.estado) : u.loQueViene}</span>
              <b style={{ fontSize: 17 }}>{p ? p.nombre : u.proximoProy}</b>
              <span style={{ fontSize: 15, color: 'var(--muted)' }}>{p ? p.lema : u.empiezaAporte}</span>
            </li>);
          })}
        </ol>
      </section>

      <section style={{ background: 'var(--warm)' }}>
        <div style={{ ...PR.wrap, padding: 'clamp(40px,6vw,52px) 24px', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 660 }}><h2 style={{ ...PR.h2, fontSize: 30 }}>{u.sumateTit}</h2><p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--muted)' }}>{u.sumateTxt}</p></div>
          <button onClick={onDonate} style={{ ...PR.coral, minHeight: 54, padding: '0 34px', fontSize: 16, border: 0, cursor: 'pointer' }}>{u.donar}</button>
        </div>
      </section>
    </React.Fragment>);
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
    window.scrollTo(0, 0);
    return function () { document.removeEventListener('keydown', k); };
  }, [id]);

  if (!id) return null;
  const p = window.nexosProyectos(lang).filter(function (x) { return x.id === id; })[0];
  if (!p) return null;

  const pres = p.gastos.reduce(function (a, g) { return a + g.monto; }, 0) || p.meta || 0;
  const inv = p.gastado || 0;
  const pct = pres ? inv / pres * 100 : 0;
  const eyebrow = [p.ubicacion, p.aliados.length ? (u.junto + ' ' + p.aliados.map(function (a) { return a.nombre; }).join(', ')) : ''].filter(Boolean).join(' · ');

  // Etapas
  const nE = p.etapas.length;
  const activas = p.etapasActivas.map(function (n) { return Math.min(Math.max(n - 1, 0), Math.max(nE - 1, 0)); });
  const ultima = Math.max.apply(null, activas.concat([0]));
  const actual = Math.min.apply(null, activas.length ? activas : [0]);
  const selF = fase === null ? actual : fase;
  const etapaInfo = function (i) { return activas.indexOf(i) > -1 ? ['curso', activas.length > 1 ? u.enCurso : u.aqui] : i < ultima ? ['hecho', u.hecho] : ['prox', u.proximo]; };
  const act = p.etapas[selF];

  // Gastos: se cubren en orden
  let resto = inv;
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
    e.preventDefault();
    location.hash = 'transparencia';
    setTimeout(function () { const el = document.getElementById('reporte'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150);
  };
  const tile = { background: 'color-mix(in oklab, var(--blue-lt) 16%, white)', borderRadius: 12, padding: '12px 14px' };

  return (
    <div className="sp-root" ref={scroller} aria-label={p.nombre} style={{ background: '#fff' }}>
      {/* volver a la lista (el menú principal queda arriba) */}
      <div style={{ background: 'var(--ink)' }}>
        <div style={{ ...PR.wrap, paddingTop: 18 }}>
          <a href="#proyectos" style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{u.todos}</a>
        </div>
      </div>

      {/* portada */}
      <header style={{ background: 'var(--ink)', color: '#fff' }}>
        <div style={{ ...PR.wrap, padding: 'clamp(28px,5vw,48px) 24px', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
          <div style={{ flex: '999 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {eyebrow ? <span style={{ ...PR.eyebrow, color: 'var(--amber)' }}>{eyebrow}</span> : null}
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-1.6px', fontSize: 'clamp(38px,6vw,64px)', margin: 0, lineHeight: 1.02, color: '#fff' }}>{p.nombre}</h1>
            {p.lema ? <p style={{ margin: 0, fontSize: 'clamp(19px,2.4vw,24px)', lineHeight: 1.3, fontWeight: 700, color: 'var(--amber)' }}>{p.lema}</p> : null}
            {p.resumen ? <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, maxWidth: 600, color: 'var(--on-ink-soft)' }}>{p.resumen}</p> : null}
          </div>
          {(pres || inv) ? (
            <div style={{ flex: '1 1 320px', minWidth: 0, background: '#fff', color: 'var(--ink)', borderRadius: 22, padding: 24, display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 10px 30px rgba(17,37,50,.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                {p.estado ? <span style={{ ...PR.chip, ...PR_TAG[p.tipo] }}>{p.estado}</span> : <span></span>}
                {p.actualizado ? <span style={{ fontSize: 12, color: 'var(--muted)' }}>{u.actualizado} {p.actualizado}</span> : null}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{u.invertido}</span>
                <span style={{ fontSize: 40, fontWeight: 800, color: 'var(--ink)', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>US$ {prFmt(inv, lang)}</span>
                {pres ? <span style={{ fontSize: 15 }}>{u.de} <b>US$ {prFmt(pres, lang)}</b> {u.presupuestados}</span> : null}
              </div>
              {pres ? <PrBar pct={pct} h={12} color="var(--accent)" /> : null}
              {p.compras.length ? <a href="#compras" onClick={function (e) { e.preventDefault(); const el = document.getElementById('compras'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} style={{ fontSize: 14, fontWeight: 700 }}>{u.verCompras}</a> : null}
              <button onClick={onDonate} style={PR.coral}>{u.donar}</button>
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
            {p.destacado ? <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, fontWeight: 700, color: 'var(--accent-text)' }}>{p.destacado}</p> : null}
          </div>
          {p.cifras.length ? (
            <div style={{ flex: '1 1 440px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 12 }}>
              {p.cifras.map(function (c, i) {
                return (<div key={i} style={{ background: 'color-mix(in oklab, var(--blue-lt) 16%, white)', borderRadius: 18, padding: 22, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
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
              {nE > 1 ? <div style={{ position: 'absolute', left: (50 / nE) + '%', width: (ultima * 100 / nE) + '%', top: 25, height: 4, background: 'var(--blue)', borderRadius: 999 }}></div> : null}
              {p.etapas.map(function (e, i) {
                const st = etapaInfo(i)[0]; const on = i === selF;
                return (
                  <button key={i} type="button" aria-pressed={on} onClick={function () { setFase(i); }}
                    style={{ flex: '1 1 0', minWidth: 120, border: 0, background: 'none', padding: 0, fontFamily: 'inherit', color: 'var(--ink)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center', position: 'relative' }}>
                    <span style={{ width: 52, height: 52, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, boxSizing: 'border-box',
                      background: st === 'hecho' ? 'var(--ink)' : st === 'curso' ? 'var(--blue)' : '#fff', color: st === 'prox' ? 'var(--muted)' : '#fff',
                      border: st === 'prox' ? '2px solid var(--line)' : '0', boxShadow: on ? '0 0 0 5px var(--amber)' : 'none' }}>{i + 1}</span>
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
              style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(17,37,50,.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 24 }}>
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
                  <button onClick={onDonate} style={PR.coral}>{u.donar}</button>
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
                    {esDonar ? <button onClick={onDonate} style={PR.coral}>{a.boton || u.donar}</button>
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
                </React.Fragment>);
                const nombre = o.enlace
                  ? <a href={o.enlace} target="_blank" rel="noopener" style={{ fontSize: 17, lineHeight: 1.35, fontWeight: 700, color: 'var(--ink)', textDecoration: 'none' }}>{o.nombre} ↗</a>
                  : <b style={{ fontSize: 17, lineHeight: 1.35, color: 'var(--ink)' }}>{o.nombre}</b>;
                return (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  {inner}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                    {nombre}
                    {o.instagram ? <a href={'https://www.instagram.com/' + o.instagram + '/'} target="_blank" rel="noopener" style={{ fontSize: 14, fontWeight: 700 }}>@{o.instagram}</a> : null}
                  </div>
                </div>);
              })}
            </div>);
          })}
        </section>) : null}

      {/* compras ya hechas (automático desde Gastos) */}
      {p.compras.length ? (
        <section id="compras" style={{ ...PR.wrap, padding: '12px 24px clamp(40px,6vw,56px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div><h2 style={PR.h2}>{u.comprasTit}</h2><p style={PR.sub}>{u.comprasSub}</p></div>
          <div style={{ ...PR.card, padding: '6px 26px' }}>
            {(p.compras.length > 15 ? p.porCategoria.map(function (c) { return { concepto: prCat(c.categoria, lang) + ' · ' + c.n + ' ' + u.compras, monto: c.total }; }) : p.compras).map(function (c, i) {
              return (<div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: 15 }}>
                <span style={{ minWidth: 0 }}>{c.concepto}</span>
                <b style={{ color: 'var(--blue)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>≈ US$ {prFmt(c.monto, lang)}</b>
              </div>);
            })}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '16px 0', fontSize: 16 }}>
              <b>{u.total}</b><b style={{ color: 'var(--blue)', fontVariantNumeric: 'tabular-nums' }}>≈ US$ {prFmt(p.gastado, lang)}</b>
            </div>
          </div>
          {window.NEXOS_FIXTURE && window.NEXOS_FIXTURE.enlaceFacturas
            ? <a href={window.NEXOS_FIXTURE.enlaceFacturas} target="_blank" rel="noopener" style={{ fontSize: 14, fontWeight: 700 }}>{u.verFacturas}</a> : null}
        </section>) : null}

    </div>
  );
}

window.ProyectosSection = ProyectosSection;
window.ProyectosPagina = ProyectosPagina;
window.ZonaCerradaCard = ZonaCerradaCard;
window.prCat = prCat;
window.prFmt = prFmt;
window.ProyectoPage = ProyectoPage;
