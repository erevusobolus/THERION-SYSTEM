'use client'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service' | 'contactpoint'
  data?: any
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EREVUS CLUSTER",
          "alternateName": "EREVUS",
          "url": "https://erevus-therion.netlify.app",
          "logo": "https://erevus-therion.netlify.app/erevus-logo.png",
          "description": "Joining forces to solve problems, make products, and build connections. Organizing collective efforts under one umbrella for shared success.",
          "foundingDate": "2024",
          "sameAs": [
            "https://erevus-therion.netlify.app"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "erevus.ai@proton.me",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        }
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "EREVUS CLUSTER",
          "url": "https://erevus-therion.netlify.app",
          "description": "Collaborative Force Network - Joining forces to solve problems, make products, and build connections.",
          "publisher": {
            "@type": "Organization",
            "name": "EREVUS CLUSTER"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://erevus-therion.netlify.app/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "EREVUS Development Services",
          "provider": {
            "@type": "Organization",
            "name": "EREVUS CLUSTER"
          },
          "description": "Professional development services including web applications, game development, and collaborative solutions.",
          "serviceType": "Software Development",
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://erevus-therion.netlify.app/contact",
            "servicePhone": "Contact via website",
            "availableLanguage": "English"
          }
        }
      
      default:
        return data || {}
    }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}