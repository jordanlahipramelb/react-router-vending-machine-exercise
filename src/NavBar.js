import "./NavBar.css";
import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/soda">
        Soda
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/candy">
        Candy
      </NavLink>
    </nav>
  );
};

export default NavBar;
