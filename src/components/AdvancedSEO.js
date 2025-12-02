import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedSEO = () => {
  useEffect(() => {
    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            // Send performance data to analytics
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
          }
        }, 0);
      });
    }

    // Core Web Vitals tracking
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Add FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Vishesh Panchal offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vishesh Panchal offers full stack development services including MERN stack development, React.js applications, Node.js backend development, AI applications, and e-commerce solutions."
          }
        },
        {
          "@type": "Question", 
          "name": "What technologies does Vishesh specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vishesh specializes in React.js, Node.js, MongoDB, Express.js, JavaScript, TypeScript, Python, AI/ML, Computer Vision, and modern web technologies."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Vishesh Panchal for projects?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "You can contact Vishesh through the contact form on this website, email, or connect via LinkedIn and GitHub profiles listed in the contact section."
          }
        }
      ]
    };

    // Add Review Schema
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Person",
        "name": "Vishesh Panchal"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Professional Portfolio"
      },
      "reviewBody": "Excellent full stack developer with strong expertise in MERN stack and AI applications. Delivers high-quality, scalable solutions."
    };

    // Inject schemas
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const reviewScript = document.createElement('script');
    reviewScript.type = 'application/ld+json';
    reviewScript.textContent = JSON.stringify(reviewSchema);
    document.head.appendChild(reviewScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(reviewScript);
    };
  }, []);

  return (
    <Helmet>
      {/* Advanced Meta Tags */}
      <meta name="application-name" content="Vishesh Panchal Portfolio" />
      <meta name="msapplication-tooltip" content="Full Stack Developer Portfolio" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-navbutton-color" content="#6366f1" />
      
      {/* Rich Snippets */}
      <meta name="article:author" content="Vishesh Panchal" />
      <meta name="article:publisher" content="https://vishesh.work.gd" />
      <meta name="article:section" content="Technology" />
      <meta name="article:tag" content="Full Stack Development, MERN Stack, React, Node.js, AI" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="India" />
      <meta name="business:contact_data:locality" content="India" />
      <meta name="business:contact_data:region" content="India" />
      <meta name="business:contact_data:country_name" content="India" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      
      {/* Resource Hints */}
      <link rel="prefetch" href="/manifest.json" />
      <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" as="style" />
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.ahrefs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https: blob:; connect-src 'self' https:;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Accessibility */}
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      
      {/* Theme Color for different modes */}
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
      
      {/* Ensure proper viewport behavior */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    </Helmet>
  );
};

export default AdvancedSEO;