import React from "react";
import "./FeeDetails.css";

const FeeDetails = () => {
  return (
    <div className="fee-details-container">
      <h1 className="fee-details-heading"  style={{ fontSize: "50px", color: "#333", fontFamily: "cursive", textShadow: "2px 2px 2px #ccc" }}>Fee Details</h1>
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
