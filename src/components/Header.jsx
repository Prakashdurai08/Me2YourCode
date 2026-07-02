import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { label: "About",       href: "/#about" },
  { label: "Portfolio",   href: "/#portfolio" },
  { label: "Services",    href: "/#services" },
  { label: "Pricing",     href: "/#pricing" },
  { label: "Testimonial", href: "/#testimonial" },
  { label: "Contact",     href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled]           = useState(false);
  const location = useLocation();
  const isHome   = location.pathname === "/";
  const navRef   = useRef(null);

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
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
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

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (isHome && href.startsWith("/#")) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("/#", "");
              const isActive  = isHome && activeSection === sectionId;

              return isHome ? (
                
                 <a key={label}
                  href={href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>
    </>
  );
}