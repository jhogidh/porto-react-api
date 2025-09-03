// Navbar.js
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);

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
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <i className="uil uil-user"></i> Jo
        </a>

        {/* 2. MODIFIKASI TOMBOL TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false} // Dinamis berdasarkan state
          aria-label="Toggle navigation"
          onClick={handleNavCollapse} // Panggil fungsi saat diklik
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 3. MODIFIKASI DIV MENU */}
        {/* Kelas 'show' akan ditambahkan secara dinamis berdasarkan state */}
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
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
