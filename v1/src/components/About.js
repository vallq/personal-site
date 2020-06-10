import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      I am Valerie and I'm currently a software engineer
      <br />
      I enjoy reading great books 📚 , calisthenics 🧘 and baking bread 🍞
      <br />
      <ul className="activity-list">
        <li>Currently (re-)reading: The Goldfinch by Donna Tartt</li>
        <li>Pull-up max rep count: 5</li>
        <li>Bread obsession: Sourdough</li>
      </ul>
    </div>
  );
};

export default About;
