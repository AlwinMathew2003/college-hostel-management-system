import React from "react";
import "./ComplaintForm.css";
import {motion} from 'framer-motion'

const ComplaintForm = () => {
  return (
    <div className="complaint-form-container">
      <h1 className="complaint-form-heading"  style={{ fontSize: "50px", color: "#333", fontFamily: "cursive", textShadow: "2px 2px 2px #ccc" }}>Complaint Form</h1>
      <form >
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opactiy: 0, x: -100 }}
         transition={{ duration: 0.9 }}

        className="complaint-form-group">
          
          <label htmlFor="complain">Complaint:</label>
          <textarea id="complain" name="complain" rows="5" required></textarea>
        </motion.div>
        <button type="submit" className="complaint-form-submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
