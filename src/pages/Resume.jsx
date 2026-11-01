function Resume() {

  return (
    <section className="section resume-section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            MY RESUME
          </p>

          <h2>
            My <span>Resume</span>
          </h2>

          <p>
            View my complete resume directly on this page
            or download a copy.
          </p>

        </div>


        <div className="resume-page-card">

          <div className="resume-actions">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Open Resume ↗
            </a>

            <a
              href="/resume.pdf"
              download="Anantharamar-A-Resume.pdf"
              className="secondary-button"
            >
              Download Resume ↓
            </a>

          </div>


          <div className="resume-viewer">

            <iframe
              src="/resume.pdf"
              title="Anantharamar Resume"
              className="resume-frame"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;