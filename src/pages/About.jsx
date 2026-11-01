import { Link } from "react-router-dom";

function About() {

  return (
    <section className="section about-section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Turning Ideas Into
            <span> Intelligent Solutions</span>
          </h2>

          <p>
            Learn more about my background, interests and
            technical journey.
          </p>

        </div>


        <div className="about-grid">

          <div className="about-content">

            <p>
              I am an Artificial Intelligence and Data Science
              student with a strong interest in Machine Learning,
              Data Analytics, Full-Stack Development and
              Generative AI.
            </p>

            <p>
              I enjoy building practical applications that
              combine intelligent systems, data-driven insights
              and modern web technologies.
            </p>

            <p>
              My learning journey includes internships and
              hands-on projects in Data Science, Data Analytics,
              Full-Stack Development and AI.
            </p>


            <div className="about-buttons">

              <Link
                to="/projects"
                className="primary-button"
              >
                Explore My Projects →
              </Link>

              <Link
                to="/contact"
                className="secondary-button"
              >
                Contact Me
              </Link>

            </div>

          </div>


          <div className="about-highlights">

            <div className="highlight-card">
              <span>01</span>
              <h3>AI & ML</h3>
              <p>
                Machine learning and intelligent applications.
              </p>
            </div>

            <div className="highlight-card">
              <span>02</span>
              <h3>Data Analytics</h3>
              <p>
                Data analysis, visualization and business insights.
              </p>
            </div>

            <div className="highlight-card">
              <span>03</span>
              <h3>Development</h3>
              <p>
                Modern web applications and full-stack development.
              </p>
            </div>

            <div className="highlight-card">
              <span>04</span>
              <h3>Generative AI</h3>
              <p>
                LLM evaluation and AI-powered solutions.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;