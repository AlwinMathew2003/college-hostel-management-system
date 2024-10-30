import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSucces } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import './Login.css';

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
      dispatch(loginSucces(res.data));
      navigate("/home");
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <div>
      <div className="top-bar">Santhome JEC</div>
      <div className="login-container">
        {/* <h1 className="login-heading">Login</h1> */}
        <div className="login-main">
          <form className="login-form">
            <div className="login-field">
              <label className="login-label">
                Admission number
              </label>
              <input
                type="text"
                id="email"
                className="login-input"
                required
                onChange={(e) => setAdmno(e.target.value)}
              />
            </div>
            <div className="login-field">
              <label className="login-label">
                Password
              </label>
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
