function About() {
  const pillars = [
    { icon: "sun", title: "Tecnologia brushless", desc: "Equipamentos sem escovas de carvão, com motor de alta durabilidade e zero uso de químicos." },
    { icon: "shield", title: "Suporte técnico real", desc: "Time de engenheiros disponível via WhatsApp para dúvidas de campo, ajuste de equipamento e pós-venda." },
    { icon: "bolt", title: "Solar, Agro e Urban", desc: "Do painel solar à estufa agrícola — a mesma tecnologia brushless serve qualquer superfície lisa." },
  ];
  return (
    <section id="sobre" style={{ background: "var(--pc-darker)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -150, right: -150, width: 500, height: 500, background: "radial-gradient(circle, rgba(58,213,128,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative" }}>
        <div className="about-intro" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: 72, alignItems: "center", marginBottom: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Quem somos</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.06, color: "white", margin: "0 0 20px" }}>
              Feitos para quem<br /><span style={{ color: "var(--pc-green)" }}>vive de limpeza profissional.</span>
            </h2>
          </div>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", lineHeight: 1.75, margin: 0 }}>
            A Painel Clean desenvolve equipamentos e soluções para limpeza profissional de superfícies lisas — painéis solares, estufas agrícolas e fachadas.
            Atendemos de norte a sul do Brasil com escovas brushless, suporte técnico dedicado e uma plataforma que conecta técnicos e clientes.
            Nosso compromisso é simples: superfícies limpas, operação eficiente.
          </p>
        </div>
        <div className="about-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ padding: "28px 28px 32px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--accent-fill)", color: "var(--pc-green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Icon name={p.icon} size={22} />
              </div>
              <div className="display" style={{ fontSize: 17, fontWeight: 600, color: "white", marginBottom: 10, letterSpacing: "-0.01em" }}>{p.title}</div>
              <p style={{ margin: 0, font: "var(--body-sm)", color: "var(--fg-3)", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .about-intro { grid-template-columns: 1fr !important; gap: 32px !important; margin-bottom: 40px !important; } }
        @media (max-width: 720px) { .about-pillars { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
