import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink to="./" className="link">about</NavLink>
    </nav>
  );
};

export default NavBar;
