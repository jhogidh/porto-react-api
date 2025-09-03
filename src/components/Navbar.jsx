// Navbar.js
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);

  // 1. TAMBAHKAN STATE BARU untuk melacak status scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. GUNAKAN useEffect UNTUK MENDETEKSI SCROLL
  useEffect(() => {
    // Fungsi yang akan dijalankan setiap kali user scroll
    const handleScroll = () => {
      // Cek posisi scroll vertikal (Y-axis)
      if (window.scrollY > 50) {
        // Jika sudah scroll lebih dari 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen pertama kali dirender
    window.addEventListener("scroll", handleScroll);

    // PENTING: Hapus event listener saat komponen di-unmount
    // untuk mencegah memory leak
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array kosong berarti efek ini hanya berjalan sekali (saat mount)

  // 1. TAMBAHKAN STATE BARU untuk melacak status collapse navbar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Fungsi untuk mengubah state collapse saat tombol diklik
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const toggleColorMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`navbar navbar-expand-sm navbar-light fixed-top ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <i className="uil uil-user"></i> Jo
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            !isNavCollapsed ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav navbar-center-links">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <span data-hover="About">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                <span data-hover="Projects">Projects</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#resume" className="nav-link">
                <span data-hover="Resume">Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span data-hover="Contact">Contact</span>
              </a>
            </li> */}
          </ul>

          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div
                className="color-mode d-lg-flex justify-content-center align-items-center"
                onClick={toggleColorMode}
              >
                <i className="color-mode-icon"></i>
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
