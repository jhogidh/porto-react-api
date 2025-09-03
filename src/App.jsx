// App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Impor file CSS Anda di sini jika diperlukan
// import './css/bootstrap.min.css';
// import './css/unicons.css';
// ...file css lainnya

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
