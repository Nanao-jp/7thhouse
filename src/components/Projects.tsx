"use client"

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project 1',
    description: 'Webアプリケーション開発',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: '/project1.jpg'
  },
  {
    title: 'Project 2',
    description: 'ECサイト構築',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/project2.jpg'
  },
  {
    title: 'Project 3',
    description: 'ポートフォリオサイト',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    image: '/project3.jpg'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          プロジェクト
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="bg-blue-500 text-sm text-white px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects