// import React from 'react';
// import { motion } from 'framer-motion';

// const About = ({ darkMode }) => {
//   return (
//     <section id="about" className="py-20 px-4">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
//         {/* Profile Image with Animation */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="lg:w-1/3 flex justify-center"
//         >
//           <div className="relative">
//             <img 
//               src="/profile.webp"
//               alt="Profile"
//               loading='lazy'
//               className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-500 relative z-10"
//             />
//             <motion.div
//               animate={{
//                 scale: [1, 1.1, 1],
//                 opacity: [0.5, 0.8, 0.5]
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className={`absolute inset-0 rounded-full border-4 ${
//                 darkMode ? 'border-purple-400' : 'border-purple-300'
//               }`}
//             />
//           </div>
//         </motion.div>

//         {/* About Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="lg:w-2/3"
//         >
//           <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
//             darkMode ? 'text-white' : 'text-gray-800'
//           }`}>
//             About Me
//           </h2>
          
//           <div className={`mb-6 p-6 rounded-lg ${
//             darkMode ? 'bg-gray-800' : 'bg-gray-100'
//           }`}>
//             <p className={`mb-4 ${
//               darkMode ? 'text-gray-300' : 'text-gray-700'
//             }`}>
//               I'm a passionate developer and designer with 3 years of experience creating digital experiences that users love. My approach combines technical expertise with creative problem-solving.
//             </p>
            
//             <motion.div 
//               whileHover={{ x: 5 }}
//               className="flex items-center gap-2 mb-4"
//             >
//               <div className={`w-2 h-2 rounded-full ${
//                 darkMode ? 'bg-purple-500' : 'bg-purple-600'
//               }`} />
//               <span className={`font-medium ${
//                 darkMode ? 'text-purple-400' : 'text-purple-600'
//               }`}>UI/UX Design Specialist</span>
//             </motion.div>
            
//             <motion.div 
//               whileHover={{ x: 5 }}
//               className="flex items-center gap-2 mb-4"
//             >
//               <div className={`w-2 h-2 rounded-full ${
//                 darkMode ? 'bg-blue-500' : 'bg-blue-600'
//               }`} />
//               <span className={`font-medium ${
//                 darkMode ? 'text-blue-400' : 'text-blue-600'
//               }`}>Frontend Developer</span>
//             </motion.div>
            
//             <motion.div 
//               whileHover={{ x: 5 }}
//               className="flex items-center gap-2"
//             >
//               <div className={`w-2 h-2 rounded-full ${
//                 darkMode ? 'bg-green-500' : 'bg-green-600'
//               }`} />
//               <span className={`font-medium ${
//                 darkMode ? 'text-green-400' : 'text-green-600'
//               }`}>Mobile App Developer</span>
//             </motion.div>
//           </div>
          
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`inline-block px-6 py-3 rounded-lg font-medium ${
//               darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
//             } text-white transition-colors`}
//           >
//             Let's Work Together
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/3 flex justify-center"
        >
          <div className="relative">
            <img 
              src="/profile.webp"
              alt="Profile"
              loading='lazy'
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 relative z-10"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute inset-0 rounded-full border-4 ${
                darkMode ? 'border-blue-400' : 'border-blue-300'
              }`}
            />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-2/3"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            About Codex Prime
          </h2>
          
          <div className={`mb-6 p-6 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a passionate backend architect with 3 years of experience building scalable systems and robust APIs that power digital experiences. My approach combines deep technical expertise with strategic problem-solving to create foundations that scale.
            </p>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className={`w-2 h-2 rounded-full ${
                darkMode ? 'bg-blue-500' : 'bg-blue-600'
              }`} />
              <span className={`font-medium ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>API & System Architecture</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className={`w-2 h-2 rounded-full ${
                darkMode ? 'bg-green-500' : 'bg-green-600'
              }`} />
              <span className={`font-medium ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}>Database Design & Optimization</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${
                darkMode ? 'bg-purple-500' : 'bg-purple-600'
              }`} />
              <span className={`font-medium ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>Cloud Infrastructure & DevOps</span>
            </motion.div>
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block px-6 py-3 rounded-lg font-medium ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;