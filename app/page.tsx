import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Products from '@/components/Products'
import Training from '@/components/Training'
import Platform from '@/components/Platform'
import Faq from '@/components/Faq'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Training />
        <Platform />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
