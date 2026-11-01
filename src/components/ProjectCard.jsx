function ProjectCard({ project }) {

  return (
    <article className="project-card">

      <div className="project-card-top">

        <div className="project-icon">
          {project.icon}
        </div>

        <span className="project-category">
          {project.category}
        </span>

      </div>


      <h3>
        {project.title}
      </h3>


      <p className="project-description">
        {project.description}
      </p>


      <div className="project-technologies">

        {project.technologies.map(
          (technology, index) => (

            <span key={index}>
              {technology}
            </span>

          )
        )}

      </div>


      <div className="project-buttons">

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          onClick={(event) => {

            if (project.github === "#") {

              event.preventDefault();

              alert(
                "GitHub link will be added soon."
              );

            }

          }}
        >
          GitHub ↗
        </a>


        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-live"
          onClick={(event) => {

            if (project.live === "#") {

              event.preventDefault();

              alert(
                "Live demo link will be added soon."
              );

            }

          }}
        >
          Live Demo →
        </a>

      </div>

    </article>
  );
}

export default ProjectCard;