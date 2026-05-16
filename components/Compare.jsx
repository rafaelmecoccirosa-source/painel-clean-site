const compareRows = [
  { f: "Motor brushless (10× mais durável)", o: false, p: true, n: "Eficiência sem perda no motor" },
  { f: "Sem produtos químicos — só água", o: false, p: true, n: "Não degrada os selantes do painel" },
  { f: "Motobomba com controle remoto", o: false, p: true, n: "Controle do fluxo durante a operação" },
  { f: "Proteção contra falta d'água", o: false, p: true, n: "Não queima a bomba" },
  { f: "Mangueira reforçada de 35m", o: false, p: true, n: "Não dobra, não vinca" },
  { f: "Engate rápido NBR 14136", o: false, p: true, n: "Sem adaptadores improvisados" },
  { f: "Peças de reposição no Brasil", o: false, p: true, n: "Não fica parado esperando importação" },
  { f: "Treinamento online vitalício", o: false, p: true, n: "R$ 39,90 — operação, segurança, vendas" },
  { f: "Cabos 3,5 / 5,5 / 7,5m", o: false, p: true, n: "Adapta a qualquer telhado" },
  { f: "Garantia + assistência no Brasil", o: false, p: true, n: "1 ano + suporte WhatsApp" },
  { f: "Acesso ao Ecossistema Painel Clean", o: false, p: true, n: "Plataforma de serviços conecta clientes" },
];

function Compare() {
  const rowsRef = useRevealChildren(25);
  return (
    <section id="comparativo" style={{ background: "var(--pc-cream)", padding: "120px 0", borderTop: "1px solid var(--border-on-cream)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>
          <div className="eyebrow no-rule" style={{ color: "var(--pc-green-2)", justifyContent: "center", marginBottom: 18 }}>Comparativo</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--fg-on-cream-1)", margin: "0 0 18px" }}>
            Por que somos a escolha <span style={{ color: "var(--fg-on-cream-3)" }}>do mercado profissional.</span>
          </h2>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", margin: 0 }}>
            Onze recursos que separam um equipamento profissional de uma improvisação.
          </p>
        </div>

        <div ref={rowsRef} style={{ background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
          <div className="cmp-row cmp-head" style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1.4fr", background: "var(--pc-dark)", color: "white" }}>
            <div style={{ padding: "22px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-3)" }}>Recurso</div>
            <div style={{ padding: "22px 22px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-3)", textAlign: "center", borderLeft: "1px solid var(--border-on-dark)" }}>Outras soluções</div>
            <div style={{ padding: "22px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pc-green)", textAlign: "left", borderLeft: "1px solid var(--border-on-dark)", display: "flex", alignItems: "center", gap: 10 }}>
              <LogoMark size={28} />
              Painel Clean
            </div>
          </div>
          {compareRows.map((r, i) => (
            <div key={i} className="cmp-row" style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1.4fr", borderTop: "1px solid var(--border-on-cream)", background: i % 2 ? "transparent" : "rgba(255,251,236,0.5)" }}>
              <div style={{ padding: "20px 28px", fontSize: 14.5, color: "var(--fg-on-cream-1)", fontWeight: 500 }}>{r.f}</div>
              <div style={{ padding: "20px 22px", borderLeft: "1px solid var(--border-on-cream)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg-on-cream-4)" }}><Icon name="minus" size={20} /></div>
              <div style={{ padding: "20px 28px", borderLeft: "1px solid var(--border-on-cream)", display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: "var(--accent-fill)", color: "var(--pc-green-2)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={16} stroke={2.5} /></span>
                <span style={{ fontSize: 13.5, color: "var(--fg-on-cream-2)" }}>{r.n}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsBrand size={16} />Quero falar com um especialista
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .cmp-row { grid-template-columns: 1fr !important; }
          .cmp-row > div { border-left: 0 !important; }
          .cmp-row > div + div { border-top: 1px solid var(--border-on-cream) !important; }
          .cmp-head { display: none !important; }
        }
      `}</style>
    </section>
  );
}
