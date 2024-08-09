import React from "react";
import "./MessCut.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MessCut = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  
  return (
    <div className="mess-cut-main">
      <motion.h1
        className="mess-cut-heading"
        style={{
          fontSize: "50px",
          color: "#333",
          fontFamily: "cursive",
          textShadow: "2px 2px 2px #ccc",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Mess Cut
      </motion.h1>
      <form>
        <div>
          <label htmlFor="admissionNumber">Admission NO:</label>
          <input
            type="text"
            value={currentUser.adm_no}
            id="admissionNumber"
            name="admissionNumber"
            required
          />
        </div>
        <div>
          <label htmlFor="roomNo">Room No:</label>
          <input type="text" id="roomNo" name="roomNo" required />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={currentUser.name}
            style={{ fontWeight: "bold" }}
            readOnly
            required
          />
        </div>
      </form>
    </div>
  );
};

export default MessCut;
