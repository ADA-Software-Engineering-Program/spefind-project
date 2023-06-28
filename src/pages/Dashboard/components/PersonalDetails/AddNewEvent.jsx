import React from "react"
import Button from "../Button/Button"
import { useState } from "react"
import useGatherInputFields from "../../../../hooks/useGatherInputFields"
import Loader from "../../../../Components/Loader/Loader"
import { API_LINK } from "../../../../utils/api"
import { toast } from "react-hot-toast"

const AddNewEvent = ({ showModal, setShowModal }) => {
  const [newEventData, setNewEventData] = useState({})
  const [loading, setLoading] = useState(false)
  const { setEventInputs } = useGatherInputFields(setNewEventData)

  const saveNewEvent = async () => {
    setLoading(true)
    try {
      const token = sessionStorage.getItem("token")
      const getEventData = await fetch(`${API_LINK}/api/profile/event/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newEventData)
      })
      const eventData = await getEventData.json()
      // console.log(getEventData)
      if (!getEventData.ok || !getEventData) {
        setLoading(false)
        toast.error(`${eventData?.msg || eventData?.message}` || "Something Went Wrong!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      if (getEventData.ok) {
        setLoading(false)
        toast.success(`${eventData.message || eventData.msg}`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px", border: "2px solid green" },
          className: ""
        })
        setLoading(false)
        setNewEventData({})
        setShowModal(!showModal)
        window.scrollTo(0, 0)
      }
      //   console.log(eventData)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <>
      <div
        className='addEventContainerModalOverlay'
        onClick={() => {
          setShowModal(!showModal)
        }}
      ></div>
      <div className='addEventContainer'>
        {loading && <Loader />}

        <label className='profile-label'>ADD NEW EVENTS*</label>
        <div className='profile-field'>
          <div>
            <label className='profile-label-field' htmlFor='titleOfEvent'>
              Name of Event
            </label>
            <input
              type='text'
              name='titleOfEvent'
              id='titleOfEvent'
              className='profile-input'
              placeholder='Type here'
              onChange={(e) => setEventInputs(e.target.value, "titleOfEvent")}
            />
          </div>

          <div>
            <label className='profile-label-field' htmlFor='date'>
              Date of Event
            </label>
            <input
              type='date'
              name='date'
              id='date'
              className='profile-input'
              placeholder='Type here'
              onChange={(e) => setEventInputs(e.target.value, "date")}
            />
          </div>

          <div>
            <label className='profile-label-field' htmlFor='location'>
              Location of Event
            </label>
            <input
              type='text'
              name='location'
              id='location'
              className='profile-input'
              placeholder='Type here'
              onChange={(e) => setEventInputs(e.target.value, "location")}
            />
          </div>

          <div>
            <label className='profile-label-field' htmlFor='numberOfAttendees'>
              Event of How Many People?
            </label>
            <input
              type='number'
              name='numberOfAttendees'
              id='numberOfAttendees'
              className='profile-input'
              placeholder='Type here'
              onChange={(e) => setEventInputs(e.target.value, "numberOfAttendees")}
            />
          </div>

          <div>
            <label className='profile-label-field' htmlFor='field'>
              Which field did you speak for?
            </label>
            <input
              type='text'
              name='field'
              id='field'
              className='profile-input'
              placeholder='Type here'
              onChange={(e) => setEventInputs(e.target.value, "field")}
            />
          </div>

          <div>
            <label className='profile-label-field' htmlFor='image'>
              Event Image
            </label>
            <input
              type='file'
              name='image'
              id='image'
              className='profile-input'
              onChange={(e) => setEventInputs(e.target.files[0], "image")}
            />
          </div>
        </div>
        <Button
          type='button'
          className='edit'
          style={{ margin: "1rem auto" }}
          text1='Add Event'
          onClick={() => {
            saveNewEvent()
          }}
        ></Button>
      </div>
    </>
  )
}

export default AddNewEvent
