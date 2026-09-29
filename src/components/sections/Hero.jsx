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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-surface-dark)]">
      {/* Gradient mesh background */}
      <div
        ref={blobRef}
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(106,184,238,0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(30,58,95,0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(106,184,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(106,184,238,0.5) 1px, transparent 1px)',
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm text-[var(--color-text-on-dark)]/80 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
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
                  word === '58' || word === 'código' || word === 'code'
                    ? 'text-[var(--color-secondary)]'
                    : 'text-white'
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
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
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
            <Button href="#modules" variant="ghost-light" className="text-base">
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
              { name: 'Luxottica', src: `${import.meta.env.BASE_URL}images/partners/luxottica.png`, h: 'h-3 md:h-3.5' },
            ].map((p) => (
              <span key={p.name} className="flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                <img src={p.src} alt={p.name} className={`${p.h} w-auto brightness-0 invert opacity-60`} loading="lazy" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
