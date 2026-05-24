import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <h1 className="hero-title">
            Привет, я <span className="gradient-text">Web разработчик</span>
          </h1>
          <p className="hero-subtitle">
            Создаю красивые и функциональные веб-приложения с React и современными технологиями
          </p>
        </motion.div>

        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.button
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Смотреть проекты
          </motion.button>
          <motion.button
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Связаться со мной
          </motion.button>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <motion.a href="#" className="social-link" whileHover={{ scale: 1.2, y: -3 }}>
            <FaGithub />
          </motion.a>
          <motion.a href="#" className="social-link" whileHover={{ scale: 1.2, y: -3 }}>
            <FaLinkedin />
          </motion.a>
          <motion.a href="#" className="social-link" whileHover={{ scale: 1.2, y: -3 }}>
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  )
}

export default Hero
