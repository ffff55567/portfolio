import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

interface HeaderProps {
  scrollY: number
}

const Header = ({ scrollY }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = ['Главная', 'Обо мне', 'Проекты', 'Навыки', 'Контакты']
  const navLinks = ['#home', '#about', '#projects', '#skills', '#contact']

  return (
    <motion.header 
      className={`header ${scrollY > 50 ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">ffff55567</span>
        </motion.div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={navLinks[index]}
              className="nav-link"
              whileHover={{ color: '#667eea' }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header
