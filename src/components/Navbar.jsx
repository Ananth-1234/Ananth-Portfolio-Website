import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="nav-container">

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-bracket">&lt;</span>
          ANANTHARAMAR
          <span className="logo-bracket">/&gt;</span>
        </NavLink>


        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            onClick={closeMenu}
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          <NavLink
            to="/experience"
            onClick={closeMenu}
          >
            Experience
          </NavLink>

          <NavLink
            to="/education"
            onClick={closeMenu}
          >
            Education
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </nav>


        <NavLink
          to="/resume"
          className="nav-resume"
          onClick={closeMenu}
        >
          Resume ↗
        </NavLink>


        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </header>
  );
}

export default Navbar;