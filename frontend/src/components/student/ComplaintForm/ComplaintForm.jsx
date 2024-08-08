import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ComplaintForm.css";
import {motion} from 'framer-motion'

const ComplaintForm = () => {
  // Open the stylesheet: file://./ComplaintForm.css
  const [complain, setComplain] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const complaint = {
      _id: new Date().toISOString(),
      adm_no: 12112014, // Test value
      Room_no: 456, // Test value
      message: complain,
      status: false, // Test value
    };

    try {
      const response = await axios.post("http://localhost:5000/api/complaints/complaint", complaint);
      console.log("Response from server:", response.data);
      alert("Complaint submitted successfully");
      setComplain(""); // Clear the complain state after successful submission
    } catch (err) {
      console.error('Error details:', err);
      alert("Error submitting complaint");
    }
  };

  return (
    <div className="complaint-form-container">
      <motion.h1 className="complaint-form-heading"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontSize: "50px", color: "#333", fontFamily: "cursive", textShadow: "2px 2px 2px #ccc" }}>Complaint Form</motion.h1>
      <form onSubmit={handleSubmit}>
        <div

        className="complaint-form-group">
          
          <label htmlFor="complain">Complaint:</label>
          <textarea id="complain" name="complain" rows="5"  value={complain}
            onChange={(e) => setComplain(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="complaint-form-submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
