import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaReact, FaPython, FaJs, FaCss3Alt,
  FaFigma, FaAndroid, FaRobot, FaCode
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiDart, SiFlutter
} from 'react-icons/si';

const techStack = [
  {
    name: 'JavaScript',
    icon: <FaJs />,
    color: 'from-yellow-400 to-yellow-600',
    snippet: `const sum = (a, b) => a + b;`
  },
  {
    name: 'Python',
    icon: <FaPython />,
    color: 'from-blue-500 to-green-400',
    snippet: `def greet(name): return f"Hello {name}"`
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: 'from-cyan-400 to-blue-600',
    snippet: `<div className="text-center text-lg font-bold">Hello</div>`
  },
  {
    name: 'React',
    icon: <FaReact />,
    color: 'from-cyan-500 to-blue-500',
    snippet: `useEffect(() => {}, []);`
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'from-blue-400 to-blue-700',
    snippet: `let count: number = 0;`
  },
  {
    name: 'Figma',
    icon: <FaFigma />,
    color: 'from-pink-500 to-purple-600',
    snippet: `// Design system component tokens`
  },
  {
    name: 'Dart',
    icon: <SiDart />,
    color: 'from-blue-500 to-blue-800',
    snippet: `void main() => print('Hello Dart');`
  },
  {
    name: 'Flutter',
    icon: <SiFlutter />,
    color: 'from-blue-400 to-cyan-600',
    snippet: `Text("Hello", style: TextStyle(fontSize: 20))`
  },
  {
    name: 'AI/ML',
    icon: <FaRobot />,
    color: 'from-purple-500 to-indigo-700',
    snippet: `model.fit(X_train, y_train)`
  },
];

export default function Technologies({ darkMode }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="technologies"
      className="relative py-24 px-6 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className={`relative rounded-2xl p-6 shadow-xl bg-gradient-to-br ${tech.color} transform transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <div className="font-semibold text-lg tracking-wide">{tech.name}</div>

              {/* Tooltip */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -10 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 -top-28 -translate-x-1/2 w-64 p-4 text-sm text-white bg-black bg-opacity-90 rounded-xl shadow-lg z-50"
                >
                  <div className="text-xs text-gray-300 mb-1">Code:</div>
                  <code className="block whitespace-pre-wrap font-mono text-green-400">{tech.snippet}</code>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
