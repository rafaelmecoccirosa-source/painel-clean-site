const faqs = [
  { q: "As escovas danificam as placas?", a: "Não. As cerdas são macias e desenvolvidas especificamente para vidro fotovoltaico. O sistema usa apenas água, sem produtos químicos que possam degradar a superfície ou os selantes." },
  { q: "Quanto de água é consumido por limpeza?", a: "O sistema consome até 80% menos água que métodos tradicionais. A motobomba controla o fluxo com precisão." },
  { q: "Preciso de experiência prévia para usar?", a: "Não. O treinamento Painel Clean cobre tudo do zero — operação, segurança em altura, precificação, captação de clientes e relatórios. Acesso vitalício por R$ 39,90." },
  { q: "Como funciona o suporte pós-venda?", a: "Atendimento via WhatsApp em horário comercial. Garantia de 1 ano no equipamento, peças de reposição em pronta entrega e suporte técnico contínuo." },
  { q: "Vocês entregam para todo o Brasil?", a: "Sim. Trabalhamos com transportadoras parceiras para entrega em todo território nacional. Prazo médio de 5 a 10 dias úteis." },
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: "#F6F1DE", padding: "80px 0" }}>
      <div className="container">
        <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.25fr)", gap: 64, alignItems: "start" }}>
          <div className="faq-side" style={{ position: "sticky", top: 120 }}>
            <div className="eyebrow" style={{ color: "var(--pc-green-2)", marginBottom: 18 }}>Perguntas frequentes</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 3.8vw, 48px)", lineHeight: 1.05, color: "var(--fg-on-cream-1)", margin: "0 0 24px" }}>O essencial,<br /><span style={{ color: "var(--fg-on-cream-3)" }}>antes de comprar.</span></h2>
            <p style={{ color: "var(--fg-on-cream-2)", font: "var(--body)", margin: "0 0 28px" }}>Não achou o que procurava? Fale direto com a gente pelo WhatsApp.</p>
            <a href={wa()} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--pc-green-2)", fontWeight: 600, fontSize: 14.5 }}>
              Falar com nosso time<Icon name="arrowRight" size={14} />
            </a>
          </div>

          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border-on-cream)" }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", padding: "22px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, textAlign: "left", color: "var(--fg-on-cream-1)" }}>
                  <span className="display" style={{ fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 500, letterSpacing: "-0.01em" }}>{f.q}</span>
                  <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", background: open === i ? "var(--pc-green)" : "transparent", border: open === i ? "1px solid var(--pc-green)" : "1px solid var(--border-on-cream)", color: "var(--fg-on-cream-1)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 240ms", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>
                    <Icon name="plus" size={14} />
                  </span>
                </button>
                <div style={{ maxHeight: open === i ? 240 : 0, overflow: "hidden", transition: "max-height 360ms ease, opacity 240ms ease", opacity: open === i ? 1 : 0, paddingBottom: open === i ? 24 : 0 }}>
                  <p style={{ margin: 0, paddingRight: 52, font: "var(--body)", color: "var(--fg-on-cream-2)", maxWidth: 680 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .faq-side { position: static !important; } }`}</style>
    </section>
  );
}
