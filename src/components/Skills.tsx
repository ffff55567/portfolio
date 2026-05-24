import { motion } from 'framer-motion'
import { FaReact, FaNode, FaDatabase, FaCode } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiFirebase } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: FaReact, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88 },
        { name: 'HTML/CSS', icon: FaCode, level: 95 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: FaNode, level: 85 },
        { name: 'Express', icon: FaCode, level: 85 },
        { name: 'MongoDB', icon: FaDatabase, level: 80 },
        { name: 'Firebase', icon: SiFirebase, level: 80 },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', icon: FaCode, level: 90 },
        { name: 'Webpack', icon: FaCode, level: 75 },
        { name: 'Testing', icon: FaCode, level: 80 },
        { name: 'REST API', icon: FaCode, level: 90 },
      ],
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Мои навыки
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillCategory) => (
            <motion.div key={skillCategory.category} className="skill-category" variants={itemVariants}>
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <IconComponent className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
