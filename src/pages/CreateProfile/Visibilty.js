import { useFormik } from "formik";
import React from "react";

const Visibilty = ({ submit, prevStep }) => {
  const formik = useFormik({
    initialValues: {
      visibility: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <h2 className="visibilty-heading">VISIBILITY AND NOTIFICATIONS</h2>

      <div className="visibilty-container">
        <label className="profileLabel">PROFILE VISIBILITY*</label>
        <p className="visibilty-paragraph">
          To make your profile public, it needs to be confirmed by you first
        </p>

        <div className="gender" {...formik.getFieldProps("visibility")}>
          <label className="genderLabel color--grey">
            <input
              type="radio"
              name="visibility"
              className="genders"
              value="public"
            />
            Public (visibility to everyone)
          </label>

          <label className="genderLabel color--orange">
            <input
              type="radio"
              name="visibility"
              className="genders"
              value="private"
            />
            Private (only you and site administrators can see your profile)
          </label>
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
