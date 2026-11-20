import { useRef, useState } from "react"
import heroImage from "../assets/hero.png"
import { cvUrl, githubUrl } from "../data/profile"

const highlights = ["React.js", "Flutter / Dart", "REST APIs", "Open to junior roles"]

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  return (
    <section className="hero-section" id="home">
      <nav className="site-nav" aria-label="Main navigation" onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) { closeMenu(); toggleRef.current?.focus() }
      }}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Chu Theint Theint home">
          Chu Theint Theint
        </a>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"} <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="primary-navigation">
          <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
          <a className="nav-link" href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-link" href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>GitHub</a>
          <a className="nav-link" href={cvUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>CV</a>
          <a className="btn btn-small btn-primary" href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      <div className="hero-grid section-inner">
        <div className="hero-copy">
          <p className="eyebrow">Junior Software Developer / Frontend &amp; Flutter</p>
          <h1>Chu Theint Theint</h1>
          <p className="hero-text">
            Computer Science student at Rangsit University with hands-on experience
            building React web applications and a Flutter mobile app foundation.
            Completing coursework in December 2026, with official graduation in 2027.
            Preparing for full-time junior developer and entry-level IT opportunities.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-secondary" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn btn-ghost" href={cvUrl} download="Chu_Theint_Theint_CV.pdf">Download CV</a>
            <a className="btn btn-ghost" href="#contact">Contact</a>
          </div>
          <div className="hero-highlights" aria-label="Portfolio highlights">
            {highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
          </div>
        </div>
        <div className="hero-showcase" aria-hidden="true">
          <img src={heroImage} alt="" />
          <div className="hero-showcase-caption">
            <span>Portfolio</span>
            <strong>Web, mobile, and software development projects</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
