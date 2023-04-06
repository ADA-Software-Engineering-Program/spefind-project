import React, { useState } from "react";
import { useFormik } from "formik";
import { BsTrashFill } from "react-icons/bs";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

const Personal = ({ nextStep }) => {
  const [unprocessProfilePic, setUnprocessProfilePic] = useState("");
  const [progressTime2, setProgressTime2] = useState(0);
  const [pastEventsImgs, setPastEventsImgs] = useState([]);
  const [profilePics, setProfilePics] = useState("");
  const [progressTime, setProgressTime] = useState(0);

  const validate = (values) => {
    const errors = {};
    // fullname
    if (!values.firstName) {
      errors.firstName = "Please fill out this field";
    } else if (values.firstName.length < 5) {
      errors.firstName = "Must be 5 characters or more";
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      country: "",
      biographies: "",
      pastEvents: "",
      eventPictures: "",
    },
    validate,
  });
  console.log(formik.values);

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <label className="profileLabel">FIRST NAME*</label>
      <input
        type="text"
        name="firstName"
        className="profileInput"
        {...formik.getFieldProps("firstName")}
      />
      {/* {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error">{formik.errors.firstName}</div>
      ) : null} */}
      <label className="profileLabel">LAST NAME*</label>
      <input
        type="text"
        name="lastName"
        className="profileInput"
        {...formik.getFieldProps("lastName")}
      />
      <label className="profileLabel">GENDER*</label>
      <div className="gender" {...formik.getFieldProps("gender")}>
        <label className="genderLabel">
          <input type="radio" name="gender" className="genders" value="Male" />
          Male
        </label>

        <label className="genderLabel">
          <input
            type="radio"
            name="gender"
            className="genders"
            value="Female"
          />
          Female
        </label>

        <label className="genderLabel">
          <input
            type="radio"
            name="gender"
            className="genders"
            value="Others"
          />
          Others
        </label>
      </div>
      <label className="profileLabel">COUNTRY OR STATE & CITY* </label>
      <select {...formik.getFieldProps("country")}>
        <option value="0">-None-</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Ghana">Ghana</option>
        <option value="South Africa">South Africa</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Uganda">Uganda</option>
      </select>
      <label className="profileLabel" style={{ margin: 20 }}>
        BIOGRAPHIES
      </label>
      <textarea
        name="biographies"
        id=""
        cols="30"
        rows="5"
        style={{ resize: "none" }}
        {...formik.getFieldProps("biographies")}
      ></textarea>
      <label className="profileLabel" style={{ margin: 20 }}>
        PAST EVENTS*
      </label>
      <textarea
        name="pastEvents"
        id=""
        cols="30"
        rows="5"
        style={{ resize: "none" }}
        {...formik.getFieldProps("pastEvents")}
      ></textarea>
      <label className="profileLabel">PROFILE PICTURE*</label>
      <div className="upload">
        <input
          type="file"
          className="select"
          onChange={(e) => setUnprocessProfilePic(e.target.files[0])}
        />
        <p>
          Files must be less than 100 MB. Allowed file types:png, gif, jpg,
          jpeg.
        </p>
        <span style={{ fontSize: "13px", marginTop: "-18px" }}>
          Uploading Image - {progressTime2}%
        </span>
      </div>
      <button
        type="button"
        className="submitBtn submitBtn--grey"
        onClick={handleNext}
      >
        Next
      </button>
      {/*

        {/* <div className="bio">
        <h2>Bio* </h2>
        <div className="bio-items">
          <div className="arrow">
            <ImArrowUp />
            <ImArrowDown />
          </div>
          <textarea
            name=""
            id="textarea"
            {...formik.getFieldProps("bio")}
          ></textarea>
          <BsTrashFill />
        </div>
      </div> 
      <label className="profileLabel">TIMEZONE* </label>
      <select {...formik.getFieldProps("timezone")}>
        <option value="0">-None-</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Ghana">Ghana</option>
        <option value="South Africa">South Africa</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Uganda">Uganda</option>
      </select>
      <label className="profileLabel" style={{ margin: 20 }}>
        PAST EVENTS
      </label>
      <small>Pictures of your past events</small>
      <div className="upload">
        <input
          type="file"
          className="select"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files))}
        />
        <p>
          Files must be less than 100 MB. Allowed file types:png, gif, jpg,
          jpeg.
        </p>
        <span style={{ fontSize: "13px", marginTop: "-18px" }}>
          Uploading Image - {progressTime}%
        </span>
      </div>{" "}
      */}
    </div>
  );
};

export default Personal;
