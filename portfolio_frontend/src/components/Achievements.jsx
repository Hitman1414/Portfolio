import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./Achievements.css";

function Achievements() {
  const achievements = [
    { title: "Projects Completed", value: 20, suffix: "+" },
    { title: "Certifications", value: 5, suffix: "" },
    { title: "Awards", value: 3, suffix: "" },
  ];

  return (
    <motion.section
      id="achievements"
      className="achievements-section text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <h2 className="achievements-title">Achievements</h2>

      <div className="container">
        <div className="row justify-content-center">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="achievement-card p-4">
                <h3 className="achievement-value">
                  <CountUp
                    start={0}
                    end={ach.value}
                    duration={2}
                    suffix={ach.suffix}
                  />
                </h3>
                <p className="achievement-label">{ach.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Achievements;
