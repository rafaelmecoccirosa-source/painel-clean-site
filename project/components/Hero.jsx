const heroSlides = [
  {
    eyebrow: "Equipamentos profissionais",
    title: ["Limpe mais.", "Ganhe mais.", "Em menos tempo."],
    accentLine: 2, // index of green-highlighted line
    description:
      "Motor brushless, sem produtos químicos, até 260 painéis por hora. Tecnologia profissional para quem vive de solar.",
    primary: { label: "Ver equipamentos", href: "#produtos" },
    secondary: { label: "Plataforma de serviços", href: "https://painel-clean-v2.vercel.app" },
    image: "public/images/hero-1.jpg",
    meta: [
      { k: "260", v: "painéis/h" },
      { k: "+30%", v: "geração" },
      { k: "0", v: "químicos" },
    ],
  },
  {
    eyebrow: "Promoção · tempo limitado",
    title: ["Refil de cerdas.", "20% off.", "Estoque limitado."],
    accentLine: 1,
    description:
      "Cerdas profissionais para vidro fotovoltaico. Substituição rápida, mesmo desempenho do dia 1. Aproveite antes de acabar.",
    primary: { label: "Aproveitar oferta", href: waLink("Olá! Quero aproveitar o desconto no Refil de Cerdas.") },
    secondary: { label: "Ver todos os produtos", href: "#produtos" },
    image: "public/images/hero-promo.jpg",
    meta: [
      { k: "R$ 290", v: "de" },
      { k: "R$ 232", v: "por", highlight: true },
      { k: "20%", v: "off" },
    ],
  },
  {
    eyebrow: "Novo no YouTube",
    title: ["Como limpar", "500 painéis", "em 3 horas."],
    accentLine: 1,
    description:
      "Rotina completa de um técnico profissional Painel Clean. Do setup ao relatório final, sem cortes.",
    primary: { label: "Assistir agora", href: "#" },
    secondary: { label: "Ver mais conteúdos", href: "#" },
    image: "public/images/hero-video.jpg",
    meta: [
      { k: "13min", v: "de vídeo" },
      { k: "Cap. 1", v: "rotina pro" },
      { k: "Grátis", v: "no YouTube" },
    ],
  },
];

function Hero() {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = heroSlides.length;
  const SLIDE_MS = 7000;

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(1, elapsed / SLIDE_MS);
      setProgress(p);
      if (p >= 1) setIdx((i) => (i + 1) % total);
    }, 40);
    return () => clearInterval(tick);
  }, [idx]);

  const slide = heroSlides[idx];

  return (
    <section
      style={{
        position: "relative",
        background: "var(--pc-darker)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        paddingTop: 76,
      }}
    >
      {/* Subtle radial accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 0% 30%, rgba(58,213,128,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(58,213,128,0.06), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.05fr)",
          alignItems: "stretch",
          minHeight: "calc(100vh - 76px)",
        }}
        className="hero-grid"
      >
        {/* Left: text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 56px 96px",
            position: "relative",
            zIndex: 2,
          }}
          className="hero-text"
        >
          <div style={{ maxWidth: 640 }} key={idx}>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(58,213,128,0.10)",
                border: "1px solid rgba(58,213,128,0.25)",
                color: "var(--pc-green)",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 32,
                animation: "fadeUp 600ms ease both",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--pc-green)",
                  animation: "pulseDot 1.6s infinite",
                }}
              />
              {slide.eyebrow}
            </div>

            {/* Title — IBM Plex Sans, big */}
            <h1
              className="font-display hero-title"
              style={{
                fontSize: "clamp(44px, 6.2vw, 84px)",
                fontWeight: 600,
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                margin: 0,
                marginBottom: 28,
              }}
            >
              {slide.title.map((line, i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    color: i === slide.accentLine ? "var(--pc-green)" : "white",
                    animation: `fadeUp 700ms ${i * 90}ms ease both`,
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.66)",
                maxWidth: 520,
                margin: 0,
                marginBottom: 40,
                animation: "fadeUp 800ms 280ms ease both",
              }}
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 56,
                animation: "fadeUp 800ms 380ms ease both",
              }}
            >
              <a
                href={slide.primary.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "var(--pc-green)",
                  color: "var(--pc-dark)",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "16px 26px",
                  borderRadius: 12,
                  transition: "transform 200ms, box-shadow 200ms, background 200ms",
                  boxShadow: "0 8px 24px rgba(58,213,128,0.20)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(58,213,128,0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(58,213,128,0.20)";
                }}
              >
                {slide.primary.label}
                <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
              </a>
              <a
                href={slide.secondary.href}
                target={slide.secondary.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "16px 24px",
                  borderRadius: 12,
                  transition: "background 200ms, border-color 200ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                }}
              >
                {slide.secondary.label}
              </a>
            </div>

            {/* Meta row */}
            <div
              style={{
                display: "flex",
                gap: 36,
                flexWrap: "wrap",
                paddingTop: 28,
                borderTop: "1px solid rgba(255,255,255,0.10)",
                animation: "fadeUp 900ms 480ms ease both",
              }}
            >
              {slide.meta.map((m, i) => (
                <div key={i}>
                  <div
                    className="font-display"
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: m.highlight ? "var(--pc-green)" : "white",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {m.k}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: image — fullbleed */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: 440,
          }}
          className="hero-image-wrap"
        >
          {heroSlides.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                opacity: i === idx ? 1 : 0,
                transition: "opacity 900ms ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  animation: i === idx ? "kenburns 14s ease-out forwards" : "none",
                }}
              />
            </div>
          ))}

          {/* Dark gradient overlay for text legibility on left edge + bottom */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, var(--pc-darker) 0%, rgba(10,38,32,0.50) 18%, rgba(10,38,32,0) 40%), linear-gradient(180deg, rgba(10,38,32,0.30) 0%, rgba(10,38,32,0) 30%, rgba(10,38,32,0.55) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Slide counter overlay top-right */}
          <div
            style={{
              position: "absolute",
              top: 32,
              right: 40,
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              background: "rgba(10,38,32,0.55)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              color: "white",
              letterSpacing: "0.08em",
            }}
            className="hero-counter"
          >
            <span style={{ color: "var(--pc-green)" }}>0{idx + 1}</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>0{total}</span>
          </div>
        </div>
      </div>

      {/* Bottom controls — overlaid on hero */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 56px",
          zIndex: 3,
          pointerEvents: "none",
        }}
        className="hero-controls"
      >
        {/* Dots */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, pointerEvents: "auto" }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                position: "relative",
                width: i === idx ? 56 : 28,
                height: 3,
                background: "rgba(255,255,255,0.18)",
                borderRadius: 999,
                overflow: "hidden",
                transition: "width 400ms ease",
                padding: 0,
              }}
            >
              {i === idx && (
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: `${progress * 100}%`,
                    background: "var(--pc-green)",
                    borderRadius: 999,
                  }}
                />
              )}
              {i < idx && (
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.5)",
                    borderRadius: 999,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, pointerEvents: "auto" }}>
          <button
            onClick={() => setIdx((idx - 1 + total) % total)}
            aria-label="Anterior"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            }}
          >
            <i data-lucide="arrow-left" style={{ width: 16, height: 16 }}></i>
          </button>
          <button
            onClick={() => setIdx((idx + 1) % total)}
            aria-label="Próximo"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            }}
          >
            <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
          </button>
        </div>
      </div>

      {/* Mobile: image as background */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            position: relative;
          }
          .hero-text {
            padding: 48px 24px 140px !important;
            min-height: calc(100vh - 76px);
          }
          .hero-image-wrap {
            position: absolute !important;
            inset: 0 !important;
            z-index: 0;
            min-height: 0 !important;
          }
          .hero-image-wrap > div:last-child {
            background: linear-gradient(180deg, rgba(10,38,32,0.55) 0%, rgba(10,38,32,0.85) 60%, var(--pc-darker) 100%) !important;
          }
          .hero-text > div { position: relative; z-index: 2; }
          .hero-controls { padding: 0 24px !important; }
          .hero-counter { right: 24px !important; top: 96px !important; }
        }
      `}</style>
    </section>
  );
}
