// ===== ESCOVA SOLO S5 — Página de produto =====

const PRODUCT = {
  sku: "ZCP-0175-S5",
  name: "Escova Solo S5",
  slug: "escova-solo-s5",
  tag: "Acesso difícil",
  image: "public/images/product-s5-1.jpg",
  headline1: "Chega onde",
  headline2: "outras escovas não chegam.",
  fullDesc: "Escova Single, Semiautomática, com Motobomba, Controle Remoto e Cabo Extensível até 7,5m",
  quickSpecs: [
    { icon: "bolt", label: "Motor brushless 350 RPM" },
    { icon: "home", label: "Telhados difíceis" },
    { icon: "check", label: "Até 160 painéis/hora" },
  ],
  specs: [
    { k: "Motor", v: "Brushless 350 RPM" },
    { k: "Velocidade", v: "160 painéis/h" },
    { k: "Cabo", v: "Extensível até 7,5m" },
    { k: "Operação", v: "Semiautomática" },
    { k: "Perfil", v: "Compacto" },
    { k: "Garantia", v: "12 meses" },
  ],
  benefits: [
    { icon: "home", title: "Acesso em qualquer telhado", desc: "Perfil compacto e leve: entra em corredores estreitos, estruturas metálicas e telhados de difícil acesso." },
    { icon: "bolt", title: "Ágil em residenciais", desc: "Ideal para instalações menores onde a dupla D5 é grande demais — sem abrir mão da eficiência brushless." },
    { icon: "shield", title: "Sem químicos", desc: "Limpeza mecânica a seco ou com água limpa — preserva as células fotovoltaicas e o telhado." },
  ],
  accessories: [
    { sku: "ZCP-APPS51", name: "Refil de Cerdas S5", desc: "1 peça — troca rápida sem ferramentas" },
    { sku: "ZCP-APPA01", name: "Cabo Telescópico", desc: "Alumínio, extensível até 7,5m" },
  ],
  testimonial: {
    name: "Ana Paula Souza",
    city: "São Paulo/SP",
    role: "Técnica autônoma",
    text: "Atendo muitos condomínios com telhados complexos. A S5 é a única que consigo manobrar com segurança nessas situações — e ainda entrega ótima velocidade.",
    stars: 5,
  },
  prev: { label: "Escova Dupla D5", href: "/escova-dupla-d5" },
  next: null,
};

const ALL_PRODUCTS = [
  { name: "G5", sku: "ZCP-0175-G5", href: "/escova-rotativa-g5", current: false },
  { name: "D5", sku: "ZCP-0275-D5", href: "/escova-dupla-d5", current: false },
  { name: "S5", sku: "ZCP-0175-S5", href: "/escova-solo-s5", current: true },
];

ReactDOM.createRoot(document.getElementById("root")).render(<ProductPageApp />);
