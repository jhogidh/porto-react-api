import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../../public/css/projects.css";
import { projects } from "../data/projectData";

// Komponen Utama Showcase Proyek
function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isHovering, setIsHovering] = useState(false);

  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1024) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  // Effect untuk menangani resize window
  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const totalSlides = projects.length;
  const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  // Effect untuk menangani interval auto-play
  useEffect(() => {
    let intervalId = null;
    if (!isHovering) {
      intervalId = setInterval(handleNext, 3000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex, isHovering, slidesToShow]); // Dependensi untuk me-reset timer

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto mb-5">
                <h2 style={{ color: "var(--text-primary)" }}>
                  Messing around with{" "}
                  <span className="text-info">React.js</span> & some cool{" "}
                  <span className="text-primary">APIs</span> 😉
                </h2>
              </div>

              <div
                className="custom-carousel-container"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {Array.from({
                    length: Math.ceil(projects.length / slidesToShow),
                  }).map((_, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="carousel-slide"
                      style={{ width: "100%" }}
                    >
                      <div style={{ display: "flex", gap: "30px" }}>
                        {projects
                          .slice(
                            slideIndex * slidesToShow,
                            slideIndex * slidesToShow + slidesToShow
                          )
                          .map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              style={{
                                width: `calc(${100 / slidesToShow}% - ${
                                  (30 * (slidesToShow - 1)) / slidesToShow
                                }px)`,
                              }}
                            >
                              <ProjectCard project={item} />
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-arrow left" onClick={handlePrev}>
                  &#10094;
                </button>
                <button className="carousel-arrow right" onClick={handleNext}>
                  &#10095;
                </button>
                <div className="carousel-dots">
                  {Array.from({
                    length: Math.ceil(projects.length / slidesToShow),
                  }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`dot ${currentIndex === idx ? "active" : ""}`}
                      onClick={() => goToSlide(idx)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
