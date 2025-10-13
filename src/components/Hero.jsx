import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  // Carousel images — place them in public/hero-bg/
  const images = [
    "/hero-bg/hero1.jpg",
    "/hero-bg/hero2.jpg",
    "/hero-bg/hero3.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto change background every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle CV download
  const handleDownload = () => {
    const confirmDownload = window.confirm(
      "Would you like to download Prateek Singh's Resume?"
    );
    if (confirmDownload) {
      const link = document.createElement("a");
      link.href = "/Prateek_Singh_CV.pdf"; // Place your CV in public/
      link.download = "Prateek_Singh_CV.pdf";
      link.click();
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Background Carousel */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${images[index]})` }}
      ></div>

      {/* Overlay + Content */}
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title neon-text">
            Prateek <span>Singh</span>
          </h1>
          <p className="hero-subtitle">
            TCSer | Tech Enthusiast | Dreamer |<br /> Creator | Lifelong Learner | Gamer
          </p>

          <motion.button
            className="hero-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
          >
            🚀 Explore More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
