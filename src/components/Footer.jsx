import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const SOCIAL = [
  { label: "WhatsApp",  icon: "fa-brands fa-whatsapp",    href: "https://wa.me/917200960676", color: "#25d366" },
  { label: "Instagram", icon: "fa-brands fa-instagram",   href: "https://instagram.com/metoyourcode", color: "#e1306c" },
  { label: "LinkedIn",  icon: "fa-brands fa-linkedin-in", href: "#", color: "#0077b5" },
  { label: "Facebook",  icon: "fa-brands fa-facebook-f",  href: "https://www.facebook.com/share/18x7Xrnj21/", color: "#1877f2" },
];

const QUICK_LINKS = [
  { label: "About",     href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Services",  href: "/#services" },
  { label: "Pricing",   href: "/#pricing" },
  { label: "Contact",   href: "/#contact" },
];

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  const handleClick = (href) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer-outer">
      <footer className="footer container">

        <div className="footer-body">

          {/* Brand column */}
          <div className="footer-brand">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src="/assets/logo.png" alt="Me to Your Code" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              Clean code. Beautiful design.<br />Results your business can feel.
            </p>
            <div className="footer-socials">
              {SOCIAL.map(({ label, icon, href, color }) => (
                
                 <a key={label}
                  href={href}
                  className="footer-social-btn"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--social-color": color }}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={(e) => { e.preventDefault(); handleClick(href); }}>
                    <i className="fa-solid fa-chevron-right" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="footer-cta-col">
            <h4>Start a Project</h4>
            <p>Have an idea? Let's turn it into reality.</p>
            
              <a href="/#contact"
              className="btn btn-primary footer-cta-btn"
              onClick={(e) => { e.preventDefault(); handleClick("/#contact"); }}
            >
              <i className="fa-solid fa-paper-plane" /> Get in Touch
            </a>
            
             <a href="https://wa.me/917200960676"
              className="footer-wa-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" /> WhatsApp me directly
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {year} Me to Your Code. All Rights Reserved.</p>
          <p className="footer-made">Made with <i className="fa-solid fa-heart footer-heart" /> in India</p>
        </div>

      </footer>
    </div>
  );
}