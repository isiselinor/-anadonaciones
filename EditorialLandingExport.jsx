const NS = window.NEXOSDesignSystem_0519e6;
const { Button, Card, Notice, StatCard, CurrencyCard, DonationsTable, ExpenseCategory, EmptyState,
        SearchInput, FilterSelect, DonateModal, PaymentMethod, DriveLinkButton, StepCard, CopyButton } = NS;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#e85d45", "#2b4fd1", "#1c2340", "#f7e3dc"],
  "portada": "Sobrio",
  "subventana": "Página",
  "overlay": "Navy",
  "winHeader": "Navy"
}/*EDITMODE-END*/;

const A = {
  wrap:{ maxWidth:1180, margin:'0 auto', padding:'0 24px' },
  eyebrow:{ fontSize:11, fontWeight:800, letterSpacing:1.4, textTransform:'uppercase', color:'var(--accent)' },
  h2:{ fontFamily:'var(--font-display)', fontSize:'clamp(28px,4vw,44px)', fontWeight:700, letterSpacing:'-1px', lineHeight:1.05, margin:'10px 0 0', color:'var(--ink)' },
  lead:{ fontSize:17, lineHeight:1.7, color:'var(--muted)', maxWidth:620, margin:'14px 0 0' }
};

function NavBar({ onOpen, onDonate, lang, setLang, forceSolid }) {
  const d = window.nexosContent(lang); const u = d.ui;
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const solid = forceSolid || scrolled;
  React.useEffect(function(){
    const el = document.getElementById('scroller') || window;
    function onScroll(){ const y = el === window ? window.scrollY : el.scrollTop; setScrolled(y > 40); }
    el.addEventListener('scroll', onScroll); return function(){ el.removeEventListener('scroll', onScroll); };
  }, []);
  React.useEffect(function(){ document.body.style.overflow = menu ? 'hidden' : ''; return function(){ document.body.style.overflow = ''; }; }, [menu]);
  return (
    <div style={{ position:'sticky', top:0, zIndex:25, background: solid ? 'rgba(255,255,255,.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(180%) blur(14px)' : 'none', borderBottom:'1px solid ' + (solid ? 'var(--line)' : 'transparent'), transition:'background .2s, border-color .2s' }}>
      <div style={{ ...A.wrap, display:'flex', alignItems:'center', gap:18, height:70 }}>
        <a href="#top" style={{ display:'flex', alignItems:'center', gap:9, textDecoration:'none' }}>
          <img src="https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png" alt="" style={{ height:30, filter: solid ? 'none' : 'brightness(0) invert(1)' }} />
          <span style={{ fontFamily:'var(--font-display)', fontSize:19, fontWeight:700, letterSpacing:3.4, color: solid ? 'var(--blue)' : '#fff' }}>NEXOS</span>
        </a>
        <nav style={{ display:'flex', gap:20, marginLeft:'auto', alignItems:'center', flexWrap:'nowrap' }} className="navlinks">
          {d.nav.map(function(n){
            return <a key={n.id} href={'#' + n.id} onClick={n.id === 'quienes' || n.id === 'aliados' || n.id === 'faq' ? function(e){ e.preventDefault(); onOpen(n.id); } : undefined}
              style={{ fontSize:13.5, fontWeight:600, textDecoration:'none', whiteSpace:'nowrap', color: solid ? 'var(--ink)' : 'rgba(255,255,255,.86)', borderBottom: ['quienes','aliados','faq'].indexOf(n.id) > -1 ? '1px dotted currentColor' : 'none', paddingBottom:2 }}>{n.label}</a>;
          })}
        </nav>
        <button className="menubtn" aria-label={u.menu} onClick={function(){ setMenu(!menu); }} style={{ display:'none', background:'none', border:'1px solid ' + (solid ? 'var(--line)' : 'rgba(255,255,255,.4)'), color: solid ? 'var(--ink)' : '#fff', borderRadius:999, width:40, height:38, marginLeft:'auto', fontSize:15, cursor:'pointer', lineHeight:1 }}>{menu ? '×' : '☰'}</button>
        <button onClick={function(){ setLang(lang === 'ES' ? 'EN' : 'ES'); }} aria-label={lang === 'ES' ? 'Switch to English' : 'Cambiar a español'} style={{ background:'none', border:'1px solid ' + (solid ? 'var(--line)' : 'rgba(255,255,255,.4)'), color: solid ? 'var(--ink)' : '#fff', borderRadius:999, padding:'7px 12px', fontSize:12, fontWeight:700, cursor:'pointer' }}>{lang === 'ES' ? 'EN' : 'ES'}</button>
        <Button variant="primarySmall" onClick={onDonate} style={{ fontSize:13.5, padding:'11px 20px' }}>{u.donar}</Button>
      </div>
      {menu ? (
        <div style={{ background:'#fff', borderTop:'1px solid var(--line)', boxShadow:'0 20px 40px rgba(28,35,64,.12)' }}>
          <div style={{ ...A.wrap, display:'grid', padding:'8px 24px 16px' }}>
            {d.nav.map(function(n){
              const isWin = ['quienes','aliados','faq'].indexOf(n.id) > -1;
              return <a key={n.id} href={'#' + n.id} onClick={function(e){ if (isWin) { e.preventDefault(); onOpen(n.id); } setMenu(false); }}
                style={{ padding:'14px 0', borderBottom:'1px solid var(--line)', fontSize:16, fontWeight:700, color:'var(--ink)', textDecoration:'none' }}>{n.label}</a>;
            })}
          </div>
        </div>) : null}
    </div>
  );
}

function Hero({ onDonate, onOpen, scrimBase, lang }) {
  const d = window.nexosContent(lang); const u = d.ui; const x = window.NEXOS_FIXTURE;
  return (
    <div style={{ position:'relative', minHeight:'clamp(560px,78vh,760px)', display:'flex', flexDirection:'column', justifyContent:'flex-end', marginTop:-70, paddingTop:70 }}>
      <img src="https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-rescate-escombros.jpg" alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 32%' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, color-mix(in oklab, ' + scrimBase + ' 62%, transparent) 0%, color-mix(in oklab, ' + scrimBase + ' 28%, transparent) 34%, color-mix(in oklab, ' + scrimBase + ' 88%, transparent) 100%) ' }}></div>
      <div style={{ ...A.wrap, position:'relative', paddingBottom:34, paddingTop:60 }}>
        <div style={{ ...A.eyebrow, color:'#ffb3a3' }}>{d.hero.eyebrow}</div>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(36px,6.4vw,72px)', fontWeight:800, lineHeight:1.02, letterSpacing:'-2px', color:'#fff', margin:'12px 0 0', maxWidth:900, textWrap:'balance' }}>{d.hero.titulo}</h1>
        <p style={{ fontSize:'clamp(15px,1.6vw,19px)', lineHeight:1.65, color:'rgba(255,255,255,.85)', maxWidth:620, margin:'18px 0 0' }}>{d.hero.bajada}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:12, margin:'28px 0 0', alignItems:'center' }}>
          <Button variant="primary" onClick={onDonate} style={{ width:'auto', padding:'16px 30px', fontSize:17, whiteSpace:'nowrap' }}>{u.donarAhora}</Button>
          <button onClick={function(){ onOpen('quienes'); }} style={{ background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.42)', color:'#fff', borderRadius:999, padding:'15px 26px', fontSize:15, fontWeight:700, cursor:'pointer', backdropFilter:'blur(6px)' }}>{u.quienesLink}</button>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'26px 46px', margin:'40px 0 0', paddingTop:24, borderTop:'1px solid rgba(255,255,255,.22)' }}>
          {[[u.recaudado,'≈ US$ ' + x.totalUSD],[u.ejecutado,'≈ US$ ' + x.totalEgresos],[u.donaciones, x.totalDonaciones]].map(function(p){
            return (<div key={p[0]}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(22px,2.6vw,32px)', fontWeight:700, color:'#fff', lineHeight:1 }}>{p[1]}</div>
              <div style={{ fontSize:11.5, letterSpacing:.6, textTransform:'uppercase', color:'rgba(255,255,255,.62)', marginTop:6 }}>{p[0]}</div>
            </div>);
          })}
          <div style={{ marginLeft:'auto', fontSize:11, color:'rgba(255,255,255,.5)', alignSelf:'flex-end' }}>{d.hero.credito}</div>
        </div>
      </div>
    </div>
  );
}

function HeroSobrio({ onDonate, onOpen, lang }) {
  const d = window.nexosContent(lang); const u = d.ui; const x = window.NEXOS_FIXTURE;
  return (
    <section style={{ background:'#fff', borderBottom:'1px solid var(--line)' }}>
      <div style={{ ...A.wrap, maxWidth:900, paddingTop:'clamp(56px,9vw,110px)', paddingBottom:'clamp(40px,6vw,72px)' }}>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(30px,4.4vw,52px)', fontWeight:700, lineHeight:1.08, letterSpacing:'-1.6px', color:'var(--ink)', margin:0, maxWidth:760, textWrap:'balance' }}>{d.hero.titulo}</h1>
        <p style={{ fontSize:'clamp(15px,1.6vw,18px)', lineHeight:1.7, color:'var(--muted)', maxWidth:560, margin:'20px 0 0' }}>{d.hero.bajada}</p>
        <div style={{ display:'flex', gap:14, alignItems:'center', margin:'30px 0 0', flexWrap:'wrap' }}>
          <Button variant="primary" onClick={onDonate} style={{ width:'auto', padding:'15px 28px', fontSize:16, whiteSpace:'nowrap' }}>{u.donarAhora}</Button>
          <button onClick={function(){ onOpen('quienes'); }} style={{ background:'none', border:'none', padding:0, color:'var(--blue)', fontSize:15, fontWeight:700, cursor:'pointer' }}>{u.quienesLink}</button>
        </div>
        <div style={{ fontSize:12, color:'var(--muted)', margin:'26px 0 0' }}>{u.recaudado} ≈ US$ {x.totalUSD} · {u.ejecutado} ≈ US$ {x.totalEgresos} · {u.actualizado} {x.actualizado}</div>
      </div>
    </section>
  );
}

function HeroCentrado({ onDonate, onOpen, lang }) {
  const d = window.nexosContent(lang); const u = d.ui; const x = window.NEXOS_FIXTURE;
  return (
    <section style={{ background:'#fff', borderBottom:'1px solid var(--line)' }}>
      <div style={{ ...A.wrap, maxWidth:860, textAlign:'center', paddingTop:'clamp(58px,9vw,116px)', paddingBottom:'clamp(40px,6vw,70px)' }}>
        <img src="https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png" alt="" style={{ height:64, margin:'0 auto', display:'block' }} />
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,5vw,58px)', fontWeight:800, lineHeight:1.04, letterSpacing:'-2px', color:'var(--ink)', margin:'26px 0 0', textWrap:'balance' }} dangerouslySetInnerHTML={{ __html:d.hero.tituloHtml }} />
        <p style={{ fontSize:'clamp(15px,1.6vw,18px)', lineHeight:1.7, color:'var(--muted)', maxWidth:560, margin:'20px auto 0' }}>{d.hero.bajada}</p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', margin:'30px 0 0', flexWrap:'wrap' }}>
          <Button variant="primary" onClick={onDonate} style={{ width:'auto', padding:'15px 28px', fontSize:16, whiteSpace:'nowrap' }}>{u.donarAhora}</Button>
          <button onClick={function(){ onOpen('quienes'); }} style={{ background:'none', border:'1px solid var(--line)', color:'var(--ink)', borderRadius:999, padding:'14px 24px', fontSize:15, fontWeight:700, cursor:'pointer' }}>{u.quienesLink}</button>
        </div>
        <div style={{ fontSize:12, color:'var(--muted)', margin:'24px 0 0' }}>{u.actualizado} {x.actualizado}</div>
      </div>
    </section>
  );
}

function HeroMinimal({ onDonate, onOpen, lang }) {
  const d = window.nexosContent(lang); const u = d.ui; const x = window.NEXOS_FIXTURE;
  return (
    <section style={{ background:'#fff', borderBottom:'1px solid var(--line)' }}>
      <div style={{ ...A.wrap, paddingTop:'clamp(64px,10vw,132px)', paddingBottom:'clamp(38px,5vw,60px)', maxWidth:1000 }}>
        <div style={A.eyebrow}>{d.hero.eyebrow}</div>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(38px,7vw,84px)', fontWeight:800, lineHeight:1, letterSpacing:'-2.6px', color:'var(--ink)', margin:'18px 0 0', textWrap:'balance' }} dangerouslySetInnerHTML={{ __html:d.hero.tituloHtml }} />
        <p style={{ fontSize:'clamp(16px,1.8vw,20px)', lineHeight:1.65, color:'var(--muted)', maxWidth:620, margin:'26px 0 0' }}>{d.hero.bajada}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:12, margin:'34px 0 0', alignItems:'center' }}>
          <Button variant="primary" onClick={onDonate} style={{ width:'auto', padding:'16px 30px', fontSize:17, whiteSpace:'nowrap' }}>{u.donarAhora}</Button>
          <button onClick={function(){ onOpen('quienes'); }} style={{ background:'none', border:'1px solid var(--line)', color:'var(--ink)', borderRadius:999, padding:'15px 26px', fontSize:15, fontWeight:700, cursor:'pointer' }}>{u.quienesLink}</button>
        </div>
      </div>
      <div style={{ borderTop:'1px solid var(--line)' }}>
        <div style={{ ...A.wrap, display:'flex', flexWrap:'wrap', gap:'20px 56px', padding:'22px 26px' }}>
          {[[u.recaudado,'≈ US$ ' + x.totalUSD],[u.ejecutado,'≈ US$ ' + x.totalEgresos],[u.donaciones, x.totalDonaciones]].map(function(p){
            return (<div key={p[0]}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(20px,2.2vw,27px)', fontWeight:700, color:'var(--ink)', letterSpacing:'-.8px' }}>{p[1]}</div>
              <div style={{ fontSize:11, letterSpacing:.8, textTransform:'uppercase', color:'var(--muted)', marginTop:6 }}>{p[0]}</div></div>);
          })}
          <div style={{ marginLeft:'auto', alignSelf:'flex-end', fontSize:11.5, color:'var(--muted)' }}>{u.actualizado} {x.actualizado}</div>
        </div>
      </div>
    </section>
  );
}

function PhotoStrip({ onZoom, lang }) {
  const d = window.nexosContent(lang); const u = d.ui;
  const ref = React.useRef(null);
  function nudge(dir){
    const el = ref.current; if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * .7), behavior:'smooth' });
  }
  return (
    <div style={{ marginTop:'clamp(34px,5vw,56px)' }}>
      <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:16 }}>
        <div style={{ fontSize:11, fontWeight:800, letterSpacing:1.2, textTransform:'uppercase', color:'var(--muted)' }}>{u.enTerreno}</div>
        <div style={{ fontSize:13, color:'var(--muted)' }}>{u.fotosPor}</div>
        <div style={{ marginLeft:'auto', display:'flex', gap:8 }}>
          <button onClick={function(){ nudge(-1); }} aria-label={u.anterior} className="strip-nav">←</button>
          <button onClick={function(){ nudge(1); }} aria-label={u.siguiente} className="strip-nav">→</button>
        </div>
      </div>
      <div ref={ref} className="strip">
        {d.fotos.map(function(p, i){
          return (<figure key={p.src} className="strip-item" style={{ margin:0 }}>
            <button onClick={function(){ onZoom(i); }} className="zoomable" aria-label={u.ampliar}
              style={{ display:'block', width:'100%', height:300, padding:0, border:'none', borderRadius:'var(--radius-lg)', overflow:'hidden', cursor:'zoom-in', background:'none' }}>
              <img src={p.src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            </button></figure>);
        })}
      </div>
    </div>
  );
}

function FaqRow({ q, a, open }) {
  const [o, setO] = React.useState(!!open);
  return (
    <div style={{ borderTop:'1px solid var(--line)' }}>
      <button onClick={function(){ setO(!o); }} aria-expanded={o} style={{ width:'100%', background:'none', border:'none', padding:'16px 0', display:'flex', gap:14, alignItems:'flex-start', textAlign:'left', cursor:'pointer' }}>
        <span style={{ color:'var(--accent)', fontWeight:800, transform:'rotate(' + (o ? 90 : 0) + 'deg)', transition:'transform .15s' }}>▸</span>
        <span style={{ fontWeight:700, fontSize:15, flex:1, color:'var(--ink)' }}>{q}</span>
      </button>
      {o ? <p style={{ margin:'0 0 16px 28px', fontSize:14, lineHeight:1.7, color:'var(--muted)' }}>{a}</p> : null}
    </div>
  );
}

function Section({ id, eyebrow, titulo, lead, leadWide, children, tone }) {
  return (
    <section id={id} style={{ padding:'clamp(56px,8vw,96px) 0', background: tone === 'soft' ? 'var(--soft)' : tone === 'line' ? 'var(--line)' : 'transparent', borderTop: tone ? '1px solid var(--line)' : 'none', borderBottom: tone ? '1px solid var(--line)' : 'none' }}>
      <div style={A.wrap}>
        {eyebrow ? <div style={A.eyebrow}>{eyebrow}</div> : null}
        {titulo ? <h2 style={A.h2}>{titulo}</h2> : null}
        {lead ? <p style={leadWide ? { ...A.lead, maxWidth:'none', whiteSpace:'nowrap', overflowX:'auto' } : A.lead}>{lead}</p> : null}
        <div style={{ marginTop:34 }}>{children}</div>
      </div>
    </section>
  );
}

function EditorialLandingExport() {
  const x = window.NEXOS_FIXTURE;
  const [lang, setLang] = React.useState(function(){ try { return localStorage.getItem('nexos.lang') === 'EN' ? 'EN' : 'ES'; } catch (e) { return 'ES'; } });
  React.useEffect(function(){ try { localStorage.setItem('nexos.lang', lang); } catch (e) {} document.documentElement.lang = lang === 'EN' ? 'en' : 'es'; }, [lang]);
  const d = window.nexosContent(lang); const u = d.ui;
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const pal = t.palette || TWEAK_DEFAULTS.palette;
  React.useEffect(function(){
    const r = document.documentElement.style;
    r.setProperty('--accent', pal[0]);
    r.setProperty('--blue', pal[1]);
    r.setProperty('--ink', pal[2]);
    r.setProperty('--peach', pal[3]);
    r.setProperty('--nexos-coral', pal[0]);
    r.setProperty('--nexos-blue', pal[1]);
    r.setProperty('--blue-lt', 'color-mix(in oklab, ' + pal[1] + ' 55%, white)');
    r.setProperty('--muted', 'color-mix(in oklab, ' + pal[2] + ' 55%, white)');
    r.setProperty('--line', 'color-mix(in oklab, ' + pal[2] + ' 8%, white)');
    r.setProperty('--soft', 'color-mix(in oklab, ' + pal[2] + ' 2%, white)');
    r.setProperty('--overlay-scrim', 'color-mix(in oklab, ' + pal[2] + ' 55%, transparent)');
    r.setProperty('--row-hover', 'color-mix(in oklab, ' + pal[0] + ' 7%, white)');
    r.setProperty('--shadow-cta', '0 14px 30px color-mix(in oklab, ' + pal[0] + ' 34%, transparent)');
    r.setProperty('--shadow-float', '0 12px 28px color-mix(in oklab, ' + pal[0] + ' 42%, transparent)');
  }, [pal.join()]);
  const scrimBase = t.overlay === 'Coral' ? pal[0] : t.overlay === 'Negro' ? '#0c0c0e' : pal[2];
  const [drawer, setDrawer] = React.useState(null);
  const [donar, setDonar] = React.useState(false);
  const [zoom, setZoom] = React.useState(null);
  const [q, setQ] = React.useState(''); const [met, setMet] = React.useState('');
  const busca = q.trim();
  const listos = busca.length >= 3;
  const encontrados = listos ? x.movimientos.filter(function(m){
    if (m.donante.toLowerCase().indexOf(busca.toLowerCase()) === -1) return false;
    if (met && m.metodo !== met) return false; return true;
  }) : [];
  const TOPE = 25;
  const rows = encontrados.slice(0, TOPE);
  return (
    <div id="top" style={{ background:'#fff' }}>
      <NavBar onOpen={setDrawer} onDonate={function(){ setDonar(true); }} lang={lang} setLang={setLang} forceSolid={t.portada !== 'Foto'} />
      {t.portada === 'Sobrio' ? <HeroSobrio lang={lang} onDonate={function(){ setDonar(true); }} onOpen={setDrawer} />
        : t.portada === 'Centrado' ? <HeroCentrado lang={lang} onDonate={function(){ setDonar(true); }} onOpen={setDrawer} />
        : t.portada === 'Titular' ? <HeroMinimal lang={lang} onDonate={function(){ setDonar(true); }} onOpen={setDrawer} />
        : <Hero lang={lang} onDonate={function(){ setDonar(true); }} onOpen={setDrawer} scrimBase={scrimBase} />}

      <Section id="quienes" tone="soft" titulo={d.ventanas.quienes.titulo} lead={u.seccionesLead}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:14 }}>
          {['quienes','evidencia','faq'].map(function(id){
            const c = [id, id === 'quienes' ? d.ventanas.quienes.eyebrow : d.ventanas[id].titulo, d.ventanas[id].resumen || ''];
            return (<button key={c[0]} onClick={function(){ setDrawer(c[0]); }} className="opener"
              style={{ textAlign:'left', background:'#fff', border:'var(--border-card)', boxShadow:'var(--shadow-card)', borderRadius:'var(--radius-card)', padding:'20px 20px 18px', cursor:'pointer', display:'flex', flexDirection:'column', gap:8, minHeight:150 }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700, color:'var(--ink)' }}>{c[1]}</div>
              <div style={{ fontSize:13.5, color:'var(--muted)', lineHeight:1.55 }}>{c[2]}</div>
              <span style={{ marginTop:'auto', color:'var(--accent)', fontWeight:800, fontSize:13 }}>{u.abrirVentana}</span>
            </button>);
          })}
        </div>
        <PhotoStrip onZoom={setZoom} lang={lang} />
      </Section>

      <Section id="cifras" tone="line" titulo={u.cifrasTitulo} lead={x.notaTasas} leadWide>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:14, marginBottom:14 }}>
          <StatCard tone="income" label={u.totalRecaudado} value={'≈ US$ ' + x.totalUSD} />
          <StatCard tone="expense" label={u.totalEgresos} value={'≈ US$ ' + x.totalEgresos} />
          <StatCard tone="balance" label={u.saldo} value={'≈ US$ ' + x.saldo} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))', gap:14 }}>
          {x.porMoneda.map(function(m){ return <CurrencyCard key={m.moneda} {...m} />; })}
        </div>
      </Section>

      <Section id="donar" tone="soft" titulo={u.donarTitulo}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12 }}>
          <StepCard n={1} title={u.paso1t} html={u.paso1} />
          <StepCard n={2} title={u.paso2t} html={u.paso2} />
          <StepCard n={3} title={u.paso3t} html={u.paso3} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) auto', gap:18, alignItems:'center', marginTop:20 }} className="cta-row">
          <Notice>⚠️ {d.aviso}</Notice>
          <Button variant="primary" onClick={function(){ setDonar(true); }} style={{ width:'auto', padding:'16px 28px', fontSize:16 }}>{u.donarAhora}</Button>
        </div>
      </Section>

      <Section id="evidencia" tone="line" titulo={d.ventanas.evidencia.titulo} lead={u.evidenciaLead}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,minmax(0,1fr))', gap:'var(--gap-grid)' }} className="ev-grid">
          {d.fotos.slice(0,2).map(function(p, i){
            return (<figure key={p.src} style={{ margin:0 }}>
              <button onClick={function(){ setZoom(i); }} className="zoomable" aria-label={u.ampliar}
                style={{ display:'block', width:'100%', aspectRatio:'4/3', padding:0, border:'none', borderRadius:'var(--radius-lg)', overflow:'hidden', cursor:'zoom-in', background:'none' }}>
                <img src={p.src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} /></button></figure>);
          })}
          {x.enlaceFacturas ? <a href={x.enlaceFacturas} target="_blank" rel="noopener" className="ev-link"
            style={{ display:'flex', flexDirection:'column', gap:6, textDecoration:'none', background:'#fff', border:'1px solid var(--line)', borderTop:'3px solid var(--blue)', borderRadius:'var(--radius-md)', padding:'20px 22px' }}>
            <span style={{ fontSize:11, fontWeight:800, letterSpacing:1, textTransform:'uppercase', color:'var(--muted)' }}>{u.facturas}</span>
            <span style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:700, color:'var(--blue)', letterSpacing:'-.4px' }}>{u.verFacturas}</span>
            <span style={{ fontSize:13, color:'var(--muted)', lineHeight:1.5 }}>{u.facturasSub}</span>
          </a> : null}
          {x.enlaceFotos ? <a href={x.enlaceFotos} target="_blank" rel="noopener" className="ev-link"
            style={{ display:'flex', flexDirection:'column', gap:6, textDecoration:'none', background:'#fff', border:'1px solid var(--line)', borderTop:'3px solid var(--accent)', borderRadius:'var(--radius-md)', padding:'20px 22px' }}>
            <span style={{ fontSize:11, fontWeight:800, letterSpacing:1, textTransform:'uppercase', color:'var(--muted)' }}>{u.fotosLabel}</span>
            <span style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:700, color:'var(--accent)', letterSpacing:'-.4px' }}>{u.verFotos}</span>
            <span style={{ fontSize:13, color:'var(--muted)', lineHeight:1.5 }}>{u.fotosSub}</span>
          </a> : null}
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:16, alignItems:'center', paddingTop:14 }}>
          <button onClick={function(){ setDrawer('evidencia'); }} style={{ background:'none', border:'none', padding:0, color:'var(--accent)', fontWeight:800, fontSize:13.5, cursor:'pointer' }}>{u.comoVerificamos}</button>
          <span style={{ marginLeft:'auto', fontSize:12, color:'var(--muted)' }}>{u.fotosCredito}{d.credito}</span>
        </div>
      </Section>

      <Section id="reporte" tone="soft" titulo={u.reporteTitulo} lead={u.reporteLead}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:14 }}>
          <SearchInput placeholder={u.buscar} value={q} onChange={function(e){ setQ(e.target.value); }} />
          <FilterSelect placeholder={u.todosMetodos} options={x.metodos} value={met} onChange={function(e){ setMet(e.target.value); }} />
        </div>
        {!listos
          ? <EmptyState>{u.vacio}</EmptyState>
          : encontrados.length === 0
            ? <EmptyState>{u.sinResultados}</EmptyState>
            : <React.Fragment>
                <Card pad="6px 8px"><DonationsTable rows={rows} /></Card>
                <div style={{ fontSize:12, color:'var(--muted)', marginTop:12, textAlign:'center' }}>
                  {encontrados.length > TOPE ? u.mostrando(TOPE, encontrados.length) : u.resultados(encontrados.length)}
                </div>
              </React.Fragment>}
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:700, margin:'38px 0 14px' }}>{u.egresosTitulo}</h3>
        {x.egresos.map(function(c, i){
          return <ExpenseCategory key={c.categoria} name={c.categoria} description={c.descripcion} total={c.total} pct={c.pct} items={c.items} />;
        })}
      </Section>

      <footer style={{ background:'var(--ink)', color:'rgba(255,255,255,.7)', padding:'54px 0 40px' }}>
        <div style={A.wrap}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:58, height:57, borderRadius:'50%', background:'#fff', flexShrink:0 }}>
              <img src="https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png" alt="" style={{ width:52, height:45, objectFit:'contain', display:'block' }} />
            </div>
            <span style={{ fontFamily:'var(--font-display)', fontSize:19, fontWeight:700, letterSpacing:3.4, color:'#fff' }}>NEXOS</span>
          </div>
          <p style={{ fontSize:14, lineHeight:1.7, margin:'14px 0 0', maxWidth:460 }}>{lang === 'EN' && x.taglineEn ? x.taglineEn : x.tagline}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'18px 26px', margin:'30px 0 0', paddingTop:24, borderTop:'1px solid rgba(255,255,255,.16)' }}>
            {d.nav.map(function(n){ return <a key={n.id} href={'#' + n.id} style={{ color:'rgba(255,255,255,.7)', textDecoration:'none', fontSize:13.5 }}>{n.label}</a>; })}
            <a href="https://instagram.com/somos.nexosve" style={{ color:'#fff', textDecoration:'none', fontSize:13.5, fontWeight:700, marginLeft:'auto' }}>@somos.nexosve</a>
            <a href="https://www.instagram.com/isiselinor/" style={{ color:'inherit', textDecoration:'none', fontSize:12 }}>{u.creditoSistema}</a>
          </div>
        </div>
      </footer>

      <div style={{ position:'fixed', left:0, right:0, bottom:0, zIndex:30, padding:12, display:'none', background:'rgba(255,255,255,.94)', borderTop:'1px solid var(--line)', backdropFilter:'blur(10px)' }} className="mobile-cta">
        <Button variant="primary" onClick={function(){ setDonar(true); }} style={{ width:'100%' }}>{u.donarAhora}</Button>
      </div>

      <LightboxExport index={zoom} fotos={d.fotos} credito={d.credito} onClose={function(){ setZoom(null); }} onIndex={setZoom} />
      {t.subventana === 'Página'
        ? <SectionPageExport lang={lang} id={drawer} onClose={function(){ setDrawer(null); }} onOpen={setDrawer} onDonate={function(){ setDonar(true); }} />
        : <SectionWindowExport lang={lang} variant={t.winHeader === 'Coral' ? 'grafica' : 'editorial'} id={drawer} onClose={function(){ setDrawer(null); }} onOpen={setDrawer} onDonate={function(){ setDonar(true); }} />}
      <DonateModal open={donar} onClose={function(){ setDonar(false); }} notice={<span>{u.avisoModal[0]}<b style={{ color:'var(--accent)' }}>{u.avisoModal[1]}</b>{u.avisoModal[2]}</span>}>
        {x.metodosDonacion.map(function(m){ return <PaymentMethod key={m.metodo} name={m.metodo} fields={m.campos} />; })}
      </DonateModal>

      <window.TweaksPanel>
        <window.TweakSection label="Paleta" />
        <window.TweakColor label="Colores de marca" value={pal}
          options={[["#e85d45","#2b4fd1","#1c2340","#f7e3dc"],
                    ["#fb6a4e","#125edb","#141c33","#fde7e0"],
                    ["#d2542f","#23407f","#211a16","#f4e4d6"],
                    ["#e85d45","#12306b","#0e1a33","#e8eef9"],
                    ["#f04e28","#0b2a6b","#101014","#ffede6"]]}
          onChange={function(v){ setTweak('palette', v); }} />
        <window.TweakSection label="Portada" />
        <window.TweakSelect label="Encabezado" value={t.portada} options={['Sobrio','Centrado','Titular','Foto']}
          onChange={function(v){ setTweak('portada', v); }} />
        {t.portada === 'Foto' ? <window.TweakRadio label="Tono del degradado" value={t.overlay} options={['Navy','Coral','Negro']}
          onChange={function(v){ setTweak('overlay', v); }} /> : null}
        <window.TweakSection label="Sub-ventanas" />
        <window.TweakRadio label="Formato" value={t.subventana} options={['Página','Dos columnas']}
          onChange={function(v){ setTweak('subventana', v); }} />
        {t.subventana === 'Dos columnas' ? <window.TweakRadio label="Cabecera" value={t.winHeader} options={['Navy','Coral']}
          onChange={function(v){ setTweak('winHeader', v); }} /> : null}
      </window.TweaksPanel>
    </div>
  );
}

Object.assign(window, { EditorialLandingExport });
