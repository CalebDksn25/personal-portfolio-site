import React from "react";

const Social = () => {
  return (
    <div className="home__social align-center" id="home">
      <a
        href="https://www.instagram.com/calebdicksonn/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer">
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/caleb-n-dickson/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer">
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/CalebDksn25"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
