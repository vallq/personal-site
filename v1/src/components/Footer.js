import React from "react";
import "./Footer.css";
import linkedin from "../assets/social icons_in.png";
import github from "../assets/social icons_github.png";
import codepen from "../assets/social icons_codepen.png";
import mail from "../assets/social icons_mail.png";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a
          href="https://linkedin.com/in/vallq"
          rel="noopener noreferrer"
          target="_blank"
          id="linkedin"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/vallq"
          rel="noopener noreferrer"
          target="_blank"
          id="github"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://codepen.io/alexea"
          rel="noopener noreferrer"
          target="_blank"
          id="codepen"
        >
          <img src={codepen} alt="codepen" />
        </a>
        <a
          href="mailto:vallq@outlook.com"
          rel="noopener noreferrer"
          target="_blank"
          id="mail"
        >
          <img src={mail} alt="mail" />
        </a>
      </div>
      <span id="footer">Copyright © 2020 Valerie Lui Qi</span>
    </footer>
  );
};

export default Footer;
