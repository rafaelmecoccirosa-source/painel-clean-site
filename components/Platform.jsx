function Platform() {
  return (
    <section id="plataforma" style={{ background: "var(--pc-cream)", padding: "120px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <div className="eyebrow no-rule" style={{ color: "var(--pc-green-2)", justifyContent: "center", marginBottom: 18 }}>Ecossistema Painel Clean</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--fg-on-cream-1)", margin: "0 0 16px" }}>
            Conheça o <span style={{ color: "var(--pc-green)" }}>CleanPass</span>
          </h2>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", margin: 0 }}>
            A plataforma de assinatura para donos de usinas solares.
          </p>
        </div>

        <div className="cp-card" style={{ background: "linear-gradient(155deg, var(--pc-dark) 0%, #0A2018 100%)", borderRadius: "var(--radius-2xl)", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", border: "1px solid rgba(58,213,128,0.18)", boxShadow: "0 24px 80px rgba(10,31,23,0.32)" }}>

          {/* Badge top-right */}
          <div style={{ position: "absolute", top: 28, right: 28, zIndex: 4, padding: "5px 12px", borderRadius: "var(--radius-pill)", background: "rgba(58,213,128,0.12)", border: "1px solid rgba(58,213,128,0.30)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pc-green)" }}>
            Produto independente
          </div>

          {/* Left — wordmark + benefits */}
          <div style={{ padding: "56px 52px 56px", position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: 28 }}>
              <div className="display" style={{ fontSize: "clamp(40px, 4.5vw, 60px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 10 }}>
                <span style={{ color: "white" }}>Clean</span><span style={{ color: "var(--pc-green)" }}>Pass</span>
              </div>
              <div style={{ fontSize: 15, color: "var(--fg-3)", fontWeight: 400 }}>
                Gestão e cuidado para sua usina solar.
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 44 }}>
              {[
                "Relatório mensal de performance por inversor",
                "Limpeza recorrente com técnico certificado",
                "Monitoramento via API dos principais inversores",
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "rgba(58,213,128,0.15)", border: "1px solid rgba(58,213,128,0.35)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                    <Icon name="check" size={12} stroke={2.5} style={{ color: "var(--pc-green)" }} />
                  </span>
                  <span style={{ fontSize: 15, color: "var(--fg-2)", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://painel-clean-mrr.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Acessar o CleanPass <Icon name="arrowRight" size={15} />
              </a>
              <a href="https://painel-clean-mrr.vercel.app/para-tecnicos" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px", borderRadius: "var(--radius-pill)", border: "1px solid rgba(255,255,255,0.20)", color: "var(--fg-2)", fontSize: 14, fontWeight: 600, transition: "all 200ms" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)"; e.currentTarget.style.color = "var(--fg-2)"; }}>
                Sou técnico credenciado
              </a>
            </div>
          </div>

          {/* Right — mock dashboard */}
          <div style={{ padding: "56px 52px 56px 40px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
            {/* Glow */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 320, height: 320, background: "radial-gradient(circle, rgba(58,213,128,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
              {/* App card */}
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "var(--radius-xl)", padding: "28px 28px", backdropFilter: "blur(8px)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-4)", marginBottom: 4 }}>Usina</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>Janeiro 2026</div>
                  </div>
                  <div style={{ padding: "5px 10px", borderRadius: "var(--radius-pill)", background: "rgba(58,213,128,0.14)", border: "1px solid rgba(58,213,128,0.28)", fontSize: 11, fontWeight: 700, color: "var(--pc-green)", letterSpacing: "0.06em" }}>
                    ATIVA
                  </div>
                </div>

                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: 18 }}>
                  <div style={{ fontSize: 12, color: "var(--fg-4)", marginBottom: 6 }}>Geração no mês</div>
                  <div className="display" style={{ fontSize: 36, fontWeight: 700, color: "var(--pc-green)", letterSpacing: "-0.03em", lineHeight: 1 }}>+28%</div>
                  <div style={{ fontSize: 12, color: "var(--fg-3)", marginTop: 4 }}>vs mês anterior</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "var(--fg-3)" }}>Próxima limpeza</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>15 fev</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "var(--fg-3)" }}>Técnico</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>Carlos M.</span>
                      <span style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(58,213,128,0.18)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="check" size={9} stroke={3} style={{ color: "var(--pc-green)" }} />
                      </span>
                      <span style={{ fontSize: 11, color: "var(--pc-green)", fontWeight: 600 }}>Certificado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating alert card */}
              <div style={{ position: "absolute", bottom: -20, right: -16, background: "var(--pc-mid)", border: "1px solid rgba(58,213,128,0.25)", borderRadius: "var(--radius-lg)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 8px 24px rgba(10,31,23,0.4)" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--pc-green)", flexShrink: 0, animation: "pulseDot 1.6s infinite" }} />
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "white", whiteSpace: "nowrap" }}>Relatório de jan. disponível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .cp-card { grid-template-columns: 1fr !important; }
          .cp-card > div:first-child { padding: 40px 32px 32px !important; }
          .cp-card > div:last-child { padding: 0 32px 40px !important; }
        }
      `}</style>
    </section>
  );
}
