import { useState } from "react";
const Availability = ({ nextStep, prevStep, formik, fetchData }) => {
  const [showOtherStates, setShowOtherStates] = useState(false);

  const formValues = ["eventType", "availableTo", "pricing", "isVolunteer"];

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
          errorField.splice(index, 1);
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

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <div className="profile-group">
        <label className="profile-label">
          WHICH TYPES OF EVENTS ARE YOU INTERESTED IN?*
        </label>
        <div className="check-cont" {...formik.getFieldProps("eventType")}>
          {fetchData.eventTypes.map(function (event) {
            return (
              <div key={event._id}>
                <input
                  type="checkbox"
                  name="eventType"
                  className="check-checkbox"
                  value={event._id}
                  id={event.eventType}
                  defaultChecked={
                    formik.values.eventType.find((value) => {
                      return value === event._id;
                    })
                      ? true
                      : false
                  }
                />
                <label className="check-label" htmlFor={event.eventType}>
                  <span className="check-checkbox-button"></span>
                  {event.eventType}
                </label>
              </div>
            );
          })}
          {formik.touched.eventType && formik.errors.eventType ? (
            <div className="profile-error">{formik.errors.eventType}</div>
          ) : null}
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label">AVAILABLE TO*</label>
        <div className="check-cont" {...formik.getFieldProps("availableTo")}>
          {fetchData.availableToStates.map((state) => {
            return (
              <div key={state._id}>
                <input
                  type="checkbox"
                  name="availableTo"
                  className="check-checkbox"
                  value={state._id}
                  id={state.state}
                  defaultChecked={
                    formik.values.availableTo.find((value) => {
                      return value === state._id;
                    })
                      ? true
                      : false
                  }
                />
                <label className="check-label" htmlFor={state.state}>
                  <span className="check-checkbox-button"></span>
                  {state.state}
                </label>
              </div>
            );
          })}
          <input
            type="checkbox"
            className="check-checkbox"
            onClick={() => {
              setShowOtherStates(!showOtherStates);
            }}
            id={"otherStates"}
          />
          <label className="check-label" htmlFor={"otherStates"}>
            <span className="check-checkbox-button"></span>
            Other Countries
          </label>

          <input
            type="text"
            name="availableT"
            placeholder="Type country here"
            className={
              showOtherStates
                ? "otherState-input displayBlock"
                : "otherState-input"
            }
            // value={""}
            // id={"otherStates"}
          />
        </div>
        {formik.touched.availableTo && formik.errors.availableTo ? (
          <div className="profile-error">{formik.errors.availableTo}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label">FEE*</label>
        <div className="check-cont" {...formik.getFieldProps("pricing")}>
          <input
            type="radio"
            className="check-input"
            id={"askForPrice"}
            name="pricing"
            // value={prices._id}
          />
          <label className="check-label" htmlFor={"askForPrice"}>
            <span className="check-radio-button"></span> Ask for Pricing
          </label>
          {fetchData.price.map((prices) => {
            return (
              <div key={prices._id}>
                <input
                  type="radio"
                  name="pricing"
                  className="check-input"
                  value={prices._id}
                  id={prices.pricing}
                  defaultChecked={
                    formik.values.pricing === prices._id ? true : false
                  }
                />
                <label className="check-label" htmlFor={prices.pricing}>
                  <span className="check-radio-button"></span> {prices.pricing}
                </label>
              </div>
            );
          })}
        </div>
        {formik.touched.pricing && formik.errors.pricing ? (
          <div className="profile-error">{formik.errors.pricing}</div>
        ) : null}
      </div>

      <div className="profile-group">
        <label className="profile-label">VOLUNTEER*</label>
        <div className="check-cont" {...formik.getFieldProps("isVolunteer")}>
          <div>
            <input
              type="radio"
              name="isVolunteer"
              className="check-input"
              value="no"
              id="no"
              defaultChecked={formik.values.isVolunteer === "no" ? true : false}
            />
            <label className="check-label" htmlFor="no">
              <span className="check-radio-button"></span>No
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="isVolunteer"
              className="check-input"
              value="yes"
              id="yes"
              defaultChecked={
                formik.values.isVolunteer === "yes" ? true : false
              }
            />
            <label className="check-label" htmlFor="yes">
              <span className="check-radio-button"></span>Yes
            </label>
          </div>
          {formik.touched.isVolunteer && formik.errors.isVolunteer ? (
            <div className="profile-error">{formik.errors.isVolunteer}</div>
          ) : null}
        </div>
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
          {"Next"}
        </button>
      </div>
    </div>
  );
};

export default Availability;
