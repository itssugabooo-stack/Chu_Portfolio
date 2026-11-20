function Experience() {
  return (
    <section className="site-section" id="experience">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Building with a real project team.</h2>
        </div>
        <article className="panel experience-card">
          <div className="experience-top">
            <div>
              <p className="experience-kind">University Internship / Team Project</p>
              <h3>Flutter Mobile Developer Intern</h3>
              <p className="experience-org">Invictus Diversity Technology (IDT), a branch under ACE Data Systems</p>
              <p className="experience-org">RSU Shuttle Bus Monitoring System (StackForce)</p>
              <p className="experience-org">University internship project / Rangsit University, Thailand</p>
            </div>
            <span className="experience-date">Aug - Dec 2026 (expected end)</span>
          </div>
          <ul className="experience-bullets">
            <li>Set up and tested the Flutter mobile application foundation using an Android emulator.</li>
            <li>Created Dart data models for Vehicle, Route, Stop, and RouteStop.</li>
            <li>Coordinated with backend and frontend teammates on models, API requirements, and integration planning.</li>
            <li>Used Git branches and pull requests for collaborative project development.</li>
          </ul>
          <div className="chip-list compact">
            {["Flutter", "Dart", "Android Emulator", "Git / GitHub", "Team Collaboration"].map((skill) => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
          <a className="project-link" href="https://github.com/itssugabooo-stack/StackForce_Shuttle-Bus-Project" target="_blank" rel="noopener noreferrer">View project repository</a>
        </article>
      </div>
    </section>
  )
}

export default Experience
