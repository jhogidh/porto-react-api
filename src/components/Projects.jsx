// src/components/Projects.js

import React from "react";
// Impor komponen Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Impor modul tambahan jika perlu (misal: navigasi, pagination)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Impor style Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  const projects = [
    {
      name: "Cari Film",
      url: "https://cari-film-bagus.vercel.app/",
      images: "images/project/1.png",
    },
    {
      name: "Masak Apa",
      url: "https://masak-apa-ya.vercel.app/",
      images: "images/project/3.png",
    },
    {
      name: "Main Pokemon",
      url: "https://main-pokemon.vercel.app/",
      images: "images/project/2.png",
    },
  ];

  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto mb-5">
              <h2>
                Messing around with <span className="text-info">React.js</span>{" "}
                & some cool <span className="text-primary">APIs </span>😉
              </h2>
            </div>

            <Swiper
              // Daftarkan modul yang ingin digunakan
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }} // Menambahkan titik navigasi
              navigation={true} // Menambahkan tombol panah navigasi
              // ✨ Tambahkan prop breakpoints di sini ✨
              breakpoints={{
                // Aturan ketika lebar layar >= 320px (Mobile)
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // Aturan ketika lebar layar >= 768px (Tablet)
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // Aturan ketika lebar layar >= 1024px (Desktop)
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="project-info">
                    <p>{item.name}</p>
                    <a href={item.url}>
                      <img
                        src={item.images}
                        className="img-fluid"
                        alt={`project image ${index + 1}`}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
