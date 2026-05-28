const trainingModules2 = [
  { n: "01", t: "Operação", h: "42min" },
  { n: "02", t: "Segurança", h: "56min" },
  { n: "03", t: "Preço",     h: "38min" },
  { n: "04", t: "Captação",  h: "45min" },
  { n: "05", t: "Fidelizar", h: "31min" },
];

function HourlyBars({ animate }) {
  const ride = useCountUp(animate ? 25 : 0, { duration: 1100, trigger: animate });
  const pc   = useCountUp(animate ? 280 : 0, { duration: 1800, trigger: animate });
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid var(--border-on-dark)",
      borderRadius: "var(--radius-lg)",
      padding: "20px 22px",
      marginTop: 22,
    }}>
      <div style={{
        font: "var(--label-sm)", letterSpacing: "0.1em", textTransform: "uppercase",
        color: "var(--fg-4)", marginBottom: 14,
      }}>
        Renda por hora trabalhada
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <span style={{ fontSize: 13.5, color: "var(--fg-3)" }}>Motorista de app</span>
            <span className="display" style={{
              fontSize: 22, fontWeight: 600, color: "rgba(255,255,255,0.65)",
              letterSpacing: "-0.02em", lineHeight: 1,
            }}>R$ {ride}<span style={{ fontSize: 12, color: "var(--fg-4)", fontWeight: 500, marginLeft: 4 }}>/h</span></span>
          </div>
          <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 999, overflow: "hidden" }}>
            <span style={{
              display: "block", height: "100%",
              width: animate ? "12%" : "0%",
              background: "rgba(255,255,255,0.35)", borderRadius: 999,
              transition: "width 1100ms cubic-bezier(.2,.7,.2,1)",
            }} />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: "white" }}>
              Painel Clean <span style={{ color: "var(--fg-4)", fontWeight: 400, fontSize: 12 }}>· por serviço médio</span>
            </span>
            <span className="display" style={{
              fontSize: 22, fontWeight: 600, color: "var(--pc-green)",
              letterSpacing: "-0.02em", lineHeight: 1,
            }}>R$ {pc}</span>
          </div>
          <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 999, overflow: "hidden" }}>
            <span style={{
              display: "block", height: "100%",
              width: animate ? "100%" : "0%",
              background: "linear-gradient(90deg, var(--pc-green) 0%, #4FE090 100%)",
              borderRadius: 999,
              transition: "width 1800ms cubic-bezier(.2,.7,.2,1) 200ms",
            }} />
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 14, paddingTop: 12, borderTop: "1px dashed var(--border-on-dark)",
        fontSize: 12, color: "var(--fg-4)", lineHeight: 1.5,
      }}>
        Cada serviço leva ~1h e fatura em média R$ 280. Em rota diária, supera 10× a renda de motorista de app.
      </div>
    </div>
  );
}

function ModuleTimeline({ animate }) {
  const len = 100;
  return (
    <div style={{ marginTop: 28, position: "relative" }}>
      <div style={{
        font: "var(--label-sm)", letterSpacing: "0.1em", textTransform: "uppercase",
        color: "var(--fg-4)", marginBottom: 16,
      }}>
        5 módulos · 3h28min · do zero ao primeiro cliente
      </div>
      <div className="tr2-timeline">
        <svg className="tr2-track-line" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="2" x2={len} y2="2" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" strokeLinecap="round" />
          <line x1="0" y1="2" x2={len} y2="2" stroke="var(--pc-green)" strokeWidth="0.7" strokeLinecap="round"
            strokeDasharray={len} strokeDashoffset={animate ? 0 : len}
            style={{ transition: "stroke-dashoffset 1600ms cubic-bezier(.2,.7,.2,1) 200ms" }} />
        </svg>
        <div className="tr2-steps">
          {trainingModules2.map((m, i) => (
            <div key={i} className="tr2-step" style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 500ms ${300 + i * 220}ms ease, transform 500ms ${300 + i * 220}ms cubic-bezier(.2,.7,.2,1)`,
            }}>
              <div className="tr2-dot">
                <span className="tr2-dot-inner"></span>
              </div>
              <div className="tr2-n">{m.n}</div>
              <div className="tr2-t">{m.t}</div>
              <div className="tr2-h">{m.h}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .tr2-timeline { position: relative; padding-top: 18px; }
        .tr2-track-line { position: absolute; top: 31px; left: 0; right: 0; width: 100%; height: 2px; z-index: 0; }
        .tr2-steps { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; z-index: 1; }
        .tr2-step { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .tr2-dot { width: 26px; height: 26px; border-radius: 50%; background: var(--pc-darker); border: 2px solid var(--pc-green); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; box-shadow: 0 0 0 4px rgba(58,213,128,0.08); }
        .tr2-dot-inner { width: 8px; height: 8px; border-radius: 50%; background: var(--pc-green); }
        .tr2-n { font-family: ui-monospace, monospace; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; color: var(--pc-green); }
        .tr2-t { font-size: 14px; font-weight: 600; color: white; }
        .tr2-h { font-size: 11px; color: var(--fg-4); }
        @media (max-width: 720px) {
          .tr2-track-line { display: none; }
          .tr2-steps { grid-template-columns: 1fr; gap: 0; }
          .tr2-step { flex-direction: row; align-items: center; text-align: left; gap: 14px; padding: 12px 0; }
          .tr2-dot { margin-bottom: 0; flex-shrink: 0; }
          .tr2-n { width: 28px; flex-shrink: 0; }
          .tr2-t { flex: 1; }
          .tr2-h { flex-shrink: 0; }
        }
      `}</style>
    </div>
  );
}

function Training() {
  const [ref, animate] = useReveal({ threshold: 0.10 });
  const heroImg = "public/images/hero-tecnico-cliente.png";
  return (
    <section id="treinamento" ref={ref} style={{
      background: "var(--pc-darker)", color: "white",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: -200, right: -200, width: 600, height: 600,
        background: "radial-gradient(circle, rgba(58,213,128,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div className="tr2-grid" style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.15fr)",
        alignItems: "stretch",
      }}>
        <div className="tr2-photo" style={{ position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${heroImg}')`,
            backgroundSize: "cover", backgroundPosition: "center 35%",
            transform: animate ? "scale(1)" : "scale(1.06)",
            transition: "transform 2400ms cubic-bezier(.2,.7,.2,1)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(15,56,43,0.45) 0%, rgba(58,213,128,0.18) 60%, rgba(12,40,31,0.55) 100%)",
            mixBlendMode: "multiply",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, rgba(12,40,31,0) 0%, rgba(12,40,31,0) 60%, var(--pc-darker) 100%)",
          }} />
        </div>
        <div className="tr2-content" style={{
          padding: "72px 56px 72px 40px",
          position: "relative", zIndex: 2,
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <div style={{ maxWidth: 540 }}>
            <div className="eyebrow" style={{
              marginBottom: 18,
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(10px)",
              transition: "all 600ms cubic-bezier(.2,.7,.2,1)",
            }}>Treinamento online</div>
            <h2 className="display" style={{
              fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.05, margin: "0 0 18px",
              letterSpacing: "-0.025em", color: "white",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(16px)",
              transition: "all 700ms 80ms cubic-bezier(.2,.7,.2,1)",
            }}>
              Ganhe mais por hora<br/>
              <span style={{ color: "var(--pc-green)" }}>que um motorista de app.</span>
            </h2>
            <p style={{
              font: "var(--body)", color: "var(--fg-3)", margin: "0 0 0",
              maxWidth: 460,
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(16px)",
              transition: "all 700ms 160ms cubic-bezier(.2,.7,.2,1)",
            }}>
              Do zero ao primeiro cliente em menos de uma semana. Operação, segurança em altura, precificação e como fechar contratos recorrentes.
            </p>
            <div style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "all 800ms 220ms cubic-bezier(.2,.7,.2,1)",
            }}>
              <HourlyBars animate={animate} />
            </div>
            <ModuleTimeline animate={animate} />
            <div className="tr2-cta-row" style={{
              marginTop: 28, padding: "16px 18px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border-accent)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 0 28px rgba(58,213,128,0.10)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 16, flexWrap: "wrap",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(12px)",
              transition: "all 800ms 380ms cubic-bezier(.2,.7,.2,1)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
                <span style={{
                  flexShrink: 0, width: 40, height: 40, borderRadius: "var(--radius-md)",
                  background: "var(--accent-fill)", color: "var(--pc-green)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}><Icon name="bolt" size={18} stroke={2} /></span>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                    <span className="display" style={{
                      fontSize: 26, color: "var(--pc-green)", fontWeight: 600,
                      letterSpacing: "-0.03em", lineHeight: 1,
                    }}>R$ 39,90</span>
                    <span style={{ fontSize: 12, color: "var(--fg-4)", textDecoration: "line-through" }}>R$ 197</span>
                    <span style={{
                      padding: "2px 8px", borderRadius: "var(--radius-pill)",
                      background: "var(--pc-green)", color: "var(--pc-dark)",
                      fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>-80%</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--fg-4)", marginTop: 3 }}>
                    único · acesso vitalício · 5 módulos
                  </div>
                </div>
              </div>
              <div className="tr2-cta-buttons" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href={wa("Olá! Quero começar o treinamento Painel Clean.")} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "11px 14px",
                    border: "1px solid var(--border-on-dark-strong)",
                    color: "var(--fg-2)", fontSize: 13, fontWeight: 600,
                    borderRadius: "var(--radius)",
                    transition: "all 180ms",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--fg-2)"; }}>
                  <WhatsBrand size={13} />WhatsApp
                </a>
                <a href="/curso" className="btn-primary" style={{ padding: "11px 18px", fontSize: 13.5 }}>
                  Ver curso completo<Icon name="arrowRight" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .tr2-grid { grid-template-columns: 1fr !important; }
          .tr2-photo { aspect-ratio: 16/10; }
          .tr2-content { padding: 48px 24px !important; }
        }
        @media (max-width: 540px) {
          .tr2-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .tr2-cta-buttons { width: 100%; }
          .tr2-cta-buttons > a { flex: 1; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Training });
