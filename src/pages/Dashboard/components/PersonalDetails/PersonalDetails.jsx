import React, { useState } from "react"

import "./PersonalDetails.css"
import userImg from "../../assets/userImg.png"
import coverBanner from "../../assets/coverBanner.png"
import { AiFillDelete } from "react-icons/ai"
import Button from "../Button/Button"
import Loader from "../../../../Components/Loader/Loader"
import EditEvent from "./EditEvent"
import AddNewEvent from "./AddNewEvent"
import useFetchUserInfo from "../../../../hooks/useFetchUserInfo"

const PersonalDetails = () => {
  const [enableInput, setEnableInput] = useState(true)
  const [addNewEvent, setAddNewEvent] = useState(false)
  const [newEventComponent, setNewEventComponent] = useState(false)

  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)

  const onFinish = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  console.log(fetchedUserData)
  return (
    <div className='formContainer'>
      {loading && <Loader />}
      <div className='editContainer'>
        <Button
          text1={enableInput ? "Click to make your profile editable" : "Go ahead and edit the input fields now 😎"}
          className='edit'
          type='button'
          onClick={() => {
            setEnableInput(!enableInput)
          }}
        />
      </div>
      <form onSubmit={onFinish}>
        <div>
          <label htmlFor='name'>Name</label>
        </div>
        <div className='inputsWrapper'>
          <input
            aria-label='first name'
            placeholder='First Name'
            id='firstName'
            className='input'
            disabled
            defaultValue={fetchedUserData?.firstName}
          />
          <input
            aria-label='last name'
            placeholder='Last Name'
            id='lastName'
            className='input'
            disabled
            defaultValue={fetchedUserData?.lastName}
          />
        </div>
        <div>
          <label htmlFor='gender'>Gender</label>
        </div>
        <div className='genderWrapper'>
          <input
            id='male'
            type='radio'
            aria-label='male'
            className='check-checkbox'
            value={"male"}
            checked={fetchedUserData?.gender === "male"}
            name={"gender"}
            disabled={enableInput}
          />
          <label className='check-label' htmlFor='male'>
            <span className='check-checkbox-button'></span>
            Male
          </label>
        </div>
        <div className='genderWrapper'>
          <input
            id='female'
            type='radio'
            aria-label='female'
            checked={fetchedUserData?.gender === "female"}
            className='check-checkbox'
            value={"female"}
            name={"gender"}
            disabled={enableInput}
          />
          <label className='check-label' htmlFor='female'>
            <span className='check-checkbox-button'></span>
            Female
          </label>
        </div>
        <div className='genderWrapper'>
          <input
            id='others'
            type='radio'
            aria-label='others'
            checked={fetchedUserData?.gender === "others"}
            className='check-checkbox'
            value={"others"}
            name={"gender"}
            disabled={enableInput}
          />
          <label className='check-label' htmlFor='others'>
            <span className='check-checkbox-button'></span>
            Others
          </label>
        </div>
        <div>
          <label htmlFor='coverBanner'>Cover Banner and Profile Picture</label>
        </div>

        <div className='coverBannerAndProfilePicture'>
          <div className='coverBannerContainer'>
            <img src={coverBanner} alt=' cover banner of the speaker' />
            <input type='file' name='selectFile' id='coverBanner' aria-label='cover banner' className='selectFile' disabled={enableInput} />
          </div>

          <div className='editProfilePicture'>
            <img src={userImg} alt=' profile avatar' />
            <div className='btnWrapper'>
              <button type='button' className='btn'>
                Remove
              </button>
              <button type='button' className='btn'>
                Change Picture
              </button>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor='country_or_city'>Country & City</label>
        </div>
        <div className='inputsWrapper'>
          <input
            aria-label='country'
            placeholder='Type Country'
            id='country'
            className='input'
            disabled={enableInput}
            defaultValue={fetchedUserData?.country}
          />
          <input
            aria-label='country'
            placeholder='Type City'
            id='country'
            className='input'
            disabled={enableInput}
            defaultValue={fetchedUserData?.city}
          />
        </div>
        <div>
          <label htmlFor='biography'>Biography</label>
        </div>
        <textarea
          placeholder='Type here'
          className='textArea'
          id='biography'
          disabled={enableInput}
          defaultValue={fetchedUserData?.biography}
        ></textarea>
        <div>
          <label htmlFor='pastevents'>Past Events</label>
        </div>

        {fetchedUserData?.pastEvents?.map((event, index) => {
          return (
            <div className='pastEventsCointainer' key={index}>
              <div className='events'>
                <img src={event} alt='past event image' />
                <div className='eventDetails'>
                  <h6>{event.titleOfEvent}</h6>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
              </div>
              <button
                type='button'
                onClick={() => {
                  setAddNewEvent(!addNewEvent)
                }}
              >
                + Edit Event
              </button>
              <AiFillDelete className='delete' />
              <hr />
              {/* {addNewEvent && eventComponent} */}
              {addNewEvent && <EditEvent showModal={addNewEvent} setShowModal={setAddNewEvent} data={fetchedUserData} id={event._id} />}
            </div>
          )
        })}

        {newEventComponent && <AddNewEvent showModal={newEventComponent} setShowModal={setNewEventComponent} />}

        <div className='saveAndEdit'>
          <Button
            type='button'
            onClick={() => {
              setNewEventComponent(!newEventComponent)
            }}
            text1=' + Add New Event'
          />

          <Button type='submit' text1='SAVE ' className='saveBtn' />
        </div>
      </form>
    </div>
  )
}
export default PersonalDetails
