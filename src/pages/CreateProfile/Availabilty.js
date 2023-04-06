import React from "react";
import { useFormik } from "formik";

const Availabilty = ({ nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: {
      events: [],
      available: [],
      fee: "",
      volunteer: "",
    },
  });

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <label className="profileLabel">
        WHICH TYPES OF EVENTS ARE YOU INTERESTED IN?*
      </label>
      <div className="gender" {...formik.getFieldProps("events")}>
        <label className="genderLabel">
          <input
            type="checkbox"
            name="events"
            className="genders"
            value="conference"
          />
          Conference (Full-day Event)
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="events"
            className="genders"
            value="workshop"
          />
          Workshop (3+ hour event)
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="events"
            className="genders"
            value="session"
          />
          Session (1-2 hr event)
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="events"
            className="genders"
            value="moderator"
          />
          Moderator
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="events"
            className="genders"
            value="webinar"
          />
          Webinar (virtual event)
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="events"
            className="genders"
            value="school"
          />
          School
        </label>
      </div>

      <label className="profileLabel">AVAILABLE TO*</label>
      <div className="gender" {...formik.getFieldProps("available")}>
        <label className="genderLabel">
          <input
            type="checkbox"
            name="available"
            className="genders"
            value="Nigeria"
          />
          Nigeria
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="available"
            className="genders"
            value="Ghana"
          />
          Ghana
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="available"
            className="genders"
            value="Somalia"
          />
          Somalia
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="available"
            className="genders"
            value="South Africa"
          />
          South Africa
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="available"
            className="genders"
            value="Turkey"
          />
          Turkey
        </label>

        <label className="genderLabel">
          <input
            type="checkbox"
            name="available"
            className="genders"
            value="Egypt"
          />
          Egypt
        </label>
      </div>

      <label className="profileLabel">FEE*</label>
      <div className="gender" {...formik.getFieldProps("fee")}>
        <label className="genderLabel">
          <input type="radio" name="fee" className="genders" value="0-20" />
          Up to #20000
        </label>

        <label className="genderLabel">
          <input type="radio" name="fee" className="genders" value="20-30" />
          #20000 - 30000
        </label>

        <label className="genderLabel">
          <input type="radio" name="fee" className="genders" value="30-40" />
          #30000 - 40000
        </label>

        <label className="genderLabel">
          <input type="radio" name="fee" className="genders" value="40-70" />
          #40000 - 70000
        </label>

        <label className="genderLabel">
          <input type="radio" name="fee" className="genders" value="70-100" />
          #70000 - 100000
        </label>
      </div>

      <label className="profileLabel">VOLUNTEER*</label>
      <div className="gender" {...formik.getFieldProps("volunteer")}>
        <label className="genderLabel">
          <input type="radio" name="volunteer" className="genders" value="No" />
          No
        </label>

        <label className="genderLabel">
          <input
            type="radio"
            name="volunteer"
            className="genders"
            value="Yes"
          />
          Yes
        </label>
      </div>

      <div className="btn-box">
        <button
          type="button"
          className="submitBtn submitBtn--grey"
          onClick={handlePrev}
        >
          Back to Niche
        </button>
        <button
          type="button"
          className="submitBtn submitBtn--grey"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Availabilty;
