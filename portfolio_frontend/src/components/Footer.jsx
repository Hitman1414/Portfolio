import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const links = [
    { href: "mailto:youremail@example.com", icon: <FaEnvelope />, label: "Email" },
    { href: "https://github.com/yourgithub", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/yourlinkedin", icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  return (
    <motion.footer
      id="footer"
      className="footer-section text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <h2 className="footer-title">Get in Touch</h2>

      <div className="footer-links d-flex justify-content-center gap-4">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <p className="footer-copy mt-4">
        © {new Date().getFullYear()} With Love Prateek Singh.
      </p>
    </motion.footer>
  );
}

export default Footer;
