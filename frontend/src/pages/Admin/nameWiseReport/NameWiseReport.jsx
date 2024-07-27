import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './NameWiseReport.css';

const NameWiseReport = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);

    // Dummy data for table
    const data = [
        { id: 1, date: '2024-07-01', breakfast: 'Eggs', lunch: 'Pizza', tea: 'Tea', dinner: 'Pasta' },
        { id: 2, date: '2024-07-02', breakfast: 'Pancakes', lunch: 'Burger', tea: 'Coffee', dinner: 'Steak' },
        // Add more data as needed
    ];

    const filteredData = data.filter(item =>
        item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.breakfast.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lunch.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tea.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dinner.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, entries);

    return (
        <div>
            <Admin_Navbar />

            <div className="name-wise-report-container">
                <div className="name-wise-report-content">
                    <h1 className="name-wise-report-heading" >Name Wise Mess Report</h1>
                    <div className="name-wise-report-form-group">
                        <label htmlFor="semester">Select Semester:</label>
                        <select id="semester" name="semester" className="name-wise-report-dropdown">
                            <option value="">Select Semester</option>
                            <option value="1">Semester 1</option>
                            <option value="2">Semester 2</option>
                            <option value="3">Semester 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="name-wise-report-form-group">
                        <label htmlFor="student">Select Student:</label>
                        <select id="student" name="student" className="name-wise-report-dropdown">
                            <option value="">Select Student</option>
                            <option value="student1">Student 1</option>
                            <option value="student2">Student 2</option>
                            <option value="student3">Student 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="name-wise-report-buttons">
                        <button className="name-wise-report-button">Load Data</button>
                        <button className="name-wise-report-button">Create PDF</button>
                        <button className="name-wise-report-button">Create Excel</button>
                    </div>
                    <div className="name-wise-report-controls">
                        <div className="name-wise-report-entries">
                            <label htmlFor="entries">Show</label>
                            <select
                                id="entries"
                                name="entries"
                                className="name-wise-report-dropdown"
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
                        <div className="name-wise-report-search">
                            <label style={{ marginRight: "10px" }}>Search :</label>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="name-wise-report-search-input"
                            />
                        </div>
                    </div>
                    <table className="name-wise-report-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
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
                                        <td>{item.date}</td>
                                        <td>{item.breakfast}</td>
                                        <td>{item.lunch}</td>
                                        <td>{item.tea}</td>
                                        <td>{item.dinner}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NameWiseReport;
