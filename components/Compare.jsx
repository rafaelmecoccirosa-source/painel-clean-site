const pillars2 = [
  {
    id: "mec",
    icon: "wrench",
    label: "Mecânica",
    desc: "Motor brushless, controle remoto, proteção d'água.",
    items: [
      { f: "Motor brushless (10× mais durável)",   n: "Eficiência sem perda no motor" },
      { f: "Motobomba com controle remoto",         n: "Controle do fluxo durante a operação" },
      { f: "Proteção contra falta d'água",           n: "Não queima a bomba" },
    ],
  },
  {
    id: "agua",
    icon: "drop",
    label: "Água & cabo",
    desc: "Mangueira 35m, engate NBR, cabos 3,5 / 5,5 / 7,5m.",
    items: [
      { f: "Mangueira reforçada de 35m",       n: "Não dobra, não vinca" },
      { f: "Engate rápido NBR 14136",          n: "Sem adaptadores improvisados" },
      { f: "Cabos 3,5 / 5,5 / 7,5m",           n: "Adapta a qualquer telhado" },
      { f: "Sem produtos químicos — só água",  n: "Não degrada selantes nem o vidro" },
    ],
  },
  {
    id: "pos",
    icon: "shield",
    label: "Pós-venda",
    desc: "Reposição nacional, garantia + assistência no Brasil.",
    items: [
      { f: "Peças de reposição no Brasil",       n: "Não fica parado esperando importação" },
      { f: "Garantia + assistência no Brasil",   n: "1 ano + suporte WhatsApp" },
    ],
  },
  {
    id: "eco",
    icon: "network",
    label: "Ecossistema",
    desc: "Treinamento, plataforma de serviços, comunidade.",
    items: [
      { f: "Treinamento online vitalício",            n: "R$ 39,90 — operação, segurança, vendas" },
      { f: "Acesso ao Ecossistema Painel Clean",     n: "Plataforma de serviços conecta clientes" },
    ],
  },
];

function ScoreBar({ animate, total }) {
  const numOther = useCountUp(animate ? 0 : 0, { duration: 800, trigger: animate });
  const numPc = useCountUp(animate ? total : 0, { duration: 1400, trigger: animate });
  return (
    <div style={{
      background: "white",
      border: "1px solid var(--border-on-cream)",
      borderRadius: "var(--radius-xl)",
      padding: "18px 22px",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      gap: 24,
      alignItems: "center",
      boxShadow: "var(--shadow-card)",
    }} className="cmp-scorebar">
      <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
        <div style={{
          flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
          background: "rgba(15,56,43,0.06)", color: "var(--fg-on-cream-3)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}><Icon name="x" size={14} stroke={2.5} /></div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ font: "var(--label-sm)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-on-cream-3)", marginBottom: 6 }}>
            Outras soluções
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
            <span className="display" style={{ fontSize: 26, fontWeight: 600, color: "var(--fg-on-cream-3)", letterSpacing: "-0.02em", lineHeight: 1 }}>
              {numOther}
            </span>
            <span style={{ fontSize: 13, color: "var(--fg-on-cream-4)" }}>/{total} recursos</span>
          </div>
          <div style={{ height: 4, borderRadius: 999, background: "rgba(15,56,43,0.06)", overflow: "hidden" }}>
            <span style={{ display: "block", height: "100%", width: "0%", background: "rgba(15,56,43,0.2)" }} />
          </div>
        </div>
      </div>

      <div style={{
        flexShrink: 0,
        width: 36, height: 36, borderRadius: "50%",
        background: "var(--pc-dark)", color: "var(--pc-green)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "ui-monospace, monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em",
      }}>vs</div>

      <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
        <div style={{
          flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
          background: "var(--accent-fill)", color: "var(--pc-green-2)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}><Icon name="check" size={14} stroke={3} /></div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ font: "var(--label-sm)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pc-green-2)", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
            Painel Clean
            <span style={{
              padding: "2px 7px", borderRadius: "var(--radius-pill)",
              background: "var(--pc-green)", color: "var(--pc-dark)",
              fontSize: 9, fontWeight: 700, letterSpacing: "0.1em",
            }}>VENCE</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
            <span className="display" style={{ fontSize: 26, fontWeight: 600, color: "var(--pc-green-2)", letterSpacing: "-0.02em", lineHeight: 1 }}>
              {numPc}
            </span>
            <span style={{ fontSize: 13, color: "var(--fg-on-cream-3)" }}>/{total} recursos</span>
          </div>
          <div style={{ height: 4, borderRadius: 999, background: "rgba(58,213,128,0.10)", overflow: "hidden" }}>
            <span style={{
              display: "block", height: "100%",
              width: animate ? "100%" : "0%",
              background: "linear-gradient(90deg, var(--pc-green) 0%, #4FE090 100%)",
              transition: "width 1400ms cubic-bezier(.2,.7,.2,1)",
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .cmp-scorebar { grid-template-columns: 1fr !important; gap: 14px !important; }
          .cmp-scorebar > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function PillarCard({ p, open, onToggle, animate, delay }) {
  return (
    <div style={{
      background: "white",
      border: open ? "1px solid var(--pc-green)" : "1px solid var(--border-on-cream)",
      borderRadius: "var(--radius-xl)",
      padding: "26px 26px 22px",
      display: "flex", flexDirection: "column", gap: 14,
      transition: "all 320ms cubic-bezier(.2,.7,.2,1)",
      opacity: animate ? 1 : 0,
      transform: animate ? "translateY(0)" : "translateY(20px)",
      transitionDelay: `${delay}ms`,
      cursor: "pointer",
      position: "relative", overflow: "hidden",
      boxShadow: open ? "0 12px 32px rgba(15,56,43,0.10)" : "var(--shadow-card)",
    }} onClick={onToggle}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "var(--radius-md)",
            background: "var(--accent-fill)", color: "var(--pc-green-2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Icon name={p.icon} size={20} stroke={2} />
          </div>
          <div>
            <div style={{ font: "var(--label-sm)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-on-cream-3)", marginBottom: 4 }}>
              {p.label}
            </div>
            <div className="display" style={{
              fontSize: 24, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.02em",
              display: "flex", alignItems: "baseline", gap: 5,
            }}>
              {p.items.length}<span style={{ fontSize: 14, color: "var(--fg-on-cream-3)", fontWeight: 500 }}>/{p.items.length}</span>
            </div>
          </div>
        </div>
        <span style={{
          flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
          background: open ? "var(--pc-green)" : "transparent",
          border: open ? "1px solid var(--pc-green)" : "1px solid var(--border-on-cream)",
          color: "var(--pc-dark)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 240ms", transform: open ? "rotate(45deg)" : "rotate(0)",
        }}><Icon name="plus" size={13} /></span>
      </div>
      <p style={{ margin: 0, fontSize: 14, color: "var(--fg-on-cream-2)", lineHeight: 1.5 }}>{p.desc}</p>
      <div style={{
        maxHeight: open ? 600 : 0, overflow: "hidden",
        transition: "max-height 480ms cubic-bezier(.2,.7,.2,1)",
      }}>
        <ul style={{
          margin: "8px 0 0", padding: 0, listStyle: "none",
          display: "flex", flexDirection: "column", gap: 10,
          borderTop: "1px dashed var(--border-on-cream)", paddingTop: 16,
        }}>
          {p.items.map((it, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{
                flexShrink: 0, width: 20, height: 20, borderRadius: "50%",
                background: "var(--accent-fill)", color: "var(--pc-green-2)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1,
              }}><Icon name="check" size={11} stroke={3} /></span>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--pc-dark)", lineHeight: 1.35 }}>{it.f}</div>
                <div style={{ fontSize: 12.5, color: "var(--fg-on-cream-3)", lineHeight: 1.45, marginTop: 2 }}>{it.n}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Compare() {
  const [ref, animate] = useReveal();
  const [openId, setOpenId] = useState(null);
  const [tableOpen, setTableOpen] = useState(false);
  const total = pillars2.reduce((s, p) => s + p.items.length, 0);
  const flat = pillars2.flatMap((p) => p.items.map((it) => ({ ...it, group: p.label })));

  return (
    <section id="comparativo" ref={ref} style={{
      background: "var(--pc-cream)", padding: "120px 0",
      borderTop: "1px solid var(--border-on-cream)",
    }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>
          <div className="eyebrow no-rule" style={{ color: "var(--pc-green-2)", justifyContent: "center", marginBottom: 18 }}>Comparativo</div>
          <h2 className="display" style={{
            fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--fg-on-cream-1)", margin: "0 0 18px",
          }}>
            <span style={{ color: "var(--fg-on-cream-1)" }}>Onze recursos.</span>{" "}
            <span style={{ color: "var(--fg-on-cream-3)" }}>Painel Clean tem todos.</span>{" "}
            <span style={{ color: "var(--pc-green-2)" }}>Outras soluções, nenhum.</span>
          </h2>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", margin: 0 }}>
            Quatro pilares. Clique cada um para ver os detalhes.
          </p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <ScoreBar animate={animate} total={total} />
        </div>

        <div className="cmp-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 40 }}>
          {pillars2.map((p, i) => (
            <PillarCard
              key={p.id}
              p={p}
              open={openId === p.id}
              onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              animate={animate}
              delay={animate ? 200 + i * 120 : 0}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: tableOpen ? 32 : 0 }}>
          <button onClick={() => setTableOpen(!tableOpen)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "12px 22px",
              border: "1px solid rgba(15,56,43,0.3)",
              borderRadius: "var(--radius-pill)",
              background: "transparent",
              color: "var(--fg-on-cream-1)", fontSize: 14, fontWeight: 600,
              cursor: "pointer", transition: "all 200ms",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--pc-dark)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--fg-on-cream-1)"; }}>
            {tableOpen ? "Recolher" : "Ver os 11 recursos lado a lado"}
            <span style={{ display: "inline-flex", transition: "transform 240ms", transform: tableOpen ? "rotate(180deg)" : "rotate(0)" }}>
              <Icon name="arrowDown" size={14} />
            </span>
          </button>
        </div>

        <div style={{
          maxHeight: tableOpen ? 2000 : 0, overflow: "hidden",
          transition: "max-height 600ms cubic-bezier(.2,.7,.2,1)",
        }}>
          <div style={{
            background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-2xl)",
            overflow: "hidden", boxShadow: "var(--shadow-card)",
          }}>
            <div className="cmp-row-head" style={{
              display: "grid", gridTemplateColumns: "2.2fr 1fr 1.4fr",
              background: "var(--pc-dark)", color: "white",
            }}>
              <div style={{ padding: "18px 24px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-3)" }}>Recurso</div>
              <div style={{ padding: "18px 22px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-3)", textAlign: "center", borderLeft: "1px solid var(--border-on-dark)" }}>Outras</div>
              <div style={{ padding: "18px 24px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pc-green)", borderLeft: "1px solid var(--border-on-dark)", display: "flex", alignItems: "center", gap: 10 }}>
                <LogoMark size={20} /> Painel Clean
              </div>
            </div>
            {flat.map((r, i) => (
              <div key={i} className="cmp-row" style={{
                display: "grid", gridTemplateColumns: "2.2fr 1fr 1.4fr",
                borderTop: "1px solid var(--border-on-cream)",
                background: i % 2 ? "transparent" : "rgba(255,251,236,0.5)",
              }}>
                <div style={{ padding: "16px 24px", fontSize: 13.5, color: "var(--fg-on-cream-1)" }}>
                  <span style={{ display: "block", fontWeight: 500 }}>{r.f}</span>
                  <span style={{ display: "block", fontSize: 11, color: "var(--fg-on-cream-3)", marginTop: 2, textTransform: "uppercase", letterSpacing: "0.08em" }}>{r.group}</span>
                </div>
                <div style={{
                  padding: "16px 22px", borderLeft: "1px solid var(--border-on-cream)",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  color: "var(--fg-on-cream-4)",
                }}>
                  <Icon name="x" size={16} stroke={2.5} />
                  <span style={{ fontSize: 12.5, fontWeight: 500 }}>Não</span>
                </div>
                <div style={{
                  padding: "16px 24px", borderLeft: "1px solid var(--border-on-cream)",
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                  <span style={{
                    flexShrink: 0, width: 24, height: 24, borderRadius: "50%",
                    background: "var(--accent-fill)", color: "var(--pc-green-2)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                  }}><Icon name="check" size={13} stroke={3} /></span>
                  <span style={{ fontSize: 13, color: "var(--fg-on-cream-2)" }}>{r.n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href={wa("Olá! Quero entender melhor o que diferencia a Painel Clean.")} target="_blank" rel="noopener noreferrer"
            className="btn-primary">
            <WhatsBrand size={16} />Quero falar com um especialista
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .cmp-pillars { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .cmp-pillars { grid-template-columns: 1fr !important; }
          .cmp-row-head { display: none !important; }
          .cmp-row { grid-template-columns: 1fr !important; padding: 6px 0 !important; }
          .cmp-row > div { border-left: 0 !important; padding: 8px 18px !important; }
          .cmp-row > div + div { border-top: 1px solid var(--border-on-cream) !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Compare });
