import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header"></div>
      <div className="nav-btn"></div>

      <div className="nav-links"></div>
    </div>
  );
};

export default Navbar;
