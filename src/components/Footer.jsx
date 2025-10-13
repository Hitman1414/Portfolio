import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer-section">
      {/* 🌌 Animated Layers */}
      <div className="footer-bg"></div>
      <div className="footer-particles"></div> {/* 👈 NEW */}

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="footer-heading">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <p className="footer-subtext">
          I'm open to opportunities in development, cloud, and application
          support.
        </p>

        <a href="mailto:youremail@example.com" className="footer-btn">
          <FaEnvelope className="footer-btn-icon" /> Contact Me
        </a>

        <div className="footer-socials">
          <motion.a
            href="https://www.linkedin.com/in/prateek-singh-92a63619/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Hitman1414"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.a>
        </div>

        <div className="footer-links">
          <Link to="hero" smooth duration={500}>
            Home
          </Link>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
          <Link to="achievements" smooth duration={500}>
            Achievements
          </Link>
          <Link to="footer" smooth duration={500}>
            Contact
          </Link>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} <span>Prateek Singh</span>. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
