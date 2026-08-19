/* Ventana centrada de 960px a dos columnas — compartida por ambas direcciones de landing. */
const NSW = window.NEXOSDesignSystem_0519e6;

function SectionWindowExport({ id, onClose, onOpen, onDonate, variant, lang }) {
  const { DriveLinkButton, Button } = NSW;
  const d = window.nexosContent(lang); const u = d.ui;
  const x = window.NEXOS_FIXTURE;
  const v = id ? d.ventanas[id] : null;
  const dark = variant === 'grafica';

  React.useEffect(function(){
    if (!id) return;
    function k(e){ if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return function(){ document.removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [id, onClose]);

  if (!v) return null;
  const otras = Object.keys(d.ventanas).filter(function(k){ return k !== id; });
  const headBg = dark ? 'var(--nexos-coral)' : 'var(--ink)';

  return (
    <div className="sw-scrim" onClick={function(e){ if (e.target === e.currentTarget) onClose(); }}
      style={{ position:'fixed', inset:0, zIndex:50, background:'rgba(28,35,64,.55)', backdropFilter:'blur(10px) saturate(140%)', WebkitBackdropFilter:'blur(10px) saturate(140%)', display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'clamp(10px,2.5vh,30px) 16px', overflow:'auto' }}>
      <div className="sw-panel" style={{ width:'min(1240px,100%)', minHeight:'min(880px, 92vh)', display:'flex', flexDirection:'column', background:'#fff', borderRadius:24, overflow:'hidden', boxShadow:'0 40px 100px rgba(28,35,64,.42)' }}>
        <div style={{ background:headBg, color:'#fff', padding:'30px 40px', display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:16 }}>
          <div>
            <div style={{ fontSize:11, fontWeight:800, letterSpacing:1.6, textTransform:'uppercase', color: dark ? 'rgba(255,255,255,.8)' : 'var(--blue-lt)' }}>{v.eyebrow}</div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-1.2px', fontSize:'clamp(30px,4vw,52px)', margin:'10px 0 0', lineHeight:1.02 }}>{v.titulo}</h2>
          </div>
          <button onClick={onClose} aria-label="Cerrar" style={{ background:'rgba(255,255,255,.16)', border:'1px solid rgba(255,255,255,.45)', color:'#fff', width:38, height:38, borderRadius:999, fontSize:19, cursor:'pointer', flexShrink:0 }}>×</button>
        </div>

        <div className="sw-body" style={{ display:'grid', gridTemplateColumns:'minmax(0,1.42fr) minmax(0,1fr)', gap:0, flex:1 }}>
          <div style={{ padding:'36px 40px 44px' }}>
            {(id === 'quienes' && x.mision ? [x.mision].concat((v.cuerpo || []).slice(1)) : (v.cuerpo || [])).map(function(p, i){
              return <p key={i} style={{ fontSize:17, lineHeight:1.8, color:'var(--ink)', maxWidth:640, margin: i ? '20px 0 0' : 0 }} dangerouslySetInnerHTML={{ __html:p }} />;
            })}
            {v.datos ? (
              <div style={{ marginTop:24 }}>
                {v.datos.map(function(r){
                  return (<div key={r.k} style={{ display:'flex', justifyContent:'space-between', gap:14, padding:'12px 0', borderTop:'1px dashed var(--line)', fontSize:14 }}>
                    <span style={{ color:'var(--muted)' }}>{r.k}</span><span style={{ fontWeight:700 }}>{r.v}</span></div>);
                })}
              </div>) : null}
            {v.formas ? (
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10, marginTop:22 }}>
                {v.formas.map(function(r){
                  return (<div key={r.titulo} style={{ border:'1px solid var(--line)', borderLeft:'3px solid var(--accent)', borderRadius:12, padding:'13px 15px' }}>
                    <div style={{ fontWeight:800, fontSize:14.5 }}>{r.titulo}</div>
                    <div style={{ fontSize:13, color:'var(--muted)', marginTop:5, lineHeight:1.5 }}>{r.detalle}</div></div>);
                })}
              </div>) : null}
            {v.items ? (
              <div style={{ marginTop:8 }}>
                {v.items.map(function(it, i){ return <SWFaq key={i} q={it.q} a={it.a} open={i === 0} />; })}
              </div>) : null}
            {id === 'evidencia' ? (
              <div style={{ display:'grid', gap:12, marginTop:22 }}>
                {x.enlaceFacturas ? <DriveLinkButton tone="blue" href={x.enlaceFacturas}>📄 Ver facturas de compras</DriveLinkButton> : null}
                {x.enlaceFotos ? <DriveLinkButton tone="coral" href={x.enlaceFotos}>📷 Ver fotos de las donaciones</DriveLinkButton> : null}
              </div>) : null}
            {v.formas ? <Button variant="quietBlue" href="https://instagram.com/somos.nexosve" target="_blank" style={{ marginTop:18 }}>Escribirnos por Instagram</Button> : null}
          </div>

          <aside style={{ background:'var(--soft)', borderLeft:'1px solid var(--line)', padding:'28px', display:'flex', flexDirection:'column', gap:18 }}>
            {v.foto ? <img src={v.foto} alt="" style={{ width:'100%', height:280, objectFit:'cover', borderRadius:16, display:'block' }} /> : null}
            {v.galeria ? (
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                {v.galeria.map(function(g){ return <img key={g} src={g} alt="" style={{ width:'100%', height:96, objectFit:'cover', borderRadius:10, display:'block' }} />; })}
              </div>) : null}

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
              {[['Recaudado','≈ US$ ' + x.totalUSD,'var(--accent)'],['Ejecutado','≈ US$ ' + x.totalEgresos,'var(--blue)']].map(function(s){
                return (<div key={s[0]} style={{ background:'#fff', border:'1px solid var(--line)', borderRadius:12, padding:'11px 12px' }}>
                  <div style={{ fontSize:10, fontWeight:800, letterSpacing:.8, textTransform:'uppercase', color:'var(--muted)' }}>{s[0]}</div>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, color:s[2], marginTop:5, letterSpacing:'-.4px' }}>{s[1]}</div></div>);
              })}
            </div>

            <div style={{ background:'#fff', border:'1px solid var(--line)', borderRadius:12, padding:'6px 12px 10px' }}>
              {d.ficha.map(function(r){
                return (<div key={r.k} style={{ display:'flex', justifyContent:'space-between', gap:10, padding:'8px 0', borderTop:'1px solid var(--line)', fontSize:12.5 }}>
                  <span style={{ color:'var(--muted)' }}>{r.k}</span><span style={{ fontWeight:700 }}>{r.v}</span></div>);
              })}
            </div>

            <div style={{ marginTop:'auto', display:'grid', gap:10 }}>
              <div style={{ background:'var(--peach)', border:'1px solid var(--accent)', borderRadius:10, padding:'9px 11px', fontSize:11.5, lineHeight:1.5 }}>⚠️ En el asunto <b style={{ color:'var(--accent)' }}>no menciones Venezuela</b> ni la causa.</div>
              <button onClick={function(){ onClose(); if (onDonate) onDonate(); }} style={{ background:'var(--accent)', color:'#fff', border:'none', borderRadius:999, padding:'14px', fontSize:15, fontWeight:800, cursor:'pointer', boxShadow:'var(--shadow-cta)' }}>💙 Donar ahora</button>
            </div>

            <div style={{ borderTop:'1px solid var(--line)', paddingTop:12 }}>
              <div style={{ fontSize:10, fontWeight:800, letterSpacing:.9, textTransform:'uppercase', color:'var(--muted)', marginBottom:8 }}>Otras ventanas</div>
              <div style={{ display:'grid', gap:6 }}>
                {otras.map(function(k){
                  return <button key={k} onClick={function(){ onOpen(k); }} style={{ background:'none', border:'none', padding:0, textAlign:'left', cursor:'pointer', fontSize:13, fontWeight:700, color:'var(--blue)' }}>{d.ventanas[k].titulo} →</button>;
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SWFaq({ q, a, open }) {
  const [o, setO] = React.useState(!!open);
  return (
    <div style={{ borderBottom:'1px solid var(--line)' }}>
      <button onClick={function(){ setO(!o); }} style={{ width:'100%', background:'none', border:'none', padding:'15px 0', display:'flex', gap:12, alignItems:'center', textAlign:'left', cursor:'pointer' }}>
        <span style={{ fontWeight:700, fontSize:15, flex:1, color:'var(--ink)' }}>{q}</span>
        <span style={{ color:'var(--accent)', fontWeight:800, fontSize:19 }}>{o ? '–' : '+'}</span>
      </button>
      {o ? <p style={{ margin:'0 0 16px', fontSize:14, lineHeight:1.7, color:'var(--muted)' }}>{a}</p> : null}
    </div>
  );
}

Object.assign(window, { SectionWindowExport });
