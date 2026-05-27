// ===== ESCOVA DUPLA D5 — Página de produto =====

const PRODUCT = {
  sku: "ZCP-0275-D5",
  name: "Escova Dupla PRO",
  slug: "escova-dupla-d5",
  tag: "Mais vendida",
  image: "public/images/escova pro 1.png",
  kitImage: "public/images/escova pro kit.png",
  headline1: "Duas cabeças.",
  headline2: "O dobro de área por passada.",
  fullDesc: "Escova Dupla PRO, Semiautomática, com Motobomba, Controle Remoto e Cabo Extensível até 7,5m",
  quickSpecs: [
    { icon: "bolt", label: "Motor brushless 350 RPM" },
    { icon: "arrowRight", label: "Cabo até 7,5m" },
    { icon: "check", label: "260 painéis/hora" },
  ],
  specs: [
    { k: "Motor", v: "Brushless 350 RPM" },
    { k: "Velocidade", v: "260 painéis/h" },
    { k: "Cabo", v: "Extensível até 7,5m" },
    { k: "Operação", v: "Semiautomática" },
    { k: "Inclui", v: "Bomba + controle remoto" },
    { k: "Garantia", v: "12 meses" },
  ],
  benefits: [
    { icon: "check", title: "Kit pronto para usar", desc: "Bomba e controle remoto inclusos — sem necessidade de comprar acessórios adicionais para começar." },
    { icon: "bolt", title: "Dupla eficiência", desc: "Dois rolos de trabalho aumentam a área de contato e a velocidade de limpeza em relação à escova simples." },
    { icon: "shield", title: "O padrão do mercado", desc: "O modelo mais vendido da linha Painel Clean — aprovado por centenas de técnicos em todo o Brasil." },
  ],
  accessories: [
    { sku: "ZCP-APPD51", name: "Refil de Cerdas D5", desc: "2 peças – Direito e Esquerdo" },
    { sku: "ZCP-APPA01", name: "Cabo Telescópico", desc: "Alumínio, extensível até 7,5m" },
  ],
  testimonial: {
    name: "Ricardo Fonseca",
    city: "Goiânia/GO",
    role: "Instalador solar",
    text: "A D5 foi minha primeira escova e continua sendo a principal. O kit completo me permitiu começar a atender clientes na semana em que recebi o equipamento.",
    stars: 5,
  },
  prev: { label: "Escova Rotativa G5", href: "/escova-rotativa-g5" },
  next: { label: "Escova Solo S5", href: "/escova-solo-s5" },
};

const ALL_PRODUCTS = [
  { name: "G5", sku: "ZCP-0175-G5", href: "/escova-rotativa-g5", current: false },
  { name: "PRO", sku: "ZCP-0275-D5", href: "/escova-dupla-d5", current: true },
  { name: "S5", sku: "ZCP-0175-S5", href: "/escova-solo-s5", current: false },
];

ReactDOM.createRoot(document.getElementById("root")).render(<ProductPageApp />);
