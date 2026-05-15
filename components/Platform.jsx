function Platform() {
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: "Para donos de usina", icon: "home", eyebrow: "Cliente", title: "Sua usina monitorada todo mês.", desc: "Publique sua usina e receba orçamentos de técnicos credenciados na sua região. Histórico de limpezas e laudos de desempenho.", cta: "Cadastrar usina",
      stats: [{ k: "13", v: "cidades atendidas" }, { k: "+30%", v: "ganho médio" }, { k: "24h", v: "resposta média" }] },
    { label: "Para técnicos", icon: "wrench", eyebrow: "Técnico", title: "Carteira recorrente, sem prospecção.", desc: "Receba chamados na sua área, gerencie agenda e emita relatórios profissionais. Foque na operação enquanto a plataforma traz clientes.", cta: "Quero ser credenciado",
      stats: [{ k: "R$ 280", v: "ticket médio" }, { k: "92%", v: "retenção" }, { k: "Pix", v: "repasse rápido" }] },
  ];
  const t = tabs[tab];
  return (
    <section id="plataforma" style={{ background: "var(--pc-cream)", padding: "120px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
          <div className="eyebrow no-rule" style={{ color: "var(--pc-green-2)", justifyContent: "center", marginBottom: 18 }}>Ecossistema Painel Clean</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.05, color: "var(--fg-on-cream-1)", margin: "0 0 18px" }}>Plataforma de serviços</h2>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", margin: "0 0 16px" }}>Conectamos donos de usinas a técnicos qualificados em todo o Brasil. Marketplace verificado, com pagamento protegido.</p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            <Icon name="sun" size={12} stroke={2} />Para donos de usinas solares
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", padding: 4, background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-pill)", gap: 4 }}>
            {tabs.map((x, i) => (
              <button key={i} onClick={() => setTab(i)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", borderRadius: "var(--radius-pill)", background: tab === i ? "var(--pc-dark)" : "transparent", color: tab === i ? "white" : "var(--fg-on-cream-3)", fontWeight: 600, fontSize: 14, transition: "all 200ms" }}>
                <Icon name={x.icon} size={14} stroke={2} />{x.label}
              </button>
            ))}
          </div>
        </div>

        <div key={tab} className="platform-card" style={{ background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-2xl)", overflow: "hidden", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,0.85fr)", animation: "fadeUp 500ms ease both" }}>
          <div className="platform-content" style={{ padding: "56px 52px" }}>
            <div style={{ font: "var(--label-sm)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pc-green-2)", marginBottom: 16 }}>{t.eyebrow}</div>
            <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.15, color: "var(--fg-on-cream-1)", margin: "0 0 20px" }}>{t.title}</h3>
            <p style={{ font: "var(--body)", color: "var(--fg-on-cream-2)", margin: "0 0 36px" }}>{t.desc}</p>
            <a href="https://painel-clean-v2.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">{t.cta}<Icon name="arrowRight" size={16} /></a>
          </div>

          <div style={{ background: "linear-gradient(155deg, var(--pc-dark) 0%, var(--pc-darker) 100%)", padding: "56px 52px", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }} aria-hidden="true">
              <defs><pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="white" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
            <div style={{ position: "relative" }}>
              {t.stats.map((s, i) => (
                <div key={i} style={{ paddingBottom: 24, marginBottom: 24, borderBottom: i < t.stats.length - 1 ? "1px solid var(--border-on-dark)" : "none" }}>
                  <div className="display" style={{ fontSize: 44, fontWeight: 600, color: "var(--pc-green)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }}>{s.k}</div>
                  <div style={{ fontSize: 13.5, color: "var(--fg-3)" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .platform-card { grid-template-columns: 1fr !important; } .platform-content { padding: 40px 32px !important; } }`}</style>
    </section>
  );
}
