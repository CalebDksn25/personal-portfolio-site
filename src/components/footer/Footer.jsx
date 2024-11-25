import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <h1 className="footer__title">Caleb Dickson</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#qualifications" className="footer__link">
              Qualifications
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://x.com/CalebDicks39944"
            className="footer__social-link"
            target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/caleb-dickson-614912297/"
            className="footer__social-link"
            target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/CalebDksn25"
            className="footer__social-link"
            target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy footer__copy--spaced">
          &copy; 2021 Caleb Dickson. All right reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
