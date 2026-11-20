import { cvUrl, githubDisplay, githubUrl } from "../data/profile"

const email = "its.sugabooo@gmail.com"
const emailUrl = `mailto:${email}?subject=${encodeURIComponent("Portfolio Contact")}`
const phone = "+66981957523"
const phoneLabel = "+66 98 195 7523"
const linkedinUrl = "https://www.linkedin.com/in/chu-theint-theint-890081394/"

const contactMethods = [
  { label: "Email", value: email, href: emailUrl, helper: "Send me a message about a role or collaboration." },
  { label: "LinkedIn", value: "Chu Theint Theint", href: linkedinUrl, helper: "Connect with me professionally.", external: true },
  { label: "Phone", value: phoneLabel, href: `tel:${phone}`, helper: "For interviews and follow-ups." },
  { label: "GitHub", value: githubDisplay, href: githubUrl, helper: "Explore my source code and projects.", external: true },
  { label: "CV", value: "View CV (PDF)", href: cvUrl, helper: "Read my updated one-page CV.", external: true },
]

function Contact() {
  return (
    <section id="contact" className="site-section contact-section">
      <div className="section-inner contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let's talk about the next step.</h2>
          <p className="contact-text">
            I am interested in full-time junior frontend, Flutter, software developer, and entry-level IT roles.
            If you're hiring or would like to discuss a project, I'd be glad to connect.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={emailUrl}>Email Me</a>
            <a className="btn btn-secondary" href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href={cvUrl} download="Chu_Theint_Theint_CV.pdf">Download CV</a>
          </div>
        </div>
        <div className="panel contact-panel">
          <div className="contact-panel-header">
            <div><h3>Ready to connect</h3><p>Reach out by email or LinkedIn.</p></div>
            <span className="status-pill"><span></span>Open to junior roles</span>
          </div>
          <div className="contact-links">
            {contactMethods.map((method) => (
              <a className="contact-link" key={method.label} href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}>
                <span><small>{method.label}</small><strong>{method.value}</strong><em>{method.helper}</em></span><b>Open</b>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
