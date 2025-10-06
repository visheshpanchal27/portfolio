import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/visheshpanchal27', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/vishesh-panchal-144281353', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/visheshpanchal', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: 'fas fa-envelope', url: 'mailto:visheshpanchal864@gmail.com', label: 'Email', color: 'hover:text-red-400' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Vishesh Panchal
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions. 
              Let's build something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <i className="fas fa-chevron-right text-xs text-purple-400 group-hover:text-pink-400 transition-colors"></i>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Let's Connect</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:visheshpanchal864@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-envelope text-purple-400 group-hover:text-pink-400 transition-colors"></i>
                <span className="text-sm">visheshpanchal864@gmail.com</span>
              </motion.a>
              
              <motion.div
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-map-marker-alt text-purple-400"></i>
                <span className="text-sm">India</span>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-briefcase text-purple-400"></i>
                <span className="text-sm">Open to opportunities</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              &copy; {currentYear} Vishesh Panchal. All rights reserved.
            </motion.p>
            
            <motion.div
              className="flex items-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span>Made with</span>
              <motion.i 
                className="fas fa-heart text-red-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              ></motion.i>
              <span>and</span>
              <motion.i 
                className="fab fa-react text-cyan-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              ></motion.i>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </footer>
  );
};

export default Footer;