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
        <div className="apps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginBottom: 56 }}>
          {apps.map((a, i) => (
            <div key={i} style={{ background: "white", borderRadius: "var(--radius-xl)", padding: "36px 32px 32px", boxShadow: "var(--shadow-card)", border: "1px solid var(--border-on-cream)", borderBottom: "3px solid var(--pc-green)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 12px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 28, alignSelf: "flex-start" }}>
                {a.badge}
              </div>
              <div style={{ width: 56, height: 56, borderRadius: "var(--radius-lg)", background: "linear-gradient(135deg, var(--pc-dark) 0%, var(--pc-mid) 100%)", color: "var(--pc-green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, flexShrink: 0 }}>
                <Icon name={a.icon} size={28} stroke={1.6} />
              </div>
              <h3 className="display" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.2, color: "var(--pc-dark)", margin: "0 0 14px" }}>{a.headline}</h3>
              <p style={{ margin: 0, font: "var(--body-sm)", color: "var(--fg-on-cream-2)", lineHeight: 1.7, flexGrow: 1 }}>{a.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href={wa("Olá! Quero saber mais sobre as aplicações da Painel Clean")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Fale com um especialista <Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { .apps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
