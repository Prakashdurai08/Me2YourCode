import useReveal from "../hooks/useReveal";
import "./Services.css";

const SERVICES = [
  {
    icon: "fa-solid fa-display",
    title: "Web Design",
    desc: "Pixel-perfect, modern websites tailored to your brand — fast, responsive, and built to convert visitors into customers.",
    from: "₹4,999",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Mobile UI",
    desc: "Intuitive mobile app interfaces designed for smooth user experiences on iOS and Android platforms.",
    from: "₹6,999",
  },
  {
    icon: "fa-solid fa-swatchbook",
    title: "Branding",
    desc: "Logo, colour palette, typography, and brand guidelines that make your business instantly recognisable.",
    from: "₹3,499",
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Landing Page",
    desc: "High-converting single pages built to capture leads, promote offers, and drive measurable results.",
    from: "₹1,999",
  },
  {
    icon: "fa-solid fa-arrows-rotate",
    title: "Redesign",
    desc: "Transform your outdated website into a modern, professional platform without losing your existing audience.",
    from: "₹3,999",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Consultation",
    desc: "1-on-1 strategy sessions to audit your digital presence and map out exactly what your business needs.",
    from: "₹999",
  },
];

export default function Services() {
  const headRef = useReveal();

  // Independent reveal observer per card — same step-by-step
  // scroll-in behaviour as the HowItWorks section.
  const c0 = useReveal();
  const c1 = useReveal();
  const c2 = useReveal();
  const c3 = useReveal();
  const c4 = useReveal();
  const c5 = useReveal();
  const cardRefs = [c0, c1, c2, c3, c4, c5];

  return (
    <section className="section services-wrap" id="services">
      <span className="services-blob blob-a" aria-hidden="true"></span>
      <span className="services-blob blob-b" aria-hidden="true"></span>

      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="badge">What I Offer</span>
          <h2>
            Services Built to <span className="accents">Grow Your Business</span>
          </h2>
          <p className="section-desc">
            From idea to launch — I handle design, development, and strategy so you can focus on running your business.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map(({ icon, title, desc, from }, i) => (
            <article className="service-card" key={title} ref={cardRefs[i]}>
              <div className="service-icon">
                <i className={icon} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="service-footer">
                <span className="service-from">From {from}</span>
                
                 <a href="#contact"
                  className="service-cta"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Quote <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}