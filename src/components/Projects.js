import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useResponsive } from './ResponsiveWrapper';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = useResponsive();
  const constraintsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'MERN E-Commerce Platform',
      description: 'Production-ready e-commerce with PayPal integration, JWT authentication, and enterprise security features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'PayPal API', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/visheshpanchal27/Mern',
      live: 'https://shopping-canter.netlify.app',
      icon: 'fas fa-shopping-cart',
      gradient: 'from-gray-900 to-gray-800',
      stats: { users: '500+', revenue: '$10K+' },
      features: ['PayPal Integration', 'JWT Authentication', 'Real-time Analytics', 'Admin Dashboard'],
      metrics: { performance: 98, security: 95, scalability: 92 }
    },
    {
      id: 2,
      title: 'AI DeepFake Detector',
      description: 'Machine learning system for deepfake detection with 79.2% accuracy using computer vision algorithms.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
      category: 'ai',
      github: 'https://github.com/visheshpanchal27/DeepFakeDetector',
      live: null,
      icon: 'fas fa-brain',
      gradient: 'from-gray-800 to-gray-500',
      stats: { accuracy: '79.2%', models: '5+' },
      features: ['Computer Vision', 'Real-time Detection', 'Batch Processing', 'ML Pipeline'],
      metrics: { accuracy: 79, speed: 85, reliability: 88 }
    },
    {
      id: 3,
      title: 'LV Shopping Center',
      description: 'Java web application with JSP, Servlets, and MySQL for complete e-commerce functionality.',
      tech: ['Java', 'JSP', 'Servlets', 'MySQL'],
      category: 'backend',
      github: 'https://github.com/visheshpanchal27/LV_Shopping_Center',
      live: null,
      icon: 'fas fa-store',
      gradient: 'from-gray-800 to-gray-500',
      stats: { products: '100+', users: '50+' },
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Order Management'],
      metrics: { functionality: 90, design: 85, performance: 80 }
    },
    {
      id: 4,
      title: 'Banking Management System',
      description: 'Core Java console application with secure banking operations and account management features.',
      tech: ['Java', 'OOP', 'File Handling'],
      category: 'backend',
      github: 'https://github.com/visheshpanchal27/java',
      live: null,
      icon: 'fas fa-university',
      gradient: 'from-slate-600 to-slate-800',
      stats: { accounts: '25+', transactions: '100+' },
      features: ['Account Management', 'Transaction Processing', 'Security Features', 'Data Handling'],
      metrics: { security: 95, reliability: 90, efficiency: 88 }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th' },
    { id: 'fullstack', name: 'Full Stack', icon: 'fas fa-layer-group' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'ai', name: 'AI/ML', icon: 'fas fa-brain' }
  ];

  const filteredProjects = useMemo(() => 
    filter === 'all' ? projects : projects.filter(project => project.category === filter),
    [filter, projects]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12,
        delayChildren: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9,
      rotateX: -15,
      filter: 'blur(10px)'
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 1,
        duration: 0.8
      }
    }
  };

  const ProjectCard3D = ({ project, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={cardRef}
        variants={itemVariants}
        style={{ 
          rotateX, 
          rotateY,
          transformStyle: 'preserve-3d',
          transformPerspective: 1000
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ 
          z: 50,
          transition: { duration: 0.3 }
        }}
        className="group relative"
      >
        <motion.div
          className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10"
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ 
            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)'
          }}
        >
          {/* Animated gradient overlay */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `linear-gradient(135deg, ${project.gradient.includes('gray-900') ? '#1f1f1f' : '#4a5568'} 0%, transparent 100%)`,
              mixBlendMode: 'overlay'
            }}
          />



          {/* Header with parallax effect */}
          <div className="relative h-44 overflow-hidden">
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
              style={{ 
                scale: useTransform(y, [-100, 100], [1.1, 1]),
                transformStyle: 'preserve-3d',
                translateZ: 30
              }}
            >

            </motion.div>

            {/* Floating icon */}
            <motion.div 
              className="absolute top-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <i className={`${project.icon} text-white text-2xl`} />
            </motion.div>

            {/* Status badge */}
            <motion.div 
              className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/20"
            >
              <motion.div 
                className={`w-2 h-2 rounded-full ${project.live ? 'bg-green-400' : 'bg-yellow-400'}`}
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white text-sm font-semibold">
                {project.live ? 'Live' : 'Dev'}
              </span>
            </motion.div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%', skewX: -20 }}
              animate={{ x: '200%' }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 5,
                ease: 'easeInOut'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative p-5">
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-1">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4">
              {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{value}</span>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-lg">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={() => setSelectedProject(project)}
                className="flex-1 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-semibold text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>

              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-external-link-alt" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Glow effect */}
          <motion.div
            className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-700`}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section 
      id="projects" 
      className={`relative overflow-hidden bg-white dark:bg-black ${
        responsive.isMobile ? 'py-12 px-4' : 'py-16 sm:py-20 px-6'
      }`}
    >
      <div className={`container mx-auto max-w-7xl relative z-10 ${
        responsive.isMobile ? 'px-4' : 'px-6 lg:px-8'
      }`}>
        
        {/* Header */}
        <motion.div
          className={`text-center ${
            responsive.isMobile ? 'mb-8' : 'mb-12 lg:mb-16'
          }`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className={`font-bold mb-4 sm:mb-6 elegant-heading ${
              responsive.isMobile ? 'text-3xl' :
              responsive.isTablet ? 'text-4xl' :
              'text-5xl lg:text-6xl'
            }`}
          >
            <span className="text-black dark:text-white font-display">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p 
            className={`text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed ${
              responsive.isMobile ? 'text-base px-4' :
              responsive.isTablet ? 'text-lg px-6' :
              'text-xl px-8'
            }`}
          >
            Showcasing innovative solutions across different technologies and domains.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className={`flex justify-center mb-8 sm:mb-12 ${
            responsive.isMobile ? 'flex-col gap-2 px-4' : 'flex-wrap gap-3 sm:gap-4'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => {
            const isActive = filter === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`relative overflow-hidden font-semibold transition-all duration-300 touch-target ${
                  responsive.isMobile ? 'w-full px-6 py-3 rounded-xl' : 'px-6 py-3 rounded-full'
                } ${
                  isActive
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600'
                }`}
                whileHover={{ 
                  scale: responsive.isMobile ? 1.02 : 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <i className={category.icon} />
                  <span>{category.name}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className={`grid gap-6 ${
              responsive.isMobile ? 'grid-cols-1' :
              responsive.isTablet ? 'grid-cols-1 lg:grid-cols-2' :
              'grid-cols-1 lg:grid-cols-2'
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={filter}
            style={{ perspective: 1000 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard3D key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className={`text-center ${
            responsive.isMobile ? 'mt-12' : 'mt-16'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className={`text-slate-600 dark:text-slate-300 mb-6 ${
            responsive.isMobile ? 'text-base px-4' : 'text-lg'
          }`}>
            Ready to collaborate on innovative projects?
          </p>
          
          <motion.a
            href="#contact"
            className={`inline-flex items-center gap-3 font-bold rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black shadow-xl ${
              responsive.isMobile ? 'px-7 py-3.5 text-base' : 'px-9 py-4 text-lg'
            }`}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-rocket" />
            <span>Let's Build Something Amazing</span>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className={`relative bg-white dark:bg-gray-900 rounded-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 ${
                responsive.isMobile ? 'max-w-sm' : 'max-w-2xl'
              }`}
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-br ${selectedProject.gradient} overflow-hidden ${
                responsive.isMobile ? 'h-32 p-4' : 'h-40 p-6'
              }`}>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-3 right-3 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30 ${
                    responsive.isMobile ? 'w-8 h-8' : 'w-10 h-10'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-times" />
                </motion.button>

                <div className="flex items-center gap-3 h-full">
                  <div className={`bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 flex-shrink-0 ${
                    responsive.isMobile ? 'w-14 h-14' : 'w-16 h-16'
                  }`}>
                    <i className={`${selectedProject.icon} text-white ${
                      responsive.isMobile ? 'text-2xl' : 'text-3xl'
                    }`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 id="project-modal-title" className={`font-bold text-white mb-1 truncate ${
                      responsive.isMobile ? 'text-lg' : 'text-2xl'
                    }`}>
                      {selectedProject.title}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {Object.entries(selectedProject.stats).slice(0, responsive.isMobile ? 1 : 2).map(([key, value]) => (
                        <div key={key} className={`bg-white/20 backdrop-blur-xl rounded-full border border-white/30 ${
                          responsive.isMobile ? 'px-2 py-1' : 'px-3 py-1'
                        }`}>
                          <span className={`text-white font-bold ${
                            responsive.isMobile ? 'text-xs' : 'text-sm'
                          }`}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`overflow-y-auto ${
                responsive.isMobile ? 'max-h-[calc(85vh-8rem)] p-4' : 'max-h-[calc(85vh-10rem)] p-6'
              }`}>
                <p className={`text-gray-700 dark:text-gray-300 leading-relaxed mb-5 ${
                  responsive.isMobile ? 'text-sm' : 'text-base'
                }`}>
                  {selectedProject.description}
                </p>

                {/* Performance Metrics */}
                <div className="mb-5">
                  <h4 className={`font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 ${
                    responsive.isMobile ? 'text-base' : 'text-lg'
                  }`}>
                    <i className="fas fa-chart-line text-blue-500" />
                    Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className={`bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center ${
                        responsive.isMobile ? 'p-2' : 'p-3'
                      }`}>
                        <div className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                          responsive.isMobile ? 'text-xl' : 'text-2xl'
                        }`}>
                          {value}%
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <h4 className={`font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 ${
                    responsive.isMobile ? 'text-base' : 'text-lg'
                  }`}>
                    <i className="fas fa-star text-yellow-500" />
                    Features
                  </h4>
                  <div className={`grid gap-2 ${
                    responsive.isMobile ? 'grid-cols-1' : 'grid-cols-2'
                  }`}>
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className={`flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 ${
                        responsive.isMobile ? 'p-2' : 'p-3'
                      }`}>
                        <div className={`rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 ${
                          responsive.isMobile ? 'w-6 h-6' : 'w-7 h-7'
                        }`}>
                          <i className="fas fa-check text-white text-xs" />
                        </div>
                        <span className={`text-gray-700 dark:text-gray-300 font-medium ${
                          responsive.isMobile ? 'text-xs' : 'text-sm'
                        }`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-5">
                  <h4 className={`font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 ${
                    responsive.isMobile ? 'text-base' : 'text-lg'
                  }`}>
                    <i className="fas fa-code text-purple-500" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className={`bg-gradient-to-r ${selectedProject.gradient} text-white font-semibold rounded-lg ${
                        responsive.isMobile ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={`flex gap-2 ${
                  responsive.isMobile ? 'flex-col' : 'flex-row'
                }`}>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold ${
                      responsive.isMobile ? 'px-4 py-2.5 text-sm' : 'px-5 py-3 text-base'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fab fa-github" />
                    View Code
                  </motion.a>
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-semibold ${
                        responsive.isMobile ? 'px-4 py-2.5 text-sm' : 'px-5 py-3 text-base'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="fas fa-external-link-alt" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;