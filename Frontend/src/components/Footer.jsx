import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} pt-12 pb-6`}>
      {/* Animated waves background */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-20">
        <motion.svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className={`w-full h-full ${darkMode ? 'text-gray-800' : 'text-gray-200'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor"
          ></path>
        </motion.svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              {/* Your logo would go here */}
              <div className={`w-8 h-8 rounded-full border-2 ${
                darkMode ? 'border-purple-500' : 'border-purple-600'
              } flex items-center justify-center`}>
                <span className={`font-bold ${
                  darkMode ? 'text-purple-500' : 'text-purple-600'
                }`}>LC</span>
              </div>
              <span className={`text-lg font-bold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>LinkFy Connect</span>
            </div>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Building digital experiences that matter</p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a 
              href="mailto:elshaddairukundo3@gmail.com" 
              className={`inline-flex items-center gap-2 ${
                darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
              } transition-colors mb-3`}
            >
              <FiMail className="text-lg" />
              <span>elshaddairukundo3@gmail.com</span>
            </a>
            <div className="flex justify-center gap-4 mt-4">
              {[
                { icon: <FiGithub />, url: "#" },
                { icon: <FiLinkedin />, url: "#" },
                { icon: <FiTwitter />, url: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl p-2 rounded-full ${
                    darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                  } shadow-sm transition-colors`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-12 pt-6 border-t ${
            darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-600'
          } text-sm text-center`}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <span>© {new Date().getFullYear()} All Rights Reserved</span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center">
              Developed by El Shaddai RUKUNDO
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;