import { useState, useEffect, useRef } from "react";
import useReveal from "../hooks/useReveal";
import "./Testimonials.css";

const GRID_REVIEWS = [
  {
    text: "Tanvir transformed our mobile app with a clean and intuitive interface that our users love.",
    name: "Alex Johnson",
    role: "Product Manager, London",
  },
  {
    text: "He quickly understood our business needs and delivered designs that exceeded expectations.",
    name: "Sachin Tendulkar",
    role: "Startup Founder, Dubai",
  },
  {
    text: "A great collaborator with impressive attention to detail and user-centric thinking.",
    name: "Jackie Chan",
    role: "UX Lead, Singapore",
  },
];

const CAROUSEL_SLIDES = [
  {
    text: "Excellent communication and delivered exactly what I needed for my Fiverr project.",
    author: "Gilbertogra, Fiverr Client",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
  },
  {
    text: "Tanvir transformed our mobile app with a clean and intuitive interface that our users love.",
    author: "Alex Johnson, Product Manager",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop",
  },
  {
    text: "A great collaborator with impressive attention to detail and user-centric thinking.",
    author: "Jackie Chan, UX Lead",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useReveal();
  const intervalRef = useRef(null);

  const goTo = (i) => setIndex((i + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);

  useEffect(() => {
    intervalRef.current = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(intervalRef.current);
  }, [index]);

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
          {GRID_REVIEWS.map(({ text, name, role }) => (
            <article className="testimonial-card" key={name}>
              <p>"{text}"</p>
              <h4>{name}</h4>
              <span>{role}</span>
            </article>
          ))}
        </div>

        {/* Carousel */}
        <div className="testimonial-carousel">
          <button className="carousel-btn" onClick={() => goTo(index - 1)} aria-label="Previous">
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div className="carousel-slide">
            <i className="fa-solid fa-quote-left quote-icon" />
            <img className="carousel-avatar" src={slide.img} alt={slide.author} />
            <p className="carousel-text">"{slide.text}"</p>
            <p className="carousel-author">{slide.author}</p>
          </div>

          <button className="carousel-btn" onClick={() => goTo(index + 1)} aria-label="Next">
            <i className="fa-solid fa-chevron-right" />
          </button>

          <div className="carousel-dots">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
