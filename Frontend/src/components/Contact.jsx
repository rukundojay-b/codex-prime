

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { FiMail, FiPhone, FiMapPin, FiGithub, FiServer, FiDatabase } from "react-icons/fi";
// import emailjs from "@emailjs/browser";

// const Contact = ({ darkMode }) => {
//   const form = useRef();
//   const [statusMessage, setStatusMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setStatusMessage("");

//     const formData = {
//       user_name: form.current.user_name.value,
//       user_email: form.current.user_email.value,
//       message: form.current.message.value,
//     };

//     emailjs
//       .send(
//         "service_ta35qvl", 
//         "template_hmvrt39", 
//         formData,
//         "mUwkgihHvVOWPt0Pj" 
//       )
//       .then(
//         (result) => {
//           setStatusMessage("Message sent successfully! I'll get back to you soon.");
//           form.current.reset();
//           setIsLoading(false);
//           setShowModal(true);
//         },
//         (error) => {
//           setStatusMessage("❌ Failed to send message. Please try again.");
//           setIsLoading(false);
//         }
//       );
//   };

//   const LinkedInIcon = (
//     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//     </svg>
//   );

//   const contactItems = [
//     { icon: <FiMail className="text-3xl md:text-4xl" />, label: "Email", value: "rukundoj032@gmail.com", link: "mailto:rukundoj032@gmail.com" },
//     { icon: <FiPhone className="text-3xl md:text-4xl" />, label: "Phone", value: "+250 792845301", link: "tel:+250 792845301" },
//     { icon: <FiMapPin className="text-3xl md:text-4xl" />, label: "Location", value: "Kigali, Rwanda", link: null },
//     { icon: <FiGithub className="text-3xl md:text-4xl" />, label: "GitHub", value: "github.com/rukundojay-b", link: "https://github.com/rukundojay-b" },
//     { icon: LinkedInIcon, label: "LinkedIn", value: "Codex Prime", link: "https://linkedin.com/in/codexprime" },
//     { icon: <FiDatabase className="text-3xl md:text-4xl" />, label: "Portfolio", value: "codexprime.dev", link: "https://codexprime.dev" },
//   ];

//   const SuccessModal = ({ message, onClose }) => (
//     <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//       <div className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg shadow-lg w-80 text-center`}>
//         <h2 className="text-xl font-semibold mb-4">{message}</h2>
//         <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//           Close
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <section id="contact" className="py-20 px-4 relative">
//       <div className="container mx-auto max-w-4xl">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }} 
//           viewport={{ once: true }} 
//           className={`text-3xl md:text-4xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-gray-800"}`}
//         >
//           Let's Build Together
//         </motion.h2>

//         <motion.p 
//           initial={{ opacity: 0, y: 20 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5, delay: 0.1 }} 
//           viewport={{ once: true }} 
//           className={`text-center mb-10 text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}
//         >
//           Ready to architect robust systems and scalable solutions? Let's discuss your next backend project.
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {contactItems.map((item, index) => {
//             const cardContent = (
//               <motion.div 
//                 initial={{ opacity: 0, y: 30 }} 
//                 whileInView={{ opacity: 1, y: 0 }} 
//                 transition={{ duration: 0.5, delay: index * 0.2 }} 
//                 viewport={{ once: true }} 
//                 className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg transition-transform hover:scale-105 ${
//                   darkMode ? "bg-gray-800 text-gray-200 hover:bg-blue-600" : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
//                 }`}
//               >
//                 <div className="mb-4">{item.icon}</div>
//                 <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
//                 <p>{item.value}</p>
//               </motion.div>
//             );

//             return item.link ? (
//               <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
//                 {cardContent}
//               </a>
//             ) : (
//               <div key={index}>{cardContent}</div>
//             );
//           })}
//         </div>

//         <motion.form 
//           ref={form} 
//           onSubmit={sendEmail} 
//           initial={{ opacity: 0, y: 30 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }} 
//           viewport={{ once: true }} 
//           className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}
//         >
//           <h3 className="text-2xl font-semibold mb-4 text-center">Start a Technical Discussion</h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <input 
//               type="text" 
//               name="user_name" 
//               placeholder="Your Name" 
//               required 
//               className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
//                 darkMode ? "bg-gray-900 border-gray-700" : "border-gray-300"
//               }`} 
//             />
//             <input 
//               type="email" 
//               name="user_email" 
//               placeholder="Your Email" 
//               required 
//               className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
//                 darkMode ? "bg-gray-900 border-gray-700" : "border-gray-300"
//               }`} 
//             />
//           </div>
//           <textarea 
//             name="message" 
//             rows="5" 
//             placeholder="Tell me about your project requirements, technical challenges, or system architecture needs..." 
//             required 
//             className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
//               darkMode ? "bg-gray-900 border-gray-700" : "border-gray-300"
//             }`}
//           ></textarea>

//           <button 
//             type="submit" 
//             disabled={isLoading} 
//             className="w-full py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition flex justify-center items-center mt-4"
//           >
//             {isLoading ? "Sending..." : "Start Collaboration"}
//           </button>
//         </motion.form>
//       </div>

//       {showModal && <SuccessModal message="Message sent successfully! I'll get back to you soon." onClose={() => setShowModal(false)} />}
      
//       {/* Technical-themed particles */}
//       {Array.from({ length: 150 }).map((_, i) => {
//         const size = Math.random() * 7 + 2.5;
//         const duration = Math.random() * 6 + 2;
//         const xOffset = Math.random() * 30 - 15;
//         const yOffset = Math.random() * 30 - 15;

//         return (
//           <motion.div
//             key={`particle-${i}`}
//             className={`absolute rounded-full ${
//               darkMode ? "bg-blue-500" : "bg-blue-300"
//             }`}
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: 0.07 + Math.random() * 0.07,
//               filter: "blur(0.3px)",
//             }}
//             animate={{
//               x: [0, xOffset],
//               y: [0, yOffset],
//             }}
//             transition={{
//               duration,
//               repeat: Infinity,
//               repeatType: "mirror",
//               ease: "easeInOut",
//             }}
//           />
//         );
//       })}
//     </section>
//   );
// };

// export default Contact;


























import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiServer, FiDatabase, FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
      to_email: "rukundoj032@gmail.com" // Add this to ensure it goes to your email
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
          setStatusMessage("Message sent successfully! I'll get back to you soon.");
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

  const LinkedInIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const FacebookIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const contactItems = [
    { icon: <FiMail className="text-3xl md:text-4xl" />, label: "Email", value: "rukundoj032@gmail.com", link: "mailto:rukundoj032@gmail.com" },
    { icon: <FiPhone className="text-3xl md:text-4xl" />, label: "Phone", value: "+250 792845301", link: "tel:+250792845301" },
    { icon: <FiMapPin className="text-3xl md:text-4xl" />, label: "Location", value: "Kigali, Rwanda", link: null },
    { icon: <FiGithub className="text-3xl md:text-4xl" />, label: "GitHub", value: "github.com/rukundojay-b", link: "https://github.com/rukundojay-b" },
    { icon: LinkedInIcon, label: "LinkedIn", value: "Jean Baptiste RUKUNDO", link: "https://linkedin.com/in/jean-baptiste-rukundo" },
    { icon: FacebookIcon, label: "Facebook", value: "rukundo jay-b", link: "https://www.facebook.com/rukundo.jay.b" },
    { icon: <FiInstagram className="text-3xl md:text-4xl" />, label: "Instagram", value: "@p.fla.a", link: "https://www.instagram.com/p.fla.a/" },
    { icon: <FiServer className="text-3xl md:text-4xl" />, label: "Portfolio", value: "codexprime.dev", link: "https://codexprime.dev" },
  ];

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
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className={`text-3xl md:text-4xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-gray-800"}`}
        >
          Let's Build Together
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }} 
          viewport={{ once: true }} 
          className={`text-center mb-10 text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Ready to architect robust systems and scalable solutions? Let's discuss your next backend project.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, index) => {
            const cardContent = (
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg transition-transform hover:scale-105 ${
                  darkMode ? "bg-gray-800 text-gray-200 hover:bg-blue-600" : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p className="text-sm">{item.value}</p>
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

        <motion.form 
          ref={form} 
          onSubmit={sendEmail} 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Start a Technical Discussion</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              required 
              className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
                darkMode ? "bg-gray-900 border-gray-700" : "border-gray-300"
              }`} 
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              required 
              className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
                darkMode ? "bg-gray-900 border-gray-700" : "border-gray-300"
              }`} 
            />
          </div>
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Tell me about your project requirements, technical challenges, or system architecture needs..." 
            required 
            className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
              darkMode ? "bg-gray-900 border-gray-700" : "border-gray-300"
            }`}
          ></textarea>

          <button 
            type="submit" 
            disabled={isLoading} 
            className="w-full py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition flex justify-center items-center mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Start Collaboration"
            )}
          </button>
        </motion.form>
      </div>

      {showModal && <SuccessModal message="Message sent successfully! I'll get back to you soon." onClose={() => setShowModal(false)} />}
      
      {/* Technical-themed particles */}
      {Array.from({ length: 150 }).map((_, i) => {
        const size = Math.random() * 7 + 2.5;
        const duration = Math.random() * 6 + 2;
        const xOffset = Math.random() * 30 - 15;
        const yOffset = Math.random() * 30 - 15;

        return (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              darkMode ? "bg-blue-500" : "bg-blue-300"
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

export default Contact;
