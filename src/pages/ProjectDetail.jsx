import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  const [heroIndex, setHeroIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const intervalRef = useRef(null);

  /* Auto-slide hero */
  useEffect(() => {
    if (!project) return;
    intervalRef.current = setInterval(() => {
      setHeroIndex((i) => (i + 1) % project.images.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [project]);

  /* Scroll to top on mount */
  useEffect(() => window.scrollTo({ top: 0 }), [slug]);

  /* Keyboard close lightbox */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* Lock background scroll while lightbox is open */
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (!project) {
    return (
      <main className="not-found">
        <div className="container">
          <h1>Project not found</h1>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  const goHero = (dir) =>
    setHeroIndex((i) => (i + dir + project.images.length) % project.images.length);

  return (
    <main className="project-detail">

      {/* ── Hero Slider ─────────────────────────────────── */}
      <div className="container pd-hero-wrap">
        <section className="pd-hero">
          <div className="pd-hero-track" style={{ transform: `translateX(-${heroIndex * 100}%)` }}>
            {project.images.map((img, i) => (
              <div className="pd-hero-slide" key={i}>
                <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
              </div>
            ))}
          </div>

          {/* Overlay content */}
          <div className="pd-hero-overlay">
            <button className="pd-back-btn" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left" /> Back
            </button>
            <div className="pd-hero-meta">
              <span className="badge">{project.category}</span>
              <h1>{project.title}</h1>
            </div>
          </div>

          {/* Slider controls */}
          <button className="pd-slide-btn prev" onClick={() => goHero(-1)} aria-label="Previous">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button className="pd-slide-btn next" onClick={() => goHero(1)} aria-label="Next">
            <i className="fa-solid fa-chevron-right" />
          </button>

          {/* Dots */}
          <div className="pd-hero-dots">
            {project.images.map((_, i) => (
              <button
                key={i}
                className={i === heroIndex ? "active" : ""}
                onClick={() => setHeroIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>
      </div>

      {/* ── Body ────────────────────────────────────────── */}
      <div className="container pd-body">

        {/* Overview */}
        <section className="pd-section pd-overview">
          <div className="pd-section-label">
            <span className="badge">Overview</span>
          </div>
          <div className="pd-overview-grid">
            <div>
              <h2>Project Overview</h2>
              <p>{project.description}</p>
              {project.liveDemoUrl && (
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary pd-demo-btn">
                  <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
                </a>
              )}
            </div>
            <div className="pd-tech-stack">
              <h3>Tech Stack</h3>
              <div className="pd-tech-pills">
                {project.techStack.map((t) => (
                  <span className="tech-pill-lg" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="pd-section">
          <span className="badge">Process</span>
          <h2>Workflow & Process</h2>
          <div className="pd-workflow">
            {project.workflow.map(({ step, title, desc }) => (
              <div className="pd-workflow-step" key={step}>
                <div className="pd-step-num">{step}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="pd-section">
          <span className="badge">Features</span>
          <h2>Key Features</h2>
          <ul className="pd-features">
            {project.features.map((f) => (
              <li key={f}>
                <i className="fa-solid fa-circle-check" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <section className="pd-section">
          <span className="badge">Gallery</span>
          <h2>Image Gallery</h2>
          <div className="pd-gallery">
            {project.images.map((img, i) => (
              <button
                className="pd-gallery-item"
                key={i}
                onClick={() => setLightbox(img)}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
                <div className="pd-gallery-overlay">
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pd-cta">
          <h2>Interested in working together?</h2>
          <p>I'm available for freelance projects and full-time opportunities.</p>
          <div className="pd-cta-btns">
            <button className="btn btn-primary" onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100); }}>
              Contact Me
            </button>
            <button className="btn btn-outline pd-outline-white" onClick={() => navigate("/projects")}>
              View All Projects
            </button>
          </div>
        </section>

      </div>

      {/* ── Lightbox ────────────────────────────────────── */}
      {/* ── Lightbox ────────────────────────────────────── */}
      {lightbox && createPortal(
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
            <i className="fa-solid fa-xmark" />
          </button>
          <img src={lightbox} alt="Full size" onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </main>
  );
}