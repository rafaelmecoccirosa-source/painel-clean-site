export const heroSlides = [
  {
    type: 'default' as const,
    badge: 'Ecossistema fotovoltaico',
    title: 'Limpe mais, ganhe mais.',
    titleHighlight: 'Em menos tempo.',
    description:
      'Motor brushless, sem produtos químicos, até 260 painéis por hora. Equipamentos profissionais para quem vive de solar.',
    cta: { label: 'Ver equipamentos', href: '#produtos' },
    ctaSecondary: { label: 'Plataforma de serviços', href: 'https://painel-clean-v2.vercel.app' },
    image: '/images/hero-1.jpg',
  },
  {
    type: 'promo' as const,
    badge: 'Promoção — tempo limitado',
    title: 'Refil de cerdas',
    titleHighlight: 'com 20% off',
    description: 'Estoque limitado. Aproveite antes de acabar.',
    priceOld: 'R$ 290',
    priceNew: 'R$ 232',
    cta: {
      label: 'Aproveitar oferta',
      href: 'https://wa.me/5547996785953?text=Olá! Quero aproveitar o desconto no Refil de Cerdas.',
    },
    image: '/images/hero-promo.jpg',
  },
  {
    type: 'video' as const,
    badge: 'Novo no YouTube',
    title: 'Como limpar 500 painéis',
    titleHighlight: 'em 3 horas',
    description:
      'Rotina completa de um técnico profissional. Do setup ao relatório final.',
    cta: { label: 'Assistir agora', href: '#' },
    image: '/images/hero-video.jpg',
  },
]

export type HeroSlide = typeof heroSlides[number]

export const stats = [
  { value: '+30%', label: 'mais geração de energia' },
  { value: '260/h', label: 'painéis por hora' },
  { value: 'Brushless', label: '10x mais durável' },
  { value: 'Sem químicos', label: 'só água limpa' },
]

// Ordem: G5 (mais rápida), D5 (mais vendida/featured), S5
export const products = [
  {
    sku: 'ZCP-0175-G5',
    name: 'Escova Rotativa G5',
    featured: false,
    featuredLabel: '',
    images: ['/images/product-g5-1.jpg', '/images/field-1.jpg'],
    specs: [
      { key: 'Velocidade', value: '260 painéis/h' },
      { key: 'Motor', value: 'Brushless 350 RPM' },
      { key: 'Cabo', value: 'até 7,5m' },
    ],
    whatsappMessage:
      'Olá! Tenho interesse na Escova Rotativa G5 (ZCP-0175-G5).\nQuantidade desejada: 1\nPoderia me enviar um orçamento?',
  },
  {
    sku: 'ZCP-0275-D5',
    name: 'Escova Dupla D5',
    featured: true,
    featuredLabel: 'Mais vendido',
    images: ['/images/product-d5-1.jpg', '/images/field-1.jpg'],
    specs: [
      { key: 'Velocidade', value: '200 painéis/h' },
      { key: 'Motor', value: 'Brushless 350 RPM' },
      { key: 'Cabo', value: 'até 7,5m' },
      { key: 'Inclui', value: 'Bomba + controle remoto' },
    ],
    whatsappMessage:
      'Olá! Tenho interesse na Escova Dupla D5 (ZCP-0275-D5).\nQuantidade desejada: 1\nPoderia me enviar um orçamento?',
  },
  {
    sku: 'ZCP-0175-S5',
    name: 'Escova Solo S5',
    featured: false,
    featuredLabel: '',
    images: ['/images/product-s5-1.jpg', '/images/field-1.jpg'],
    specs: [
      { key: 'Velocidade', value: '160 painéis/h' },
      { key: 'Ideal para', value: 'Difícil acesso' },
      { key: 'Cabo', value: 'até 7,5m' },
    ],
    whatsappMessage:
      'Olá! Tenho interesse na Escova Solo S5 (ZCP-0175-S5).\nQuantidade desejada: 1\nPoderia me enviar um orçamento?',
  },
]

export const faqs = [
  {
    question: 'As escovas danificam as placas?',
    answer:
      'Não. As cerdas são macias e desenvolvidas especificamente para vidro fotovoltaico. O sistema usa apenas água, sem produtos químicos que possam degradar a superfície.',
  },
  {
    question: 'Quanto de água é consumido por limpeza?',
    answer:
      'O sistema consome até 80% menos água que métodos tradicionais. A motobomba controla o fluxo com precisão.',
  },
  {
    question: 'Preciso de experiência prévia para usar?',
    answer:
      'Não. O treinamento Painel Clean cobre tudo do zero — operação, segurança, precificação e captação de clientes.',
  },
  {
    question: 'Como funciona o suporte pós-venda?',
    answer:
      'Nossa equipe atende via WhatsApp em horário comercial. Garantia de 1 ano no equipamento e suporte técnico contínuo.',
  },
]

export const whatsappNumber = '5547996785953'
export const platformUrl = 'https://painel-clean-v2.vercel.app'
