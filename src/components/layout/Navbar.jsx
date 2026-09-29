import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X, Phone, Headphones } from 'lucide-react'
import LanguageToggle from '../ui/LanguageToggle'
import { siteData } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { key: 'nav.nexgen', href: '#modules' },
  { key: 'nav.segments', href: '#segments' },
  { key: 'nav.pricing', href: '#pricing' },
  { key: 'nav.about', href: '#differentials' },
  { key: 'nav.contact', href: '#cta-final' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({ start: 'top -80', onUpdate: (self) => setScrolled(self.progress > 0) })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const bg = scrolled ? 'bg-white' : 'bg-[#0f1729]'

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm' : 'bg-[#0f1729]'
      }`}>
        <div className={`mx-auto max-w-[var(--container-max)] px-6 md:px-10 lg:px-20 flex items-center justify-between h-16 md:h-20 ${bg}`}>
          {/* Logo */}
          <a href="#" className={`flex items-center gap-2.5 group min-h-[44px] ${bg}`}>
            <img src={`${import.meta.env.BASE_URL}images/logo-secrel.png`} alt="Grupo Secrel" className="h-9 w-auto" width="33" height="36" />
            <span className={`font-[var(--font-display)] font-bold text-lg transition-colors ${
              scrolled ? 'text-[var(--color-primary)]' : 'text-white'
            } group-hover:text-[var(--color-secondary)]`}>Secrel</span>
          </a>

          {/* Desktop nav links */}
          <div className={`hidden lg:flex items-center gap-8 ${bg}`}>
            {navLinks.map((link) => (
              <a key={link.key} href={link.href}
                className={`text-sm font-medium transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-secondary)] hover:after:w-full after:transition-all ${
                  scrolled ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]' : 'text-white/80 hover:text-white'
                }`}>{t(link.key)}</a>
            ))}
          </div>

          {/* Right side — SINGLE toggle visible everywhere + desktop actions + mobile hamburger */}
          <div className={`flex items-center gap-2 ${bg}`}>
            {/* Language toggle — ONE instance, always visible */}
            <LanguageToggle scrolled={scrolled} />

            {/* Desktop-only actions */}
            <div className="hidden lg:flex items-center gap-2">
              <a href={`https://wa.me/${siteData.contact.whatsappSupport}`} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full transition-all ${
                  scrolled ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}>
                <Headphones size={16} /> {t('nav.support')}
              </a>
              <a href={`https://wa.me/${siteData.contact.whatsappSales}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[var(--color-accent)]/20 transition-all">
                <Phone size={16} /> {t('nav.demo')}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-11 h-11 flex items-center justify-center cursor-pointer ${scrolled ? 'text-[var(--color-text-primary)]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2 mt-8">
              {navLinks.map((link, i) => (
                <motion.a key={link.key} href={link.href} onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-2xl font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] py-3 border-b border-[var(--color-border)]">
                  {t(link.key)}
                </motion.a>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a href={`https://wa.me/${siteData.contact.whatsappSales}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold bg-[var(--color-accent)] text-white px-6 py-4 rounded-full">
                <Phone size={18} /> {t('nav.demo')}
              </a>
              <a href={`https://wa.me/${siteData.contact.whatsappSupport}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base font-medium border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-4 rounded-full">
                <Headphones size={18} /> {t('nav.support')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
