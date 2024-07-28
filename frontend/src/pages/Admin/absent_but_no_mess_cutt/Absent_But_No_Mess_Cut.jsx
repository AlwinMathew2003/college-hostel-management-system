import React, { useState } from 'react';
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar';
import './Absent_But_No_Mess_Cut.css';

const AbsentButNoMesscut = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleGenerateReport = () => {
        // Add logic to generate the report based on selectedDate
        console.log(`Generating Absent No Messcut Report for date: ${selectedDate}`);
    };

    return (
        <div>
            <Admin_Navbar />

            <div className="absent-no-messcut-report-container">
                <div className="absent-no-messcut-report-content">
                    <h1 className="absent-no-messcut-report-heading">Absent No Messcut Report</h1>
                    <div className="absent-no-messcut-report-form-group">
                        <label htmlFor="date">Select Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="absent-no-messcut-report-input"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="absent-no-messcut-report-buttons">
                        <button
                            className="absent-no-messcut-report-button"
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

export default AbsentButNoMesscut;
