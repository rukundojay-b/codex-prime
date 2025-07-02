import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Print Shop Website",
    description: "Marketing and communication solution to Truth Media Ltd",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "https://www.truthmedialimited.com",
    image: "/printshop.jpg",
  },
  {
    id: 2,
    title: "LOSMA System",
    description:
      "Progressive Web Application for Shops and large Markets with Stock Analysis and insights",
    technologies: ["React", "TailwindCSS"],
    github: "#",
    live: "https://www.limas.com",
    image: "/losma.jpg",
  },
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
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden group"
            >
              {/* Always visible image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  darkMode
                    ? "from-gray-900/80 via-gray-900/100"
                    : "from-gray-900/50 via-gray-900/50"
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs bg-white/20 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors`}
                    >
                      <FiGithub className="text-sm" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors`}
                    >
                      <FiExternalLink className="text-sm" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
