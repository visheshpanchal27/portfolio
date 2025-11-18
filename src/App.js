import React, { useState, useEffect } from 'react';
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
import DomainHandler from './components/DomainHandler';
import ContentSection from './components/ContentSection';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <HelmetProvider>
      <SEOHead />
      <DomainHandler />
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ContentSection />
            <ServicesSection />
            <BlogSection />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </HelmetProvider>
  );
}

export default App;