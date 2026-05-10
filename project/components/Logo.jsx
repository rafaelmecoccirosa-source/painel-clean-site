// Logo: dot-pattern sun mark + "Painel Clean" wordmark
function Logo({ size = 32, color = "var(--pc-green)", textColor = "white", showText = true }) {
  // 8 dots in a circle with a center dot — "sun" mark
  const dots = [];
  const r = 11;
  const cx = 16, cy = 16;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    dots.push(
      <circle key={i} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r="1.6" fill={color} />
    );
  }
  return (
    <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="3" fill={color} />
        {dots}
      </svg>
      {showText && (
        <span
          className="font-display"
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: textColor,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}
        >
          Painel Clean
        </span>
      )}
    </a>
  );
}
