import { useState } from "react";
const Availabilty = ({ nextStep, prevStep, formik, fetchData }) => {
  const [showOtherstates, setshowOtherstates] = useState(false);

  const formValues = ["pricing", "isVolunteer"];
  const handleNext = async (e) => {
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
                />
                <label className="check-label" htmlFor={event.eventType}>
                  <span className="check-checkbox-button"></span>
                  {event.eventType}
                </label>
              </div>
            );
          })}
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
              setshowOtherstates(!showOtherstates);
            }}
            id={"otherStates"}
          />
          <label className="check-label" htmlFor={"otherStates"}>
            <span className="check-checkbox-button"></span>
            Other Country
          </label>
          {formik.touched.availableTo && formik.errors.availableTo ? (
            <div className="profile-error">{formik.errors.availableTo}</div>
          ) : null}
          <input
            type="text"
            name="availableTo"
            placeholder="Type country here"
            className={
              showOtherstates
                ? "otherState-input displayBlock"
                : "otherState-input"
            }
            // value={""}
            // id={"otherStates"}
          />
        </div>
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
                />
                <label className="check-label" htmlFor={prices.pricing}>
                  <span className="check-radio-button"></span> {prices.pricing}
                </label>
              </div>
            );
          })}
        </div>
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
            />
            <label className="check-label" htmlFor="yes">
              <span className="check-radio-button"></span>Yes
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

export default Availabilty;
