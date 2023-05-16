import React from "react";

const Niche = ({ nextStep, prevStep, formik }) => {
  const formValues = [
    "mainTopics",
    "expertiseTags",
    "education",
    "jobName",
    "yearsOfPractice",
    "jobDescription",
    "position",
    "language",
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

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <div className="profile-group">
        <label className="profile-label" htmlFor="mainTopics">
          YOUR MAIN TOPICS*{" "}
        </label>
        <input
          type="text"
          name="mainTopics"
          id="mainTopics"
          className="profile-input"
          placeholder="i.e family, leadership, technology"
          {...formik.getFieldProps("mainTopics")}
        />
        {formik.touched.mainTopics && formik.errors.mainTopics ? (
          <div className="profile-error">{formik.errors.mainTopics}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label" htmlFor="expertiseTags">
          EXPERTISE TAGS*
        </label>
        <input
          type="text"
          name="expertiseTags"
          id="expertiseTags"
          className="profile-input"
          placeholder="i.e under technology as your main topic, your expertise tag is coding"
          {...formik.getFieldProps("expertiseTags")}
        />
        {formik.touched.expertiseTags && formik.errors.expertiseTags ? (
          <div className="profile-error">{formik.errors.expertiseTags}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label" htmlFor="education">
          EDUCATION*
        </label>
        <input
          type="text"
          name="education"
          id="education"
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
        <div className="profile-field">
          <div>
            <label className="profile-label-field" htmlFor="jobName">
              Job Name
            </label>
            <input
              type="text"
              name="jobName"
              id="jobName"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("jobName")}
            />
            {formik.touched.jobName && formik.errors.jobName ? (
              <div className="profile-error">{formik.errors.jobName}</div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="yearsOfPractice">
              Years of Practice
            </label>
            <input
              type="number"
              name="yearsOfPractice"
              id="yearsOfPractice"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("yearsOfPractice")}
            />
            {formik.touched.yearsOfPractice && formik.errors.yearsOfPractice ? (
              <div className="profile-error">
                {formik.errors.yearsOfPractice}
              </div>
            ) : null}
          </div>
          <div>
            <label className="profile-label-field" htmlFor="jobDescription">
              Job Description
            </label>
            <input
              type="text"
              name="jobDescription"
              id="jobDescription"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("jobDescription")}
            />
            {formik.touched.jobDescription && formik.errors.jobDescription ? (
              <div className="profile-error">
                {formik.errors.jobDescription}
              </div>
            ) : null}
          </div>

          <div>
            <label className="profile-label-field" htmlFor="position">
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              className="profile-input"
              placeholder="Type City"
              {...formik.getFieldProps("position")}
            />
            {formik.touched.position && formik.errors.position ? (
              <div className="profile-error">{formik.errors.position}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label" htmlFor="language">
          LANGUAGE*
        </label>
        <input
          type="text"
          name="language"
          id="language"
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
