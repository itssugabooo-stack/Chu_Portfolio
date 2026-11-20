import { githubUrl } from "../data/profile"

const projects = [
  {
    "title": "AI Study Assistant Platform",
    "type": "Study Tools / In Development",
    "tech": [
      "React.js",
      "JavaScript",
      "Vite",
      "Tailwind CSS"
    ],
    "desc": "React frontend for study dashboards, document workspaces, quizzes, flashcards, and an AI tutor interface. Backend integration is in development.",
    "github": "https://github.com/itssugabooo-stack/AI-Study-Assistant-Platform-with-Learning-Analytics-Dashboard-Frontend"
  },
  {
    "title": "RSU Shuttle Bus Monitoring System",
    "type": "Flutter Mobile / Team Project",
    "tech": [
      "Flutter",
      "Dart",
      "Git",
      "REST APIs"
    ],
    "desc": "Mobile application foundation for StackForce at Rangsit University. My work included Vehicle, Route, Stop, and RouteStop models, Android emulator testing, and preparation for backend API integration.",
    "github": "https://github.com/itssugabooo-stack/StackForce_Shuttle-Bus-Project"
  },
  {
    "title": "Lost & Found System",
    "type": "Web Frontend / In Development",
    "tech": [
      "React.js",
      "JavaScript",
      "Vite",
      "CSS"
    ],
    "desc": "Frontend for browsing and filtering lost-and-found reports, submitting items, and managing claims. Includes API request flows; end-to-end integration remains in development.",
    "github": "https://github.com/itssugabooo-stack/lost-and-found-frontend"
  },
  {
    "title": "GlowTrack",
    "type": "Full-Stack Skincare Application",
    "tech": [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL"
    ],
    "desc": "Skincare application with quiz and product-browsing interfaces, backed by registration, login, and product endpoints. Progress and recommendation interfaces are part of the developing application.",
    "github": "https://github.com/itssugabooo-stack/Glowtrack"
  },
  {
    "title": "Hand Gesture Recognition",
    "type": "Computer Vision Prototype",
    "tech": [
      "Python",
      "OpenCV",
      "MediaPipe"
    ],
    "desc": "Webcam prototype that tracks hand landmarks and classifies gestures using finger positions. Includes two-hand detection, gesture smoothing, and an on-screen frame-rate display.",
    "github": "https://github.com/itssugabooo-stack/hand-gesture-recognition"
  },
  {
    "title": "CRUD REST API",
    "type": "Backend Learning Project",
    "tech": [
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs"
    ],
    "desc": "REST API implementing create, read, update, and delete operations for user records with parameterized MySQL queries. A learning project for HTTP routing and database integration.",
    "github": "https://github.com/itssugabooo-stack/api_crud"
  },
  {
    "title": "SugaBoo Cinema",
    "type": "Movie Discovery Page",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "desc": "Movie-discovery frontend with featured films, movie-card grids, and responsive navigation.",
    "github": "https://github.com/itssugabooo-stack/Movie_frontend"
  },
  {
    "title": "Valorant Project",
    "type": "Game-Themed Web Interface",
    "tech": [
      "HTML",
      "CSS"
    ],
    "desc": "Static Valorant-themed interface presenting agents and maps through image-based cards and styled page sections.",
    "github": "https://github.com/itssugabooo-stack/Valorant_project"
  }
]

function Projects() {
  return (
    <section id="projects" className="site-section section-alt">
      <div className="section-inner">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">Projects</p><h2 className="section-title">Selected work with clear purpose.</h2></div>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View GitHub</a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="panel project-card" key={project.title}>
              <div className="project-visual"><span>{String(index + 1).padStart(2, "0")}</span><strong>{project.type}</strong></div>
              <div className="project-body"><h3>{project.title}</h3><p>{project.desc}</p></div>
              <div className="chip-list compact">{project.tech.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">View GitHub</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
