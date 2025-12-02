import { useEffect } from 'react';
import { seoConfig } from '../config/seo';

const DomainHandler = () => {
  useEffect(() => {
    const handleDomainSEO = () => {
      const hostname = window.location.hostname;
      const currentUrl = window.location.href;
      
      // Add domain-specific meta tags dynamically
      const addMetaTag = (name, content, property = false) => {
        const existingTag = document.querySelector(
          property ? `meta[property="${name}"]` : `meta[name="${name}"]`
        );
        
        if (existingTag) {
          existingTag.setAttribute('content', content);
        } else {
          const meta = document.createElement('meta');
          if (property) {
            meta.setAttribute('property', name);
          } else {
            meta.setAttribute('name', name);
          }
          meta.setAttribute('content', content);
          document.head.appendChild(meta);
        }
      };
      
      // Domain-specific SEO enhancements
      if (hostname === 'vishesh.work.gd') {
        addMetaTag('description', 'Official website of Vishesh Panchal - Full Stack Developer specializing in MERN Stack, AI applications, and modern web development.');
        addMetaTag('keywords', 'Vishesh Panchal official, vishesh.work.gd, Full Stack Developer, MERN Stack Expert, React Developer');
        addMetaTag('og:title', 'Vishesh Panchal | Official Portfolio - Full Stack Developer', true);
      } else if (hostname === 'www.vishesh.work.gd') {
        addMetaTag('description', 'Professional portfolio of Vishesh Panchal showcasing expertise in React, Node.js, MongoDB, AI projects, and e-commerce solutions.');
        addMetaTag('keywords', 'Vishesh Panchal professional, www.vishesh.work.gd, MERN Stack Developer, React Expert, Professional Portfolio');
        addMetaTag('og:title', 'Vishesh Panchal | Professional Portfolio - MERN Stack Developer', true);
      }
      
      // Add structured data for current domain
      const structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": document.title,
        "url": currentUrl,
        "description": document.querySelector('meta[name="description"]')?.content || '',
        "author": {
          "@type": "Person",
          "name": "Vishesh Panchal",
          "url": "https://vishesh.work.gd"
        },
        "mainEntity": {
          "@type": "Person",
          "name": "Vishesh Panchal",
          "jobTitle": "Full Stack Developer",
          "url": currentUrl
        }
      });
      
      // Remove existing structured data script if any
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent.includes('WebPage')) {
        existingScript.remove();
      }
      
      document.head.appendChild(structuredDataScript);
    };
    
    handleDomainSEO();
    
    // Handle URL changes for SPA
    const handleUrlChange = () => {
      setTimeout(handleDomainSEO, 100);
    };
    
    window.addEventListener('popstate', handleUrlChange);
    
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);
  
  return null;
};

export default DomainHandler;