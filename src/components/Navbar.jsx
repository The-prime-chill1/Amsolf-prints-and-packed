import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PiListBold, PiXBold, PiArrowRightBold, PiWhatsappLogoBold } from "react-icons/pi";
import { site } from "../data/siteConfig";
import "./Navbar.css";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar-wrapper">
      <div className={`navbar-pill ${scrolled ? "navbar-pill--scrolled" : ""}`}>
        {/* Brand */}
        <Link to="/" className="navbar__brand" onClick={() => setMobileOpen(false)}>
          <div className="navbar__orb">
            <img src={site.logo} alt={site.companyName} className="navbar__orb-img" />
          </div>
          <span className="navbar__brand-name">Amsolf Prints &amp; Packed</span>
        </Link>

        {/* Desktop Links */}
        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Request Quote Button */}
        <div className="navbar__actions">
          <Link to="/contact#quote" className="navbar__quote-btn">
            Request a Quote
          </Link>
        </div>

        {/* Mobile Hamburger Action */}
        <div className="navbar__mobile-actions">
          <button
            className="navbar__burger-btn"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <PiXBold /> : <PiListBold />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Card */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-card"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
          >
          <div className="navbar__mobile-header">
              <span className="navbar__mobile-brand">Amsolf Prints &amp; Packed</span>
              <span className="navbar__mobile-addr">{site.address}</span>
            </div>
            <nav className="navbar__mobile-nav">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `navbar__mobile-link ${isActive ? "is-active" : ""}`}
                >
                  <span>{l.label}</span>
                  <PiArrowRightBold className="navbar__mobile-arrow" />
                </NavLink>
              ))}
            </nav>

            <div className="navbar__mobile-footer">
              <Link
                to="/contact#quote"
                className="navbar__mobile-cta-btn"
                onClick={() => setMobileOpen(false)}
              >
                <span>Request a Quote</span>
                <PiArrowRightBold />
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__mobile-wa-btn"
              >
                <PiWhatsappLogoBold />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
