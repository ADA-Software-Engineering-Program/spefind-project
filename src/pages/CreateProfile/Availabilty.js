import React from "react";

const Availabilty = ({ nextStep, prevStep, formik }) => {
  const formValues = ["fee", "volunteer"];

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
        <label className="profile-label">
          WHICH TYPES OF EVENTS ARE YOU INTERESTED IN?*
        </label>
        <div className="check-cont" {...formik.getFieldProps("events")}>
          <div>
            <input
              type="checkbox"
              name="events"
              className="check-checkbox"
              value="conference"
              id="conference"
            />
            <label className="check-label" htmlFor="conference">
              <span className="check-checkbox-button"></span>Conference
              (Full-day Event)
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="events"
              className="check-checkbox"
              value="workshop"
              id="workshop"
            />
            <label className="check-label" htmlFor="workshop">
              <span className="check-checkbox-button"></span>Workshop (3+ hour
              event)
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="events"
              className="check-checkbox"
              value="session"
              id="session"
            />
            <label className="check-label" htmlFor="session">
              <span className="check-checkbox-button"></span>Session (1-2 hr
              event)
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="events"
              className="check-checkbox"
              value="moderator"
              id="moderator"
            />
            <label className="check-label" htmlFor="moderator">
              <span className="check-checkbox-button"></span>Moderator
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="events"
              className="check-checkbox"
              value="webinar"
              id="webinar"
            />
            <label className="check-label" htmlFor="webinar">
              <span className="check-checkbox-button"></span>Webinar (virtual
              event)
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="events"
              className="check-checkbox"
              value="school"
              id="school"
            />
            <label className="check-label" htmlFor="school">
              <span className="check-checkbox-button"></span> School
            </label>
          </div>
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label">AVAILABLE TO*</label>
        <div className="check-cont" {...formik.getFieldProps("available")}>
          <div>
            <input
              type="checkbox"
              name="available"
              className="check-checkbox"
              value="nigeria"
              id="nigeria"
            />
            <label className="check-label" htmlFor="nigeria">
              <span className="check-checkbox-button"></span>Nigeria
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="available"
              className="check-checkbox"
              value="ghana"
              id="ghana"
            />
            <label className="check-label" htmlFor="ghana">
              <span className="check-checkbox-button"></span>Ghana
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="available"
              className="check-checkbox"
              value="somalia"
              id="somalia"
            />
            <label className="check-label" htmlFor="somalia">
              <span className="check-checkbox-button"></span>Somalia
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="available"
              className="check-checkbox"
              value="south africa"
              id="south_africa"
            />
            <label className="check-label" htmlFor="south_africa">
              <span className="check-checkbox-button"></span>South Africa
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="available"
              className="check-checkbox"
              value="turkey"
              id="turkey"
            />
            <label className="check-label" htmlFor="turkey">
              <span className="check-checkbox-button"></span>Turkey
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="available"
              className="check-checkbox"
              value="egypt"
              id="egypt"
            />
            <label className="check-label" htmlFor="egypt">
              <span className="check-checkbox-button"></span>Egypt
            </label>
          </div>
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label">FEE*</label>
        <div className="check-cont" {...formik.getFieldProps("fee")}>
          <div>
            <input
              type="radio"
              name="fee"
              className="check-input"
              value="0-20"
              id="fee1"
            />
            <label className="check-label" htmlFor="fee1">
              <span className="check-radio-button"></span> Up to #20000
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="fee"
              className="check-input"
              value="20-30"
              id="fee2"
            />
            <label className="check-label" htmlFor="fee2">
              <span className="check-radio-button"></span>#20000 - 30000
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="fee"
              className="check-input"
              value="30-40"
              id="fee3"
            />
            <label className="check-label" htmlFor="fee3">
              <span className="check-radio-button"></span>#30000 - 40000
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="fee"
              className="check-input"
              value="40-70"
              id="fee4"
            />
            <label className="check-label" htmlFor="fee4">
              <span className="check-radio-button"></span> #40000 - 70000
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="fee"
              className="check-input"
              value="70-100"
              id="fee5"
            />
            <label className="check-label" htmlFor="fee5">
              <span className="check-radio-button"></span> #70000 - 100000
            </label>
          </div>
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label">VOLUNTEER*</label>
        <div className="check-cont" {...formik.getFieldProps("volunteer")}>
          <div>
            <input
              type="radio"
              name="volunteer"
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
              name="volunteer"
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
          Next
        </button>
      </div>
    </div>
  );
};

export default Availabilty;
