import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section
      id="hero"
      className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-light"
    >
      {/* Background Video */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/hero-video.mp4.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Foreground Content */}
      <div className="content">
        <motion.h1
          className="hero-title display-4 fw-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Prateek<br /> Singh
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          TCSer | Tech Enthusiast | Dreamer |<br /> Creator | Lifelong Learner | Gamer
        </motion.p>

        <motion.button
          className="hero-btn btn btn-light mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore More
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
