import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Request_View.css';

const Request_View = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);

    // Dummy data for the table
    const data = [
        {
            id: 1, roomNo: '1009', studentName: 'PONMANI RAJA', studentMob: '', admissionNo: 'JEC328', semester: 'S00',
            className: 'Teacher', applyDate: '2024-07-19', applyTime: '11:38:33', leavingDate: '2024-07-20',
            leavingTime: '14:41:00', returningDate: '2024-07-27', returningTime: '16:00:00', reason: 'a', status: 'APPROVED'
        },
        // Add more data as needed
    ];

    const filteredData = data.filter(item =>
        item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, entries);

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
                            {filteredData.length > 0 ? (
                                filteredData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.roomNo}</td>
                                        <td>{item.studentName}</td>
                                        <td>{item.studentMob}</td>
                                        <td>{item.admissionNo}</td>
                                        <td>{item.semester}</td>
                                        <td>{item.className}</td>
                                        <td>{item.applyDate}</td>
                                        <td>{item.applyTime}</td>
                                        <td>{item.leavingDate}</td>
                                        <td>{item.leavingTime}</td>
                                        <td>{item.returningDate}</td>
                                        <td>{item.returningTime}</td>
                                        <td>{item.reason}</td>
                                        <td>{item.status}</td>
                                        <td><button className="student-details-action-button">View</button></td>
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
