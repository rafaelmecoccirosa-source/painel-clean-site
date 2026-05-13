const trainingModules = [
  { n: "01", t: "Operação do equipamento", d: "Setup, montagem e manutenção das escovas G5/D5/S5. Boas práticas para preservar o motor brushless.", h: "42min" },
  { n: "02", t: "Segurança em altura (NR-35)", d: "EPIs, ancoragem e procedimentos para trabalho seguro em telhados residenciais e usinas.", h: "56min" },
  { n: "03", t: "Precificação e propostas", d: "Como precificar por painel, por kWp e por usina. Templates de proposta e contrato.", h: "38min" },
  { n: "04", t: "Captação de clientes", d: "Prospecção via Instagram, WhatsApp e parcerias com integradores. Scripts de abordagem prontos.", h: "45min" },
  { n: "05", t: "Relatórios e fidelização", d: "Como entregar laudos profissionais e converter o cliente em contrato anual recorrente.", h: "31min" },
];

function Training() {
  const t = useT();
  const detailed = t.trainingDetail === "expanded";
  const features = [
    { icon: "shield", t: "Acesso vitalício", d: "Estude no seu ritmo, sem prazo." },
    { icon: "check", t: "Certificado", d: "Conclusão reconhecida por usinas." },
    { icon: "headset", t: "Suporte WhatsApp", d: "Tire dúvidas com técnicos sêniores." },
    { icon: "refresh", t: "Sempre atualizado", d: "Material renovado a cada novo módulo." },
  ];
  return (
    <section id="treinamento" style={{ background: "var(--pc-darker)", padding: detailed ? "120px 0" : "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(58,213,128,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative" }}>
        <div className="training-grid" style={{ display: "grid", gridTemplateColumns: detailed ? "minmax(0,1.1fr) minmax(0,1fr)" : "minmax(0,1fr) minmax(0,0.9fr)", gap: detailed ? 80 : 60, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Treinamento online</div>
            <h2 className="display" style={{ fontSize: detailed ? "clamp(36px, 4.6vw, 60px)" : "clamp(30px, 3.6vw, 44px)", lineHeight: 1.05, color: "white", margin: "0 0 24px" }}>
              Ganhe mais por hora<br />
              <span style={{ color: "var(--pc-green)" }}>que um motorista de app.</span>
            </h2>
            <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", maxWidth: 520, margin: "0 0 32px" }}>
              Do zero ao primeiro cliente em menos de uma semana. <strong style={{ color: "white" }}>5 módulos · 3h28min</strong> de conteúdo prático, atualizado mensalmente.
            </p>
            {detailed && (
              <div style={{ marginBottom: 36, borderTop: "1px solid var(--border-on-dark)" }}>
                {trainingModules.map((m, i) => (
                  <details key={i} style={{ borderBottom: "1px solid var(--border-on-dark)" }}>
                    <summary style={{ listStyle: "none", padding: "18px 0", display: "flex", alignItems: "center", gap: 18, cursor: "pointer", color: "white" }}>
                      <span style={{ flexShrink: 0, fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.1em", color: "var(--pc-green)", fontWeight: 600 }}>{m.n}</span>
                      <span className="display" style={{ flex: 1, fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>{m.t}</span>
                      <span style={{ flexShrink: 0, fontSize: 12, color: "var(--fg-4)", fontWeight: 500 }}>{m.h}</span>
                      <span style={{ flexShrink: 0, color: "var(--fg-3)" }}><Icon name="plus" size={14} /></span>
                    </summary>
                    <div style={{ padding: "0 0 18px 36px", color: "var(--fg-3)", fontSize: 13.5, lineHeight: 1.55, maxWidth: 480 }}>{m.d}</div>
                  </details>
                ))}
              </div>
            )}
            <div style={{ marginBottom: 16, paddingTop: 24, borderTop: "1px solid var(--border-on-dark)" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-4)" }}>Incluso no treinamento</span>
            </div>
            <div className="training-features" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-md)" }}>
                  <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "var(--radius)", background: "var(--accent-fill)", color: "var(--pc-green)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={f.icon} size={16} /></div>
                  <div>
                    <div style={{ color: "white", fontWeight: 600, fontSize: 13.5, marginBottom: 2 }}>{f.t}</div>
                    <div style={{ color: "var(--fg-3)", fontSize: 12.5 }}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "linear-gradient(155deg, var(--pc-mid) 0%, var(--pc-dark) 100%)", border: "1px solid var(--border-accent)", borderRadius: "var(--radius-2xl)", padding: 40, position: "relative", overflow: "hidden", boxShadow: "0 0 40px rgba(58,213,128,0.12)" }}>
            <div style={{ position: "absolute", top: -100, right: -100, width: 280, height: 280, background: "radial-gradient(circle, rgba(58,213,128,0.18) 0%, transparent 70%)" }} />
            <div style={{ position: "relative" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", font: "var(--label-sm)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 28 }}>
                <Icon name="bolt" size={12} stroke={2} />Acesso imediato
              </div>
              <div style={{ color: "var(--fg-3)", fontSize: 14, marginBottom: 4 }}>de <span style={{ textDecoration: "line-through" }}>R$ 197</span></div>
              <div className="display" style={{ fontSize: 64, fontWeight: 600, color: "var(--pc-green)", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 8 }}>R$ 39,90</div>
              <div style={{ color: "var(--fg-3)", fontSize: 13, marginBottom: 32 }}>pagamento único · acesso vitalício</div>
              <a href="/curso" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: 12 }}>
                Ver detalhes do treinamento<Icon name="arrowRight" size={16} />
              </a>
              <a href={wa("Olá! Quero começar o treinamento Painel Clean.")} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13, color: "var(--fg-3)", marginBottom: 16, textDecoration: "none" }}>
                <WhatsBrand size={13} />Ou fale direto pelo WhatsApp
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, fontSize: 12.5, color: "var(--fg-4)" }}>
                <span>Pagamento seguro</span><span>·</span><span>Reembolso em 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .training-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 520px) { .training-features { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
