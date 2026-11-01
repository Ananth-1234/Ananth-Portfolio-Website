import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/experience" element={<Experience />} />

          <Route path="/education" element={<Education />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <footer className="footer">

        <div className="footer-container">

          <p>
            © 2026 Anantharamar A. All Rights Reserved.
          </p>

          <a href="/" className="back-to-top">
            Back to Home ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;