import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      I am Valerie Lui and I'm a software engineer in sunny Singapore
      <br />
      I delight in reading great books, calisthenics and baking bread
      <br />
      <ul className="activity-list">
        <li>
          <span role="img" aria-label="open book">
            📖
          </span>{" "}
          Currently (re-)reading: The Goldfinch by Donna Tartt
        </li>
        <li>
          <span role="img" aria-label="woman in lotus position">
            🧘
          </span>{" "}
          Pull-up max rep count: 5
        </li>
        <li>
          <span role="img" aria-label="bread loaf">
            🍞
          </span>{" "}
          Bread obsession: Sourdough
        </li>{" "}
        <li>
          <span role="img" aria-label="hammer and wrench">
            🛠️
          </span>{" "}
          Javascript (React, Express)
        </li>
        <li>
          <span role="img" aria-label="floppy diskette">
            💾
          </span>{" "}
          Node, MongoDB
        </li>
        <li>
          <span role="img" aria-label="paint palette">
            🎨
          </span>{" "}
          Adobe Illustrator, Figma
        </li>
      </ul>
    </div>
  );
};

export default About;
