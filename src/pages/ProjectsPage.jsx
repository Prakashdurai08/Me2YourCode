// src/pages/ProjectsPage.jsx
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";
import "./ProjectsPage.css";

function useRevealList(count) {
  const refs = useRef([]);
  refs.current = Array.from({ length: count }, (_, i) => refs.current[i] ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [count]);

  return (index) => (el) => {
    refs.current[index] = el;
  };
}

export default function ProjectsPage() {
  const navigate = useNavigate();
  const headRef = useReveal();
  const setRef = useRevealList(projects.length);

  return (
    <main className="projects-page">
      <div className="container">

        <div className="projects-page-head reveal" ref={headRef}>
          <span className="badge projects-badge">Portfolio</span>
          <h1>All <span className="accent">Projects</span></h1>
          <p>Every project is a story — here are mine.</p>
        </div>

        <div className="projects-all-grid">
          {projects.map((p, i) => (
            <article
              className="proj-grid-card"
              key={p.id}
              ref={setRef(i)}
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