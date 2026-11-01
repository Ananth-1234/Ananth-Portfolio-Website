function Contact() {

  return (
    <section className="section contact-section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Have a project, opportunity or question?
            Feel free to get in touch with me.
          </p>

        </div>


        <div className="contact-grid">


          <div className="contact-info">


            <div className="contact-card">

              <div className="contact-icon">
                📧
              </div>

              <div>

                <span>
                  Email
                </span>

                <a href="mailto:anantha682002@gmail.com">
                  anantha682002@gmail.com
                </a>

              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                📱
              </div>

              <div>

                <span>
                  Phone
                </span>

                <a href="tel:+919994346183">
                  +91 99943 46183
                </a>

              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                💼
              </div>

              <div>

                <span>
                  LinkedIn
                </span>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile ↗
                </a>

              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                💻
              </div>

              <div>

                <span>
                  GitHub
                </span>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile ↗
                </a>

              </div>

            </div>

          </div>


          <div className="contact-message">

            <div className="contact-message-icon">
              🚀
            </div>

            <h3>
              Let's build something meaningful.
            </h3>

            <p>
              I am interested in opportunities involving
              Artificial Intelligence, Data Science,
              Machine Learning, Data Analytics and
              Full-Stack Development.
            </p>

            <a
              href="mailto:anantha682002@gmail.com?subject=Portfolio%20Contact"
              className="primary-button"
            >
              Send Me an Email →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;