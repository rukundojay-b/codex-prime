import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

const Navbar = ({ darkMode, setDarkMode, activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed w-full z-50 bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold"
        >
          El Shaddai RUKUNDO
        </motion.a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-2 py-1 ${activeSection === item.id ? 'text-purple-500' : ''}`}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span 
                  layoutId="nav-underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500"
                />
              )}
            </motion.a>
          ))}
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar