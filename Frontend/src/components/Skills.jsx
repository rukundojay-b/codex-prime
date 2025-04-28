import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences with Figma and Adobe XD",
    icon: "/icons/uiux.png", 
    color: "from-pink-500 to-purple-600",
    hoverEffect: {
      scale: 1.05,
      rotate: 3,
      boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.3)"
    }
  },
  {
    title: "Web Development",
    description: "Building responsive websites with React, Next.js, and modern CSS",
    icon: "/icons/web-design.png", 
    color: "from-blue-500 to-cyan-600",
    hoverEffect: {
      scale: 1.05,
      rotate: -3,
      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
    }
  },
  {
    title: "Mobile App Development",
    description: "Developing cross-platform apps with React Native and Flutter",
    icon: "/icons/mobile-app.png", 
    color: "from-green-500 to-emerald-600",
    hoverEffect: {
      scale: 1.05,
      rotate: 0,
      boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)"
    }
  }
];

const Skills = ({ darkMode }) => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={skill.hoverEffect}
              className={`relative rounded-xl overflow-hidden p-0.5 bg-gradient-to-br ${skill.color}`}
            >
              <div className={`h-full rounded-xl p-6 ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}>
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-4 w-20 h-20 rounded-full bg-gradient-to-br p-0.5 from-white to-gray-100"
                  >
                    <div className={`w-full h-full rounded-full ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    } flex items-center justify-center`}>
                      <img 
                        src={skill.icon} 
                        alt={skill.title} 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{skill.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${skill.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;