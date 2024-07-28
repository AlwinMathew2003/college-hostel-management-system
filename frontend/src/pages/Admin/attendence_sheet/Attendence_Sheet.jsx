import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Attendence_Sheet.css';

const AttendanceSheet = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleGenerateReport = () => {
        // Add logic to generate report based on selectedDate
        console.log(`Generating attendance sheet for date: ${selectedDate}`);
    };

    return (
        <div>
            <Admin_Navbar />

            <div className="attendance-sheet-container">
                <div className="attendance-sheet-content">
                    <h1 className="attendance-sheet-heading">Attendance Sheet</h1>
                    <div className="attendance-sheet-form-group">
                        <label htmlFor="date">Select Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="attendance-sheet-input"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="attendance-sheet-buttons">
                        <button
                            className="attendance-sheet-button"
                            onClick={handleGenerateReport}
                        >
                            Load data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceSheet;
