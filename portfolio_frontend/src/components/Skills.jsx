import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Skills.css";

function Skills() {
  const [sketches, setSketches] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [openSketches, setOpenSketches] = useState(false);
  const [openPhotos, setOpenPhotos] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Fetch sketches + photos
  useEffect(() => {
    fetch("http://localhost:5000/api/sketches")
      .then((res) => res.json())
      .then((data) => setSketches(data));

    fetch("http://localhost:5000/api/photography")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  // Auto-cycle sketches (pause when Lightbox is open)
useEffect(() => {
  if (sketches.length > 0 && !openSketches) {
    const interval = setInterval(() => {
      setThumbIndex((prev) => (prev + 1) % sketches.length);
    }, 3000);
    return () => clearInterval(interval);
  }
}, [sketches, openSketches]);

// Auto-cycle photos (pause when Lightbox is open)
useEffect(() => {
  if (photos.length > 0 && !openPhotos) {
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }
}, [photos, openPhotos]);

  // Tech stacks
  const frontend = [
    { src: "/logos/react.png", alt: "React" },
    { src: "/logos/javascript.png", alt: "JavaScript" },
    { src: "/logos/html.png", alt: "HTML" },
    { src: "/logos/css.png", alt: "CSS" },
    { src: "/logos/bootstrap.png", alt: "Bootstrap" },
  ];
  const backend = [
    { src: "/logos/nodejs.png", alt: "Node.js" },
    { src: "/logos/expressjs.png", alt: "Express.js" },
    { src: "/logos/python.png", alt: "Python" },
  ];
  const data = [
    { src: "/logos/mysql.png", alt: "MySQL" },
    { src: "/logos/sql.png", alt: "SQL" },
  ];
  const others = [
    { src: "/logos/git.png", alt: "Git" },
    { src: "/logos/github.png", alt: "GitHub" },
    { src: "/logos/aws.png", alt: "AWS" },
  ];

  const [frontendIndex, setFrontendIndex] = useState(0);
  const [backendIndex, setBackendIndex] = useState(0);
  const [dataIndex, setDataIndex] = useState(0);
  const [othersIndex, setOthersIndex] = useState(0);

  // Auto-cycle tech logos
  useEffect(() => {
    const f = setInterval(() => setFrontendIndex((i) => (i + 1) % frontend.length), 3000);
    const b = setInterval(() => setBackendIndex((i) => (i + 1) % backend.length), 3000);
    const d = setInterval(() => setDataIndex((i) => (i + 1) % data.length), 3000);
    const o = setInterval(() => setOthersIndex((i) => (i + 1) % others.length), 3000);
    return () => {
      clearInterval(f);
      clearInterval(b);
      clearInterval(d);
      clearInterval(o);
    };
  }, []);

  return (
    <motion.section id="skills" className="skills-section">
      <div className="container-fluid">
        <h2 className="skills-title neon-text text-center mb-5">Skills</h2>
        <div className="skills-card-grid">

          {/* Frontend */}
          <motion.div className="skill-card" whileHover={{ scale: 1.05 }}>
            <h3 className="skill-card-label">Frontend</h3>
            <img src={frontend[frontendIndex].src} alt={frontend[frontendIndex].alt} className="unicard-img" />
          </motion.div>

          {/* Backend */}
          <motion.div className="skill-card" whileHover={{ scale: 1.05 }}>
            <h3 className="skill-card-label">Backend</h3>
            <img src={backend[backendIndex].src} alt={backend[backendIndex].alt} className="unicard-img" />
          </motion.div>

          {/* Data */}
          <motion.div className="skill-card" whileHover={{ scale: 1.05 }}>
            <h3 className="skill-card-label">Data</h3>
            <img src={data[dataIndex].src} alt={data[dataIndex].alt} className="unicard-img" />
          </motion.div>

          {/* Others */}
          <motion.div className="skill-card" whileHover={{ scale: 1.05 }}>
            <h3 className="skill-card-label">Others</h3>
            <img src={others[othersIndex].src} alt={others[othersIndex].alt} className="unicard-img" />
          </motion.div>

          {/* Sketches */}
          {sketches.length > 0 && (
            <motion.div
              className="skill-card sketch-unicard"
              whileHover={{ scale: 1.05 }}
              onClick={() => setOpenSketches(true)}
            >
              <h3 className="skill-card-label">Sketches</h3>
              <img src={sketches[thumbIndex].image_url} alt={sketches[thumbIndex].title} className="unicard-img" />
            </motion.div>
          )}

          {/* Photography */}
<motion.div
  className="skill-card sketch-unicard"
  whileHover={{ scale: 1.05 }}
  onClick={() => photos.length > 0 && setOpenPhotos(true)}
>
  <h3 className="skill-card-label">Photography</h3>
  {photos.length > 0 ? (
    <img
      src={photos[photoIndex].image_url}
      alt={photos[photoIndex].title}
      className="unicard-img"
    />
  ) : (
    <p className="placeholder-text">Coming soon...</p>
  )}
</motion.div>


        </div>
      </div>

      {/* Lightboxes */}
      <Lightbox open={openSketches} close={() => setOpenSketches(false)} slides={sketches.map((s) => ({ src: s.image_url }))} />
      <Lightbox open={openPhotos} close={() => setOpenPhotos(false)} slides={photos.map((p) => ({ src: p.image_url }))} />
    </motion.section>
  );
}

export default Skills;
