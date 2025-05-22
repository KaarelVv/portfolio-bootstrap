import { useState } from "react";

import ProjectCard from "../components/ProjectCard";
import CardWrapper from "../components/CardWrapper";

const projects = [
  {
    title: "First landing page",
    description: "This is firs real web application i built.",
    github: "https://github.com/",
    url: "https://kaarel.tech/",
    tech: ["Html", "Javascript"]
  },
  {
    title: "Voting App",
    description: "Voting app for Hackaton we managed using google sheet as backend.",
    github: "https://github.com/",
    url: "https://hindamine.ita.voco.ee/",
    tech: ["React", "Google Sheet", "Google Script"]
  },
  {
    title: "Small WordPress WebShop",
    description: "Based on woo commerce.",
    github: "https://github.com/",
    url: "https://vso24viilvere.ita.voco.ee/",
    tech: ["WordPress", "WooCommerce", "Bricks"]
  }
];

const allTechs = [...new Set(projects.flatMap(p => p.tech))];


export default function Projects() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const filteredProjects = selectedTech
    ? projects.filter((p) => p.tech.includes(selectedTech))
    : projects;
return (
  <CardWrapper >
    {/* Sticky header with heading + filters */}
    <div className="sticky-header">
      <div className="container">
        <h2 className="hero-heading text-start mb-3">My Projects</h2>
        <div className="filter-bar mb-5">
          {/* Desktop filters */}
          <div className="d-none d-sm-flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={`filter-btn ${!selectedTech ? "active" : ""}`}>
              All
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`filter-btn ${selectedTech === tech ? "active" : ""}`}>
                {tech}
              </button>
            ))}
          </div>
          {/* Mobile dropdown */}
          <div className="d-flex d-sm-none flex-column gap-2">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              {selectedTech || "Filter by tech"} ▾
            </button>
            {filterOpen && (
              <div className="dropdown-list mt-2 d-flex flex-column gap-2">
                <button
                  onClick={() => {
                    setSelectedTech(null);
                    setFilterOpen(false);
                  }}
                  className={`filter-btn ${!selectedTech ? "active" : ""}`}
                >
                  All
                </button>
                {allTechs.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setSelectedTech(tech);
                      setFilterOpen(false);
                    }}
                    className={`filter-btn ${selectedTech === tech ? "active" : ""}`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Project cards */}
    <div className="container">
      <div className="projects-grid ">
        {filteredProjects.map((p, i) => (
          <ProjectCard
            key={p.title}
            {...p}
            className="fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={() => setActiveProject(p)}
          />
        ))}
      </div>
    </div>

    {/* Modal */}
    {activeProject && (
      <div className="modal-overlay" onClick={() => setActiveProject(null)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal-close-btn"
            onClick={() => setActiveProject(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.description}</p>
          <div className="mb-3 d-flex flex-wrap gap-2">
            {activeProject.tech.map((tag) => (
              <span key={tag} className="tech-badge">{tag}</span>
            ))}
          </div>
          <div className="d-flex gap-2 mt-4">
            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
              >
                GitHub
              </a>
            )}
            {activeProject.url && (
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glow btn-sm"
              >
                View Live
              </a>
            )}
          </div>
        </div>
      </div>
    )}
  </CardWrapper>
);

}