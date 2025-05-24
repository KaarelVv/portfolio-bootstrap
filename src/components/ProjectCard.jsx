export default function ProjectCard({
  title,
  description,
  tech = [],
  className = "",
  style = {},
  onClick = null,
}) {
  return (
    <div
      className={`project-card h-100 p-4 ${className}`}
      style={{ ...style, cursor: onClick ? "pointer" : "default" }}
      onClick={onClick}
    >
      <h5 className="card-title">{title}</h5>
      <p className="card-text small">
        {description.length > 80 ? description.slice(0, 80) + "..." : description}
      </p>

      {tech.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mt-3">
          {tech.slice(0, 3).map((tag) => (
            <span key={tag} className="tech-badge small">{tag}</span>
          ))}
          {tech.length > 3 && (
            <span className="tech-badge small">+{tech.length - 3}</span>
          )}
        </div>
      )}
    </div>
  );
}