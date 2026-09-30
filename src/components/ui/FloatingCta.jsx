import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Headphones, ChevronUp } from 'lucide-react'
import { siteData } from '../../data/content'

export default function FloatingCta({ hidden = false }) {
  const [visible, setVisible] = useState(false)
  const [showExtra, setShowExtra] = useState(false)
  const [onDark, setOnDark] = useState(false)
  const btnRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
      if (btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect()
        const el = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)
        if (el) {
          let node = el
          while (node && node !== document.body) {
            if (node.classList?.contains('section-dark')) { setOnDark(true); return }
            node = node.parentElement
          }
          setOnDark(false)
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pillBg = onDark ? 'bg-white' : 'bg-[var(--color-primary)]'
  const pillText = onDark ? 'text-[var(--color-primary)]' : 'text-white'
  const glowColor = onDark ? 'rgba(255,255,255,0.3)' : 'rgba(30,58,95,0.3)'

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-12 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Extra option: Suporte */}
          <AnimatePresence>
            {showExtra && (
              <motion.a
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                href={`https://wa.me/${siteData.contact.whatsappSupport}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white shadow-xl rounded-full pl-4 pr-5 py-3 border border-[var(--color-border)] hover:shadow-2xl transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Headphones size={16} className="text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">Suporte Técnico</span>
              </motion.a>
            )}
          </AnimatePresence>

          {/* Main CTA pill — always shows "Agendar Demo" */}
          <div className="flex items-center gap-2">
            {/* Toggle extra button */}
            <motion.button
              onClick={() => setShowExtra(!showExtra)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border transition-all ${
                onDark ? 'bg-white/10 border-white/20 text-white' : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-muted)]'
              } hover:scale-110`}
              aria-label="Mais opções"
            >
              <motion.span animate={{ rotate: showExtra ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronUp size={16} />
              </motion.span>
            </motion.button>

            {/* Agendar Demo — direct link, always visible */}
            <motion.a
              ref={btnRef}
              href={`https://wa.me/${siteData.contact.whatsappSales}?text=${encodeURIComponent('Olá! Gostaria de agendar uma demonstração do NEXGEN.')}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative flex items-center gap-2.5 rounded-full pl-4 pr-5 py-3.5 font-semibold text-sm shadow-xl cursor-pointer transition-colors ${pillBg} ${pillText}`}
              style={{ boxShadow: `0 4px 20px ${glowColor}, 0 0 40px ${glowColor}` }}
            >
              {/* Pulsing glow ring */}
              <motion.span
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{ boxShadow: [`0 0 0 0px ${glowColor}`, `0 0 0 10px transparent`] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />
              <Phone size={16} />
              Agendar Demo
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
