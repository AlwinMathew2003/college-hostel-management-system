import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import { FaSignOutAlt } from "react-icons/fa"; // Import the logout icon from react-icons
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ openModal }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [isMessagesDropdownOpen, setMessagesDropdownOpen] = useState(false);
  const [messages, setMessages] = useState([]); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout function called"); // Debug log
    // sessionStorage.setItem("showLogoutToast", "true"); // Set flag for toast
    localStorage.setItem("Session", "true");
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

  const toggleMessagesDropdown = () => {
    setMessagesDropdownOpen(!isMessagesDropdownOpen);
  };

  useEffect(() => {
    const fetchCount = async () => {
      const user = localStorage.getItem("StudentDetails");
      const userDetails = JSON.parse(user);
      console.log(userDetails.adm_no);
      const adm_no = userDetails.adm_no;

      try {
        const res = await axios.get(
          `http://localhost:5000/api/student/apologyCount/${adm_no}`
        );
        console.log(res.data);
        
        // Set the message count
        setMessageCount(res.data.apology_count);
        
        // Map the reasons to create the messages array
        const mappedMessages = res.data.reasons.map(reason => ({
          text: reason
        }));
        
        // Set the messages state
        setMessages(mappedMessages);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCount();
  }, []); // Add an empty dependency array to run the effect once on mount

  return (
    <nav className="bg-gradient-to-r from-[#002D62] to-[#00308F] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold border-b-2 border-white pb-1 transition duration-300 ease-in-out hover:border-indigo-400">
          <span>Santhome JEC</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={toggleMessagesDropdown}
              className="relative flex items-center space-x-2 focus:outline-none hover:text-gray-200 border-b-2 border-transparent hover:border-white transition"
            >
              <span>Messages</span>
              {messageCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {messageCount}
                </span>
              )}
            </button>

            {/* Messages Dropdown Menu */}
            {isMessagesDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20">
                {" "}
                {/* Increased width to w-64 */}
                <div className="px-4 py-2 text-gray-700">
                  {messages.length > 0 ? (
                    messages.map((message, index) => (
                      <div key={index} className="py-1 border-b">
                        {message.text} {/* Correctly render the message text */}
                      </div>
                    ))
                  ) : (
                    <div className="py-1">No messages</div>
                  )}
                </div>
              </div>
            )}
          </div>

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
                  href="http://localhost:5173/home"
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
          {/* Messages Link with Notification Count */}
          <div className="relative">
            {" "}
            {/* Use relative positioning for proper placement */}
            <a href="#" className="block text-white hover:text-gray-200">
              Messages
            </a>
            {messageCount > 0 && (
              <span
                className="absolute left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                style={{ top: "0.25em", marginTop: "0", marginRight: "0" }} // Adjusted top to 0.25em
              >
                {messageCount}
              </span>
            )}
          </div>

          <a
            href="http://localhost:5173/home"
            className="block text-white hover:text-gray-200"
          >
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
