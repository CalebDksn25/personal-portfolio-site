import React, { useState } from "react";
import { Link } from "react-scroll";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Caleb
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>
            {/*}
            <li className="nav__item">
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="nav__link">
                  <i className="uil uil-briefcase nav__icon"></i> Services
                </Link>
            </li>*/}
            <li className="nav__item">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav__link">
                <i className="uil uil-fast-mail nav__icon"></i> Contact
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
