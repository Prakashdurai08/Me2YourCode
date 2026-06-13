import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main className="projects-page">
      <div className="container">
        <div className="projects-page-head">
          <span className="badge">Portfolio</span>
          <h1>
            All <span className="accents">Projects</span>
          </h1>
          <p>Every project is a story — here are mine.</p>
        </div>

        <div className="projects-all-grid">
          {projects.map((p) => (
            <article
              className="proj-grid-card"
              key={p.id}
              onClick={() => navigate(`/projects/${p.slug}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/projects/${p.slug}`)}
            >
              <div className="proj-grid-img">
                <img src={p.coverImage} alt={p.title} loading="lazy" />
                <div className="proj-grid-overlay">
                  <span>View Project <i className="fa-solid fa-arrow-right" /></span>
                </div>
              </div>
              <div className="proj-grid-body">
                <span className="project-category">{p.category}</span>
                <h2>{p.title}</h2>
                <p>{p.shortDesc}</p>
                <div className="proj-tech-pills">
                  {p.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
