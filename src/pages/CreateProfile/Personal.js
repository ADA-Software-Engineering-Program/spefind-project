import React, { useState } from "react";

const Personal = ({ nextStep, formik }) => {
  // eslint-disable-next-line no-unused-vars
  const [progressTime, setProgressTime] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [files, setFiles] = useState([]);

  const formValues = [
    "firstName",
    "lastName",
    "gender",
    "country",
    "city",
    "biography",
    "eventName",
    "eventDate",
    "eventLocation",
    "eventPopulation",
    "eventField",
    "eventPictures",
  ];

  const handleNext = (e) => {
    e.preventDefault();
    const errorField = [];
    formValues.forEach((value) => {
      if (formik.errors[value]) {
        // console.log(value, formik.errors[value]);
        formik.setFieldTouched(value, true);
        errorField.push(value);
      } else {
        const index = errorField.indexOf(value);
        if (index > -1) {
          // only splice array when item is found
          errorField.splice(index, 1);
          // 2nd parameter means remove one item only
        }
      }

      return;
    });

    if (errorField.length === 0) {
      nextStep();
    }
  };

  return (
    <div>
      <div className="profile-group">
        <label className="profile-label">NAME*</label>
        <div className="profile-field">
          <div>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="profile-input"
              placeholder="First Name"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="profile-error">{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="profile-input"
              placeholder="Last Name"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="profile-error">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label">GENDER*</label>
        <div className="check-cont" {...formik.getFieldProps("gender")}>
          <div>
            <input
              type="radio"
              name="gender"
              className="check-input"
              value="male"
              id="male"
            />
            <label className="check-label" htmlFor="male">
              <span className="check-radio-button"></span>Male
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              className="check-input"
              value="female"
              id="female"
            />
            <label className="check-label" htmlFor="female">
              <span className="check-radio-button"></span>Female
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              className="check-input"
              value="others"
              id="others"
            />
            <label className="check-label" htmlFor="others">
              <span className="check-radio-button"></span>Others
            </label>
          </div>
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label">COUNTRY & CITY* </label>
        <div className="profile-field">
          <div>
            <input
              type="text"
              name="country"
              id="country"
              className="profile-input"
              placeholder="Type Country"
              {...formik.getFieldProps("country")}
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="profile-error">{formik.errors.country}</div>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="city"
              id="city"
              className="profile-input"
              placeholder="Type City"
              {...formik.getFieldProps("city")}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="profile-error">{formik.errors.city}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label" htmlFor="biography">
          BIOGRAPHY*
        </label>
        <textarea
          name="biography"
          id="biography"
          className="profile-textarea"
          cols="30"
          rows="5"
          placeholder="Type here"
          style={{ resize: "none" }}
          {...formik.getFieldProps("biography")}
        ></textarea>
        {formik.touched.biography && formik.errors.biography ? (
          <div className="profile-error">{formik.errors.biography}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label">PAST EVENTS*</label>
        <div className="profile-field">
          <div>
            <label className="profile-label-field" htmlFor="eventName">
              Name of Event
            </label>
            <input
              type="text"
              name="eventName"
              id="eventName"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("eventName")}
            />
            {formik.touched.eventName && formik.errors.eventName ? (
              <div className="profile-error">{formik.errors.eventName}</div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="eventDate">
              Date of Event
            </label>
            <input
              type="date"
              name="eventDate"
              id="eventDate"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("eventDate")}
            />
            {formik.touched.eventDate && formik.errors.eventDate ? (
              <div className="profile-error">{formik.errors.eventDate}</div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="eventLocation">
              Location of Event
            </label>
            <input
              type="text"
              name="eventLocation"
              id="eventLocation"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("eventLocation")}
            />
            {formik.touched.eventLocation && formik.errors.eventLocation ? (
              <div className="profile-error">{formik.errors.eventLocation}</div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="eventPopulation">
              Event of How Many People?
            </label>
            <input
              type="number"
              name="eventPopulation"
              id="eventPopulation"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("eventPopulation")}
            />
            {formik.touched.eventPopulation && formik.errors.eventPopulation ? (
              <div className="profile-error">
                {formik.errors.eventPopulation}
              </div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="eventField">
              Which field did you speak for?
            </label>
            <input
              type="text"
              name="eventField"
              id="eventField"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("eventField")}
            />
            {formik.touched.eventField && formik.errors.eventField ? (
              <div className="profile-error">{formik.errors.eventField}</div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="eventPicture">
              Upload Event Picture
            </label>
            <div style={{ textAlign: "left" }}>
              <input
                type="file"
                className="profile-file"
                placeholder="hey, there"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files))}
              />
              <p>
                Files must be less than 100 MB. Allowed file types:png, gif,
                jpg, jpeg. <br />
                <span style={{ fontSize: "13px" }}>
                  Uploading Image - {progressTime}%
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <button
          type="button"
          className="submitBtn submitBtn--grey"
          onClick={handleNext}
          style={{ marginLeft: "auto" }}
        >
          Next
        </button>
      </div>

      {/* 
      <div className="bio">
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

      <div className="upload">
      <label className="profile-label-field" style={{ margin: 20 }}>
      PAST EVENTS
        </label>
      <small>Pictures of your past events</small>
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
      </div> */}
    </div>
  );
};

export default Personal;
