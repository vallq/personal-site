import React from "react";
import milestones from "../milestones";
import "./Milestones.css";

const Milestones = () => {
  const allMilestones = milestones.map((milestone) => {
    return (
      <div className="milestone">
        <h3 id="date">{milestone.date}</h3>
        <h4 id="name">{milestone.name}</h4>
        <p id="description">{milestone.description}</p>
      </div>
    );
  });
  return <div className="milestones">{allMilestones}</div>;
};

export default Milestones;
