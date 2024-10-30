import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ComplaintForm.css";
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";

const ComplaintForm = () => {

  const currentUser = useSelector((state) => state.user.currentUser);  

  // Open the stylesheet: file://./ComplaintForm.css
  const [complain, setComplain] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const complaint = {
      _id: new Date().toISOString(),
      adm_no: currentUser.adm_no,
      message: complain,
      status: false,
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
      <motion.h1
  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-6"
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
  style={{
    fontFamily: "cursive",
    textShadow: "2px 2px 2px #ccc",
    overflowWrap: "break-word", // This helps with longer text wrapping
  }}
>
  Complaint Form
</motion.h1>
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
