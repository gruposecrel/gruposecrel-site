import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Section from '../layout/Section'
import AnimatedText from '../ui/AnimatedText'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { segments, siteData } from '../../data/content'

const segmentData = {
  oticas: { bg: '#EFF6FF', accent: '#3B82F6', ring: '#BFDBFE', image: `${import.meta.env.BASE_URL}images/segments/oticas.jpg` },
  varejo: { bg: '#F0FDF4', accent: '#10B981', ring: '#BBF7D0', image: `${import.meta.env.BASE_URL}images/segments/varejo.jpg` },
  autopecas: { bg: '#FFFBEB', accent: '#F59E0B', ring: '#FDE68A', image: `${import.meta.env.BASE_URL}images/segments/autopecas.jpg` },
  moda: { bg: '#FDF2F8', accent: '#EC4899', ring: '#FBCFE8', image: `${import.meta.env.BASE_URL}images/segments/moda.jpg` },
}

export default function Segments() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const current = segments[active]
  const Icon = current.icon
  const sd = segmentData[current.key]

  return (
    <Section id="segments" className="bg-[var(--color-background-alt)]">
      <div className="text-center mb-16">
        <AnimatedText
          text={t('segments.title')}
          tag="h2"
          className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t('segments.subtitle')}
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {segments.map((seg, i) => {
            const SegIcon = seg.icon
            const sc = segmentData[seg.key]
            return (
              <button
                key={seg.key}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
                  active === i
                    ? 'shadow-lg scale-105'
                    : 'bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-gray-300 hover:shadow-sm'
                }`}
                style={active === i ? { backgroundColor: sc.bg, color: sc.accent, border: `2px solid ${sc.ring}` } : undefined}
              >
                <SegIcon size={18} />
                {t(`segments.${seg.key}`)}
              </button>
            )
          })}
        </div>
      </ScrollReveal>

      <motion.div
        key={current.key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-light p-0 relative overflow-hidden"
        style={{ borderColor: sd.ring, borderWidth: '2px' }}
      >
        <div className="grid md:grid-cols-2">
          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: sd.bg }}>
              <Icon size={28} style={{ color: sd.accent }} />
            </div>
            <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              {t(`segments.${current.key}`)}
            </h3>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {t(`segments.${current.key}_desc`)}
            </p>
            <div>
              <Button
                href={`https://wa.me/${siteData.contact.whatsappSales}?text=${encodeURIComponent(`Olá! Tenho interesse no NEXGEN para ${t(`segments.${current.key}`)}.`)}`}
                variant="primary"
              >
                {t('hero.cta_consult')}
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Real photo */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <motion.img
              key={sd.image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={sd.image}
              alt={t(`segments.${current.key}`)}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Color overlay to match segment accent */}
            <div className="absolute inset-0 opacity-15" style={{ backgroundColor: sd.accent }} />
            {/* Gradient fade from content side */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent hidden md:block" />
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
