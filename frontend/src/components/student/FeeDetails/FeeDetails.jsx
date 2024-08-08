import React from "react";
import "./FeeDetails.css";
import{motion} from 'framer-motion'

const FeeDetails = () => {
  return (
    <div className="fee-details-container">
      <motion.h1 className="fee-details-heading"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontSize: "50px", color: "#333", fontFamily: "cursive", textShadow: "2px 2px 2px #ccc" }}>Fee Details</motion.h1>
      <div className="fee-details-months">
        <span>Jan</span>

         <span>Feb</span>

       <span>Mar</span>

        <span>Apr</span>

        <span>May</span>

        <span>Jun</span>

        <span>Jul</span>

        <span>Aug</span>

        <span>Sep</span>

        <span>Oct</span>
        
        <span>Nov</span>

        <span>Dec</span>
      </div>
    </div>
  );
};

export default FeeDetails;
