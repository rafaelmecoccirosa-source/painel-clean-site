// Shared config — must load before any component
const { useState, useEffect, useRef, useMemo, createContext, useContext } = React;

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
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const WhatsBrand = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

// Logo mark — SVG vetorial (nítido em qualquer tamanho)
const LogoMark = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
    style={{ borderRadius: 8, display: "block", flexShrink: 0 }}>
    <rect width="100" height="100" fill="#3AD580"/>
    <g fill="#0F382B">
      {/* Centro */}
      <rect x="44" y="43" width="10" height="10" rx="1.5"/>
      {/* Bowtie vertical — 11h */}
      <g transform="translate(29,31)">
        <path d="M0,-10 L-8,-4 L0,0 L8,-4 Z M0,0 L-8,4 L0,10 L8,4 Z"/>
      </g>
      {/* S-step — 1h */}
      <g transform="translate(53,23)">
        <rect x="1" y="-10" width="9" height="9" rx="2"/>
        <rect x="-10" y="1" width="9" height="9" rx="2"/>
      </g>
      {/* Bowtie horizontal — 3h */}
      <g transform="translate(76,38)">
        <path d="M-10,0 L-4,-8 L0,0 L-4,8 Z M0,0 L4,-8 L10,0 L4,8 Z"/>
      </g>
      {/* Z-step — 5h */}
      <g transform="translate(78,63)">
        <rect x="-10" y="-10" width="9" height="9" rx="2"/>
        <rect x="1" y="1" width="9" height="9" rx="2"/>
      </g>
      {/* Bowtie vertical — 5-6h */}
      <g transform="translate(64,79)">
        <path d="M0,-10 L-8,-4 L0,0 L8,-4 Z M0,0 L-8,4 L0,10 L8,4 Z"/>
      </g>
      {/* S-step — 7h */}
      <g transform="translate(42,81)">
        <rect x="1" y="-10" width="9" height="9" rx="2"/>
        <rect x="-10" y="1" width="9" height="9" rx="2"/>
      </g>
      {/* Bowtie horizontal — 9h */}
      <g transform="translate(24,63)">
        <path d="M-10,0 L-4,-8 L0,0 L-4,8 Z M0,0 L4,-8 L10,0 L4,8 Z"/>
      </g>
      {/* Z-step — 10h */}
      <g transform="translate(25,41)">
        <rect x="-10" y="-10" width="9" height="9" rx="2"/>
        <rect x="1" y="1" width="9" height="9" rx="2"/>
      </g>
    </g>
  </svg>
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
