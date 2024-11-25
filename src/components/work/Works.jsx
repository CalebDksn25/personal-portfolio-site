import React, { useState, useEffect } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import ProjectModal from "./ProjectModal";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name.toLowerCase();
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return (
            <WorkItems
              item={item}
              key={item.id}
              onOpenModal={handleOpenModal} // Pass the function here
            />
          );
        })}
      </div>
      {modalOpen && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Works;
