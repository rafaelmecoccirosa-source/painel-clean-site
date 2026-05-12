// ===== CURSO PAGE — Treinamento Painel Clean =====

const cursoModules = [
  { n: "01", t: "Operação do equipamento", d: "Setup, montagem e manutenção das escovas G5/D5/S5. Boas práticas para preservar o motor brushless e maximizar a vida útil.", h: "42min" },
  { n: "02", t: "Segurança em altura (NR-35)", d: "EPIs obrigatórios, ancoragem e procedimentos para trabalho seguro em telhados residenciais e usinas de grande porte.", h: "56min" },
  { n: "03", t: "Precificação e propostas", d: "Como precificar por painel, por kWp e por usina. Templates de proposta e contrato prontos para usar.", h: "38min" },
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
              5 módulos práticos para operar equipamentos brushless, precificar corretamente, captar clientes e criar uma renda previsível com limpeza de painéis solares.
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

function CursoCalculator() {
  const [usinas, setUsinas] = useState(8);
  const [placas, setPlacas] = useState(20);
  const [preco, setPreco] = useState(22);

  const mensal = usinas * placas * preco;
  const anual = mensal * 12;

  const frase = mensal < 2000
    ? "Uma boa renda extra já no primeiro mês."
    : mensal < 4000
    ? "Você já tem base para viver de limpeza solar."
    : mensal < 8000
    ? "Uma micro-empresa nas suas mãos."
    : "Hora de montar equipe e escalar.";

  return (
    <section id="calculadora" style={{ background: "var(--pc-cream)", padding: "96px 0", borderTop: "1px solid var(--border-on-cream)" }}>
      <div className="container">
        <div className="calc-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: 56, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--pc-green-2)", marginBottom: 18 }}>Calculadora de faturamento</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 50px)", lineHeight: 1.06, color: "var(--fg-on-cream-1)", margin: "0 0 20px" }}>
              Quanto você pode<br /><span style={{ color: "var(--fg-on-cream-3)" }}>ganhar por mês?</span>
            </h2>
            <p style={{ font: "var(--body-lg)", color: "var(--fg-on-cream-2)", margin: "0 0 36px", maxWidth: 440 }}>
              Ajuste os parâmetros e veja uma estimativa do seu faturamento mensal como técnico de limpeza solar.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 28, padding: "28px 28px", background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-xl)" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Usinas por mês</label>
                  <span className="display" style={{ fontSize: 28, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.02em" }}>{usinas}</span>
                </div>
                <input type="range" min="1" max="30" step="1" value={usinas} onChange={e => setUsinas(+e.target.value)}
                  style={{ width: "100%", accentColor: "var(--pc-green-2)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-on-cream-3)", marginTop: 4 }}>
                  <span>1</span><span>30 usinas</span>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Placas por usina</label>
                  <span className="display" style={{ fontSize: 28, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.02em" }}>{placas}</span>
                </div>
                <input type="range" min="6" max="100" step="2" value={placas} onChange={e => setPlacas(+e.target.value)}
                  style={{ width: "100%", accentColor: "var(--pc-green-2)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-on-cream-3)", marginTop: 4 }}>
                  <span>6</span><span>residencial · comercial · usina</span><span>100</span>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-on-cream-2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Preço por placa</label>
                  <span className="display" style={{ fontSize: 28, fontWeight: 600, color: "var(--pc-dark)", letterSpacing: "-0.02em" }}>R$ {preco}</span>
                </div>
                <input type="range" min="15" max="30" step="1" value={preco} onChange={e => setPreco(+e.target.value)}
                  style={{ width: "100%", accentColor: "var(--pc-green-2)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-on-cream-3)", marginTop: 4 }}>
                  <span>R$ 15</span><span>R$ 30</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "linear-gradient(155deg, var(--pc-dark) 0%, var(--pc-darker) 100%)", color: "white", borderRadius: "var(--radius-2xl)", padding: "44px 40px", position: "relative", overflow: "hidden", border: "1px solid var(--border-accent)" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 240, height: 240, background: "radial-gradient(circle, rgba(58,213,128,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div className="eyebrow no-rule" style={{ color: "var(--pc-green)", marginBottom: 24 }}>Sua estimativa</div>
              <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid var(--border-on-dark)" }}>
                <div style={{ font: "var(--body-sm)", color: "var(--fg-3)", marginBottom: 6 }}>Total de placas/mês</div>
                <div className="display" style={{ fontSize: 28, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>{(usinas * placas).toLocaleString("pt-BR")} placas</div>
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
              <a href={wa(`Olá! Simulei meu faturamento: R$ ${mensal.toLocaleString("pt-BR")}/mês atendendo ${usinas} usinas. Quero começar o treinamento!`)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
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
    <section style={{ background: "var(--pc-cream)", padding: "96px 0", borderTop: "1px solid var(--border-on-cream)" }}>
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
                  <Icon key={j} name="star" size={16} stroke={0} style={{ fill: "#F4B83A" }} />
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
      <Nav />
      <CursoHero />
      <CursoModules />
      <CursoForWho />
      <CursoCalculator />
      <CursoIncludes />
      <CursoTestimonials />
      <CursoCtaFinal />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CursoApp />);
