import React from "react";

const Visibilty = ({ submit, prevStep, formik }) => {
  const formValues = ["visibility"];

  const handleSubmit = (e) => {
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
      submit();
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <h2 className="visibilty-heading">VISIBILITY AND NOTIFICATIONS</h2>

      <div className="visibilty-container">
        <label className="profile-label">PROFILE VISIBILITY*</label>
        <p className="visibilty-paragraph">
          To make your profile public, it needs to be confirmed by you first
        </p>
        <div className="check-cont" {...formik.getFieldProps("visibilty")}>
          <div>
            <input
              type="radio"
              name="visibility"
              className="check-input"
              value="public"
              id="public"
            />
            <label className="check-label" htmlFor="public">
              <span className="check-radio-button"></span>Public (visibility to
              everyone)
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="visibility"
              className="check-input"
              value="private"
              id="private"
            />
            <label className="check-label" htmlFor="private">
              <span className="check-radio-button"></span>Private (only you and
              site administrators can see your profile)
            </label>
          </div>
        </div>
      </div>

      <div className="btn-box">
        <button
          type="button"
          className="submitBtn submitBtn--grey"
          onClick={handlePrev}
        >
          Back to Availablity & fees
        </button>
        <button
          type="button"
          className="submitBtn submitBtn--orange"
          onClick={handleSubmit}
        >
          FINISH
        </button>
      </div>
    </div>
  );
};

export default Visibilty;
