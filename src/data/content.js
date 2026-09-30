import {
  Store, ShoppingCart, FileText, Wallet, BarChart3, Gift, Tablet,
  Eye, Car, Shirt, ShoppingBag,
  Cloud, Headphones, Zap, LineChart, Clock,
} from 'lucide-react'

export const siteData = {
  schemaType: 'SoftwareApplication',
  name: 'Grupo Secrel',
  legalName: 'SECREL - CONSULTORIA E SISTEMAS LTDA',
  cnpj: '07.271.430/0001-97',
  foundedYear: 1967,
  yearsInBusiness: 58,
  slogan: 'Tecnologia e Soluções Inovadoras',
  url: 'https://gruposecrel.com.br',
  description: 'O Grupo Secrel oferece o NEXGEN, ERP completo na nuvem para o comércio (varejo e atacado). 58 anos de experiência, parceiros Microsoft, Oracle e Fiserv.',
  product: 'NEXGEN',

  contact: {
    whatsappSales: '+5531975334049',
    whatsappSalesDisplay: '+55 31 97533-4049',
    whatsappSupport: '+558540421068',
    whatsappSupportDisplay: '+55 85 4042-1068',
    phoneAdmin: '+55 85 4042-1110',
    phoneCnpj: '(85) 3466-7000',
    emailCommercial: 'comercial@gruposecrel.com.br',
    emailGeneral: 'contato@gruposecrel.com.br',
    supportSystem: 'http://praction.gruposecrel.com.br',
  },

  address: {
    street: 'Av. Dom Luís, 500, Sala 2023',
    neighborhood: 'Meireles',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60160-230',
    country: 'BR',
    full: 'Av. Dom Luís, 500, Sala 2023 — Meireles, Fortaleza/CE, 60160-230',
  },

  coordinates: {
    lat: -3.7319,
    lng: -38.4897,
  },

  socialLinks: [
    'https://www.instagram.com/gruposecrel',
    'https://www.linkedin.com/company/grupo-secrel',
    'https://www.facebook.com/gruposecrel',
    'https://portalerp.com/gruposecrel',
  ],

  instagramHandle: 'gruposecrel',
  linkedinUrl: 'https://www.linkedin.com/company/grupo-secrel',
  facebookUrl: 'https://www.facebook.com/gruposecrel',
}

export const modules = [
  {
    key: 'retaguarda',
    icon: Store,
    features: ['Catálogo com ou sem grade', 'Múltiplas tabelas de preços', 'Gestão completa de compras', 'Controle de estoque multi-tipo', 'Inventário normal ou rotativo'],
  },
  {
    key: 'frente',
    icon: ShoppingCart,
    features: ['PDV com TEF integrado', 'Convênios e crediário próprio', 'Reserva de produtos', 'Promoções e campanhas configuráveis', 'Recebimentos em totens de auto atendimento'],
  },
  {
    key: 'fiscal',
    icon: FileText,
    features: ['NFC-e e NF-e', 'SPED Fiscal e SPED Contribuições', 'DIFAL e CEST', 'Carta de Correção e Nota Fiscal Complementar', 'Manifesto de NF-e com importação de notas de entrada', 'Adequação à nova reforma tributária (IBS/CBS)'],
  },
  {
    key: 'financeiro',
    icon: Wallet,
    features: ['Contas a pagar/receber integrados', 'DRE e fluxo de caixa automáticos', 'Conciliação de cartão integrada', 'Conciliação bancária automatizada', 'Tele cobrança SPC/SERASA'],
  },
  {
    key: 'fidelidade',
    icon: Gift,
    features: ['Cashback configurável', 'Histórico de compras por cliente', 'Integração com adquirentes', 'Campanhas de retenção'],
  },
  {
    key: 'bi',
    icon: BarChart3,
    features: ['Power BI integrado nativamente', 'Dashboards de vendas e faturamento', 'Análise de estoque e compras', 'Relatórios financeiros visuais'],
  },
  {
    key: 'tablet',
    icon: Tablet,
    features: ['Venda mobile em tempo real', 'Disponibilidade multi-loja', 'Sugestão de produtos similares', 'Complementos automáticos'],
  },
]

export const segments = [
  { key: 'oticas', icon: Eye, color: '#6AB8EE' },
  { key: 'varejo', icon: ShoppingBag, color: '#34D399' },
  { key: 'autopecas', icon: Car, color: '#F59E0B' },
  { key: 'moda', icon: Shirt, color: '#EC4899' },
]

export const partners = [
  { name: 'Microsoft', products: 'Azure, SQL Server, Power BI' },
  { name: 'Oracle', products: 'Oracle Database' },
  { name: 'Fiserv', products: 'SiTef, Carat, Hub de Pix, Adquirência' },
  { name: 'Luxottica', products: 'Integração STAR para óticas' },
  { name: 'Prática TI', products: 'Revenda e consultoria autorizada' },
]

export const testimonials = [
  {
    key: 'emilio',
    company: 'Cliente de 50+ anos',
    context: 'Uma das parcerias mais longevas do setor de TI brasileiro',
  },
]

export const differentials = [
  { key: 'experience', icon: Clock },
  { key: 'cloud', icon: Cloud },
  { key: 'support', icon: Headphones },
  { key: 'deploy', icon: Zap },
  { key: 'bi', icon: LineChart },
]

export const pricing = {
  small: {
    perStore: 130,
    perUser: [
      { range: '1-2', price: 80 },
      { range: '3-4', price: 75 },
      { range: '5+', price: 70 },
    ],
    example1User: 210,
    example2Users: 290,
    nfServicos: 95,
    multiStoreDiscount: '10% para mais de 3 lojas',
    implantation: 900,
    implantationInstallments: 3,
    trainingHours: 5,
  },
  medium: {
    perStore: 900,
    perUser: [
      { range: 'até 10', price: 120 },
      { range: '11-20', price: 110 },
      { range: '21-30', price: 100 },
      { range: '30+', price: 90 },
    ],
    cloudSurcharge: '15% do preço do software',
    biSurcharge: '10% do preço do software',
    multiStoreDiscount: '10% nas lojas adicionais',
    implantationRate: 160,
    implantationUnit: 'hora-projeto',
    implantationInstallments: 3,
  },
}

export const faqs = [
  {
    question: 'O NEXGEN funciona 100% na nuvem?',
    answer: 'Sim. O NEXGEN roda em infraestrutura Microsoft Azure com bancos SQL Server ou Oracle. Para lojas com internet instável, há opção de servidores locais de contingência com sincronização automática.',
  },
  {
    question: 'Quanto custa o NEXGEN para uma loja pequena?',
    answer: 'Para lojas de pequeno porte, o investimento começa em R$ 210/mês (1 loja + 1 usuário). A implantação custa R$ 900 em 3 parcelas, com 5 horas de treinamento remoto incluídas.',
  },
  {
    question: 'O NEXGEN tem módulo específico para óticas com laboratório?',
    answer: 'Sim. O NEXGEN Ótica inclui gestão completa de laboratório óptico: controle de dioptria, ordens de serviço, etapas de montagem e surfaçagem, malotes, integração com Luxottica STAR, e predição de prazo de entrega.',
  },
  {
    question: 'Quais segmentos o NEXGEN atende?',
    answer: 'O NEXGEN atende 13+ segmentos: óticas, autopeças, moda/calçados, eletroeletrônicos, móveis, material de construção, importados, veterinários, agrícolas, magazines, cosméticos, franquias e varejo geral.',
  },
  {
    question: 'Como funciona o suporte do Grupo Secrel?',
    answer: 'O suporte é humanizado e multicanal: WhatsApp (+55 85 4042-1068), sistema Praction para chamados, e consultoria dedicada ao sucesso do cliente. Também oferecemos um agente conversacional IA para dúvidas rápidas.',
  },
  {
    question: 'O NEXGEN integra com soluções de pagamento?',
    answer: 'Sim. Temos parceria oficial com a Fiserv, oferecendo SiTef (TEF), Carat (ecossistema completo), Hub de Pix e Adquirência — tudo integrado nativamente ao ERP.',
  },
]

export const trustNumbers = [
  { value: 58, suffix: '', labelKey: 'trust.years' },
  { value: 13, suffix: '+', labelKey: 'trust.segments' },
  { value: 100, suffix: '%', labelKey: 'trust.cloud' },
]
