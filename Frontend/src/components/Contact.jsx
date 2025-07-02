import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Track modal visibility

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    emailjs
      .send(
        "service_ta35qvl", 
        "template_hmvrt39", 
        formData,
        "mUwkgihHvVOWPt0Pj" 
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully! We will reply soon.");
          form.current.reset();
          setIsLoading(false);
          setShowModal(true); 
        },
        (error) => {
          setStatusMessage("❌ Failed to send message. Please try again.");
          setIsLoading(false);
        }
      );
  };
  const WhatsAppIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-green-500" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 0C7.163 0 0 7.164 0 16c0 2.837.74 5.582 2.144 7.996L0 32l8.254-2.147A15.88 15.88 0 0 0 16 32c8.837 0 16-7.164 16-16S24.837 0 16 0zm0 29.6a13524 13.524 0 0 1-6.873-1.849l-.494-.29-4.904 1.276 1.31-4.783-.318-.511A13.466 13.466 0 0 1 2.4 16C2.4 8.636 8.636 2.4 16 2.4S29.6 8.636 29.6 16 23.364 29.6 16 29.6zm7.291-9.238c-.392-.197-2.322-1.145-2.68-1.276-.358-.132-.619-.197-.88.197-.26.394-1.009 1.276-1.238 1.538-.228.263-.456.296-.848.098-.392-.198-1.654-.61-3.148-1.943-1.162-1.037-1.946-2.317-2.172-2.711-.228-.394-.025-.606.172-.802.176-.174.394-.454.592-.681.197-.228.263-.394.392-.657.132-.263.066-.493-.033-.69-.098-.197-.88-2.132-1.204-2.918-.316-.764-.64-.662-.88-.673l-.752-.013c-.263 0-.69.099-1.052.493-.362.394-1.383 1.352-1.383 3.287s1.415 3.81 1.612 4.074c.197.263 2.784 4.26 6.739 5.972.943.407 1.676.649 2.247.83.944.3 1.818.257 2.509.151.767-.117 2.314-.948 2.648-1.875.332-.927.332-1.735.228-1.875-.098-.14-.34-.228-.707-.422z"/>
    </svg>
  );
    const FacebookIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/>
    </svg>
  );

  const InstagramIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <circle cx="17.5" cy="6.5" r="0.5"/>
    </svg>
  );
    const contactItems = [
    { icon: <FiMail className="text-3xl md:text-4xl" />, label: "Email", value: "megacodesdev3@gmail.com", link: "mailto:megacodesdev3@gmail.com" },
    { icon: <FiPhone className="text-3xl md:text-4xl" />, label: "Phone", value: "+250 786 995 747", link: "tel:+250786995747" },
    { icon: <FiMapPin className="text-3xl md:text-4xl" />, label: "Location", value: "Kigali, Rwanda", link: null },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Send a message", link: "https://wa.me/250786995747" },
    { icon: FacebookIcon, label: "Facebook", value: "RUKUNDO El Shaddai", link: "https://www.facebook.com/profile.php?id=100083471815438/" },
    { icon: InstagramIcon, label: "Instagram", value: "e.l_s.h.a.d.d.a.i", link: "https://www.instagram.com/e.l_s.h.a.d.d.a.i/" },
  ];


  // Modal component for success message
  const SuccessModal = ({ message, onClose }) => (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg shadow-lg w-80 text-center`}>
        <h2 className="text-xl font-semibold mb-4">{message}</h2>
        <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={`text-3xl md:text-4xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-gray-800"}`}>
          Get In Touch
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className={`text-center mb-10 text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Feel free to reach out via any of the contact details below. Let’s connect and make something amazing together!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, index) => {
            const cardContent = (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg transition-transform hover:scale-105 ${darkMode ? "bg-gray-800 text-gray-200 hover:bg-purple-600" : "bg-white text-gray-700 hover:bg-purple-500 hover:text-white"}`}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p>{item.value}</p>
              </motion.div>
            );

            return item.link ? (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                {cardContent}
              </a>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>

        <motion.form ref={form} onSubmit={sendEmail} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}>
          <h3 className="text-2xl font-semibold mb-4 text-center">Or Send Me a Message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="user_name" placeholder="Your Name" required className={`p-3 rounded border focus:outline-none focus:ring w-full ${darkMode ? "bg-gray-900" : ""}`} />
            <input type="email" name="user_email" placeholder="Your Email" required className={`p-3 rounded border focus:outline-none focus:ring w-full ${darkMode ? "bg-gray-900" : ""}`} />
          </div>
          <textarea name="message" rows="5" placeholder="Your Message" required className={`p-3 rounded border focus:outline-none focus:ring w-full ${darkMode ? "bg-gray-900" : ""}`}></textarea>

          <button type="submit" disabled={isLoading} className="w-full py-3 rounded bg-purple-600 text-white hover:bg-purple-700 transition flex justify-center items-center">
            {isLoading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>
      </div>

      {/* Modal for Success Message */}
      {showModal && <SuccessModal message="Message sent successfully! We will reply soon." onClose={() => setShowModal(false)} />}
              {/* Dense, Fast-Moving Noisy Particles */}
              {Array.from({ length: 150 }).map((_, i) => {
                const size = Math.random() * 7 + 2.5;
                const duration = Math.random() * 6 + 2;
                const xOffset = Math.random() * 30 - 15;
                const yOffset = Math.random() * 30 - 15;
        
                return (
                  <motion.div
                    key={`particle-${i}`}
                    className={`absolute rounded-full ${
                      darkMode ? "bg-purple-500" : "bg-purple-300"
                    }`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0.07 + Math.random() * 0.07,
                      filter: "blur(0.3px)",
                    }}
                    animate={{
                      x: [0, xOffset],
                      y: [0, yOffset],
                    }}
                    transition={{
                      duration,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
    </section>
  );
};

const BeautifulLoader = ({ size = 'md', color = 'primary' }) => {
  // Size variants
  const sizeClasses = {
    sm: 'h-4 w-4 border-t-1 border-b-1',
    md: 'h-6 w-6 border-t-2 border-b-2',
    lg: 'h-8 w-8 border-t-3 border-b-3',
    xl: 'h-12 w-12 border-t-4 border-b-4'
  };

  // Color variants
  const colorClasses = {
    primary: 'border-purple-500',
    secondary: 'border-blue-500',
    light: 'border-white',
    dark: 'border-gray-800',
    gradient: 'border-t-purple-500 border-b-blue-500'
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Main spinning element */}
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
        style={{
          animationDuration: '0.8s',
          animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
        }}
      />
      
      {/* Optional pulse effect */}
      <div 
        className={`absolute rounded-full ${sizeClasses[size]} ${colorClasses[color]} opacity-20`}
        style={{
          animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      />
      
      {/* Optional orbiting dots */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`absolute rounded-full h-1 w-1 ${color === 'gradient' ? 'bg-gradient-to-r from-purple-500 to-blue-500' : colorClasses[color].replace('border', 'bg')}`}
          style={{
            transform: `rotate(${i * 120}deg) translateY(-${size === 'sm' ? '6px' : size === 'md' ? '8px' : size === 'lg' ? '10px' : '14px'})`,
            animation: `orbit 2s ${i * 0.3}s ease-in-out infinite`,
            opacity: 0.7
          }}
        />
      ))}
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        @keyframes orbit {
          0% { transform: rotate(${[0, 1, 2].map(i => `${i * 120}deg`)} translateY(-${size === 'sm' ? '6px' : size === 'md' ? '8px' : size === 'lg' ? '10px' : '14px'}) rotate(0deg); }
          100% { transform: rotate(${[0, 1, 2].map(i => `${i * 120 + 360}deg`)} translateY(-${size === 'sm' ? '6px' : size === 'md' ? '8px' : size === 'lg' ? '10px' : '14px'}) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};


export default Contact;
