// src/pages/ProjectsPage.jsx
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const headRef  = useRef(null);
  const gridRef  = useRef(null);

  useEffect(() => {
    // Give scroll-to-top time to settle, then observe + force-show
    const timer = setTimeout(() => {
      const allReveal = [
        headRef.current,
        ...(gridRef.current
          ? Array.from(gridRef.current.querySelectorAll(".proj-grid-card"))
          : []),
      ].filter(Boolean);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
      );

      allReveal.forEach((el) => observer.observe(el));

      // Hard fallback — make everything visible after 600ms no matter what
      const fallback = setTimeout(() => {
        allReveal.forEach((el) => el.classList.add("visible"));
        observer.disconnect();
      }, 600);

      return () => {
        observer.disconnect();
        clearTimeout(fallback);
      };
    }, 120); // wait for scroll-to-top to complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="projects-page">
      <div className="container">

        <div className="projects-page-head reveal" ref={headRef}>
          <span className="badge projects-badge">Portfolio</span>
          <h1>All <span className="accent" style={{ color: "#1a1a1a" }}>Projects</span></h1>
          <p>Every project is a story — here are mine.</p>
        </div>

        <div className="projects-all-grid" ref={gridRef}>
          {projects.map((p, i) => (
            <article
              className="proj-grid-card"
              key={p.id}
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