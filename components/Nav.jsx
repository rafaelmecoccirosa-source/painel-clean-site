function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [
    { label: "Produtos", href: "/produtos" },
    { label: "Comparativo", href: "#comparativo" },
    { label: "Treinamento", href: "#treinamento" },
    { label: "Curso", href: "/curso" },
    { label: "Plataforma", href: "#plataforma" },
    { label: "Calculadora", href: "#roi" },
  ];
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      background: scrolled ? "rgba(12,40,31,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-on-dark)" : "1px solid transparent",
      transition: "all 240ms var(--ease-out)",
    }}>
      <div className="container" style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo />
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: "var(--fg-2)", fontSize: 14, fontWeight: 500, transition: "color 200ms" }}
              onMouseEnter={e => e.currentTarget.style.color = "white"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--fg-2)"}>{l.label}</a>
          ))}
        </nav>
        <a href={wa()} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pc-green)", color: "var(--pc-dark)", fontWeight: 700, fontSize: 14, padding: "11px 18px", borderRadius: "var(--radius-pill)", transition: "all 180ms" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#4FE090"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--pc-green)"; e.currentTarget.style.transform = "translateY(0)"; }}>
          <WhatsBrand size={14} /> WhatsApp
        </a>
      </div>
      <style>{`@media (max-width: 980px) { .nav-links { display:none !important; } }`}</style>
    </header>
  );
}
