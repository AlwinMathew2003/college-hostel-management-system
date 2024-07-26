import React from "react";
import "./MessCutPermissionForm.css";
import { motion } from "framer-motion";

const MessCutPermissionForm = () => {
  return (
    <div className="mess-cut-permission-form-main">
      <h1
        style={{
          fontSize: "50px",
          color: "#333",
          fontFamily: "cursive",
          textShadow: "2px 2px 2px #ccc"
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
      <motion.p className="form-enquiry">For further enquiry: 9446047155</motion.p>
      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        action="/submit-mess-cut-permission"
        method="post"
      >
        <div>
          <label htmlFor="leavingDate">Leaving Date:</label>
          <input type="date" id="leavingDate" name="leavingDate" required />
        </div>
        <div>
          <label htmlFor="leavingTime">Leaving Time:</label>
          <input type="time" id="leavingTime" name="leavingTime" required />
        </div>
        <div>
          <label htmlFor="returningDate">Returning Date:</label>
          <input type="date" id="returningDate" name="returningDate" required />
        </div>
        <div>
          <label htmlFor="returningTime">Returning Time:</label>
          <input type="time" id="returningTime" name="returningTime" required />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason" required></textarea>
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
