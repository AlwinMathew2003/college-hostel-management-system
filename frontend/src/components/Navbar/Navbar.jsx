import React, { useState } from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  ///For logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); 
  };
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">{/* Add logo or title here */}</div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links" style={{ paddingRight: "30px" }}>
        <div className={`dropdown ${isDropdownOpen ? "dropdown-active" : ""}`}>
          <a
            href="#"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            {!currentUser ? "Student" : currentUser.name}
          </a>
          <div className="dropdown-menu">
            <a href="#">Profile</a>
            <a href="#">change Password</a>
          </div>
        </div>
        <a href="#">Messages</a>
        <a href="http://localhost:5173/login">
          <button onClick={handleLogout}>Logout</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
