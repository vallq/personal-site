import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink to="./" className="link">about</NavLink>
      <NavLink to="./projects" className="link">projects</NavLink>
    </nav>
  );
};

export default NavBar;
