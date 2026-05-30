import { useState } from "react";
import useReveal from "../hooks/useReveal";
import "./Pricing.css";

const PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for small businesses",
    monthlyPrice: "₹4,999",
    yearlyPrice: "₹49,999",
    highlight: false,
    features: [
      { text: "1-Page Website", included: true },
      { text: "Mobile Responsive", included: true },
      { text: "Contact Form", included: true },
      { text: "Basic SEO Setup", included: true },
      { text: "2 Revisions", included: true },
      { text: "E-Commerce", included: false },
      { text: "Custom Animations", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    tagline: "Most popular for growing brands",
    monthlyPrice: "₹12,999",
    yearlyPrice: "₹1,19,999",
    highlight: true,
    features: [
      { text: "Up to 5 Pages", included: true },
      { text: "Mobile Responsive", included: true },
      { text: "Contact Form + WhatsApp", included: true },
      { text: "Full SEO Optimisation", included: true },
      { text: "5 Revisions", included: true },
      { text: "Basic E-Commerce", included: true },
      { text: "Custom Animations", included: true },
      { text: "Priority Support", included: false },
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    tagline: "Full-scale custom solution",
    monthlyPrice: "₹24,999",
    yearlyPrice: "₹2,39,999",
    highlight: false,
    features: [
      { text: "Unlimited Pages", included: true },
      { text: "Mobile Responsive", included: true },
      { text: "Advanced Forms & CRM", included: true },
      { text: "Advanced SEO + Analytics", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "Full E-Commerce Store", included: true },
      { text: "Custom Animations", included: true },
      { text: "Priority Support (1 yr)", included: true },
    ],
    cta: "Contact Me",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const headRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="section pricing-wrap" id="pricing">
      <div className="container">
        <div className="pricing-head reveal" ref={headRef}>
          <span className="badge">Pricing</span>
          <h2>
            Transparent Pricing, <span className="accents">No Surprises</span>
          </h2>
          <p className="section-desc">
            Choose the plan that fits your project. All plans include clean code, fast delivery, and post-launch guidance.
          </p>

          {/* Toggle */}
          <div className="pricing-toggle">
            <span className={!yearly ? "active-label" : ""}>Per Project</span>
            <button
              className={`toggle-switch ${yearly ? "on" : ""}`}
              onClick={() => setYearly((v) => !v)}
              aria-label="Toggle billing"
            >
              <span className="toggle-thumb" />
            </button>
            <span className={yearly ? "active-label" : ""}>
              Annual Retainer <em className="save-badge">Save 20%</em>
            </span>
          </div>
        </div>

        <div className="pricing-cards reveal" ref={cardsRef}>
          {PLANS.map(({ name, tagline, monthlyPrice, yearlyPrice, highlight, features, cta }) => (
            <article className={`pricing-card ${highlight ? "featured" : ""}`} key={name}>
              {highlight && <div className="popular-badge">Most Popular</div>}

              <div className="pricing-card-top">
                <h3>{name}</h3>
                <p className="pricing-tagline">{tagline}</p>
                <div className="pricing-price">
                  <span className="price-amt">{yearly ? yearlyPrice : monthlyPrice}</span>
                  <span className="price-period">{yearly ? "/year" : "/project"}</span>
                </div>
              </div>

              <ul className="pricing-features">
                {features.map(({ text, included }) => (
                  <li key={text} className={included ? "" : "excluded"}>
                    <i className={included ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark"} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${highlight ? "btn-primary" : "btn-outline"} pricing-btn`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {cta}
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          <i className="fa-solid fa-circle-info" /> Need something custom?{" "}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's talk
          </a>{" "}
          — I build tailored packages for every budget.
        </p>
      </div>
    </section>
  );
}
