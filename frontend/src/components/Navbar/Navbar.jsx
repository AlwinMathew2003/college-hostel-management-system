import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        {/* Add logo or title here */}
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links" style={{ paddingRight: "30px" }}>
        <div className={`dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`}>
          <a href="#" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
            Student
          </a>
          <div className="dropdown-menu">
            <a href="#">Profile</a>
            <a href="#">change Password</a>
          </div>
        </div>
        <a href="#">Messages</a>
        <a href="#">Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
