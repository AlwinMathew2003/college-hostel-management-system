import React from "react";
import "./FeeDetails.css";
import{motion} from 'framer-motion'

const FeeDetails = () => {
  return (
    <div className="fee-details-container">
      <h1 className="fee-details-heading"  style={{ fontSize: "50px", color: "#333", fontFamily: "cursive", textShadow: "2px 2px 2px #ccc" }}>Fee Details</h1>
      <div className="fee-details-months">
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Jan</motion.span>

         <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Feb</motion.span>

       <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Mar</motion.span>

        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Apr</motion.span>

        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >May</motion.span>

        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Jun</motion.span>

        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Jul</motion.span>

        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Aug</motion.span>

        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Sep</motion.span>

        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Oct</motion.span>
        
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Nov</motion.span>

        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opactiy: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >Dec</motion.span>
      </div>
    </div>
  );
};

export default FeeDetails;
