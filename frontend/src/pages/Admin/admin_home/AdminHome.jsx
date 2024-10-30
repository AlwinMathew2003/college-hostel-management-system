import React,{useEffect} from 'react'
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar'
import { ToastContainer, toast } from "react-toastify";
import NameWiseReport from "../nameWiseReport/NameWiseReport";
import "react-toastify/dist/ReactToastify.css";



const AdminHome = () => {

  useEffect(() => {
    if(localStorage.getItem("LoginSuccess")){
      toast.success("Successfully logged in!");
      setTimeout(() => {
        localStorage.removeItem("LoginSuccess");
      }, 100); // Adjust delay as needed
    }
  
  }, []); // Empty dependency array to trigger only on mount
  
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <NameWiseReport/>
    </div>
  )
}

export default AdminHome