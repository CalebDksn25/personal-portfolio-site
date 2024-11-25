import React, { useState, useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className={`scrollup ${showScroll ? "show-scroll" : ""}`}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
