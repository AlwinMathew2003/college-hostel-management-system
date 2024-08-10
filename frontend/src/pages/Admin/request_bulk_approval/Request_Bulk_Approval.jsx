import React, { useEffect, useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Request_Bulk_Approval.css';
import axios from 'axios';

const RequestBulkApproval = () => {
    const [fromDate, setFromDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toDate, setToDate] = useState('');
    const [toTime, setToTime] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/messcutpermissions/messcutpermission/approval")
            .then((result) => {
                setData(result.data); // Update state with the data from the API
            })
            .catch((e) => console.error(e));
    }, []);

    // Filter the data
    const filteredData = data.filter(item => {
        const name = item.studentName || ''; // Correct property name
        const leavingDate = item.leavingDate ? new Date(item.leavingDate) : new Date();
        const returningDate = item.returningDate ? new Date(item.returningDate) : new Date();

        const nameMatch = name.toLowerCase().includes(searchTerm.toLowerCase());
        const leavingDateMatch = fromDate ? leavingDate >= new Date(fromDate) : true;
        const returningDateMatch = toDate ? returningDate <= new Date(toDate) : true;

        return nameMatch && leavingDateMatch && returningDateMatch;
    }).slice(0, entries);

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
                                    <tr key={item._id}>
                                        <td>{item.studentName || 'N/A'}</td> {/* Correct property name */}
                                        <td>{item.leavingDate ? new Date(item.leavingDate).toLocaleDateString() : 'N/A'}</td>
                                        <td>{item.leavingTime || 'N/A'}</td>
                                        <td>{item.returningDate ? new Date(item.returningDate).toLocaleDateString() : 'N/A'}</td>
                                        <td>{item.returningTime || 'N/A'}</td>
                                        <td>{item.status ? 'Approved' : 'Pending'}</td>
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
