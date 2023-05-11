import React, { useState } from "react";
import AppLayout from "../../layout/AppLayout";
import "./Dashboard.css";

import { Form, Input } from "antd";

import userImg from "./assets/userImg.png";

const Dashboard = () => {
  const [personal, setPersonal] = useState(false);
  // const [field, setField] = useState(false);
  // const [available, setAvailable] = useState(false);
  // const [preference, setPreference] = useState(false);
  // const [publications, setPublications] = useState(false);
  // const [password, setPassword] = useState(false);
  // const [email, setEmail] = useState(false);
  // const [signature, setSignature] = useState(false);
  // const [media, setMedia] = useState(false);
  // const [messages, setMessages] = useState(false);
  const [upgrade, setUpgrade] = useState(true);

  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const onFinish = (value) => {
    console.log(value);
  };

  // HANDLE NAV SWITCH
  const handleClick = (e) => {
    switch (e) {
      case "personal":
        setPersonal(true);
        setUpgrade(false);
        break;
      case "upgrade":
        setPersonal(false);
        setUpgrade(true);
        break;
      default:
        setPersonal(true);
        setUpgrade(false);
    }
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
                <span
                  name="personal"
                  className={personal ? "span-select" : ""}
                  onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Personal Detail
                </span>
              </li>
              <li>
                <span
                  name="field"
                  // className={field ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Niche
                </span>
              </li>
              <li>
                <span
                  name="available"
                  // className={available ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Availability & Fees
                </span>
              </li>
              <li>
                <span
                  name="preference"
                  // className={preference ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Account Preferences
                </span>
              </li>
              <li>
                <span
                  name="publications"
                  // className={publications ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Publications
                </span>
              </li>
              <li>
                <span
                  name="password"
                  // className={password ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Passwords
                </span>
              </li>
              <li>
                <span
                  name="email"
                  // className={email ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Email
                </span>
              </li>
              <li>
                <span
                  name="signature"
                  // className={signature ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Signature
                </span>
              </li>
              <li>
                <span
                  name="media"
                  // className={media ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Media
                </span>
              </li>
              <li>
                <span
                  name="messages"
                  // className={messages ? "span-select" : ""}
                  // onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Messages
                </span>
              </li>
              <li>
                <span
                  name="upgrade"
                  className={upgrade ? "span-select" : ""}
                  onClick={(e) => handleClick(e.target.getAttribute("name"))}
                >
                  Upgrade
                </span>
              </li>
            </ul>
          </div>

          <div className="dahsboardBody">
            {personal && (
              <div className="formContainer">
                <p className="dashboardDetail">
                  Spefind automatically saves your dashboard changes
                </p>
                <Form
                  name="form_item_path"
                  layout="vertical"
                  onFinish={onFinish}
                >
                  <div>
                    <label htmlFor="firstName"> First Name</label>
                  </div>

                  <Input
                    aria-label="firstname"
                    placeholder="Type here"
                    id="firstName"
                  />
                  <div>
                    <label htmlFor="lastName"> Last Name</label>
                  </div>
                  <Input
                    aria-label="lastname"
                    placeholder="Type here"
                    id="lastName"
                  />
                  <div>
                    <label htmlFor="age"> Age</label>
                  </div>
                  <Input aria-label="age" placeholder="Type here" id="age" />
                  <div>
                    <label htmlFor="professional_credentials">
                      Professional Credentials
                    </label>
                  </div>
                  <Input
                    aria-label="professional_credentials"
                    placeholder="Type here"
                  />
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
                    <label htmlFor="country_or_state">
                      Country or State & City
                    </label>
                  </div>
                  <Input
                    aria-label="country_or_state"
                    placeholder="Type here"
                    id="country_or_state"
                  />
                  <div>
                    <label htmlFor="timeZone">Time Zone</label>
                  </div>
                  <Input
                    aria-label="timeZone"
                    placeholder="Type here"
                    id="timeZone"
                  />
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
            )}
            {upgrade && (
              <div className="upgradeContainer">
                <div className="d-flex justify-content-center gap-3 align-items-center">
                  <button
                    className={isMonthlyPlan ? "btn-orange" : "btn-orange-line"}
                    onClick={() => setIsMonthlyPlan(true)}
                  >
                    Monthly Plan
                  </button>
                  <button
                    className={isMonthlyPlan ? "btn-orange-line" : "btn-orange"}
                    onClick={() => setIsMonthlyPlan(false)}
                  >
                    Yearly Plan
                  </button>
                </div>

                <div className="upgradeBox mx-auto my-5 w-100 p-5">
                  <span className="upgradeType">Free</span>
                  <p className="text-center fw-bold fs-5 mb-2">
                    No charges applied <br /> ₦0.00
                  </p>

                  <div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Publish your communicator profile</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Add 1 photo or slide</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Limited visibility</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>A few free speaking opportunities</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Event organizers can contact you</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Speaking tips and helpful articles</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>No commission or transaction fee</p>
                    </div>
                  </div>
                </div>

                <div className="upgradeBox mx-auto my-5 w-100 p-5">
                  <span className="upgradeType">Paid</span>
                  <p className="text-center fw-bold fs-5 mb-2">
                    Charges Applied <br />{" "}
                    {isMonthlyPlan ? "₦5,000 /m" : "₦50,000 /yr"}
                  </p>

                  <div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Publish your communicator profile</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Unlimited photos, slides, and videos</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Unlimited visibility</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>All free speaking opportunities</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Exclusive content and Webinars</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Event organizers can contact you</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Recommended speaking opportunities</p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Get featured in search </p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Detailed profile statistics </p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Share presentations publicly </p>
                    </div>
                    <div className="upgradeOption d-flex gap-3 align-items-center mb-3">
                      <span></span> <p>Add workshop or training agendas. </p>
                    </div>
                  </div>

                  <div>
                    <button
                      disabled
                      className="btn-disabled mx-auto d-block mt-5 mb-3"
                    >
                      Free 30-Day Trial
                    </button>
                    <button className="btn-green mx-auto d-block">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
