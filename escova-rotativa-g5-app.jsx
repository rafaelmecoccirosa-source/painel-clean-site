// ===== ESCOVA ROTATIVA G5 — Página de produto =====

const PRODUCT = {
  sku: "ZCP-0175-G5",
  name: "Escova Rotativa G5",
  slug: "escova-rotativa-g5",
  tag: "Mais rápida",
  tagIcon: "bolt",
  image: "public/images/DNF_2445.jpg",
  kitImage: "public/images/DNF_2463.jpg",
  headline1: "Velocidade máxima.",
  headline2: "Escala sem limite.",
  fullDesc: "Escova Rotativa, Semiautomática, com Motobomba, Controle Remoto e Cabo Extensível até 7,5m",
  quickSpecs: [
    { icon: "bolt", label: "Motor brushless 350 RPM" },
    { icon: "arrowRight", label: "Cabo até 7,5m" },
    { icon: "check", label: "Até 260 painéis/hora" },
  ],
  specs: [
    { k: "Motor", v: "Brushless 350 RPM" },
    { k: "Velocidade", v: "260 painéis/h" },
    { k: "Cabo", v: "Extensível até 7,5m" },
    { k: "Operação", v: "Semiautomática" },
    { k: "Motobomba", v: "Inclusa" },
    { k: "Garantia", v: "12 meses" },
  ],
  benefits: [
    { icon: "bolt", title: "Máxima velocidade", desc: "260 painéis por hora: ideal para usinas grandes onde tempo é dinheiro." },
    { icon: "refresh", title: "Operação contínua", desc: "Motor brushless de alta durabilidade para jornadas longas sem superaquecimento." },
    { icon: "shield", title: "Sem químicos", desc: "Limpeza mecânica a seco ou com água limpa — sem produtos que daniifcam as células." },
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
  next: { label: "Escova Dupla D5", href: "/escova-dupla-d5" },
};

const ALL_PRODUCTS = [
  { name: "G5", sku: "ZCP-0175-G5", href: "/escova-rotativa-g5", v: "260 p/h", current: true },
  { name: "D5", sku: "ZCP-0275-D5", href: "/escova-dupla-d5", v: "200 p/h", current: false },
  { name: "S5", sku: "ZCP-0175-S5", href: "/escova-solo-s5", v: "160 p/h", current: false },
];

ReactDOM.createRoot(document.getElementById("root")).render(<ProductPageApp />);
