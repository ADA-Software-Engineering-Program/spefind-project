import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="mt-md-5">
        <h1 className="Welcome">Welcome!</h1>
        <p className="pp">Your very first step to ease and convenience </p>
      </div>
      <div className="btnSignUP">
        <Link to="/register" id="btnsignup">
          Communicator
        </Link>

        <Link to="/event-register" id="btnsignup">
          {" "}
          Event Organizer
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
