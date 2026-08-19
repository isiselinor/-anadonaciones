/* Visor de fotos a pantalla completa con navegación. */
function LightboxExport({ index, fotos, credito, onClose, onIndex }) {
  React.useEffect(function(){
    if (index == null) return;
    function k(e){
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % fotos.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + fotos.length) % fotos.length);
    }
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return function(){ document.removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [index, fotos.length, onClose, onIndex]);

  if (index == null) return null;
  const nav = { background:'rgba(255,255,255,.14)', border:'1px solid rgba(255,255,255,.4)', color:'#fff', borderRadius:999, width:44, height:44, fontSize:17, cursor:'pointer', flexShrink:0 };
  return (
    <div className="lb-root" onClick={function(e){ if (e.target === e.currentTarget) onClose(); }}
      style={{ position:'fixed', inset:0, zIndex:60, background:'#0c0e16', display:'flex', flexDirection:'column' }}>
      <div style={{ display:'flex', alignItems:'center', gap:14, padding:'16px 20px', color:'rgba(255,255,255,.75)', fontSize:12.5 }}>
        <span>{index + 1} / {fotos.length}</span>
        <span style={{ marginLeft:'auto' }}>Foto: {credito}</span>
        <button onClick={onClose} aria-label="Cerrar" style={{ ...nav, width:38, height:38, fontSize:19 }}>×</button>
      </div>
      <div style={{ flex:1, minHeight:0, display:'flex', alignItems:'center', gap:14, padding:'0 16px 26px' }}>
        <button onClick={function(){ onIndex((index - 1 + fotos.length) % fotos.length); }} aria-label="Anterior" style={nav}>←</button>
        <img className="lb-img" src={fotos[index].src} alt="" style={{ flex:1, minWidth:0, maxHeight:'100%', objectFit:'contain', borderRadius:10, display:'block', margin:'0 auto' }} />
        <button onClick={function(){ onIndex((index + 1) % fotos.length); }} aria-label="Siguiente" style={nav}>→</button>
      </div>
    </div>
  );
}

Object.assign(window, { LightboxExport });
