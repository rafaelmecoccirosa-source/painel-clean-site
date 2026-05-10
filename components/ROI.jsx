function ROI() {
  const [kwp, setKwp] = useState(50);
  const TARIFF = 0.95;
  const HOURS_SUN = 4.5;
  const DAYS = 30;
  const monthlyGen = kwp * HOURS_SUN * DAYS;
  const monthlyRevenue = monthlyGen * TARIFF;
  const lossDirty = 0.30;
  const recovered = monthlyRevenue * lossDirty;
  const annualRecovered = recovered * 12;

  return (
    <section id="roi" style={{ background: "var(--pc-cream)", padding: "120px 0", borderTop: "1px solid var(--border-on-cream)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)", gap: 64, alignItems: "center" }} className="roi-grid">
          <div>
            <div className="eyebrow" style={{ color: "var(--pc-green-2)", marginBottom: 18 }}>Calculadora de ROI</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--fg-on-cream-1)", margin: "0 0 20px" }}>
              Quanto a sujeira <span style={{ color: "var(--fg-on-cream-3)" }}>está te custando?</span>
            </h2>
            <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", margin: "0 0 32px", maxWidth: 480 }}>
              Painéis sujos podem perder até 30% de geração. Mova o slider e veja o quanto você recupera com limpeza profissional regular.
            </p>
            <div style={{ padding: "28px 28px", background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
                <label htmlFor="kwp" style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Potência da usina</label>
                <span className="display" style={{ fontSize: 32, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.02em" }}>{kwp} <span style={{ fontSize: 14, color: "var(--fg-on-cream-3)" }}>kWp</span></span>
              </div>
              <input id="kwp" type="range" min="5" max="500" step="5" value={kwp} onChange={e => setKwp(+e.target.value)}
                style={{ width: "100%", accentColor: "var(--pc-green-2)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-on-cream-3)", marginTop: 6 }}>
                <span>5 kWp</span><span>residencial · comercial · usina</span><span>500 kWp</span>
              </div>
            </div>
          </div>

          <div style={{ background: "linear-gradient(155deg, var(--pc-dark) 0%, var(--pc-darker) 100%)", color: "white", borderRadius: "var(--radius-2xl)", padding: "48px 44px", position: "relative", overflow: "hidden", border: "1px solid var(--border-accent)" }}>
            <div style={{ position: "absolute", top: -100, right: -100, width: 280, height: 280, background: "radial-gradient(circle, rgba(58,213,128,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div className="eyebrow no-rule" style={{ color: "var(--pc-green)", marginBottom: 24 }}>Sua recuperação estimada</div>
              <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid var(--border-on-dark)" }}>
                <div style={{ font: "var(--body-sm)", color: "var(--fg-3)", marginBottom: 6 }}>Geração mensal estimada</div>
                <div className="display" style={{ fontSize: 28, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>{Math.round(monthlyGen).toLocaleString("pt-BR")} kWh</div>
              </div>
              <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid var(--border-on-dark)" }}>
                <div style={{ font: "var(--body-sm)", color: "var(--fg-3)", marginBottom: 6 }}>Perda mensal por sujeira (até 30%)</div>
                <div className="display" style={{ fontSize: 28, fontWeight: 600, color: "#FF8C5A", letterSpacing: "-0.02em" }}>– R$ {Math.round(recovered).toLocaleString("pt-BR")}</div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ font: "var(--body-sm)", color: "var(--fg-3)", marginBottom: 6 }}>Recuperação anual com limpeza</div>
                <div className="display" key={annualRecovered} style={{ fontSize: 56, fontWeight: 600, color: "var(--pc-green)", letterSpacing: "-0.03em", lineHeight: 1, animation: "countUp 320ms var(--ease-out)" }}>R$ {Math.round(annualRecovered).toLocaleString("pt-BR")}</div>
              </div>
              <a href={wa(`Olá! Tenho uma usina de ${kwp} kWp e quero saber mais sobre limpeza profissional.`)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Quero recuperar essa receita<Icon name="arrowRight" size={16} />
              </a>
              <div style={{ marginTop: 18, fontSize: 12, color: "var(--fg-4)", textAlign: "center" }}>
                Estimativa baseada em 4,5h sol/dia, tarifa R$ 0,95/kWh, perda média 30%.
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 960px) { .roi-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
