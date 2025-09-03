// About.js
import React from "react";
// Jika Anda menggunakan Create React App, lebih baik impor gambar seperti ini:
// import softwareEngineerImg from './images/undraw/undraw_software_engineer_lvl5.svg';

function About() {
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12 align-items-center">
            <div className="about-text">
              <h1 className="animated animated-text">
                <span className="mr-2">Hey folks, I'm</span>
                <div className="animated-info">
                  <span className="animated-item">Jo</span>
                  <span className="animated-item">Web Enthusiast</span>
                  <span className="animated-item">Code Nerd</span>
                </div>
              </h1>
              <p>
                Here some React side projects born from my downtime curiosity 😉
              </p>

              <div className="custom-btn-group mt-4">
                <a href="#project" className="btn mr-lg-2 custom-btn">
                  <i className="uil uil-file-alt"></i> Check Out
                </a>
                <a
                  href="#project"
                  className="btn custom-btn custom-btn-bg custom-btn-link"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12">
            <div className="about-image svg">
              {/* Gunakan variabel yang diimpor jika menggunakan metode impor */}
              {/* <img src={softwareEngineerImg} className="img-fluid" alt="svg image" /> */}
              <img
                src="images/undraw/undraw_software_engineer_lvl5.svg"
                className="img-fluid"
                alt="svg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
