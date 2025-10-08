import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: 'Fresher', label: 'Years Experience', icon: 'fas fa-calendar-alt', color: 'from-blue-500 to-cyan-500' },
    { number: '4+', label: 'Projects Completed', icon: 'fas fa-code', color: 'from-green-500 to-emerald-500' },
    { number: '5+', label: 'Technologies', icon: 'fas fa-tools', color: 'from-purple-500 to-pink-500' },
    { number: '60%', label: 'Client Satisfaction', icon: 'fas fa-heart', color: 'from-red-500 to-rose-500' }
  ];

  const skills = [
    { name: 'Frontend Development', level: 95, icon: 'fas fa-laptop-code' },
    { name: 'Backend Development', level: 85, icon: 'fas fa-server' },
    { name: 'UI/UX Design', level: 80, icon: 'fas fa-paint-brush' },
    { name: 'Problem Solving', level: 90, icon: 'fas fa-lightbulb' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" itemScope itemType="https://schema.org/Person">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <div className="pl-8 space-y-6 text-lg leading-relaxed">
                <p className="text-gray-800 dark:text-gray-300">
                  Hello! I'm <span className="font-bold text-purple-700 dark:text-purple-400" itemProp="name">Vishesh Panchal</span>, a passionate <span itemProp="jobTitle">full-stack developer</span> specializing in <span itemProp="knowsAbout">MERN stack development</span>, <span itemProp="knowsAbout">AI applications</span>, and modern web technologies. Based in India, I create innovative digital solutions that drive business growth and user engagement.
                </p>
                <p className="text-gray-800 dark:text-gray-300" itemProp="description">
                  With expertise in <span itemProp="knowsAbout">React.js</span>, <span itemProp="knowsAbout">Node.js</span>, <span itemProp="knowsAbout">MongoDB</span>, and <span itemProp="knowsAbout">Python</span>, I build scalable web applications, e-commerce platforms, and AI-powered solutions. My flagship project, a production-ready MERN e-commerce platform with 79.2% AI accuracy in deepfake detection, showcases my ability to deliver enterprise-level solutions.
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  I'm committed to writing clean, secure code following industry best practices. From payment gateway integrations to machine learning implementations, I transform complex requirements into user-friendly applications. Available for freelance projects, full-time opportunities, and technical consulting worldwide.
                </p>
              </div>
            </div>
            
            {/* Skills Progress */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Core Competencies</h3>
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <i className={`${skill.icon} text-purple-600 dark:text-purple-400`}></i>
                      <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="relative bg-white/90 dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <i className={`${stat.icon} text-xl`}></i>
                    </motion.div>
                    
                    <motion.div 
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-purple-300 dark:group-hover:border-purple-600 rounded-2xl transition-all duration-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-rocket"></i>
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;