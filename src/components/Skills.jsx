import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import "./Skills.css";

function Skills() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const [viewMode, setViewMode] = useState({ sketches: "carousel", photos: "carousel" });

  const makeURL = (p) => `${import.meta.env.BASE_URL}${p}`;

  // 🧠 Tech Logos
  const tech = useMemo(
    () => [
      { src: makeURL("logos/react.png"), title: "React" },
      { src: makeURL("logos/javascript.png"), title: "JavaScript" },
      { src: makeURL("logos/html.png"), title: "HTML" },
      { src: makeURL("logos/css.png"), title: "CSS" },
      { src: makeURL("logos/bootstrap.png"), title: "Bootstrap" },
      { src: makeURL("logos/nodejs.png"), title: "Node.js" },
      { src: makeURL("logos/expressjs.png"), title: "Express.js" },
      { src: makeURL("logos/python.png"), title: "Python" },
      { src: makeURL("logos/mysql.png"), title: "MySQL" },
      { src: makeURL("logos/git.png"), title: "Git" },
      { src: makeURL("logos/github.png"), title: "GitHub" },
      { src: makeURL("logos/aws.png"), title: "AWS" },
    ],
    []
  );

  // ✏️ Sketches & 📸 Photos
  const sketches = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        src: makeURL(`sketches/sketch${i + 1}.jpeg`),
        title: `Sketch ${i + 1}`,
      })),
    []
  );

  const photos = useMemo(
    () =>
      Array.from({ length: 17 }, (_, i) => ({
        src: makeURL(`photos/photo${i + 1}.jpg`),
        title: `Photo ${i + 1}`,
      })),
    []
  );

  // 🔍 Lightbox open logic
  const openGallery = (items, i) => {
    setSlides(items.map((it) => ({ src: it.src, title: it.title })));
    setIndex(i);
    setOpen(true);
  };

  // 🔁 Toggle view
  const toggleView = (type) => {
    setViewMode((prev) => ({
      ...prev,
      [type]: prev[type] === "carousel" ? "grid" : "carousel",
    }));
  };

  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="skills-title">Skills & Works</h2>

      {/* 🧩 Tech Skills */}
      <h3 className="skills-subtitle">Technical Skills</h3>
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="skills-swiper"
      >
        {tech.map((t, i) => (
          <SwiperSlide key={`tech-${i}`}>
            <motion.div
              className="carousel-card no-border"
              whileHover={{ scale: 1.08 }}
              onClick={() => openGallery(tech, i)}
            >
              <img src={t.src} alt={t.title} className="carousel-img" />
              <p className="carousel-label">{t.title}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🎨 Sketches */}
      <div className="skills-section-header">
        <h3 className="skills-subtitle">Sketches</h3>
        <button className="toggle-btn" onClick={() => toggleView("sketches")}>
          {viewMode.sketches === "carousel" ? "View All" : "Back to Carousel"}
        </button>
      </div>

      {viewMode.sketches === "carousel" ? (
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="skills-swiper"
        >
          {sketches.map((s, i) => (
            <SwiperSlide key={`sketch-${i}`}>
              <motion.div
                className="carousel-card no-border"
                whileHover={{ scale: 1.06 }}
                onClick={() => openGallery(sketches, i)}
              >
                <img src={s.src} alt={s.title} className="carousel-img creative-img" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid-gallery">
          {sketches.map((s, i) => (
            <motion.div
              key={`grid-sketch-${i}`}
              className="grid-item"
              whileHover={{ scale: 1.03 }}
              onClick={() => openGallery(sketches, i)}
            >
              <img src={s.src} alt={s.title} />
            </motion.div>
          ))}
        </div>
      )}

      {/* 📷 Photography */}
      <div className="skills-section-header">
        <h3 className="skills-subtitle">Photography</h3>
        <button className="toggle-btn" onClick={() => toggleView("photos")}>
          {viewMode.photos === "carousel" ? "View All" : "Back to Carousel"}
        </button>
      </div>

      {viewMode.photos === "carousel" ? (
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="skills-swiper"
        >
          {photos.map((p, i) => (
            <SwiperSlide key={`photo-${i}`}>
              <motion.div
                className="carousel-card no-border"
                whileHover={{ scale: 1.06 }}
                onClick={() => openGallery(photos, i)}
              >
                <img src={p.src} alt={p.title} className="carousel-img creative-img" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid-gallery">
          {photos.map((p, i) => (
            <motion.div
              key={`grid-photo-${i}`}
              className="grid-item"
              whileHover={{ scale: 1.03 }}
              onClick={() => openGallery(photos, i)}
            >
              <img src={p.src} alt={p.title} />
            </motion.div>
          ))}
        </div>
      )}

      {/* 🔍 Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        onIndexChange={setIndex}
      />
    </motion.section>
  );
}

export default Skills;
