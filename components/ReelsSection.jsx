const reels = [
  { href: "https://www.instagram.com/reel/DYNwi11xuWd/", title: "Como limpar 500 painéis em 3 horas — rotina completa de um técnico pro" },
  { href: "https://www.instagram.com/reel/DYM5cpkxlPM/", title: "Setup do dia 1 com a Escova D5 — do zero ao primeiro cliente" },
  { href: "https://www.instagram.com/reel/DYDbgI4DP3A/", title: "Quanto cobrar por limpeza de painel solar? Precificação na prática" },
];

function ReelsSection() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

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
          <a href="https://www.instagram.com/painelclean/" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 20px", border: "1px solid var(--border-on-dark-strong)", borderRadius: "var(--radius-md)", color: "white", fontWeight: 600, fontSize: 14, transition: "all 200ms" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border-on-dark-strong)"; }}>
            Ver todos no Instagram<Icon name="instagram" size={16} />
          </a>
        </div>

        <div className="reels-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}>
          {reels.map((r, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={r.href}
                data-instgrm-version="14"
                data-instgrm-captioned
                style={{ margin: "0 auto", maxWidth: "100%", width: "100%", minWidth: 0, background: "var(--pc-dark)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-xl)" }}
              />
            </div>
          ))}
        </div>

      </div>
      <style>{`
        .reels-grid .instagram-media { width: 100% !important; min-width: 0 !important; }
        @media (max-width: 900px) { .reels-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .reels-grid { grid-template-columns: 1fr !important; gap: 14px !important; } }
      `}</style>
    </section>
  );
}
