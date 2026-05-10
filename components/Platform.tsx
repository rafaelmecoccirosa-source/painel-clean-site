import { platformUrl } from '@/lib/content'

const cards = [
  {
    title: 'Donos de usina',
    description:
      'Publique sua usina e receba orçamentos de técnicos credenciados na sua região. Acompanhe o histórico de limpezas e laudos de desempenho.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Técnicos credenciados',
    description:
      'Receba chamados de limpeza na sua área, gerencie agenda e emita relatórios profissionais. Amplie sua carteira sem esforço de prospecção.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
]

export default function Platform() {
  return (
    <section id="plataforma" className="bg-pc-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold font-sans text-pc-green mb-2">
            Ecossistema Painel Clean
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0F382B]">
            Plataforma de serviços
          </h2>
          <p className="text-[#0F382B]/60 font-sans mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Conectamos donos de usinas fotovoltaicas a técnicos de limpeza qualificados em todo o Brasil.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#0F382B]/10 bg-white p-8 flex flex-col gap-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-pc-green/10 border border-pc-green/20 flex items-center justify-center text-pc-green">
                {card.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-[#0F382B]">{card.title}</h3>
              <p className="text-[#0F382B]/60 font-sans text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-pc-green text-[#0F382B] font-semibold font-sans px-8 py-3 rounded-lg hover:bg-pc-green/90 transition-colors"
          >
            Sou dono de usina
          </a>
          <a
            href={platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-[#0F382B]/30 text-[#0F382B] font-semibold font-sans px-8 py-3 rounded-lg hover:bg-[#0F382B]/5 transition-colors"
          >
            Sou técnico
          </a>
        </div>
      </div>
    </section>
  )
}
