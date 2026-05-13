// ===== PRODUTOS PAGE =====

const escovas = [
  {
    sku: "ZCP-0175-G5",
    name: "Escova Rotativa G5",
    slug: "escova-rotativa-g5",
    tag: "Mais rápida",
    tagIcon: "bolt",
    tagBg: "rgba(245,158,11,0.16)",
    tagColor: "#F59E0B",
    tagBorder: "rgba(245,158,11,0.30)",
    image: "public/images/product-g5-1.jpg",
    headline: "Velocidade máxima para grandes usinas.",
    specs: [
      { k: "Velocidade", v: "260 painéis/h" },
      { k: "Motor", v: "Brushless 350 RPM" },
      { k: "Cabo", v: "até 7,5m" },
    ],
    fullDesc: "Escova Rotativa, Semiautomática, com Motobomba, Controle Remoto e Cabo Extensível até 7,5m",
  },
  {
    sku: "ZCP-0275-D5",
    name: "Escova Dupla D5",
    slug: "escova-dupla-d5",
    tag: "Mais vendida",
    featured: true,
    image: "public/images/product-d5-1.jpg",
    headline: "Kit completo para começar no mesmo dia.",
    specs: [
      { k: "Velocidade", v: "200 painéis/h" },
      { k: "Motor", v: "Brushless 350 RPM" },
      { k: "Cabo", v: "até 7,5m" },
      { k: "Inclui", v: "Bomba + controle" },
    ],
    fullDesc: "Escova Dupla, Semiautomática, com Motobomba, Controle Remoto e Cabo Extensível até 7,5m",
  },
  {
    sku: "ZCP-0175-S5",
    name: "Escova Solo S5",
    slug: "escova-solo-s5",
    tag: "Acesso difícil",
    tagIcon: "home",
    tagBg: "rgba(96,165,250,0.16)",
    tagColor: "#60A5FA",
    tagBorder: "rgba(96,165,250,0.30)",
    image: "public/images/product-s5-1.jpg",
    headline: "Chega onde outras escovas não alcançam.",
    specs: [
      { k: "Velocidade", v: "160 painéis/h" },
      { k: "Ideal para", v: "Difícil acesso" },
      { k: "Cabo", v: "até 7,5m" },
    ],
    fullDesc: "Escova Single, Semiautomática, com Motobomba, Controle Remoto e Cabo Extensível até 7,5m",
  },
];

const acessorios = [
  { sku: "ZCP-APPG51", name: "Refil de Cerdas G5", desc: "Refil para Escova Rotativa G5 (1 peça)" },
  { sku: "ZCP-APPD51", name: "Refil de Cerdas D5", desc: "Refil para Escova Dupla D5 (2 peças – Direito e Esquerdo)" },
  { sku: "ZCP-APPS51", name: "Refil de Cerdas S5", desc: "Refil para Escova Solo S5 (1 peça)" },
  { sku: "ZCP-APPA01", name: "Cabo Telescópico", desc: "Alumínio, extensível até 7,5 metros" },
  { sku: "ZCP-APPA02", name: "Acessório ZCP-APPA02", desc: "Em breve" },
];

function EscovaCard({ p }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "white",
        borderRadius: "var(--radius-xl)",
        border: p.featured ? "2px solid var(--pc-green)" : "1px solid var(--border-on-cream)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 280ms var(--ease-out), box-shadow 280ms var(--ease-out)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hover ? "var(--shadow-lift)" : (p.featured ? "var(--shadow-glow)" : "var(--shadow-card)"),
      }}
    >
      <div style={{ position: "relative", height: 300, background: "linear-gradient(180deg, #FBF8E9 0%, #F4ECD3 100%)", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: 18, left: 18, zIndex: 2,
          display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px",
          background: p.featured ? "var(--pc-green)" : (p.tagBg || "rgba(15,56,43,0.92)"),
          color: p.featured ? "var(--pc-dark)" : (p.tagColor || "white"),
          border: p.tagBorder ? `1px solid ${p.tagBorder}` : "none",
          borderRadius: "var(--radius-pill)", font: "var(--label-sm)", letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          {p.featured && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--pc-dark)" }} />}
          {p.tagIcon && <Icon name={p.tagIcon} size={11} />}
          {p.tag}
        </div>
        <div style={{ position: "absolute", top: 20, right: 20, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "var(--fg-on-cream-3)" }}>{p.sku}</div>
        <img src={p.image} alt={p.name}
          style={{ width: "100%", height: "100%", objectFit: "contain", padding: 32, transition: "transform 600ms ease", transform: hover ? "scale(1.05)" : "scale(1)" }} />
      </div>
      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="display" style={{ fontSize: 24, margin: "0 0 6px", color: "var(--fg-on-cream-1)" }}>{p.name}</h3>
        <p style={{ font: "var(--body-sm)", color: "var(--fg-on-cream-2)", margin: "0 0 20px" }}>{p.headline}</p>
        <div style={{ marginBottom: 24 }}>
          {p.specs.map((s, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderTop: "1px solid var(--border-on-cream)", fontSize: 13.5 }}>
              <span style={{ color: "var(--fg-on-cream-3)" }}>{s.k}</span>
              <span style={{ color: "var(--fg-on-cream-1)", fontWeight: 600 }}>{s.v}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href={`/${p.slug}`}
            style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: p.featured ? "var(--pc-green)" : "var(--pc-dark)", color: p.featured ? "var(--pc-dark)" : "white", fontWeight: 600, fontSize: 14, padding: "14px 18px", borderRadius: "var(--radius-md)", transition: "background 200ms" }}
            onMouseEnter={e => e.currentTarget.style.background = p.featured ? "#4FE090" : "#14513C"}
            onMouseLeave={e => e.currentTarget.style.background = p.featured ? "var(--pc-green)" : "var(--pc-dark)"}>
            Ver detalhes <Icon name="arrowRight" size={14} />
          </a>
          <a href={wa(`Olá! Tenho interesse no(a) ${p.name} (${p.sku}).`)} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "14px 16px", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-md)", fontSize: 13, color: "var(--fg-on-cream-2)", transition: "all 200ms" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--pc-green-2)"; e.currentTarget.style.color = "var(--pc-green-2)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-on-cream)"; e.currentTarget.style.color = "var(--fg-on-cream-2)"; }}>
            <WhatsBrand size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

function AcessorioCard({ a }) {
  return (
    <div style={{ background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-xl)", padding: "24px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ height: 80, background: "linear-gradient(180deg, #FBF8E9 0%, #F4ECD3 100%)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name="package" size={32} stroke={1.2} style={{ color: "var(--fg-on-cream-3)" }} />
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 15, color: "var(--fg-on-cream-1)", marginBottom: 4 }}>{a.name}</div>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--fg-on-cream-3)", marginBottom: 6 }}>{a.sku}</div>
        <div style={{ font: "var(--body-sm)", color: "var(--fg-on-cream-2)", lineHeight: 1.5 }}>{a.desc}</div>
      </div>
      <a href={wa(`Olá! Tenho interesse no acessório ${a.name} (${a.sku}).`)} target="_blank" rel="noopener noreferrer"
        style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 16px", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", borderRadius: "var(--radius-md)", fontSize: 13.5, fontWeight: 600, color: "var(--pc-green-2)", transition: "all 200ms" }}
        onMouseEnter={e => e.currentTarget.style.background = "var(--accent-fill-mid)"}
        onMouseLeave={e => e.currentTarget.style.background = "var(--accent-fill)"}>
        <WhatsBrand size={14} /> Pedir via WhatsApp
      </a>
    </div>
  );
}

function ProdutosApp() {
  const [filter, setFilter] = useState("todos");

  return (
    <div>
      <Nav />

      {/* Hero */}
      <section style={{ background: "var(--pc-dark)", paddingTop: 76, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 10% 50%, rgba(58,213,128,.10), transparent 60%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", padding: "72px var(--gutter) 80px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--fg-4)", marginBottom: 32 }}>
            <a href="/" style={{ color: "var(--fg-3)", transition: "color 200ms" }}
              onMouseEnter={e => e.currentTarget.style.color = "white"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--fg-3)"}>Início</a>
            <Icon name="arrowRight" size={12} />
            <span style={{ color: "var(--pc-green)" }}>Produtos</span>
          </nav>
          <div style={{ maxWidth: 680 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Linha profissional</div>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02, color: "white", margin: "0 0 20px", letterSpacing: "-0.03em" }}>
              Equipamentos feitos<br /><span style={{ color: "var(--pc-green)" }}>para quem vive de solar.</span>
            </h1>
            <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", maxWidth: 540, margin: 0, lineHeight: 1.7 }}>
              Motor brushless, sem químicos, operação contínua. Escolha o equipamento certo para o seu tipo de atendimento.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ background: "var(--pc-cream)", padding: "72px 0 96px" }}>
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 10, marginBottom: 52, flexWrap: "wrap" }}>
            {["todos", "escovas", "acessórios"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{
                  padding: "10px 22px", borderRadius: "var(--radius-pill)", fontSize: 14, fontWeight: 600,
                  border: filter === f ? "none" : "1px solid var(--border-on-cream)",
                  background: filter === f ? "var(--pc-dark)" : "white",
                  color: filter === f ? "white" : "var(--fg-on-cream-2)",
                  textTransform: "capitalize", transition: "all 180ms", cursor: "pointer",
                  boxShadow: filter === f ? "var(--shadow-lift)" : "none",
                }}
              >{f.charAt(0).toUpperCase() + f.slice(1)}</button>
            ))}
          </div>

          {/* Escovas grid */}
          {(filter === "todos" || filter === "escovas") && (
            <div>
              {filter === "todos" && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
                  <h2 className="display" style={{ fontSize: 22, color: "var(--fg-on-cream-1)", margin: 0 }}>Escovas</h2>
                  <span style={{ fontSize: 13, color: "var(--fg-on-cream-3)" }}>{escovas.length} modelos</span>
                </div>
              )}
              <div className="escovas-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginBottom: filter === "todos" ? 64 : 0 }}>
                {escovas.map(p => <EscovaCard key={p.sku} p={p} />)}
              </div>
            </div>
          )}

          {/* Acessórios grid */}
          {(filter === "todos" || filter === "acessórios") && (
            <div>
              {filter === "todos" && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
                  <h2 className="display" style={{ fontSize: 22, color: "var(--fg-on-cream-1)", margin: 0 }}>Acessórios e Refis</h2>
                  <span style={{ fontSize: 13, color: "var(--fg-on-cream-3)" }}>{acessorios.length} itens</span>
                </div>
              )}
              <div className="acessorios-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
                {acessorios.map(a => <AcessorioCard key={a.sku} a={a} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) { .escovas-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .escovas-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1100px) { .acessorios-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 700px) { .acessorios-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 420px) { .acessorios-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProdutosApp />);
