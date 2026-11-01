const skillGroups = [
  {
    title: "Programming",
    icon: "💻",
    skills: [
      "Python",
      "Java",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLM",
      "Feature Selection",
      "Model Evaluation",
    ],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    skills: [
      "Data Analytics",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "Excel",
      "Business Intelligence",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "⚙️",
    skills: [
      "React",
      "Flask",
      "Streamlit",
      "SQLite",
      "Git",
      "APIs",
    ],
  },
];

function Skills() {

  return (
    <section className="section skills-section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            MY SKILLS
          </p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies and tools I use to build applications,
            analyze data and develop AI-powered solutions.
          </p>

        </div>


        <div className="skills-grid">

          {skillGroups.map((group) => (

            <div
              className="skill-card"
              key={group.title}
            >

              <div className="skill-icon">
                {group.icon}
              </div>

              <h3>
                {group.title}
              </h3>

              <div className="skill-list">

                {group.skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;