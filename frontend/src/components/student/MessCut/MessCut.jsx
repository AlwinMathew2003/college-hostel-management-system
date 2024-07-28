import React from "react";
import "./MessCut.css";
import {motion} from 'framer-motion'

const MessCut = () => {
  return (
    <div className="mess-cut-main">
      <h1
      className="mess-cut-heading" style={{ fontSize: "50px", color: "#333", fontFamily: "cursive", textShadow: "2px 2px 2px #ccc" }}>Mess Cut</h1>
            <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        action="/submit-mess-cut-permission"
        method="post"
      >
        <div>
          <label htmlFor="admissionNumber">Admission NO:</label>
          <input type="text" id="admissionNumber" name="admissionNumber" required />
        </div>
        <div>
          <label htmlFor="roomNo">Room No:</label>
          <input type="text" id="roomNo" name="roomNo" required />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
      </motion.form>
    </div>
  );
};

export default MessCut;
