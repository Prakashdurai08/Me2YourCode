import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import "./Testimonials.css";
const GRID_REVIEWS = [
  {
    text: "The food billing app made our hotel sales quick and simple. Staff handle bills easily now.",
    name: "Arun Kumar",
    role: "Hotel Owner, Madurai",
  },
  {
    text: "The clinic appointment software keeps patient bookings organized. No confusion, smooth check-ins.",
    name: "Dr. Meena Raj",
    role: "Clinic Owner, Coimbatore",
  },
  {
    text: "Our beauty salon website brought more online customers. Easy to use and looks professional.",
    name: "Priya Lakshmi",
    role: "Salon Manager, Tirunelveli",
  },
  {
    text: "The construction website shows our projects clearly. Clients trust us more after seeing it.",
    name: "Suresh Babu",
    role: "Builder, Chennai",
  },
];

const CAROUSEL_SLIDES = [
  {
    text: "The food billing app made our hotel sales quick and simple.",
    author: "Arun Kumar, Hotel Owner",
    rating: 5,
  },
  {
    text: "The clinic appointment software keeps patient bookings organized.",
    author: "Dr. Meena Raj, Clinic Owner",
    rating: 4,
  },
  {
    text: "Our beauty salon website brought more online customers.",
    author: "Priya Lakshmi, Salon Manager",
    rating: 3.5,
  },
  {
    text: "The construction website shows our projects clearly.",
    author: "Suresh Babu, Builder",
    rating: 4.5,
  },
];


const AUTO_ROTATE_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardRef = useReveal();

  // Independent reveal per grid card — same step-by-step
  // scroll-in behaviour used in Services / Pricing.
  const g0 = useReveal();
  const g1 = useReveal();
  const g2 = useReveal();
  const g3 = useReveal();
  // const gridRefs = [g0, g1, g2,g3];
  const gridRefs = GRID_REVIEWS.map(() => useReveal());

  const goTo = (i) => setIndex((i + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => goTo(index + 1), AUTO_ROTATE_MS);
    return () => clearInterval(t);
  }, [index, paused]);

  const slide = CAROUSEL_SLIDES[index];

  return (
    <section className="section testimonials-wrap" id="testimonial">
      <div className="container testimonials-card reveal" ref={cardRef}>
        <span className="badge">Reviews</span>
        <h2>
          Our Customer Say Something <br />
          <span className="accent">About Us</span>
        </h2>
        <p className="section-desc">
          Hear from clients who have partnered with me on their product design journey.
        </p>

        {/* Grid cards */}
        <div className="testimonials-grid">
          {GRID_REVIEWS.map(({ text, name, role }, i) => (
            <article className="testimonial-card" key={name} ref={gridRefs[i]}>
              <i className="fa-solid fa-quote-left card-quote-icon" aria-hidden="true" />
              <p>"{text}"</p>
              <div className="testimonial-author">
                <span className="author-avatar">{name.charAt(0)}</span>
                <div>
                  <h4>{name}</h4>
                  <span>{role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="testimonial-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="carousel-btn" onClick={() => goTo(index - 1)} aria-label="Previous testimonial">
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div className="carousel-slide" key={index}>
            <i className="fa-solid fa-quote-left quote-icon" aria-hidden="true" />
            <div className="carousel-stars" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((star, i) => {
                if (slide.rating >= star) {
                  return (
                    <i
                      key={i}
                      className="fa-solid fa-star"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    />
                  );
                }

                if (slide.rating >= star - 0.5) {
                  return (
                    <i
                      key={i}
                      className="fa-solid fa-star-half-stroke"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    />
                  );
                }

                return (
                  <i
                    key={i}
                    className="fa-regular fa-star"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  />
                );
              })}
            </div>
            <span className="rating-text">{slide.rating}/5</span>
            <p className="carousel-text">"{slide.text}"</p>
            <p className="carousel-author">{slide.author}</p>
          </div>

          <button className="carousel-btn" onClick={() => goTo(index + 1)} aria-label="Next testimonial">
            <i className="fa-solid fa-chevron-right" />
          </button>

          <div className="carousel-dots">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              >
                {i === index && !paused && (
                  <span
                    className="dot-progress"
                    style={{ animationDuration: `${AUTO_ROTATE_MS}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}