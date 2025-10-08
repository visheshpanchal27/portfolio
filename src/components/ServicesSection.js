import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and MongoDB. From concept to deployment.',
      features: ['MERN Stack Development', 'API Design & Integration', 'Database Architecture', 'Cloud Deployment'],
      icon: 'fas fa-code',
      gradient: 'from-blue-500 to-purple-600',
      price: 'Starting at $2000'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Solutions',
      description: 'Custom AI applications including computer vision, data analysis, and intelligent automation solutions for business needs.',
      features: ['Computer Vision', 'Data Analysis', 'ML Model Development', 'AI Integration'],
      icon: 'fas fa-brain',
      gradient: 'from-purple-500 to-pink-600',
      price: 'Starting at $3000'
    },
    {
      id: 3,
      title: 'E-Commerce Development',
      description: 'Complete e-commerce solutions with payment integration, inventory management, and admin dashboards for online businesses.',
      features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Security Implementation'],
      icon: 'fas fa-shopping-cart',
      gradient: 'from-green-500 to-teal-600',
      price: 'Starting at $2500'
    },
    {
      id: 4,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology stack selection, architecture design, and best practices for your development projects.',
      features: ['Architecture Review', 'Technology Selection', 'Code Optimization', 'Performance Audit'],
      icon: 'fas fa-lightbulb',
      gradient: 'from-orange-500 to-red-600',
      price: 'Starting at $150/hour'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Professional development services to bring your ideas to life with cutting-edge technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-2xl mr-4`}>
                    <i className={service.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" itemProp="name">
                      {service.title}
                    </h3>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" itemProp="description">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started <i className="fas fa-arrow-right ml-2"></i>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss your requirements and create something amazing together
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-rocket"></i>
            Get Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;