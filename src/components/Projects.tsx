import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Полнофункциональная платформа электронной коммерции с корзиной и платежной системой',
      tags: ['React', 'TypeScript', 'Redux', 'Stripe'],
      image: 'gradient1',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Приложение для управления задачами с синхронизацией в реальном времени',
      tags: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
      image: 'gradient2',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Интерактивная панель погоды с красивой визуализацией и прогнозом',
      tags: ['React', 'API', 'Chart.js', 'CSS'],
      image: 'gradient3',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Social Media Feed',
      description: 'Социальная сеть с постами, комментариями и системой лайков',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'gradient4',
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Video Streaming Service',
      description: 'Платформа потокового видео с поиском и рекомендациями',
      tags: ['React', 'Express', 'PostgreSQL', 'FFmpeg'],
      image: 'gradient5',
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'AI Chat Application',
      description: 'Чат приложение с интеграцией ИИ для помощи и поддержки',
      tags: ['React', 'OpenAI', 'WebSocket', 'Node.js'],
      image: 'gradient6',
      github: '#',
      live: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Мои проекты
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.image}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a href={project.github} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <FaGithub /> GitHub
                  </motion.a>
                  <motion.a href={project.live} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <FaExternalLinkAlt /> Смотреть
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
