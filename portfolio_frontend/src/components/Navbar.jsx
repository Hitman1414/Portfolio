import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaCogs, FaAward, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

const NAV_ITEMS = [
  { id: "hero", label: "Home", icon: <FaHome /> },
  { id: "skills", label: "Skills", icon: <FaCogs /> },
  { id: "achievements", label: "Achievements", icon: <FaAward /> },
  { id: "footer", label: "Contact", icon: <FaEnvelope /> },
];

function PortfolioNavbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = NAV_ITEMS.map((it) => document.getElementById(it.id));
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => s && observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 70; // account for navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  return (
    <Navbar expand="lg" fixed="top" className="neon-navbar">
      <Container>
        <Navbar.Brand href="#hero" onClick={handleScroll("hero")} className="brand">
          🚀 PS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {NAV_ITEMS.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={`nav-link ${active === it.id ? "active-link" : ""}`}
                onClick={handleScroll(it.id)}
              >
                <span className="nav-icon">{it.icon}</span>
                <span className="nav-text">{it.label}</span>
              </a>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
