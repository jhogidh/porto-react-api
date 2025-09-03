function ProjectCard({ project }) {
  const { name, url, image } = project;

  return (
    <div className="project-card-wrapper">
      <div className="project-image-container">
        <img
          src={image}
          className="project-image"
          alt={`Tangkapan layar dari proyek ${name}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
          }}
        />
        <div className="project-overlay"></div>
      </div>
      <div className="project-info-content">
        <h5 className="project-name-static">{name}</h5>

        <div className="custom-btn-group">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn custom-btn custom-btn-bg custom-btn-link"
          >
            Visit 🚀
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
