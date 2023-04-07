import React, { useState } from "react";

const Personal = ({ nextStep, formik }) => {
  const [progressTime, setProgressTime] = useState(0);
  const [files, setFiles] = useState([]);

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <div className="profile-group">
        <label className="profile-label" htmlFor="firstName">
          FIRST NAME*
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="profile-input"
          placeholder="Type here"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="profile-error">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label" htmlFor="lastName">
          LAST NAME*
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="profile-input"
          placeholder="Type here"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="profile-error">{formik.errors.lastName}</div>
        ) : null}
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
        <label className="profile-label" htmlFor="country">
          COUNTRY OR STATE & CITY*{" "}
        </label>
        <input
          type="text"
          name="country"
          id="country"
          className="profile-input"
          placeholder="Type here"
          {...formik.getFieldProps("country")}
        />
        {formik.touched.country && formik.errors.country ? (
          <div className="profile-error">{formik.errors.country}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label" htmlFor="biographies">
          BIOGRAPHIES*
        </label>
        <textarea
          name="biographies"
          id="biographies"
          className="profile-textarea"
          cols="30"
          rows="5"
          placeholder="Type here"
          style={{ resize: "none" }}
          {...formik.getFieldProps("biographies")}
        ></textarea>
        {formik.touched.biographies && formik.errors.biographies ? (
          <div className="profile-error">{formik.errors.biographies}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label" htmlFor="pastEvents">
          PAST EVENTS*
        </label>
        <textarea
          name="pastEvents"
          id="pastEvents"
          className="profile-textarea"
          cols="30"
          rows="5"
          placeholder="Type here"
          style={{ resize: "none" }}
          {...formik.getFieldProps("pastEvents")}
        ></textarea>
        {formik.touched.pastEvents && formik.errors.pastEvents ? (
          <div className="profile-error">{formik.errors.pastEvents}</div>
        ) : null}
        <div style={{ textAlign: "left" }}>
          <input
            type="file"
            className="profile-file"
            placeholder="hey, there"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files))}
          />
          <p>
            Files must be less than 100 MB. Allowed file types:png, gif, jpg,
            jpeg. <br />
            <span style={{ fontSize: "13px" }}>
              Uploading Image - {progressTime}%
            </span>
          </p>
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

      <label className="profile-label" style={{ margin: 20 }}>
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
      </div> */}
    </div>
  );
};

export default Personal;
