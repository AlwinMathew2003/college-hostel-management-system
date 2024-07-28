import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Monthly_Attendence_Report.css';

const MonthlyAttendanceReport = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleGenerateReport = () => {
        // Logic to generate report based on selected dates
        console.log(`Generating report from ${startDate} to ${endDate}`);
    };

    return (
        <div>
            <Admin_Navbar />

            <div className="monthly-attendance-report-container">
                <div className="monthly-attendance-report-content">
                    <h1 className="monthly-attendance-report-heading">Monthly Attendance Report</h1>
                    <div className="monthly-attendance-report-form-group">
                        <label htmlFor="start-date">Start Date:</label>
                        <input
                            type="date"
                            id="start-date"
                            name="start-date"
                            className="monthly-attendance-report-input"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="monthly-attendance-report-form-group">
                        <label htmlFor="end-date">End Date:</label>
                        <input
                            type="date"
                            id="end-date"
                            name="end-date"
                            className="monthly-attendance-report-input"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div className="monthly-attendance-report-buttons">
                        <button className="monthly-attendance-report-button" onClick={handleGenerateReport}>Load data</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyAttendanceReport;
