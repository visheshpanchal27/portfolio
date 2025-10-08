import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <HelmetProvider>
      <SEOHead />
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <motion.div
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ServicesSection />
          <BlogSection />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </HelmetProvider>
  );
}

export default App;