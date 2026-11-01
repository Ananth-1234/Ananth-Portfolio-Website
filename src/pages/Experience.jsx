const experiences = [
  {
    period: "2022 – 2023",
    title: "Electrical Panel Board Assembly",
    company: "Kendex Company",
    description:
      "Worked on electrical panel board assembly, troubleshooting and optimization of electrical circuits.",
    icon: "⚡",
  },
  {
    period: "Internship",
    title: "Frontend & Backend Development Intern",
    company: "Squash App",
    description:
      "Worked with HTML, CSS, JavaScript and backend frameworks while gaining practical full-stack development experience.",
    icon: "🌐",
  },
  {
    period: "Internship",
    title: "Data Science Intern",
    company: "Krishtec",
    description:
      "Worked on data preprocessing, model building, visualization and machine learning predictive analytics using real-world datasets.",
    icon: "📈",
  },
  {
    period: "Training",
    title: "Data Analytics Training",
    company: "Novitec Company",
    description:
      "Gained practical experience in Python and Excel-based data analytics and business insights.",
    icon: "📊",
  },
];

function Experience() {

  return (
    <section className="section experience-section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            MY JOURNEY
          </p>

          <h2>
            Experience & <span>Training</span>
          </h2>

          <p>
            My professional experience, internships and
            practical training.
          </p>

        </div>


        <div className="timeline">

          {experiences.map(
            (experience, index) => (

              <div
                className="timeline-item"
                key={index}
              >

                <div className="timeline-marker">
                  {experience.icon}
                </div>

                <div className="timeline-content">

                  <span className="timeline-period">
                    {experience.period}
                  </span>

                  <h3>
                    {experience.title}
                  </h3>

                  <h4>
                    {experience.company}
                  </h4>

                  <p>
                    {experience.description}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Experience;