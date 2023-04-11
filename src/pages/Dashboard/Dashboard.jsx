import React, { useState } from "react";
import AppLayout from "../../layout/AppLayout";
import "./Dashboard.css";

import { Form, Input } from "antd";

import userImg from "./assets/userImg.png";

const Dashboard = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <AppLayout>
      <div className="dashboard">
        <h3>Your Dashboard</h3>
        <button
          className="harmburger"
          // setting the isNavExpanded variable to the opposite of whatever it is when users click on the button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="dashboardContainer">
          <div className={isNavExpanded ? "sidebar" : "sidebarMobile"}>
            <div className="userProfile">
              <img src={userImg} alt="user profile" />
              <p className="username">Titilayo</p>
              <p className="userCareer">Career Speaker</p>
            </div>
            <ul className="userMenu">
              <li>
                <a href="#Part1">Personal Details</a>
              </li>
              <li>
                <a href="#Part1">Niche</a>
              </li>
              <li>
                <a href="#Part1">Availability & Fees</a>
              </li>
              <li>
                <a href="#Part1">Account Preferences</a>
              </li>
              <li>
                <a href="#Part1">Publications</a>
              </li>
              <li>
                <a href="#Part1">Passwords</a>
              </li>
              <li>
                <a href="#Part1">Email</a>
              </li>
              <li>
                <a href="#Part1">Signature</a>
              </li>
              <li>
                <a href="#Part1">Media</a>
              </li>
            </ul>
          </div>

          <div className="dahsboardBody">
            <div className="formContainer">
              <p className="dashboardDetail">
                Spefind automatically saves your dashboard changes
              </p>
              <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <label htmlFor="firstName"> First Name</label>
                <Input
                  aria-label="firstname"
                  placeholder="Type here"
                  id="firstName"
                />

                <label htmlFor="lastName"> Last Name</label>
                <Input
                  aria-label="lastname"
                  placeholder="Type here"
                  id="lastName"
                />

                <label htmlFor="age"> Age</label>
                <Input aria-label="age" placeholder="Type here" id="age" />

                <label htmlFor="professional_credentials">
                  Professional Credentials
                </label>
                <Input
                  aria-label="professional_credentials"
                  placeholder="Type here"
                />

                <label htmlFor="prefered_pronouns">Prefered pronouns</label>
                <Input
                  aria-label="prefered_pronouns"
                  placeholder="Type here"
                  id="prefered_pronouns"
                />

                <label htmlFor="gender">Gender</label>

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

                <label htmlFor="image">Edit Profile Picture</label>
                <div className="editProfilePicture">
                  <img src={userImg} alt="edit your profile avatar" />
                  <div className="btnWrapper">
                    <button className="btn">Remove</button>
                    <button className="btn">Change Picture</button>
                    <button className="btn">Crop Picture</button>
                  </div>
                </div>

                <label htmlFor="country_or_state">
                  Country or State & City
                </label>
                <Input
                  aria-label="country_or_state"
                  placeholder="Type here"
                  id="country_or_state"
                />

                <label htmlFor="timeZone">Time Zone</label>
                <Input
                  aria-label="timeZone"
                  placeholder="Type here"
                  id="timeZone"
                />

                <label htmlFor="biography">Biography</label>
                <textarea
                  placeholder="Type here"
                  className="textArea"
                  id="biography"
                ></textarea>

                <label htmlFor="whyChooseMe">Why Choose Me?</label>
                <textarea
                  placeholder="Type here"
                  className="textArea"
                  id="whyChooseMe"
                ></textarea>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
