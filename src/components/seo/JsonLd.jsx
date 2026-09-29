import { siteData } from '../../data/content'

export default function JsonLd() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteData.url}/#organization`,
    name: siteData.name,
    legalName: siteData.legalName,
    url: siteData.url,
    logo: `${siteData.url}/images/logo-secrel.png`,
    image: `${siteData.url}/images/logo-secrel.png`,
    foundingDate: '1967-09-04',
    description: siteData.description,
    slogan: siteData.slogan,
    taxID: siteData.cnpj,
    telephone: siteData.contact.whatsappSalesDisplay,
    email: siteData.contact.emailCommercial,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteData.address.street,
      addressLocality: siteData.address.city,
      addressRegion: siteData.address.state,
      postalCode: siteData.address.zip,
      addressCountry: siteData.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteData.coordinates.lat,
      longitude: siteData.coordinates.lng,
    },
    sameAs: siteData.socialLinks,
    knowsAbout: [
      'ERP para varejo',
      'Sistema de gestão comercial',
      'ERP para óticas',
      'ERP para autopeças',
      'Software de gestão na nuvem',
      'Business Intelligence para varejo',
      'Gestão de laboratório óptico',
      'Automação fiscal NF-e NFC-e',
    ],
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 11, maxValue: 50 },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteData.contact.whatsappSalesDisplay,
        contactType: 'sales',
        availableLanguage: ['Portuguese', 'English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: siteData.contact.whatsappSupportDisplay,
        contactType: 'customer support',
        availableLanguage: ['Portuguese'],
      },
    ],
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NEXGEN ERP',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web (Cloud)',
    description: 'ERP completo na nuvem para gestão de varejo e atacado. Módulos para óticas, autopeças, moda, e mais de 13 segmentos.',
    offers: {
      '@type': 'Offer',
      price: '210',
      priceCurrency: 'BRL',
      priceValidUntil: '2026-12-31',
      url: `${siteData.url}/#pricing`,
    },
    creator: { '@id': `${siteData.url}/#organization` },
    featureList: [
      'Retaguarda de Loja',
      'Frente de Lojas (PDV)',
      'Fiscal Completo (NF-e, NFC-e)',
      'Retaguarda Financeira',
      'Business Intelligence (Power BI)',
      'Entrega e Montagem',
      'Vendas com Tablet',
      'Laboratório Óptico',
    ],
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Grupo Secrel — ERP NEXGEN | 58 Anos Transformando o Comércio',
    description: siteData.description,
    url: siteData.url,
    inLanguage: ['pt-BR', 'en'],
    isPartOf: {
      '@type': 'WebSite',
      name: siteData.name,
      url: siteData.url,
    },
    about: { '@id': `${siteData.url}/#organization` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  )
}
