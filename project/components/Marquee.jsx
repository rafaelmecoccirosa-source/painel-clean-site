// Animated marquee strip below hero — visual energy + key claims
function Marquee() {
  const items = [
    "Motor brushless 350 RPM",
    "Sem produtos químicos",
    "260 painéis por hora",
    "+30% mais geração",
    "Cabo até 7,5m",
    "Garantia de 1 ano",
    "Suporte via WhatsApp",
    "Made in Brasil",
  ];
  const all = [...items, ...items];
  return (
    <div
      style={{
        background: "var(--pc-dark)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "22px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 56,
          whiteSpace: "nowrap",
          animation: "marquee 40s linear infinite",
          width: "max-content",
        }}
      >
        {all.map((it, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              color: "rgba(255,255,255,0.72)",
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "-0.005em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--pc-green)",
              }}
            />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
