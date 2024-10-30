import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSucces } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [admno, setAdmno] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        admno,
        password,
      });
      console.log(res.data.adm_no);
      console.log(JSON.stringify(res.data))
      localStorage.setItem("StudentDetails", JSON.stringify(res.data));
      localStorage.setItem("LoginSuccess", "true");
      dispatch(loginSucces(res.data));
      if(res.data.admin === "Admin Validated")
      {
        navigate("/Admin");
      }
      else{
        navigate("/home");
      }
      
    } catch (err) {
      toast.error("Incorrect Username and Password !");
      dispatch(loginFailure());
    }
  };

  // useEffect(() => {
  //   // Show logout toast only if the flag is set
  //   if (sessionStorage.getItem("showLogoutToast") === "true") {
  //     toast.info("You have been logged out!");
  //     sessionStorage.removeItem("showLogoutToast"); // Clear the flag after showing toast
  //   }
  // }, []);

  useEffect(() => {
    // Check if logged out (no StudentDetails in localStorage)
    if (localStorage.getItem("Session")) {
      toast.info("You have been logged out!");
      setTimeout(() => {
        localStorage.removeItem("Session");
      }, 100); 
    }
  }, []);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="top-bar">Santhome JEC</div>
      <div className="login-container">
        {/* <h1 className="login-heading">Login</h1> */}
        <div className="login-main">
          <form className="login-form">
            <div className="login-field">
              <label className="login-label">Admission number</label>
              <input
                type="text"
                id="email"
                className="login-input"
                required
                onChange={(e) => setAdmno(e.target.value)}
              />
            </div>
            <div className="login-field">
              <label className="login-label">Password</label>
              <input
                type="password"
                id="password"
                className="login-input"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="login-button"
              onClick={handleLogin}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
