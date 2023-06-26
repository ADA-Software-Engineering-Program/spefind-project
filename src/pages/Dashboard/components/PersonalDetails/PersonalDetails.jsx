import React, { useState, useEffect, useCallback } from "react"

import "./PersonalDetails.css"
import userImg from "../../assets/userImg.png"
import coverBanner from "../../assets/coverBanner.png"
import { AiFillDelete } from "react-icons/ai"
import { API_LINK } from "../../../../utils/api"
import toast from "react-hot-toast"
import Button from "../Button/Button"
import Loader from "../../../../Components/Loader/Loader"

const PersonalDetails = () => {
  const [enableInput, setEnableInput] = useState(true)
  const [addNewEvent, setAddNewEvent] = useState(false)
  const [loading, setLoading] = useState(false)

  const [fetchedUserData, setFetchedUserData] = useState({})

  const fetchUserHandler = useCallback(async () => {
    setLoading(true)
    try {
      const token = sessionStorage.getItem("token")
      const getUserData = await fetch(`${API_LINK}/api/profile/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      const userData = await getUserData.json()
      // console.log(getUserData)
      if (!getUserData.ok || !getUserData) {
        setLoading(false)
        toast.error(`${userData?.msg} Please login again!`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      // console.log(userData)
      setFetchedUserData(userData.user)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUserHandler()
  }, [fetchUserHandler])

  const onFinish = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

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
            </div>
          )
        })}
        {addNewEvent && (
          <>
            <div
              className='addEventContainerModalOverlay'
              onClick={() => {
                setAddNewEvent(!addNewEvent)
              }}
            ></div>

            <div className='addEventContainer'>
              <label className='profile-label'>ADD EVENTS*</label>
              <div className='profile-field'>
                <div>
                  <label className='profile-label-field' htmlFor='titleOfEvent'>
                    Name of Event
                  </label>
                  <input type='text' name='titleOfEvent' id='titleOfEvent' className='profile-input' placeholder='Type here' />
                </div>

                <div>
                  <label className='profile-label-field' htmlFor='date'>
                    Date of Event
                  </label>
                  <input type='date' name='date' id='date' className='profile-input' placeholder='Type here' />
                </div>

                <div>
                  <label className='profile-label-field' htmlFor='location'>
                    Location of Event
                  </label>
                  <input type='text' name='location' id='location' className='profile-input' placeholder='Type here' />
                </div>

                <div>
                  <label className='profile-label-field' htmlFor='numberOfAttendees'>
                    Event of How Many People?
                  </label>
                  <input type='number' name='numberOfAttendees' id='numberOfAttendees' className='profile-input' placeholder='Type here' />
                </div>

                <div>
                  <label className='profile-label-field' htmlFor='field'>
                    Which field did you speak for?
                  </label>
                  <input type='text' name='field' id='field' className='profile-input' placeholder='Type here' />
                </div>
              </div>
              <Button
                type='button'
                onClick={() => {
                  setAddNewEvent(!addNewEvent)
                }}
                className='edit'
                style={{ margin: "1rem auto" }}
                text1='Done'
              ></Button>
            </div>
          </>
        )}
        <div className='saveAndEdit'>
          <Button
            type='button'
            onClick={() => {
              setAddNewEvent(!addNewEvent)
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
