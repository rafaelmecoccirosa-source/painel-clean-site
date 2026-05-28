// ===== ESCOVA DUPLA PRO — Página cinemática =====

const SKU  = 'ZCP-0275-D5';
const NAME = 'Escova Dupla PRO';
const WA_MSG = `Olá! Tenho interesse na ${NAME} (${SKU}).`;

// ─── Scroll hooks ─────────────────────────────────────────────
function useScrollY() {
  const [y, setY] = React.useState(typeof window !== 'undefined' ? window.scrollY : 0);
  React.useEffect(() => {
    const fn = () => setY(window.scrollY);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return y;
}

function useSectionProgress(ref, mode) {
  const scrollY = useScrollY();
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r  = el.getBoundingClientRect();
    const vh = window.innerHeight;
    let prog;
    if (mode === 'sticky') {
      prog = Math.max(0, Math.min(1, -r.top / Math.max(1, el.offsetHeight - vh)));
    } else if (mode === 'enter') {
      prog = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
    } else {
      prog = Math.max(0, Math.min(1, 1 - r.bottom / (vh + r.height)));
    }
    setP(prog);
  }, [scrollY, mode]);
  return p;
}

const easeOut  = t => 1 - Math.pow(1 - t, 3);
const clamp    = v => Math.max(0, Math.min(1, v));
const lerp     = (a, b, t) => a + (b - a) * t;

// ─── Mercado Livre icon ────────────────────────────────────────
const IconML = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

// ─── Scene 1: HERO ────────────────────────────────────────────
const HERO_FRAMES = Array.from({ length: 11 }, (_, i) =>
  `public/images/escova pro hero ${i + 1}.png`
);

const HERO_CAPTIONS = [
  { start: 0.10, end: 0.36, pos: 'bl', side: 'l', eyebrow: '260 PAINÉIS/HORA',       title: 'Velocidade que vira faturamento.' },
  { start: 0.36, end: 0.58, pos: 'tr', side: 'r', eyebrow: 'CERDAS PROFISSIONAIS',   title: 'Limpa. Não risca o vidro.' },
  { start: 0.58, end: 0.80, pos: 'tl', side: 'l', eyebrow: 'ENGENHARIA MODULAR',     title: 'Cada peça reposta no Brasil.' },
  { start: 0.80, end: 1.00, pos: 'br', side: 'r', eyebrow: 'DUAS CABEÇAS BRUSHLESS', title: 'Dois motores. Uma engenharia.' },
];

function Hero() {
  const ref   = useRef(null);
  const p     = useSectionProgress(ref, 'sticky');
  const FC    = HERO_FRAMES.length;
  const titleEnd  = 0.10;
  const phaseB    = clamp((p - titleEnd) / (1 - titleEnd));
  const segLen    = 1 / FC;
  const fadeW     = 0.04;

  const tTitle       = easeOut(clamp(p / titleEnd));
  const titleOpacity = clamp(1 - tTitle * 1.4);
  const titleY       = lerp(0, -36, tTitle);
  const introAlpha   = clamp((p - 0.04) / (titleEnd - 0.04));
  const curFrame     = Math.min(FC - 1, Math.max(0, Math.floor(phaseB * FC)));
  const counterOp    = clamp((p - titleEnd) / 0.04);
  const cueOp        = clamp(1 - tTitle * 3);

  return (
    <section className="d5-hero" ref={ref}>
      <div className="d5-hero-sticky">

        {/* Frame stack */}
        <div className="d5-frames" aria-hidden="true">
          {HERO_FRAMES.map((src, i) => {
            const ss  = i * segLen;
            const se  = (i + 1) * segLen;
            const fi  = i === 0 ? introAlpha : clamp((phaseB - (ss - fadeW)) / fadeW);
            const fo  = i === FC - 1 ? 1 : clamp(1 - (phaseB - (se - fadeW)) / fadeW);
            const op  = Math.min(fi, fo);
            const sc  = lerp(1.03, 1.0, easeOut(clamp((phaseB - ss) / segLen)));
            return (
              <div key={i} className="d5-frame"
                style={{ opacity: op, transform: `scale(${sc})`, zIndex: 1 + i }}>
                <img src={src} alt="" />
              </div>
            );
          })}
        </div>

        {/* Phase A: type intro */}
        <div className="d5-hero-text" style={{
          opacity: titleOpacity,
          transform: `translate(-50%,-50%) translateY(${titleY}px) scale(${lerp(1, 0.94, tTitle)})`,
          pointerEvents: titleOpacity > 0.1 ? 'auto' : 'none',
        }}>
          <p className="d5-eyebrow">LINHA PROFISSIONAL · ZCP-0275-D5</p>
          <h1 className="d5-hero-title">Escova Dupla<br/><span className="d5-accent">PRO.</span></h1>
          <p className="d5-hero-sub">Limpe mais, ganhe mais. Em menos tempo.</p>
        </div>

        {/* Phase B: captions pin-and-line */}
        {HERO_CAPTIONS.map((c, i) => {
          const cfw  = 0.06;
          const fi   = clamp((p - c.start) / cfw);
          const fo   = i === HERO_CAPTIONS.length - 1 ? 1 : clamp(1 - (p - (c.end - cfw)) / cfw);
          const op   = Math.min(fi, fo);
          const slide = lerp(20, 0, op);
          const dx   = c.side === 'l' ? -slide : slide;
          return (
            <div key={i}
              className={`d5-pin d5-pin-${c.pos} d5-pin-side-${c.side}`}
              style={{ opacity: op, transform: `translateX(${dx}px)`, pointerEvents: op > 0.5 ? 'auto' : 'none' }}>
              <span className="d5-pin-dot" aria-hidden="true"/>
              <span className="d5-pin-line" aria-hidden="true"/>
              <div className="d5-pin-text">
                <p className="d5-pin-eyebrow">{c.eyebrow}</p>
                <h2 className="d5-pin-title">{c.title}</h2>
              </div>
            </div>
          );
        })}

        {/* Frame counter */}
        <div className="d5-counter" style={{ opacity: counterOp }}>
          <span className="d5-counter-cur">{String(curFrame + 1).padStart(2, '0')}</span>
          <span className="d5-counter-sep">/</span>
          <span className="d5-counter-tot">{String(FC).padStart(2, '0')}</span>
        </div>

        {/* Scroll cue */}
        <div className="d5-scroll-cue" style={{ opacity: cueOp }}>
          <span>Role para descobrir</span>
          <div className="d5-scroll-line"><div className="d5-scroll-dot"/></div>
        </div>

      </div>
    </section>
  );
}

// ─── Scene 2: EXPLODED VIEW ───────────────────────────────────
const EXPLODED_STAGES = [
  {
    img: 'public/images/escova pro 1.png',
    num: '01', title: 'Montada.',
    lead: 'A Dupla PRO completa. Duas cabeças brushless, articulação central, engates rápidos. Tudo num conjunto só.',
    pin: { label: 'Conjunto montado', detail: 'Pronta para o telhado' },
  },
  {
    img: 'public/images/escova pro 2.png',
    num: '02', title: 'Articulação central.',
    lead: 'Sistema de fixação modular: barra travessa, suporte do cabo, conector de água com engate rápido. Cada peça reposta isolada.',
    pin: { label: 'Suporte + conexão', detail: 'Padrão profissional · sem adaptadores' },
  },
  {
    img: 'public/images/escova pro 3.png',
    num: '03', title: 'Cabeça brushless.',
    lead: 'Motor brushless 350 RPM, base de polietileno, disco de cerdas trocável. 4 parafusos e está aberto pra manutenção.',
    pin: { label: 'Disco trocável', detail: 'Cerdas de reposição · 4 parafusos' },
  },
  {
    img: 'public/images/escova pro kit.png',
    num: '04', title: 'Cada peça, no lugar certo.',
    lead: 'Kit completo: cabo, articulação, motores, discos e cerdas. Engenharia pensada pra durar — e pra ser consertada no Brasil.',
    pin: { label: 'Conjunto expandido', detail: 'Reposição peça a peça' },
  },
];

function Exploded() {
  const ref    = useRef(null);
  const p      = useSectionProgress(ref, 'sticky');
  const seg    = 1 / EXPLODED_STAGES.length;
  const fadeW  = 0.05;

  return (
    <section className="d5-exploded" ref={ref}>
      <div className="d5-exp-sticky">
        <div className="d5-exp-header">
          <p className="d5-eyebrow d5-eyebrow-dark">EXPLODED VIEW</p>
          <h2 className="d5-h2">A escova, por dentro.</h2>
          <p className="d5-exp-sub">Role pra ver o conjunto se abrir.</p>
        </div>

        <div className="d5-exp-body">
          {/* Left: image stage */}
          <div className="d5-exp-stage">
            {EXPLODED_STAGES.map((s, i) => {
              const ss  = i * seg;
              const se  = (i + 1) * seg;
              const fi  = i === 0 ? 1 : clamp((p - (ss - fadeW)) / fadeW);
              const fo  = i === EXPLODED_STAGES.length - 1 ? 1 : clamp(1 - (p - (se - fadeW)) / fadeW);
              const op  = Math.min(fi, fo);
              const sc  = lerp(1.05, 1.0, easeOut(clamp((p - ss) / seg)));
              return (
                <div key={i} className="d5-exp-frame"
                  style={{ opacity: op, transform: `scale(${sc})`, zIndex: 2 + i }}>
                  <img src={s.img} alt={s.title} />
                </div>
              );
            })}

            {/* Stage counter dots */}
            <div className="d5-exp-dots">
              {EXPLODED_STAGES.map((s, i) => (
                <div key={i}
                  className={`d5-exp-dot${p >= i * seg && p < (i+1) * seg ? ' is-on' : ''}${p >= (i+1) * seg ? ' is-past' : ''}`}>
                  <span>{s.num}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: captions */}
          <div className="d5-exp-captions">
            {EXPLODED_STAGES.map((s, i) => {
              const ss = i * seg;
              const se = (i + 1) * seg;
              const fi = i === 0 ? 1 : clamp((p - (ss - fadeW)) / fadeW);
              const fo = i === EXPLODED_STAGES.length - 1 ? 1 : clamp(1 - (p - (se - fadeW)) / fadeW);
              const op = Math.min(fi, fo);
              return (
                <div key={i} className="d5-exp-caption"
                  style={{ opacity: op, transform: `translateY(${lerp(20, 0, op)}px)`, pointerEvents: op > 0.5 ? 'auto' : 'none' }}>
                  <div className="d5-exp-num">{s.num} / {String(EXPLODED_STAGES.length).padStart(2,'0')}</div>
                  <h3 className="d5-exp-title">{s.title}</h3>
                  <p className="d5-exp-lead">{s.lead}</p>
                  <div className="d5-exp-pin-row">
                    <span className="d5-exp-pin-dot"/>
                    <div>
                      <div className="d5-exp-pin-label">{s.pin.label}</div>
                      <div className="d5-exp-pin-detail">{s.pin.detail}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Scene 3: FIELD STATS ─────────────────────────────────────
const FIELD_STATS = [
  { num: 260, label: 'painéis por hora',          suffix: '/h', start: 0.15 },
  { num: 30,  label: 'mais geração de energia',   suffix: '%', prefix: '+', start: 0.35 },
  { num: 350, label: 'RPM motor brushless',        suffix: '',  start: 0.55 },
  { num: 0,   label: 'químicos. Só água.',         suffix: '',  start: 0.75 },
];

function FieldStats() {
  const ref = useRef(null);
  const p   = useSectionProgress(ref, 'sticky');

  return (
    <section className="d5-field" ref={ref}>
      <div className="d5-field-sticky">
        <img className="d5-field-bg" src="public/images/field-1.jpg" alt="" />
        <div className="d5-field-veil"/>
        <div className="d5-field-content">
          <p className="d5-eyebrow d5-eyebrow-dark" style={{ opacity: clamp(p * 3) }}>
            EM CAMPO. EM QUALQUER TELHADO.
          </p>
          <h2 className="d5-h2 d5-field-title" style={{ opacity: clamp((p - 0.05) * 3) }}>
            Performance que <span className="d5-accent">paga</span><br />a sua hora.
          </h2>
          <div className="d5-stats">
            {FIELD_STATS.map((s, i) => {
              const t    = easeOut(clamp((p - s.start) / 0.2));
              const num  = Math.round(s.num * t);
              return (
                <div key={i} className="d5-stat"
                  style={{ opacity: t, transform: `translateY(${lerp(20, 0, t)}px)` }}>
                  <div className="d5-stat-num">{s.prefix || ''}{num}{s.suffix}</div>
                  <div className="d5-stat-label">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Scene 4: SPECS ───────────────────────────────────────────
const SPEC_ROWS = [
  { k: 'Velocidade',      v: '260', unit: 'painéis/h' },
  { k: 'Motor',           v: '350', unit: 'RPM brushless' },
  { k: 'Cabo extensível', v: '7,5', unit: 'metros' },
  { k: 'Mangueira',       v: '35',  unit: 'm reforçada' },
  { k: 'Acionamento',     v: 'RC',  unit: 'controle remoto' },
  { k: 'Tomada',          v: 'NBR', unit: '14136 nativa' },
  { k: 'Químicos',        v: '0',   unit: 'só água' },
  { k: 'Garantia',        v: '12',  unit: 'meses · Brasil' },
];

function Specs() {
  const ref = useRef(null);
  const p   = useSectionProgress(ref, 'enter');

  return (
    <section id="specs" className="d5-specs" ref={ref}>
      <div className="d5-specs-inner">
        <div className="d5-specs-head">
          <p className="d5-eyebrow">FICHA TÉCNICA</p>
          <h2 className="d5-h2 d5-h2-cream">Os números<br />que fecham conta.</h2>
        </div>
        <div className="d5-specs-grid">
          {SPEC_ROWS.map((r, i) => {
            const t = easeOut(clamp((p * 1.4) - i * 0.04));
            return (
              <div key={i} className="d5-spec-row"
                style={{ opacity: t, transform: `translateY(${lerp(16, 0, t)}px)` }}>
                <div className="d5-spec-key">{r.k}</div>
                <div className="d5-spec-val"><span>{r.v}</span><em>{r.unit}</em></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Scene 5: TIMELINE ────────────────────────────────────────
function Timeline() {
  const ref    = useRef(null);
  const p      = useSectionProgress(ref, 'enter');
  const panels = Array.from({ length: 24 });
  const filled = Math.round(p * 24);
  const secs   = Math.round(p * 312);

  return (
    <section className="d5-timeline" ref={ref}>
      <div className="d5-tl-inner">
        <div className="d5-tl-text">
          <p className="d5-eyebrow d5-eyebrow-dark">TIMELINE</p>
          <h2 className="d5-h2">1 painel em <span className="d5-accent">13 segundos</span>.</h2>
          <p className="d5-tl-lead">Em 5 minutos você limpa um sistema residencial inteiro. Em 1 hora, 260. Velocidade que vira faturamento — sem química, sem riscos.</p>
          <div className="d5-tl-readout">
            <div className="d5-tl-read"><span>{filled}</span> painéis</div>
            <div className="d5-tl-read"><span>{secs}</span> segundos</div>
          </div>
        </div>
        <div className="d5-tl-grid">
          {panels.map((_, i) => (
            <div key={i}
              className={`d5-panel${i < filled ? ' is-clean' : ''}`}
              style={{ transitionDelay: `${i * 20}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Scene 6: ACCESSORIES ────────────────────────────────────
const ACC_ITEMS = [
  { name: 'Cerdas de reposição', spec: 'Profissionais · alta densidade', tag: 'Refil' },
  { name: 'Mangueira 35 m',      spec: 'Reforçada · resistente a dobras', tag: 'Reposição' },
  { name: 'Bomba hidráulica',    spec: "Spare · proteção falta d'água", tag: 'Reposição' },
  { name: 'Cabo extensor',       spec: '3,5 m · 5,5 m · 7,5 m', tag: '3 tamanhos' },
  { name: 'Caixa de armazenamento', spec: 'Transporte e estoque do kit', tag: 'Acessório' },
  { name: 'Sistema de bateria',  spec: 'Trabalhe sem rede elétrica', tag: 'Em breve' },
];

const AccGlyph = ({ name }) => {
  const s = 'rgba(58,213,128,.75)';
  const sw = '1.5';
  if (/cerdas/i.test(name)) return (
    <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
      <circle cx="50" cy="50" r="22"/><circle cx="50" cy="50" r="6" fill={s}/>
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i/24) * Math.PI * 2;
        return <line key={i} x1={50+Math.cos(a)*22} y1={50+Math.sin(a)*22} x2={50+Math.cos(a)*42} y2={50+Math.sin(a)*42} strokeLinecap="round"/>;
      })}
    </svg>
  );
  if (/mangueira/i.test(name)) return (
    <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
      <path d="M15 30Q35 10 50 30T85 30"/><path d="M15 50Q35 30 50 50T85 50"/><path d="M15 70Q35 50 50 70T85 70"/>
    </svg>
  );
  if (/bomba/i.test(name)) return (
    <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
      <rect x="22" y="32" width="46" height="36" rx="3"/><circle cx="45" cy="50" r="9"/>
      <path d="M68 40H86M68 60H86"/><path d="M30 32V20H60V32"/>
    </svg>
  );
  if (/extensor/i.test(name)) return (
    <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
      <rect x="10" y="46" width="80" height="8" rx="2"/>
      <rect x="22" y="42" width="3" height="16"/><rect x="40" y="42" width="3" height="16"/>
      <rect x="58" y="42" width="3" height="16"/><rect x="76" y="42" width="3" height="16"/>
    </svg>
  );
  if (/caixa/i.test(name)) return (
    <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
      <path d="M18 38L50 24L82 38L82 74L50 88L18 74Z"/>
      <path d="M18 38L50 52L82 38"/><path d="M50 52V88"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke={s} strokeWidth={sw}>
      <rect x="18" y="32" width="58" height="36" rx="3"/>
      <rect x="76" y="42" width="6" height="16" rx="1"/>
      <path d="M30 50H42M36 44V56"/><path d="M54 50H66"/>
    </svg>
  );
};

function AccessoriesD5() {
  return (
    <section className="d5-acc">
      <div className="d5-acc-inner">
        <div className="d5-acc-head">
          <p className="d5-eyebrow">ECOSSISTEMA PRO</p>
          <h2 className="d5-h2 d5-h2-cream">Acessórios compatíveis.</h2>
          <p className="d5-lead">Tudo o que sua operação precisa, vendido separadamente. Reposição rápida, peças no Brasil.</p>
        </div>
        <div className="d5-acc-grid">
          {ACC_ITEMS.map((a, i) => (
            <a key={i} className="d5-acc-card"
              href={wa(`Olá! Quero saber sobre o acessório: ${a.name}`)}
              target="_blank" rel="noreferrer">
              <div className="d5-acc-tag">{a.tag}</div>
              <div className="d5-acc-thumb"><AccGlyph name={a.name}/></div>
              <div className="d5-acc-name">{a.name}</div>
              <div className="d5-acc-spec">{a.spec}</div>
              <div className="d5-acc-cta">Pedir orçamento →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Scene 7: FAQ ─────────────────────────────────────────────
const FAQ_ITEMS = [
  { q: 'As escovas danificam as placas?',           a: 'Não. As cerdas são profissionais, de alta densidade e baixa abrasão. Limpam acúmulo de poeira, pólen e dejetos sem riscar o vidro temperado dos módulos.' },
  { q: 'Precisa de produto químico?',               a: 'Não. A PRO trabalha só com água. Você economiza no insumo e ainda evita resíduos químicos sobre o telhado e o solo.' },
  { q: 'Preciso de experiência prévia para usar?',  a: 'Não. Junto com a escova você recebe acesso ao treinamento online (operação, segurança e precificação). 39,90 vitalício — mas no kit da PRO já vem incluso.' },
  { q: 'Funciona em usinas grandes?',               a: 'Sim. A PRO é a campeã de velocidade: 260 painéis/h. Em projetos de solo e telhado plano você ganha 30–40% de produtividade contra a escova simples.' },
  { q: 'Qual a garantia?',                          a: '12 meses, com assistência técnica no Brasil. Peças de reposição a pronta entrega — você não fica parado.' },
  { q: 'Aceita parcelamento?',                      a: 'Sim. Falando direto pelo WhatsApp negociamos condições de pagamento. Pelo Mercado Livre você usa as parcelas padrão do marketplace.' },
];

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="d5-faq">
      <div className="d5-faq-inner">
        <div className="d5-faq-head">
          <p className="d5-eyebrow d5-eyebrow-dark">PERGUNTAS FREQUENTES</p>
          <h2 className="d5-h2">Perguntas. Respostas curtas.</h2>
        </div>
        <div className="d5-faq-list">
          {FAQ_ITEMS.map((it, i) => (
            <div key={i} className={`d5-faq-item${open === i ? ' is-open' : ''}`}>
              <button className="d5-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="d5-faq-icon">+</span>
              </button>
              <div className="d5-faq-a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────
const FinalCTAD5 = React.forwardRef((props, ref) => (
  <section className="d5-final" ref={ref}>
    <div className="d5-final-inner">
      <p className="d5-eyebrow d5-eyebrow-dark">PRONTA PARA O CAMPO</p>
      <h2 className="d5-final-title">
        Mais painéis.<br />Mais clientes.<br /><span className="d5-accent">Em menos tempo.</span>
      </h2>
      <p className="d5-lead d5-final-lead">
        Fale com a gente agora ou compre direto pelo Mercado Livre. Suporte técnico em português, peças a pronta entrega, treinamento online incluso.
      </p>
      <div className="d5-final-ctas">
        <a className="d5-btn-primary"
          href={wa('Olá! Quero comprar a Escova Dupla PRO.')}
          target="_blank" rel="noreferrer">
          <WhatsBrand size={16}/> Comprar pelo WhatsApp
        </a>
        <a className="d5-btn-ml" href="#mercado-livre" target="_blank" rel="noreferrer">
          <IconML/> Mercado Livre
        </a>
      </div>
      <p className="d5-final-caption">Pagamento seguro · Garantia 12 meses · Assistência técnica no Brasil</p>
    </div>
  </section>
));

// ─── Purchase bar ─────────────────────────────────────────────
function PurchaseBar({ finalRef }) {
  const scrollY  = useScrollY();
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    const vh     = window.innerHeight;
    const final  = finalRef.current;
    if (!final) return;
    const ft     = final.getBoundingClientRect().top + window.scrollY;
    const hide   = scrollY < vh * 0.4 || scrollY + vh > ft + vh * 0.3;
    setHidden(hide);
  }, [scrollY]);

  return (
    <div className={`d5-bar${hidden ? ' is-hidden' : ''}`}>
      <a className="d5-btn-primary d5-bar-btn"
        href={wa(WA_MSG)}
        target="_blank" rel="noreferrer">
        <WhatsBrand size={15}/> WhatsApp
      </a>
      <a className="d5-btn-ml d5-bar-btn" href="#mercado-livre" target="_blank" rel="noreferrer">
        <IconML/> Mercado Livre
      </a>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────
function D5App() {
  const finalRef = useRef(null);

  return (
    <div>
      <Nav />
      <Hero />
      <Exploded />
      <FieldStats />
      <Specs />
      <Timeline />
      <AccessoriesD5 />
      <FAQSection />
      <FinalCTAD5 ref={finalRef} />
      <Footer />
      <PurchaseBar finalRef={finalRef} />

      <style>{`
        /* ── Shared helpers ──────────────────── */
        .d5-accent       { color: var(--pc-green); }
        .d5-eyebrow {
          display: block;
          font: var(--eyebrow); letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase; color: var(--pc-green-2); margin: 0 0 18px;
        }
        .d5-eyebrow-dark { color: var(--pc-green); }
        .d5-h2 {
          font: 600 clamp(32px, 5vw, 72px)/1.05 var(--font-display);
          letter-spacing: -.02em; margin: 0; color: var(--fg-1);
        }
        .d5-h2-cream { color: var(--fg-on-cream-1); }
        .d5-lead {
          font: 400 clamp(17px, 1.5vw, 21px)/1.5 var(--font-sans);
          color: var(--fg-2); max-width: 560px;
        }

        /* ── HERO ────────────────────────────── */
        .d5-hero {
          position: relative;
          height: 1300vh;
          background: var(--pc-cream);
          color: var(--fg-on-cream-1);
          contain: layout paint;
        }
        .d5-hero-sticky {
          position: sticky; top: 0;
          height: 100vh; width: 100%;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .d5-frames { position: absolute; inset: 0; z-index: 1; }
        .d5-frame {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          will-change: opacity, transform;
        }
        .d5-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center; }

        /* Phase A */
        .d5-hero-text {
          position: absolute; left: 50%; top: 50%; z-index: 5;
          text-align: center; max-width: 1100px; padding: 0 var(--gutter); width: 100%;
        }
        .d5-hero-title {
          font: 600 clamp(64px, 13vw, 180px)/0.96 var(--font-display);
          letter-spacing: -.035em; margin: 0 0 20px; color: var(--fg-on-cream-1);
        }
        .d5-hero-sub {
          font: 500 clamp(17px, 1.8vw, 24px)/1.3 var(--font-sans);
          color: var(--fg-on-cream-2); opacity: .85; margin: 0 auto;
        }

        /* Phase B: pins */
        .d5-pin {
          position: absolute; z-index: 4;
          display: flex; align-items: center; gap: 14px;
          max-width: 440px; will-change: opacity, transform;
        }
        .d5-pin-side-r { flex-direction: row-reverse; }
        .d5-pin-side-r .d5-pin-text { text-align: right; }
        .d5-pin-dot {
          width: 11px; height: 11px; border-radius: 50%;
          background: var(--pc-green);
          box-shadow: 0 0 0 4px rgba(58,213,128,0.20), 0 0 14px rgba(58,213,128,0.55);
          flex-shrink: 0; position: relative;
        }
        .d5-pin-dot::after {
          content: ''; position: absolute; inset: -6px; border-radius: 50%;
          border: 1px solid var(--pc-green); opacity: .4;
          animation: d5PinPulse 2.4s ease-out infinite;
        }
        @keyframes d5PinPulse {
          0%   { transform: scale(1); opacity: .5; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        .d5-pin-line { height: 1px; width: 52px; background: var(--pc-green); opacity: .8; flex-shrink: 0; }
        .d5-pin-text {
          background: rgba(8,24,18,0.72);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(58,213,128,0.14);
          border-radius: 10px; padding: 12px 16px;
        }
        .d5-pin-eyebrow {
          font: 600 11px/1.1 var(--font-sans); letter-spacing: .14em;
          text-transform: uppercase; color: var(--pc-green); margin: 0 0 6px;
        }
        .d5-pin-title {
          font: 600 clamp(16px, 1.8vw, 26px)/1.15 var(--font-display);
          letter-spacing: -.015em; color: rgba(255,255,255,0.92); margin: 0;
        }
        .d5-pin-bl { left: 6%;  bottom: 18%; }
        .d5-pin-tl { left: 6%;  top: 18%; }
        .d5-pin-tr { right: 6%; top: 18%; }
        .d5-pin-br { right: 6%; bottom: 18%; }

        /* Frame counter */
        .d5-counter {
          position: absolute; right: var(--gutter); bottom: 96px; z-index: 4;
          display: flex; align-items: baseline; gap: 6px;
          font: 600 12px/1 var(--font-sans); letter-spacing: .04em;
          color: var(--fg-on-cream-3); will-change: opacity;
          font-variant-numeric: tabular-nums;
        }
        .d5-counter-cur { font: 600 34px/1 var(--font-display); letter-spacing: -.02em; color: var(--fg-on-cream-1); }
        .d5-counter-sep { font-size: 14px; opacity: .3; }
        .d5-counter-tot { opacity: .45; }

        /* Scroll cue */
        .d5-scroll-cue {
          position: absolute; bottom: 36px; left: 50%; transform: translateX(-50%);
          z-index: 3; text-align: center;
          font: 500 11px/1 var(--font-sans); letter-spacing: .12em;
          text-transform: uppercase; color: var(--fg-on-cream-3);
        }
        .d5-scroll-line {
          margin: 12px auto 0; width: 1px; height: 36px;
          background: var(--border-on-cream-strong); position: relative; overflow: hidden;
        }
        .d5-scroll-dot {
          position: absolute; top: -8px; left: -1px;
          width: 3px; height: 8px; background: var(--pc-green);
          animation: d5ScrollCue 2s ease-in-out infinite;
        }
        @keyframes d5ScrollCue {
          0%   { top: -8px; opacity: 0; }
          40%  { opacity: 1; }
          100% { top: 36px; opacity: 0; }
        }

        /* ── EXPLODED ────────────────────────── */
        .d5-exploded {
          position: relative; height: 420vh;
          background: linear-gradient(180deg, var(--pc-darker) 0%, var(--pc-dark) 50%, var(--pc-darker) 100%);
          contain: layout paint;
        }
        .d5-exp-sticky {
          position: sticky; top: 0; height: 100vh;
          padding: 56px var(--gutter) 40px;
          max-width: var(--container); margin: 0 auto;
          display: flex; flex-direction: column;
        }
        .d5-exp-header { text-align: center; margin-bottom: 28px; }
        .d5-exp-sub { font: 400 14px/1.5 var(--font-sans); color: var(--fg-3); margin: 10px auto 0; }
        .d5-exp-body {
          display: grid; grid-template-columns: 1.2fr 1fr;
          gap: 48px; flex: 1; min-height: 0; align-items: center;
        }
        .d5-exp-stage {
          position: relative; border-radius: var(--radius-2xl); overflow: hidden;
          background: radial-gradient(120% 80% at 50% 25%, #F6F5F0 0%, #ECECEA 55%, #DEDDD8 100%);
          isolation: isolate;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04), 0 40px 100px -30px rgba(0,0,0,0.5);
          aspect-ratio: 1 / 1; max-height: 58vh; width: 100%;
        }
        .d5-exp-frame {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          will-change: opacity, transform;
        }
        .d5-exp-frame img { width: 100%; height: 100%; object-fit: contain; padding: 20px; }
        .d5-exp-dots {
          position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%);
          z-index: 20; display: flex; gap: 4px; padding: 6px 10px;
          background: rgba(10,31,23,0.78); backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border-on-dark); border-radius: var(--radius-pill);
        }
        .d5-exp-dot {
          font: 600 11px/1 var(--font-sans); letter-spacing: .06em;
          color: var(--fg-4); padding: 5px 9px; border-radius: var(--radius-pill);
          transition: all var(--dur-base) var(--ease-out);
          font-variant-numeric: tabular-nums;
        }
        .d5-exp-dot.is-past { color: var(--fg-3); }
        .d5-exp-dot.is-on { color: var(--pc-darker); background: var(--pc-green); }
        .d5-exp-captions { position: relative; display: flex; flex-direction: column; justify-content: center; }
        .d5-exp-caption {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; justify-content: center; gap: 16px;
          will-change: opacity, transform;
        }
        .d5-exp-num { font: 600 12px/1 var(--font-sans); letter-spacing: .14em; color: var(--pc-green); text-transform: uppercase; }
        .d5-exp-title { font: 600 clamp(28px, 3.2vw, 44px)/1.05 var(--font-display); letter-spacing: -.02em; color: var(--fg-1); margin: 0; }
        .d5-exp-lead { font: 400 15px/1.6 var(--font-sans); color: var(--fg-2); margin: 0; max-width: 420px; }
        .d5-exp-pin-row {
          display: grid; grid-template-columns: 12px 1fr; gap: 12px; align-items: start;
          padding: 16px 18px; margin-top: 10px;
          background: rgba(58,213,128,0.06); border: 1px solid rgba(58,213,128,0.18);
          border-radius: var(--radius); max-width: 420px;
        }
        .d5-exp-pin-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--pc-green);
          box-shadow: 0 0 0 4px rgba(58,213,128,0.18), 0 0 14px rgba(58,213,128,0.6);
          margin-top: 5px;
        }
        .d5-exp-pin-label { font: 600 13px/1.2 var(--font-display); color: var(--fg-1); }
        .d5-exp-pin-detail { font: 400 12px/1.45 var(--font-sans); color: var(--fg-3); margin-top: 3px; }

        /* ── FIELD ───────────────────────────── */
        .d5-field { position: relative; height: 220vh; background: var(--pc-deepest); contain: layout paint; }
        .d5-field-sticky { position: sticky; top: 0; height: 100vh; width: 100%; overflow: hidden; }
        .d5-field-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .d5-field-veil {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(180deg, rgba(10,31,23,0.4) 0%, rgba(10,31,23,0.65) 50%, rgba(10,31,23,0.92) 100%);
        }
        .d5-field-content {
          position: relative; z-index: 2;
          max-width: var(--container); margin: 0 auto;
          padding: 80px var(--gutter); height: 100%;
          display: flex; flex-direction: column; justify-content: center;
        }
        .d5-field-title { margin: 0 0 52px; max-width: 800px; }
        .d5-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 28px; max-width: 960px;
        }
        .d5-stat { border-left: 2px solid var(--pc-green); padding-left: 18px; }
        .d5-stat-num {
          font: 600 clamp(38px, 4.8vw, 60px)/1 var(--font-display);
          letter-spacing: -.025em; color: var(--fg-1);
        }
        .d5-stat-label { font: 500 12px/1.3 var(--font-sans); color: var(--fg-3); margin-top: 8px; text-transform: uppercase; letter-spacing: .06em; }

        /* ── SPECS ───────────────────────────── */
        .d5-specs { background: var(--pc-cream); color: var(--fg-on-cream-1); padding: 140px var(--gutter); }
        .d5-specs-inner { max-width: var(--container); margin: 0 auto; display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
        .d5-specs-head .d5-eyebrow { color: var(--pc-green-2); }
        .d5-specs-grid { display: grid; gap: 0; }
        .d5-spec-row {
          display: grid; grid-template-columns: 1fr auto;
          align-items: baseline; padding: 22px 0;
          border-bottom: 1px solid var(--border-on-cream);
        }
        .d5-spec-row:last-child { border-bottom: 0; }
        .d5-spec-key { font: 500 16px/1.3 var(--font-sans); color: var(--fg-on-cream-2); }
        .d5-spec-val { display: flex; align-items: baseline; gap: 10px; text-align: right; }
        .d5-spec-val span { font: 600 34px/1 var(--font-display); letter-spacing: -.02em; color: var(--fg-on-cream-1); }
        .d5-spec-val em { font: 500 12px/1 var(--font-sans); color: var(--fg-on-cream-3); font-style: normal; }

        /* ── TIMELINE ────────────────────────── */
        .d5-timeline { background: var(--pc-darker); padding: 140px var(--gutter); }
        .d5-tl-inner { max-width: var(--container); margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
        .d5-tl-lead { font: 400 clamp(16px, 1.4vw, 19px)/1.55 var(--font-sans); color: var(--fg-2); max-width: 480px; margin: 16px 0 0; }
        .d5-tl-readout { display: flex; gap: 40px; margin-top: 36px; }
        .d5-tl-read { font: 500 12px/1.3 var(--font-sans); color: var(--fg-3); text-transform: uppercase; letter-spacing: .08em; }
        .d5-tl-read span { display: block; font: 600 52px/1 var(--font-display); color: var(--pc-green); letter-spacing: -.025em; margin-bottom: 6px; text-transform: none; font-variant-numeric: tabular-nums; }
        .d5-tl-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; aspect-ratio: 6/4; }
        .d5-panel {
          border-radius: 6px; background: var(--pc-mid); border: 1px solid rgba(255,255,255,0.04);
          position: relative; overflow: hidden;
          transition: background .35s var(--ease-out), border-color .35s var(--ease-out), box-shadow .35s var(--ease-out);
        }
        .d5-panel::before {
          content: ''; position: absolute; inset: 14%;
          background:
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px) 0 0 / 33.33% 100%,
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px) 0 0 / 100% 50%;
        }
        .d5-panel.is-clean {
          background: linear-gradient(145deg, #1a5d8a 0%, #2d8fc4 50%, #4fb8f5 100%);
          border-color: rgba(58,213,128,0.4);
          box-shadow: inset 0 0 18px rgba(255,255,255,0.18), 0 0 12px rgba(58,213,128,0.18);
        }
        .d5-panel.is-clean::before {
          background:
            linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px) 0 0 / 33.33% 100%,
            linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px) 0 0 / 100% 50%;
        }

        /* ── ACCESSORIES ─────────────────────── */
        .d5-acc { background: var(--pc-cream); color: var(--fg-on-cream-1); padding: 140px var(--gutter); }
        .d5-acc-inner { max-width: var(--container); margin: 0 auto; }
        .d5-acc-head { max-width: 600px; margin-bottom: 56px; }
        .d5-acc-head .d5-eyebrow { color: var(--pc-green-2); }
        .d5-acc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .d5-acc-card {
          background: white; border: 1px solid var(--border-on-cream);
          border-radius: var(--radius-md); padding: 26px;
          display: flex; flex-direction: column; gap: 10px;
          position: relative; text-decoration: none;
          transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
        }
        .d5-acc-card:hover { transform: translateY(-4px); border-color: var(--border-on-cream-strong); box-shadow: var(--shadow-lift); }
        .d5-acc-tag { position: absolute; top: 16px; right: 16px; background: var(--accent-fill); color: var(--pc-green-2); font: 600 10px/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase; padding: 5px 9px; border-radius: var(--radius-pill); }
        .d5-acc-thumb { width: 88px; height: 88px; border-radius: var(--radius); background: var(--pc-dark); display: flex; align-items: center; justify-content: center; padding: 16px; }
        .d5-acc-thumb svg { width: 100%; height: 100%; }
        .d5-acc-name { font: 600 17px/1.3 var(--font-display); color: var(--fg-on-cream-1); margin-top: 4px; }
        .d5-acc-spec { font: 400 13px/1.5 var(--font-sans); color: var(--fg-on-cream-2); flex: 1; }
        .d5-acc-cta { font: 600 12px/1 var(--font-sans); color: var(--pc-green-2); margin-top: 4px; }

        /* ── FAQ ─────────────────────────────── */
        .d5-faq { background: var(--pc-darker); padding: 140px var(--gutter); }
        .d5-faq-inner { max-width: 900px; margin: 0 auto; }
        .d5-faq-head { text-align: center; margin-bottom: 52px; }
        .d5-faq-list { display: flex; flex-direction: column; gap: 2px; }
        .d5-faq-item { border-bottom: 1px solid var(--border-on-dark); }
        .d5-faq-q {
          width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 22px;
          padding: 26px 4px; text-align: left;
          font: 600 18px/1.3 var(--font-display); color: var(--fg-1); letter-spacing: -.005em;
        }
        .d5-faq-icon { font: 400 26px/1 var(--font-display); color: var(--pc-green); transition: transform var(--dur-base) var(--ease-out); flex-shrink: 0; }
        .d5-faq-item.is-open .d5-faq-icon { transform: rotate(45deg); }
        .d5-faq-a { max-height: 0; overflow: hidden; transition: max-height .4s var(--ease-out); }
        .d5-faq-item.is-open .d5-faq-a { max-height: 240px; }
        .d5-faq-a p { padding: 0 4px 26px; color: var(--fg-2); font: 400 16px/1.6 var(--font-sans); max-width: 680px; margin: 0; }

        /* ── FINAL CTA ───────────────────────── */
        .d5-final {
          position: relative; min-height: 100vh;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(58,213,128,0.18) 0%, transparent 55%),
            var(--pc-deepest);
          display: flex; align-items: center;
          padding: 120px var(--gutter);
        }
        .d5-final-inner { max-width: 1100px; margin: 0 auto; text-align: center; }
        .d5-final-inner .d5-eyebrow { display: inline-block; }
        .d5-final-title {
          font: 600 clamp(52px, 10vw, 130px)/0.98 var(--font-display);
          letter-spacing: -.035em; margin: 18px 0 28px; color: var(--fg-1);
        }
        .d5-final-lead { margin: 0 auto 52px; color: var(--fg-2); max-width: 520px; }
        .d5-final-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 26px; }
        .d5-final-caption { font: 500 13px/1 var(--font-sans); color: var(--fg-3); letter-spacing: .005em; }

        /* ── Buttons ─────────────────────────── */
        .d5-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          padding: 16px 26px; border-radius: var(--radius-pill);
          background: var(--pc-green); color: var(--pc-dark);
          font: 700 14px/1 var(--font-sans);
          transition: background var(--dur-base), transform var(--dur-base);
          box-shadow: 0 8px 24px rgba(58,213,128,.20);
          white-space: nowrap; text-decoration: none;
        }
        .d5-btn-primary:hover { background: #4FE090; transform: translateY(-2px); }
        .d5-btn-ml {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          padding: 16px 26px; border-radius: var(--radius-pill);
          background: #FFE600; color: #2D3277;
          font: 700 14px/1 var(--font-sans);
          transition: background var(--dur-base), transform var(--dur-base);
          white-space: nowrap; text-decoration: none;
        }
        .d5-btn-ml:hover { background: #FFD400; transform: translateY(-2px); }

        /* ── PURCHASE BAR ────────────────────── */
        .d5-bar {
          position: fixed; left: 50%; transform: translateX(-50%);
          bottom: 18px; z-index: 90;
          background: rgba(10,31,23,0.93);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid var(--border-on-dark);
          border-radius: var(--radius-pill);
          padding: 8px 8px;
          display: flex; align-items: center; gap: 10px;
          max-width: calc(100vw - 32px);
          box-shadow: 0 18px 48px rgba(0,0,0,.45);
          transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out);
        }
        .d5-bar.is-hidden { opacity: 0; transform: translateX(-50%) translateY(40px); pointer-events: none; }
        .d5-bar-btn { padding: 13px 20px; font-size: 13px; }

        /* ── Responsive ──────────────────────── */
        @media (max-width: 820px) {
          .d5-hero    { height: 900vh; }
          .d5-exploded { height: 380vh; }
          .d5-exp-body { grid-template-columns: 1fr; gap: 20px; }
          .d5-exp-sticky { padding: 48px var(--gutter) 32px; }
          .d5-exp-stage { aspect-ratio: unset; max-height: unset; min-height: 40vh; }
          .d5-exp-captions { min-height: 28vh; }
          .d5-field { height: 200vh; }
          .d5-stats { grid-template-columns: repeat(2, 1fr); gap: 22px; }
          .d5-specs-inner { grid-template-columns: 1fr; gap: 36px; }
          .d5-tl-inner { grid-template-columns: 1fr; gap: 36px; }
          .d5-acc-grid { grid-template-columns: repeat(2, 1fr); }
          .d5-specs, .d5-timeline, .d5-acc, .d5-faq { padding: 96px var(--gutter); }
        }
        @media (max-width: 600px) {
          .d5-acc-grid { grid-template-columns: 1fr; }
          .d5-pin-bl, .d5-pin-tl, .d5-pin-tr, .d5-pin-br {
            left: var(--gutter); right: var(--gutter); bottom: 18%; top: auto; max-width: none;
          }
          .d5-pin-side-r { flex-direction: row; }
          .d5-pin-side-r .d5-pin-text { text-align: left; }
          .d5-pin-line { width: 28px; }
          .d5-counter { bottom: 60px; }
          .d5-tl-grid { gap: 6px; }
        }
      `}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<D5App />);
