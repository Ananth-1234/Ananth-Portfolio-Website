import { Link } from "react-router-dom";

function Home() {

  return (
    <section className="hero-section">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            ANANTHARAMAR <span>A.</span>
          </h1>

          <h2>
            AI & Data Science
            <span className="gradient-text">
              {" "} | Full-Stack Developer
            </span>
          </h2>

          <p className="hero-description">
            I build intelligent applications, data-driven
            solutions, machine learning systems and modern
            web experiences that solve real-world problems.
          </p>


          <div className="hero-buttons">

            <Link
              to="/projects"
              className="primary-button"
            >
              View My Projects →
            </Link>

            <Link
              to="/resume"
              className="secondary-button"
            >
              View Resume ↓
            </Link>

          </div>


          <div className="social-links">

            <a href="mailto:anantha682002@gmail.com">
              Email
            </a>

            <a href="tel:+919994346183">
              Call
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>


        <div className="hero-visual">

          <div className="glow-circle"></div>

          <div className="profile-card">

            <div className="profile-card-top">

              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>

            </div>


            <div className="code-content">

              <p>
                <span className="code-purple">
                  const
                </span>{" "}
                developer = {"{"}
              </p>

              <p className="code-indent">
                name:{" "}
                <span className="code-green">
                  "Anantharamar"
                </span>,
              </p>

              <p className="code-indent">
                role:{" "}
                <span className="code-green">
                  "AI & Data Science"
                </span>,
              </p>

              <p className="code-indent">
                skills: [
              </p>

              <p className="code-indent-2">
                "Python",
              </p>

              <p className="code-indent-2">
                "Machine Learning",
              </p>

              <p className="code-indent-2">
                "Data Analytics",
              </p>

              <p className="code-indent-2">
                "React",
              </p>

              <p className="code-indent">
                ],
              </p>

              <p className="code-indent">
                passion:{" "}
                <span className="code-green">
                  "Building Solutions"
                </span>
              </p>

              <p>
                {"}"};
              </p>

              <p className="code-cursor">
                _
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;