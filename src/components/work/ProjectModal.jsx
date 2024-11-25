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
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
