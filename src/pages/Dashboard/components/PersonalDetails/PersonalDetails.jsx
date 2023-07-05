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
import { API_LINK } from "../../../../utils/api"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Confirmation from "./Modal/Confirmation"

const PersonalDetails = () => {
  const [enableInput, setEnableInput] = useState(true)
  const [addNewEvent, setAddNewEvent] = useState(false)
  const [newEventComponent, setNewEventComponent] = useState(false)
  const [selectedEventIndex, setSelectedEventIndex] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [eventId, setEventId] = useState("")

  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)

  const onFinish = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  const handleImageUpload = (e) => {
    let formdata = new FormData()
    formdata.append("banner-cover", e.target.files[0])
    const token = sessionStorage.getItem("token")

    let requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    fetch(`${API_LINK}/api/profile/cover/banner`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error))
  }
  const navigate = useNavigate()

  const deleteEventHandler = async () => {
    setIsLoading(true)
    try {
      const token = sessionStorage.getItem("token")
      const deleteEventData = await fetch(`${API_LINK}/api/profile/event/delete?eventId=${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      // console.log(deleteEventData)
      const response = await deleteEventData.json()
      // console.log(response)
      if (!deleteEventData.ok || !deleteEventData) {
        setIsLoading(false)
        toast.error(`${response?.message || response?.msg},` || "Something Went Wrong!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }

      if (deleteEventData.ok) {
        setIsLoading(false)
        toast.success(`${response.message || response.msg}, please refresh the page to see your changes`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px", border: "2px solid green" },
          className: ""
        })
        navigate("/dashboard")
        window.scrollTo(0, 0)
      }
      setIsLoading(false)
      setIsConfirmed(!isConfirmed)
      //   console.log(response)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  return (
    <div className='formContainer'>
      {(loading || isLoading) && <Loader />}
      {isConfirmed && (
        <Confirmation
          message={"Are you sure you want to delete this event ?"}
          yesHandler={deleteEventHandler}
          noHandler={() => {
            setIsConfirmed(!isConfirmed)
          }}
        />
      )}
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
      {/* <Confirmation /> */}
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
            <input
              type='file'
              name='selectFile'
              id='coverBanner'
              aria-label='cover banner'
              className='selectFile'
              disabled={enableInput}
              onChange={handleImageUpload}
            />
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

        {fetchedUserData?.pastEvents?.length > 0 ? (
          fetchedUserData?.pastEvents?.map((event, index) => (
            <div className='pastEventsCointainer' key={index}>
              <div className='events'>
                <img src={event.eventPhoto} alt='past event image' />
                <div className='eventDetails'>
                  <h6>{event.titleOfEvent}</h6>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
              </div>
              <button
                type='button'
                onClick={() => {
                  setSelectedEventIndex(index)
                  setAddNewEvent(!addNewEvent)
                }}
              >
                + Edit Event
              </button>
              <AiFillDelete
                className='delete'
                // data-key-info={event._id}
                onClick={() => {
                  setIsConfirmed(!isConfirmed)
                  setEventId(event._id)
                }}
              ></AiFillDelete>
              <hr />
            </div>
          ))
        ) : (
          <p>No Past Events Found! Click the Add New Event Button to add an event</p>
        )}

        {addNewEvent && (
          <EditEvent
            showModal={addNewEvent}
            setShowModal={setAddNewEvent}
            data={fetchedUserData}
            id={fetchedUserData?.pastEvents[selectedEventIndex]?._id}
            index={selectedEventIndex}
          />
        )}

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
