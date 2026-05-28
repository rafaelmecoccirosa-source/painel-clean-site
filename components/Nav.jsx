function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [prodMobileOpen, setProdMobileOpen] = useState(false);
  const dropTimer = useRef(null);

  // Pages that start with a light/cream hero — nav needs dark text when unscrolled
  const lightPage = ['/produtos', '/escova-rotativa-g5', '/escova-solo-s5', '/curso'].some(
    p => window.location.pathname === p || window.location.pathname === p + '/'
  );

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const openDrop  = () => { clearTimeout(dropTimer.current); setDropOpen(true); };
  const closeDrop = () => { dropTimer.current = setTimeout(() => setDropOpen(false), 120); };

  // True when nav sits on light bg and has no dark backdrop yet
  const textDark = lightPage && !scrolled && !open;

  const prodLinks = [
    { label: "Escova Dupla PRO", href: "/escova-dupla-d5", eyebrow: "Mais vendida" },
    { label: "Escovas",          href: "/produtos",        eyebrow: "Linha completa" },
    { label: "Acessórios",       href: "/produtos#acessorios", eyebrow: "Refis e peças" },
  ];

  const links = [
    { label: "Aplicações", href: "/#aplicacoes" },
    { label: "Comparativo", href: "/#comparativo" },
    { label: "Curso", href: "/curso" },
    { label: "Plataforma", href: "/#plataforma" },
    { label: "Calculadora", href: "/#roi" },
  ];

  return (
    <header data-text-dark={textDark ? "1" : undefined} style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      background: scrolled || open ? "rgba(12,40,31,0.97)" : "transparent",
      backdropFilter: scrolled || open ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled || open ? "blur(14px)" : "none",
      borderBottom: scrolled || open ? "1px solid var(--border-on-dark)" : "1px solid transparent",
      transition: "all 240ms var(--ease-out)",
    }}>
      <div className="container" style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo textColor={textDark ? "var(--pc-dark)" : "white"} />

        {/* Desktop nav */}
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>

          {/* Produtos dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <a href="/produtos" className="nav-link nav-link-drop">
              Produtos
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 4, opacity: 0.5, transition: "transform 200ms", transform: dropOpen ? "rotate(180deg)" : "none" }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Dropdown panel */}
            <div style={{
              position: "absolute",
              top: "calc(100% + 14px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(10,28,21,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid var(--border-on-dark)",
              borderRadius: "var(--radius-md)",
              padding: "8px",
              minWidth: 240,
              boxShadow: "0 20px 48px rgba(0,0,0,0.40)",
              opacity: dropOpen ? 1 : 0,
              pointerEvents: dropOpen ? "auto" : "none",
              transform: `translateX(-50%) translateY(${dropOpen ? 0 : -6}px)`,
              transition: "opacity 180ms var(--ease-out), transform 180ms var(--ease-out)",
            }}>
              {/* Arrow */}
              <div style={{
                position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)",
                width: 12, height: 6, overflow: "hidden",
              }}>
                <div style={{ width: 12, height: 12, background: "rgba(10,28,21,0.98)", border: "1px solid var(--border-on-dark)", transform: "rotate(45deg) translate(-2px, -2px)", borderRadius: 2 }} />
              </div>

              {prodLinks.map(l => (
                <a key={l.href} href={l.href} className="nav-drop-item">
                  <span className="nav-drop-eyebrow">{l.eyebrow}</span>
                  <span className="nav-drop-label">{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="nav-cta"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pc-green)", color: "var(--pc-dark)", fontWeight: 700, fontSize: 14, padding: "11px 18px", borderRadius: "var(--radius-pill)", transition: "all 180ms" }}>
            <WhatsBrand size={14} /> <span className="nav-cta-label">WhatsApp</span>
          </a>
          {/* Hamburger — mobile only */}
          <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu"
            style={{ display: "none", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 40, height: 40, gap: 5, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}>
            {[
              open ? "rotate(45deg) translate(5px, 5px)" : "none",
              "none",
              open ? "rotate(-45deg) translate(5px, -5px)" : "none",
            ].map((t, i) => (
              <span key={i} style={{ display: "block", width: 22, height: 2, background: textDark ? "var(--pc-dark)" : "white", borderRadius: 2, transition: "all 240ms", transform: t, opacity: i === 1 && open ? 0 : 1 }} />
            ))}
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
        {/* Produtos accordion */}
        <div>
          <button
            onClick={() => setProdMobileOpen(v => !v)}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "14px 24px", color: "var(--fg-2)", fontSize: 16, fontWeight: 500, background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}
          >
            Produtos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: "transform 200ms", transform: prodMobileOpen ? "rotate(180deg)" : "none" }}>
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {prodMobileOpen && (
            <div style={{ background: "rgba(0,0,0,0.2)" }}>
              {prodLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ display: "flex", flexDirection: "column", gap: 2, padding: "12px 32px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "var(--pc-green)", textTransform: "uppercase" }}>{l.eyebrow}</span>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "var(--fg-1)" }}>{l.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

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
        .nav-link {
          color: rgba(255,255,255,0.55);
          font-size: 14px;
          font-weight: 500;
          position: relative;
          transition: color 200ms;
          display: inline-flex;
          align-items: center;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: white;
          transition: width 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover { color: white; }
        .nav-link:hover::after { width: 100%; }
        .nav-link-drop::after { display: none; }
        .nav-drop-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          transition: background 150ms;
          text-decoration: none;
        }
        .nav-drop-item:hover { background: rgba(255,255,255,0.06); }
        .nav-drop-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--pc-green);
        }
        .nav-drop-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--fg-1);
        }
        .nav-cta:hover {
          background: #4FE090 !important;
          transform: translateY(-1px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(58,213,128,0.28) !important;
        }
        /* Light-hero pages: dark text when nav is transparent */
        [data-text-dark="1"] .nav-link { color: rgba(12,40,31,0.60); }
        [data-text-dark="1"] .nav-link:hover { color: var(--pc-dark); }
        [data-text-dark="1"] .nav-link::after { background: var(--pc-dark); }
        @media (max-width: 980px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-cta-label { display: none; }
        }
      `}</style>
    </header>
  );
}
