import React from "react"
import Button from "../Button/Button"
import { useState } from "react"
import useGatherInputFields from "../../../../hooks/useGatherInputFields"
import usePOstDataWithFormData from "../../../../hooks/usePOstDataWithFormData"
import Loader from "../../../../Components/Loader/Loader"

const AddNewEvent = ({ showModal, setShowModal }) => {
  const [newEventData, setNewEventData] = useState({})
  const { setEventInputs } = useGatherInputFields(setNewEventData)
  const { loading: isLoading, saveFormData } = usePOstDataWithFormData(newEventData, `api/profile/event/add`, "POST", "/dashboard")

  const saveNewEvent = async () => {
    saveFormData()
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
        {isLoading && <Loader />}

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
            <label className='profile-label-field' htmlFor='eventPhoto'>
              Event Image
            </label>
            <input
              type='file'
              name='eventPhoto'
              id='eventPhoto'
              className='profile-input'
              onChange={(e) => setEventInputs(e.target.files[0], "eventPhoto")}
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
