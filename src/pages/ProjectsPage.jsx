import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const refs = Array.from({ length: projects.length }, () => useReveal());

  return (
    <main className="projects-page">
      <div className="container">

        <div className="projects-page-head reveal" ref={useReveal()}>
          <span className="badge projects-badge">Portfolio</span>
          <h1>All <span className="accent">Projects</span></h1>
          <p>Every project is a story — here are mine.</p>
        </div>

        <div className="projects-all-grid">
          {projects.map((p, i) => (
            <article
              className="proj-grid-card"
              key={p.id}
              ref={refs[i]}
              onClick={() => navigate(`/projects/${p.slug}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/projects/${p.slug}`)}
              aria-label={`View ${p.title}`}
            >
              <div className="proj-grid-img">
                <img src={p.coverImage} alt={p.title} loading="lazy" />
                <span className="proj-cat-badge">{p.category}</span>
                <div className="proj-grid-overlay">
                  <div className="proj-overlay-content">
                    <div className="proj-overlay-tech">
                      {p.techStack?.slice(0, 3).map((t) => (
                        <span className="tech-pill-mini" key={t}>{t}</span>
                      ))}
                    </div>
                    <span className="proj-view-label">
                      View Project <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="proj-grid-body">
                <span className="project-category">{p.category}</span>
                <h2>{p.title}</h2>
                <p>{p.shortDesc}</p>
                <div className="proj-tech-pills">
                  {p.techStack?.slice(0, 3).map((t) => (
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