import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Apology_Request_View.css';

const ApologyRequestView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);

    // Dummy data for table
    const data = [
        { id: 1, admissionNo: 'JEC328', semester: 'S00', className: 'Teacher', roomNo: '1009', studentName: 'PONMANI RAJA', reason: 'a', apologyNumber: 'APRROVED', applyDate: '2024-07-19', status: 'Approved' },
        // Add more data as needed
    ];

    const filteredData = data.filter(item =>
        item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, entries);

    return (
        <div>
            <Admin_Navbar />

            <div className="apology-request-container">
                <div className="apology-request-content">
                    <h1 className="apology-request-heading">Apology Request</h1>
                    <div className="apology-request-controls">
                        <div className="apology-request-entries">
                            <label htmlFor="entries">Show</label>
                            <select
                                id="entries"
                                name="entries"
                                className="apology-request-dropdown"
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
                        <div className="apology-request-search">
                            <label style={{ marginRight: "10px" }}>Search:</label>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="apology-request-search-input"
                            />
                        </div>
                    </div>
                    <table className="apology-request-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Admission No</th>
                                <th>Semester</th>
                                <th>Class</th>
                                <th>Room No</th>
                                <th>Student Name</th>
                                <th>Reason</th>
                                <th>Apology Number</th>
                                <th>Apply Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.admissionNo}</td>
                                        <td>{item.semester}</td>
                                        <td>{item.className}</td>
                                        <td>{item.roomNo}</td>
                                        <td>{item.studentName}</td>
                                        <td>{item.reason}</td>
                                        <td>{item.apologyNumber}</td>
                                        <td>{item.applyDate}</td>
                                        <td>{item.status}</td>
                                        <td><button className="apology-request-action-button">Action</button></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="11">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ApologyRequestView;
