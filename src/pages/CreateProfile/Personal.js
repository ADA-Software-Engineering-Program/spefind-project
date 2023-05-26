import React from "react";

const Personal = ({ nextStep, formik, userData }) => {
  const formValues = [
    // "firstName",
    // "lastName",
    "gender",
    "country",
    "city",
    "biography",
    "titleOfEvent",
    "date",
    "location",
    "numberOfAttendees",
    "field",
  ];

  const handleNext = (e) => {
    e.preventDefault();
    const errorField = [];
    const emptyField = [];

    // set the fields to touched
    formValues.forEach((value) => {
      formik.setFieldTouched(value, true);
    });

    formValues.forEach((value) => {
      if (!formik.values[value]) {
        emptyField.push(value);
      } else {
        const index = emptyField.indexOf(value);
        if (index > -1) {
          // only splice array when item is found
          errorField.splice(index, 1);
          // 2nd parameter means remove one item only
        }
      }

      if (formik.errors[value]) {
        errorField.push(value);
      } else {
        const index = errorField.indexOf(value);
        if (index > -1) {
          errorField.splice(index, 1);
        }
      }
    });

    if (errorField.length === 0 && emptyField.length === 0) {
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
              disabled
              readOnly={true}
              defaultValue={userData.firstName}
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="profile-input"
              placeholder="Last Name"
              disabled
              readOnly={true}
              defaultValue={userData.lastName}
            />
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
              defaultChecked={formik.values.gender === "male" ? true : false}
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
              defaultChecked={formik.values.gender === "female" ? true : false}
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
              defaultChecked={formik.values.gender === "others" ? true : false}
            />
            <label className="check-label" htmlFor="others">
              <span className="check-radio-button"></span>Others
            </label>
          </div>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="profile-error">{formik.errors.gender}</div>
          ) : null}
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
              required
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
              required
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
          required
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
            <label className="profile-label-field" htmlFor="titleOfEvent">
              Name of Event
            </label>
            <input
              type="text"
              name="titleOfEvent"
              id="titleOfEvent"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("titleOfEvent")}
            />
            {formik.touched.titleOfEvent && formik.errors.titleOfEvent ? (
              <div className="profile-error">{formik.errors.titleOfEvent}</div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="date">
              Date of Event
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("date")}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="profile-error">{formik.errors.date}</div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="location">
              Location of Event
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("location")}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className="profile-error">{formik.errors.location}</div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="numberOfAttendees">
              Event of How Many People?
            </label>
            <input
              type="number"
              name="numberOfAttendees"
              id="numberOfAttendees"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("numberOfAttendees")}
            />
            {formik.touched.numberOfAttendees &&
            formik.errors.numberOfAttendees ? (
              <div className="profile-error">
                {formik.errors.numberOfAttendees}
              </div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="field">
              Which field did you speak for?
            </label>
            <input
              type="text"
              name="field"
              id="field"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("field")}
            />
            {formik.touched.field && formik.errors.field ? (
              <div className="profile-error">{formik.errors.field}</div>
            ) : null}
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
    </div>
  );
};

export default Personal;
