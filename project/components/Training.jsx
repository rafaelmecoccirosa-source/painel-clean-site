function Training() {
  const features = [
    { icon: "graduation-cap", t: "Acesso vitalício", d: "Estude no seu ritmo, sem prazo." },
    { icon: "shield-check", t: "Certificado", d: "Conclusão reconhecida por usinas." },
    { icon: "headphones", t: "Suporte WhatsApp", d: "Tire dúvidas com técnicos sêniores." },
    { icon: "refresh-cw", t: "Sempre atualizado", d: "Material renovado a cada novo módulo." },
  ];
  return (
    <section id="treinamento" style={{ background: "var(--pc-darker)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative gradient */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(58,213,128,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
            gap: 80,
            alignItems: "center",
          }}
          className="training-grid"
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--pc-green)",
                marginBottom: 18,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ width: 28, height: 1, background: "var(--pc-green)" }} />
              Treinamento online
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.6vw, 60px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "white",
                margin: 0,
                marginBottom: 24,
              }}
            >
              Ganhe mais por hora <br />
              <span style={{ color: "var(--pc-green)" }}>que um motorista de app.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", maxWidth: 520, marginBottom: 40 }}>
              Do zero ao primeiro cliente em menos de uma semana. Operação, segurança em altura, precificação e
              como fechar contratos recorrentes com usinas e condomínios.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 18,
                marginBottom: 40,
              }}
              className="training-features"
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 14,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(58,213,128,0.12)",
                      color: "var(--pc-green)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i data-lucide={f.icon} style={{ width: 18, height: 18 }}></i>
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 600, fontSize: 14.5, marginBottom: 3 }}>
                      {f.t}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pricing card */}
          <div
            style={{
              background: "linear-gradient(155deg, #14513C 0%, #0F382B 100%)",
              border: "1px solid rgba(58,213,128,0.18)",
              borderRadius: 28,
              padding: 40,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* glow */}
            <div
              style={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 280,
                height: 280,
                background: "radial-gradient(circle, rgba(58,213,128,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: "rgba(58,213,128,0.12)",
                  border: "1px solid rgba(58,213,128,0.3)",
                  color: "var(--pc-green)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 28,
                }}
              >
                <i data-lucide="zap" style={{ width: 12, height: 12 }}></i>
                Acesso imediato
              </div>

              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, marginBottom: 4 }}>
                de <span style={{ textDecoration: "line-through" }}>R$ 197</span>
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: 64,
                  fontWeight: 600,
                  color: "var(--pc-green)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  marginBottom: 8,
                }}
              >
                R$ 39,90
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 32 }}>
                pagamento único · acesso vitalício
              </div>

              <a
                href={waLink("Olá! Quero começar o treinamento Painel Clean.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: "var(--pc-green)",
                  color: "var(--pc-dark)",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "18px 24px",
                  borderRadius: 14,
                  marginBottom: 16,
                  transition: "background 200ms, transform 200ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#4FE090";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--pc-green)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Quero começar agora
                <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  fontSize: 12.5,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <i data-lucide="lock" style={{ width: 12, height: 12 }}></i>
                  Pagamento seguro
                </span>
                <span>·</span>
                <span>Reembolso em 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .training-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 520px) {
          .training-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
