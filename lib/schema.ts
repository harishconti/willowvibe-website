import { SITE_URL } from '@/lib/constants';

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WillowVibe Digital Solutions',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: 'Full-stack development, AI integration, data engineering, and cloud infrastructure for modern businesses.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'Bangalore',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@willowvibe.com',
  },
  sameAs: [
    'https://linkedin.com/company/willowvibe',
    'https://github.com/harishconti',
  ],
})

export const generateServiceSchema = (service: {
  name: string
  description: string
  url: string
  priceRange: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'WillowVibe Digital Solutions',
  },
  url: service.url,
  priceRange: service.priceRange,
  areaServed: 'Worldwide',
})

export const generateArticleSchema = (article: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  url: string
  image: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  author: {
    '@type': 'Person',
    name: article.author,
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  publisher: {
    '@type': 'Organization',
    name: 'WillowVibe Digital Solutions',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.png`,
    },
  },
  image: article.image,
  mainEntityOfPage: article.url,
})

export const generateBreadcrumbSchema = (items: Array<{
  name: string
  url: string
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
