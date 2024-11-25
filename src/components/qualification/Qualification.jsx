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
                <h3 className="qualification__title"> Computer Science </h3>
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
                  {" "}
                  Member - Sigma Alpha Epsilon{" "}
                </h3>
                <span className="qualification__subtitle">
                  San Diego State University
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  2023 - 2027
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
                  2019 - 2024
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
                <h3 className="qualification__title">
                  {" "}
                  Freelanace Software Development{" "}
                </h3>
                <span className="qualification__subtitle">Portland, OR</span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  2022 - Present
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
                <h3 className="qualification__title"> Valet Assistant </h3>
                <span className="qualification__subtitle">
                  Towne Park - Portland, OR
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  2024 - 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Application / Web Developer{" "}
                </h3>
                <span className="qualification__subtitle">San Diego, CA</span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  2022 - Present
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
                <h3 className="qualification__title"> PC Builder </h3>
                <span className="qualification__subtitle">Portland, OR</span>
                <div className="qualification__calander">
                  <i className="uil uil-calender"></i>
                  2020 - 2022
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