// Projects.js
import React from "react";
// Impor komponen Swiper

// Impor style Swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function Projects() {
  const projectImages = [
    "images/project/project-image01.png",
    "images/project/project-image02.png",
    "images/project/project-image03.png",
    "images/project/project-image04.png",
    "images/project/project-image05.png",
  ];

  return (
    <section className="project py-5" id="project">
      <div className="container">
        {/* ... judul section ... */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Tampilkan 3 slide sekaligus
          loop={true}
          autoplay={{ delay: 2500 }}
        >
          {projectImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="project-info">
                <img
                  src={image}
                  className="img-fluid"
                  alt={`project image ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
