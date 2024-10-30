import React, { useState,useEffect } from "react";
import "./Admin_Navbar.css";
import { logout } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";

const Admin_Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout function called"); // Debug log
    // sessionStorage.setItem("showLogoutToast", "true"); // Set flag for toast
    localStorage.setItem("Session", "true");
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    if(localStorage.getItem("LoginSuccess")){
      toast.success("Successfully logged in!");
      setTimeout(() => {
        localStorage.removeItem("LoginSuccess");
      }, 50); // Adjust delay as needed
    }
  
  }, []); // Empty dependency array to trigger only on mount

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-[#002D62] text-gray-200 shadow-lg">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Navbar Header */}
        <div className="flex items-center space-x-4">
          {/* Add logo or title here */}
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {/* Existing Navbar Links */}
          <a
            href="/Admin/NameWiseReport"
            className="text-gray-200 hover:text-blue-300 transition border-b-2 border-transparent hover:border-blue-300"
          >
            Name Wise Report
          </a>
          <a
            href="/Admin/MonthlyAttendanceReport"
            className="text-gray-200 hover:text-blue-300 transition border-b-2 border-transparent hover:border-blue-300"
          >
            Monthly Attendance Report
          </a>
          <a
            href="/Admin/DateWiseReport"
            className="text-gray-200 hover:text-blue-300 transition border-b-2 border-transparent hover:border-blue-300"
          >
            Date Wise Report
          </a>
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-200 hover:text-blue-300 transition border-b-2 border-transparent hover:border-blue-300"
            >
              Attendance Report <AiOutlineDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg z-10">
                <a
                  href="/Admin/AttendanceSheet"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Attendance Sheet
                </a>
                <a
                  href="/Admin/PresentButMessCut"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Present but Mess Cut
                </a>
                <a
                  href="/Admin/AbsentButNoMesscut"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Absent but no Mess Cut
                </a>
                <a
                  href="/Admin/AbsenteesReport"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Absentees Report
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Absent SMS
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Attendance Comparison
                </a>
              </div>
            )}
          </div>

          {/* Other Links */}
          <a
            href="/Admin/Request_View"
            className="text-gray-200 hover:text-blue-300 transition border-b-2 border-transparent hover:border-blue-300"
          >
            Request View
          </a>
          <a
            href="/Admin/RequestBulkApproval"
            className="text-gray-200 hover:text-blue-300 transition border-b-2 border-transparent hover:border-blue-300"
          >
            Request Bulk Approval
          </a>
          <a
            href="/Admin/ApologyRequest"
            className="text-gray-200 hover:text-blue-300 transition border-b-2 border-transparent hover:border-blue-300"
          >
            Apology Request
          </a>
          <a
            href="/Admin/ApologyRequestView"
            className="text-gray-200 hover:text-blue-300 transition border-b-2 border-transparent hover:border-blue-300"
          >
            Apology Request View
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded transition">
            Change Password
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <button
          onClick={toggleDropdown}
          className="text-gray-200 hover:text-blue-300 transition"
        >
          <FaBars className="text-lg" /> {/* Menu Icon */}
        </button>
        <span className="flex-1 text-center text-lg">Admin Panel</span>{" "}
        {/* Admin Panel text */}
      </div>

      {isDropdownOpen && (
        <div className="md:hidden bg-white shadow-lg text-gray-900 space-y-2 px-4 py-3">
          <a
            href="/Admin/NameWiseReport"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Name Wise Report
          </a>
          <a
            href="/Admin/MonthlyAttendanceReport"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Monthly Attendance Report
          </a>
          <a
            href="/Admin/DateWiseReport"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Date Wise Report
          </a>
          <a
            href="/Admin/Request_View"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Request View
          </a>
          <a
            href="/Admin/RequestBulkApproval"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Request Bulk Approval
          </a>
          <a
            href="/Admin/ApologyRequest"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Apology Request
          </a>
          <a
            href="/Admin/ApologyRequestView"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Apology Request View
          </a>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded transition"
          >
            Logout
          </button>
          <button className="w-full text-left px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 rounded transition">
            Change Password
          </button>
        </div>
      )}
    </nav>
  );
};

export default Admin_Navbar;
