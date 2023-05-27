import React from "react";

import "./PersonalDetails.css";
import userImg from "../../assets/userImg.png";

const PersonalDetails = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="formContainer">

      <form onSubmit={onFinish}>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div className="inputsWrapper">
          <input
            aria-label="first name"
            placeholder="First Name"
            id="firstName"
            className="input"
          />
          <input
            aria-label="last name"
            placeholder="Last Name"
            id="lastName"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="professional_credentials">
            Professional Credentials
          </label>
          <p className="credentialsInstructions">
            i.e courses, trainings, school certificates
          </p>
        </div>
        <input
          aria-label="professional_credentials"
          placeholder="Type here"
          className="input"
          id="professional_credentials"
        />
        <div>
          <label htmlFor="gender">Gender</label>
        </div>
        <div className="genderWrapper">
          <input
            id="male"
            type="radio"
            aria-label="male"
            className="newInput"
            value={"male"}
            name={"gender"}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="genderWrapper">
          <input
            id="female"
            type="radio"
            aria-label="female"
            className="newInput"
            value={"female"}
            name={"gender"}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="genderWrapper">
          <input
            id="others"
            type="radio"
            aria-label="others"
            className="newInput"
            value={"others"}
            name={"gender"}
          />
          <label htmlFor="others">Others</label>
        </div>
        <div>
          <label htmlFor="coverBanner"> Cover Banner</label>
        </div>
        <input
          type="file"
          name="selectFile"
          id="coverBanner"
          aria-label="cover banner"
          className="selectFile"
        />
        <div>
          <label htmlFor="image">Edit Profile Picture</label>
        </div>
        <div className="editProfilePicture">
          <img src={userImg} alt=" profile avatar" />
          <div className="btnWrapper">
            <button type="button" className="btn">
              Remove
            </button>
            <button type="button" className="btn">
              Change Picture
            </button>
            <button type="button" className="btn">
              Crop Picture
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="country_or_city">Country & City</label>
        </div>
        <div className="inputsWrapper">
          <input
            aria-label="country"
            placeholder="Type Country"
            id="country"
            className="input"
          />
          <input
            aria-label="country"
            placeholder="Type City"
            id="country"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="biography">Biography</label>
        </div>
        <textarea
          placeholder="Type here"
          className="textArea"
          id="biography"
        ></textarea>
        <div>
          <label htmlFor="whyChooseMe">Why Choose Me?</label>
        </div>
        <textarea
          placeholder="Type here"
          className="textArea"
          id="whyChooseMe"
        ></textarea>
      </form>
    </div>
  );
};
export default PersonalDetails;
