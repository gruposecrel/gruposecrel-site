import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import Problem from '../components/sections/Problem'
import ImpactStrip from '../components/sections/ImpactStrip'
import Modules from '../components/sections/Modules'
import VideoDemo from '../components/sections/VideoDemo'
import Segments from '../components/sections/Segments'
import Testimonials from '../components/sections/Testimonials'
import Differentials from '../components/sections/Differentials'
import PricingPreview from '../components/sections/PricingPreview'
import Faq from '../components/sections/Faq'
import CtaFinal from '../components/sections/CtaFinal'

export default function Home() {
  return (
    <>
      {/* LIGHT */}
      <Hero />
      <TrustBar />
      <Problem />
      <ImpactStrip text="58 anos de código que não para — do bureau de dados ao cloud." dark />
      {/* LIGHT */}
      <Modules />
      <VideoDemo />
      <Segments />
      {/* DARK */}
      <Testimonials />
      {/* LIGHT */}
      <Differentials />
      <PricingPreview />
      <Faq />
      {/* DARK */}
      <CtaFinal />
    </>
  )
}
