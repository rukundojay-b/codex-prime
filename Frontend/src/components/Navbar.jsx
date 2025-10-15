
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiServer } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full z-50 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-b border-white/20"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Codex Prime branding */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3"
        >
          <div className={`w-8 h-8 rounded-full border-2 ${
            darkMode ? 'border-blue-500' : 'border-blue-600'
          } flex items-center justify-center`}>
            <FiServer className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <div className="flex flex-col">
            <a
              href="#home"
              className="text-sm font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent leading-tight"
            >
              Jean Baptiste RUKUNDO
            </a>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Codex Prime
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 10px rgba(59, 130, 246, 0.8)"
              }}
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "text-blue-500 bg-blue-500/10"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-400"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg"
                />
              )}
            </motion.a>
          ))}
          
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </motion.button>
        </div>

        {/* Right Section - Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-blue-500/20 text-blue-400' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </motion.button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl text-blue-500 hover:text-green-500 transition"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 z-40 flex flex-col items-center justify-center gap-10 text-white text-xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl text-blue-400 hover:text-green-400 transition"
            >
              <FiX />
            </button>

            {/* Codex Prime Brand in Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <FiServer className="text-blue-400 text-2xl" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Codex Prime
                </span>
              </div>
              <p className="text-gray-400 text-sm">Backend Architect</p>
            </motion.div>

            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  color: "#60a5fa"
                }}
                className={`px-6 py-2 rounded-lg ${
                  activeSection === item.id
                    ? "text-blue-400 bg-blue-500/10"
                    : "hover:text-blue-300"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
