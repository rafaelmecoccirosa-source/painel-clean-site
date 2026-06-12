// ===== VITRINE DE PRODUTOS =====

const TOTAL_PRODUCTS = 3;

const PRODUCTS = [
  {
    id: 'pro',
    name: 'Escova Dupla PRO',
    eyebrow: 'CARRO-CHEFE · MAIS VENDIDA',
    tagline: 'Duas cabeças. O dobro de área por passada.',
    blurb: 'Performance máxima para usinas grandes e telhados planos. Motor brushless duplo, controle por dois botões independentes, conexão de água e energia em um só ponto.',
    speed: 260, rpm: 350, cable: '7,5 m',
    badge: 'Mais vendida',
    gallery: [
      { id: 'main',     label: 'Vista geral', img: 'public/images/dnf-2489.webp' },
      { id: 'angle',    label: 'Ângulo',      img: 'public/images/dnf-2500.webp' },
      { id: 'full',     label: 'Conjunto',    img: 'public/images/dnf-2481.webp' },
      { id: 'kit',      label: 'Kit',         img: 'public/images/dnf-2477.webp' },
    ],
    colors: [
      { name: 'Amarela', sku: 'ZCP-0275-D5',  swatch: '#F5B600' },
      { name: 'Branca',  sku: 'ZCP-0275-D5W', swatch: '#F2F2EC' },
    ],
    detailHref: '/escova-dupla-d5',
    bgTone: 'cream',
  },
  {
    id: 's5',
    name: 'Escova Solo S5',
    eyebrow: 'PARA DIFÍCIL ACESSO',
    tagline: 'Leve. Ágil. Em qualquer telhado.',
    blurb: 'Para micro e pequenas usinas, telhados inclinados e operações solo. Mesmo motor brushless da PRO, em um chassi compacto.',
    speed: 160, rpm: 350, cable: '7,5 m',
    badge: null,
    gallery: [
      { id: 'cerdas', label: 'Cerdas',      img: 'public/images/dnf-2445.webp' },
      { id: 'main',   label: 'Vista geral', img: 'public/images/dnf-2432.webp' },
      { id: 'detail', label: 'Detalhe',     img: 'public/images/dnf-2434.webp' },
      { id: 'kit',    label: 'Kit',         img: 'public/images/dnf-2463.webp' },
    ],
    colors: [
      { name: 'Amarela', sku: 'ZCP-0175-S5',  swatch: '#F5B600' },
      { name: 'Branca',  sku: 'ZCP-0175-S5W', swatch: '#F2F2EC' },
    ],
    detailHref: '/escova-solo-s5',
    bgTone: 'warm',
  },
  {
    id: 'g5',
    name: 'Escova Rotativa G5',
    eyebrow: 'COBERTURA EM ARCO',
    tagline: 'Rolo profissional. Sem áreas mortas.',
    blurb: 'Cerdas longas em rolo, cobertura contínua em arco. Para usinas em solo e configurações onde a dupla não cabe.',
    speed: 200, rpm: 350, cable: '7,5 m',
    badge: null,
    gallery: [
      { id: 'frente', label: 'Frente',      img: 'public/images/dnf-2513.webp' },
      { id: 'main',   label: 'Vista geral', img: 'public/images/dnf-2507.webp' },
      { id: 'detail', label: 'Detalhe',     img: 'public/images/dnf-2508.webp' },
      { id: 'kit',    label: 'Kit',         img: 'public/images/dnf-2468.webp' },
    ],
    colors: [
      { name: 'Linha pro', sku: 'ZCP-0175-G5', swatch: '#1a1a1a' },
    ],
    detailHref: '/escova-rotativa-g5',
    bgTone: 'cream',
  },
];

const ACCESSORIES = [
  {
    id: 'cerdas',
    name: 'Cerdas de reposição',
    subtitle: 'Refil profissional · alta densidade',
    desc: 'Troca em minutos com 4 parafusos. Cerdas que não riscam o vidro temperado. Pacotes com 2 ou 4 unidades.',
    tag: 'Refil',
    sku: 'ZCP-APPG51 · APPD51 · APPS51',
  },
  {
    id: 'extensor',
    name: 'Cabo extensor',
    subtitle: '3 tamanhos · 3,5 m · 5,5 m · 7,5 m',
    desc: 'Tubo telescópico em alumínio reforçado. Travamento em qualquer comprimento, engate rápido para acoplar na escova.',
    tag: '3 tamanhos',
    sku: 'ZCP-APPA01',
  },
  {
    id: 'mangueira',
    name: 'Mangueira 35 m',
    subtitle: 'Reforçada · resistente a dobras',
    desc: 'Engate rápido nas duas pontas. Conecta direto na bomba e na entrada da escova — sem adaptadores nem ferramentas.',
    tag: 'Reposição',
  },
  {
    id: 'bomba',
    name: 'Bomba hidráulica',
    subtitle: 'Mesma do kit original',
    desc: 'Proteção contra falta d’água, acionamento por controle remoto. Já sai testada de fábrica, pronta pra trocar e voltar a operar.',
    tag: 'Reposição',
  },
  {
    id: 'caixa',
    name: 'Caixa de armazenamento',
    subtitle: 'Transporte e estoque',
    desc: 'Compartimentos pra escova, bomba e cabos. Cabe no porta-malas. Estrutura reforçada pra empilhar e transportar.',
    tag: 'Acessório',
  },
  {
    id: 'bateria',
    name: 'Sistema de bateria',
    subtitle: 'Operação sem rede elétrica',
    desc: 'Bateria recarregável + carregador bivolt. Autonomia pra uma jornada completa de limpeza. Em desenvolvimento — lançamento 2026.',
    tag: 'Em breve',
  },
];

const KIT_PINS = [
  { num: '01', x: 11,  y: 55, anchor: 'tr', label: 'Caixa de armazenamento',    hint: 'Transporte e estoque do kit' },
  { num: '02', x: 38,  y: 38, anchor: 'tl', label: '2 cabeças brushless',        hint: 'Motor 350 RPM · cerdas amarelas' },
  { num: '03', x: 37,  y: 80, anchor: 'bl', label: 'Cabo extensor + cabeamento', hint: 'Telescópico até 7,5 m' },
  { num: '04', x: 58,  y: 80, anchor: 'br', label: 'Mangueira reforçada 35 m',   hint: 'Engate rápido · resistente a dobras' },
  { num: '05', x: 84,  y: 32, anchor: 'tl', label: 'Bomba + controle remoto',    hint: "Proteção falta d’água · engates verdes" },
  { num: '06', x: 94,  y: 60, anchor: 'bl', label: 'Fonte de energia',           hint: 'Bivolt · plug NBR 14136' },
];

// ── Hero ─────────────────────────────────────────────────────
function VHero() {
  return (
    <section className="vh-hero">
      <div className="vh-hero-grid">
        <div className="vh-hero-text">
          <p className="vh-eyebrow">LINHA PROFISSIONAL · 2026</p>
          <h1 className="vh-title">
            Escovas brushless<br />
            <span className="vh-accent">para painéis solares.</span>
          </h1>
          <p className="vh-lead">
            Três modelos. Uma engenharia.<br />
            Motor de 350 RPM, água como único insumo, suporte no Brasil.
          </p>
          <div className="vh-scroll-cue">
            <span>Conheça a linha</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
              <path d="M12 4v16M5 13l7 7 7-7" />
            </svg>
          </div>
        </div>
        <div className="vh-stage" aria-hidden="true">
          <div className="vh-stage-tag">FEITO POR QUEM USA</div>
          <img src="public/images/dnf-2612.webp" alt="Fundador com as escovas Painel Clean" />
        </div>
      </div>
      <div className="vh-stats">
        <div><strong>3</strong><span>modelos</span></div>
        <div><strong>260/h</strong><span>velocidade máx.</span></div>
        <div><strong>350</strong><span>RPM brushless</span></div>
        <div><strong>0</strong><span>químicos</span></div>
      </div>
    </section>
  );
}

// ── Color picker ──────────────────────────────────────────────
function ColorPicker({ colors, value, onChange }) {
  if (colors.length <= 1) return null;
  return (
    <div className="vp-colors">
      <div className="vp-colors-meta">
        <span className="vp-colors-label">COR</span>
        <strong className="vp-colors-value">{value.name}</strong>
      </div>
      <div className="vp-swatches">
        {colors.map(c => (
          <button
            key={c.name}
            className={`vp-swatch${value.name === c.name ? ' is-on' : ''}`}
            style={{ background: c.swatch }}
            aria-label={c.name}
            onClick={() => onChange(c)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

// ── Product showcase section ──────────────────────────────────
function ShowcaseSection({ p, index }) {
  const [color, setColor] = useState(p.colors[0]);
  const [shot, setShot]   = useState(p.gallery[0]);
  const flip = index % 2 === 1;
  const hasGallery = p.gallery.length > 1;
  const bg = p.bgTone === 'warm'
    ? '#F7F0D6'
    : 'var(--pc-cream)';

  return (
    <section
      id={`prod-${p.id}`}
      className={`vp-section${flip ? ' vp-flip' : ''}`}
      style={{ background: bg }}
    >
      <div className="vp-section-inner">
        {/* Media */}
        <div className="vp-section-media">
          <div className="vp-stage">
            {p.badge && <div className="vp-stage-badge">{p.badge}</div>}
            <img src={shot.img} alt={p.name} key={shot.id} />
          </div>
          {hasGallery && (
            <div className="vp-thumbs">
              {p.gallery.map(g => (
                <button
                  key={g.id}
                  type="button"
                  className={`vp-thumb${shot.id === g.id ? ' is-on' : ''}`}
                  onClick={() => setShot(g)}
                  aria-label={g.label}
                >
                  <img src={g.img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Text */}
        <div className="vp-section-text">
          <div className="vp-index">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span className="vp-index-sep" />
            <span>{String(TOTAL_PRODUCTS).padStart(2, '0')}</span>
          </div>
          <p className="vp-eyebrow">{p.eyebrow}</p>
          <h2 className="vp-name">{p.name}</h2>
          <p className="vp-tagline">{p.tagline}</p>
          <p className="vp-blurb">{p.blurb}</p>

          <div className="vp-specs">
            <div className="vp-spec">
              <strong>{p.speed}<span>/h</span></strong>
              <span className="vp-spec-label">painéis</span>
            </div>
            <div className="vp-spec">
              <strong>{p.rpm}</strong>
              <span className="vp-spec-label">RPM brushless</span>
            </div>
            <div className="vp-spec">
              <strong>{p.cable}</strong>
              <span className="vp-spec-label">cabo</span>
            </div>
          </div>

          <ColorPicker colors={p.colors} value={color} onChange={setColor} />

          <div className="vp-sku">SKU · {color.sku}</div>

          <div className="vp-actions">
            <a className="vp-btn-primary" href={p.detailHref}>
              Ver detalhes
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a className="vp-ghost-link"
              href={wa('Olá! Quero pedir um orçamento da ' + p.name + ' (' + color.name + ').')}
              target="_blank" rel="noreferrer">
              Pedir orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Kit section ───────────────────────────────────────────────
function KitSection() {
  return (
    <section id="kit" className="vk-kit">
      <div className="vk-inner">
        <div className="vk-head">
          <p className="vk-eyebrow">O QUE VEM NA CAIXA</p>
          <h2 className="vk-title">
            Mais que uma escova.<br />
            <span className="vk-accent">Um sistema completo.</span>
          </h2>
          <p className="vk-lead">
            A diferença Painel Clean não está só no motor. Cada peça do kit foi pensada
            para a operação não parar — e para ser reposta no Brasil.
          </p>
        </div>

        <div className="vk-stage">
          <img src="public/images/pro-kit-16-9.webp" alt="Kit completo Painel Clean: caixa, escovas, bomba, mangueira, cabos e fonte" />
          <div className="vk-stage-meta">
            <span>KIT COMPLETO</span>
            <span>D5 · DUPLA PRO</span>
          </div>
          {KIT_PINS.map(pin => (
            <div
              key={pin.num}
              className={`vk-pin vk-pin-${pin.anchor}`}
              style={{ left: pin.x + '%', top: pin.y + '%' }}
            >
              <span className="vk-pin-dot" aria-hidden="true" />
              <div className="vk-pin-card">
                <span className="vk-pin-num">{pin.num}</span>
                <div>
                  <div className="vk-pin-label">{pin.label}</div>
                  <div className="vk-pin-hint">{pin.hint}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section nav (scroll-spy dots) ─────────────────────────────
function SectionNav() {
  const [active, setActive] = useState(0);
  const [pastHero, setPastHero] = useState(false);
  const items = [
    { id: 'top',        label: 'Linha' },
    { id: 'prod-pro',   label: 'Dupla PRO' },
    { id: 'kit',        label: 'Kit completo' },
    { id: 'prod-s5',    label: 'Solo S5' },
    { id: 'prod-g5',    label: 'Rotativa G5' },
    { id: 'acessorios', label: 'Acessórios' },
  ];

  useEffect(() => {
    const handler = () => {
      let curr = 0;
      const fold = window.innerHeight * 0.4;
      items.forEach((it, i) => {
        const el = it.id === 'top' ? null : document.getElementById(it.id);
        const top = it.id === 'top' ? 0 : (el ? el.getBoundingClientRect().top : 999);
        if (top < fold) curr = i;
      });
      setActive(curr);
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const goTo = (id) => {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`vsn-nav${pastHero ? ' is-visible' : ''}`} aria-label="Navegação por seção">
      {items.map((it, i) => (
        <button
          key={it.id}
          className={`vsn-dot${active === i ? ' is-on' : ''}`}
          onClick={() => goTo(it.id)}
          aria-label={it.label}
        >
          <span className="vsn-line" />
          <span className="vsn-label">{it.label}</span>
        </button>
      ))}
    </nav>
  );
}

// ── Accessory glyph SVGs ──────────────────────────────────────
function AccGlyph({ id }) {
  const s = 'rgba(58,213,128,.75)';
  const sw = '1.4';
  switch (id) {
    case 'cerdas': return (
      <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
        <circle cx="50" cy="50" r="22" />
        <circle cx="50" cy="50" r="6" fill={s} />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          return <line key={i} x1={50+Math.cos(a)*22} y1={50+Math.sin(a)*22} x2={50+Math.cos(a)*42} y2={50+Math.sin(a)*42} strokeLinecap="round" />;
        })}
      </svg>
    );
    case 'mangueira': return (
      <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
        <path d="M12 28Q32 8 50 28T88 28"/>
        <path d="M12 50Q32 30 50 50T88 50"/>
        <path d="M12 72Q32 52 50 72T88 72"/>
      </svg>
    );
    case 'bomba': return (
      <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
        <rect x="20" y="34" width="48" height="36" rx="3"/>
        <circle cx="44" cy="52" r="9"/>
        <path d="M68 40H88M68 60H88"/>
        <path d="M28 34V20H60V34"/>
      </svg>
    );
    case 'extensor': return (
      <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
        <rect x="8" y="46" width="84" height="8" rx="2"/>
        <rect x="22" y="42" width="3" height="16"/>
        <rect x="40" y="42" width="3" height="16"/>
        <rect x="58" y="42" width="3" height="16"/>
        <rect x="76" y="42" width="3" height="16"/>
      </svg>
    );
    case 'caixa': return (
      <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
        <path d="M16 38L50 22L84 38L84 76L50 92L16 76Z"/>
        <path d="M16 38L50 54L84 38"/>
        <path d="M50 54V92"/>
      </svg>
    );
    case 'bateria': return (
      <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
        <rect x="16" y="32" width="60" height="36" rx="3"/>
        <rect x="76" y="42" width="6" height="16" rx="1"/>
        <path d="M28 50H42M36 44V56"/>
        <path d="M54 50H68"/>
      </svg>
    );
    default: return null;
  }
}

// ── Accessories section ───────────────────────────────────────
function AccessoriesSection() {
  return (
    <section id="acessorios" className="va-section">
      <div className="va-inner">
        <div className="va-head">
          <p className="va-eyebrow">VENDIDOS SEPARADAMENTE</p>
          <h2 className="va-title">Acessórios e reposições.</h2>
          <p className="va-lead">Tudo o que sua operação precisa pra não parar. Peças no Brasil, a pronta entrega.</p>
        </div>
        <div className="va-grid">
          {ACCESSORIES.map(a => (
            <a key={a.id} className="va-card"
              href={wa('Olá! Quero saber sobre: ' + a.name)}
              target="_blank" rel="noreferrer">
              <div className="va-tag">{a.tag}</div>
              <div className="va-thumb">
                <AccGlyph id={a.id} />
              </div>
              <div className="va-body">
                <div className="va-name">{a.name}</div>
                <div className="va-subtitle">{a.subtitle}</div>
                <div className="va-desc">{a.desc}</div>
                {a.sku && <div className="va-sku">SKU · {a.sku}</div>}
              </div>
              <div className="va-cta">Pedir orçamento →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────
function VFinalCTA() {
  return (
    <section className="vf-final">
      <div className="vf-inner">
        <p className="vf-eyebrow">PRONTO PRA COMEÇAR?</p>
        <h2 className="vf-title">Limpe mais.<br /><span className="vf-accent">Ganhe mais.</span></h2>
        <p className="vf-lead">
          Fale com um especialista. Frete pra todo Brasil, suporte no WhatsApp, garantia de 12 meses.
        </p>
        <div className="vf-actions">
          <a className="vf-btn-primary"
            href={wa('Olá! Quero conversar sobre as escovas Painel Clean.')}
            target="_blank" rel="noreferrer">
            <WhatsBrand size={16} /> Falar no WhatsApp
          </a>
          <a className="vf-ghost-link" href="/escova-dupla-d5">
            Ver detalhes da PRO →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Root ──────────────────────────────────────────────────────
function ProdutosApp() {
  useLenis();
  return (
    <div>
      <Nav />
      <VHero />
      {PRODUCTS.map((p, i) => (
        <React.Fragment key={p.id}>
          <ShowcaseSection p={p} index={i} />
          {i === 0 && <KitSection />}
        </React.Fragment>
      ))}
      <AccessoriesSection />
      <VFinalCTA />
      <Footer />
      <SectionNav />

      <style>{`
        /* ── Hero ──────────────────────────────── */
        .vh-hero {
          position: relative;
          min-height: 100vh;
          background: var(--pc-cream);
          color: var(--fg-on-cream-1);
          display: flex;
          flex-direction: column;
          padding: 120px 0 0;
          overflow: hidden;
        }
        .vh-hero-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: calc(var(--container) + var(--gutter) * 2);
          width: 100%;
          margin: 0 auto;
          padding: 0 var(--gutter);
          align-items: stretch;
          min-height: 520px;
        }
        .vh-hero-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 0;
        }
        .vh-eyebrow {
          font: var(--eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
          color: var(--pc-green-2);
          margin: 0 0 28px;
        }
        .vh-title {
          font: 600 clamp(38px, 5.2vw, 72px)/1.0 var(--font-display);
          letter-spacing: -.035em;
          margin: 0 0 28px;
          color: var(--fg-on-cream-1);
        }
        .vh-accent { color: var(--pc-green-2); }
        .vh-lead {
          font: 500 clamp(16px, 1.4vw, 19px)/1.55 var(--font-sans);
          color: var(--fg-on-cream-2);
          max-width: 440px;
          margin: 0 0 48px;
        }
        .vh-scroll-cue {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font: 600 11px/1 var(--font-sans);
          text-transform: uppercase;
          letter-spacing: .14em;
          color: var(--fg-on-cream-3);
        }
        .vh-scroll-cue svg {
          animation: vhScrollHint 2.2s var(--ease-out) infinite;
        }
        @keyframes vhScrollHint {
          0%,100% { transform: translateY(0); opacity: .5; }
          50%      { transform: translateY(6px); opacity: 1; }
        }
        .vh-stage {
          position: relative;
          aspect-ratio: 3 / 2;
          background: radial-gradient(120% 80% at 50% 20%, #F5F4EF 0%, var(--t-stage) 55%, #E1E0DC 100%);
          border-radius: var(--t-stage-radius);
          overflow: hidden;
          isolation: isolate;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 0 0 0 1px rgba(15,56,43,0.06),
            0 30px 80px -40px rgba(15,56,43,0.30);
        }
        .vh-stage img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .vh-stage-tag {
          position: absolute;
          top: 20px; left: 20px; z-index: 3;
          font: 600 10px/1 var(--font-sans);
          letter-spacing: .14em;
          text-transform: uppercase;
          color: rgba(15,56,43,0.55);
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          padding: 8px 12px;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(15,56,43,0.06);
        }
        .vh-stats {
          max-width: var(--container);
          width: 100%;
          margin: 56px auto 0;
          padding: 36px var(--gutter) 48px;
          border-top: 1px solid var(--border-on-cream);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .vh-stats > div { display: flex; flex-direction: column; gap: 4px; }
        .vh-stats strong {
          font: 600 clamp(26px, 3.4vw, 42px)/1 var(--font-display);
          color: var(--fg-on-cream-1);
          letter-spacing: -.02em;
          font-variant-numeric: tabular-nums;
        }
        .vh-stats span {
          font: 500 11px/1 var(--font-sans);
          color: var(--fg-on-cream-3);
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        /* ── Showcase section ──────────────────── */
        .vp-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: var(--fg-on-cream-1);
          padding: 80px var(--gutter);
          overflow: hidden;
        }
        .vp-section-inner {
          position: relative;
          max-width: var(--container);
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .vp-flip .vp-section-inner {
          grid-template-columns: 1fr 1.15fr;
        }
        .vp-flip .vp-section-media { order: 2; }
        .vp-flip .vp-section-text  { order: 1; }

        /* Stage */
        .vp-stage {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: var(--t-stage-radius);
          background: radial-gradient(120% 80% at 50% 25%, #F6F5F0 0%, var(--t-stage) 55%, #DEDDD8 100%);
          overflow: hidden;
          isolation: isolate;
          box-shadow:
            inset 0 0 0 1px rgba(15,56,43,0.06),
            0 30px 80px -40px rgba(15,56,43,0.30);
        }
        .vp-stage > img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity var(--dur-slow) var(--ease-out);
        }
        .vp-stage-badge {
          position: absolute;
          top: 20px; left: 20px; z-index: 4;
          background: var(--pc-green);
          color: var(--pc-darker);
          padding: 7px 14px;
          border-radius: var(--radius-pill);
          font: 700 11px/1 var(--font-sans);
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .vp-thumbs {
          display: flex; gap: 8px;
          margin-top: 12px;
        }
        .vp-thumb {
          width: 60px; height: 60px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid transparent;
          padding: 0; cursor: pointer;
          transition: border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
          background: var(--t-stage);
          box-shadow: inset 0 0 0 1px rgba(15,56,43,0.07);
        }
        .vp-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .vp-thumb:hover { transform: translateY(-2px); }
        .vp-thumb.is-on { border-color: var(--pc-green); box-shadow: none; }

        /* Text side */
        .vp-section-text { display: flex; flex-direction: column; max-width: 520px; }
        .vp-index {
          display: inline-flex; align-items: center; gap: 12px;
          font: 600 12px/1 var(--font-sans);
          color: var(--fg-on-cream-3);
          letter-spacing: .04em;
          font-variant-numeric: tabular-nums;
          margin-bottom: 26px;
        }
        .vp-index-sep { width: 36px; height: 1px; background: currentColor; opacity: .4; }
        .vp-eyebrow {
          font: var(--eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
          color: var(--pc-green-2);
          margin: 0 0 14px;
        }
        .vp-name {
          font: 600 clamp(40px, 5vw, 70px)/0.98 var(--font-display);
          letter-spacing: -.03em;
          color: var(--fg-on-cream-1);
          margin: 0 0 14px;
        }
        .vp-tagline {
          font: 500 clamp(17px, 1.5vw, 22px)/1.3 var(--font-sans);
          color: var(--fg-on-cream-2);
          margin: 0 0 16px; max-width: 22ch;
        }
        .vp-blurb {
          font: 400 15px/1.6 var(--font-sans);
          color: var(--fg-on-cream-3);
          margin: 0 0 32px; max-width: 440px;
        }
        .vp-specs {
          display: grid;
          grid-template-columns: repeat(3, max-content);
          gap: 36px;
          padding: 20px 0;
          border-top: 1px solid var(--border-on-cream);
          border-bottom: 1px solid var(--border-on-cream);
          margin-bottom: 30px;
        }
        .vp-spec { display: flex; flex-direction: column; gap: 4px; }
        .vp-spec strong {
          font: 600 clamp(26px, 2.8vw, 34px)/1 var(--font-display);
          letter-spacing: -.02em;
          color: var(--fg-on-cream-1);
          font-variant-numeric: tabular-nums;
        }
        .vp-spec strong span { font-size: .54em; font-weight: 500; opacity: .5; margin-left: 1px; }
        .vp-spec-label {
          font: 500 11px/1 var(--font-sans);
          color: var(--fg-on-cream-3);
          text-transform: uppercase; letter-spacing: .08em;
        }
        /* Colors */
        .vp-colors {
          display: flex; align-items: center; gap: 24px;
          padding-bottom: 26px; margin-bottom: 26px;
          border-bottom: 1px solid var(--border-on-cream);
        }
        .vp-colors-meta { display: flex; flex-direction: column; gap: 3px; min-width: 100px; }
        .vp-colors-label {
          font: 600 10px/1 var(--font-sans);
          color: var(--fg-on-cream-3); text-transform: uppercase; letter-spacing: .12em;
        }
        .vp-colors-value {
          font: 600 15px/1.2 var(--font-display);
          color: var(--fg-on-cream-1); letter-spacing: -.01em;
        }
        .vp-swatches { display: flex; gap: 10px; }
        .vp-swatch {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2px solid var(--border-on-cream);
          cursor: pointer;
          transition: all var(--dur-base) var(--ease-out);
          box-shadow: inset 0 0 0 2px var(--pc-cream);
          padding: 0;
        }
        .vp-swatch:hover { transform: scale(1.08); }
        .vp-swatch.is-on { border-color: var(--pc-green); transform: scale(1.08); }
        .vp-section[style*="#F7F0D6"] .vp-swatch { box-shadow: inset 0 0 0 2px #F7F0D6; }
        .vp-sku {
          font: 600 11px/1 var(--font-sans);
          color: var(--fg-on-cream-3); text-transform: uppercase; letter-spacing: .12em;
          margin-bottom: 22px;
        }
        .vp-actions { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
        .vp-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--fg-on-cream-1); color: white;
          font: 700 14px/1 var(--font-sans);
          padding: 14px 22px; border-radius: var(--radius-md);
          transition: background var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
          white-space: nowrap;
        }
        .vp-btn-primary:hover { background: #14513C; transform: translateY(-1px); }
        .vp-ghost-link {
          font: 600 13px/1 var(--font-sans);
          color: var(--fg-on-cream-1);
          border-bottom: 1px solid currentColor;
          padding: 3px 0;
          transition: opacity var(--dur-base);
          white-space: nowrap;
        }
        .vp-ghost-link:hover { opacity: .55; }

        /* ── Kit section ───────────────────────── */
        .vk-kit {
          position: relative;
          background: var(--pc-darker);
          color: var(--fg-1);
          padding: 140px var(--gutter);
          overflow: hidden;
        }
        .vk-kit::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 80% 0%, rgba(58,213,128,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 100%, rgba(58,213,128,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        .vk-inner { position: relative; max-width: var(--container); margin: 0 auto; }
        .vk-head { max-width: 680px; margin-bottom: 60px; }
        .vk-eyebrow {
          font: var(--eyebrow); letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase; color: var(--pc-green); margin: 0 0 18px;
        }
        .vk-title {
          font: 600 clamp(38px, 5.2vw, 70px)/1.02 var(--font-display);
          letter-spacing: -.03em; color: var(--fg-1); margin: 0 0 18px;
        }
        .vk-accent { color: var(--pc-green); }
        .vk-lead {
          font: 400 clamp(15px, 1.25vw, 18px)/1.6 var(--font-sans);
          color: var(--fg-2); max-width: 520px; margin: 0;
        }
        .vk-stage {
          position: relative;
          aspect-ratio: 16 / 9; width: 100%;
          border-radius: var(--t-stage-radius);
          overflow: hidden;
          background: radial-gradient(120% 80% at 50% 25%, #F6F5F0 0%, var(--t-stage) 55%, #DEDDD8 100%);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.04),
            0 40px 100px -30px rgba(0,0,0,0.5);
        }
        .vk-stage > img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .vk-stage-meta {
          position: absolute; bottom: 16px; left: 20px; right: 20px; z-index: 2;
          display: flex; justify-content: space-between;
          font: 600 10px/1 var(--font-sans); letter-spacing: .14em;
          color: rgba(15,56,43,0.5); pointer-events: none;
        }
        /* Kit pins */
        .vk-pin { position: absolute; z-index: 3; pointer-events: none; }
        .vk-pin-dot {
          position: absolute; left: 0; top: 0;
          width: 13px; height: 13px; border-radius: 50%;
          background: var(--pc-green);
          box-shadow: 0 0 0 3px rgba(58,213,128,0.20), 0 0 16px rgba(58,213,128,0.6);
          transform: translate(-50%, -50%);
        }
        .vk-pin-dot::after {
          content: '';
          position: absolute; inset: -5px; border-radius: 50%;
          border: 1px solid var(--pc-green); opacity: 0.4;
          animation: vkPinPulse 2.6s ease-out infinite;
        }
        @keyframes vkPinPulse {
          0%   { transform: scale(1); opacity: .5; }
          100% { transform: scale(2.3); opacity: 0; }
        }
        .vk-pin-card {
          position: absolute;
          display: grid; grid-template-columns: auto 1fr;
          gap: 10px; align-items: baseline;
          background: rgba(10,31,23,0.93);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--border-on-dark-strong);
          border-radius: var(--radius); padding: 10px 14px;
          width: 196px; pointer-events: auto; white-space: normal;
        }
        .vk-pin-tl .vk-pin-card { right: 10px; bottom: 10px; }
        .vk-pin-tr .vk-pin-card { left: 10px;  bottom: 10px; }
        .vk-pin-bl .vk-pin-card { right: 10px; top: 10px; }
        .vk-pin-br .vk-pin-card { left: 10px;  top: 10px; }
        .vk-pin-num {
          font: 600 11px/1 var(--font-sans);
          font-variant-numeric: tabular-nums;
          color: var(--pc-green); letter-spacing: .04em;
        }
        .vk-pin-label { font: 600 12px/1.25 var(--font-display); letter-spacing: -.005em; color: var(--fg-1); margin-bottom: 2px; }
        .vk-pin-hint  { font: 400 11px/1.4 var(--font-sans); color: var(--fg-3); }

        /* ── Section nav dots ──────────────────── */
        .vsn-nav {
          position: fixed; right: 18px; top: 50%;
          transform: translateY(-50%) translateX(20px);
          z-index: 50;
          display: flex; flex-direction: column; gap: 14px;
          padding: 14px 6px;
          opacity: 0; pointer-events: none;
          transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out);
        }
        .vsn-nav.is-visible { opacity: 1; pointer-events: auto; transform: translateY(-50%) translateX(0); }
        .vsn-dot {
          display: flex; align-items: center; gap: 10px;
          background: none; padding: 4px 2px; cursor: pointer;
        }
        .vsn-line {
          width: 20px; height: 2px; border-radius: 999px;
          background: rgba(15,56,43,0.22);
          transition: all var(--dur-base) var(--ease-out);
        }
        .vsn-dot:hover .vsn-line { background: rgba(15,56,43,0.5); width: 26px; }
        .vsn-dot.is-on .vsn-line  { background: var(--pc-green-2); width: 30px; }
        .vsn-label {
          font: 600 11px/1 var(--font-sans); color: var(--fg-on-cream-2);
          letter-spacing: .04em; opacity: 0; transform: translateX(-4px);
          transition: all var(--dur-base) var(--ease-out);
          pointer-events: none; white-space: nowrap;
        }
        .vsn-dot:hover .vsn-label,
        .vsn-dot.is-on .vsn-label  { opacity: 1; transform: translateX(0); }

        /* ── Accessories ───────────────────────── */
        .va-section {
          background: #F7F0D6; color: var(--fg-on-cream-1);
          padding: 140px var(--gutter);
        }
        .va-inner { max-width: var(--container); margin: 0 auto; }
        .va-head { max-width: 600px; margin-bottom: 56px; }
        .va-eyebrow {
          font: var(--eyebrow); letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase; color: var(--pc-green-2); margin: 0 0 16px;
        }
        .va-title {
          font: 600 clamp(34px, 4.5vw, 60px)/1.05 var(--font-display);
          letter-spacing: -.03em; color: var(--fg-on-cream-1); margin: 0 0 16px;
        }
        .va-lead { font: 400 clamp(15px, 1.2vw, 17px)/1.6 var(--font-sans); color: var(--fg-on-cream-2); }
        .va-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .va-card {
          background: #FFFBEC;
          border: 1px solid var(--border-on-cream);
          border-radius: var(--radius-md);
          padding: 26px;
          display: flex; flex-direction: column; gap: 18px;
          position: relative; overflow: hidden;
          transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
          text-decoration: none;
        }
        .va-card:hover { transform: translateY(-4px); border-color: var(--border-on-cream-strong); box-shadow: var(--shadow-lift); }
        .va-tag {
          position: absolute; top: 16px; right: 16px;
          background: var(--accent-fill); color: var(--pc-green-2);
          font: 700 10px/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase;
          padding: 5px 9px; border-radius: var(--radius-pill);
        }
        .va-thumb {
          width: 68px; height: 68px; border-radius: var(--radius);
          background: var(--pc-dark); color: var(--pc-green);
          display: flex; align-items: center; justify-content: center; padding: 13px;
        }
        .va-thumb svg { width: 100%; height: 100%; }
        .va-body { display: flex; flex-direction: column; gap: 6px; }
        .va-name { font: 600 18px/1.25 var(--font-display); letter-spacing: -.01em; color: var(--fg-on-cream-1); }
        .va-subtitle { font: 600 12px/1.4 var(--font-sans); color: var(--pc-green-2); letter-spacing: .02em; }
        .va-desc { font: 400 13.5px/1.55 var(--font-sans); color: var(--fg-on-cream-2); }
        .va-sku  { font: 600 10.5px/1 var(--font-sans); color: var(--fg-on-cream-3); text-transform: uppercase; letter-spacing: .1em; margin-top: 4px; }
        .va-cta {
          font: 600 13px/1 var(--font-sans); color: var(--pc-green-2);
          margin-top: auto; padding-top: 8px; border-top: 1px solid var(--border-on-cream);
        }

        /* ── Final CTA ─────────────────────────── */
        .vf-final {
          background: var(--pc-dark); color: var(--fg-1);
          padding: 140px var(--gutter); text-align: center; position: relative; overflow: hidden;
        }
        .vf-final::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at top, rgba(58,213,128,0.10) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(58,213,128,0.06) 0%, transparent 40%);
          pointer-events: none;
        }
        .vf-inner { position: relative; max-width: 720px; margin: 0 auto; }
        .vf-eyebrow {
          font: var(--eyebrow); letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase; color: var(--pc-green); margin: 0 0 24px; display: block;
        }
        .vf-title {
          font: 600 clamp(52px, 8vw, 104px)/0.98 var(--font-display);
          letter-spacing: -.03em; margin: 0 0 28px; color: var(--fg-1);
        }
        .vf-accent { color: var(--pc-green); }
        .vf-lead {
          font: 400 clamp(16px, 1.4vw, 19px)/1.55 var(--font-sans);
          color: var(--fg-2); max-width: 480px; margin: 0 auto 44px;
        }
        .vf-actions { display: inline-flex; align-items: center; gap: 26px; flex-wrap: wrap; justify-content: center; }
        .vf-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--pc-green); color: var(--pc-dark);
          font: 700 15px/1 var(--font-sans);
          padding: 16px 26px; border-radius: var(--radius-pill);
          transition: background var(--dur-base), transform var(--dur-base);
          box-shadow: 0 8px 24px rgba(58,213,128,.22);
        }
        .vf-btn-primary:hover { background: #4FE090; transform: translateY(-2px); }
        .vf-ghost-link {
          font: 600 14px/1 var(--font-sans); color: var(--fg-1);
          border-bottom: 1px solid rgba(255,255,255,0.3); padding: 3px 0;
          transition: opacity var(--dur-base);
        }
        .vf-ghost-link:hover { opacity: .6; }

        /* ── Responsive ────────────────────────── */
        @media (max-width: 820px) {
          .vh-hero { padding: 96px 0 0; }
          .vh-hero-grid { grid-template-columns: 1fr; gap: 28px; min-height: 0; }
          .vh-hero-text { padding: 0; }
          .vh-stage { aspect-ratio: 4 / 3; }
          .vh-stats { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .vp-section { padding: 64px var(--gutter); }
          .vp-section-inner,
          .vp-flip .vp-section-inner { grid-template-columns: 1fr !important; gap: 28px; }
          .vp-flip .vp-section-media { order: 1 !important; }
          .vp-flip .vp-section-text  { order: 2 !important; }
          .vp-specs { gap: 22px; }
          .vk-kit { padding: 88px var(--gutter); }
          .vk-pin { display: none; }
          .vk-stage { aspect-ratio: 16 / 11; }
          .vsn-nav { display: none; }
          .va-grid { grid-template-columns: repeat(2, 1fr); }
          .vf-final { padding: 96px var(--gutter); }
        }
        @media (max-width: 560px) {
          .va-grid { grid-template-columns: 1fr; }
          .vp-actions { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProdutosApp />);
