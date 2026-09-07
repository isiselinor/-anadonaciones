/* Sub-ventana alternativa: toma toda la pantalla y se lee como una página propia (una sola columna). */
const NSP = window.NEXOSDesignSystem_0519e6;

function SectionPageExport({ id, onClose, onOpen, onDonate, lang }) {
  const { DriveLinkButton, Button } = NSP;
  const d = window.nexosContent(lang); const u = d.ui;
  const x = window.NEXOS_FIXTURE;
  const v = id ? d.ventanas[id] : null;
  const scroller = React.useRef(null);

  React.useEffect(function(){
    if (!id) return;
    function k(e){ if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (scroller.current) scroller.current.scrollTop = 0;
    return function(){ document.removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [id, onClose]);

  if (!v) return null;
  const otras = Object.keys(d.ventanas).filter(function(k){ return k !== id; });
  const col = { maxWidth:720, margin:'0 auto', padding:'0 24px' };

  return (
    <div className="sp-root" ref={scroller} style={{ position:'fixed', inset:0, zIndex:50, background:'#fff', overflow:'auto' }}>
      <div style={{ position:'sticky', top:0, zIndex:3, background:'rgba(255,255,255,.94)', backdropFilter:'blur(12px)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px', height:60, display:'flex', alignItems:'center', gap:14 }}>
          <a href="#top" onClick={onClose} style={{ display:'flex', alignItems:'center', gap:14, textDecoration:'none' }}>
            <img src="https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png" alt="" style={{ height:24 }} />
            <span style={{ fontSize:13, fontWeight:700, color:'var(--muted)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{v.titulo}</span>
          </a>
          <button onClick={onClose} style={{ marginLeft:'auto', background:'none', border:'1px solid var(--line)', borderRadius:999, padding:'8px 16px', fontSize:13, fontWeight:700, color:'var(--ink)', cursor:'pointer', whiteSpace:'nowrap' }}>{u.volver}</button>
        </div>
      </div>

      {v.foto ? (
        <div style={{ position:'relative', height:'clamp(240px,38vh,380px)' }}>
          <img src={v.foto} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(28,35,64,.28), rgba(28,35,64,.82))' }}></div>
          <div style={{ position:'absolute', left:0, right:0, bottom:0, padding:'0 0 28px' }}>
            <div style={col}>
              <div style={{ fontSize:11, fontWeight:800, letterSpacing:1.6, textTransform:'uppercase', color:'#ffb3a3' }}>{v.eyebrow}</div>
              <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-1.8px', fontSize:'clamp(32px,5vw,58px)', color:'#fff', margin:'10px 0 0', lineHeight:1.02 }}>{v.titulo}</h1>
              <div style={{ fontSize:11.5, color:'rgba(255,255,255,.7)', marginTop:10 }}>{u.fotoPor}{d.credito}</div>
            </div>
          </div>
        </div>) : null}

      <div style={{ ...col, padding:'clamp(30px,5vw,52px) 24px 0' }}>
        {(id === 'quienes' && (lang === 'EN' ? x.misionEn : x.mision) ? [lang === 'EN' ? x.misionEn : x.mision].concat((v.cuerpo || []).slice(1)) : (v.cuerpo || [])).map(function(p, i){
          return <p key={i} style={{ fontSize:18, lineHeight:1.85, color:'var(--ink)', margin: i ? '22px 0 0' : 0 }} dangerouslySetInnerHTML={{ __html:p }} />;
        })}
      </div>

      {v.datos ? (
        <div style={{ ...col, marginTop:36 }}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'18px 40px', padding:'20px 0', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
            {v.datos.map(function(r){
              return (<div key={r.k}>
                <div style={{ fontSize:10.5, fontWeight:800, letterSpacing:.9, textTransform:'uppercase', color:'var(--muted)' }}>{r.k}</div>
                <div style={{ fontWeight:700, fontSize:15.5, marginTop:5 }}>{r.v}</div></div>);
            })}
          </div>
        </div>) : null}

      {v.formas ? (
        <div style={{ ...col, marginTop:34 }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:12 }}>
            {v.formas.map(function(r){
              return (<div key={r.titulo} style={{ borderTop:'2px solid var(--accent)', paddingTop:12 }}>
                <div style={{ fontWeight:800, fontSize:15.5 }}>{r.titulo}</div>
                <div style={{ fontSize:14, color:'var(--muted)', marginTop:5, lineHeight:1.6 }}>{r.detalle}</div></div>);
            })}
          </div>
          <Button variant="quietBlue" href="https://instagram.com/somos.nexosve" target="_blank" style={{ marginTop:22 }}>{u.escribirInstagram}</Button>
        </div>) : null}

      {v.items ? (
        <div style={{ ...col, marginTop:30 }}>
          {v.items.map(function(it, i){ return <SPFaq key={i} q={it.q} a={it.a} open={i === 0} />; })}
        </div>) : null}

      {id === 'evidencia' ? (
        <div style={{ ...col, marginTop:30, display:'grid', gap:12 }}>
          {x.enlaceFacturas ? <DriveLinkButton tone="blue" href={x.enlaceFacturas}>{u.verFacturas}</DriveLinkButton> : null}
          {x.enlaceFotos ? <DriveLinkButton tone="coral" href={x.enlaceFotos}>{u.verFotos}</DriveLinkButton> : null}
        </div>) : null}

      <div style={{ marginTop:'clamp(40px,6vw,64px)', background:'var(--peach)', padding:'clamp(30px,4vw,46px) 0' }}>
        <div style={{ ...col, display:'flex', flexWrap:'wrap', gap:20, alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ maxWidth:400 }}>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:22, letterSpacing:'-.6px' }}>{u.cadaAporte}</div>
            <div style={{ fontSize:13, color:'var(--ink)', marginTop:8, lineHeight:1.6 }}>{u.cadaAporteSub[0]}<b style={{ color:'var(--accent)' }}>{u.cadaAporteSub[1]}</b>{u.cadaAporteSub[2]}</div>
          </div>
          <button onClick={function(){ onClose(); if (onDonate) onDonate(); }} style={{ background:'var(--accent)', color:'#fff', border:'none', borderRadius:999, padding:'16px 30px', fontSize:16.5, fontWeight:800, cursor:'pointer', boxShadow:'var(--shadow-cta)', whiteSpace:'nowrap' }}>{u.donarAhora}</button>
        </div>
      </div>

      <div style={{ ...col, padding:'clamp(34px,5vw,52px) 24px clamp(50px,7vw,80px)' }}>
        <div style={{ fontSize:10.5, fontWeight:800, letterSpacing:.9, textTransform:'uppercase', color:'var(--muted)' }}>{u.seguirLeyendo}</div>
        <div style={{ display:'grid', gap:0, marginTop:12 }}>
          {otras.map(function(k){
            return (<button key={k} onClick={function(){ onOpen(k); }}
              style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, background:'none', border:'none', borderTop:'1px solid var(--line)', padding:'18px 0', cursor:'pointer', textAlign:'left' }}>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:19, color:'var(--ink)', letterSpacing:'-.4px' }}>{d.ventanas[k].titulo}</span>
              <span style={{ color:'var(--accent)', fontWeight:800 }}>→</span></button>);
          })}
        </div>
      </div>
    </div>
  );
}

function SPFaq({ q, a, open }) {
  const [o, setO] = React.useState(!!open);
  return (
    <div style={{ borderTop:'1px solid var(--line)' }}>
      <button onClick={function(){ setO(!o); }} style={{ width:'100%', background:'none', border:'none', padding:'18px 0', display:'flex', gap:14, alignItems:'center', textAlign:'left', cursor:'pointer' }}>
        <span style={{ fontWeight:700, fontSize:17, flex:1, color:'var(--ink)' }}>{q}</span>
        <span style={{ color:'var(--accent)', fontWeight:800, fontSize:21 }}>{o ? '–' : '+'}</span>
      </button>
      {o ? <p style={{ margin:'0 0 20px', fontSize:15.5, lineHeight:1.75, color:'var(--muted)' }}>{a}</p> : null}
    </div>
  );
}

Object.assign(window, { SectionPageExport });
