import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle"> My Personal Journey</span>

      <div className="qualification__container">
        <div clasName="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon "></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon "></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Computer Science & Mathematics{" "}
                </h3>
                <span className="qualification__subtitle">
                  San Diego State University
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  2023 - 2027
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Co-Founder: World Computing Org
                </h3>
                <span className="qualification__subtitle">
                  San Diego State University
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  Est. 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> High School </h3>
                <span className="qualification__subtitle">
                  Mountain Side High School
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  2019 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">AI / ML Intern</h3>
                <span className="qualification__subtitle">Anote - Remote</span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  Aug 2025 - Current
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">AI / ML Fellow</h3>
                <span className="qualification__subtitle">
                  Break Through Tech - Remote
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  March 2024 - Current
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Fullstack Software Developer / Front-End Lead
                </h3>
                <span className="qualification__subtitle">
                  Voodies - Remote
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  Nov 2024- May 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Freelance Software Engineer
                </h3>
                <span className="qualification__subtitle">Remote</span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  2021-Current
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
