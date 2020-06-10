import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="social-links">
        <a
          href="https://linkedin.com/in/vallq"
          rel="noopener noreferrer"
          target="_blank"
        >
          linkedin
        </a>
        <a
          href="https://github.com/vallq"
          rel="noopener noreferrer"
          target="_blank"
        >
          github
        </a>
        <a
          href="https://codepen.io/alexea"
          rel="noopener noreferrer"
          target="_blank"
        >
          codepen
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
