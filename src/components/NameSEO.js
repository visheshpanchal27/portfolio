import React from 'react';
import { motion } from 'framer-motion';

const NameSEO = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900" itemScope itemType="https://schema.org/Person">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6" itemProp="name">
            Vishesh Panchal
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-8" itemProp="jobTitle">
            Official Portfolio - Full Stack Developer & MERN Stack Expert
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p itemProp="description">
              <strong>Vishesh Panchal</strong> is a professional <span itemProp="knowsAbout">Full Stack Developer</span> specializing in <span itemProp="knowsAbout">MERN Stack development</span>, <span itemProp="knowsAbout">AI applications</span>, and modern web technologies. This is the official website and portfolio of <strong>Vishesh Panchal</strong>.
            </p>
            
            <p>
              <strong>Vishesh Panchal</strong> has expertise in <span itemProp="knowsAbout">React.js</span>, <span itemProp="knowsAbout">Node.js</span>, <span itemProp="knowsAbout">MongoDB</span>, <span itemProp="knowsAbout">Express.js</span>, <span itemProp="knowsAbout">Python</span>, and <span itemProp="knowsAbout">Machine Learning</span>. Contact <strong>Vishesh Panchal</strong> for web development projects, e-commerce solutions, and AI applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Vishesh Panchal - Developer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Expert in MERN Stack development with production-ready applications and AI integration expertise.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Vishesh Panchal - Portfolio</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Showcasing innovative projects including e-commerce platforms, AI applications, and web solutions.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Hire Vishesh Panchal</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Available for freelance projects, full-time opportunities, and technical consulting worldwide.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 space-y-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Vishesh Panchal</strong> • Full Stack Developer • MERN Stack Expert • AI Developer • React Specialist • Node.js Expert
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Official website: <span itemProp="url">https://portfolio.vishesh.work.gd</span> • Email: <span itemProp="email">visheshpanchal864@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NameSEO;