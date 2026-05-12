// Replace these IDs with real video IDs from youtube.com/@painelclean
const ytVideos = [
  { id: "VIDEO_ID_1", title: "Como limpar 500 painéis em 3 horas — rotina completa de um técnico pro", duration: "13:24" },
  { id: "VIDEO_ID_2", title: "Setup do dia 1 com a Escova D5 — do zero ao primeiro cliente em 5 dias", duration: "08:47" },
  { id: "VIDEO_ID_3", title: "Quanto cobrar por limpeza de painel solar? Precificação na prática", duration: "11:05" },
];

function YouTubeSection() {
  return (
    <section id="conteudo" style={{ background: "var(--pc-darker)", padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -200, left: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(58,213,128,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 52, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Canal YouTube</div>
            <h2 className="display" style={{ fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: 1.06, color: "white", margin: 0 }}>
              Aprenda com quem<br /><span style={{ color: "var(--pc-green)" }}>vive de solar.</span>
            </h2>
          </div>
          <a href="https://www.youtube.com/@painelclean" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 20px", border: "1px solid var(--border-on-dark-strong)", borderRadius: "var(--radius-md)", color: "white", fontWeight: 600, fontSize: 14, transition: "all 200ms" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border-on-dark-strong)"; }}>
            Ver canal completo<Icon name="youtube" size={16} />
          </a>
        </div>

        <div className="yt-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {ytVideos.map((v, i) => (
            <a key={i} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--pc-dark)", border: "1px solid var(--border-on-dark)", transition: "transform 280ms var(--ease-out), box-shadow 280ms var(--ease-out)", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ position: "relative", paddingTop: "56.25%", background: "linear-gradient(135deg, var(--pc-mid), var(--pc-dark))", overflow: "hidden" }}>
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => { e.target.style.display = "none"; }}
                />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(12,40,31,0.30)" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0F382B" aria-hidden="true">
                      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653z"/>
                    </svg>
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,0.80)", color: "white", fontSize: 11.5, fontWeight: 600, padding: "3px 7px", borderRadius: 4, letterSpacing: "0.02em" }}>{v.duration}</div>
              </div>
              <div style={{ padding: "18px 20px 22px" }}>
                <p style={{ margin: 0, color: "white", fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>{v.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .yt-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px) { .yt-grid { grid-template-columns: 1fr !important; gap: 16px !important; } }
      `}</style>
    </section>
  );
}
