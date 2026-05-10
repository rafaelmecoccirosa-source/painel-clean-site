import Image from 'next/image'
import { products, whatsappNumber } from '@/lib/content'

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

export default function Products() {
  return (
    <section id="produtos" className="bg-pc-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold font-sans text-pc-green mb-2">
              Linha profissional
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0F382B]">
              Equipamentos
            </h2>
            <p className="text-[#0F382B]/60 font-sans mt-1 text-sm">
              Tecnologia brushless para limpeza solar profissional
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de ver todos os equipamentos disponíveis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-pc-green font-semibold font-sans text-sm border border-pc-green/40 px-4 py-2 rounded-lg hover:bg-pc-green/10 transition-colors"
          >
            Ver todos →
          </a>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => {
            const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`
            return (
              <div
                key={product.sku}
                className={`relative flex flex-col rounded-xl overflow-hidden bg-white ${
                  product.featured
                    ? 'border-2 border-pc-green shadow-[0_0_20px_rgba(58,213,128,0.15)]'
                    : 'border border-[#0F382B]/10 shadow-sm'
                }`}
              >
                {/* Featured badge */}
                {product.featured && (
                  <div className="absolute top-3 left-3 z-10 bg-pc-green text-[#0F382B] text-xs font-bold font-sans px-2 py-1 rounded-md">
                    {product.featuredLabel}
                  </div>
                )}

                {/* Product image */}
                <div className="relative w-full h-52 bg-white overflow-hidden rounded-t-xl">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  <div>
                    <p className="text-pc-green text-xs font-sans uppercase tracking-widest font-semibold mb-1">
                      {product.sku}
                    </p>
                    <h3 className="font-display font-semibold text-lg text-[#0F382B]">
                      {product.name}
                    </h3>
                  </div>

                  {/* Specs table */}
                  <table className="w-full text-sm font-sans">
                    <tbody>
                      {product.specs.map((spec) => (
                        <tr key={spec.key} className="border-b border-[#0F382B]/10 last:border-0">
                          <td className="py-1.5 text-[#0F382B]/50 pr-4">{spec.key}</td>
                          <td className="py-1.5 text-[#0F382B] font-medium">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* WhatsApp CTA */}
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 bg-pc-green text-[#0F382B] font-semibold font-sans py-3 px-4 rounded-lg hover:bg-pc-green/90 transition-colors w-full"
                  >
                    <WhatsAppIcon />
                    Pedir orçamento
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Accessories footer */}
        <div className="mt-8 text-center text-[#0F382B]/50 font-sans text-sm">
          Precisa de refis, cabos ou acessórios?{' '}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de ver os acessórios disponíveis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pc-green hover:underline font-semibold"
          >
            Ver acessórios →
          </a>
        </div>
      </div>
    </section>
  )
}
