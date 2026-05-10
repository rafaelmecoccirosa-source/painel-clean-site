function CtaFinal() {
  return (
    <section style={{ background: "var(--pc-deepest)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('public/images/field-1.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.22 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, var(--pc-deepest) 0%, rgba(10,31,23,0.7) 30%, rgba(10,31,23,0.7) 70%, var(--pc-deepest) 100%)" }} />
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div className="eyebrow no-rule" style={{ justifyContent: "center", marginBottom: 22 }}>Vamos conversar?</div>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5.6vw, 76px)", lineHeight: 1.02, color: "white", margin: "0 auto 24px", maxWidth: 880 }}>
          Pronto para limpar mais<br /><span style={{ color: "var(--pc-green)" }}>e ganhar mais?</span>
        </h2>
        <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", margin: "0 auto 44px", maxWidth: 580 }}>Fale agora pelo WhatsApp. Respondemos em minutos e ajudamos a escolher o equipamento certo.</p>
        <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "18px 30px", fontSize: 16 }}><WhatsBrand size={16} />Falar pelo WhatsApp</a>
          <a href="#equipamentos" className="btn-ghost-dark" style={{ padding: "18px 30px", fontSize: 16 }}>Ver equipamentos</a>
        </div>
      </div>
    </section>
  );
}
