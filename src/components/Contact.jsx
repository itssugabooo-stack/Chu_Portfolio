import { cvUrl, githubDisplay, githubUrl } from "../data/profile"

const email = "its.sugabooo@gmail.com"
const phone = "+66981957523"
const phoneLabel = "+66 98 195 7523"

const contactMethods = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    helper: "Best for internships, entry-level roles, and collaboration.",
  },
  {
    label: "Phone",
    value: phoneLabel,
    href: `tel:${phone}`,
    helper: "Useful for quick follow-ups and interview coordination.",
  },
  {
    label: "GitHub",
    value: githubDisplay,
    href: githubUrl,
    helper: "See my projects, code, and current learning work.",
    external: true,
  },
  {
    label: "CV",
    value: "View CV (PDF)",
    href: cvUrl,
    helper: "Open my resume with education, skills, and contact details.",
    external: true,
  },
]

function Contact() {
  return (
    <section id="contact" className="site-section contact-section">
      <div className="section-inner contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let's talk about the next step.</h2>
          <p className="contact-text">
            I am open to internship and entry-level software development
            opportunities where I can learn quickly, contribute carefully, and
            keep improving with a team.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${email}`}>
              Email Me
            </a>
            <a
              className="btn btn-secondary"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
            <a className="btn btn-ghost" href={cvUrl} target="_blank">
              View CV
            </a>
          </div>
        </div>

        <div className="panel contact-panel">
          <div className="contact-panel-header">
            <div>
              <h3>Ready to connect</h3>
              <p>Usually responds fastest by email.</p>
            </div>
            <span className="status-pill">
              <span></span>
              Available
            </span>
          </div>

          <div className="contact-links">
            {contactMethods.map((method) => (
              <a
                className="contact-link"
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
              >
                <span>
                  <small>{method.label}</small>
                  <strong>{method.value}</strong>
                  <em>{method.helper}</em>
                </span>
                <b>Open</b>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
