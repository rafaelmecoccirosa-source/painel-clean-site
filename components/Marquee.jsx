function Marquee() {
  const t = useT();
  const items = ["Montada no Brasil", "Motor brushless até 680 RPM", "Até 260 painéis por hora", "Cabo de 7,5 metros", "Garantia de 1 ano em todo Brasil", "Maior estoque de partes e peças", "Assistência Técnica", "Suporte via WhatsApp"];
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
