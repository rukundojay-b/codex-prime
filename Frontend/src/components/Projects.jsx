
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiServer, FiDatabase } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Print Shop E-commerce Platform",
    description: "Full-stack e-commerce solution with inventory management, order processing, and payment integration for Truth Media Ltd",
    backendFeatures: ["RESTful API", "Payment Processing", "Inventory Management", "Order System"],
    technologies: ["Node.js", "Express", "MongoDB", "JWT Auth", "Stripe API"],
    github: "#",
    live: "https://www.truthmedialimited.com",
    image: "/printshop.jpg",
    backendFocus: true,
    showImage: true,
    showContent: true,
    hoverEffect: true
  },
  {
    id: 2,
    title: "LMMS Inventory Management System",
    description: "Progressive Web Application with real-time stock analysis, predictive insights, and automated reporting for retail operations",
    backendFeatures: ["Real-time Analytics", "Predictive Algorithms", "Automated Reporting", "Data Visualization"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL", "Redis", "Data Analytics"],
    github: "#",
    live: "https://www.limas.com",
    image: "/losma.jpg",
    backendFocus: true,
    showImage: true,
    showContent: false,
    hoverEffect: false
  },
  {
    id: 3,
    title: "API Gateway & Microservices",
    description: "Scalable microservices architecture with API gateway, service discovery, and load balancing for high-traffic applications",
    backendFeatures: ["Microservices", "Load Balancing", "Service Discovery", "Rate Limiting"],
    technologies: ["Docker", "Kubernetes", "NGINX", "Redis", "JWT"],
    github: "#",
    live: "#",
    backendFocus: true,
    showImage: false,
    showContent: true,
    hoverEffect: false
  }
];

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className="py-20 px-4">
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
          Production Systems & Active Projects
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
          Backend systems and APIs I've architected to power scalable digital experiences
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } ${
                project.hoverEffect ? "group" : ""
              }`}
            >
              {/* PROJECT 1: Image with Hover Content */}
              {project.showImage && project.hoverEffect && (
                <div className="relative h-96">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Backend Focus Badge */}
                  {project.backendFocus && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                        darkMode 
                          ? "bg-blue-500/90 text-white" 
                          : "bg-blue-500 text-white"
                      }`}>
                        <FiServer className="text-xs" />
                        <span>Backend Focus</span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay with Backend Details */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      darkMode
                        ? "from-gray-900/90 via-gray-900/70"
                        : "from-gray-900/80 via-gray-900/60"
                    } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}
                  >
                    <motion.div
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Backend Features */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FiDatabase className="text-blue-400 text-sm" />
                          <span className="text-blue-400 text-sm font-medium">Backend Features</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.backendFeatures.map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full text-xs bg-white/10 text-white border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1 px-3 py-2 rounded-lg ${
                            darkMode 
                              ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                              : "bg-gray-600 text-white hover:bg-gray-700"
                          } transition-colors text-sm`}
                        >
                          <FiGithub className="text-sm" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1 px-3 py-2 rounded-lg ${
                            darkMode 
                              ? "bg-blue-600 text-white hover:bg-blue-700" 
                              : "bg-blue-500 text-white hover:bg-blue-600"
                          } transition-colors text-sm`}
                        >
                          <FiExternalLink className="text-sm" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Always visible bottom bar */}
                  <div className={`absolute bottom-0 left-0 right-0 ${
                    darkMode ? "bg-gray-800/80" : "bg-white/80"
                  } backdrop-blur-sm p-4`}>
                    <h3 className={`font-semibold text-sm ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-1.5 py-0.5 rounded text-xs ${
                            darkMode 
                              ? "bg-gray-700 text-gray-300" 
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                          darkMode 
                            ? "bg-gray-700 text-gray-300" 
                            : "bg-gray-200 text-gray-700"
                        }`}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* PROJECT 2: Image Only (No Content) */}
              {project.showImage && !project.showContent && (
                <div className="relative h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Backend Focus Badge */}
                  {project.backendFocus && (
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                        darkMode 
                          ? "bg-blue-500/90 text-white" 
                          : "bg-blue-500 text-white"
                      }`}>
                        <FiServer className="text-xs" />
                        <span>Backend Focus</span>
                      </div>
                    </div>
                  )}

                  {/* Simple bottom title */}
                  <div className={`absolute bottom-0 left-0 right-0 ${
                    darkMode ? "bg-gray-900/80" : "bg-white/80"
                  } backdrop-blur-sm p-4`}>
                    <h3 className={`font-semibold text-sm ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              )}

              {/* PROJECT 3: Content Only (No Image) */}
              {!project.showImage && project.showContent && (
                <div className={`p-6 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}>
                  {/* Backend Focus Badge */}
                  {project.backendFocus && (
                    <div className="mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                        darkMode 
                          ? "bg-blue-500/90 text-white" 
                          : "bg-blue-500 text-white"
                      }`}>
                        <FiServer className="text-xs" />
                        <span>Backend Focus</span>
                      </div>
                    </div>
                  )}

                  {/* Project Title */}
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className={`text-sm mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {project.description}
                  </p>

                  {/* Backend Features */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiDatabase className={`text-sm ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`} />
                      <span className={`text-sm font-medium ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}>
                        Backend Features
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.backendFeatures.map((feature, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded text-xs ${
                            darkMode 
                              ? "bg-blue-500/20 text-blue-300" 
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-full text-xs ${
                            darkMode 
                              ? "bg-gray-700 text-gray-300 border border-gray-600" 
                              : "bg-gray-100 text-gray-700 border border-gray-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg flex-1 justify-center ${
                        darkMode 
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                          : "bg-gray-600 text-white hover:bg-gray-700"
                      } transition-colors text-sm`}
                    >
                      <FiGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg flex-1 justify-center ${
                        darkMode 
                          ? "bg-blue-600 text-white hover:bg-blue-700" 
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      } transition-colors text-sm`}
                    >
                      <FiExternalLink className="text-sm" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Interested in building robust backend systems together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
              darkMode 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "bg-blue-500 hover:bg-blue-600"
            } text-white transition-colors`}
          >
            <FiServer className="text-lg" />
            Start a Backend Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;