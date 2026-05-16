function SocialProof() {
  const stats = [
    { k: "+200", v: "técnicos credenciados" },
    { k: "13",   v: "cidades atendidas" },
    { k: "94%",  v: "renovação anual" },
    { k: "4,9",  v: "avaliação média" },
  ];
  const quotes = [
    { who: "Marcos Vieira", role: "Técnico credenciado · Joinville/SC", text: "Em 2 meses paguei o investimento na D5. Hoje atendo 4 clientes fixos e tenho lista de espera. O ticket subiu 40%." },
    { who: "Paulo Andrade", role: "Dono de usina · Indaial/SC", text: "Antes limpava com pano e mangueira, perdia o dia inteiro. Com técnico Painel Clean a instalação volta a 100% em 2h." },
    { who: "Camila Reis", role: "Instaladora · Curitiba/PR", text: "O treinamento entrega o que promete. Em uma semana eu já estava precificando e fechando contratos." },
  ];

  const parseStat = (raw) => {
    const prefix = raw.startsWith("+") ? "+" : "";
    const suffix = raw.endsWith("%") ? "%" : "";
    const numStr = raw.replace("+", "").replace("%", "").replace(",", ".");
    const num = parseFloat(numStr);
    const decimals = numStr.includes(".") ? 1 : 0;
    return { prefix, suffix, num, decimals };
  };

  const [counts, setCounts] = useState(() =>
    stats.map(s => {
      const { prefix, suffix } = parseStat(s.k);
      return prefix + "0" + suffix;
    })
  );

  const statsRef = useRef(null);
  const quotesRef = useRevealChildren(80);

  useLayoutEffect(() => {
    const grid = statsRef.current;
    if (!grid) return;
    const children = Array.from(grid.children);
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      child.style.transition = `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`;
    });
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      children.forEach(child => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      });
      stats.forEach((s, statIdx) => {
        const { prefix, suffix, num, decimals } = parseStat(s.k);
        const startOffset = statIdx * 80;
        const startTime = performance.now() + startOffset;
        const tick = (now) => {
          if (now < startTime) { requestAnimationFrame(tick); return; }
          const t = Math.min(1, (now - startTime) / 800);
          const ease = 1 - (1 - t) ** 3;
          const cur = num * ease;
          const fmt = decimals
            ? cur.toFixed(1).replace(".", ",")
            : Math.round(cur).toString();
          setCounts(prev => {
            const next = [...prev];
            next[statIdx] = prefix + fmt + suffix;
            return next;
          });
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
      obs.disconnect();
    }, { threshold: 0.2 });
    obs.observe(grid);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "var(--pc-darker)", color: "white", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 18, font: "var(--eyebrow)", textTransform: "uppercase", letterSpacing: "var(--tracking-eyebrow)", color: "var(--pc-green)" }}>
            <span style={{ width: 28, height: 1, background: "var(--pc-green)" }} />
            Quem já vive disso
            <span style={{ width: 28, height: 1, background: "var(--pc-green)" }} />
          </div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0, lineHeight: 1.1 }}>
            Painel Clean é a escolha de <span style={{ color: "var(--pc-green)" }}>quem trabalha sério.</span>
          </h2>
        </div>

        <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 56 }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "32px 28px", background: "var(--pc-dark)", border: "1px solid var(--border-accent)", borderRadius: "var(--radius-lg)", textAlign: "center" }}>
              <div className="display" style={{ fontSize: 48, fontWeight: 600, color: "var(--pc-green)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>{counts[i]}</div>
              <div style={{ fontSize: 13, color: "var(--fg-3)" }}>{s.v}</div>
            </div>
          ))}
        </div>

        <div ref={quotesRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="quotes-grid">
          {quotes.map((q, i) => (
            <figure key={i} style={{ margin: 0, padding: "32px 28px", background: "var(--pc-dark)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-lg)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 18, color: "var(--pc-green)" }}>
                {[1, 2, 3, 4, 5].map(n => <Icon key={n} name="star" size={14} />)}
              </div>
              <blockquote className="display" style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.45, color: "white", margin: "0 0 24px", flex: 1 }}>"{q.text}"</blockquote>
              <figcaption style={{ paddingTop: 18, borderTop: "1px solid var(--border-on-dark)" }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "white", marginBottom: 2 }}>{q.who}</div>
                <div style={{ fontSize: 13, color: "var(--fg-4)" }}>{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .stats-grid, .quotes-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .stats-grid, .quotes-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
