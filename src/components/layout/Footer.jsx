import { useTranslation } from 'react-i18next'
import { Phone, Headphones, Mail, MapPin, Instagram, Linkedin, Facebook, Globe } from 'lucide-react'
import { siteData } from '../../data/content'

const socialLinks = [
  { url: 'https://www.instagram.com/gruposecrel', name: 'Instagram', icon: Instagram },
  { url: 'https://www.linkedin.com/company/grupo-secrel', name: 'LinkedIn', icon: Linkedin },
  { url: 'https://www.facebook.com/gruposecrel', name: 'Facebook', icon: Facebook },
  { url: 'https://portalerp.com/gruposecrel', name: 'Portal ERP', icon: Globe },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[var(--container-max)] px-6 md:px-10 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={`${import.meta.env.BASE_URL}images/logo-secrel.png`} alt="Grupo Secrel" className="h-10 w-auto" width="37" height="40" />
              <span className="font-[var(--font-display)] font-bold text-lg text-[var(--color-primary)]">Grupo Secrel</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">{t('footer.description')}</p>
            <div className="flex gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                    aria-label={s.name}>
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
          <div>
            <h4 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] mb-4">{t('footer.solutions')}</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li><a href="#modules" className="hover:text-[var(--color-primary)] transition-colors min-h-[44px] inline-flex items-center">NEXGEN ERP</a></li>
              <li><a href="#segments" className="hover:text-[var(--color-primary)] transition-colors min-h-[44px] inline-flex items-center">{t('nav.nexgenOtica')}</a></li>
              <li><a href="#segments" className="hover:text-[var(--color-primary)] transition-colors min-h-[44px] inline-flex items-center">{t('segments.oticas')}</a></li>
              <li><a href="#pricing" className="hover:text-[var(--color-primary)] transition-colors min-h-[44px] inline-flex items-center">{t('nav.pricing')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li><a href="#differentials" className="hover:text-[var(--color-primary)] transition-colors min-h-[44px] inline-flex items-center">{t('nav.about')}</a></li>
              <li><a href="#partners" className="hover:text-[var(--color-primary)] transition-colors min-h-[44px] inline-flex items-center">{t('partners.title')}</a></li>
              <li><a href="#faq" className="hover:text-[var(--color-primary)] transition-colors min-h-[44px] inline-flex items-center">{t('faq.title')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href={`https://wa.me/${siteData.contact.whatsappSales}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--color-accent)] hover:brightness-110 transition-all font-medium min-h-[44px]">
                <Phone size={14} /> {t('footer.sales')}: {siteData.contact.whatsappSalesDisplay}</a></li>
              <li><a href={`https://wa.me/${siteData.contact.whatsappSupport}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium min-h-[44px]">
                <Headphones size={14} /> {t('footer.support_contact')}: {siteData.contact.whatsappSupportDisplay}</a></li>
              <li><a href={`mailto:${siteData.contact.emailCommercial}`}
                className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors min-h-[44px]">
                <Mail size={14} /> {siteData.contact.emailCommercial}</a></li>
              <li className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                <MapPin size={14} className="mt-0.5 shrink-0" /> {siteData.address.full}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-[var(--container-max)] px-6 md:px-10 lg:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
          <span>&copy; {new Date().getFullYear()} {siteData.name}. {t('footer.rights')}</span>
          <span>CNPJ {siteData.cnpj}</span>
        </div>
      </div>
    </footer>
  )
}
