import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Request_Bulk_Approval.css';

const RequestBulkApproval = () => {
    const [fromDate, setFromDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toDate, setToDate] = useState('');
    const [toTime, setToTime] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);

    // Dummy data for the table
    const data = [
        {
            id: 1, name: 'John Doe', leavingDate: '2024-07-20', leavingTime: '14:00:00',
            returningDate: '2024-07-22', returningTime: '10:00:00', status: 'Pending'
        },
        {
            id: 2, name: 'Jane Smith', leavingDate: '2024-07-21', leavingTime: '15:00:00',
            returningDate: '2024-07-23', returningTime: '11:00:00', status: 'Approved'
        },
        // Add more data as needed
    ];

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        new Date(item.leavingDate) >= new Date(fromDate) &&
        new Date(item.returningDate) <= new Date(toDate)
    ).slice(0, entries);

    const handleBulkApproval = () => {
        // Add logic to handle bulk approval
        console.log(`Approving requests from ${fromDate} ${fromTime} to ${toDate} ${toTime}`);
    };

    return (
        <div>
            <Admin_Navbar />

            <div className="request-bulk-approval-container">
                <div className="request-bulk-approval-content">
                    <h1 className="request-bulk-approval-heading">Request Bulk Approval</h1>
                    <div className="request-bulk-approval-form-group">
                        <label htmlFor="from-date">From Date:</label>
                        <input
                            type="date"
                            id="from-date"
                            name="from-date"
                            className="request-bulk-approval-input"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </div>
                    <div className="request-bulk-approval-form-group">
                        <label htmlFor="from-time">From Time:</label>
                        <input
                            type="time"
                            id="from-time"
                            name="from-time"
                            className="request-bulk-approval-input"
                            value={fromTime}
                            onChange={(e) => setFromTime(e.target.value)}
                        />
                    </div>
                    <div className="request-bulk-approval-form-group">
                        <label htmlFor="to-date">To Date:</label>
                        <input
                            type="date"
                            id="to-date"
                            name="to-date"
                            className="request-bulk-approval-input"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </div>
                    <div className="request-bulk-approval-form-group">
                        <label htmlFor="to-time">To Time:</label>
                        <input
                            type="time"
                            id="to-time"
                            name="to-time"
                            className="request-bulk-approval-input"
                            value={toTime}
                            onChange={(e) => setToTime(e.target.value)}
                        />
                    </div>
                    <div className="request-bulk-approval-buttons">
                        <button
                            className="request-bulk-approval-button"
                            onClick={handleBulkApproval}
                        >
                            Approve Requests
                        </button>
                    </div>
                    <div className="request-bulk-approval-controls">
                        <div className="request-bulk-approval-entries">
                            <label htmlFor="entries">Show</label>
                            <select
                                id="entries"
                                name="entries"
                                className="request-bulk-approval-dropdown"
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
                        <div className="request-bulk-approval-search">
                            <label style={{ marginRight: "10px" }}>Search:</label>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="request-bulk-approval-search-input"
                            />
                        </div>
                    </div>
                    <table className="request-bulk-approval-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Leaving Date</th>
                                <th>Leaving Time</th>
                                <th>Returning Date</th>
                                <th>Returning Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.leavingDate}</td>
                                        <td>{item.leavingTime}</td>
                                        <td>{item.returningDate}</td>
                                        <td>{item.returningTime}</td>
                                        <td>{item.status}</td>
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

export default RequestBulkApproval;
