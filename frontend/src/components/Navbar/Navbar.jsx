import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header"></div>
      <div className="nav-title">
        STUDENT
      </div>
      <div className="nav-btn"></div>
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="nav-links"></div>
    </div>
  );
};

export default Navbar;
