// Shared config — must load before any component
const { useState, useEffect, useLayoutEffect, useRef, useMemo, createContext, useContext } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroTreatment": "gradient",
  "heroAccent": "#3AD580",
  "trainingDetail": "compact",
  "compareDensity": "full",
  "marqueeSpeed": 60,
  "showMarquee": true,
  "showSocial": true,
  "showCompare": true,
  "showROI": true,
  "productCardStyle": "lifted"
}/*EDITMODE-END*/;

const TweaksCtx = createContext(TWEAK_DEFAULTS);
const useT = () => useContext(TweaksCtx);

const WHATSAPP = "5547996785953";
const wa = (m = "Olá! Gostaria de mais informações sobre os equipamentos Painel Clean.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(m)}`;

// === Inline SVG icons (Heroicons outline) ===
const Icon = ({ name, size = 20, stroke = 1.8 }) => {
  const paths = {
    arrowRight: <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />,
    arrowLeft:  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />,
    arrowDown:  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />,
    arrowUpRight: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5m0 0H8.25m11.25 0v11.25" />,
    plus:   <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />,
    check:  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />,
    minus:  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />,
    bolt:   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 13.5 3l-1.5 7.5h6L9 22.5l1.5-9h-6.75z" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />,
    headset: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75v3.75A8.25 8.25 0 0 0 12 21.75h.75a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3h-.75v.75a3.75 3.75 0 0 0 3.75 3.75M20.25 13.5V9.75A8.25 8.25 0 0 0 3.75 9.75" />,
    refresh: <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992V4.356M2.985 19.644v-4.992h4.992m0 0a8.25 8.25 0 0 0 13.803-3.7M7.977 14.652 3.34 19.29m17.66-12.582-4.638 4.638M3.34 4.7l4.638 4.648a8.25 8.25 0 0 1 13.21 3.715" />,
    wrench: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03A6 6 0 0 1 18.75 4.5l-2.625 2.625-1.06 4.243-4.243 1.06zm0 0L4.243 22.347a1.5 1.5 0 1 1-2.121-2.121L9.298 13.05" />,
    home:   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 12 2.25 21.75 12M4.5 9.75v10.5h15V9.75M9 21V13.5h6V21" />,
    package: <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25M21 7.5v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />,
    calculator: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75v-1.5a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75v1.5M15.75 15.75A1.5 1.5 0 0 0 17.25 14.25v-9A1.5 1.5 0 0 0 15.75 3.75h-7.5A1.5 1.5 0 0 0 6.75 5.25v9A1.5 1.5 0 0 0 8.25 15.75M9 9h6m-6 3h6" />,
    chat:   <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25-1.13 0-2.21-.19-3.21-.54l-3.4 1.13a.75.75 0 0 1-.95-.95l1.13-3.4A8.21 8.21 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />,
    play:   <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653z" />,
    star:   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />,
    location: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />,
    sun:    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />,
    facebook: <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></>,
    linkedin: <><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" /><circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    youtube: <><path strokeLinecap="round" strokeLinejoin="round" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 15.02 5.75-3.02-5.75-3.02v6.04z" /></>,
    sparkles: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />,
    building: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
    x:       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />,
    drop:    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25S4.5 8 4.5 13.5a7.5 7.5 0 0 0 15 0C19.5 8 12 2.25 12 2.25Z" />,
    network: <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />,
    leaf:    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-9m0 0C12 7.5 6.75 5.25 3.75 6c0 4.5 2.625 7.5 5.625 7.5S12 12 12 12Zm0 0c0-4.5 5.25-6.75 8.25-6 0 4.5-2.625 7.5-5.625 7.5S12 12 12 12Z" />,
    file:    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />,
    flag:    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />,
    target:  <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={stroke} fill="none" /><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth={stroke} fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M12 18.75V21M3 12h2.25M18.75 12H21" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

// Scroll-reveal hook — staggers direct children of a grid/list container
const useRevealChildren = (stagger = 80) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const parent = ref.current;
    if (!parent) return;
    const children = Array.from(parent.children);
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      child.style.transition = `opacity 0.5s ease ${i * stagger}ms, transform 0.5s ease ${i * stagger}ms`;
    });
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        children.forEach(child => {
          child.style.opacity = "1";
          child.style.transform = "translateY(0)";
        });
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(parent);
    return () => obs.disconnect();
  }, [stagger]);
  return ref;
};

const WhatsBrand = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

// Logo mark — SVG vetorial (nítido em qualquer tamanho)
const LogoMark = ({ size = 36 }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: size, height: size, flexShrink: 0,
    background: "#3AD580", borderRadius: Math.round(size * 0.18), overflow: "hidden",
  }}>
    <img
      src="public/images/painel_clean_logo_dark_transparent.png"
      width={size}
      height={size}
      alt=""
      style={{ display: "block" }}
    />
  </span>
);

// Logo — marca vetorial + wordmark
const Logo = ({ textColor = "white" }) => (
  <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
    <LogoMark size={36} />
    <span className="display" style={{ fontSize: 18, fontWeight: 600, color: textColor, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
      Painel Clean
    </span>
  </a>
);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);
  return reduced;
}

function useReveal({ threshold = 0.15, once = true, rootMargin = "0px 0px -80px 0px" } = {}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          if (once) io.unobserve(e.target);
        } else if (!once) {
          setVisible(false);
        }
      });
    }, { threshold, rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once, rootMargin]);
  return [ref, visible];
}

function useCountUp(target, { duration = 1200, trigger = true, decimals = 0 } = {}) {
  const [val, setVal] = React.useState(0);
  const reduced = usePrefersReducedMotion();
  React.useEffect(() => {
    if (!trigger) return;
    if (reduced) { setVal(target); return; }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger, reduced]);
  return decimals === 0 ? Math.round(val) : +val.toFixed(decimals);
}

function Reveal({ children, delay = 0, distance = 24, as: As = "div", style, ...rest }) {
  const [ref, visible] = useReveal();
  const reduced = usePrefersReducedMotion();
  const t = reduced ? "none" : `opacity 600ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms`;
  return (
    <As ref={ref} style={{
      opacity: visible || reduced ? 1 : 0,
      transform: visible || reduced ? "translateY(0)" : `translateY(${distance}px)`,
      transition: t,
      ...style,
    }} {...rest}>{children}</As>
  );
}
