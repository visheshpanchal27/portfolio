import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      color: 'bg-black dark:bg-white',
      skills: [
        { name: 'React.js', level: 95, icon: 'fab fa-react', color: 'text-black dark:text-white' },
        { name: 'JavaScript', level: 90, icon: 'fab fa-js-square', color: 'text-black dark:text-white' },
        { name: 'Java', level: 85, icon: 'fas fa-coffee', color: 'text-black dark:text-white' },
        { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: 'text-black dark:text-white' },
        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', color: 'text-black dark:text-white' },
        { name: 'Tailwind CSS', level: 88, icon: 'fas fa-wind', color: 'text-black dark:text-white' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'fas fa-server',
      color: 'bg-gray-900 dark:bg-gray-200',
      skills: [
        { name: 'Node.js', level: 85, icon: 'fab fa-node-js', color: 'text-black dark:text-white' },
        { name: 'Express.js', level: 80, icon: 'fas fa-code', color: 'text-black dark:text-white' },
        { name: 'MongoDB', level: 75, icon: 'fas fa-database', color: 'text-black dark:text-white' },
        { name: 'MySQL', level: 70, icon: 'fas fa-database', color: 'text-black dark:text-white' },
        { name: 'REST APIs', level: 85, icon: 'fas fa-exchange-alt', color: 'text-black dark:text-white' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      color: 'bg-gray-800 dark:bg-gray-300',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: 'fab fa-git-alt', color: 'text-black dark:text-white' },
        { name: 'VS Code', level: 95, icon: 'fas fa-code', color: 'text-black dark:text-white' },
        { name: 'AWS', level: 65, icon: 'fab fa-aws', color: 'text-black dark:text-white' },
        { name: 'Postman', level: 85, icon: 'fas fa-paper-plane', color: 'text-black dark:text-white' }
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
    <section id="skills" className="py-12 xs:py-16 sm:py-20 px-4 xs:px-6 bg-white dark:bg-black relative overflow-hidden safe-area-inset">
      <div className="container mx-auto max-w-7xl relative z-10 responsive-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fluid-text-3xl xs:fluid-text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-3 xs:mb-4">
            Skills & Expertise
          </h2>
          <p className="fluid-text-lg xs:fluid-text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Mastering modern technologies to build exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 xs:px-6 py-2 xs:py-3 rounded-full font-semibold transition-all duration-300 touch-target fluid-text-sm xs:fluid-text-base ${
                activeCategory === category
                  ? `${skillCategories[category].color} hover:opacity-90 text-white dark:text-black shadow-lg`
                  : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeCategory === category}
              aria-controls="skills-grid"
              aria-label={`Show ${skillCategories[category].title} skills`}
            >
              <i className={`${skillCategories[category].icon} mr-2`}></i>
              {skillCategories[category].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          id="skills-grid"
          className="responsive-grid gap-4 xs:gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              variants={itemVariants}

            >
              <div className="bg-white dark:bg-gray-900 p-4 xs:p-6 rounded-xl xs:rounded-2xl shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 relative overflow-hidden hover:shadow-2xl hover:border-black dark:hover:border-white">

                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 xs:mb-4">
                    <div className="flex items-center gap-2 xs:gap-3">
                      <i className={`${skill.icon} text-xl xs:text-2xl ${skill.color}`}></i>
                      <h3 className="font-bold text-black dark:text-white fluid-text-sm xs:fluid-text-base">{skill.name}</h3>
                    </div>
                    <span className={`fluid-text-sm font-bold ${skill.color}`}>{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 xs:h-3 overflow-hidden">
                      <motion.div
                        className={`h-full ${skillCategories[activeCategory].color} rounded-full relative`}
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
                  <div className="mt-2 xs:mt-3 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Skills;