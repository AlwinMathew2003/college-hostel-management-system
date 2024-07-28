import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Present_But_Mess_Cut.css';

const PresentButMessCut = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleGenerateReport = () => {
        // Add logic to generate the report based on selectedDate
        console.log(`Generating Present Messcut Report for date: ${selectedDate}`);
    };

    return (
        <div>
            <Admin_Navbar />

            <div className="present-messcut-report-container">
                <div className="present-messcut-report-content">
                    <h1 className="present-messcut-report-heading">Present Mess Cut Report</h1>
                    <div className="present-messcut-report-form-group">
                        <label htmlFor="date">Select Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="present-messcut-report-input"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="present-messcut-report-buttons">
                        <button
                            className="present-messcut-report-button"
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

export default PresentButMessCut;
