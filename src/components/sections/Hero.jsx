import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ArrowRight, Phone } from 'lucide-react'
import Button from '../ui/Button'
import { siteData } from '../../data/content'

export default function Hero() {
  const { t } = useTranslation()
  const blobRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blobRef.current, {
        backgroundPosition: '100% 50%',
        duration: 12,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })
    return () => ctx.revert()
  }, [])

  const words = t('hero.title').split(' ')

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Gradient mesh background */}
      <div
        ref={blobRef}
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(at 20% 50%, rgba(59,108,232,0.1) 0%, transparent 55%), radial-gradient(at 80% 20%, rgba(74,141,255,0.08) 0%, transparent 55%), radial-gradient(at 50% 90%, rgba(13,31,60,0.04) 0%, transparent 55%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(rgba(13,31,60,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(13,31,60,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 md:px-10 lg:px-20 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-white shadow-sm text-sm text-[var(--color-text-secondary)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
            {siteData.slogan}
          </motion.div>

          {/* Title — word-by-word reveal */}
          <h1 className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`inline-block mr-[0.25em] ${
                  word === '58' || word === 'tecnologia' || word === 'technology'
                    ? 'text-[var(--color-secondary)]'
                    : 'text-[var(--color-text-primary)]'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              href={`https://wa.me/${siteData.contact.whatsappSales}?text=${encodeURIComponent('Olá! Gostaria de agendar uma demonstração do NEXGEN.')}`}
              variant="accent"
              className="text-base"
            >
              <Phone size={18} />
              {t('hero.cta_demo')}
            </Button>
            <Button href="#modules" variant="ghost" className="text-base">
              {t('hero.cta_consult')}
              <ArrowRight size={18} />
            </Button>
          </motion.div>

          {/* Trust micro-badges with real partner logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-14 flex flex-wrap items-center gap-4"
          >
            {[
              { name: 'Microsoft', src: `${import.meta.env.BASE_URL}images/partners/microsoft.png`, h: 'h-4 md:h-5' },
              { name: 'Oracle', src: `${import.meta.env.BASE_URL}images/partners/oracle.png`, h: 'h-4 md:h-5' },
              { name: 'Fiserv', src: `${import.meta.env.BASE_URL}images/partners/fiserv.png`, h: 'h-4 md:h-5' },
            ].map((p) => (
              <span key={p.name} className="flex items-center bg-white border border-[var(--color-border)] rounded-full px-3 py-1.5 shadow-sm">
                <img src={p.src} alt={p.name} className={`${p.h} w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all`} loading="lazy" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
