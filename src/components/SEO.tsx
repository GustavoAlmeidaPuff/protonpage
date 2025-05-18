import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
}

const SEO = ({
  title = 'Proton Software | Soluções Digitais Inovadoras',
  description = 'Transformando ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software, aplicativos e sistemas empresariais.',
  keywords = 'desenvolvimento de software, aplicativos móveis, sistemas empresariais, inteligência artificial, tecnologia, desenvolvimento web, consultoria em TI, soluções digitais, inovação tecnológica',
  ogImage = '/images/logo sem nome (sem fundo).png',
  ogUrl = 'https://protonsoftware.com.br'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  )
}

export default SEO 