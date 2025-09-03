// Navbar.js
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const toggleColorMode = () => setDarkMode(!isDarkMode);

  // ... (useEffect hooks Anda tidak perlu diubah) ...
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`navbar navbar-expand-md navbar-expand-sm navbar-light fixed-top ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#about">
          <i className="uil uil-user"></i> Jo
        </a>

        {/* Gunakan wrapper untuk menata tombol di sisi kanan */}
        <div className="d-flex align-items-center d-lg-none d-md-none ">
          {/* 1. TOMBOL DARK MODE BARU UNTUK MOBILE */}
          {/* d-lg-none artinya: tampil di semua ukuran KECUALI lg (large) ke atas */}
          <button
            className="btn-warning border-0 "
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            style={{ marginRight: "10px", backgroundColor: "transparent" }}
          >
            {/* Ikon akan berubah berdasarkan state isDarkMode */}
            <i
              className={`uil ${isDarkMode ? "uil-sun" : "uil-moon"}`}
              style={{ color: `${isDarkMode ? "white" : "black"}` }}
            ></i>
          </button>

          {/* Tombol Toggler Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <i
              className="uil uil-bars"
              style={{ color: `${isDarkMode ? "white" : "black"}` }}
            ></i>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${
            !isNavCollapsed ? "show" : ""
          }`}
          id="navbarNav"
          style={{
            backgroundColor: `${!isDarkMode ? "white" : "#1A1A1A"}`,
          }}
        >
          <ul className="navbar-nav w-100">
            <li className="nav-item ml-lg-auto ml-sm-auto  ">
              <a href="#about" className="nav-link ">
                <span
                  data-hover="About"
                  style={{ color: `${isDarkMode ? "white" : "black"}` }}
                >
                  About
                </span>
              </a>
            </li>
            <li className="nav-item ">
              <a href="#project" className="nav-link">
                <span
                  data-hover="Projects"
                  style={{ color: `${isDarkMode ? "white" : "black"}` }}
                >
                  Projects
                </span>
              </a>
            </li>

            {/* 2. TOMBOL DARK MODE LAMA UNTUK DESKTOP */}
            {/* d-none d-lg-flex artinya: sembunyi di mobile, tampil sebagai flex di desktop */}
            <li className="nav-item ml-lg-auto ml-sm-auto d-none d-md-flex d-sm-flex d-lg-flex">
              <div
                className="color-mode d-flex justify-content-center align-items-center"
                onClick={toggleColorMode}
                style={{ cursor: "pointer" }}
              >
                <i className="color-mode-icon"></i>
                Color mode
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
