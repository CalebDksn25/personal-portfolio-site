import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project || !project.images) {
    return null; // Return null if project or project.images is undefined
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <Carousel>
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`Slide ${index}`} className="modal-img" />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="tech-stack">
          <h4>Tech Stack</h4>
          <ul>
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="modal-buttons">
          {project.gitHub && (
            <a
              href={project.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn modal-btn-github">
              GitHub
            </a>
          )}

          {project.demoVid && (
            <a
              href={project.demoVid}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn modal-btn-demo">
              Video Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
