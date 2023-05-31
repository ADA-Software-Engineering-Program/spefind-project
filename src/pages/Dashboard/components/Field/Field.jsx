import React, { useState } from "react";
import "./Field.css";

const Field = () => {
  const [enableInput, setEnableInput] = useState(true);
  const [showOtherStates, setShowOtherStates] = useState(false);

  return (
    <div className="field">
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
      <form>
        <div>
          <label htmlFor="mainField">Your main field</label>
        </div>
        <input
          aria-label="mainField"
          placeholder="Main Field"
          id="mainField"
          className="input"
          disabled={enableInput}
        />
        <div>
          <label htmlFor="subfield">Subfield</label>
        </div>
        <input
          aria-label="subfield"
          placeholder="Subfield"
          id="subfield"
          className="input"
          disabled={enableInput}
        />
        <div>
          <label htmlFor="education">Education</label>
        </div>
        <input
          aria-label="education"
          placeholder="Education"
          id="education"
          className="input"
          disabled={enableInput}
        />
        <div>
          <label htmlFor="career">Current Career/Job</label>
        </div>
        <input
          aria-label="career"
          placeholder="Current Career/Job"
          id="career"
          className="input"
          disabled={enableInput}
        />
        <div>
          <label htmlFor="language">Language</label>
        </div>
        <div className="">
          <input
            type="checkbox"
            aria-label="english"
            id="english"
            name="language"
            className="check-checkbox"
            disabled={enableInput}
          />
          <label htmlFor="english" className="check-label">
            <span className="check-checkbox-button"></span>English
          </label>
        </div>
        <div className="">
          <input
            type="button"
            aria-label="other"
            id="other"
            name="language"
            className="check-checkbox"
            disabled={enableInput}
            value={"+"}
            onClick={() => {
              setShowOtherStates(!showOtherStates);
            }}
          />

          <label htmlFor="other" className="check-label">
            <span className="check-checkbox-button"></span>Add other languages
          </label>

          <input
            type="text"
            name="language"
            id="language"
            placeholder="Type language here"
            className={
              showOtherStates
                ? "otherState-input displayBlock"
                : "otherState-input"
            }
          />
        </div>

        <div className="editContainer">
          <button type="submit" className="saveBtn">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Field;
