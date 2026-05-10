const products = [
  {
    sku: "ZCP-0175-G5",
    name: "Escova Rotativa G5",
    tag: "Mais rápida",
    image: "public/images/product-g5-1.jpg",
    specs: [
      { k: "Velocidade", v: "260 painéis/h" },
      { k: "Motor", v: "Brushless 350 RPM" },
      { k: "Cabo", v: "até 7,5m" },
    ],
    desc: "A mais rápida da linha. Operação contínua para grandes usinas.",
  },
  {
    sku: "ZCP-0275-D5",
    name: "Escova Dupla D5",
    tag: "Mais vendido",
    featured: true,
    image: "public/images/product-d5-1.jpg",
    specs: [
      { k: "Velocidade", v: "200 painéis/h" },
      { k: "Motor", v: "Brushless 350 RPM" },
      { k: "Cabo", v: "até 7,5m" },
      { k: "Inclui", v: "Bomba + controle remoto" },
    ],
    desc: "Kit completo com bomba e controle remoto. Padrão do mercado.",
  },
  {
    sku: "ZCP-0175-S5",
    name: "Escova Solo S5",
    tag: "Acesso difícil",
    image: "public/images/product-s5-1.jpg",
    specs: [
      { k: "Velocidade", v: "160 painéis/h" },
      { k: "Ideal para", v: "Difícil acesso" },
      { k: "Cabo", v: "até 7,5m" },
    ],
    desc: "Compacta para telhados complexos e acessos difíceis.",
  },
];

function ProductCard({ p }) {
  const [hover, setHover] = useState(false);
  const featured = p.featured;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "white",
        borderRadius: 24,
        border: featured
          ? "1.5px solid var(--pc-green)"
          : "1px solid var(--pc-line)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 280ms ease, box-shadow 280ms ease",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hover
          ? "0 24px 48px rgba(15,56,43,0.14)"
          : featured
          ? "0 8px 24px rgba(58,213,128,0.14)"
          : "0 2px 12px rgba(15,56,43,0.05)",
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          height: 280,
          background: "linear-gradient(180deg, #FBF8E9 0%, #F4ECD3 100%)",
          overflow: "hidden",
        }}
      >
        {/* Tag */}
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            zIndex: 2,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 12px",
            background: featured ? "var(--pc-green)" : "rgba(15,56,43,0.92)",
            color: featured ? "var(--pc-dark)" : "white",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {featured && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--pc-dark)" }} />}
          {p.tag}
        </div>

        {/* SKU corner */}
        <div
          style={{
            position: "absolute",
            top: 22,
            right: 22,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "rgba(15,56,43,0.4)",
          }}
        >
          {p.sku}
        </div>

        <img
          src={p.image}
          alt={p.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: 32,
            transition: "transform 600ms ease",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          className="font-display"
          style={{
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            margin: 0,
            marginBottom: 8,
            color: "var(--pc-dark)",
          }}
        >
          {p.name}
        </h3>
        <p style={{ fontSize: 14.5, color: "rgba(15,56,43,0.62)", margin: 0, marginBottom: 22, lineHeight: 1.5 }}>
          {p.desc}
        </p>

        {/* Specs */}
        <div style={{ marginBottom: 24 }}>
          {p.specs.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderTop: "1px solid var(--pc-line)",
                fontSize: 13.5,
              }}
            >
              <span style={{ color: "rgba(15,56,43,0.55)" }}>{s.k}</span>
              <span style={{ color: "var(--pc-dark)", fontWeight: 600 }}>{s.v}</span>
            </div>
          ))}
        </div>

        <a
          href={waLink(`Olá! Tenho interesse no(a) ${p.name} (${p.sku}).`)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "auto",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: featured ? "var(--pc-green)" : "var(--pc-dark)",
            color: featured ? "var(--pc-dark)" : "white",
            fontWeight: 600,
            fontSize: 14.5,
            padding: "16px 22px",
            borderRadius: 12,
            transition: "background 200ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = featured ? "#4FE090" : "#14513C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = featured ? "var(--pc-green)" : "var(--pc-dark)";
          }}
        >
          <span>Pedir orçamento</span>
          <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
        </a>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section id="produtos" style={{ background: "var(--pc-cream)", padding: "120px 0 100px" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 56,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--pc-green-soft)",
                marginBottom: 18,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ width: 28, height: 1, background: "var(--pc-green-soft)" }} />
              Linha profissional
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.4vw, 56px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--pc-dark)",
                margin: 0,
              }}
            >
              Equipamentos brushless, <br />
              <span style={{ color: "rgba(15,56,43,0.5)" }}>feitos para escala.</span>
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid var(--pc-dark)",
              color: "var(--pc-dark)",
              fontWeight: 600,
              fontSize: 14,
              padding: "13px 22px",
              borderRadius: 999,
              transition: "background 200ms, color 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--pc-dark)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--pc-dark)";
            }}
          >
            Ver catálogo completo
            <i data-lucide="arrow-up-right" style={{ width: 14, height: 14 }}></i>
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.sku} p={p} />
          ))}
        </div>

        {/* Accessories footer */}
        <div
          style={{
            marginTop: 56,
            padding: "26px 32px",
            background: "white",
            border: "1px solid var(--pc-line)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(58,213,128,0.12)",
                color: "var(--pc-green-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i data-lucide="package" style={{ width: 22, height: 22 }}></i>
            </div>
            <div>
              <div style={{ fontWeight: 600, color: "var(--pc-dark)", fontSize: 15.5 }}>
                Refis, cabos e acessórios sob medida
              </div>
              <div style={{ fontSize: 13.5, color: "rgba(15,56,43,0.55)" }}>
                Pronta entrega para todo o Brasil.
              </div>
            </div>
          </div>
          <a
            href={waLink("Olá! Gostaria de ver os acessórios disponíveis.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--pc-green-soft)",
              fontWeight: 600,
              fontSize: 14.5,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Ver acessórios
            <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}
