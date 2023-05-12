import React from "react";

import "./PersonalDetails.css";

import { Form, Input } from "antd";
import userImg from "../../assets/userImg.png";

const PersonalDetails = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="formContainer">
      <p className="dashboardDetail">
        Spefind automatically saves your dashboard changes
      </p>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <div>
          <label htmlFor="firstName"> First Name</label>
        </div>

        <Input aria-label="firstname" placeholder="Type here" id="firstName" />
        <div>
          <label htmlFor="lastName"> Last Name</label>
        </div>
        <Input aria-label="lastname" placeholder="Type here" id="lastName" />
        <div>
          <label htmlFor="age"> Age</label>
        </div>
        <Input aria-label="age" placeholder="Type here" id="age" />
        <div>
          <label htmlFor="professional_credentials">
            Professional Credentials
          </label>
        </div>
        <Input aria-label="professional_credentials" placeholder="Type here" />
        <div>
          <label htmlFor="prefered_pronouns">Prefered pronouns</label>
        </div>
        <Input
          aria-label="prefered_pronouns"
          placeholder="Type here"
          id="prefered_pronouns"
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

        <label htmlFor="coverBanner">
          Cover Banner
          <input
            type="file"
            name="selectFile"
            id="coverBanner"
            aria-label="cover banner"
            className="selectFile"
          />
        </label>
        <div>
          <label htmlFor="image">Edit Profile Picture</label>
        </div>
        <div className="editProfilePicture">
          <img src={userImg} alt="edit your profile avatar" />
          <div className="btnWrapper">
            <button className="btn">Remove</button>
            <button className="btn">Change Picture</button>
            <button className="btn">Crop Picture</button>
          </div>
        </div>
        <div>
          <label htmlFor="country_or_state">Country or State & City</label>
        </div>
        <Input
          aria-label="country_or_state"
          placeholder="Type here"
          id="country_or_state"
        />
        <div>
          <label htmlFor="timeZone">Time Zone</label>
        </div>
        <Input aria-label="timeZone" placeholder="Type here" id="timeZone" />
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
      </Form>
    </div>
  );
};
export default PersonalDetails;
