function Applications() {
  const apps = [
    {
      badge: "Painel Clean Solar",
      icon: "sun",
      headline: "Painéis sujos perdem até 30% de geração — todo mês",
      desc: "Um técnico limpa 260 painéis por hora com a escova G5 — sem produtos químicos, sem risco ao vidro fotovoltaico. Mais geração, menor custo operacional, cliente fidelizado.",
    },
    {
      badge: "Painel Clean Agro",
      icon: "sparkles",
      headline: "10% menos luz = colheita comprometida",
      desc: "Coberturas de policarbonato e vidro bloqueiam luz com sujeira acumulada. A limpeza periódica mantém a transmitância máxima — flores, frutas e hortaliças respondem diretamente à qualidade da luz.",
    },
    {
      badge: "Painel Clean Urban",
      icon: "building",
      headline: "7,5m de alcance — sem andaime, sem paralisação",
      desc: "Sheds industriais, telhas translúcidas e fachadas de vidro acumulam sujeira rapidamente. O cabo telescópico chega onde escada não chega, com água filtrada que não mancha nem risca.",
    },
  ];

  const solarRef = useRef(null);
  const agroRef  = useRef(null);
  const urbanRef = useRef(null);

  const AppBadge = ({ label }) => (
    <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 12px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 20, alignSelf: "flex-start" }}>
      {label}
    </div>
  );

  const AppIcon = ({ name }) => (
    <div style={{ width: 48, height: 48, borderRadius: "var(--radius-lg)", background: "linear-gradient(135deg, var(--pc-dark) 0%, var(--pc-mid) 100%)", color: "var(--pc-green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, flexShrink: 0 }}>
      <Icon name={name} size={24} stroke={1.6} />
    </div>
  );

  return (
    <section id="aplicacoes" style={{ background: "var(--pc-cream)", padding: "96px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="eyebrow center" style={{ marginBottom: 20, justifyContent: "center" }}>Aplicações</div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 3.6vw, 52px)", lineHeight: 1.08, color: "var(--pc-dark)", margin: "0 0 20px" }}>
            Uma escova. <span style={{ color: "var(--pc-green)" }}>Três mercados.</span>
          </h2>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", maxWidth: 600, margin: "0 auto" }}>
            A tecnologia brushless da Painel Clean foi desenvolvida para qualquer superfície lisa que precise de limpeza recorrente.
          </p>
        </div>

        <div className="apps-asymmetric" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 56 }}>

          {/* Solar — dominant horizontal card (left 2/3) */}
          <div ref={solarRef} className="solar-card" style={{ background: "white", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-card)", border: "1px solid var(--border-on-cream)", borderBottom: "3px solid var(--pc-green)", display: "flex", overflow: "hidden" }}>
            <div className="solar-photo" style={{ width: "42%", flexShrink: 0, overflow: "hidden" }}>
              <img src="public/images/escovaseacessorios.png" alt="Escovas e acessórios Painel Clean" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <AppBadge label={apps[0].badge} />
              <AppIcon name={apps[0].icon} />
              <h3 className="display" style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, color: "var(--pc-dark)", margin: "0 0 14px" }}>{apps[0].headline}</h3>
              <p style={{ margin: 0, font: "var(--body-sm)", color: "var(--fg-on-cream-2)", lineHeight: 1.7 }}>{apps[0].desc}</p>
            </div>
          </div>

          {/* Agro + Urban — stacked vertically (right 1/3) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div ref={agroRef} style={{ background: "white", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-card)", border: "1px solid var(--border-on-cream)", borderBottom: "3px solid var(--pc-green)", padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
              <AppBadge label={apps[1].badge} />
              <AppIcon name={apps[1].icon} />
              <h3 className="display" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.25, color: "var(--pc-dark)", margin: "0 0 10px" }}>{apps[1].headline}</h3>
              <p style={{ margin: 0, fontSize: 13, color: "var(--fg-on-cream-2)", lineHeight: 1.65 }}>{apps[1].desc}</p>
            </div>
            <div ref={urbanRef} style={{ background: "white", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-card)", border: "1px solid var(--border-on-cream)", borderBottom: "3px solid var(--pc-green)", padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
              <AppBadge label={apps[2].badge} />
              <AppIcon name={apps[2].icon} />
              <h3 className="display" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.25, color: "var(--pc-dark)", margin: "0 0 10px" }}>{apps[2].headline}</h3>
              <p style={{ margin: 0, fontSize: 13, color: "var(--fg-on-cream-2)", lineHeight: 1.65 }}>{apps[2].desc}</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <a href={wa("Olá! Quero saber mais sobre as aplicações da Painel Clean")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Fale com um especialista <Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .apps-asymmetric { grid-template-columns: 1fr !important; }
          .solar-card { flex-direction: column !important; }
          .solar-photo { width: 100% !important; height: 200px; }
        }
      `}</style>
    </section>
  );
}
