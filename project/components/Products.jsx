const products = [
  { sku: "ZCP-0175-G5", name: "Escova Rotativa G5", tag: "Mais rápida", image: "public/images/product-g5-1.jpg",
    specs: [{ k: "Velocidade", v: "260 painéis/h" }, { k: "Motor", v: "Brushless 350 RPM" }, { k: "Cabo", v: "até 7,5m" }],
    desc: "A mais rápida da linha. Operação contínua para grandes usinas." },
  { sku: "ZCP-0275-D5", name: "Escova Dupla D5", tag: "Mais vendido", featured: true, image: "public/images/product-d5-1.jpg",
    specs: [{ k: "Velocidade", v: "200 painéis/h" }, { k: "Motor", v: "Brushless 350 RPM" }, { k: "Cabo", v: "até 7,5m" }, { k: "Inclui", v: "Bomba + controle" }],
    desc: "Kit completo com bomba e controle remoto. Padrão do mercado." },
  { sku: "ZCP-0175-S5", name: "Escova Solo S5", tag: "Acesso difícil", image: "public/images/product-s5-1.jpg",
    specs: [{ k: "Velocidade", v: "160 painéis/h" }, { k: "Ideal para", v: "Difícil acesso" }, { k: "Cabo", v: "até 7,5m" }],
    desc: "Compacta para telhados complexos e acessos difíceis." },
];

function ProductCard({ p }) {
  const [hover, setHover] = useState(false);
  const featured = p.featured;
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", background: "var(--surface-card)", borderRadius: "var(--radius-xl)",
        border: featured ? "2px solid var(--pc-green)" : "1px solid var(--border-on-cream)",
        overflow: "hidden", display: "flex", flexDirection: "column",
        transition: "transform 280ms var(--ease-out), box-shadow 280ms var(--ease-out)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hover ? "var(--shadow-lift)" : (featured ? "var(--shadow-glow)" : "var(--shadow-card)") }}>
      <div style={{ position: "relative", height: 280, background: "linear-gradient(180deg, #FBF8E9 0%, #F4ECD3 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 18, left: 18, zIndex: 2, display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", background: featured ? "var(--pc-green)" : "rgba(15,56,43,0.92)", color: featured ? "var(--pc-dark)" : "white", borderRadius: "var(--radius-pill)", font: "var(--label-sm)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {featured && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--pc-dark)" }} />}
          {p.tag}
        </div>
        <div style={{ position: "absolute", top: 22, right: 22, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "var(--fg-on-cream-3)" }}>{p.sku}</div>
        <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 32, transition: "transform 600ms ease", transform: hover ? "scale(1.05)" : "scale(1)" }} />
      </div>
      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="display" style={{ fontSize: 26, margin: "0 0 8px", color: "var(--fg-on-cream-1)" }}>{p.name}</h3>
        <p style={{ font: "var(--body-sm)", color: "var(--fg-on-cream-2)", margin: "0 0 22px" }}>{p.desc}</p>
        <div style={{ marginBottom: 24 }}>
          {p.specs.map((s, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderTop: "1px solid var(--border-on-cream)", fontSize: 13.5 }}>
              <span style={{ color: "var(--fg-on-cream-3)" }}>{s.k}</span>
              <span style={{ color: "var(--fg-on-cream-1)", fontWeight: 600 }}>{s.v}</span>
            </div>
          ))}
        </div>
        <a href={wa(`Olá! Tenho interesse no(a) ${p.name} (${p.sku}).`)} target="_blank" rel="noopener noreferrer"
          style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", justifyContent: "space-between", background: featured ? "var(--pc-green)" : "var(--pc-dark)", color: featured ? "var(--pc-dark)" : "white", fontWeight: 600, fontSize: 14.5, padding: "16px 22px", borderRadius: "var(--radius-md)", transition: "background 200ms" }}
          onMouseEnter={e => e.currentTarget.style.background = featured ? "#4FE090" : "#14513C"}
          onMouseLeave={e => e.currentTarget.style.background = featured ? "var(--pc-green)" : "var(--pc-dark)"}>
          <span>Pedir orçamento</span><Icon name="arrowRight" size={16} />
        </a>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section id="equipamentos" style={{ background: "var(--pc-cream)", padding: "120px 0 100px" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, marginBottom: 56, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow" style={{ color: "var(--pc-green-2)", marginBottom: 18 }}>Linha profissional</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--fg-on-cream-1)", margin: 0 }}>
              Equipamentos brushless,<br />
              <span style={{ color: "var(--fg-on-cream-3)" }}>feitos para escala.</span>
            </h2>
          </div>
          <a href="#" className="btn-outline-dark">Ver catálogo completo<Icon name="arrowUpRight" size={14} /></a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {products.map(p => <ProductCard key={p.sku} p={p} />)}
        </div>
        <div style={{ marginTop: 56, padding: "26px 32px", background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--accent-fill)", color: "var(--pc-green-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="package" size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 600, color: "var(--fg-on-cream-1)", fontSize: 15.5 }}>Refis, cabos e acessórios sob medida</div>
              <div style={{ fontSize: 13.5, color: "var(--fg-on-cream-3)" }}>Pronta entrega para todo o Brasil.</div>
            </div>
          </div>
          <a href={wa("Olá! Gostaria de ver os acessórios disponíveis.")} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--pc-green-2)", fontWeight: 600, fontSize: 14.5, display: "inline-flex", alignItems: "center", gap: 8 }}>
            Ver acessórios<Icon name="arrowRight" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
