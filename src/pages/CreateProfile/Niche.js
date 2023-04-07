import React from "react";

const Niche = ({ nextStep, prevStep, formik }) => {
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
      <div className="profile-group">
        <label className="profile-label">YOUR MAIN TOPICS* </label>
        <input
          type="text"
          name="lastName"
          className="profile-input"
          placeholder="i.e family, leadership, technology"
          {...formik.getFieldProps("mainTopics")}
        />
        {formik.touched.mainTopics && formik.errors.mainTopics ? (
          <div className="profile-error">{formik.errors.mainTopics}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label">EXPERTISE TAGS*</label>
        <input
          type="text"
          name="lastName"
          className="profile-input"
          placeholder="i.e under technology as your main topic, your expertise tag is coding"
          {...formik.getFieldProps("expertiseTags")}
        />
        {formik.touched.expertiseTags && formik.errors.expertiseTags ? (
          <div className="profile-error">{formik.errors.expertiseTags}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label">EDUCATION*</label>
        <input
          type="text"
          name="lastName"
          className="profile-input"
          placeholder="i.e school, field of study, year duration"
          {...formik.getFieldProps("education")}
        />
        {formik.touched.education && formik.errors.education ? (
          <div className="profile-error">{formik.errors.education}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label">CURRENT POSITION*</label>
        <input
          type="text"
          name="lastName"
          className="profile-input"
          placeholder="i.e position, company, field"
          {...formik.getFieldProps("currentPosition")}
        />
        {formik.touched.currentPosition && formik.errors.currentPosition ? (
          <div className="profile-error">{formik.errors.currentPosition}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label">LANGUAGE*</label>
        <input
          type="text"
          name="lastName"
          className="profile-input"
          placeholder="English"
          {...formik.getFieldProps("language")}
        />
        {formik.touched.language && formik.errors.language ? (
          <div className="profile-error">{formik.errors.language}</div>
        ) : null}
      </div>

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
