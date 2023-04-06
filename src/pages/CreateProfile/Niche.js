import React from "react";
import { useFormik } from "formik";

const Niche = ({ nextStep, prevStep }) => {
  const validate = (values) => {
    const errors = {};
    // fullname
    if (!values.fullName) {
      errors.fullName = "Please fill out this field";
    } else if (values.fullName.length < 5) {
      errors.fullName = "Must be 5 characters or more";
    }
  };

  const formik = useFormik({
    initialValues: {
      mainTopics: "",
      expertiseTags: "",
      education: "",
      currentPosition: "",
      language: "",
    },
    validate,
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
      <label className="profileLabel">YOUR MAIN TOPICS* </label>
      <input
        type="text"
        name="lastName"
        className="profileInput"
        placeholder="i.e family, leadership, technology"
        {...formik.getFieldProps("mainTopics")}
      />

      <label className="profileLabel">EXPERTISE TAGS*</label>
      <input
        type="text"
        name="lastName"
        className="profileInput"
        placeholder="i.e under technology as your main topic, your expertise tag is coding"
        {...formik.getFieldProps("expertiseTags")}
      />

      <label className="profileLabel">EDUCATION*</label>
      <input
        type="text"
        name="lastName"
        className="profileInput"
        placeholder="i.e school, field of study, year duration"
        {...formik.getFieldProps("education")}
      />

      <label className="profileLabel">CURRENT POSITION*</label>
      <input
        type="text"
        name="lastName"
        className="profileInput"
        placeholder="i.e position, company, field"
        {...formik.getFieldProps("currentPosition")}
      />

      <label className="profileLabel">LANGUAGE*</label>
      <input
        type="text"
        name="lastName"
        className="profileInput"
        placeholder="English"
        {...formik.getFieldProps("language")}
      />

      <div className="btn-box">
        <button
          type="button"
          className="submitBtn submitBtn--grey"
          onClick={handlePrev}
        >
          Back to Personal Details
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

export default Niche;
