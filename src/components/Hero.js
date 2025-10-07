import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const particleVariants = {
  animate: {
    y: [-20, 20],
    opacity: [0.2, 1, 0.2],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexRef = useRef(0);

  const texts = ['Full Stack Developer', 'React Developer', 'Problem Solver'];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let typingInterval = setInterval(() => {
      if (indexRef.current < currentText.length) {
        setDisplayText(currentText.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText('');
          indexRef.current = 0;
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [currentIndex, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Advanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-purple-900 dark:to-black"></div>

      <motion.div
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 relative">
          <img
            src="https://res.cloudinary.com/dhyc478ch/image/upload/v1759829478/main_logo_r5dmsz.png"
            alt="VP Logo"
            className="w-full h-full rounded-full object-cover shadow-2xl"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          Vishesh Panchal
        </h1>

        <div className="text-lg sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 h-8 sm:h-12 flex items-center justify-center">
          <span className="text-yellow-300 dark:text-yellow-300 font-medium">{displayText}</span>
          <span className="text-white dark:text-white ml-1 animate-pulse">|</span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-100 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
          Crafting digital experiences with modern technologies. Passionate about creating innovative solutions that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-2xl w-full sm:w-auto text-center hover:shadow-xl transition-shadow duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-rocket"></i>
              <span className="text-sm sm:text-base">Explore My Work</span>
            </span>
          </a>

          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
          >
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-paper-plane"></i>
              <span className="text-sm sm:text-base">Let's Connect</span>
            </span>
          </a>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { icon: 'fab fa-github', url: 'https://github.com/visheshpanchal27', color: 'hover:text-gray-400', label: 'GitHub' },
            { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/vishesh-panchal-144281353', color: 'hover:text-blue-400', label: 'LinkedIn' },
            { icon: 'fab fa-twitter', url: 'https://twitter.com/visheshpanchal', color: 'hover:text-sky-400', label: 'Twitter' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`text-xl sm:text-2xl text-white/70 ${social.color} transition-all duration-300 p-2`}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-white/70 hover:text-white transition-colors group">
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <span className="text-xs sm:text-sm font-medium">Discover More</span>
              <motion.i
                className="fas fa-chevron-down text-lg sm:text-xl group-hover:text-purple-300"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
