export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-descripion">{project.description}</p>
        {project.role && <p><strong>Role:</strong> {project.role}</p>}
        {project.features?.length > 0 && (
          <ul className="modal-list">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}
        {project.learnings?.length > 0 && (
          <div className="mt-3">
            <p><strong>Key Learnings:</strong></p>
            <ul className="modal-list">
              {project.learnings.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mb-3 d-flex flex-wrap gap-2 mt-3">
          {project.tech.map((tag) => (
            <span key={tag} className="tech-badge">{tag}</span>
          ))}
        </div>
        <div className="d-flex gap-2 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-git btn-sm"
            >
              GitHub
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live btn-glow btn-sm"
            >
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
