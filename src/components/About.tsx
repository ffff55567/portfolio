import { motion } from 'framer-motion'
import './About.css'

const About = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Обо мне
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              Я увлеченный веб-разработчик с опытом в создании современных, отзывчивых веб-приложений. 
              Специализируюсь на фронтенд-разработке с использованием React и TypeScript.
            </p>
            <p>
              Моя страсть - превращать дизайны в жизнь с чистым, оптимизированным кодом. 
              Я постоянно учусь новым технологиям и лучшим практикам в веб-разработке.
            </p>
            <p>
              Когда я не пишу код, я изучаю документацию новых фреймворков, 
              участвую в open-source проектах и помогаю другим разработчикам.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Завершенных проектов</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Лет опыта</p>
            </div>
            <div className="stat-item">
              <h3>30+</h3>
              <p>Довольных клиентов</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Удовлетворенность</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
