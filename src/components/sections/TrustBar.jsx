import { useTranslation } from 'react-i18next'
import CountUp from '../ui/CountUp'
import ScrollReveal from '../ui/ScrollReveal'
import { trustNumbers } from '../../data/content'

export default function TrustBar() {
  const { t } = useTranslation()

  return (
    <section className="relative py-12 md:py-16 bg-white border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-[var(--container-max)] px-6 md:px-10 lg:px-20">
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-8 md:gap-12 text-center">
            {trustNumbers.map((item) => (
              <div key={item.labelKey} className="flex flex-col items-center gap-1">
                <div className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {t(item.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
