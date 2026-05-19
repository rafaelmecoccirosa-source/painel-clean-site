// ===== CURSO PAGE — Treinamento Painel Clean =====

function CursoNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      background: scrolled ? "rgba(12,40,31,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-on-dark)" : "1px solid transparent",
      transition: "all 240ms var(--ease-out)",
    }}>
      <div className="container" style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo />
        <nav className="curso-nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="/" style={{ color: "var(--fg-4)", fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, transition: "color 200ms" }}
            onMouseEnter={e => e.currentTarget.style.color = "white"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--fg-4)"}>
            <Icon name="arrowLeft" size={13} />Painel Clean
          </a>
          {[{ label: "Módulos", href: "#modulos" }, { label: "Calculadora", href: "#calculadora" }, { label: "Depoimentos", href: "#depoimentos" }].map(l => (
            <a key={l.href} href={l.href} style={{ color: "var(--fg-2)", fontSize: 14, fontWeight: 500, transition: "color 200ms" }}
              onMouseEnter={e => e.currentTarget.style.color = "white"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--fg-2)"}>{l.label}</a>
          ))}
        </nav>
        <a href={wa("Olá! Quero começar o treinamento Painel Clean agora.")} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pc-green)", color: "var(--pc-dark)", fontWeight: 700, fontSize: 14, padding: "11px 18px", borderRadius: "var(--radius-pill)", transition: "all 180ms" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#4FE090"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--pc-green)"; e.currentTarget.style.transform = "translateY(0)"; }}>
          <WhatsBrand size={14} /> Começar agora
        </a>
      </div>
      <style>{`@media (max-width: 860px) { .curso-nav-links { display: none !important; } }`}</style>
    </header>
  );
}

const cursoModules = [
  { n: "01", t: "Operação do equipamento", d: "Setup, montagem e manutenção das escovas G5/D5/S5. Boas práticas para preservar o motor brushless e maximizar a vida útil.", h: "42min" },
  { n: "02", t: "Segurança em altura (NR-35)", d: "EPIs obrigatórios, ancoragem e procedimentos para trabalho seguro em telhados, coberturas e fachadas de qualquer tipo.", h: "56min" },
  { n: "03", t: "Precificação e propostas", d: "Como precificar por superfície, por m² e por contrato recorrente. Templates de proposta e contrato prontos para usar.", h: "38min" },
  { n: "04", t: "Captação de clientes", d: "Prospecção via Instagram, WhatsApp e parcerias com integradores. Scripts de abordagem testados em campo.", h: "45min" },
  { n: "05", t: "Relatórios e fidelização", d: "Como entregar laudos profissionais e converter o cliente em contrato anual recorrente, gerando receita previsível.", h: "31min" },
];

const cursoProfiles = [
  {
    icon: "wrench",
    title: "Técnico iniciante",
    desc: "Você quer começar do zero e precisa de um caminho prático — equipamento, precificação, primeiro cliente. Este curso foi feito exatamente para isso.",
    tags: ["Do zero", "Primeiros clientes", "Sem experiência prévia"],
  },
  {
    icon: "bolt",
    title: "Eletricista ou instalador solar",
    desc: "Você já atende usinas e quer adicionar limpeza como serviço recorrente. Aumente seu ticket médio e crie uma renda previsível.",
    tags: ["Serviço adicional", "Ticket maior", "Renda recorrente"],
  },
  {
    icon: "sun",
    title: "Dono de usina",
    desc: "Quer fazer a manutenção você mesmo? Aprenda a operar o equipamento com segurança e economize em contratos de limpeza.",
    tags: ["Autonomia", "Redução de custo", "Equipe própria"],
  },
];

const cursoTestimonials = [
  { name: "Marcos Oliveira", city: "Florianópolis/SC", role: "Técnico autônomo", text: "Em 10 dias já tinha meu primeiro contrato fechado. O módulo de precificação foi o que mais me ajudou — eu estava cobrando muito abaixo do mercado.", stars: 5 },
  { name: "Ricardo Fonseca", city: "Goiânia/GO", role: "Instalador solar", text: "Adicionei limpeza no meu portfólio e hoje é o serviço que mais fatura. Clientes renovam todo semestre sem precisar re-vender.", stars: 5 },
  { name: "Ana Paula Souza", city: "São Paulo/SP", role: "Técnica autônoma", text: "O suporte pelo WhatsApp é real. Tive uma dúvida em campo às 7h da manhã e em 20 minutos já tinha a resposta.", stars: 5 },
];

// ===== SEÇÕES =====

function CursoHero() {
  return (
    <section style={{
      background: "var(--pc-darker)", color: "white",
      padding: "76px 0 88px", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 60% at 0% 35%, rgba(58,213,128,.10), transparent 55%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative" }}>
        <div className="ch3-grid">

          {/* LEFT — text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", animation: "fadeUp 700ms ease both" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "7px 14px", borderRadius: "var(--radius-pill)",
              background: "var(--accent-fill-soft)", border: "1px solid var(--border-accent)",
              color: "var(--pc-green)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
              marginBottom: 26, width: "fit-content",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pc-green)", animation: "pulseDot 1.6s infinite" }} />
              Treinamento online · acesso imediato
            </div>

            <h1 className="display" style={{ fontSize: "clamp(36px, 4.8vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
              Do zero ao<br />
              primeiro cliente<br />
              <span style={{ color: "var(--pc-green)" }}>em uma semana.</span>
            </h1>

            <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", maxWidth: 460, margin: "0 0 32px", lineHeight: 1.7 }}>
              5 módulos práticos para operar equipamentos brushless, precificar, captar clientes e criar uma renda previsível com limpeza profissional.
            </p>

            <div style={{
              display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
              padding: "16px 20px", background: "rgba(15,56,43,0.55)",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              border: "1px solid var(--border-accent)", borderRadius: "var(--radius-lg)",
              boxShadow: "0 0 36px rgba(58,213,128,0.10)", marginBottom: 24, maxWidth: 460,
            }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontSize: 11, color: "var(--fg-4)", textDecoration: "line-through", marginBottom: 2 }}>R$ 197</div>
                <div className="display" style={{ fontSize: 28, fontWeight: 600, color: "var(--pc-green)", lineHeight: 1, letterSpacing: "-0.03em" }}>R$ 39,90</div>
                <div style={{ fontSize: 11, color: "var(--fg-4)", marginTop: 4 }}>único · vitalício</div>
              </div>
              <a href={wa("Olá! Quero começar o treinamento Painel Clean.")} target="_blank" rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, justifyContent: "center", minWidth: 160, fontSize: 13.5, padding: "12px 18px" }}>
                Garantir vaga <Icon name="arrowRight" size={14} />
              </a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px 20px" }}>
              {["Acesso vitalício", "Certificado", "Suporte WhatsApp", "Reembolso em 7 dias"].map((it, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--fg-2)" }}>
                  <span style={{ color: "var(--pc-green)", flexShrink: 0 }}><Icon name="check" size={14} /></span>{it}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo card + seal + stats */}
          <div style={{ animation: "fadeUp 700ms 160ms ease both", display: "flex", flexDirection: "column" }}>

            {/* Photo frame */}
            <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ borderRadius: "var(--radius-2xl)", overflow: "hidden", flex: 1, minHeight: 220 }}>
                <img
                  src="public/images/hero-curso.png"
                  alt="Técnico Painel Clean em campo"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(10,31,23,0.60) 100%)" }} />
              </div>

              {/* Stamp seal — top-right */}
              <div style={{
                position: "absolute", top: -14, right: -14,
                width: 108, height: 108, borderRadius: "50%",
                background: "var(--pc-green)", color: "var(--pc-dark)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 28px rgba(58,213,128,0.45)",
                transform: "rotate(10deg)",
                border: "3px solid var(--pc-darker)",
                zIndex: 3,
              }}>
                <div style={{ fontSize: 8.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.65, marginBottom: 1 }}>apenas</div>
                <div className="display" style={{ fontSize: 24, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em" }}>R$39</div>
                <div style={{ fontSize: 8.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.65, marginTop: 1 }}>vitalício</div>
              </div>

              {/* Bottom-of-photo floating pill */}
              <div style={{
                position: "absolute", bottom: 16, left: 16, right: 16,
                background: "rgba(10,24,18,0.72)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(58,213,128,0.20)", borderRadius: "var(--radius-lg)",
                padding: "12px 16px", display: "flex", alignItems: "center", gap: 10,
                zIndex: 2,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--pc-green)", flexShrink: 0, animation: "pulseDot 1.6s infinite" }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500, lineHeight: 1.4 }}>
                  <strong style={{ color: "white" }}>212 alunos</strong> já começaram a faturar com limpeza profissional
                </span>
              </div>
            </div>

            {/* Stats below photo */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 12 }}>
              {[
                { icon: "users", k: "212+", v: "alunos ativos" },
                { icon: "star", k: "4,9 ★", v: "avaliação" },
                { icon: "play", k: "3h28", v: "de conteúdo" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-on-dark)",
                  borderRadius: "var(--radius-lg)", padding: "14px 12px", textAlign: "center",
                }}>
                  <div className="display" style={{ fontSize: 17, fontWeight: 700, color: "white", letterSpacing: "-0.02em", marginBottom: 4 }}>{s.k}</div>
                  <div style={{ fontSize: 10.5, color: "var(--fg-4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.v}</div>
                </div>
              ))}
            </div>

            {/* See modules link */}
            <div style={{ marginTop: 14, textAlign: "center" }}>
              <a href="#modulos" style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontSize: 13, color: "var(--fg-3)", fontWeight: 500,
                borderBottom: "1px solid var(--border-on-dark)", paddingBottom: 2,
                transition: "color 180ms, border-color 180ms",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-3)"; e.currentTarget.style.borderColor = "var(--border-on-dark)"; }}>
                Ver os módulos <Icon name="arrowRight" size={13} />
              </a>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .ch3-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: stretch;
          padding-top: 12px;
        }
        @media (max-width: 900px) {
          .ch3-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .ch3-grid > div:last-child { order: -1; }
        }
        @media (max-width: 540px) {
          .ch3-grid > div:last-child div[style*="aspectRatio"] { aspect-ratio: 16/9 !important; }
        }
      `}</style>
    </section>
  );
}

function CursoModules() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="modulos" style={{ background: "var(--pc-cream)", padding: "96px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow center" style={{ color: "var(--pc-green-2)", marginBottom: 16 }}>5 módulos · 3h28min</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.06, color: "var(--fg-on-cream-1)", margin: "0 0 16px" }}>
            O que você vai aprender
          </h2>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", maxWidth: 520, margin: "0 auto" }}>
            Cada módulo foi construído por técnicos que trabalham em campo. Conteúdo direto, sem enrolação.
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", borderTop: "1px solid var(--border-on-cream)" }}>
          {cursoModules.map((m, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--border-on-cream)" }}>
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", padding: "22px 0", display: "flex", alignItems: "center", gap: 20, textAlign: "left", color: "var(--fg-on-cream-1)" }}>
                <span style={{ flexShrink: 0, fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.1em", color: "var(--pc-green-2)", fontWeight: 700, width: 24 }}>{m.n}</span>
                <span className="display" style={{ flex: 1, fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>{m.t}</span>
                <span style={{ flexShrink: 0, fontSize: 12, color: "var(--fg-on-cream-3)", fontWeight: 500 }}>{m.h}</span>
                <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: openIdx === i ? "var(--pc-green)" : "transparent", border: openIdx === i ? "1px solid var(--pc-green)" : "1px solid var(--border-on-cream)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 240ms", transform: openIdx === i ? "rotate(45deg)" : "rotate(0)" }}>
                  <Icon name="plus" size={13} />
                </span>
              </button>
              <div style={{ maxHeight: openIdx === i ? 200 : 0, overflow: "hidden", transition: "max-height 360ms ease, opacity 240ms ease", opacity: openIdx === i ? 1 : 0, paddingBottom: openIdx === i ? 20 : 0 }}>
                <p style={{ margin: 0, paddingLeft: 44, font: "var(--body-sm)", color: "var(--fg-on-cream-2)", lineHeight: 1.6 }}>{m.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <a href={wa("Olá! Quero começar o treinamento Painel Clean agora.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Quero acessar os 5 módulos<Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

const outcomes2 = [
  { week: "Sem. 1", days: "Dias 1–7",   icon: "wrench",     title: "Operar com segurança",    desc: "Setup, montagem e operação das escovas brushless. Tudo prático, em campo.",       module: "Módulos 01 + 02" },
  { week: "Sem. 2", days: "Dias 8–14",  icon: "calculator", title: "Precificar e fechar",     desc: "Como precificar por painel, por m², por contrato recorrente. Templates prontos.", module: "Módulo 03" },
  { week: "Sem. 3", days: "Dias 15–21", icon: "chat",       title: "Captar pelo WhatsApp",    desc: "Prospecção via Instagram + WhatsApp. Scripts testados em campo.",                 module: "Módulo 04" },
  { week: "Sem. 4", days: "Dias 22–30", icon: "file",       title: "Emitir nota e fidelizar", desc: "Laudos profissionais que viram contrato anual. Receita previsível.",             module: "Módulo 05" },
];

function OutcomeCard({ o, i, animate }) {
  const delay = animate ? 400 + i * 200 : 0;
  return (
    <div style={{
      position: "relative",
      background: "var(--pc-dark)",
      borderRadius: "var(--radius-xl)",
      padding: "26px 24px 24px",
      color: "white",
      display: "flex", flexDirection: "column", gap: 14,
      opacity: animate ? 1 : 0,
      transform: animate ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 600ms ${delay}ms cubic-bezier(.2,.7,.2,1), transform 700ms ${delay}ms cubic-bezier(.2,.7,.2,1)`,
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: -40, right: -40, width: 140, height: 140,
        background: "radial-gradient(circle, rgba(58,213,128,0.30) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "var(--radius-md)",
          background: "var(--accent-fill)", color: "var(--pc-green)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}><Icon name={o.icon} size={20} stroke={1.8} /></div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pc-green)" }}>{o.days}</div>
      </div>
      <div className="display" style={{ fontSize: 20, fontWeight: 600, color: "white", lineHeight: 1.2, position: "relative" }}>{o.title}</div>
      <p style={{ margin: 0, fontSize: 13.5, color: "var(--fg-3)", lineHeight: 1.55, position: "relative", flex: 1 }}>{o.desc}</p>
      <div style={{
        position: "relative",
        paddingTop: 14, borderTop: "1px dashed var(--border-on-dark)",
        fontSize: 12, color: "var(--fg-4)", display: "flex", alignItems: "center", gap: 8,
      }}>
        <Icon name="play" size={11} stroke={2} />{o.module}
      </div>
    </div>
  );
}

function CursoOutcomes() {
  const [ref, animate] = useReveal({ threshold: 0.10 });
  return (
    <section ref={ref} id="outcomes" style={{
      background: "var(--pc-green)",
      padding: "100px 0 110px",
      position: "relative", overflow: "hidden",
    }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }} aria-hidden="true">
        <defs>
          <pattern id="oc-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="var(--pc-dark)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#oc-dots)" />
      </svg>
      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap", marginBottom: 56 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "7px 14px", borderRadius: "var(--radius-pill)",
              background: "rgba(12,40,31,0.10)", border: "1px solid rgba(12,40,31,0.20)",
              color: "var(--pc-dark)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              marginBottom: 22,
              opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(10px)",
              transition: "all 600ms cubic-bezier(.2,.7,.2,1)",
            }}>
              <Icon name="target" size={14} stroke={2} />Plano de 30 dias
            </div>
            <h2 className="display" style={{
              fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.04, color: "var(--pc-dark)", margin: 0, letterSpacing: "-0.03em",
              opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(16px)",
              transition: "all 700ms 80ms cubic-bezier(.2,.7,.2,1)",
            }}>
              Em 30 dias você sai daqui<br/>
              <span style={{ color: "rgba(12,40,31,0.50)" }}>pronto para:</span>
            </h2>
          </div>
          <div style={{
            display: "flex", flexDirection: "column", gap: 8, minWidth: 200,
            opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(16px)",
            transition: "all 700ms 200ms cubic-bezier(.2,.7,.2,1)",
          }}>
            <div className="display" style={{ fontSize: 48, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.03em", lineHeight: 1 }}>30 dias</div>
            <div style={{ fontSize: 13, color: "rgba(12,40,31,0.65)", fontWeight: 500 }}>4 semanas · 3h28min · ao seu ritmo</div>
          </div>
        </div>
        <div className="oc-stage">
          <svg className="oc-line" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="2" x2="100" y2="2" stroke="rgba(12,40,31,0.18)" strokeWidth="0.5" />
            <line x1="0" y1="2" x2="100" y2="2" stroke="var(--pc-dark)" strokeWidth="0.7" strokeLinecap="round"
              strokeDasharray="100" strokeDashoffset={animate ? 0 : 100}
              style={{ transition: "stroke-dashoffset 2000ms cubic-bezier(.2,.7,.2,1) 300ms" }} />
          </svg>
          <div className="oc-markers">
            {outcomes2.map((o, i) => (
              <div key={i} className="oc-marker" style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "scale(1)" : "scale(0.6)",
                transition: `opacity 400ms ${300 + i * 200}ms ease, transform 500ms ${300 + i * 200}ms cubic-bezier(.34,1.56,.64,1)`,
              }}>
                <div className="oc-dot"><span className="oc-dot-inner" /></div>
                <div className="oc-week">{o.week}</div>
              </div>
            ))}
          </div>
          <div className="oc-cards">
            {outcomes2.map((o, i) => <OutcomeCard key={i} o={o} i={i} animate={animate} />)}
          </div>
        </div>
        <div style={{
          marginTop: 56, padding: "26px 28px",
          background: "rgba(12,40,31,0.10)", border: "1px solid rgba(12,40,31,0.18)",
          borderRadius: "var(--radius-xl)",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap",
          opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(20px)",
          transition: "all 800ms 1200ms cubic-bezier(.2,.7,.2,1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Icon name="flag" size={28} stroke={1.8} style={{ color: "var(--pc-dark)" }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pc-dark)", marginBottom: 2 }}>Comece o dia 1 hoje. O dia 30 chega rápido.</div>
              <div style={{ fontSize: 13, color: "rgba(12,40,31,0.65)" }}>Acesso vitalício por R$ 39,90 · estude no seu ritmo</div>
            </div>
          </div>
          <a href={wa("Olá! Quero começar o treinamento Painel Clean.")} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "var(--pc-dark)", color: "var(--pc-green)",
              fontWeight: 700, fontSize: 14, padding: "14px 22px", borderRadius: "var(--radius-md)",
              transition: "all 200ms",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            Começar dia 1<Icon name="arrowRight" size={14} />
          </a>
        </div>
      </div>
      <style>{`
        .oc-stage { position: relative; padding-top: 28px; }
        .oc-line { position: absolute; top: 40px; left: 0; right: 0; width: 100%; height: 3px; z-index: 0; }
        .oc-markers { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 22px; }
        .oc-marker { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .oc-dot { width: 26px; height: 26px; border-radius: 50%; background: var(--pc-green); border: 3px solid var(--pc-dark); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 4px rgba(12,40,31,0.10); }
        .oc-dot-inner { width: 6px; height: 6px; border-radius: 50%; background: var(--pc-dark); }
        .oc-week { font-family: ui-monospace, monospace; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; color: rgba(12,40,31,0.70); text-transform: uppercase; }
        .oc-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        @media (max-width: 900px) {
          .oc-cards { grid-template-columns: repeat(2, 1fr); }
          .oc-markers { grid-template-columns: repeat(2, 1fr); }
          .oc-line { display: none; }
        }
        @media (max-width: 620px) {
          .oc-markers { display: none; }
          .oc-cards { grid-template-columns: 1fr; gap: 14px; }
          .oc-stage { padding-top: 0; }
        }
      `}</style>
    </section>
  );
}

function CursoForWho() {
  return (
    <section style={{ background: "var(--pc-darker)", padding: "96px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="eyebrow center" style={{ marginBottom: 16 }}>Público</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.06, color: "white", margin: 0 }}>
            Para quem é este treinamento?
          </h2>
        </div>
        <div className="forwho-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cursoProfiles.map((p, i) => (
            <div key={i} style={{ padding: "32px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-xl)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--accent-fill)", color: "var(--pc-green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Icon name={p.icon} size={22} />
              </div>
              <div className="display" style={{ fontSize: 19, fontWeight: 600, color: "white", marginBottom: 12, letterSpacing: "-0.01em" }}>{p.title}</div>
              <p style={{ margin: "0 0 20px", font: "var(--body-sm)", color: "var(--fg-3)", lineHeight: 1.65, flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tags.map((tag, j) => (
                  <span key={j} style={{ padding: "5px 10px", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", borderRadius: "var(--radius-pill)", fontSize: 12, fontWeight: 600, color: "var(--pc-green)", letterSpacing: "0.04em" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 800px) { .forwho-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function CursoCalcDivider() {
  return (
    <div style={{ background: "var(--pc-darker)", padding: "56px 0", textAlign: "center" }}>
      <div className="container">
        <h2 className="display" style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, color: "white", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
          Quanto você pode faturar com a Painel Clean?
        </h2>
        <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", margin: "0 0 24px" }}>
          Ajuste os parâmetros para o seu mercado e veja sua estimativa.
        </p>
        <Icon name="arrowDown" size={24} style={{ color: "var(--pc-green)" }} />
      </div>
    </div>
  );
}

const markets2 = {
  solar: {
    label: "Solar", sub: "Limpeza de usinas fotovoltaicas", icon: "sun",
    photo: "public/images/escovapordosol.png",
    v0: { label: "Usinas/mês",        unit: "",    min: 1,  max: 30,   step: 1,  def: 8  },
    v1: { label: "Painéis por usina", unit: "",    min: 6,  max: 100,  step: 2,  def: 20 },
    v2: { label: "R$ por painel",     unit: "R$ ", min: 12, max: 35,   step: 1,  def: 22 },
    volumeLabel: (v0, v1) => `${(v0*v1).toLocaleString("pt-BR")} painéis`,
  },
  agro: {
    label: "Agro", sub: "Estufas e fachadas agrícolas", icon: "leaf",
    photo: "public/images/escovaseacessorios.png",
    v0: { label: "Clientes/mês",   unit: "",    min: 1,   max: 20,   step: 1,  def: 5   },
    v1: { label: "m² por cliente", unit: "m² ", min: 100, max: 2000, step: 50, def: 400 },
    v2: { label: "R$ por m²",      unit: "R$ ", min: 3,   max: 12,   step: 1,  def: 5   },
    volumeLabel: (v0, v1) => `${(v0*v1).toLocaleString("pt-BR")} m²`,
  },
  urbano: {
    label: "Urbano", sub: "Fachadas, vidros e empresas", icon: "building",
    photo: "public/images/painel_clean_-_limpando_telhado.png",
    v0: { label: "Serviços/mês",   unit: "",    min: 1,  max: 15,  step: 1,  def: 4   },
    v1: { label: "m² por serviço", unit: "m² ", min: 20, max: 500, step: 10, def: 100 },
    v2: { label: "R$ por m²",      unit: "R$ ", min: 5,  max: 18,  step: 1,  def: 8   },
    volumeLabel: (v0, v1) => `${(v0*v1).toLocaleString("pt-BR")} m²`,
  },
};

function MarketCard({ id, m, active, onPick }) {
  return (
    <button onClick={() => onPick(id)} type="button" style={{
      position: "relative", overflow: "hidden",
      borderRadius: "var(--radius-xl)",
      border: active ? "2px solid var(--pc-green)" : "1px solid var(--border-on-cream)",
      padding: 0, cursor: "pointer",
      background: "var(--pc-darker)",
      transition: "all 280ms cubic-bezier(.2,.7,.2,1)",
      transform: active ? "translateY(-3px)" : "translateY(0)",
      boxShadow: active ? "0 16px 36px rgba(58,213,128,0.18)" : "var(--shadow-card)",
      textAlign: "left", aspectRatio: "1.6 / 1",
    }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.transform = "translateY(0)"; }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${m.photo}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: active ? 0.55 : 0.32, transition: "opacity 320ms",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: active
          ? "linear-gradient(160deg, rgba(12,40,31,0.65) 0%, rgba(12,40,31,0.30) 50%, rgba(58,213,128,0.20) 100%)"
          : "linear-gradient(160deg, rgba(12,40,31,0.85) 0%, rgba(12,40,31,0.65) 100%)",
      }} />
      {active && (
        <div style={{
          position: "absolute", top: 14, right: 14,
          width: 28, height: 28, borderRadius: "50%",
          background: "var(--pc-green)", color: "var(--pc-dark)",
          display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700,
        }}><Icon name="check" size={14} stroke={3} /></div>
      )}
      <div style={{
        position: "relative", height: "100%", padding: "22px 24px",
        display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start",
      }}>
        {!active && (
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            padding: "5px 10px", borderRadius: "var(--radius-pill)",
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)",
          }}>Selecionar<Icon name="arrowRight" size={11} stroke={2.2} /></span>
        )}
        {active && <span aria-hidden="true" />}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            flexShrink: 0, width: 40, height: 40, borderRadius: "var(--radius-md)",
            background: active ? "var(--pc-green)" : "rgba(255,255,255,0.10)",
            color: active ? "var(--pc-dark)" : "white",
            display: "flex", alignItems: "center", justifyContent: "center", transition: "all 240ms",
          }}><Icon name={m.icon} size={20} stroke={2} /></div>
          <div>
            <div className="display" style={{ fontSize: 26, fontWeight: 600, color: "white", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 4 }}>{m.label}</div>
            <div style={{ fontSize: 13, color: "var(--fg-3)" }}>{m.sub}</div>
          </div>
        </div>
      </div>
    </button>
  );
}

function VarCard({ cfg, value, onChange }) {
  return (
    <div style={{
      flex: 1, minWidth: 0,
      background: "white", border: "1px solid var(--border-on-cream)",
      borderRadius: "var(--radius-xl)", padding: "20px 22px 16px",
      display: "flex", flexDirection: "column", gap: 12,
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-on-cream-3)" }}>{cfg.label}</div>
      <div className="display" style={{ fontSize: 36, fontWeight: 600, color: "var(--fg-on-cream-1)", lineHeight: 1, letterSpacing: "-0.025em" }}>
        {cfg.unit}{value.toLocaleString("pt-BR")}
      </div>
      <div>
        <input type="range" min={cfg.min} max={cfg.max} step={cfg.step} value={value}
          onChange={e => onChange(+e.target.value)}
          style={{ width: "100%", accentColor: "var(--pc-green-2)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "var(--fg-on-cream-4)", marginTop: 4 }}>
          <span>{cfg.unit}{cfg.min}</span><span>{cfg.unit}{cfg.max}</span>
        </div>
      </div>
    </div>
  );
}

function CursoCalculator() {
  const [ref, animate] = useReveal({ threshold: 0.10 });
  const [mkt, setMkt] = useState("solar");
  const m = markets2[mkt];
  const [v0, setV0] = useState(m.v0.def);
  const [v1, setV1] = useState(m.v1.def);
  const [v2, setV2] = useState(m.v2.def);

  useEffect(() => { setV0(m.v0.def); setV1(m.v1.def); setV2(m.v2.def); }, [mkt]);

  const monthly = v0 * v1 * v2;
  const annual = monthly * 12;
  const minWages = (monthly / 1518).toFixed(1);
  const animatedMonthly = useCountUp(monthly, { duration: 700, trigger: true });

  const phrase = monthly < 2000 ? "Uma boa renda extra já no 1º mês."
    : monthly < 4000 ? "Você já vive de limpeza profissional."
    : monthly < 8000 ? "Uma micro-empresa nas suas mãos."
    : "Hora de montar equipe e escalar.";

  return (
    <section ref={ref} id="calculadora" style={{
      background: "var(--pc-cream)", padding: "100px 0 110px",
      borderTop: "1px solid var(--border-on-cream)",
    }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <div className="eyebrow no-rule" style={{ color: "var(--pc-green-2)", justifyContent: "center", marginBottom: 16 }}>
            Calculadora · seu mercado, seu faturamento
          </div>
          <h2 className="display" style={{
            fontSize: "clamp(32px, 4.2vw, 54px)", lineHeight: 1.05, color: "var(--fg-on-cream-1)", margin: "0 0 14px", letterSpacing: "-0.03em",
            opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(16px)",
            transition: "all 700ms cubic-bezier(.2,.7,.2,1)",
          }}>
            Quanto você pode<br/><span style={{ color: "var(--fg-on-cream-3)" }}>ganhar por mês?</span>
          </h2>
          <p style={{
            font: "var(--body-lg)", color: "var(--fg-on-cream-2)", margin: 0,
            opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(16px)",
            transition: "all 700ms 120ms cubic-bezier(.2,.7,.2,1)",
          }}>
            Escolha um mercado, ajuste 3 variáveis. Tudo na sua frente, sem fórmula escondida.
          </p>
        </div>

        <div style={{ marginBottom: 36, opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(20px)", transition: "all 800ms 240ms cubic-bezier(.2,.7,.2,1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--pc-dark)", color: "var(--pc-green)", fontFamily: "ui-monospace, monospace", fontSize: 11, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>1</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Escolha seu mercado</span>
          </div>
          <div className="cv-markets" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {Object.entries(markets2).map(([id, mc]) => (
              <MarketCard key={id} id={id} m={mc} active={mkt === id} onPick={setMkt} />
            ))}
          </div>
        </div>

        <div style={{ opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(20px)", transition: "all 800ms 360ms cubic-bezier(.2,.7,.2,1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--pc-dark)", color: "var(--pc-green)", fontFamily: "ui-monospace, monospace", fontSize: 11, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>2</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Ajuste as 3 variáveis</span>
          </div>
          <div className="cv-formula">
            <VarCard cfg={m.v0} value={v0} onChange={setV0} />
            <span className="cv-op">×</span>
            <VarCard cfg={m.v1} value={v1} onChange={setV1} />
            <span className="cv-op">×</span>
            <VarCard cfg={m.v2} value={v2} onChange={setV2} />
            <span className="cv-op cv-eq">=</span>
            <div className="cv-result">
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pc-green)", marginBottom: 8, display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pc-green)" }} />
                Faturamento mensal
              </div>
              <div className="display" style={{ fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 600, color: "white", letterSpacing: "-0.03em", lineHeight: 1 }}>
                R$ {animatedMonthly.toLocaleString("pt-BR")}
              </div>
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px dashed var(--border-on-dark)", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", fontSize: 12.5, color: "var(--fg-3)" }}>
                <span><strong style={{ color: "white" }}>R$ {annual.toLocaleString("pt-BR")}</strong> ao ano</span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span><strong style={{ color: "white" }}>{minWages}×</strong> o salário mínimo</span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span><strong style={{ color: "white" }}>{m.volumeLabel(v0, v1)}</strong> /mês</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 32, background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-xl)",
          padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap",
          opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(20px)",
          transition: "all 800ms 500ms cubic-bezier(.2,.7,.2,1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--accent-fill)", color: "var(--pc-green-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="sparkles" size={20} stroke={1.8} />
            </div>
            <div>
              <div className="display" style={{ fontSize: 18, fontWeight: 600, color: "var(--fg-on-cream-1)", letterSpacing: "-0.01em", marginBottom: 3 }}>{phrase}</div>
              <div style={{ fontSize: 13, color: "var(--fg-on-cream-3)" }}>Simulação com base em preços médios. Resultados reais podem variar.</div>
            </div>
          </div>
          <a href={wa(`Olá! Simulei meu faturamento: R$ ${monthly.toLocaleString("pt-BR")}/mês (mercado ${m.label}). Quero começar o treinamento!`)}
            target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flexShrink: 0 }}>
            Quero esse faturamento<Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
      <style>{`
        .cv-formula { display: flex; align-items: stretch; gap: 12px; flex-wrap: nowrap; }
        .cv-op { flex-shrink: 0; font-size: 28px; font-weight: 500; color: var(--fg-on-cream-4); display: flex; align-items: center; justify-content: center; padding: 0 4px; }
        .cv-eq { color: var(--pc-green-2); font-weight: 700; }
        .cv-result { flex: 1.4; min-width: 0; background: linear-gradient(155deg, var(--pc-dark) 0%, var(--pc-darker) 100%); color: white; border-radius: var(--radius-xl); padding: 22px 26px; border: 1px solid var(--border-accent); position: relative; overflow: hidden; }
        .cv-result::before { content: ""; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(58,213,128,0.20) 0%, transparent 70%); pointer-events: none; }
        .cv-result > * { position: relative; }
        @media (max-width: 900px) {
          .cv-markets { grid-template-columns: 1fr !important; }
          .cv-formula { flex-direction: column; align-items: stretch; }
          .cv-op { font-size: 22px; padding: 4px 0; }
        }
      `}</style>
    </section>
  );
}

function CursoIncludes() {
  const items = [
    { icon: "play", title: "5 módulos em vídeo", desc: "3h28min de conteúdo gravado, acessível no celular ou desktop, sem prazo de expiração." },
    { icon: "shield", title: "Certificado de conclusão", desc: "Reconhecido por integradoras e donos de usinas. Comprova sua qualificação no mercado." },
    { icon: "headset", title: "Suporte WhatsApp", desc: "Tire dúvidas com técnicos sêniores da Painel Clean em horário comercial, via chat." },
    { icon: "refresh", title: "Atualizações inclusas", desc: "O material é renovado conforme novos equipamentos e normas. Você recebe sem custo adicional." },
    { icon: "calculator", title: "Templates e scripts", desc: "Proposta comercial, contrato de serviço e scripts de abordagem prontos para editar e usar." },
    { icon: "star", title: "Acesso à comunidade", desc: "Grupo exclusivo de técnicos Painel Clean para troca de experiências, indicações e parcerias." },
  ];
  return (
    <section style={{ background: "var(--pc-darker)", padding: "96px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="eyebrow center" style={{ marginBottom: 16 }}>Tudo incluso</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.06, color: "white", margin: "0 0 16px" }}>
            O que você recebe hoje
          </h2>
          <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", maxWidth: 480, margin: "0 auto" }}>
            Por R$ 39,90, pagamento único.
          </p>
        </div>
        <div className="includes-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 52 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 16, padding: "24px 22px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "var(--radius)", background: "var(--accent-fill)", color: "var(--pc-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={item.icon} size={18} />
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 600, fontSize: 14, marginBottom: 6, lineHeight: 1.3 }}>{item.title}</div>
                <div style={{ color: "var(--fg-3)", fontSize: 13, lineHeight: 1.55 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href={wa("Olá! Quero começar o treinamento Painel Clean agora.")} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16, padding: "18px 36px" }}>
            Garantir acesso por R$ 39,90<Icon name="arrowRight" size={16} />
          </a>
          <div style={{ marginTop: 14, fontSize: 13, color: "var(--fg-4)" }}>Reembolso integral em até 7 dias · Pagamento seguro</div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .includes-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .includes-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function CursoTestimonials() {
  return (
    <section id="depoimentos" style={{ background: "var(--pc-cream)", padding: "96px 0", borderTop: "1px solid var(--border-on-cream)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="eyebrow center" style={{ color: "var(--pc-green-2)", marginBottom: 16 }}>Depoimentos</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.06, color: "var(--fg-on-cream-1)", margin: 0 }}>
            Quem já começou
          </h2>
        </div>
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cursoTestimonials.map((t, i) => (
            <div key={i} style={{ padding: "28px", background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-xl)", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} style={{ color: "#F4B83A", fontSize: 16, lineHeight: 1 }}>★</span>
                ))}
              </div>
              <p style={{ margin: 0, font: "var(--body)", color: "var(--fg-on-cream-1)", lineHeight: 1.65, flex: 1 }}>"{t.text}"</p>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--fg-on-cream-1)" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "var(--fg-on-cream-3)" }}>{t.role} · {t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function CursoCtaFinal() {
  const reduced = usePrefersReducedMotion();
  return (
    <section style={{
      background: "var(--pc-darker)", padding: "120px 0",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid var(--border-on-dark)",
    }}>
      {!reduced && <><div className="cta-blob cta-blob-a" /><div className="cta-blob cta-blob-b" /><div className="cta-blob cta-blob-c" /></>}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(58,213,128,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
        <div className="eyebrow no-rule" style={{ justifyContent: "center", marginBottom: 24 }}>Comece hoje</div>
        <h2 className="display" style={{
          fontSize: "clamp(38px, 5.2vw, 68px)", lineHeight: 1.04,
          margin: "0 auto 24px", maxWidth: 680, letterSpacing: "-0.03em",
          background: "linear-gradient(135deg, #fff 0%, var(--pc-green) 55%, #fff 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: reduced ? "none" : "cta-shine 4s linear infinite",
        }}>
          Seu primeiro cliente<br />pode ser essa semana.
        </h2>
        <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", margin: "0 auto 40px", maxWidth: 520, lineHeight: 1.7 }}>
          Por R$ 39,90 você tem acesso a tudo que precisa para começar: operação, precificação, captação e suporte real. Sem mensalidade, sem prazo.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 28, fontSize: 13, color: "var(--fg-3)" }}>
          {[
            { icon: "shield", label: "Reembolso em 7 dias" },
            { icon: "lock", label: "Pagamento seguro" },
            { icon: "zap", label: "Acesso imediato" },
          ].map(b => (
            <span key={b.label} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-pill)", padding: "6px 14px" }}>
              <Icon name={b.icon} size={13} stroke={1.8} />{b.label}
            </span>
          ))}
        </div>

        <a
          href={wa("Olá! Quero começar o treinamento Painel Clean agora.")}
          target="_blank" rel="noopener noreferrer"
          className="cta-mega"
        >
          <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 10 }}>
            <WhatsBrand size={20} />
            Quero começar agora — R$ 39,90
          </span>
        </a>

        <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13, color: "var(--fg-4)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--pc-green)", display: "inline-block", boxShadow: "0 0 0 0 rgba(58,213,128,0.5)", animation: reduced ? "none" : "cta-mega-pulse 2.4s ease-in-out infinite" }} />
          Vagas abertas agora
        </div>
      </div>
      <style>{`
        @keyframes cta-drift-a {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(60px,-40px) scale(1.15); }
          66% { transform: translate(-30px,50px) scale(0.9); }
        }
        @keyframes cta-drift-b {
          0%,100% { transform: translate(0,0) scale(1); }
          40% { transform: translate(-80px,30px) scale(1.2); }
          70% { transform: translate(40px,-60px) scale(0.85); }
        }
        @keyframes cta-drift-c {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(50px,70px) scale(1.1); }
        }
        @keyframes cta-shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes cta-mega-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(58,213,128,0.5); }
          50% { box-shadow: 0 0 0 12px rgba(58,213,128,0); }
        }
        .cta-blob {
          position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; opacity: 0.18;
        }
        .cta-blob-a {
          width: 480px; height: 480px; background: var(--pc-green);
          top: -120px; left: -80px;
          animation: cta-drift-a 14s ease-in-out infinite;
        }
        .cta-blob-b {
          width: 360px; height: 360px; background: var(--pc-green);
          bottom: -100px; right: -60px;
          animation: cta-drift-b 16s ease-in-out infinite;
        }
        .cta-blob-c {
          width: 300px; height: 300px; background: #fff;
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          animation: cta-drift-c 12s ease-in-out infinite;
        }
        .cta-mega {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 20px 40px; border-radius: var(--radius-pill);
          background: var(--pc-green); color: var(--pc-dark);
          font-size: 18px; font-weight: 700; text-decoration: none; letter-spacing: -0.01em;
          position: relative; overflow: hidden;
          animation: cta-mega-pulse 2.4s ease-in-out infinite;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .cta-mega:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 12px 32px rgba(58,213,128,0.35); }
        @media (prefers-reduced-motion: reduce) { .cta-blob, .cta-mega { animation: none !important; } }
      `}</style>
    </section>
  );
}

// ===== ROOT =====
function CursoApp() {
  return (
    <div>
      <CursoNav />
      <CursoHero />
      <CursoModules />
      <CursoOutcomes />
      <CursoForWho />
      <CursoCalcDivider />
      <CursoCalculator />
      <CursoIncludes />
      <CursoTestimonials />
      <CursoCtaFinal />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CursoApp />);
