import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";
import "./Portfolio.css";

export default function Portfolio() {
  const headRef = useReveal();
  const sliderRef = useReveal();
  const trackRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".project-card");
    if (!card) return;
    track.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <section className="section section-alt" id="portfolio">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="badge">Portfolio</span>
          <h2>
            My Creative Works Latest <span className="accent">Projects</span>
          </h2>
          <p>Selected work across web apps, landing pages, and mobile UI.</p>
        </div>

        <div className="portfolio-slider reveal" ref={sliderRef}>
          <button className="slider-btn prev" onClick={() => scroll(-1)} aria-label="Previous project">
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div className="portfolio-track" ref={trackRef}>
            {projects.map((p) => (
              <article
                className="project-card"
                key={p.id}
                onClick={() => navigate(`/projects/${p.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(`/projects/${p.slug}`)}
                aria-label={`View ${p.title}`}
              >
                <div className="project-card-img-wrap">
                  <img src={p.coverImage} alt={p.title} loading="lazy" />
                  <div className="project-card-overlay">
                    <span className="view-label">View Project <i className="fa-solid fa-arrow-right" /></span>
                  </div>
                </div>
                <div className="project-card-body">
                  <span className="project-category">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.shortDesc}</p>
                </div>
              </article>
            ))}
          </div>

          <button className="slider-btn next" onClick={() => scroll(1)} aria-label="Next project">
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>

        <div className="section-cta">
          <button className="btn btn-primary" onClick={() => navigate("/projects")}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
