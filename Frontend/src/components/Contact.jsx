import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'megacodesdev3@gmail.com'
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        showNotification('success', 'Message sent successfully!');
      } else {
        showNotification('error', 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification('error', 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 8000); // Auto-dismiss after 8 seconds
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Notification Container */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 25 }}
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-lg shadow-xl ${
              notification.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            <div className="flex items-center gap-3 p-4 pr-8 max-w-md">
              {notification.type === 'success' ? (
                <FiCheckCircle className="text-xl flex-shrink-0" />
              ) : (
                <FiAlertCircle className="text-xl flex-shrink-0" />
              )}
              <span>{notification.message}</span>
              <button
                onClick={closeNotification}
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20"
              >
                <FiX className="text-lg" />
              </button>
            </div>
            
            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 8, ease: "linear" }}
              className={`h-1 ${
                notification.type === 'success' 
                  ? 'bg-green-500' 
                  : 'bg-red-500'
              } origin-left rounded-b-lg`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl font-bold mb-4 text-center ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`p-6 rounded-lg shadow-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className={`block mb-2 font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                    : 'bg-white border-gray-300 focus:border-purple-400'
                } focus:outline-none focus:ring-1 ${
                  darkMode ? 'focus:ring-purple-500' : 'focus:ring-purple-400'
                } transition-colors`}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className={`block mb-2 font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                    : 'bg-white border-gray-300 focus:border-purple-400'
                } focus:outline-none focus:ring-1 ${
                  darkMode ? 'focus:ring-purple-500' : 'focus:ring-purple-400'
                } transition-colors`}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className={`block mb-2 font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                    : 'bg-white border-gray-300 focus:border-purple-400'
                } focus:outline-none focus:ring-1 ${
                  darkMode ? 'focus:ring-purple-500' : 'focus:ring-purple-400'
                } transition-colors`}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg font-medium ${
                darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
              } text-white transition-colors flex items-center justify-center`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;