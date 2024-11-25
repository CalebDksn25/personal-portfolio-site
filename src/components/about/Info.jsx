import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-certification about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 years</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-code-block about__icon"></i>
        <h3 className="about__title">Coding Languages</h3>
        <span className="about__subtitle">15+ Languages</span>
      </div>
    </div>
  );
};

export default Info;
