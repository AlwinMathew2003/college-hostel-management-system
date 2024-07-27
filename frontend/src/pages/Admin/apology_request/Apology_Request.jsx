import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Apology_Request.css';

const ApologyRequest = () => {
    const [roomNo, setRoomNo] = useState('');
    const [studentName, setStudentName] = useState('');
    const [admissionNo, setAdmissionNo] = useState('');
    const [reason, setReason] = useState('');

    // Dummy data for dropdowns
    const roomNumbers = ['1001', '1002', '1003']; // Add more options as needed
    const students = ['John Doe', 'Jane Smith', 'Alice Johnson']; // Add more options as needed
    const admissionNumbers = ['JEC328', 'JEC329', 'JEC330']; // Add more options as needed

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle the apology request submission
        console.log({
            roomNo,
            studentName,
            admissionNo,
            reason,
        });
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
                                value={roomNo}
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
                                value={studentName}
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
                                value={admissionNo}
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
                                value={reason}
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
