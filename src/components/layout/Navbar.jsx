import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone, Headphones, ExternalLink } from 'lucide-react'
import LanguageToggle from '../ui/LanguageToggle'
import { siteData } from '../../data/content'

const navLinks = [
  { key: 'nav.nexgen', href: '#modules', minW: 'min-w-[70px]' },
  { key: 'nav.segments', href: '#segments', minW: 'min-w-[90px]' },
  { key: 'nav.pricing', href: '#pricing', minW: 'min-w-[70px]' },
  { key: 'nav.about', href: '#differentials', minW: 'min-w-[100px]' },
]

export default function Navbar({ isOpen, setIsOpen }) {
  const { t } = useTranslation()

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
        <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-8 lg:px-12 xl:px-20 flex items-center gap-6 h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group min-h-[44px] shrink-0">
            <img src={`${import.meta.env.BASE_URL}images/logo-secrel.png`} alt="Grupo Secrel" className="h-8 w-auto" width="33" height="36" />
            <span className="font-[var(--font-display)] font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">Secrel</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a key={link.key} href={link.href}
                className={`${link.minW} text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-secondary)] hover:after:w-full after:transition-all whitespace-nowrap text-center`}>
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Right side — language toggle + desktop actions + mobile hamburger */}
          <div className="flex items-center gap-1.5 ml-auto">
            <LanguageToggle scrolled />

            {/* Desktop-only actions */}
            <div className="hidden lg:flex items-center gap-1.5">
              <a href={siteData.contact.supportSystem} target="_blank" rel="noopener noreferrer"
                className="min-w-[140px] inline-flex items-center justify-center gap-1.5 text-[13px] font-medium px-3 py-2 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-all whitespace-nowrap">
                <ExternalLink size={13} /> {t('nav.portal')}
              </a>
              <a href={`https://wa.me/${siteData.contact.whatsappSupport}`} target="_blank" rel="noopener noreferrer"
                className="min-w-[90px] inline-flex items-center justify-center gap-1.5 text-[13px] font-medium px-3 py-2 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-all whitespace-nowrap">
                <Headphones size={13} /> {t('nav.support')}
              </a>
              <a href={`https://wa.me/${siteData.contact.whatsappSales}`} target="_blank" rel="noopener noreferrer"
                className="min-w-[140px] inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold text-white px-4 py-2 rounded-full hover:brightness-110 transition-all whitespace-nowrap"
                style={{ backgroundColor: 'var(--color-secondary)' }}>
                <Phone size={13} /> {t('nav.demo')}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center cursor-pointer text-[var(--color-text-primary)]"
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
