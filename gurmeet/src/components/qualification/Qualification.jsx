import React, { useState } from "react";
import "./qualification.css";

export const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState == 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Python</h3>
                <span className="qualification__subtitle">Ducat-Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020-2020
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
                <h3 className="qualification__title">BCA</h3>
                <span className="qualification__subtitle">CCS-University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">12th-Intermediate</h3>
                <span className="qualification__subtitle">CBSE-Board</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2016
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
                <h3 className="qualification__title">10th-Matriculate</h3>
                <span className="qualification__subtitle">CBSE-Board</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2014
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState == 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Jr. Application Developer
                </h3>
                <span className="qualification__subtitle">Virtuzo-Noida</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">OLA-CTE</h3>
                <span className="qualification__subtitle">Konexions-Noida</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Sales Executive</h3>
                <span className="qualification__subtitle">MMM-Noida</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">Spain-Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
