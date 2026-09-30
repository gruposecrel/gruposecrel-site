import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedText from '../ui/AnimatedText'
import { testimonials } from '../../data/content'

const partnerLogos = [
  { name: 'Microsoft', src: `${import.meta.env.BASE_URL}images/partners/microsoft.png`, h: 'h-10 md:h-12' },
  { name: 'Oracle', src: `${import.meta.env.BASE_URL}images/partners/oracle.png`, h: 'h-8 md:h-10' },
  { name: 'Fiserv', src: `${import.meta.env.BASE_URL}images/partners/fiserv.png`, h: 'h-10 md:h-12' },
]

function PartnerLogos() {
  const items = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]
  return (
    <div className="relative mb-16">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="overflow-hidden py-2">
        <div className="flex items-center gap-16 animate-marquee">
          {items.map((p, i) => (
            <div key={`${p.name}-${i}`} className="shrink-0 flex items-center px-8 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src={p.src} alt={p.name} className={`${p.h} w-auto object-contain`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
  const tst = testimonials[current]

  return (
    <section id="testimonials" className="bg-white px-6 py-20 md:px-10 md:py-24 lg:px-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="text-center mb-10">
          <AnimatedText
            text={t('testimonials.title')}
            tag="h2"
            className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]"
          />
        </div>

        <PartnerLogos />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={tst.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card-light p-8 md:p-12 text-center"
              >
                <Quote size={40} className="text-[var(--color-secondary)]/30 mx-auto mb-6" />
                <blockquote className="text-lg md:text-xl text-[var(--color-text-primary)] leading-relaxed font-medium mb-8 italic">
                  &ldquo;{t(`testimonials.${tst.key}_text`)}&rdquo;
                </blockquote>
                <div>
                  <p className="font-[var(--font-display)] font-semibold text-[var(--color-primary)]">
                    {t(`testimonials.${tst.key}_author`)}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">{t(`testimonials.${tst.key}_role`)}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]/70 mt-2">{tst.context}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-11 h-11 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-colors cursor-pointer" aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-1">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className="w-11 h-11 flex items-center justify-center cursor-pointer" aria-label={`Go to testimonial ${i + 1}`}>
                    <span className={`block rounded-full transition-all ${i === current ? 'bg-[var(--color-secondary)] w-6 h-2' : 'bg-[var(--color-border)] w-2 h-2'}`} />
                  </button>
                ))}
              </div>
              <button onClick={next} className="w-11 h-11 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-colors cursor-pointer" aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
