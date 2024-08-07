import React, { useState } from 'react';
import axios from 'axios';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Apology_Request.css';

const ApologyRequest = () => {
    const [Room_no, setRoomNo] = useState('');
    const [Stud_name, setStudentName] = useState('');
    const [Adm_no, setAdmissionNo] = useState('');
    const [Reason, setReason] = useState('');

    // Dummy data for dropdowns
    const roomNumbers = ['1001', '1002', '1003']; // Add more options as needed
    const students = ['John Doe', 'Jane Smith', 'Alice Johnson']; // Add more options as needed
    const admissionNumbers = ['JEC328', 'JEC329', 'JEC330']; // Add more options as needed

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add logic to handle the apology request submission
        const requestData = {
            _id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            Room_no,
            Stud_name,
            Reason,
            date: new Date(), // Current date
            Apology_no: 1, // This should be dynamically assigned
            Adm_no,
            Status: false // Initial status
        };
        try {
            const response = await axios.post("http://localhost:5000/api/apologies/apologyrequest", requestData);
            console.log('Response:', response.data);
            alert("Apology request submitted successfully");
            
        } catch (error) {
            console.error('Error submitting the apology request:', error);
            alert("Error submitting apology request");
        }
    };
        

    return (
        <div>
            <Admin_Navbar />

            <div className="apology-request-container">
                <div className="apology-request-content">
                    <h1 className="apology-request-heading">Apology Request</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="apology-request-form-group">
                            <label htmlFor="room-no">Room No:</label>
                            <select
                                id="room-no"
                                name="room-no"
                                className="apology-request-dropdown"
                                value={Room_no}
                                onChange={(e) => setRoomNo(e.target.value)}
                            >
                                <option value="">Select Room No</option>
                                {roomNumbers.map((room, index) => (
                                    <option key={index} value={room}>{room}</option>
                                ))}
                            </select>
                        </div>
                        <div className="apology-request-form-group">
                            <label htmlFor="student-name">Student Name:</label>
                            <select
                                id="student-name"
                                name="student-name"
                                className="apology-request-dropdown"
                                value={Stud_name}
                                onChange={(e) => setStudentName(e.target.value)}
                            >
                                <option value="">Select Student</option>
                                {students.map((student, index) => (
                                    <option key={index} value={student}>{student}</option>
                                ))}
                            </select>
                        </div>
                        <div className="apology-request-form-group">
                            <label htmlFor="admission-no">Admission No:</label>
                            <select
                                id="admission-no"
                                name="admission-no"
                                className="apology-request-dropdown"
                                value={Adm_no}
                                onChange={(e) => setAdmissionNo(e.target.value)}
                            >
                                <option value="">Select Admission No</option>
                                {admissionNumbers.map((admission, index) => (
                                    <option key={index} value={admission}>{admission}</option>
                                ))}
                            </select>
                        </div>
                        <div className="apology-request-form-group">
                            <label htmlFor="reason">Reason:</label>
                            <textarea
                                id="reason"
                                name="reason"
                                className="apology-request-textarea"
                                value={Reason}
                                onChange={(e) => setReason(e.target.value)}
                                placeholder="Enter reason for apology"
                            />
                        </div>
                        <div className="apology-request-buttons">
                            <button
                                type="submit"
                                className="apology-request-button"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApologyRequest;
