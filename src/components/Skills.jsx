const skillGroups = [
  {
    title: "Programming",
    description: "Languages and programming foundations from my CV.",
    items: ["Python", "C#", "JavaScript", "Object-Oriented Programming (OOP)"],
  },
  {
    title: "Frontend and Web",
    description: "Skills used for responsive web interface development.",
    items: ["React.js", "HTML/CSS", "Tailwind CSS", "Web Development"],
  },
  {
    title: "Database and APIs",
    description: "Data, backend, and integration skills listed in my CV.",
    items: [
      "SQL",
      "Database Design & Management",
      "REST APIs",
      "API Integration",
    ],
  },
  {
    title: "Tools and Vision",
    description: "Development tools and computer vision technologies.",
    items: ["Git", "GitHub", "Version Control", "OpenCV", "MediaPipe"],
  },
  {
    title: "Software Practice",
    description: "Core software development and collaboration strengths.",
    items: [
      "Software Development",
      "Debugging & Troubleshooting",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
  {
    title: "Languages",
    description: "Language skills from my CV.",
    items: ["English (Fluently)", "Burmese (Native)", "Thai (Basic)"],
  },
]

function SkillCard({ title, description, items }) {
  return (
    <article className="panel skill-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="chip-list">
        {items.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

function Skills() {
  return (
    <section id="skills" className="site-section">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
