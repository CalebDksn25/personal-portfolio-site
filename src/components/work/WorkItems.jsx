import React from "react";

const WorkItems = ({ item, onOpenModal }) => {
  return (
    <div className="work__card" key={item.id} id="projects">
      <img src={item.images[0]} alt="" className="work__img" />{" "}
      {/* Use the first image */}
      <h3 className="work__title">{item.title} </h3>
      <button onClick={() => onOpenModal(item)} className="work__button">
        See More <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>
    </div>
  );
};

export default WorkItems;
