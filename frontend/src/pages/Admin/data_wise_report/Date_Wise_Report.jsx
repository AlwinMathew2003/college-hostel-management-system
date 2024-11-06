import React, { useState } from "react";
import Admin_Navbar from "../../../components/admin_navbar/Admin_Navbar";
import "./Date_Wise_Report.css";
import axios from "axios";

const DateWiseReport = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [entries, setEntries] = useState(10);
  const [data, setData] = useState([]);

  const handleGenerateReport = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/DateWiseMessCut", {
        params: { selectedDate },
      });
      console.log(res.data)
      setData(res.data);
      console.log(`Generating report for date: ${selectedDate}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Admin_Navbar />

      <div className="date-wise-report-container">
        <div className="date-wise-report-content">
          <h1 className="date-wise-report-heading">Date Wise Mess Report</h1>
          <div className="date-wise-report-form-group">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              className="date-wise-report-input"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
              }}
            />
          </div>
          <div className="date-wise-report-buttons">
            <button
              className="date-wise-report-button"
              onClick={handleGenerateReport}
            >
              Generate Report
            </button>
          </div>
          <div className="date-wise-report-controls">
            <div className="date-wise-report-entries">
              <label htmlFor="entries">Show</label>
              <select
                id="entries"
                name="entries"
                className="date-wise-report-dropdown"
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
            <div className="date-wise-report-search">
              <label style={{ marginRight: "10px" }}>Search:</label>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="date-wise-report-search-input"
              />
            </div>
          </div>
          <table className="date-wise-report-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Semester</th>
                <th>Room No</th>
                <th>Department</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Tea</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.sem}</td>
                    <td>{item.room_no}</td>
                    <td>{item.department}</td>
                    <td className="text-center text-green-500 text-2xl font-bold">{item.breakfast === 1 ? '✓' : ''}</td>
                  <td className="text-center text-green-500 text-2xl font-bold">{item.lunch === 1 ? '✓' : ''}</td>
                  <td className="text-center text-green-500 text-2xl font-bold">{item.snack === 1 ? '✓' : ''}</td>
                  <td className="text-center text-green-500 text-2xl font-bold">{item.dinner === 1 ? '✓' : ''}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DateWiseReport;
