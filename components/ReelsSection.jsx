// Substituir REEL_ID_N pelos IDs reais dos Reels do Instagram @painelclean
const reels = [
  { href: "https://instagram.com/p/REEL_ID_1", title: "Como limpar 500 painéis em 3 horas — rotina completa de um técnico pro" },
  { href: "https://instagram.com/p/REEL_ID_2", title: "Setup do dia 1 com a Escova D5 — do zero ao primeiro cliente" },
  { href: "https://instagram.com/p/REEL_ID_3", title: "Quanto cobrar por limpeza de painel solar? Precificação na prática" },
];

function ReelsSection() {
  return (
    <section id="conteudo" style={{ background: "var(--pc-darker)", padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -200, left: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(58,213,128,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 52, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Instagram Reels</div>
            <h2 className="display" style={{ fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: 1.06, color: "white", margin: 0 }}>
              Aprenda com quem<br /><span style={{ color: "var(--pc-green)" }}>vive de solar.</span>
            </h2>
          </div>
          <a href="https://instagram.com/painelclean" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 20px", border: "1px solid var(--border-on-dark-strong)", borderRadius: "var(--radius-md)", color: "white", fontWeight: 600, fontSize: 14, transition: "all 200ms" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border-on-dark-strong)"; }}>
            Ver todos no Instagram<Icon name="instagram" size={16} />
          </a>
        </div>

        <div className="reels-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {reels.map((r, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--pc-dark)", border: "1px solid var(--border-on-dark)" }}>
              {/* Thumbnail 9:16 */}
              <div style={{ position: "relative", paddingTop: "177.78%", background: "linear-gradient(160deg, var(--pc-mid) 0%, var(--pc-darker) 100%)", overflow: "hidden" }}>
                {/* Placeholder visual — substituir por <img src="..." /> quando tiver thumbnails */}
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 24 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653z"/>
                    </svg>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 12px", borderRadius: "var(--radius-pill)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}>
                    <Icon name="instagram" size={13} stroke={1.5} style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em" }}>REEL</span>
                  </div>
                </div>
                {/* Gradiente inferior para legibilidade */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(10,31,23,0.85), transparent)", pointerEvents: "none" }} />
              </div>

              {/* Rodapé do card */}
              <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <p style={{ margin: 0, color: "white", fontSize: 14, fontWeight: 500, lineHeight: 1.5, flex: 1 }}>{r.title}</p>
                <a href={r.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: "var(--radius-md)", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", fontWeight: 600, fontSize: 13, transition: "all 200ms", alignSelf: "flex-start" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(58,213,128,0.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--accent-fill)"; }}>
                  Ver Reel<Icon name="arrowUpRight" size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 900px) { .reels-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .reels-grid { grid-template-columns: 1fr !important; gap: 14px !important; } }
      `}</style>
    </section>
  );
}
