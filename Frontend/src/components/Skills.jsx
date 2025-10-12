// import { motion } from "framer-motion";

// const skills = [
//   {
//     title: "UI/UX Design",
//     description:
//       "Creating intuitive and beautiful user experiences with Figma and Adobe XD",
//     icon: "/icons/uiux.png",
//     color: "from-pink-500 to-purple-600",
//     hoverEffect: {
//       scale: 1.05,
//       rotate: 3,
//       boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.3)",
//     },
//     level: 80, // %
//   },
//   {
//     title: "Web Development",
//     description:
//       "Building responsive websites with React, Next.js, and modern CSS",
//     icon: "/icons/web-design.png",
//     color: "from-blue-500 to-cyan-600",
//     hoverEffect: {
//       scale: 1.05,
//       rotate: -3,
//       boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
//     },
//     level: 95,
//   },
//   {
//     title: "Machine Learning & AI Development",
//     description:
//       "Building Machine Learning Apps and Artificial Intelligence based solutions.",
//     icon: "/icons/web-design.png",
//     color: "from-yellow-500 to-orange-600",
//     hoverEffect: {
//       scale: 1.05,
//       rotate: -3,
//       boxShadow: "0 20px 25px -5px rgba(192, 106, 7, 0.3)",
//     },
//     level: 70,
//   },
//   {
//     title: "Mobile App Development",
//     description: "Developing cross-platform apps with React Native and Flutter",
//     icon: "/icons/mobile-app.png",
//     color: "from-green-500 to-emerald-600",
//     hoverEffect: {
//       scale: 1.05,
//       rotate: 0,
//       boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)",
//     },
//     level: 85,
//   },
// ];

// const Skills = ({ darkMode }) => {
//   return (
//     <section id="skills" className="py-20 px-4">
//       <div className="container mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
//             darkMode ? "text-white" : "text-gray-800"
//           }`}
//         >
//           My Skills
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={skill.hoverEffect}
//               className={`relative rounded-xl overflow-hidden p-0.5 bg-gradient-to-br ${skill.color}`}
//             >
//               <div
//                 className={`h-full rounded-xl p-6 ${
//                   darkMode ? "bg-gray-900" : "bg-white"
//                 }`}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <motion.div
//                     whileHover={{ rotate: 10, scale: 1.1 }}
//                     className="mb-4 w-20 h-20 rounded-full bg-gradient-to-br p-0.5 from-white to-gray-100"
//                   >
//                     <div
//                       className={`w-full h-full rounded-full ${
//                         darkMode ? "bg-gray-900" : "bg-white"
//                       } flex items-center justify-center`}
//                     >
//                       <img
//                         src={skill.icon}
//                         alt={skill.title}
//                         className="w-12 h-12 object-contain"
//                       />
//                     </div>
//                   </motion.div>
//                   <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
//                   <p
//                     className={`mb-4 ${
//                       darkMode ? "text-gray-300" : "text-gray-600"
//                     }`}
//                   >
//                     {skill.description}
//                   </p>
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className={`w-8 h-8 rounded-full bg-gradient-to-br ${skill.color}`}
//                   />
//                   {/* Skill Progress */}
//                   <div className="w-full mt-4">
//                     <div className="flex justify-between text-sm mb-1">
//                       <span
//                         className={darkMode ? "text-gray-300" : "text-gray-700"}
//                       >
//                         Proficiency
//                       </span>
//                       <span
//                         className={darkMode ? "text-gray-300" : "text-gray-600"}
//                       >
//                         {skill.level}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
//                       <div
//                         className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;






import { motion } from "framer-motion";
import { FiServer, FiDatabase, FiCloud, FiCpu, FiCode, FiShield } from "react-icons/fi";

const skills = [
  {
    title: "API & System Architecture",
    description: "Designing scalable RESTful & GraphQL APIs, microservices architecture, and system design patterns",
    icon: <FiServer className="text-3xl" />,
    color: "from-blue-500 to-blue-600",
    hoverEffect: {
      scale: 1.05,
      rotate: 3,
      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
    },
    level: 95,
    technologies: ["REST APIs", "GraphQL", "Microservices", "System Design"]
  },
  {
    title: "Database Design & Optimization",
    description: "Expertise in SQL/NoSQL databases, query optimization, data modeling, and performance tuning",
    icon: <FiDatabase className="text-3xl" />,
    color: "from-green-500 to-emerald-600",
    hoverEffect: {
      scale: 1.05,
      rotate: -3,
      boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)",
    },
    level: 90,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Query Optimization"]
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on cloud platforms with CI/CD pipelines and containerization",
    icon: <FiCloud className="text-3xl" />,
    color: "from-purple-500 to-purple-600",
    hoverEffect: {
      scale: 1.05,
      rotate: -2,
      boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)",
    },
    level: 85,
    technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"]
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications with Node.js, Python, and enterprise-grade frameworks",
    icon: <FiCode className="text-3xl" />,
    color: "from-orange-500 to-red-600",
    hoverEffect: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0 20px 25px -5px rgba(234, 88, 12, 0.3)",
    },
    level: 95,
    technologies: ["Node.js", "Express", "Python", "FastAPI"]
  },
  {
    title: "Performance & Scalability",
    description: "Optimizing application performance, load balancing, caching strategies, and horizontal scaling",
    icon: <FiCpu className="text-3xl" />,
    color: "from-cyan-500 to-blue-600",
    hoverEffect: {
      scale: 1.05,
      rotate: 0,
      boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.3)",
    },
    level: 88,
    technologies: ["Caching", "Load Balancing", "CDN", "Performance Tuning"]
  },
  {
    title: "Security & Authentication",
    description: "Implementing secure authentication systems, data encryption, and API security best practices",
    icon: <FiShield className="text-3xl" />,
    color: "from-red-500 to-pink-600",
    hoverEffect: {
      scale: 1.05,
      rotate: -2,
      boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.3)",
    },
    level: 85,
    technologies: ["JWT", "OAuth", "Encryption", "Security Headers"]
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
          className={`text-3xl md:text-4xl font-bold mb-4 text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Technical Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className={`text-lg text-center mb-12 max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Specializing in backend architecture, system design, and scalable infrastructure solutions
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div
                className={`h-full rounded-xl p-6 ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white`}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="text-right">
                      <span className={`text-2xl font-bold ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}>
                    {skill.title}
                  </h3>
                  <p className={`mb-4 flex-grow ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            darkMode 
                              ? "bg-gray-800 text-gray-300" 
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full mt-auto">
                    <div className="flex justify-between text-sm mb-1">
                      <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                        Expertise Level
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}>
            <FiCpu className={`${darkMode ? "text-blue-400" : "text-blue-600"}`} />
            <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Continuously learning and implementing cutting-edge backend technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;