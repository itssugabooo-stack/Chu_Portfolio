import heroImage from "../assets/hero.png"
import { cvUrl, githubUrl, vercelUrl } from "../data/profile"

const highlights = [
  "React / Next.js",
  "REST APIs",
  "Responsive UI",
  "Open to internships",
]

function Hero() {
  return (
    <section className="hero-section" id="home">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Chu Theint Theint home">
          Chu Theint Theint
        </a>

        <div className="nav-links">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a
            className="nav-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="nav-link"
            href={vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          <a className="nav-link" href={cvUrl} target="_blank">
            CV
          </a>
          <a className="btn btn-small btn-primary" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <div className="hero-grid section-inner">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science Student / Web Developer</p>

          <h1>Chu Theint Theint</h1>

          <p className="hero-text">
            I build responsive web interfaces and practical student projects
            with React, APIs, and clean frontend workflows.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a
              className="btn btn-secondary"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="btn btn-ghost" href={cvUrl} target="_blank">
              View CV
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact
            </a>
          </div>

          <div className="hero-highlights" aria-label="Portfolio highlights">
            {highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </div>

        <div className="hero-showcase" aria-hidden="true">
          <img src={heroImage} alt="" />
          <div className="hero-showcase-caption">
            <span>Portfolio</span>
            <strong>Selected frontend and software projects</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
