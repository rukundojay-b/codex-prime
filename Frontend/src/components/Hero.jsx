import { motion } from 'framer-motion'
import { FiMail, FiEye, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className={`absolute top-20 left-20 w-40 h-40 rounded-full ${
          darkMode ? 'bg-purple-600' : 'bg-purple-300'
        } blur-3xl opacity-50`}></div>
        <div className={`absolute bottom-20 right-20 w-60 h-60 rounded-full ${
          darkMode ? 'bg-blue-600' : 'bg-blue-300'
        } blur-3xl opacity-50`}></div>
      </motion.div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-20 md:pt-0">
        {/* Text content - now comes after image in DOM for mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Hi, I'm <motion.span 
              className="text-purple-600"
              animate={{ 
                textShadow: darkMode 
                  ? "0 0 10px rgba(124, 58, 237, 0.8)" 
                  : "0 0 5px rgba(139, 92, 246, 0.5)"
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >El Shaddai RUKUNDO</motion.span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300"
          >
            Frontend Developer <span className="mx-2">•</span> UI/UX Designer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg mb-8 max-w-lg mx-auto md:mx-0 text-gray-700 dark:text-gray-300"
          >
            I craft pixel-perfect, accessible digital experiences that drive results. 
            <span className="block mt-2 font-medium">Let's build something amazing together!</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode 
                  ? "0 5px 15px rgba(124, 58, 237, 0.4)" 
                  : "0 5px 15px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
              } text-white transition-all`}
            >
              <FiMail className="text-lg" />
              Hire Me
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-all`}
            >
              <FiEye className="text-lg" />
              View Work
            </motion.a>
          </motion.div>

          {/* Social proof/quick stats */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center md:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">2</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisifaction</div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="mt-8 flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            {[
              { icon: <FiGithub />, url: "#", color: "gray" },
              { icon: <FiLinkedin />, url: "#", color: "blue" },
              { icon: <FiTwitter />, url: "#", color: "sky" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl p-2 rounded-full ${
                  darkMode 
                    ? `bg-gray-800 text-gray-300 hover:bg-gray-700` 
                    : `bg-gray-100 text-gray-700 hover:bg-gray-200`
                }`}
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                  color: darkMode ? `rgb(147 197 253)` : `rgb(59 130 246)`
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image - now comes first in DOM for mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
        >
          <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
            darkMode ? 'border-purple-600' : 'border-purple-400'
          } relative z-10`}>
            <img 
              src="/images/me.jpg" 
              alt="El Shaddai RUKUNDO" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Animated decorative elements */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full ${
              darkMode ? 'bg-purple-900' : 'bg-purple-100'
            } opacity-30 blur-xl`}
          ></motion.div>
          
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [0.9, 1, 0.9]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute -z-10 w-72 h-72 md:w-96 md:h-96 rounded-full border-2 ${
              darkMode ? 'border-purple-800' : 'border-purple-200'
            } opacity-50`}
          ></motion.div>
          
          {/* Floating tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-4 left-8"
          >
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${
              darkMode ? 'bg-gray-800 text-purple-400' : 'bg-white text-purple-600'
            } shadow-md`}>
              React.js
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute -top-4 right-8"
          >
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${
              darkMode ? 'bg-gray-800 text-blue-400' : 'bg-white text-blue-600'
            } shadow-md`}>
              Figma
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero