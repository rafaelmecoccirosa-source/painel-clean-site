// ===== Shared product page components =====
// Globals in scope: Icon, WhatsBrand, wa, useState, useEffect (from _config.jsx)
// PRODUCT and ALL_PRODUCTS are defined in the per-product app file loaded after this one.

function ProductHero({ p }) {
  return (
    <section style={{ background: "var(--pc-dark)", paddingTop: 76, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(58,213,128,.12), transparent 55%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", padding: "60px var(--gutter) 72px" }}>
        <div className="product-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,0.85fr)", gap: 64, alignItems: "center" }}>
          <div style={{ animation: "fadeUp 700ms ease both" }}>
            {/* Breadcrumb */}
            <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--fg-4)", marginBottom: 28 }}>
              <a href="/" style={{ color: "var(--fg-3)", transition: "color 200ms" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--fg-3)"}>Início</a>
              <Icon name="arrowRight" size={12} />
              <a href="/produtos" style={{ color: "var(--fg-3)", transition: "color 200ms" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--fg-3)"}>Produtos</a>
              <Icon name="arrowRight" size={12} />
              <span style={{ color: "var(--pc-green)" }}>{p.name}</span>
            </nav>

            {/* SKU badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: "var(--radius-pill)", background: "var(--accent-fill)", border: "1px solid var(--border-accent)", color: "var(--pc-green)", font: "var(--label-sm)", letterSpacing: "0.1em", marginBottom: 24, fontFamily: "ui-monospace, monospace" }}>
              {p.sku}
            </div>

            <h1 className="display" style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.02, color: "white", margin: "0 0 24px", letterSpacing: "-0.03em" }}>
              <span style={{ display: "block" }}>{p.headline1}</span>
              <span style={{ display: "block", color: "var(--pc-green)" }}>{p.headline2}</span>
            </h1>

            <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", maxWidth: 480, margin: "0 0 32px", lineHeight: 1.7 }}>{p.fullDesc}</p>

            {/* Quick spec pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
              {p.quickSpecs.map((s, i) => (
                <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-pill)", fontSize: 13.5, color: "var(--fg-2)" }}>
                  <Icon name={s.icon} size={14} stroke={2} />
                  {s.label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={wa(`Olá! Quero pedir a ${p.name} (${p.sku}).`)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16, padding: "18px 28px" }}>
                <WhatsBrand size={16} /> Pedir agora
              </a>
              <a href={wa(`Olá! Gostaria de falar com um especialista sobre a ${p.name} (${p.sku}).`)} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
                Falar com especialista
              </a>
            </div>
          </div>

          {/* Product image */}
          <div style={{ position: "relative", animation: "fadeUp 900ms 180ms ease both" }}>
            <div style={{ position: "absolute", inset: "10%", background: "radial-gradient(circle, rgba(58,213,128,0.22) 0%, transparent 65%)", filter: "blur(40px)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "relative", background: "linear-gradient(180deg, rgba(255,251,236,0.06) 0%, rgba(255,251,236,0.02) 100%)", borderRadius: "var(--radius-2xl)", border: "1px solid var(--border-on-dark)", padding: 40, overflow: "hidden" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", display: "block", objectFit: "contain", maxHeight: 400 }} />
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .product-hero-grid { grid-template-columns: 1fr !important; } .product-hero-grid > div:last-child { display: none; } }`}</style>
    </section>
  );
}

function StickyBuyBar({ p }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const f = () => setVisible(window.scrollY > 520);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div style={{
      position: "fixed", top: 76, left: 0, right: 0, zIndex: 50,
      background: "rgba(12,40,31,0.95)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-on-dark)",
      transform: visible ? "translateY(0)" : "translateY(-100%)",
      transition: "transform 300ms var(--ease-out)",
      padding: "12px 0",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div>
            <div className="display" style={{ fontSize: 16, color: "white", lineHeight: 1.2 }}>{p.name}</div>
            <div style={{ fontSize: 12, color: "var(--fg-4)", fontFamily: "ui-monospace, monospace", letterSpacing: "0.08em" }}>{p.sku}</div>
          </div>
          <div className="sticky-specs" style={{ display: "flex", gap: 16 }}>
            {p.quickSpecs.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "var(--fg-3)" }}>
                <Icon name={s.icon} size={12} stroke={2} />{s.label}
              </div>
            ))}
          </div>
        </div>
        <a href={wa(`Olá! Quero pedir a ${p.name} (${p.sku}).`)} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pc-green)", color: "var(--pc-dark)", fontWeight: 700, fontSize: 14, padding: "11px 20px", borderRadius: "var(--radius-md)", whiteSpace: "nowrap" }}>
          <WhatsBrand size={14} /> Pedir via WhatsApp
        </a>
      </div>
      <style>{`@media (max-width: 700px) { .sticky-specs { display: none !important; } }`}</style>
    </div>
  );
}

function SpecsSection({ p }) {
  return (
    <section style={{ background: "var(--pc-cream)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--pc-green-2)", marginBottom: 14 }}>Especificações</div>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", color: "var(--fg-on-cream-1)", margin: 0 }}>Ficha técnica</h2>
          </div>
        </div>
        <div className="specs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {p.specs.map((s, i) => (
            <div key={i} style={{ padding: "24px 24px", background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-on-cream-3)", marginBottom: 8 }}>{s.k}</div>
              <div className="display" style={{ fontSize: 22, color: "var(--fg-on-cream-1)", letterSpacing: "-0.01em" }}>{s.v}</div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 720px) { .specs-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 480px) { .specs-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function BenefitsSection({ p }) {
  return (
    <section style={{ background: "var(--pc-darker)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="eyebrow center" style={{ marginBottom: 16 }}>Por que escolher</div>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "white", margin: 0 }}>Vantagens da {p.name}</h2>
        </div>
        <div className="benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {p.benefits.map((b, i) => (
            <div key={i} style={{ padding: "32px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--accent-fill)", color: "var(--pc-green)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Icon name={b.icon} size={22} />
              </div>
              <div className="display" style={{ fontSize: 18, fontWeight: 600, color: "white", marginBottom: 10 }}>{b.title}</div>
              <p style={{ margin: 0, font: "var(--body-sm)", color: "var(--fg-3)", lineHeight: 1.65 }}>{b.desc}</p>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 720px) { .benefits-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function AccessoriesSection({ p }) {
  return (
    <section style={{ background: "var(--pc-cream)", padding: "80px 0", borderTop: "1px solid var(--border-on-cream)" }}>
      <div className="container">
        <div style={{ marginBottom: 40 }}>
          <div className="eyebrow" style={{ color: "var(--pc-green-2)", marginBottom: 14 }}>Compatíveis</div>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", color: "var(--fg-on-cream-1)", margin: 0 }}>Acessórios recomendados</h2>
        </div>
        <div className="acc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 760 }}>
          {p.accessories.map((a, i) => (
            <div key={i} style={{ padding: "24px", background: "white", border: "1px solid var(--border-on-cream)", borderRadius: "var(--radius-xl)", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--accent-fill)", color: "var(--pc-green-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="package" size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: "var(--fg-on-cream-1)", marginBottom: 3 }}>{a.name}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fg-on-cream-3)", marginBottom: 6 }}>{a.sku}</div>
                <div style={{ font: "var(--body-sm)", color: "var(--fg-on-cream-2)", marginBottom: 12 }}>{a.desc}</div>
                <a href={wa(`Olá! Quero adicionar o acessório ${a.name} (${a.sku}) ao meu pedido.`)} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 600, color: "var(--pc-green-2)", transition: "color 200ms" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--pc-dark)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--pc-green-2)"}>
                  <WhatsBrand size={13} /> Adicionar ao pedido
                </a>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 560px) { .acc-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function MiniCompare({ allProducts }) {
  const compareRows = [
    { label: "Velocidade", vals: ["260 p/h", "200 p/h", "160 p/h"] },
    { label: "Motor", vals: ["Brushless", "Brushless", "Brushless"] },
    { label: "Cabo", vals: ["7,5m", "7,5m", "7,5m"] },
    { label: "Ideal para", vals: ["Grandes usinas", "Uso geral", "Difícil acesso"] },
  ];
  return (
    <section style={{ background: "var(--pc-darker)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="eyebrow center" style={{ marginBottom: 14 }}>Linha completa</div>
          <h2 className="display" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", color: "white", margin: 0 }}>Compare os modelos</h2>
        </div>
        <style>{`@media (max-width: 460px) { .mini-cmp { min-width: 0 !important; } .mini-cmp td, .mini-cmp th { padding: 10px 8px !important; font-size: 12px !important; } }`}</style>
        <div style={{ overflowX: "auto", maxWidth: "100%" }}>
          <table className="mini-cmp" style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
            <thead>
              <tr>
                <th style={{ padding: "14px 20px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "var(--fg-4)", textTransform: "uppercase", letterSpacing: "0.1em", border: "none" }}></th>
                {allProducts.map((pr, i) => (
                  <th key={i} style={{ padding: "14px 20px", textAlign: "center", background: pr.current ? "var(--accent-fill)" : "rgba(255,255,255,0.03)", border: "1px solid " + (pr.current ? "var(--border-accent)" : "var(--border-on-dark)"), borderBottom: "none", color: pr.current ? "var(--pc-green)" : "white", fontSize: 15, fontWeight: 600, borderRadius: "var(--radius-md) var(--radius-md) 0 0" }}>
                    <a href={pr.href} style={{ color: "inherit", textDecoration: "none" }}>{pr.name}</a>
                    <div style={{ fontSize: 11, fontWeight: 400, color: pr.current ? "var(--pc-green)" : "var(--fg-4)", letterSpacing: "0.08em", marginTop: 2 }}>{pr.sku}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, ri) => (
                <tr key={ri}>
                  <td style={{ padding: "14px 20px", fontSize: 13.5, color: "var(--fg-3)", borderTop: "1px solid var(--border-on-dark)" }}>{row.label}</td>
                  {allProducts.map((pr, ci) => (
                    <td key={ci} style={{ padding: "14px 20px", textAlign: "center", fontSize: 14, fontWeight: 600, color: pr.current ? "var(--pc-green)" : "var(--fg-2)", background: pr.current ? "var(--accent-fill-soft)" : "transparent", borderTop: "1px solid var(--border-on-dark)", border: "1px solid " + (pr.current ? "var(--border-accent)" : "var(--border-on-dark)") }}>
                      {row.vals[ci]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={{ padding: "14px 20px" }}></td>
                {allProducts.map((pr, i) => (
                  <td key={i} style={{ padding: "14px 20px", textAlign: "center", background: pr.current ? "var(--accent-fill-soft)" : "transparent", border: "1px solid " + (pr.current ? "var(--border-accent)" : "var(--border-on-dark)"), borderTop: "none", borderRadius: "0 0 var(--radius-md) var(--radius-md)" }}>
                    <a href={wa(`Olá! Tenho interesse no modelo ${pr.name} (${pr.sku}).`)} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "9px 14px", borderRadius: "var(--radius-md)", background: pr.current ? "var(--pc-green)" : "rgba(255,255,255,0.06)", color: pr.current ? "var(--pc-dark)" : "var(--fg-2)", transition: "all 200ms" }}>
                      <WhatsBrand size={13} /> Pedir
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection({ p }) {
  return (
    <section style={{ background: "var(--pc-cream)", padding: "80px 0", borderTop: "1px solid var(--border-on-cream)" }}>
      <div className="container">
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: 24 }}>
            {Array.from({ length: p.testimonial.stars }).map((_, i) => (
              <span key={i} style={{ color: "#F4B83A", fontSize: 20 }}>★</span>
            ))}
          </div>
          <blockquote style={{ margin: "0 0 28px", font: "var(--body-lg)", color: "var(--fg-on-cream-1)", lineHeight: 1.7, fontStyle: "italic" }}>
            "{p.testimonial.text}"
          </blockquote>
          <div style={{ fontWeight: 600, fontSize: 15, color: "var(--fg-on-cream-1)" }}>{p.testimonial.name}</div>
          <div style={{ fontSize: 13, color: "var(--fg-on-cream-3)" }}>{p.testimonial.role} · {p.testimonial.city}</div>
        </div>
      </div>
    </section>
  );
}

function CtaFinalSection({ p }) {
  return (
    <section style={{ background: "var(--pc-darker)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(58,213,128,0.12), transparent 70%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", textAlign: "center", maxWidth: 600 }}>
        <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.06, color: "white", margin: "0 0 18px", letterSpacing: "-0.03em" }}>
          Pronto para limpar mais<br />em menos tempo?
        </h2>
        <p style={{ font: "var(--body-lg)", color: "var(--fg-3)", margin: "0 0 36px" }}>Fale com um especialista e receba um orçamento personalizado.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={wa(`Olá! Quero pedir a ${p.name} (${p.sku}).`)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16 }}>
            <WhatsBrand size={16} /> Pedir agora
          </a>
          <a href="/curso" className="btn-ghost-dark">Conhecer o treinamento</a>
        </div>
      </div>
    </section>
  );
}

function ProductNav({ p }) {
  return (
    <div style={{ background: "var(--pc-deepest)", borderTop: "1px solid var(--border-on-dark-soft)", padding: "24px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {p.prev ? (
          <a href={p.prev.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--fg-3)", transition: "color 200ms" }}
            onMouseEnter={e => e.currentTarget.style.color = "white"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--fg-3)"}>
            <Icon name="arrowLeft" size={16} /> {p.prev.label}
          </a>
        ) : <div />}
        <a href="/produtos" style={{ fontSize: 13, color: "var(--fg-4)", transition: "color 200ms" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--fg-2)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--fg-4)"}>
          Ver todos os produtos
        </a>
        {p.next ? (
          <a href={p.next.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--fg-3)", transition: "color 200ms" }}
            onMouseEnter={e => e.currentTarget.style.color = "white"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--fg-3)"}>
            {p.next.label} <Icon name="arrowRight" size={16} />
          </a>
        ) : <div />}
      </div>
    </div>
  );
}

function ProductPageApp() {
  return (
    <div>
      <Nav />
      <StickyBuyBar p={PRODUCT} />
      <ProductHero p={PRODUCT} />
      <SpecsSection p={PRODUCT} />
      <BenefitsSection p={PRODUCT} />
      <AccessoriesSection p={PRODUCT} />
      <MiniCompare allProducts={ALL_PRODUCTS} />
      <TestimonialSection p={PRODUCT} />
      <CtaFinalSection p={PRODUCT} />
      <ProductNav p={PRODUCT} />
      <Footer />
    </div>
  );
}
