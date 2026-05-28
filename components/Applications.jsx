function Applications() {
  const apps = [
    {
      badge: "Painel Clean Solar",
      icon: "sun",
      headline: "Painéis sujos perdem até 30% de geração — todo mês",
      desc: "Um técnico limpa 260 painéis por hora com a escova G5 — sem produtos químicos, sem risco ao vidro fotovoltaico. Mais geração, menor custo operacional, cliente fidelizado.",
      photo: "public/images/escovaseacessorios.png",
      photoAlt: "Escovas e acessórios Painel Clean em usina solar",
    },
    {
      badge: "Painel Clean Agro",
      icon: "sparkles",
      headline: "10% menos luz = colheita comprometida",
      desc: "Coberturas de policarbonato e vidro bloqueiam luz com sujeira acumulada. A limpeza periódica mantém a transmitância máxima — flores, frutas e hortaliças respondem diretamente à qualidade da luz.",
      photo: "public/images/escovapordosol.png",
      photoAlt: "Limpeza de estrutura agrícola ao pôr do sol",
    },
    {
      badge: "Painel Clean Urban",
      icon: "building",
      headline: "7,5m de alcance — sem andaime, sem paralisação",
      desc: "Sheds industriais, telhas translúcidas e fachadas de vidro acumulam sujeira rapidamente. O cabo telescópico chega onde escada não chega, com água filtrada que não mancha nem risca.",
      photo: "public/images/painel_clean_-_limpando_telhado.png",
      photoAlt: "Limpeza de telhado urbano com escova Painel Clean",
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

        <div className="apps-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 56 }}>
          {apps.map((app, i) => (
            <div key={i} className="app-card"
              style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", minHeight: 420, display: "flex", flexDirection: "column", border: "1px solid var(--border-on-cream)", background: "white", transition: "transform 300ms ease, box-shadow 300ms ease" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(15,56,43,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>

              {/* Photo */}
              <div style={{ height: 200, overflow: "hidden", flexShrink: 0 }}>
                <img src={app.photo} alt={app.photoAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
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
        @media (max-width: 640px) {
          .apps-grid { grid-template-columns: 1fr !important; }
          .app-card img { height: 180px !important; }
        }
      `}</style>
    </section>
  );
}
