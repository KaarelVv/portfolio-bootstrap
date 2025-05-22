export default function ProjectCard({
  title,
  description,
  github,
  url,
  tech = [],
  className = "",
  style = {},
  onClick = null,
}) {
  return (
    <div
      className={`card project-card h-100 p-4 ${className}`}
      style={{ ...style, cursor: onClick ? "pointer" : "default" }}
      onClick={onClick}
    >
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>

      {tech.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mt-3">
          {tech.map((tag) => (
            <span key={tag} className="tech-badge">{tag}</span>
          ))}
        </div>
      )}

      <div className="d-flex gap-2 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-git btn-sm"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-live btn-glow btn-sm"
            onClick={(e) => e.stopPropagation()}
          >
            View Live
          </a>
        )}
      </div>
    </div>
  );
}
