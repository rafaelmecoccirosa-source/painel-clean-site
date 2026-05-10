const faqs = [
  {
    q: "As escovas danificam as placas?",
    a: "Não. As cerdas são macias e desenvolvidas especificamente para vidro fotovoltaico. O sistema usa apenas água, sem produtos químicos que possam degradar a superfície ou os selantes.",
  },
  {
    q: "Quanto de água é consumido por limpeza?",
    a: "O sistema consome até 80% menos água que métodos tradicionais. A motobomba controla o fluxo com precisão, garantindo limpeza eficiente com mínimo desperdício.",
  },
  {
    q: "Preciso de experiência prévia para usar?",
    a: "Não. O treinamento Painel Clean cobre tudo do zero — operação, segurança em altura, precificação, captação de clientes e relatórios profissionais. Acesso vitalício por R$ 39,90.",
  },
  {
    q: "Como funciona o suporte pós-venda?",
    a: "Atendimento via WhatsApp em horário comercial. Garantia de 1 ano no equipamento, peças de reposição em pronta entrega e suporte técnico contínuo.",
  },
  {
    q: "Vocês entregam para todo o Brasil?",
    a: "Sim. Trabalhamos com transportadoras parceiras para entrega em todo território nacional. Prazo médio de 5 a 10 dias úteis dependendo da região.",
  },
];

function FaqItem({ q, a, open, onClick }) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--pc-line)",
        transition: "background 200ms",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "26px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          textAlign: "left",
          color: "var(--pc-dark)",
        }}
      >
        <span
          className="font-display"
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: open ? "var(--pc-green)" : "transparent",
            border: open ? "1px solid var(--pc-green)" : "1px solid var(--pc-line)",
            color: open ? "var(--pc-dark)" : "var(--pc-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 240ms",
            transform: open ? "rotate(45deg)" : "rotate(0)",
          }}
        >
          <i data-lucide="plus" style={{ width: 16, height: 16 }}></i>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 240 : 0,
          overflow: "hidden",
          transition: "max-height 360ms ease, padding 360ms ease, opacity 240ms ease",
          opacity: open ? 1 : 0,
          paddingBottom: open ? 28 : 0,
        }}
      >
        <p
          style={{
            margin: 0,
            paddingRight: 60,
            fontSize: 15.5,
            lineHeight: 1.65,
            color: "rgba(15,56,43,0.65)",
            maxWidth: 720,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: "var(--pc-cream-2)", padding: "120px 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
            gap: 80,
            alignItems: "flex-start",
          }}
          className="faq-grid"
        >
          <div style={{ position: "sticky", top: 100 }} className="faq-side">
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--pc-green-soft)",
                marginBottom: 18,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ width: 28, height: 1, background: "var(--pc-green-soft)" }} />
              Perguntas frequentes
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.4vw, 56px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--pc-dark)",
                margin: 0,
                marginBottom: 24,
              }}
            >
              O essencial, <br />
              <span style={{ color: "rgba(15,56,43,0.5)" }}>antes de comprar.</span>
            </h2>
            <p style={{ color: "rgba(15,56,43,0.6)", fontSize: 16, lineHeight: 1.6, margin: 0, marginBottom: 28 }}>
              Não achou o que procurava? Fale direto com a gente pelo WhatsApp — respondemos em minutos.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--pc-green-soft)",
                fontWeight: 600,
                fontSize: 14.5,
              }}
            >
              Falar com nosso time
              <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i>
            </a>
          </div>

          <div>
            {faqs.map((f, i) => (
              <FaqItem
                key={i}
                q={f.q}
                a={f.a}
                open={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .faq-side { position: static !important; }
        }
      `}</style>
    </section>
  );
}
