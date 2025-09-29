import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="neon-navbar">
      <div className="brand">My Portfolio</div>
      <div className="nav-links">
        <a href="#home" className="nav-link">
          <span className="nav-icon">🏠</span> Home
        </a>
        <a href="#about" className="nav-link">
          <span className="nav-icon">ℹ️</span> About
        </a>
        <a href="#projects" className="nav-link">
          <span className="nav-icon">📁</span> Projects
        </a>
        <a href="#contact" className="nav-link active-link">
          <span className="nav-icon">✉️</span> Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;