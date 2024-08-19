import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const TempStudentsReq = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [allPerms, setAllPerms] = useState([]);

  useEffect(() => {
    const fetchAllPerms = async () => {
      const res = await axios.post(
        `http://localhost:5000/api/students/getallperm/${currentUser.adm_no}`
      );
      console.log(res.data);
      setAllPerms(res.data);
    };
    fetchAllPerms();
  }, []);

  return (
    <div>
      <ul>
        {allPerms.map((perm, index) => (
          <li key={index}>{perm}</li>
        ))}
      </ul>
    </div>
  );
};

export default TempStudentsReq;
