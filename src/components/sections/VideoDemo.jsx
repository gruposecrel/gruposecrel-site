import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import AnimatedText from '../ui/AnimatedText'
import ScrollReveal from '../ui/ScrollReveal'

export default function VideoDemo() {
  const { t } = useTranslation()

  return (
    <Section id="video-demo" className="bg-white">
      <div className="text-center mb-12">
        <AnimatedText
          text={t('video_demo.title')}
          tag="h2"
          className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t('video_demo.subtitle')}
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-[var(--color-border)]">
          <video
            className="w-full h-auto block"
            src={`${import.meta.env.BASE_URL}videos/nexgen-demo.mp4`}
            controls
            preload="metadata"
            playsInline
          />
        </div>
      </ScrollReveal>
    </Section>
  )
}
