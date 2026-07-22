// src/components/Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { label: "About",       href: "about" },
  { label: "Portfolio",   href: "portfolio" },
  { label: "Services",    href: "services" },
  { label: "Pricing",     href: "pricing" },
  { label: "Testimonial", href: "testimonial" },
  { label: "Contact",     href: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled]           = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();
  const isHome    = location.pathname === "/";
  const navRef    = useRef(null);

  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll("section[id]");
    const handler = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 180) current = s.id;
      });
      setActiveSection(current);
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [isHome, location]);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Works from ANY page — goes home first then scrolls
  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home, then scroll after page loads
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <>
      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className={`header ${scrolled ? "scrolled" : ""}`} id="top" ref={navRef}>
        <div className="container header-inner">

          <Link
            to="/"
            className="header-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="/assets/logo.png" alt="Me to Your Code" className="logoimg" />
          </Link>

          <nav className={`nav ${menuOpen ? "open" : ""}`} id="nav" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={label}
                className={`nav-link ${isHome && activeSection === href ? "active" : ""}`}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>

        </div>
      </header>
    </>
  );
}