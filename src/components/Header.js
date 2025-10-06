import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: 'fas fa-home' },
    { href: '#about', label: 'About', icon: 'fas fa-user' },
    { href: '#skills', label: 'Skills', icon: 'fas fa-code' },
    { href: '#projects', label: 'Projects', icon: 'fas fa-folder-open' },
    { href: '#contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-300/30 dark:border-gray-700/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold text-gray-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative hover:text-primary transition-colors duration-300 group flex items-center gap-2 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <i className={`${item.icon} text-sm`}></i>
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.i 
              className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}
              animate={{ rotate: darkMode ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </motion.button>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </motion.button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <i className={`${item.icon} text-primary`}></i>
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;