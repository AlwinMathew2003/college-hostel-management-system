import React, { useState, useEffect } from "react";
import './Home.css'; // Ensure the path is correct
import MessCut from "../../components/student/MessCut/MessCut.jsx";
import MessCutPermissionForm from "../../components/student/messCutPermissionForm/MessCutPermissionForm.jsx";
import FeeDetails from "../../components/student/FeeDetails/FeeDetails.jsx";
import ComplaintForm from "../../components/student/ComplaintForm/ComplaintForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState('');
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if(localStorage.getItem("LoginSuccess")){
      toast.success("Successfully logged in!");
      setTimeout(() => {
        localStorage.removeItem("LoginSuccess");
      }, 100); // Adjust delay as needed
    }

  }, []); // Empty dependency array to trigger only on mount

  const openModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Password does not match!");
    } else {
      setError("");

      try {
        const response = await axios.put("http://localhost:5000/api/user/updatePassword", {
          currentPassword,
          newPassword,
          adm_no: currentUser.adm_no
        });

        alert(response.data.message);
        closeModal();
      } catch (error) {
        console.error('Error updating password:', error);
        alert("An error occurred while updating the password.");
      }
    }
  };

  return (
    <div className="div">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar openModal={openModal} />
   
      <div className="home-container">
        <MessCut />
        <MessCutPermissionForm />
        <FeeDetails />
        <ComplaintForm />
       
        {/* The Modal */}
        {isModalOpen && (
          <div className="modal" style={{ border: "2px solid black" }}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <form>
                <label htmlFor="currentPassword">Current Password</label><br />
                <input
                  type="text"
                  style={{ border: "1px solid black", width: "100%", borderRadius: "4px" }}
                  id="currentPassword"
                  name="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                /><br />
                <label htmlFor="newPassword">New Password</label><br />
                <input
                  type="password"
                  style={{ border: "1px solid black", width: "100%", borderRadius: "4px" }}
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                /><br />
                <label htmlFor="confirmPassword">Confirm Password</label><br />
                <input
                  type="password"
                  style={{ border: "1px solid black", width: "100%", borderRadius: "4px" }}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                /><br />
                
                <button
                  className="submit-button"
                  type="submit"
                  onClick={handleSubmit}
                  style={{ color: "white", marginTop: "10px", borderRadius: "4px", height: "30px", width: "100px" }}
                >
                  Submit
                </button>
              </form>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
