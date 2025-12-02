import { Helmet } from 'react-helmet-async';

const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://vishesh.work.gd/#person",
        "name": "Vishesh Panchal",
        "url": "https://vishesh.work.gd/",
        "image": "https://res.cloudinary.com/dhyc478ch/image/upload/v1759829478/main_logo_r5dmsz.png",
        "jobTitle": "Full Stack Developer",
        "description": "Professional Full Stack Developer specializing in MERN Stack, React.js, Node.js, MongoDB, and AI applications. Expert in building scalable web applications and e-commerce solutions.",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance Developer"
        },
        "knowsAbout": [
          "React.js", "Node.js", "JavaScript", "MongoDB", "Express.js", 
          "Python", "Machine Learning", "AI", "Full Stack Development",
          "MERN Stack", "Web Development", "E-commerce Development"
        ],
        "sameAs": [
          "https://github.com/visheshpanchal27",
          "https://www.linkedin.com/in/vishesh-panchal-144281353"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Computer Science Education"
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "occupationLocation": {
            "@type": "Place",
            "name": "India"
          },
          "skills": "MERN Stack, React.js, Node.js, MongoDB, JavaScript, Python, AI/ML"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://vishesh.work.gd/#website",
        "url": "https://vishesh.work.gd/",
        "name": "Vishesh Panchal - Full Stack Developer Portfolio",
        "description": "Professional portfolio showcasing MERN Stack development expertise, AI projects, and e-commerce solutions by Vishesh Panchal.",
        "publisher": {
          "@id": "https://vishesh.work.gd/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://vishesh.work.gd/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://vishesh.work.gd/#webpage",
        "url": "https://vishesh.work.gd/",
        "name": "Vishesh Panchal - Full Stack Developer | MERN Stack Expert",
        "description": "Explore the professional portfolio of Vishesh Panchal, a skilled Full Stack Developer specializing in MERN Stack, React.js, Node.js, and AI applications. View live projects and technical expertise.",
        "isPartOf": {
          "@id": "https://vishesh.work.gd/#website"
        },
        "about": {
          "@id": "https://vishesh.work.gd/#person"
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": "2024-12-02T12:00:00+00:00",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vishesh.work.gd/"
          }]
        },
        "mainEntity": {
          "@id": "https://vishesh.work.gd/#person"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vishesh.work.gd/#service",
        "name": "Full Stack Development Services",
        "description": "Professional web development services including MERN Stack development, React.js applications, Node.js backends, and AI integration.",
        "provider": {
          "@id": "https://vishesh.work.gd/#person"
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "Full Stack Development",
          "MERN Stack Development", 
          "React.js Development",
          "Node.js Development",
          "AI Application Development",
          "E-commerce Development"
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default JsonLd;