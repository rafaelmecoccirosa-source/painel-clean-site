function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const links = [
    { label: "Produtos", href: "/produtos" },
    { label: "Aplicações", href: "#aplicacoes" },
    { label: "Comparativo", href: "#comparativo" },
    { label: "Treinamento", href: "#treinamento" },
    { label: "Curso", href: "/curso" },
    { label: "Plataforma", href: "#plataforma" },
    { label: "Calculadora", href: "#roi" },
  ];
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      background: scrolled || open ? "rgba(12,40,31,0.97)" : "transparent",
      backdropFilter: scrolled || open ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled || open ? "blur(14px)" : "none",
      borderBottom: scrolled || open ? "1px solid var(--border-on-dark)" : "1px solid transparent",
      transition: "all 240ms var(--ease-out)",
    }}>
      <div className="container" style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo />
        {/* Desktop nav */}
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: "var(--fg-2)", fontSize: 14, fontWeight: 500, transition: "color 200ms" }}
              onMouseEnter={e => e.currentTarget.style.color = "white"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--fg-2)"}>{l.label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="nav-cta"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pc-green)", color: "var(--pc-dark)", fontWeight: 700, fontSize: 14, padding: "11px 18px", borderRadius: "var(--radius-pill)", transition: "all 180ms" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#4FE090"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--pc-green)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <WhatsBrand size={14} /> <span className="nav-cta-label">WhatsApp</span>
          </a>
          {/* Hamburger — mobile only */}
          <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu"
            style={{ display: "none", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 40, height: 40, gap: 5, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}>
            <span style={{ display: "block", width: 22, height: 2, background: "white", borderRadius: 2, transition: "all 240ms", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span style={{ display: "block", width: 22, height: 2, background: "white", borderRadius: 2, transition: "all 240ms", opacity: open ? 0 : 1 }}></span>
            <span style={{ display: "block", width: 22, height: 2, background: "white", borderRadius: 2, transition: "all 240ms", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
          </button>
        </div>
      </div>
      {/* Mobile menu drawer */}
      <nav className="nav-mobile" style={{
        display: open ? "flex" : "none",
        flexDirection: "column",
        padding: "24px 0 32px",
        borderTop: "1px solid var(--border-on-dark)",
      }}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}
            style={{ display: "block", padding: "14px 24px", color: "var(--fg-2)", fontSize: 16, fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {l.label}
          </a>
        ))}
        <div style={{ padding: "20px 24px 0" }}>
          <a href={wa()} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pc-green)", color: "var(--pc-dark)", fontWeight: 700, fontSize: 15, padding: "13px 22px", borderRadius: "var(--radius-pill)" }}>
            <WhatsBrand size={15} /> Falar no WhatsApp
          </a>
        </div>
      </nav>
      <style>{`
        @media (max-width: 980px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-cta-label { display: none; }
        }
      `}</style>
    </header>
  );
}
