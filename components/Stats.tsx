import { stats } from '@/lib/content'

export default function Stats() {
  return (
    <section className="bg-pc-darker border-b border-pc-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-1">
              <span className="font-display font-semibold text-2xl text-pc-green">
                {item.value}
              </span>
              <span className="text-white/50 text-xs font-sans">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
