import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink to="./">about</NavLink>
      <NavLink to="./projects">projects</NavLink>
    </nav>
  );
};

export default NavBar;
