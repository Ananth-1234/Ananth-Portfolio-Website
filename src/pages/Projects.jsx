import { useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

function Projects() {

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "AI / ML",
    "AI / LLM",
    "Data Analytics",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  return (
    <section className="section projects-section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            MY WORK
          </p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A collection of projects where I applied AI,
            machine learning, data analytics and software
            development to solve practical problems.
          </p>

        </div>


        <div className="project-filters">

          {filters.map((filter) => (

            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>

          ))}

        </div>


        <div className="project-count">

          Showing{" "}
          <strong>
            {filteredProjects.length}
          </strong>{" "}
          project
          {filteredProjects.length !== 1
            ? "s"
            : ""}

        </div>


        <div className="projects-grid">

          {filteredProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;