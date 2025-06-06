import { useState } from "react";

import ProjectCard from "../components/ProjectCard";
import CardWrapper from "../components/CardWrapper";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    title: "First Landing Page",
    description: "Developed a landing page using HTML and CSS, focusing on clean layout, accessibility, and semantic structure. This project served as an introduction to front-end best practices.",
    url: "https://kaarel.tech/",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Solo Developer",
    features: [
      "Modular, semantic HTML structure",
      "Clean styling with CSS"
    ]
  },
  {
    title: "Voting App",
    description: "Built a real-time voting app for a hackathon using React and Google Apps Script.",
    github: "https://github.com/",
    url: "https://hindamine.ita.voco.ee/",
    tech: ["React", "Google Sheets", "Google Apps Script", "JavaScript", "HTML", "CSS", "Bootstrap"],
    role: "Full-Stack Developer",
    features: [
      "Live voting with Google Sheets as backend",
      "Multiple user input handling",
      "Dynamic result display with auto-refresh"
    ],
    learnings: [
      "Enhanced collaboration and teamwork in a hackathon setting",
      "Integrated Google Apps Script with React",
      "Real-time data handling with Google Sheets",
      "Improved problem-solving skills under time constraints"

    ]
  },
  {
    title: "Small WordPress WebShop",
    description: "My first dive into e-commerce with WordPress! I used WooCommerce and Bricks to create a fully responsive store, with a clean layout, custom theme tweaks, and working cart and checkout pages.",
    role: "Solo Developer",
    url: "https://vso24viilvere.ita.voco.ee/webShop",
    tech: ["WordPress", "WooCommerce", "Bricks", "Custom CSS", "Responsive Design"]
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
      <div className="sticky-header">
        <div className="container">
          <h2 className="hero-heading mb-3">My Projects</h2>
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
            <div className="project-card-wrapper fade-in-up">
              <ProjectCard
                key={p.title}
                {...p}
                style={{ animationDelay: `${i * 0.5}s`}}
                onClick={() => setActiveProject(p)}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </CardWrapper>
  );

}