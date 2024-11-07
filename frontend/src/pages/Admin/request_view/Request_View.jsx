import React, { useState, useEffect } from "react";
import Admin_Navbar from "../../../components/admin_navbar/Admin_Navbar";
import "./Request_View.css";
import axios from "axios";

const Request_View = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entries, setEntries] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/messCutRequest"
        );
        setData(res.data);
        console.log("Successfully Fetched Data");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleStatusChange = async (item) => {
    // Determine the new status
    console.log(item.status);
    const updatedStatus = item.status === "0" ? "1" : "0"; // Toggle between 0 and 1
    console.log(updatedStatus);
    // Update the status in the backend
    try {
      await axios.put(`http://localhost:5000/api/admin/messCutRequestUpdate/${item.admno}`, {
        status: updatedStatus,
      });

      // Fetch updated data from the backend after status change
      const response = await axios.get(
        "http://localhost:5000/api/admin/messCutRequest"
      );
      console.log(response.data);
      setData(response.data); // Update state with the fresh data

      alert(
        `${item.name}'s status has been ${
          updatedStatus === "1" ? "approved" : "pending"
        }.`
      );
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Please try again later.");
    }
  };

  return (
    <div>
      <Admin_Navbar />

      <div className="student-details-container">
        <div className="student-details-content">
          <h1 className="student-details-heading">Student Details</h1>
          <div className="student-details-controls">
            <div className="student-details-entries">
              <label htmlFor="entries">Show</label>
              <select
                id="entries"
                name="entries"
                className="student-details-dropdown"
                value={entries}
                onChange={(e) => setEntries(parseInt(e.target.value))}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                {/* Add more options as needed */}
              </select>
              <span style={{ marginLeft: "10px" }}>entries</span>
            </div>
            <div className="student-details-search">
              <label style={{ marginRight: "10px" }}>Search:</label>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="student-details-search-input"
              />
            </div>
          </div>
          <table className="student-details-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Room No</th>
                <th>Student Name</th>
                <th>Student Mob</th>
                <th>Admission No</th>
                <th>Semester</th>
                <th>Class</th>
                <th>Apply Date</th>
                <th>Apply Time</th>
                <th>Leaving Date</th>
                <th>Leaving Time</th>
                <th>Returning Date</th>
                <th>Returning Time</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.room_no}</td>
                    <td>{item.name}</td>
                    <td>{item.phone_no}</td>
                    <td>{item.admno}</td>
                    <td>{item.sem}</td>
                    <td>{item.department}</td>
                    <td>
                      {item.apply_time ? item.apply_time.split("T")[0] : ""}
                    </td>
                    <td>
                      {item.apply_time
                        ? item.apply_time.split("T")[1].split(".")[0]
                        : ""}
                    </td>
                    <td>{item.leaving_date}</td>
                    <td>{item.leaving_time}</td>
                    <td>{item.returning_date}</td>
                    <td>{item.returning_time}</td>
                    <td>{item.reason}</td>
                    <td className="text-center">
                      {item.status === "0" ? "Pending" : "Approved"}
                    </td>
                    <td>
                    <button
                        className={`apology-request-action-button ${
                          item.status === "1"
                            ? "!bg-red-500 text-white"
                            : "!bg-green-500 text-white"
                        } px-4 py-2 rounded focus:outline-none active:scale-95`}
                        onClick={() => handleStatusChange(item)}
                      >
                        {item.status === "1" ? "Reject" : "Accept"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="15">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Request_View;
