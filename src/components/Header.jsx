import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonial", href: "/#testimonial" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();
  const isHome = location.pathname === "/";

  /* Active section tracking (home page only) */
  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll("section[id]");

    const handler = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 180) current = s.id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome, location]);

  /* Close menu on route change */
  useEffect(() => setMenuOpen(false), [location]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (isHome && href.startsWith("/#")) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header" id="top">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/assets/logo.png" alt="Logo" className="logoimg" />
        </Link>

        {/* Desktop nav */}
        <nav className={`nav ${menuOpen ? "open" : ""}`} id="nav">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.replace("/#", "");
            const isActive = isHome && activeSection === sectionId;

            return isHome ? (
              <a
                key={label}
                href={href}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
              >
                {label}
              </a>
            ) : (
              <Link key={label} to={href} className="nav-link" onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          id="menuToggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
