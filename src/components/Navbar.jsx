import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['À propos', 'Compétences', 'Projets', 'Expérience', 'Contact']
const ids    = ['about',    'skills',       'projects', 'experience', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          IB<span>.</span>
        </span>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l, i) => (
            <li key={l}><button onClick={() => scrollTo(ids[i])}>{l}</button></li>
          ))}
        </ul>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
