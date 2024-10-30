import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import { FaSignOutAlt } from "react-icons/fa"; // Import the logout icon from react-icons
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ openModal }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout function called"); // Debug log
    // sessionStorage.setItem("showLogoutToast", "true"); // Set flag for toast
    localStorage.setItem("Session","true")
    localStorage.removeItem("StudentDetails");
    dispatch(logout());
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className="bg-gradient-to-r from-[#002D62] to-[#00308F] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold border-b-2 border-white pb-1 transition duration-300 ease-in-out hover:border-indigo-400">
          <span>Santhome JEC</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white transition">
            Messages
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none hover:text-gray-200 border-b-2 border-transparent hover:border-white transition"
            >
              <span>{!currentUser ? "Student" : currentUser.name}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                >
                  Profile
                </a>
                <button
                  onClick={openModal}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100"
                >
                  Change Password
                </button>
              </div>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
            aria-label="Logout"
          >
            <FaSignOutAlt className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="text-white text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden space-y-2 mt-2 bg-gradient-to-r from-[#002D62] to-[#00308F] px-4 py-2">
          <a href="#" className="block text-white hover:text-gray-200">
            Messages
          </a>
          <a href="#" className="block text-white hover:text-gray-200">
            Profile
          </a>
          <button
            onClick={openModal}
            className="block text-white hover:text-gray-200"
          >
            Change Password
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
            aria-label="Logout"
          >
            <FaSignOutAlt className="w-5 h-5" />
          </button>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
