import React,{useEffect} from 'react'
import Admin_Navbar from '../../../components/admin_navbar/Admin_Navbar'
import { ToastContainer, toast } from "react-toastify";
import NameWiseReport from "../nameWiseReport/NameWiseReport";
import "react-toastify/dist/ReactToastify.css";



const AdminHome = () => {


  
  return (
    <div>

      <NameWiseReport/>
    </div>
  )
}

export default AdminHome