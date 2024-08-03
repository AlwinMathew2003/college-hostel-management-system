import React, { useState } from "react";
import axios from "axios";
import "./MessCutPermissionForm.css";
import { motion } from "framer-motion";

const MessCutPermissionForm = () => {

  const [formData, setFormData] = useState({
    leavingDate: "",
    leavingTime: "",
    returningDate: "",
    returningTime: "",
    reason: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    const complaintData = {
      _id: 12112013,  //checkeyumbo ee id value matikolo..becz each tym unique avanam
      adm_no: 12112014,
      status:false,
      ...formData
    };

    try {
      const response = await axios.post("http://localhost:5000/api/messcutpermissions/messcutpermission", complaintData);
      console.log("Response from server:", response.data);
      alert("Request submitted successfully");
      setFormData({
        leavingDate: "",
        leavingTime: "",
        returningDate: "",
        returningTime: "",
        reason: ""
      }); // Clear form data after successful submission
    } catch (err) {
      console.error('Error details:', err);
      alert("Error submitting request");
    }
  };


  return (
    <div className="mess-cut-permission-form-main">
      <h1 className="mess-cut-permission-form-main-h1"
        style={{
         
          color: "#333",
          fontFamily: "cursive",
          textShadow: "2px 2px 2px #ccc",
          
        }}
      >
        Mess Cut Permission Form
      </h1>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="form-subheading"
      >
        ( Permission requested here is just for mess cut only.
        <b> Permission to leave and enter hostel should be sought separately via proper channel </b> )
      </motion.p>
      <motion.p 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="form-enquiry">For further enquiry: 9446047155</motion.p>
      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        /*action="/submit-mess-cut-permission"
        method="post"*/
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="leavingDate">Leaving Date:</label>
          <input type="date" id="leavingDate" name="leavingDate" 
           value={formData.leavingDate}
           onChange={handleChange}
          required />
        </div>
        <div>
          <label htmlFor="leavingTime">Leaving Time:</label>
          <input type="time" id="leavingTime" name="leavingTime" 
          value={formData.leavingTime}
          onChange={handleChange}
          required />
        </div>
        <div>
          <label htmlFor="returningDate">Returning Date:</label>
          <input type="date" id="returningDate" 
          name="returningDate" 
          value={formData.returningDate}
          onChange={handleChange}
          required />
        </div>
        <div>
          <label htmlFor="returningTime">Returning Time:</label>
          <input type="time" id="returningTime" name="returningTime" 
          value={formData.returningTime}
          onChange={handleChange}
          required />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason"
          value={formData.reason}
          onChange={handleChange}
          required></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button">View Request</button>
        </div>
      </motion.form>
    </div>
  );
};

export default MessCutPermissionForm;
