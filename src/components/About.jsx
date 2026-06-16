const infoItems = [
  ["Name", "Chu Theint Theint"],
  ["Role", "Computer Science Student"],
  ["Focus", "Web Development"],
  ["Goal", "Internship and Entry-Level Opportunities"],
]

const focusItems = [
  "Designing responsive interfaces that are simple to scan and use.",
  "Building projects with React, Next.js, APIs, and modern tooling.",
  "Improving through teamwork, feedback, and practical problem solving.",
]

const education = {
  degree: "Bachelor of Science in Computer Science (B.Sc. in Computer Science)",
  school: "Rangsit University",
  gpa: "Current GPA: 3.00 / 4.00",
}

function About() {
  return (
    <section id="about" className="site-section section-alt">
      <div className="section-inner about-grid">
        <div>
          <p className="eyebrow">About Me</p>

          <h2 className="section-title">
            Curious, steady, and ready to grow.
          </h2>

          <div className="prose-block">
            <p>
              I am a Computer Science student at Rangsit University with
              interests in frontend development, software engineering, and
              data-driven applications. I enjoy building practical projects and
              continuously improving my technical skills.
            </p>
          </div>
        </div>

        <div className="panel about-panel">
          <div>
            <h3>Quick Info</h3>
            <dl className="info-list">
              {infoItems.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="education-summary">
            <span>Education</span>
            <strong>{education.degree}</strong>
            <p>{education.school}</p>
            <p>{education.gpa}</p>
          </div>

          <div className="focus-list">
            <h3>What I Focus On</h3>
            {focusItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
