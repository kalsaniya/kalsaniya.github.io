import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mr. Singh</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li> */}
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/kalsaniya"
            className="footer__social-link"
            target="_balnk"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gurmeet-singh-1ab8691a9/"
            className="footer__social-link"
            target="_balnk"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/kalsaniya25"
            className="footer__social-link"
            target="_balnk"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; GurmeetSingh. All rigths reserved
        </span>
      </div>
    </div>
  );
};
