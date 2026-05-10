function Footer() {
  const cols = [
    {
      title: "Produtos",
      links: [
        { label: "Escova Rotativa G5", href: "#produtos" },
        { label: "Escova Dupla D5", href: "#produtos" },
        { label: "Escova Solo S5", href: "#produtos" },
        { label: "Acessórios e refis", href: "#" },
      ],
    },
    {
      title: "Aprenda",
      links: [
        { label: "Treinamento online", href: "#treinamento" },
        { label: "Plataforma de serviços", href: "#plataforma" },
        { label: "Canal no YouTube", href: "#" },
        { label: "Blog técnico", href: "#" },
      ],
    },
    {
      title: "Contato",
      links: [
        { label: "WhatsApp", href: "https://wa.me/5547996785953" },
        { label: "Instagram", href: "#" },
        { label: "YouTube", href: "#" },
        { label: "contato@painelclean.com.br", href: "mailto:contato@painelclean.com.br" },
      ],
    },
  ];

  return (
    <footer style={{ background: "var(--pc-darker)", color: "white", padding: "80px 0 36px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))",
            gap: 56,
            marginBottom: 64,
          }}
          className="footer-grid"
        >
          <div>
            <Logo />
            <p
              style={{
                marginTop: 22,
                fontSize: 14.5,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.6,
                maxWidth: 320,
              }}
            >
              Equipamentos profissionais para limpeza de painéis fotovoltaicos. Motor brushless, sem químicos,
              máxima eficiência.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              {[
                {
                  href: "#",
                  label: "Instagram",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "YouTube",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                },
                {
                  href: "https://wa.me/5547996785953",
                  label: "WhatsApp",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 200ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--pc-green)";
                    e.currentTarget.style.color = "var(--pc-dark)";
                    e.currentTarget.style.borderColor = "var(--pc-green)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--pc-green)",
                  marginBottom: 22,
                }}
              >
                {c.title}
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {c.links.map((l, j) => (
                  <li key={j}>
                    <a
                      href={l.href}
                      style={{
                        color: "rgba(255,255,255,0.62)",
                        fontSize: 14.5,
                        transition: "color 200ms",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.62)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 13,
            color: "rgba(255,255,255,0.42)",
          }}
        >
          <span>© 2026 Painel Clean. Todos os direitos reservados.</span>
          <span style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "inherit" }}>Termos</a>
            <a href="#" style={{ color: "inherit" }}>Privacidade</a>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pc-green)", animation: "pulseDot 2s infinite" }}></span>
              Atendimento online · Seg–Sex 8h–18h
            </span>
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
