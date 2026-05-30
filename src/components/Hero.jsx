import useReveal from "../hooks/useReveal";
import useTyping from "../hooks/useTyping";
import useCounter from "../hooks/useCounter";
import "./Hero.css";

export default function Hero() {
  const cardRef = useReveal();
  const visualRef = useReveal();
  const typed = useTyping(["Web Design", "Mobile UI", "Landing Pages", "Branding"], 100, 2000);
  const clients = useCounter(5);
  const projects = useCounter(10);
  const reviews = useCounter(4);
  return (
    <section className="hero-wrap" id="about">
      <div className="container hero-card reveal" ref={cardRef}>
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <span className="badge">Welcome</span>

            <h1 className="hero-title">
              I create stunning{" "}
              <span className="accent typing-text">
                {typed}
                <span className="typing-cursor">|</span>
              </span>
            </h1>
            {/* <h1 className="hero-title">
              I have <span className="accent">Creative Web Design</span> Experience
            </h1> */}
            <p className="hero-quote">
              - "I create clean, responsive websites that meet business needs and look great on all devices."
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Contact Me
              </a>
              <a href="#portfolio" className="btn btn-outline"
                onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }}>
                View Portfolio
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual reveal delay-1" ref={visualRef}>
            <div className="hero-frame">
              <img src="/assets/mine.png" alt="Profile" width="380" height="480" />
            </div>
            <div className="hero-social">
              <span>Follow me on</span>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-item" ref={clients.ref}>
            <h3>{clients.count}+</h3>
            <p>Satisfied clients</p>
          </div>
          <div className="stat-item" ref={projects.ref}>
            <h3>{projects.count}+</h3>
            <p>Projects completed</p>
          </div>
          <div className="stat-item" ref={reviews.ref}>
            <h3>{reviews.count}+</h3>
            <p>Reviews given</p>
          </div>
        </div>
      </div>
    </section>
  );
}
