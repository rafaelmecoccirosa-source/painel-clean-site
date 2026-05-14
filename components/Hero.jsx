const heroSlides = [
  {
    eyebrow: "Linha profissional",
    title: ["Limpe mais.", "Ganhe mais.", "Em menos tempo."],
    accentLine: 2,
    description: "Motor brushless, sem produtos químicos, até 260 painéis por hora. Tecnologia profissional para quem vive de solar.",
    primary: { label: "Ver equipamentos", href: "#equipamentos" },
    secondary: { label: "Plataforma de serviços", href: "https://painel-clean-v2.vercel.app" },
    image: "public/images/painel_clean_-_limpando_telhado.png",
    meta: [{ k: "260", v: "painéis/h" }, { k: "+30%", v: "geração" }, { k: "0", v: "químicos" }],
  },
  {
    eyebrow: "Promoção — tempo limitado",
    title: ["Refil de cerdas.", "20% off.", "Estoque limitado."],
    accentLine: 1,
    description: "Cerdas profissionais para vidro fotovoltaico. Substituição rápida, mesmo desempenho do dia 1.",
    primary: { label: "Aproveitar oferta", href: wa("Olá! Quero aproveitar o desconto no Refil de Cerdas.") },
    secondary: { label: "Ver todos os produtos", href: "#equipamentos" },
    image: "public/images/hero-promo.jpg",
    meta: [{ k: "R$ 290", v: "de" }, { k: "R$ 232", v: "por", highlight: true }, { k: "20%", v: "off" }],
  },
  {
    eyebrow: "Novo no YouTube",
    title: ["Como limpar", "500 painéis", "em 3 horas."],
    accentLine: 1,
    description: "Rotina completa de um técnico profissional Painel Clean. Do setup ao relatório final, sem cortes.",
    primary: { label: "Assistir agora", href: "#" },
    secondary: { label: "Ver mais conteúdos", href: "#" },
    image: "public/images/hero-video.jpg",
    meta: [{ k: "13min", v: "de vídeo" }, { k: "Cap. 1", v: "rotina pro" }, { k: "Grátis", v: "no YouTube" }],
  },
];

function Hero() {
  const t = useT();
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = heroSlides.length;
  const SLIDE_MS = 7000;
  const TR = t.heroTreatment;
  const accent = t.heroAccent;

  const overlayBg = {
    gradient: "linear-gradient(90deg, var(--pc-darker) 0%, rgba(12,40,31,0.60) 30%, rgba(12,40,31,0.10) 70%)",
    split:    "linear-gradient(90deg, var(--pc-darker) 0%, var(--pc-darker) 8%, rgba(12,40,31,0) 9%)",
    duotone:  "linear-gradient(135deg, rgba(15,56,43,0.78) 0%, rgba(58,213,128,0.32) 100%)",
    minimal:  "linear-gradient(90deg, rgba(12,40,31,0.95) 0%, rgba(12,40,31,0.40) 40%, rgba(12,40,31,0.10) 100%)",
    dotted:   "linear-gradient(90deg, var(--pc-darker) 0%, rgba(12,40,31,0.55) 25%, rgba(12,40,31,0.25) 60%)",
  }[TR] || "var(--pc-darker)";

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / SLIDE_MS);
      setProgress(p);
      if (p >= 1) setIdx(i => (i + 1) % total);
    }, 40);
    return () => clearInterval(tick);
  }, [idx]);

  const s = heroSlides[idx];

  return (
    <section className="hero-section" style={{ position: "relative", background: "var(--pc-darker)", color: "white", minHeight: "100vh", overflow: "hidden", paddingTop: 76 }}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 0% 30%, rgba(58,213,128,.10), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(58,213,128,.06), transparent 60%)", pointerEvents: "none" }} />

      {/* Image panel — bleeds from 50vw to right edge on desktop */}
      <div className="hero-image-panel">
        {heroSlides.map((sl, i) => (
          <div key={i} style={{ position: "absolute", inset: 0, opacity: i === idx ? 1 : 0, transition: "opacity 900ms ease" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${sl.image}')`, backgroundSize: "cover", backgroundPosition: "center", animation: i === idx ? "kenburns 14s ease-out forwards" : "none" }} />
          </div>
        ))}
        <div className="hero-overlay" style={{ position: "absolute", inset: 0, background: overlayBg, pointerEvents: "none" }} />
        {TR === "dotted" && (
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", mixBlendMode: "multiply", opacity: 0.55 }} aria-hidden="true">
            <defs><pattern id="hero-dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#0A1F17" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>
        )}
        {TR === "duotone" && (
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, var(--pc-darker) 0%, ${accent} 100%)`, mixBlendMode: "color", opacity: 0.85, pointerEvents: "none" }} />
        )}
        <div className="hero-counter" style={{ position: "absolute", top: 32, right: 40, display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "rgba(12,40,31,0.55)", backdropFilter: "blur(10px)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-pill)", fontSize: 12, fontWeight: 600, color: "white", letterSpacing: "0.08em" }}>
          <span style={{ color: "var(--pc-green)" }}>0{idx + 1}</span>
          <span style={{ color: "var(--fg-5)" }}>/</span>
          <span style={{ color: "var(--fg-3)" }}>0{total}</span>
        </div>
      </div>

      {/* Text — aligned to container, left half */}
      <div className="container hero-content" style={{ position: "relative", zIndex: 2, minHeight: "calc(100vh - 76px)", display: "flex", alignItems: "center" }}>
        <div className="hero-text" style={{ width: "50%", maxWidth: 620, paddingTop: 64, paddingBottom: 96, paddingRight: 48 }} key={idx}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill-soft)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", font: "var(--eyebrow)", textTransform: "uppercase", letterSpacing: "var(--tracking-eyebrow)", marginBottom: 32, animation: "fadeUp 600ms ease both" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pc-green)", animation: "pulseDot 1.6s infinite" }} />
            {s.eyebrow}
          </div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 5.2vw, 80px)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 28px" }}>
            {s.title.map((line, i) => (
              <span key={i} style={{ display: "block", color: i === s.accentLine ? accent : "white", animation: `fadeUp 700ms ${i * 90}ms ease both` }}>{line}</span>
            ))}
          </h1>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", maxWidth: 480, margin: "0 0 40px", animation: "fadeUp 800ms 280ms ease both" }}>{s.description}</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56, animation: "fadeUp 800ms 380ms ease both" }}>
            <a href={s.primary.href} className="btn-primary">{s.primary.label}<Icon name="arrowRight" size={16} /></a>
            <a href={s.secondary.href} target={s.secondary.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="btn-ghost-dark">{s.secondary.label}</a>
          </div>
          <div style={{ display: "flex", gap: 36, flexWrap: "wrap", paddingTop: 28, borderTop: "1px solid var(--border-on-dark)", animation: "fadeUp 900ms 480ms ease both" }}>
            {s.meta.map((m, i) => (
              <div key={i}>
                <div className="display" style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: m.highlight ? "var(--pc-green)" : "white", lineHeight: 1, marginBottom: 6 }}>{m.k}</div>
                <div style={{ font: "var(--body-xs)", color: "var(--fg-4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="hero-controls" style={{ position: "absolute", left: 0, right: 0, bottom: 32, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 56px", zIndex: 3, pointerEvents: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, pointerEvents: "auto" }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
              style={{ position: "relative", width: i === idx ? 56 : 28, height: 3, background: "rgba(255,255,255,0.18)", borderRadius: 999, overflow: "hidden", transition: "width 400ms ease", padding: 0 }}>
              {i === idx && <span style={{ position: "absolute", inset: 0, width: `${progress * 100}%`, background: "var(--pc-green)", borderRadius: 999 }} />}
              {i < idx && <span style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.5)", borderRadius: 999 }} />}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, pointerEvents: "auto" }}>
          {[{ n: "arrowLeft", d: -1 }, { n: "arrowRight", d: 1 }].map(b => (
            <button key={b.n} onClick={() => setIdx((idx + b.d + total) % total)}
              style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--border-on-dark-strong)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 200ms" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border-on-dark-strong)"; }}>
              <Icon name={b.n} size={16} />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        /* Desktop: image panel bleeds from viewport center to right edge */
        .hero-image-panel {
          position: absolute;
          top: 76px;
          bottom: 0;
          left: 50%;
          right: 0;
          overflow: hidden;
        }

        @media (max-width: 960px) {
          .hero-section { min-height: 0 !important; }
          /* Mobile: image stacks on top, full width */
          .hero-image-panel {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: auto !important;
            height: 280px;
            width: 100%;
          }
          .hero-overlay {
            background: linear-gradient(180deg, rgba(12,40,31,0.08) 0%, rgba(12,40,31,0.28) 100%) !important;
          }
          .hero-content { min-height: 0 !important; }
          .hero-text {
            width: 100% !important;
            max-width: none !important;
            padding: 36px 0 96px !important;
          }
          .hero-controls { padding: 0 20px !important; bottom: 20px !important; }
          .hero-counter { display: none !important; }
        }
        @media (max-width: 520px) {
          .hero-image-panel { height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
