function Applications() {
  const apps = [
    {
      badge: "Painel Clean Solar",
      icon: "sun",
      headline: "Usinas de solo ou telhado",
      desc: "Um único técnico limpando qualquer tipo de usina. De solo ou telhado, de 5 a 50 mil módulos, sem risco ao operador ou ao painel fotovoltaico. Limpe até três módulos na vertical ou 07 módulos na horizontal sem sair do lugar.",
      photo: "public/images/painel clean solar.png",
      photoAlt: "Painel Clean Solar — limpeza de painéis fotovoltaicos",
    },
    {
      badge: "Painel Clean Agro",
      icon: "sparkles",
      headline: "Estufas agrícolas cobertas por lona",
      desc: "Mil, dez mil, cem mil metros quadrados. Independente do tamanho da estufa, limpe até 540 metros quadrados por hora sem fazer esforço. Sua cultura sempre produzindo com a máxima eficiência (flores, frutas, plantas ornamentais, legumes, hortaliças, temperos).",
      photo: "public/images/painel clean agro.png",
      photoAlt: "Painel Clean Agro — limpeza de coberturas agrícolas",
    },
    {
      badge: "Painel Clean Urban",
      icon: "building",
      headline: "Pergolados, fachadas, placas de comunicação",
      desc: "Se é liso e precisa limpar? Conte com a Painel Clean. Com o cabo telescópico de 7,5 metros você limpa áreas sem se colocar em risco.",
      photo: "public/images/categoria urban.png",
      photoAlt: "Painel Clean Urban — limpeza de telhados e fachadas urbanas",
    },
  ];

  return (
    <section id="aplicacoes" style={{ background: "var(--pc-cream)", padding: "96px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="eyebrow center" style={{ marginBottom: 20, justifyContent: "center" }}>Aplicações</div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 3.6vw, 52px)", lineHeight: 1.08, color: "var(--pc-dark)", margin: "0 0 20px" }}>
            Uma escova. <span style={{ color: "var(--pc-green)" }}>Várias possibilidades.</span>
          </h2>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", maxWidth: 600, margin: "0 auto" }}>
            As escovas Painel Clean são desenvolvidas para limpar qualquer superfície lisa que necessite de limpeza recorrente.
          </p>
        </div>

        <div className="apps-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 56 }}>
          {apps.map((app, i) => (
            <div key={i} className="app-card"
              style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", minHeight: 420, display: "flex", flexDirection: "column", border: "1px solid var(--border-on-cream)", background: "white", transition: "transform 300ms ease, box-shadow 300ms ease" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(15,56,43,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>

              {/* Photo */}
              <div style={{ height: 200, overflow: "hidden", flexShrink: 0 }}>
                <img src={app.photo} alt={app.photoAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 400ms cubic-bezier(.2,.7,.2,1)" }} />
              </div>

              {/* Content */}
              <div style={{ padding: 28, flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-lg)", background: "linear-gradient(135deg, var(--pc-dark) 0%, var(--pc-mid) 100%)", color: "var(--pc-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={app.icon} size={22} stroke={1.6} />
                </div>
                <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", padding: "5px 12px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
                  {app.badge}
                </div>
                <h3 className="display" style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.25, color: "var(--pc-dark)", margin: 0 }}>{app.headline}</h3>
                <p style={{ margin: 0, fontSize: 14, color: "var(--fg-on-cream-2)", lineHeight: 1.7, flex: 1 }}>{app.desc}</p>
              </div>
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
        .app-card:hover img { transform: scale(1.04); }
        @media (max-width: 640px) {
          .apps-grid { grid-template-columns: 1fr !important; }
          .app-card img { height: 180px !important; }
        }
      `}</style>
    </section>
  );
}
