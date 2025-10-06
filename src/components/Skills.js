import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 95, icon: 'fab fa-react', color: 'text-cyan-500' },
        { name: 'JavaScript', level: 90, icon: 'fab fa-js-square', color: 'text-yellow-500' },
        { name: 'Java', level: 85, icon: 'fas fa-coffee', color: 'text-red-600' },
        { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: 'text-orange-500' },
        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', color: 'text-blue-500' },
        { name: 'Tailwind CSS', level: 88, icon: 'fas fa-wind', color: 'text-teal-500' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'fas fa-server',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, icon: 'fab fa-node-js', color: 'text-green-500' },
        { name: 'Express.js', level: 80, icon: 'fas fa-code', color: 'text-gray-600' },
        { name: 'MongoDB', level: 75, icon: 'fas fa-database', color: 'text-green-600' },
        { name: 'MySQL', level: 70, icon: 'fas fa-database', color: 'text-blue-600' },
        { name: 'REST APIs', level: 85, icon: 'fas fa-exchange-alt', color: 'text-purple-500' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: 'fab fa-git-alt', color: 'text-orange-600' },
        { name: 'VS Code', level: 95, icon: 'fas fa-code', color: 'text-blue-600' },
        { name: 'AWS', level: 65, icon: 'fab fa-aws', color: 'text-orange-500' },
        { name: 'Postman', level: 85, icon: 'fas fa-paper-plane', color: 'text-orange-500' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Mastering modern technologies to build exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? `bg-gradient-to-r ${skillCategories[category].color} text-white shadow-lg`
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${skillCategories[category].icon} mr-2`}></i>
              {skillCategories[category].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white/90 dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden backdrop-blur-sm">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-5 transition-all duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.i 
                        className={`${skill.icon} text-2xl ${skill.color}`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      ></motion.i>
                      <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    </div>
                    <span className={`text-sm font-bold ${skill.color}`}>{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="mt-3 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${skillCategories[activeCategory].color} rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100`}
                  style={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.3), transparent) border-box`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Skills;