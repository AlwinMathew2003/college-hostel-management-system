import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Date_Wise_Report.css';

const DateWiseReport = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);

    // Updated dummy data for table
    const data = [
        { id: 1, name: 'John Doe', semester: 'Semester 1', roomNo: '101', department: 'CS', breakfast: 'Eggs', lunch: 'Chicken', tea: 'Tea', dinner: 'Pasta' },
        { id: 2, name: 'Jane Smith', semester: 'Semester 2', roomNo: '102', department: 'IT', breakfast: 'Pancakes', lunch: 'Salad', tea: 'Coffee', dinner: 'Pizza' },
        // Add more data as needed
    ];

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.date === selectedDate
    ).slice(0, entries);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleGenerateReport = () => {
        // Add logic to generate report based on selectedDate
        console.log(`Generating report for date: ${selectedDate}`);
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
                            onChange={handleDateChange}
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
                            {filteredData.length > 0 ? (
                                filteredData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.semester}</td>
                                        <td>{item.roomNo}</td>
                                        <td>{item.department}</td>
                                        <td>{item.breakfast}</td>
                                        <td>{item.lunch}</td>
                                        <td>{item.tea}</td>
                                        <td>{item.dinner}</td>
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
