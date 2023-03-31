import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import microphone from "../../images/microphone.png";
import "../../Components/Navbar/Navbar.css";
import { useAuth } from "../../contexts/AuthContext";


function Hero() {

  const {currentUser} = useAuth()
  return (
    <div className="heroContainer">
      <div className="heroText">
        <p className="speakers">Communicators and event organizers:</p>
        <h2 className="heroTextHeading">
          genius comes &nbsp; in all <span className="heroColor">colours</span>
        </h2>
        <p className="heroTextSubHeading">
          Find the perfect communicator for your next event from our pool of
          diverse and highly curated selection of communicators, ranging from
          public/motivational speakers to thought leaders, industry experts,
          performing artists, dancers, and MCs. No matter your industry or the
          uniqueness of your event, we've got someone for you.
        </p>

        {!currentUser && (<Link to="/signup" className="getBtn">
          Get Started
          <BsArrowRight className="ms-2" />
        </Link>)}
      </div>
      <div className="heroImage">
        <img src={microphone} alt="speakers" className="" />
      </div>
    </div>
  );
}

export default Hero;
