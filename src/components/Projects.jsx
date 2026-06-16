import { githubRepoUrl, githubUrl } from "../data/profile"

const projects = [
  {
    title: "AI Study Assistant",
    type: "Learning Analytics Dashboard",
    tech: ["React", "Vite", "Tailwind CSS", "AI Tutor UI"],
    desc: "A responsive frontend for an AI-powered learning analytics and personalized study assistant platform with dashboard, quiz, roadmap, and tutor chat views.",
    github: githubRepoUrl(
      "AI-Study-Assistant-Platform-with-Learning-Analytics-Dashboard-Frontend",
    ),
  },
  {
    title: "SugaBoo Cinema",
    type: "Movie Discovery Page",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Feather Icons"],
    desc: "A warm movie-discovery landing page with featured films, movie-card grids, responsive navigation, and subtle interactive states.",
    github: githubRepoUrl("Movie_frontend"),
  },
  {
    title: "Lost & Found Platform",
    type: "Frontend Application",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Redux Toolkit"],
    desc: "A community-driven platform that helps users report, browse, and reclaim lost items through an intuitive web interface.",
    github: githubRepoUrl("lost-and-found-frontend"),
  },
  {
    title: "GlowTrack",
    type: "Product and UX Planning",
    tech: ["Project Planning", "UX Design", "Team Collaboration"],
    desc: "A wellness and habit-tracking application designed to help users monitor daily habits, set personal goals, and track progress over time.",
    github: githubRepoUrl("Glowtrack"),
  },
  {
    title: "CRUD API",
    type: "Backend API",
    tech: ["Node.js", "REST API", "CRUD Operations"],
    desc: "A backend API project implementing Create, Read, Update, and Delete operations while strengthening API architecture skills.",
    github: githubRepoUrl("api_crud"),
  },
  {
    title: "Valorant Project",
    type: "React Interface",
    tech: ["React", "JavaScript", "Frontend Development"],
    desc: "A Valorant-themed web application showcasing game-related information, UI design, and frontend development concepts.",
    github: githubRepoUrl("Valorant_project"),
  },
  {
    title: "Hand Gesture Recognition",
    type: "Computer Vision",
    tech: ["Python", "OpenCV", "MediaPipe"],
    desc: "A computer vision project that detects and recognizes hand gestures in real time using a webcam.",
    github: githubRepoUrl("hand-gesture-recognition"),
  },
]

function Projects() {
  return (
    <section id="projects" className="site-section section-alt">
      <div className="section-inner">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Selected work with clear purpose.</h2>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All on GitHub
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="panel project-card" key={project.title}>
              <div className="project-visual">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.type}</strong>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>

              <div className="chip-list compact">
                {project.tech.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.cta || "View GitHub ->"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
