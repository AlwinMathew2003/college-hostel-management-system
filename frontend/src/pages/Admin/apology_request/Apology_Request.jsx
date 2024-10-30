import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Apology_Request.css';

const ApologyRequest = () => {
    const [Room_no, setRoomNo] = useState('');
    const [Stud_name, setStudentName] = useState('');
    const [Adm_no, setAdmissionNo] = useState('');
    const [Reason, setReason] = useState('');
    
    const [roomNumbers, setRoomNumbers] = useState([]);
    const [studentsInRoom, setStudentsInRoom] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    // Fetch all room numbers on mount
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/apologies/students/rooms"); // Endpoint to get unique room numbers
                console.log(response.data);
                setRoomNumbers(response.data);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);

    // Fetch students when a room is selected
    useEffect(() => {
        const fetchStudentsInRoom = async () => {
            if (Room_no) {
                try {
                    const response = await axios.get(`http://localhost:5000/api/apologies/students?room_no=${Room_no}`); // Endpoint to get students by room number
                    console.log(response.data)
                    setStudentsInRoom(response.data);
                } catch (error) {
                    console.error('Error fetching students:', error);
                }
            } else {
                setStudentsInRoom([]);
            }
        };

        fetchStudentsInRoom();
    }, [Room_no]);


    useEffect(() => {
        const selected = studentsInRoom.find(student => student.admno === Adm_no); // 'admno' matches backend
        setSelectedStudent(selected);
        setStudentName(selected ? selected.name : ''); // 'name' matches backend
    }, [Adm_no, studentsInRoom]);
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            _id: Math.random().toString(36).substr(2, 9),
            Reason,
            date: new Date(),
            Apology_no: 1,
            Adm_no,
            Status: false
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
                                    <option key={index} value={room.room_no}>{room.room_no}</option>
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
    {studentsInRoom.map((student, index) => (
        <option key={index} value={student.admno}>{student.admno}</option>
    ))}
</select>

                        </div>
                        <div className="apology-request-form-group">
                            <label htmlFor="student-name">Student Name:</label>
                            <input
                                type="text"
                                id="student-name"
                                name="student-name"
                                className="apology-request-input"
                                value={Stud_name}
                                onChange={(e) => setStudentName(e.target.value)}
                                placeholder="Auto-filled based on Admission No"
                                readOnly
                            />
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
