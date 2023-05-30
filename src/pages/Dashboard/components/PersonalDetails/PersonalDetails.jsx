import React, { useState } from "react";

import "./PersonalDetails.css";
import userImg from "../../assets/userImg.png";
import coverBanner from "../../assets/coverBanner.png";
import { AiFillDelete } from "react-icons/ai";
import event from "../../assets/event.png";

const PersonalDetails = () => {
  const [enableInput, setEnableInput] = useState(false);

  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="formContainer">
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
      <form onSubmit={onFinish}>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div className="inputsWrapper">
          <input
            aria-label="first name"
            placeholder="First Name"
            id="firstName"
            className="input"
            disabled={enableInput}
          />
          <input
            aria-label="last name"
            placeholder="Last Name"
            id="lastName"
            className="input"
            disabled={enableInput}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
        </div>
        <div className="genderWrapper">
          <input
            id="male"
            type="radio"
            aria-label="male"
            className="newInput"
            value={"male"}
            name={"gender"}
            disabled={enableInput}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="genderWrapper">
          <input
            id="female"
            type="radio"
            aria-label="female"
            className="newInput"
            value={"female"}
            name={"gender"}
            disabled={enableInput}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="genderWrapper">
          <input
            id="others"
            type="radio"
            aria-label="others"
            className="newInput"
            value={"others"}
            name={"gender"}
            disabled={enableInput}
          />
          <label htmlFor="others">Others</label>
        </div>
        <div>
          <label htmlFor="coverBanner">Cover Banner and Profile Picture</label>
        </div>

        <div className="coverBannerAndProfilePicture">
          <div className="coverBannerContainer">
            <img src={coverBanner} alt=" cover banner of the speaker" />
            <input
              type="file"
              name="selectFile"
              id="coverBanner"
              aria-label="cover banner"
              className="selectFile"
              disabled={enableInput}
            />
          </div>

          <div className="editProfilePicture">
            <img src={userImg} alt=" profile avatar" />
            <div className="btnWrapper">
              <button type="button" className="btn">
                Remove
              </button>
              <button type="button" className="btn">
                Change Picture
              </button>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="country_or_city">Country & City</label>
        </div>
        <div className="inputsWrapper">
          <input
            aria-label="country"
            placeholder="Type Country"
            id="country"
            className="input"
            disabled={enableInput}
          />
          <input
            aria-label="country"
            placeholder="Type City"
            id="country"
            className="input"
            disabled={enableInput}
          />
        </div>
        <div>
          <label htmlFor="biography">Biography</label>
        </div>
        <textarea
          placeholder="Type here"
          className="textArea"
          id="biography"
          disabled={enableInput}
        ></textarea>
        <div>
          <label htmlFor="pastevents">Past Events</label>
        </div>
        <div className="pastEventsCointainer">
          <div className="events">
            <img src={event} alt="past event" />
            <div className="eventDetails">
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>+ Edit Event</button>
          <AiFillDelete className="delete" />
        </div>
        <div className="pastEventsCointainer">
          <div className="events">
            <img src={event} alt="past event" />
            <div className="eventDetails">
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>+ Edit Event</button>
          <AiFillDelete className="delete" />
        </div>
        <div className="pastEventsCointainer">
          <div className="events">
            <img src={event} alt="past event" />
            <div className="eventDetails">
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>+ Edit Event</button>
          <AiFillDelete className="delete" />
        </div>
        <div className="pastEventsCointainer">
          <div className="events">
            <img src={event} alt="past event" />
            <div className="eventDetails">
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>+ Edit Event</button>
          <AiFillDelete className="delete" />
        </div>
        <div className="saveAndEdit">
          <button>+ Add New Event</button>
          <button type="submit">SAVE</button>
        </div>
      </form>
    </div>
  );
};
export default PersonalDetails;
