const Niche = ({ nextStep, prevStep, formik, optionFields }) => {
  const formValues = [
    "speakerField",
    "speakerSubField",
    "education",
    "jobTitle",
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
        <label className="profile-label" htmlFor="speakerField">
          YOUR MAIN TOPICS*{" "}
        </label>
        <select
          className="profile-input"
          {...formik.getFieldProps("speakerField")}
        >
          <option value={""} disabled defaultValue={""}>
            i.e family, leadership, technology
          </option>
          {optionFields.fieldOptions.map((option) => {
            return (
              <option
                key={option._id}
                value={option.field}
                className="profile-input"
              >
                {option.field}
              </option>
            );
          })}
        </select>
        {formik.touched.speakerField && formik.errors.speakerField ? (
          <div className="profile-error">{formik.errors.speakerField}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label" htmlFor="speakerSubField">
          EXPERTISE TAGS*
        </label>
        <input
          type="text"
          name="speakerSubField"
          id="speakerSubField"
          className="profile-input"
          placeholder="i.e under technology as your main topic, your expertise tag is coding"
          {...formik.getFieldProps("speakerSubField")}
        />
        {formik.touched.speakerSubField && formik.errors.speakerSubField ? (
          <div className="profile-error">{formik.errors.speakerSubField}</div>
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
            <label className="profile-label-field" htmlFor="jobTitle">
              Job Name
            </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              className="profile-input"
              placeholder="Type here"
              {...formik.getFieldProps("jobTitle")}
            />
            {formik.touched.jobTitle && formik.errors.jobTitle ? (
              <div className="profile-error">{formik.errors.jobTitle}</div>
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
              placeholder="Type Here"
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
