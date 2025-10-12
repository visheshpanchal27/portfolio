// Domain configuration for multiple URL variations
const getDomainConfig = () => {
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  
  // Define primary domain (for canonical URLs)
  const primaryDomain = 'https://vishesh.work.gd';
  
  // Current domain configuration
  const currentDomain = `${protocol}//${hostname}`;
  
  return {
    primaryDomain,
    currentDomain,
    isCanonical: currentDomain === primaryDomain
  };
};

export const seoConfig = {
  // Primary domain for canonical URLs
  baseUrl: 'https://vishesh.work.gd',
  
  // All domain variations
  domains: [
    'https://vishesh.work.gd',
    'https://www.vishesh.work.gd', 
    'https://portfolio.vishesh.work.gd'
  ],
  
  // Get current domain config
  getDomainConfig,
  
  // Personal Information
  name: 'Vishesh Panchal',
  jobTitle: 'Full Stack Developer & React Specialist',
  email: 'visheshpanchal864@gmail.com',
  
  // Social Media
  social: {
    github: 'https://github.com/visheshpanchal27',
    linkedin: 'https://www.linkedin.com/in/vishesh-panchal-144281353',
    twitter: 'https://twitter.com/visheshpanchal'
  },
  
  // SEO Data
  defaultTitle: 'Vishesh Panchal | Full Stack Developer & React Specialist',
  defaultDescription: 'Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio featuring MERN stack projects, AI applications, and innovative web solutions.',
  keywords: 'Vishesh Panchal, Full Stack Developer, React Developer, MERN Stack, JavaScript, Node.js, MongoDB, Portfolio, Web Development, AI Projects, E-commerce, vishesh.work.gd, portfolio.vishesh.work.gd',
  image: 'https://res.cloudinary.com/dhyc478ch/image/upload/v1759829478/main_logo_r5dmsz.png',
  
  // Domain-specific titles and descriptions
  domainSpecific: {
    'vishesh.work.gd': {
      title: 'Vishesh Panchal | Official Portfolio - Full Stack Developer',
      description: 'Official website of Vishesh Panchal - Full Stack Developer specializing in MERN Stack, AI applications, and modern web development. Explore projects and get in touch.',
      keywords: 'Vishesh Panchal official, vishesh.work.gd, Full Stack Developer, MERN Stack Expert'
    },
    'www.vishesh.work.gd': {
      title: 'Vishesh Panchal | Professional Portfolio - MERN Stack Developer', 
      description: 'Professional portfolio of Vishesh Panchal showcasing expertise in React, Node.js, MongoDB, AI projects, and e-commerce solutions. Available for freelance work.',
      keywords: 'Vishesh Panchal professional, www.vishesh.work.gd, MERN Stack Developer, React Expert'
    },
    'portfolio.vishesh.work.gd': {
      title: 'Vishesh Panchal Portfolio | Full Stack Developer & AI Specialist',
      description: 'Complete portfolio showcasing Vishesh Panchal\'s work in Full Stack Development, MERN Stack projects, AI applications, and innovative web solutions.',
      keywords: 'Vishesh Panchal portfolio, portfolio.vishesh.work.gd, Full Stack Projects, AI Developer'
    }
  },
  
  // Skills for structured data
  skills: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Express.js', 'Python', 'Java', 'Machine Learning', 'TypeScript', 'Tailwind CSS'],
  
  // Page-specific SEO
  pages: {
    home: {
      title: 'Vishesh Panchal | Full Stack Developer Portfolio',
      description: 'Welcome to my portfolio! I\'m a Full Stack Developer passionate about creating innovative web solutions with React, Node.js, and modern technologies.',
      keywords: 'portfolio, full stack developer, react developer, web development, vishesh panchal, vishesh.work.gd'
    },
    about: {
      title: 'About Vishesh Panchal | Full Stack Developer',
      description: 'Learn about my journey as a Full Stack Developer, my skills in React, Node.js, and my passion for creating innovative digital solutions.',
      keywords: 'about vishesh panchal, full stack developer experience, react expertise, web development skills'
    },
    projects: {
      title: 'Projects by Vishesh Panchal | MERN Stack & AI Applications',
      description: 'Explore my featured projects including MERN e-commerce platforms, AI DeepFake detectors, and innovative web applications built with modern technologies.',
      keywords: 'vishesh panchal projects, mern stack projects, ai applications, react projects, web development portfolio'
    },
    skills: {
      title: 'Technical Skills | Vishesh Panchal - Full Stack Developer',
      description: 'Discover my technical expertise in React, Node.js, MongoDB, Python, Java, and modern web development technologies.',
      keywords: 'technical skills, react expertise, node.js, mongodb, python, java, web development skills'
    },
    contact: {
      title: 'Contact Vishesh Panchal | Full Stack Developer',
      description: 'Get in touch with me for web development projects, collaborations, or job opportunities. Let\'s build something amazing together!',
      keywords: 'contact vishesh panchal, hire full stack developer, web development services, react developer contact, vishesh.work.gd contact'
    }
  },
  
  // Get SEO data based on current domain
  getSEOForDomain: (hostname) => {
    const domainKey = hostname.replace('https://', '').replace('http://', '');
    return seoConfig.domainSpecific[domainKey] || {
      title: seoConfig.defaultTitle,
      description: seoConfig.defaultDescription, 
      keywords: seoConfig.keywords
    };
  },
}
