// ===== ESCOVA ROTATIVA G5 — Página de produto =====

const PRODUCT = {
  sku: "ZCP-0175-G5",
  name: "Escova Rotativa G5",
  slug: "escova-rotativa-g5",
  tag: "Rolo profissional",
  tagIcon: "refresh",
  image: "public/images/dnf-2508.webp",
  kitImage: "public/images/dnf-2463.webp",
  headline1: "Cobertura em arco.",
  headline2: "Sem áreas mortas.",
  fullDesc: "Escova Rotativa em Rolo, Semiautomática, com Motobomba, Controle Remoto e Cabo Extensível até 7,5m",
  quickSpecs: [
    { icon: "refresh", label: "Rolo profissional 350 RPM" },
    { icon: "arrowRight", label: "Cabo até 7,5m" },
    { icon: "check", label: "Até 200 painéis/hora" },
  ],
  specs: [
    { k: "Motor", v: "Brushless 350 RPM" },
    { k: "Velocidade", v: "200 painéis/h" },
    { k: "Cabo", v: "Extensível até 7,5m" },
    { k: "Operação", v: "Semiautomática" },
    { k: "Motobomba", v: "Inclusa" },
    { k: "Garantia", v: "12 meses" },
  ],
  benefits: [
    { icon: "refresh", title: "Cobertura contínua em arco", desc: "Cerdas longas em rolo passam por toda a superfície sem deixar áreas descobertas." },
    { icon: "bolt", title: "Operação contínua", desc: "Motor brushless de alta durabilidade para jornadas longas sem superaquecimento." },
    { icon: "shield", title: "Sem químicos", desc: "Limpeza mecânica a seco ou com água limpa — sem produtos que danificam as células." },
  ],
  accessories: [
    { sku: "ZCP-APPG51", name: "Refil de Cerdas G5", desc: "1 peça — troca rápida sem ferramentas" },
    { sku: "ZCP-APPA01", name: "Cabo Telescópico", desc: "Alumínio, extensível até 7,5m" },
  ],
  testimonial: {
    name: "Carlos Eduardo",
    city: "Brasília/DF",
    role: "Técnico autônomo",
    text: "Com a G5 consigo limpar uma usina de 300 painéis em pouco mais de uma hora. Mudou completamente minha capacidade de atendimento.",
    stars: 5,
  },
  prev: null,
  next: { label: "Escova Dupla PRO", href: "/escova-dupla-d5" },
};

const ALL_PRODUCTS = [
  { name: "G5", sku: "ZCP-0175-G5", href: "/escova-rotativa-g5", v: "200 p/h", current: true },
  { name: "PRO", sku: "ZCP-0275-D5", href: "/escova-dupla-d5", v: "260 p/h", current: false },
  { name: "S5", sku: "ZCP-0175-S5", href: "/escova-solo-s5", v: "160 p/h", current: false },
];

ReactDOM.createRoot(document.getElementById("root")).render(<ProductPageApp />);
