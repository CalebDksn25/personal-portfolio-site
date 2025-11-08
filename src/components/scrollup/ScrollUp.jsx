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
    <button
      type="button"
      aria-label="Scroll to top"
      className={`scrollup ${showScroll ? "show-scroll" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default ScrollUp;
