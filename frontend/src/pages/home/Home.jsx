import React from "react";
import './Home.css'; // Ensure the path is correct
import MessCut from "../../components/student/MessCut/MessCut.jsx";
import MessCutPermissionForm from "../../components/student/messCutPermissionForm/MessCutPermissionForm.jsx";
import FeeDetails from "../../components/student/FeeDetails/FeeDetails.jsx";
import ComplaintForm from "../../components/student/ComplaintForm/ComplaintForm.jsx";

const Home = () => {
  return (
    <div className="home-container">
     
        <MessCut />
      
        <MessCutPermissionForm />
   
        <FeeDetails />
     
        <ComplaintForm />
   
    </div>
  );
};

export default Home;
