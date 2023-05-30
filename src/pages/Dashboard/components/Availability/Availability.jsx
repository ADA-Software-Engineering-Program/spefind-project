import React, { useState } from "react";
import "./Availability.css";

const Availability = () => {
  const [enableInput, setEnableInput] = useState(false);

  return (
    <div className="availability">
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
        <input
          type="checkbox"
          aria-label="Workshop (3+ hour event)"
          id="Workshop(3+hourevent)"
          name="Workshop (3+ hour event)"
          className="check-checkbox"
          disabled={enableInput}
        />
        <label htmlFor="Workshop(3+hourevent)" className="check-label">
          <span className="check-checkbox-button"></span>Workshop (3+ hour
          event)
        </label>
        <button>+ Edit Event</button>
      </div>
    </div>
  );
};

export default Availability;
