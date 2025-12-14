import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import DomainHandler from './components/DomainHandler';

import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';
import ResponsiveWrapper from './components/ResponsiveWrapper';
import { ColorProvider } from './components/ColorProvider';
import ThemeToggle from './components/ThemeToggle';
import './styles/responsive.css';
import './styles/premium-dark.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <DomainHandler />
        {loading ? (
          <LoadingScreen />
        ) : (
          <ResponsiveWrapper>
            <ColorProvider darkMode={darkMode}>
              <div className={`min-h-screen w-full ${darkMode ? 'dark' : ''}`}>
                <div className="fixed top-6 right-8 z-[100]">
                  <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </div>
                <div className="fixed inset-x-0 top-0 z-50">
                  <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} isScrolled={isScrolled} />
                </div>
                <main className="pt-24 w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-black dark:via-gray-950 dark:to-black text-slate-800 dark:text-white transition-all duration-700">
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />

                  <Contact />
                </main>
                <Footer />
              </div>
            </ColorProvider>
          </ResponsiveWrapper>
        )}
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;