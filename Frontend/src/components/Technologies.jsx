
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaNodeJs, FaPython, FaJs, FaAws,
  FaDocker, FaDatabase, FaServer
} from 'react-icons/fa';
import {
  SiTypescript, SiExpress, SiPostgresql, SiMongodb,
  SiRedis, SiKubernetes, SiGraphql, SiJest,
  SiNginx, SiLinux
} from 'react-icons/si';

// Use only the icons that are available
const techStack = [
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    color: 'from-green-500 to-green-700',
    snippet: `const server = require('http').createServer(app);\nserver.listen(3000, () => {\n  console.log('Server running on port 3000');\n});`
  },
  {
    name: 'Python',
    icon: <FaPython />,
    color: 'from-blue-500 to-green-400',
    snippet: `from fastapi import FastAPI\napp = FastAPI()\n\n@app.get("/api/data")\nasync def get_data():\n    return {"message": "Hello from API"}`
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    color: 'from-blue-400 to-blue-800',
    snippet: `CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT NOW()\n);`
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: 'from-green-500 to-green-800',
    snippet: `db.users.insertOne({\n  name: "John Doe",\n  email: "john@example.com",\n  createdAt: new Date()\n});`
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
    color: 'from-gray-400 to-gray-600',
    snippet: `app.get('/api/users/:id', async (req, res) => {\n  const user = await User.findById(req.params.id);\n  res.json(user);\n});`
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
    color: 'from-blue-400 to-blue-600',
    snippet: `FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]`
  },
  {
    name: 'AWS',
    icon: <FaAws />,
    color: 'from-orange-400 to-orange-600',
    snippet: `# EC2 Instance Setup\n# S3 Bucket Configuration\n# Lambda Function Deployment\n# RDS Database Provisioning`
  },
  {
    name: 'Redis',
    icon: <SiRedis />,
    color: 'from-red-500 to-red-700',
    snippet: `const redis = require('redis');\nconst client = redis.createClient();\n\nawait client.set('key', 'value');\nconst value = await client.get('key');`
  },
  {
    name: 'GraphQL',
    icon: <SiGraphql />,
    color: 'from-pink-500 to-purple-600',
    snippet: `type Query {\n  getUser(id: ID!): User\n}\n\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n}`
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'from-blue-400 to-blue-700',
    snippet: `interface User {\n  id: number;\n  email: string;\n  createdAt: Date;\n}\n\nconst getUser = async (id: number): Promise<User> => { ... };`
  }
];

export default function Technologies({ darkMode }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="technologies"
      className="relative py-24 px-6"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`text-4xl font-extrabold mb-4 ${
            darkMode 
              ? "bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              : "bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
          }`}
        >
          Backend Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className={`text-lg mb-12 max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Technologies I use to build scalable, robust backend systems and APIs
        </motion.p>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className={`relative rounded-2xl p-6 shadow-xl bg-gradient-to-br ${tech.color} transform transition-all duration-300 cursor-pointer group`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-4xl mb-3 text-white">{tech.icon}</div>
              <div className="font-semibold text-lg tracking-wide text-white">{tech.name}</div>

              {/* Tooltip with backend-focused code snippets */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -10 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute left-1/2 -top-40 -translate-x-1/2 w-80 p-4 text-sm rounded-xl shadow-2xl z-50 ${
                    darkMode ? "bg-gray-900 border border-gray-700" : "bg-white border border-gray-200"
                  }`}
                >
                  <div className={`text-xs font-medium mb-2 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {tech.name} Implementation:
                  </div>
                  <code className={`block whitespace-pre-wrap font-mono text-xs ${
                    darkMode ? "text-green-400 bg-gray-800" : "text-green-600 bg-gray-100"
                  } p-3 rounded-lg border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}>
                    {tech.snippet}
                  </code>
                  <div className={`text-xs mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    Backend architecture • API development • System design
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { title: "Backend Frameworks", techs: ["Node.js", "Express", "Python", "FastAPI"] },
            { title: "Databases", techs: ["PostgreSQL", "MongoDB", "Redis"] },
            { title: "DevOps & Cloud", techs: ["Docker", "AWS", "Kubernetes"] },
            { title: "API & Testing", techs: ["GraphQL", "REST", "TypeScript"] }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-800/50" : "bg-gray-100"
              }`}
            >
              <h3 className={`font-semibold mb-3 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 rounded text-xs ${
                      darkMode 
                        ? "bg-gray-700 text-gray-300" 
                        : "bg-white text-gray-700 border"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}