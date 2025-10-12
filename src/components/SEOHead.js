import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seo';

const SEOHead = ({ 
  title,
  description,
  keywords,
  image = seoConfig.image,
  url,
  type = 'website'
}) => {
  const [domainConfig, setDomainConfig] = useState(null);
  const [seoData, setSeoData] = useState(null);
  
  useEffect(() => {
    const config = seoConfig.getDomainConfig();
    const hostname = window.location.hostname;
    const domainSEO = seoConfig.getSEOForDomain(hostname);
    
    setDomainConfig(config);
    setSeoData(domainSEO);
  }, []);
  
  if (!domainConfig || !seoData) {
    return null;
  }
  
  // Use provided values or fall back to domain-specific or default values
  const finalTitle = title || seoData.title || seoConfig.defaultTitle;
  const finalDescription = description || seoData.description || seoConfig.defaultDescription;
  const finalKeywords = keywords || seoData.keywords || seoConfig.keywords;
  const canonicalUrl = url || seoConfig.baseUrl + window.location.pathname + window.location.hash;
  const currentUrl = domainConfig.currentDomain + window.location.pathname + window.location.hash;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": seoConfig.name,
    "url": canonicalUrl,
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
      seoConfig.social.twitter,
      ...seoConfig.domains
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": seoConfig.email,
      "contactType": "Professional"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };
  
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vishesh Panchal Portfolio",
    "alternateName": ["Vishesh Panchal", "Vishesh Portfolio", "vishesh.work.gd"],
    "url": canonicalUrl,
    "description": finalDescription,
    "author": {
      "@type": "Person",
      "name": seoConfig.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": canonicalUrl + "?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{finalTitle}</title>
        <meta name="title" content={finalTitle} />
        <meta name="description" content={finalDescription} />
        <meta name="keywords" content={finalKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Alternate URLs for different domains */}
        {seoConfig.domains.map((domain, index) => {
          if (domain !== domainConfig.primaryDomain) {
            return <link key={index} rel="alternate" href={domain + window.location.pathname + window.location.hash} />;
          }
          return null;
        })}
        
        {/* Domain verification and ownership */}
        <meta name="domain-verification" content="vishesh.work.gd" />
        <meta name="author" content="Vishesh Panchal" />
        <meta name="creator" content="Vishesh Panchal" />
        <meta name="publisher" content="Vishesh Panchal" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={finalTitle} />
        <meta property="og:description" content={finalDescription} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Vishesh Panchal Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={finalTitle} />
        <meta property="twitter:description" content={finalDescription} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:creator" content="@visheshpanchal" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </script>
      </Helmet>
      
      {/* Hidden SEO Content */}
      <div className="sr-only" itemScope itemType="https://schema.org/Person">
        <h1 itemProp="name">Vishesh Panchal</h1>
        <span itemProp="jobTitle">Full Stack Developer</span>
        <span itemProp="jobTitle">MERN Stack Developer</span>
        <span itemProp="jobTitle">React Developer</span>
        <span itemProp="jobTitle">AI Developer</span>
        <span itemProp="description">
          Vishesh Panchal is a professional Full Stack Developer specializing in MERN Stack development, 
          AI applications, React.js, Node.js, MongoDB, Express.js, Python, Machine Learning. 
          Official website: vishesh.work.gd, portfolio.vishesh.work.gd
        </span>
        {seoConfig.skills.map((skill, index) => (
          <span key={index} itemProp="knowsAbout">{skill}</span>
        ))}
        <span itemProp="url">{canonicalUrl}</span>
        <span itemProp="email">{seoConfig.email}</span>
        {seoConfig.domains.map((domain, index) => (
          <span key={index} itemProp="sameAs">{domain}</span>
        ))}
      </div>
    </>
  );
};

export default SEOHead;