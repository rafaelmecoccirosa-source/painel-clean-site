function CtaFinal() {
  return (
    <section style={{ background: "var(--pc-darker)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('public/images/field-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, var(--pc-darker) 0%, rgba(10,38,32,0.7) 30%, rgba(10,38,32,0.7) 70%, var(--pc-darker) 100%)",
        }}
      />
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--pc-green)",
            marginBottom: 22,
          }}
        >
          Vamos conversar?
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(40px, 5.6vw, 76px)",
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.02,
            color: "white",
            margin: 0,
            marginBottom: 24,
            maxWidth: 880,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Pronto para limpar mais <br />
          <span style={{ color: "var(--pc-green)" }}>e ganhar mais?</span>
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.65)",
            margin: "0 auto 44px",
            maxWidth: 580,
            lineHeight: 1.5,
          }}
        >
          Fale agora com nossa equipe pelo WhatsApp. Respondemos em minutos e ajudamos você a escolher o
          equipamento certo para seu negócio.
        </p>
        <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--pc-green)",
              color: "var(--pc-dark)",
              fontWeight: 700,
              fontSize: 16,
              padding: "18px 30px",
              borderRadius: 14,
              transition: "transform 200ms, background 200ms, box-shadow 200ms",
              boxShadow: "0 8px 24px rgba(58,213,128,0.24)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#4FE090";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 36px rgba(58,213,128,0.40)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--pc-green)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(58,213,128,0.24)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Falar pelo WhatsApp
          </a>
          <a
            href="#produtos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(255,255,255,0.20)",
              color: "white",
              fontWeight: 600,
              fontSize: 16,
              padding: "18px 30px",
              borderRadius: 14,
              transition: "background 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.36)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
            }}
          >
            Ver equipamentos
          </a>
        </div>
      </div>
    </section>
  );
}
