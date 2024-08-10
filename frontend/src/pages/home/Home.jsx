import React from "react";
import './Home.css'; // Ensure the path is correct
import MessCut from "../../components/student/MessCut/MessCut.jsx";
import MessCutPermissionForm from "../../components/student/messCutPermissionForm/MessCutPermissionForm.jsx";
import FeeDetails from "../../components/student/FeeDetails/FeeDetails.jsx";
import ComplaintForm from "../../components/student/ComplaintForm/ComplaintForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

const Home = () => {
  return (
    <div className="div">
      <Navbar />
   
    <div className="home-container">
     
        <MessCut />
        
        <MessCutPermissionForm />
   
        <FeeDetails />
     
        <ComplaintForm />
   
    </div>
    </div>
  );
};

export default Home;
