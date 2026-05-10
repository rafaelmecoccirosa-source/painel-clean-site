function Marquee() {
  const t = useT();
  const items = ["Motor brushless 350 RPM", "Sem produtos químicos", "260 painéis por hora", "+30% mais geração", "Cabo até 7,5m", "Garantia de 1 ano", "Suporte via WhatsApp", "Made in Brasil"];
  const all = [...items, ...items];
  return (
    <div style={{ background: "var(--pc-dark)", borderTop: "1px solid var(--border-on-dark-soft)", borderBottom: "1px solid var(--border-on-dark-soft)", padding: "22px 0", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 56, whiteSpace: "nowrap", animation: `marquee ${t.marqueeSpeed}s linear infinite`, width: "max-content" }}>
        {all.map((it, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 18, color: "var(--fg-2)", font: "var(--body)", fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pc-green)" }} />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
