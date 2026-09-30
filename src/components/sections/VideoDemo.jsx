import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import AnimatedText from '../ui/AnimatedText'
import ScrollReveal from '../ui/ScrollReveal'

export default function VideoDemo() {
  const { t } = useTranslation()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="videos" background="bg-[var(--color-background-alt)]">
      <div className="text-center mb-16">
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
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-[var(--color-surface-dark)] shadow-xl aspect-[720/400]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={`${import.meta.env.BASE_URL}videos/nexgen-demo.mp4`}
              controls
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="NEXGEN no PDV"
            />
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
