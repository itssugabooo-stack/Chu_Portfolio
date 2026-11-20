const infoItems = [
  ["Name", "Chu Theint Theint"],
  ["Role", "Computer Science Student / Early-Career Developer"],
  ["Focus", "Frontend, Mobile & Software Development"],
  ["Seeking", "Junior and Entry-Level Roles"],
]

const focusItems = [
  "Building user-friendly interfaces with React.js and responsive CSS.",
  "Developing Flutter mobile foundations and preparing API integrations.",
  "Collaborating through Git, pull requests, debugging, and testing.",
]

function About() {
  return (
    <section id="about" className="site-section section-alt">
      <div className="section-inner about-grid">
        <div>
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">Curious, steady, and ready to grow.</h2>
          <div className="prose-block">
            <p>
              I am a Computer Science student at Rangsit University with practical
              experience in React.js, Flutter, REST APIs, and collaborative development.
              As a Flutter mobile developer on the RSU Shuttle Bus Monitoring project,
              I have worked on the application foundation, domain models, and emulator testing.
            </p>
            <p>
              I am completing my coursework in December 2026 and will officially graduate
              in 2027. I am preparing for full-time junior frontend, Flutter, software development, or entry-level IT
              opportunities where I can contribute and continue learning.
            </p>
          </div>
        </div>

        <div className="panel about-panel">
          <div>
            <h3>Quick Info</h3>
            <dl className="info-list">
              {infoItems.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </div>
          <div className="education-summary">
            <span>Education</span>
            <strong>Bachelor of Science in Computer Science</strong>
            <p>Rangsit University, Thailand</p>
            <p>Coursework Completion: December 2026</p>
            <p>Expected Graduation: 2027</p>
          </div>
          <div className="focus-list">
            <h3>What I Work On</h3>
            {focusItems.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
