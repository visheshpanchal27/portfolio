import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'MERN E-Commerce Platform',
      description: '🚀 FLAGSHIP PROJECT - Production-ready e-commerce with advanced security, PayPal integration, and enterprise-level features.',
      longDescription: 'Enterprise-grade e-commerce platform with JWT & Google OAuth authentication, PayPal payments, advanced security (XSS protection, rate limiting), real-time monitoring, internationalization support, and comprehensive admin management. Deployed on Netlify with backend on Render.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux Toolkit', 'Tailwind CSS', 'PayPal', 'JWT', 'Cloudinary', 'Helmet.js'],
      category: 'fullstack',
      github: 'https://github.com/visheshpanchal27/Mern',
      live: 'https://shopping-canter.netlify.app',
      image: '🛒',
      gradient: 'from-blue-500 to-purple-600',
      features: ['Advanced Security & XSS Protection', 'PayPal & Google OAuth Integration', 'Real-time Monitoring & Analytics', 'Multi-language Support', 'Production Deployment']
    },
    {
      id: 2,
      title: 'AI DeepFake Detector',
      description: '🧠 ADVANCED AI PROJECT - Cutting-edge deepfake detection system with 79.2% accuracy using computer vision and ML.',
      longDescription: 'Advanced AI-powered detection system built with Python, OpenCV, and machine learning algorithms. Capable of analyzing images and videos to distinguish between human-created and AI-generated content with industry-level accuracy rates and comprehensive reporting.',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'AI', 'TensorFlow'],
      category: 'ai',
      github: 'https://github.com/visheshpanchal27/DeepFakeDetector',
      live: null,
      image: '🤖',
      gradient: 'from-purple-500 to-pink-600',
      features: ['79.2% Accuracy Rate', 'Real-time Detection', 'Multi-format Support', 'Batch Processing', 'HTML Reports']
    },
    {
      id: 3,
      title: 'LV Shopping Center',
      description: 'Java-based e-commerce platform built with JSP, Servlets, and CSS featuring complete shopping functionality.',
      longDescription: 'A comprehensive e-commerce solution developed using Java web technologies including JSP, Servlets, and CSS. Features user authentication, product catalog, shopping cart, and order management system.',
      tech: ['Java', 'JSP', 'Servlets', 'CSS', 'MySQL'],
      category: 'backend',
      github: 'https://github.com/visheshpanchal27/LV_Shopping_Center',
      live: null,
      image: '🏪',
      gradient: 'from-red-500 to-orange-600',
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Order Management']
    },
    {
      id: 4,
      title: 'Banking Management System',
      description: 'Console-based banking application developed in Java with complete banking operations and account management.',
      longDescription: 'A terminal-based banking management system built with Core Java featuring account creation, transactions, balance inquiry, and comprehensive banking operations with secure data handling.',
      tech: ['Java', 'Core Java', 'File Handling', 'OOP'],
      category: 'backend',
      github: 'https://github.com/visheshpanchal27/java',
      live: null,
      image: '🏦',
      gradient: 'from-green-500 to-teal-600',
      features: ['Account Management', 'Transaction Processing', 'Balance Inquiry', 'Secure Operations']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th' },
    { id: 'fullstack', name: 'Full Stack', icon: 'fas fa-layer-group' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'ai', name: 'AI/ML', icon: 'fas fa-brain' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions across different technologies and domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/90 dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 relative backdrop-blur-sm">
                {/* Project Image/Icon */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <motion.div
                    className="text-white"
                    animate={hoveredProject === project.id ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-github text-xl"></i>
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="fas fa-external-link-alt text-xl"></i>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>
                  
                  {/* Features */}
                  <motion.div
                    className="mb-4 space-y-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={hoveredProject === project.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <i className="fas fa-check text-green-500 text-xs"></i>
                        {feature}
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full font-medium shadow-sm`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-center text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg transition-all duration-300 text-center text-sm font-medium hover:shadow-lg`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in collaborating on innovative projects?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-rocket"></i>
            Let's Build Something Amazing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;