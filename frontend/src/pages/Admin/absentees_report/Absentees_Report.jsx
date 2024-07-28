import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Absentees_Report.css';

const AbsenteesReport = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleGenerateReport = () => {
        // Add logic to generate the report based on selectedDate
        console.log(`Generating Absentees Report for date: ${selectedDate}`);
    };

    return (
        <div>
            <Admin_Navbar />

            <div className="absentees-report-container">
                <div className="absentees-report-content">
                    <h1 className="absentees-report-heading">Absentees Report</h1>
                    <div className="absentees-report-form-group">
                        <label htmlFor="date">Select Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="absentees-report-input"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="absentees-report-buttons">
                        <button
                            className="absentees-report-button"
                            onClick={handleGenerateReport}
                        >
                            Generate Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbsenteesReport;
