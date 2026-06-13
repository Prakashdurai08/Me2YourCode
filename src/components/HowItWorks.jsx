import useReveal from "../hooks/useReveal";
import "./HowItWorks.css";

const STEPS = [
  {
    number: "01",
    icon: "fa-solid fa-comments",
    title: "Discovery Call",
    desc: "We start with a free 30-minute call to understand your business, goals, target audience, and project scope.",
  },
  {
    number: "02",
    icon: "fa-solid fa-pencil-ruler",
    title: "Design & Plan",
    desc: "I create wireframes and a design prototype for your approval — no development starts until you love the design.",
  },
  {
    number: "03",
    icon: "fa-solid fa-code",
    title: "Build & Develop",
    desc: "Your approved design is built into a fast, responsive, and SEO-ready website with clean, maintainable code.",
  },
  {
    number: "04",
    icon: "fa-solid fa-paper-plane",
    title: "Launch & Support",
    desc: "We go live together. I handle deployment, testing, and offer post-launch support to keep things running smoothly.",
  },
];

export default function HowItWorks() {
  const headRef = useReveal();

  // One independent scroll-reveal observer per step card —
  // this is what makes each card animate in on its own as you scroll
  // (especially noticeable on mobile, where cards are stacked).
  const step0 = useReveal();
  const step1 = useReveal();
  const step2 = useReveal();
  const step3 = useReveal();
  const stepRefs = [step0, step1, step2, step3];

  return (
    <section className="section hiw-wrap" id="process">
      <div className="container hiw-card">
        <div className="section-head reveal" ref={headRef}>
          <span className="badge">My Process</span>
          <h2>
            How I Turn Your Idea Into a <span className="accent">Real Product</span>
          </h2>
          <p className="section-desc">
            A simple, transparent 4-step process — so you always know what's happening and what comes next.
          </p>
        </div>

        <div className="hiw-steps">
          {STEPS.map(({ number, icon, title, desc }, i) => (
            <div className="hiw-step" key={number} ref={stepRefs[i]}>
              <span className="hiw-number">{number}</span>
              <div className="hiw-step-head">
                <div className="hiw-icon-wrap">
                  <i className={icon} />
                </div>
              </div>
              <div className="hiw-content">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              {i < STEPS.length - 1 && <div className="hiw-connector" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="hiw-cta">
          <p>Ready to start? Let's talk about your project.</p>
          
           <a href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}