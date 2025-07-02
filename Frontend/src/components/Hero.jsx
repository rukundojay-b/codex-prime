import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiEye,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiX,
  FiMapPin  
} from "react-icons/fi";

const Hero = ({ darkMode }) => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden mt-8"
      >
        {/* Animated background elements */}

          <div
            className={`absolute top-20 left-20 w-40 h-40 rounded-full ${
              darkMode ? "bg-purple-600" : "bg-purple-300"
            } blur-3xl opacity-50`}
          ></div>
          <div
            className={`absolute bottom-20 right-20 w-60 h-60 rounded-full ${
              darkMode ? "bg-blue-600" : "bg-blue-300"
            } blur-3xl opacity-50`}
          ></div>

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
              Hi, I'm{" "}
              <motion.span
                className="text-purple-600"
                animate={{
                  textShadow: darkMode
                    ? "0 0 10px rgba(124, 58, 237, 0.8)"
                    : "0 0 5px rgba(139, 92, 246, 0.5)",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                El Shaddai RUKUNDO
              </motion.span>
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
              I craft pixel-perfect, accessible digital experiences that drive
              results.
              <span className="block mt-2 font-medium">
                Let's build something amazing together!
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: darkMode
                    ? "0 5px 15px rgba(124, 58, 237, 0.4)"
                    : "0 5px 15px rgba(139, 92, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactModal(true)}
                className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                  darkMode
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-purple-500 hover:bg-purple-600"
                } text-white transition-all`}
              >
                <FiMail className="text-lg" />
                Hire Me
              </motion.button>
            </motion.div>

            {/* Social proof/quick stats */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center md:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Client Satisifaction
                </div>
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
                {
                  icon: <FiGithub />,
                  url: "https://www.github.com/megacodesdev",
                  color: "gray",
                },
                {
                  icon: <FiLinkedin />,
                  url: "https://www.linkedin.com/in/el-shaddai-rukundo-5946a135b/",
                  color: "blue",
                },
                { icon: <FiPhone />, url: "tel:+250786995747", color: "green" },
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
                    color: darkMode ? `rgb(147 197 253)` : `rgb(59 130 246)`,
                    cursor: "pointer",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image will comes first in DOM for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
          >
            {/* Main Circle Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Background Circle (will appear behind the image) */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute inset-0 rounded-full ${
                  darkMode ? "bg-purple-900" : "bg-purple-100"
                } opacity-30 blur-xl z-0`}
              ></motion.div>

              {/* Border Circle (will appear behind the image) */}
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute inset-0 rounded-full border-4 ${
                  darkMode ? "border-purple-800" : "border-purple-200"
                } opacity-50 z-10`}
                style={{ margin: "-8px" }} /* Makes border appear larger */
              ></motion.div>

              {/* Profile Image - Coming out of the circle */}
              <motion.div
                initial={{ y: 20, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 z-20 overflow-hidden"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                  transform: "translateZ(0)" /* Forces hardware acceleration */,
                }}
              >
                <img
                  src="/profile.webp"
                  alt="El Shaddai RUKUNDO"
                  className="w-full h-full object-cover scale-110" /* Slightly larger than container */
                  loading="lazy"
                />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 rounded-full ${
                  darkMode ? "bg-purple-600" : "bg-purple-300"
                } opacity-30 blur-lg z-10`}
                style={{
                  clipPath: "circle(45% at 50% 50%)",
                  mixBlendMode: darkMode ? "screen" : "multiply",
                }}
              ></motion.div>

              {/* Floating tech badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 left-12 z-30"
              >
                <div
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    darkMode
                      ? "bg-gray-800 text-purple-400"
                      : "bg-white text-purple-600"
                  } shadow-lg`}
                >
                  React.js
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-4 right-12 z-30"
              >
                <div
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    darkMode
                      ? "bg-gray-800 text-blue-400"
                      : "bg-white text-blue-600"
                  } shadow-lg`}
                >
                  Figma
                </div>
              </motion.div>

              {/* Subtle particles floating around */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <motion.div
                  key={angle}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scale: [0, 1, 0],
                    x: Math.cos((angle * Math.PI) / 180) * 60,
                    y: Math.sin((angle * Math.PI) / 180) * 60,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: (angle / 90) * 0.2,
                    ease: "easeInOut",
                  }}
                  className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  } z-20`}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl p-8 max-w-sm w-full shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-purple-500 transition"
              >
                <FiX size={24} />
              </button>

              {/* Modal Title */}
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Contact Me
              </h2>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiMail className="text-purple-500" />
                  <span className="truncate">megacodesdev3@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-blue-500" />
                  <span>+250 786 995 747</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-green-500" />
                  <span>Bugesera, Eastern Rwanda</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
