export default function Training() {
  return (
    <section id="treinamento" className="bg-pc-darker py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-pc-green/20 bg-pc-dark p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: text */}
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-wider bg-pc-green/15 text-pc-green border border-pc-green/25">
                Treinamento online
              </span>
              <h2 className="font-display font-semibold text-3xl text-white leading-tight">
                Ganhe mais por hora que um motorista de app.
              </h2>
              <p className="text-white/60 font-sans text-base leading-relaxed">
                Do zero ao primeiro cliente em menos de uma semana. Aprenda operação,
                segurança em altura, precificação e como fechar contratos recorrentes
                com usinas e condomínios.
              </p>
              <ul className="flex flex-col gap-2 text-white/70 font-sans text-sm">
                {[
                  'Acesso imediato e vitalício',
                  'Certificado de conclusão',
                  'Suporte via WhatsApp',
                  'Material atualizado constantemente',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-pc-green shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: price + CTA */}
            <div className="flex flex-col items-start md:items-end gap-5">
              <div className="flex flex-col gap-1">
                <span className="line-through text-white/30 font-sans text-lg">De R$ 197</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-semibold text-4xl text-pc-green">R$ 39,90</span>
                </div>
                <span className="text-white/40 font-sans text-sm">acesso vitalício</span>
              </div>
              <a
                href="/treinamento"
                className="w-full md:w-auto flex items-center justify-center bg-pc-green text-pc-darker font-semibold font-sans px-8 py-4 rounded-xl hover:bg-pc-green/90 transition-colors text-base"
              >
                Quero começar agora
              </a>
              <p className="text-white/30 font-sans text-xs text-center md:text-right">
                Pagamento seguro · Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
