import React, { useState } from "react";
import "./Admin_Navbar.css";

const Admin_Navbar = () => {
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
        <a href="/Admin/NameWiseReport">Name Wise Report</a>
        <a href="/Admin/MonthlyAttendanceReport">Monthly Attendence report</a>
        <a href="DateWiseReport">Date Wise Report</a>
        
        <div className={`dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`}>
          <a href="#" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
            Attendence Report
          </a>
          <div className="dropdown-menu">
            <a href="/Admin/AttendanceSheet">Attendence sheet</a>
            <a href="/Admin/PresentButMessCut">Present but Mess Cut</a>
            <a href="/Admin/AbsentButNoMesscut">Absent but no Mess Cut</a>
            <a href="/Admin/AbsenteesReport">Absentees Report</a>
            <a href="#">Absent Sms</a>
            <a href="#">Attendence Comparison</a>



          </div>
        </div>
        <a href="/Admin/Request_View">Request View</a>
        <a href="/Admin/RequestBulkApproval">Request Bulk Approval</a>
        <a href="/Admin/ApologyRequest">Apology Request</a>
        <a href="/Admin/ApologyRequestView">Apology Request View</a>
        <button className="btn btn-logout">Logout</button>
        <button className="btn btn-change-password">Change Password</button>
      </div>
    </div>
  );
};

export default Admin_Navbar;
