const skillGroups = [
  {
    "title": "Programming",
    "description": "Technologies used in coursework and projects.",
    "items": [
      "JavaScript",
      "Python",
      "Dart",
      "C#",
      "SQL"
    ]
  },
  {
    "title": "Frontend",
    "description": "Technologies used in coursework and projects.",
    "items": [
      "React.js",
      "HTML",
      "CSS",
      "Tailwind CSS"
    ]
  },
  {
    "title": "Mobile",
    "description": "Technologies used in coursework and projects.",
    "items": [
      "Flutter",
      "Android Emulator"
    ]
  },
  {
    "title": "Backend",
    "description": "Technologies used in coursework and projects.",
    "items": [
      "Node.js",
      "Express.js",
      "REST APIs"
    ]
  },
  {
    "title": "Database & ORM",
    "description": "Technologies used in coursework and projects.",
    "items": [
      "PostgreSQL",
      "MySQL",
      "Prisma"
    ]
  },
  {
    "title": "Tools",
    "description": "Technologies used in coursework and projects.",
    "items": [
      "Git",
      "GitHub",
      "VS Code",
      "Docker",
      "Postman"
    ]
  },
  {
    "title": "Computer Vision",
    "description": "Technologies used in coursework and projects.",
    "items": [
      "OpenCV",
      "MediaPipe"
    ]
  },
  {
    "title": "Software Practice",
    "description": "Technologies used in coursework and projects.",
    "items": [
      "Debugging",
      "Object-Oriented Programming",
      "Team Collaboration"
    ]
  },
  {
    "title": "Spoken Languages",
    "description": "Communication.",
    "items": [
      "Burmese (Native)",
      "English (Fluent)",
      "Thai (Basic)"
    ]
  }
]

function SkillCard({ title, description, items }) {
  return (
    <article className="panel skill-card">
      <h3>{title}</h3><p>{description}</p>
      <div className="chip-list">{items.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
    </article>
  )
}

function Skills() {
  return (
    <section id="skills" className="site-section">
      <div className="section-inner">
        <div className="section-heading"><p className="eyebrow">Skills</p><h2 className="section-title">Technical Skills</h2></div>
        <div className="skills-grid">{skillGroups.map((group) => <SkillCard key={group.title} {...group} />)}</div>
      </div>
    </section>
  )
}

export default Skills
