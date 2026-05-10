function Footer() {
  const cols = [
    { title: "Produtos", links: [{ l: "Escova Rotativa G5", h: "#equipamentos" }, { l: "Escova Dupla D5", h: "#equipamentos" }, { l: "Escova Solo S5", h: "#equipamentos" }, { l: "Acessórios e refis", h: "#" }] },
    { title: "Aprenda", links: [{ l: "Treinamento online", h: "#treinamento" }, { l: "Plataforma de serviços", h: "#plataforma" }, { l: "Canal no YouTube", h: "#" }, { l: "Calculadora de ROI", h: "#roi" }] },
    { title: "Contato", links: [{ l: "WhatsApp · (47) 99678-5953", h: wa() }, { l: "contato@painelclean.com.br", h: "mailto:contato@painelclean.com.br" }, { l: "Instagram @painelclean", h: "https://www.instagram.com/painelclean/" }, { l: "LinkedIn", h: "https://www.linkedin.com/company/painel-clean/" }] },
  ];
  return (
    <footer style={{ background: "var(--pc-deepest)", color: "white", padding: "80px 0 36px", borderTop: "1px solid var(--border-on-dark-soft)" }}>
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) repeat(3, minmax(0,1fr))", gap: 56, marginBottom: 64 }}>
          <div>
            <Logo />
            <p style={{ marginTop: 22, font: "var(--body-sm)", color: "var(--fg-3)", maxWidth: 320 }}>
              Equipamentos profissionais para limpeza de painéis fotovoltaicos. Motor brushless, sem químicos, máxima eficiência.
            </p>
            <div style={{ marginTop: 24, display: "flex", alignItems: "flex-start", gap: 10, color: "var(--fg-4)", fontSize: 13, lineHeight: 1.55 }}>
              <span style={{ flexShrink: 0, marginTop: 2 }}><Icon name="location" size={14} /></span>
              <div>
                Rua Cesare Valentini, 265, sala 17<br />
                Novale Ind, Jaraguá do Sul/SC<br />
                CEP 89254-193 · CNPJ 32.852.325/0001-99
              </div>
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div style={{ font: "var(--eyebrow)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pc-green)", marginBottom: 22 }}>{c.title}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {c.links.map((l, j) => (
                  <li key={j}>
                    <a href={l.h} style={{ color: "var(--fg-2)", fontSize: 14.5, transition: "color 200ms" }}
                      onMouseEnter={e => e.currentTarget.style.color = "white"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--fg-2)"}>{l.l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 28, borderTop: "1px solid var(--border-on-dark)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: "var(--fg-4)" }}>
          <span>© 2026 Painel Clean. Todos os direitos reservados.</span>
          <span style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "inherit" }}>Termos</a>
            <a href="#" style={{ color: "inherit" }}>Privacidade</a>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pc-green)", animation: "pulseDot 2s infinite" }} />
              Atendimento · Seg–Sex 8h–18h
            </span>
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }
        @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
