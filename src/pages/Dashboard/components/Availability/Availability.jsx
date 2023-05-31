import React, { useState } from "react";
import styles from "./Availability.module.css";

const Availability = () => {
  const [enableInput, setEnableInput] = useState(true);

  return (
    <form className={styles.availability}>
      <div className="editContainer">
        <button
          type="button"
          className="edit"
          onClick={() => {
            setEnableInput(!enableInput);
          }}
        >
          click to edit your profile
        </button>
      </div>

      <div>
        <label htmlFor="eventType">Types of events you're interested in</label>
        <div className="">
          <input
            type="checkbox"
            aria-label="Conference (Full-day
          Event)"
            id="Conference(FulldayEvent)"
            name="Conference (Full-day
          Event)"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="Conference(FulldayEvent)" className="check-label">
            <span className="check-checkbox-button"></span>Conference (Full-day
            Event)
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            aria-label="Ogun"
            id="Workshop(3+hourevent)"
            name="Workshop (3+ hour event)"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="Workshop(3+hourevent)" className="check-label">
            <span className="check-checkbox-button"></span>Workshop (3+ hour
            event)
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            aria-label="Moderator"
            id="Moderator"
            name="Moderator"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="Moderator" className="check-label">
            <span className="check-checkbox-button"></span>Moderator
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            aria-label="Webinar (virtual event)"
            id="Webinar(virtual event)"
            name="Webinar(virtual event)"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="Webinar(virtual event)" className="check-label">
            <span className="check-checkbox-button"></span>Webinar (virtual
            event)
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            aria-label="School"
            id="School"
            name="School"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="School" className="check-label">
            <span className="check-checkbox-button"></span>School
          </label>
        </div>
        <button type="button" className={styles.editEvent}>
          + Edit/Add
        </button>
      </div>

      <div>
        <label htmlFor="availableTo">Availabe To</label>
        <div className="">
          <input
            type="checkbox"
            aria-label="Lagos"
            id="Lagos"
            name="Lagos"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="Lagos" className="check-label">
            <span className="check-checkbox-button"></span>Lagos
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            aria-label="Ogun"
            id="Ogun"
            name="Ogun"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="Ogun" className="check-label">
            <span className="check-checkbox-button"></span>Ogun
          </label>
        </div>
        <button type="button" className={styles.editEvent}>
          + Edit/Add
        </button>
      </div>

      <div>
        <label htmlFor="fee">Fee</label>
        <div className="">
          <input
            type="checkbox"
            aria-label="ask for pricing"
            id="askForPricing"
            name="askForPricing"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="askForPricing" className="check-label">
            <span className="check-checkbox-button"></span>Ask For Pricing
          </label>
        </div>
        <button type="button" className={styles.editEvent}>
          + Edit/Add
        </button>
      </div>

      <div>
        <label htmlFor="volunteer">Would you love to volunteer?</label>
        <div className="">
          <input
            type="radio"
            aria-label="volunteer"
            id="volunteerYes"
            name="volunteer"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="volunteerYes" className="check-label">
            <span className="check-checkbox-button"></span>Yes
          </label>
        </div>
        <div className="">
          <input
            type="radio"
            aria-label="volunteer"
            id="volunteerNo"
            name="volunteer"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="volunteerNo" className="check-label">
            <span className="check-checkbox-button"></span>No
          </label>
        </div>
        <button type="button" className={styles.editEvent}>
          + Edit/Add
        </button>
      </div>

      <div className="editContainer">
        <button type="submit" className="saveBtn">
          SAVE
        </button>
      </div>
    </form>
  );
};

export default Availability;
