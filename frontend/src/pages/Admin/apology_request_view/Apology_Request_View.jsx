import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Apology_Request_View.css';

const ApologyRequestView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/apologies/apologyview');
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to load data. Please try again later.');
            }
        };

        fetchData();
    }, []);

    const filteredData = data.filter(item =>
        item.Stud_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Adm_no.toString().toLowerCase().includes(searchTerm.toLowerCase())
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
                            </select>
                            <span style={{ marginLeft: "10px" }}>entries</span>
                        </div>
                        <div className="apology-request-search">
                            <label style={{ marginRight: "10px" }}>Search:</label>
                            <input
                                type="text"
                                placeholder="Search by name or admission number..."
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
                                    <tr key={item._id}>
                                        <td>{item.id}</td>
                                        <td>{item.admno}</td>
                                        <td>{item.semester}</td>
                                        <td>{item.className}</td>
                                        <td>{item.Room_no}</td>
                                        <td>{item.Stud_name}</td>
                                        <td>{item.reason}</td>
                                        <td>{item.apology_no}</td>
                                        <td>{new Intl.DateTimeFormat('en-US').format(new Date(item.date))}</td>
                                        <td>{item.Status ? 'Approved' : 'Pending'}</td>
                                        <td>
                                            <button 
                                                className="apology-request-action-button" 
                                                onClick={() => alert(`Action for ${item.Stud_name}`)}
                                            >
                                                Action
                                            </button>
                                        </td>
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
