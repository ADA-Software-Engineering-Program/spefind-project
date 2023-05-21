import { useState, useLayoutEffect, useMemo } from "react";
import { API_LINK } from "../../utils/api";

const Availabilty = ({ nextStep, prevStep, formik }) => {
  const formValues = ["pricing", "isVolunteer"];
  const [loading, setLoading] = useState(false);
  const [eventTypes, setEventTypes] = useState([]);
  const [availableToStates, setAvailableToStates] = useState([]);
  // const [price, setPrice] = useState("");

  // const news = useMemo(() => {}, [])
  useLayoutEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const getEventTypeData = await fetch(`${API_LINK}/api/event/type/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        // console.log(getEventTypeData);
        const eventTypeData = await getEventTypeData.json();
        console.log(eventTypeData.data);
        const neededEventTypesArray = eventTypeData.data.slice(-6);
        setEventTypes(neededEventTypesArray);

        const getAvailabeToData = await fetch(`${API_LINK}/api/state/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        // console.log(getAvailabeToData);
        const availableToData = await getAvailabeToData.json();
        console.log(availableToData);
        const neededAvailableToDataArray = availableToData.data.slice(-6);
        setAvailableToStates(neededAvailableToDataArray);

        // const getPriceData = await fetch(`${API_LINK}`, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        // //  console.log(getPriceData);
        // const priceData = await getPriceData.json();
        // //  console.log(priceData.data);
        // const neededPriceArray = priceData.data.slice(-5);
        // setPrice(neededPriceArray);
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, []);
  const memoizedEventTypesData = useMemo(() => eventTypes, [eventTypes]);
  const memoizedAvailableToStates = useMemo(
    () => availableToStates,
    [availableToStates]
  );

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
      !loading && nextStep();
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
          {memoizedEventTypesData.map(function (event) {
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
          {memoizedAvailableToStates.map((state) => {
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
                {formik.touched.availableTo && formik.errors.availableTo ? (
                  <div className="profile-error">{formik.errors.availableTo}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="profile-group">
        <label className="profile-label">FEE*</label>
        <div className="check-cont" {...formik.getFieldProps("pricing")}>
          <div>
            <input
              type="radio"
              name="pricing"
              className="check-input"
              value="0-20"
              id="pricing1"
            />
            <label className="check-label" htmlFor="pricing1">
              <span className="check-radio-button"></span> Up to #20000
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="pricing"
              className="check-input"
              value="20-30"
              id="pricing2"
            />
            <label className="check-label" htmlFor="pricing2">
              <span className="check-radio-button"></span>#20000 - 30000
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="pricing"
              className="check-input"
              value="30-40"
              id="pricing3"
            />
            <label className="check-label" htmlFor="pricing3">
              <span className="check-radio-button"></span>#30000 - 40000
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="pricing"
              className="check-input"
              value="40-70"
              id="pricing4"
            />
            <label className="check-label" htmlFor="pricing4">
              <span className="check-radio-button"></span> #40000 - 70000
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="pricing"
              className="check-input"
              value="70-100"
              id="pricing5"
            />
            <label className="check-label" htmlFor="pricing5">
              <span className="check-radio-button"></span> #70000 - 100000
            </label>
          </div>
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
          disabled={loading}
          onClick={handleNext}
        >
          {loading ? "Please wait" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Availabilty;
