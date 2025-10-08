import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seo';

const SEOHead = ({ 
  title = seoConfig.defaultTitle,
  description = seoConfig.defaultDescription,
  keywords = seoConfig.keywords,
  image = seoConfig.image,
  url = seoConfig.baseUrl,
  type = 'website'
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": seoConfig.name,
    "url": seoConfig.baseUrl,
    "image": seoConfig.image,
    "jobTitle": seoConfig.jobTitle,
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": seoConfig.skills,
    "sameAs": [
      seoConfig.social.github,
      seoConfig.social.linkedin,
      seoConfig.social.twitter
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": seoConfig.email,
      "contactType": "Professional"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Vishesh Panchal Portfolio" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@visheshpanchal" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;