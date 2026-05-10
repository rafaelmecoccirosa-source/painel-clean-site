function Platform() {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      label: "Para donos de usina",
      icon: "home",
      eyebrow: "Cliente",
      title: "Sua usina monitorada todo mês.",
      desc: "Publique sua usina e receba orçamentos de técnicos credenciados na sua região. Acompanhe histórico de limpezas e laudos de desempenho.",
      cta: "Cadastrar usina",
      stats: [
        { k: "13", v: "cidades atendidas" },
        { k: "+30%", v: "ganho médio" },
        { k: "24h", v: "resposta média" },
      ],
    },
    {
      label: "Para técnicos",
      icon: "wrench",
      eyebrow: "Técnico",
      title: "Carteira recorrente, sem prospecção.",
      desc: "Receba chamados de limpeza na sua área, gerencie sua agenda e emita relatórios profissionais. Foque na operação enquanto a plataforma traz clientes.",
      cta: "Quero ser credenciado",
      stats: [
        { k: "R$ 280", v: "ticket médio" },
        { k: "92%", v: "taxa de retenção" },
        { k: "Pix", v: "repasse rápido" },
      ],
    },
  ];
  const t = tabs[tab];
  return (
    <section id="plataforma" style={{ background: "var(--pc-cream)", padding: "120px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--pc-green-soft)",
              marginBottom: 18,
            }}
          >
            Ecossistema Painel Clean
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 4.6vw, 60px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--pc-dark)",
              margin: 0,
              marginBottom: 18,
            }}
          >
            Plataforma de serviços
          </h2>
          <p style={{ fontSize: 17, color: "rgba(15,56,43,0.62)", lineHeight: 1.55, margin: 0 }}>
            Conectamos donos de usinas fotovoltaicas a técnicos qualificados em todo o Brasil.
            Um marketplace verificado, com pagamento protegido pela plataforma.
          </p>
        </div>

        {/* Tab switcher */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              padding: 4,
              background: "white",
              border: "1px solid var(--pc-line)",
              borderRadius: 999,
              gap: 4,
            }}
          >
            {tabs.map((x, i) => (
              <button
                key={i}
                onClick={() => setTab(i)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 22px",
                  borderRadius: 999,
                  background: tab === i ? "var(--pc-dark)" : "transparent",
                  color: tab === i ? "white" : "rgba(15,56,43,0.6)",
                  fontWeight: 600,
                  fontSize: 14,
                  transition: "all 200ms",
                }}
              >
                <i data-lucide={x.icon} style={{ width: 14, height: 14 }}></i>
                {x.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div
          key={tab}
          style={{
            background: "white",
            border: "1px solid var(--pc-line)",
            borderRadius: 28,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.85fr)",
            animation: "fadeUp 500ms ease both",
          }}
          className="platform-card"
        >
          <div style={{ padding: "56px 52px" }} className="platform-content">
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--pc-green-soft)",
                marginBottom: 16,
              }}
            >
              {t.eyebrow}
            </div>
            <h3
              className="font-display"
              style={{
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--pc-dark)",
                margin: 0,
                marginBottom: 20,
              }}
            >
              {t.title}
            </h3>
            <p style={{ fontSize: 16, color: "rgba(15,56,43,0.62)", lineHeight: 1.6, margin: 0, marginBottom: 36 }}>
              {t.desc}
            </p>

            <a
              href="https://painel-clean-v2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
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
                transition: "transform 200ms, background 200ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#4FE090";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--pc-green)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {t.cta}
              <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
            </a>
          </div>

          {/* Right: stats panel */}
          <div
            style={{
              background: "linear-gradient(155deg, var(--pc-dark) 0%, var(--pc-darker) 100%)",
              padding: "56px 52px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 32,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* dot pattern */}
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}
              aria-hidden="true"
            >
              <defs>
                <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            <div style={{ position: "relative" }}>
              {t.stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    paddingBottom: 24,
                    marginBottom: 24,
                    borderBottom: i < t.stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: 44,
                      fontWeight: 600,
                      color: "var(--pc-green)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {s.k}
                  </div>
                  <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .platform-card { grid-template-columns: 1fr !important; }
          .platform-content { padding: 40px 32px !important; }
        }
      `}</style>
    </section>
  );
}
