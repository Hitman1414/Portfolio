import React from "react";
import { motion } from "framer-motion";
import "./Achievements.css";

function Achievements() {
  const achievements = [
    {
      title: "AWS Certified Practitioner",
      description:
        "Successfully achieved AWS Certified Cloud Practitioner certification, validating foundational cloud expertise.",
      icon: "☁️",
    },
    {
      title: "10+ Years of Experience in IT",
      description:
        "A decade of hands-on experience in IT operations, application support, and full-stack development across enterprise systems.",
      icon: "💼",
    },
    {
      title: "Promoted as Team Lead in 2024",
      description:
        "Recognized for leadership, technical excellence, and mentoring team members to deliver complex, business-critical solutions.",
      icon: "🚀",
    },
  ];

  return (
    <motion.section
      id="achievements"
      className="achievements-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="achievements-title neon-text text-center mb-5">
        Achievements
      </h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="achievement-icon">{item.icon}</div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-desc">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Achievements;
