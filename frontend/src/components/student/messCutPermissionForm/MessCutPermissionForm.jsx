import React from "react";
import "./MessCutPermissionForm.css";

const MessCutPermissionForm = () => {
  return (
    <div className="mess-cut-permission-form-main">
      <h1 className="form-heading" style={{ fontSize: "50px", color: "#333", fontFamily: "cursive", textShadow: "2px 2px 2px #ccc" }}>Mess Cut Permission Form</h1>
      <p className="form-subheading">
        ( Permission requested here is just for mess cut only.<b> Permission to leave
        and enter hostel should be sought separately via proper channel </b> )
      </p>
      <p className="form-enquiry">For further enquiry: 9446047155</p>
      <form action="/submit-mess-cut-permission" method="post">
        <div>
          <label htmlFor="leavingDate">Leaving Date:</label>
          <input type="date" id="leavingDate" name="leavingDate" required />
        </div>
        <div>
          <label htmlFor="leavingTime">Leaving Time:</label>
          <input type="time" id="leavingTime" name="leavingTime" required />
        </div>
        <div>
          <label htmlFor="returningDate">Returning Date:</label>
          <input type="date" id="returningDate" name="returningDate" required />
        </div>
        <div>
          <label htmlFor="returningTime">Returning Time:</label>
          <input type="time" id="returningTime" name="returningTime" required />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason" required></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button">View Request</button>
        </div>
      </form>
      {/* <p className="form-subheading">
        (https://adtjcs.in/santhome_demo/loginstudpage/request_view)
            Apology View
            (https://adtjcs.in/santhome_demo/loginstudpage/appology_view)
      </p> */}
    </div>
  );
};

export default MessCutPermissionForm;




