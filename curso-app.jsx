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
    <section style={{ background: "var(--pc-darker)", color: "white", paddingTop: 76, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 5% 40%, rgba(58,213,128,.12), transparent 60%), radial-gradient(ellipse 50% 50% at 95% 10%, rgba(58,213,128,.07), transparent 60%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", padding: "80px var(--gutter) 96px" }}>
        <div className="curso-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,0.72fr)", gap: 64, alignItems: "center" }}>
          <div style={{ animation: "fadeUp 700ms ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 14px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill-soft)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", font: "var(--eyebrow)", textTransform: "uppercase", letterSpacing: "var(--tracking-eyebrow)", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pc-green)", animation: "pulseDot 1.6s infinite" }} />
              Treinamento online · acesso imediato
            </div>
            <h1 className="display" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 24px" }}>
              <span style={{ display: "block", color: "white" }}>Do zero ao</span>
              <span style={{ display: "block", color: "white" }}>primeiro cliente</span>
              <span style={{ display: "block", color: "var(--pc-green)" }}>em uma semana.</span>
            </h1>
            <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", maxWidth: 540, margin: "0 0 40px", lineHeight: 1.7 }}>
              5 módulos práticos para operar equipamentos brushless, precificar corretamente, captar clientes e criar uma renda previsível com limpeza de superfícies profissional.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginBottom: 44 }}>
              <a href={wa("Olá! Quero começar o treinamento Painel Clean agora.")} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16, padding: "18px 30px" }}>
                Quero começar agora<Icon name="arrowRight" size={16} />
              </a>
              <a href="#modulos" className="btn-ghost-dark">Ver os módulos</a>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap", paddingTop: 28, borderTop: "1px solid var(--border-on-dark)" }}>
              {[{ k: "212", v: "alunos ativos" }, { k: "4.9★", v: "avaliação média" }, { k: "3h28", v: "de conteúdo" }].map((m, i) => (
                <div key={i}>
                  <div className="display" style={{ fontSize: 22, fontWeight: 600, color: "white", lineHeight: 1, marginBottom: 5, letterSpacing: "-0.02em" }}>{m.k}</div>
                  <div style={{ font: "var(--body-xs)", color: "var(--fg-4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "linear-gradient(155deg, var(--pc-mid) 0%, var(--pc-dark) 100%)", border: "1px solid var(--border-accent)", borderRadius: "var(--radius-2xl)", padding: "40px 36px", position: "relative", overflow: "hidden", boxShadow: "0 0 60px rgba(58,213,128,0.14)", animation: "fadeUp 900ms 180ms ease both" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 240, height: 240, background: "radial-gradient(circle, rgba(58,213,128,0.18) 0%, transparent 70%)" }} />
            <div style={{ position: "relative" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", font: "var(--label-sm)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24 }}>
                <Icon name="bolt" size={12} stroke={2} />Oferta de lançamento
              </div>
              <div style={{ color: "var(--fg-3)", fontSize: 14, marginBottom: 4 }}>de <span style={{ textDecoration: "line-through" }}>R$ 197</span></div>
              <div className="display" style={{ fontSize: 64, fontWeight: 600, color: "var(--pc-green)", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 4 }}>R$ 39,90</div>
              <div style={{ color: "var(--fg-3)", fontSize: 13, marginBottom: 28 }}>pagamento único · acesso vitalício</div>
              <a href={wa("Olá! Quero começar o treinamento Painel Clean agora.")} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: 16, fontSize: 15 }}>
                Garantir minha vaga<Icon name="arrowRight" size={16} />
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, fontSize: 12, color: "var(--fg-4)" }}>
                <span>Pagamento seguro</span><span>·</span><span>Reembolso em 7 dias</span>
              </div>
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--border-on-dark)", display: "flex", flexDirection: "column", gap: 12 }}>
                {["Acesso vitalício ao conteúdo", "Certificado de conclusão", "Suporte técnico via WhatsApp", "Atualizações gratuitas inclusas"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--fg-2)" }}>
                    <span style={{ flexShrink: 0, color: "var(--pc-green)" }}><Icon name="check" size={16} /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 960px) { .curso-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
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

function CursoOutcomes() {
  const outcomes = [
    { n: "01", text: "Operar o equipamento com segurança e eficiência" },
    { n: "02", text: "Precificar e fechar contratos recorrentes" },
    { n: "03", text: "Captar os primeiros clientes pelo WhatsApp" },
    { n: "04", text: "Emitir proposta e nota fiscal profissional" },
  ];
  return (
    <section style={{ background: "var(--pc-green)", padding: "80px 0" }}>
      <div className="container">
        <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: 1.08, color: "var(--pc-dark)", margin: "0 0 52px", maxWidth: 640 }}>
          Em 30 dias você sai daqui pronto para:
        </h2>
        <div className="outcomes-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 56 }}>
          {outcomes.map((o, i) => (
            <div key={i} style={{ background: "rgba(12,40,31,0.12)", borderRadius: "var(--radius-xl)", padding: "28px 32px", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "var(--pc-dark)", opacity: 0.6, paddingTop: 4, flexShrink: 0 }}>{o.n}</span>
              <span className="display" style={{ fontSize: "clamp(16px, 1.6vw, 20px)", fontWeight: 600, color: "var(--pc-dark)", lineHeight: 1.25 }}>{o.text}</span>
            </div>
          ))}
        </div>
        <div className="outcomes-stats" style={{ display: "flex", gap: 0, background: "rgba(12,40,31,0.12)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
          {[{ k: "212", v: "alunos formados" }, { k: "4,9★", v: "avaliação" }, { k: "3h28", v: "de conteúdo" }].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: "24px 28px", borderLeft: i > 0 ? "1px solid rgba(12,40,31,0.15)" : "none", textAlign: "center" }}>
              <div className="display" style={{ fontSize: 32, fontWeight: 700, color: "var(--pc-dark)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6 }}>{s.k}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--pc-dark)", opacity: 0.65, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 680px) { .outcomes-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px) { .outcomes-stats { flex-direction: column !important; } .outcomes-stats > div { border-left: none !important; border-top: 1px solid rgba(12,40,31,0.15) !important; } }
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

function CursoCalculator() {
  const mkts = {
    solar: { label: "Solar", icon: "sun",       l0: "Clientes/usinas por mês", max0: 30, l1: "Painéis por usina",   min1: 6,   max1: 100,  step1: 2,  l2: "Preço por painel",  min2: 15, max2: 30,  d0: 8, d1: 20,  d2: 22, unit: (c,u) => `${(c*u).toLocaleString("pt-BR")} painéis` },
    agro:  { label: "Agro",  icon: "sparkles",  l0: "Clientes por mês",        max0: 20, l1: "m² por estufa",      min1: 100, max1: 2000, step1: 50, l2: "Preço por m²",      min2: 3,  max2: 10,  d0: 5, d1: 400, d2: 5,  unit: (c,u) => `${(c*u).toLocaleString("pt-BR")} m²` },
    urban: { label: "Urban", icon: "building",  l0: "Serviços por mês",        max0: 15, l1: "m² por serviço",     min1: 20,  max1: 500,  step1: 10, l2: "Preço por m²",      min2: 5,  max2: 15,  d0: 4, d1: 100, d2: 8,  unit: (c,u) => `${(c*u).toLocaleString("pt-BR")} m²` },
  };
  const [mkt, setMkt] = useState("solar");
  const [c0, setC0] = useState(8);
  const [c1, setC1] = useState(20);
  const [c2, setC2] = useState(22);
  const m = mkts[mkt];

  const handleMkt = (key) => { setMkt(key); setC0(mkts[key].d0); setC1(mkts[key].d1); setC2(mkts[key].d2); };

  const mensal = c0 * c1 * c2;
  const anual = mensal * 12;

  const frase = mensal < 2000
    ? "Uma boa renda extra já no primeiro mês."
    : mensal < 4000
    ? "Você já tem base para viver de limpeza profissional."
    : mensal < 8000
    ? "Uma micro-empresa nas suas mãos."
    : "Hora de montar equipe e escalar.";

  return (
    <section id="calculadora" style={{ background: "var(--pc-cream)", padding: "96px 0", borderTop: "1px solid var(--border-on-cream)" }}>
      <div className="container">
        {/* Market toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-flex", padding: 4, background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-pill)", gap: 4 }}>
            {Object.entries(mkts).map(([key, v]) => (
              <button key={key} onClick={() => handleMkt(key)}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: "var(--radius-pill)", background: mkt === key ? "var(--pc-dark)" : "transparent", color: mkt === key ? "white" : "var(--fg-on-cream-3)", fontWeight: 600, fontSize: 14, transition: "all 200ms" }}>
                <Icon name={v.icon} size={14} stroke={2} />{v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="calc-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: 56, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--pc-green-2)", marginBottom: 18 }}>Calculadora de faturamento · {m.label}</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 50px)", lineHeight: 1.06, color: "var(--fg-on-cream-1)", margin: "0 0 20px" }}>
              Quanto você pode<br /><span style={{ color: "var(--fg-on-cream-3)" }}>ganhar por mês?</span>
            </h2>
            <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", margin: "0 0 36px", maxWidth: 440 }}>
              Ajuste os parâmetros para o mercado <strong>{m.label}</strong> e veja uma estimativa do seu faturamento mensal.
            </p>
            <div key={mkt} style={{ display: "flex", flexDirection: "column", gap: 28, padding: "28px 28px", background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-xl)" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.l0}</label>
                  <span className="display" style={{ fontSize: 28, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.02em" }}>{c0}</span>
                </div>
                <input type="range" min="1" max={m.max0} step="1" value={c0} onChange={e => setC0(+e.target.value)}
                  style={{ width: "100%", accentColor: "var(--pc-green-2)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-on-cream-3)", marginTop: 4 }}>
                  <span>1</span><span>{m.max0}</span>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.l1}</label>
                  <span className="display" style={{ fontSize: 28, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.02em" }}>{c1}</span>
                </div>
                <input type="range" min={m.min1} max={m.max1} step={m.step1} value={c1} onChange={e => setC1(+e.target.value)}
                  style={{ width: "100%", accentColor: "var(--pc-green-2)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-on-cream-3)", marginTop: 4 }}>
                  <span>{m.min1}</span><span>{m.max1}</span>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.l2}</label>
                  <span className="display" style={{ fontSize: 28, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.02em" }}>R$ {c2}</span>
                </div>
                <input type="range" min={m.min2} max={m.max2} step="1" value={c2} onChange={e => setC2(+e.target.value)}
                  style={{ width: "100%", accentColor: "var(--pc-green-2)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-on-cream-3)", marginTop: 4 }}>
                  <span>R$ {m.min2}</span><span>R$ {m.max2}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "linear-gradient(155deg, var(--pc-dark) 0%, var(--pc-darker) 100%)", color: "white", borderRadius: "var(--radius-2xl)", padding: "44px 40px", position: "relative", overflow: "hidden", border: "1px solid var(--border-accent)" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 240, height: 240, background: "radial-gradient(circle, rgba(58,213,128,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div className="eyebrow no-rule" style={{ color: "var(--pc-green)", marginBottom: 24 }}>Sua estimativa · {m.label}</div>
              <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid var(--border-on-dark)" }}>
                <div style={{ font: "var(--body-sm)", color: "var(--fg-3)", marginBottom: 6 }}>Volume mensal</div>
                <div className="display" style={{ fontSize: 28, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>{m.unit(c0, c1)}</div>
              </div>
              <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid var(--border-on-dark)" }}>
                <div style={{ font: "var(--body-sm)", color: "var(--fg-3)", marginBottom: 6 }}>Faturamento mensal estimado</div>
                <div className="display" key={`m-${mensal}`} style={{ fontSize: 44, fontWeight: 600, color: "var(--pc-green)", letterSpacing: "-0.03em", lineHeight: 1, animation: "countUp 320ms var(--ease-out)" }}>R$ {mensal.toLocaleString("pt-BR")}</div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <div style={{ font: "var(--body-sm)", color: "var(--fg-3)", marginBottom: 6 }}>Faturamento anual</div>
                <div className="display" key={`a-${anual}`} style={{ fontSize: 28, fontWeight: 600, color: "white", letterSpacing: "-0.02em", animation: "countUp 320ms var(--ease-out)" }}>R$ {anual.toLocaleString("pt-BR")}</div>
              </div>
              <div style={{ padding: "16px 20px", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", borderRadius: "var(--radius-md)", marginBottom: 28 }}>
                <p style={{ margin: 0, color: "var(--pc-green)", fontSize: 14, fontWeight: 600, lineHeight: 1.5 }}>{frase}</p>
              </div>
              <a href={wa(`Olá! Simulei meu faturamento: R$ ${mensal.toLocaleString("pt-BR")}/mês (mercado ${m.label}). Quero começar o treinamento!`)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Quero esse faturamento<Icon name="arrowRight" size={16} />
              </a>
              <div style={{ marginTop: 16, fontSize: 11.5, color: "var(--fg-4)", textAlign: "center" }}>
                Simulação com base em preços médios do mercado. Resultados reais podem variar.
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 960px) { .calc-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
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
  return (
    <section style={{ background: "var(--pc-darker)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(58,213,128,0.12), transparent 70%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", textAlign: "center", maxWidth: 680 }}>
        <div className="eyebrow center" style={{ marginBottom: 20 }}>Comece hoje</div>
        <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.04, color: "white", margin: "0 0 20px", letterSpacing: "-0.03em" }}>
          Seu primeiro cliente<br />pode ser essa semana.
        </h2>
        <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", margin: "0 0 40px", lineHeight: 1.7 }}>
          Por R$ 39,90 você tem acesso a tudo que precisa para começar: equipamento, precificação, captação e suporte real. Sem mensalidade, sem prazo.
        </p>
        <a href={wa("Olá! Quero começar o treinamento Painel Clean agora.")} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 17, padding: "20px 40px" }}>
          Quero começar agora por R$ 39,90<Icon name="arrowRight" size={18} />
        </a>
        <div style={{ marginTop: 20, fontSize: 13, color: "var(--fg-4)" }}>
          Acesso imediato · Reembolso em 7 dias · Pagamento via WhatsApp
        </div>
      </div>
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
