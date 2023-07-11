import Loader from "../../../../Components/Loader/Loader"
import Button from "../Button/Button"
import { useState } from "react"

import Confirmation from "./Modal/Confirmation"
import usePOstDataWithFormData from "../../../../hooks/usePOstDataWithFormData"
import useGatherInputFields from "../../../../hooks/useGatherInputFields"

const EditAddEvent = ({ showModal, setShowModal, data, id, index }) => {
  const [eventData, setEventData] = useState(data?.pastEvents[index])
  const [isConfirmed, setIsConfirmed] = useState(false)

  const { setEventInputs } = useGatherInputFields(setEventData)
  const { loading: isLoading, saveFormData: editEventDetailUpdateHandler } = usePOstDataWithFormData(
    eventData,
    `api/profile/event/edit/${id}`,
    "PATCH",
    "/dashboard"
  )
  const editEventDataHandler = () => {
    editEventDetailUpdateHandler()
    setShowModal(!showModal)
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
        {isConfirmed && (
          <Confirmation
            message={"Are you sure you want to perform this action?"}
            yesHandler={editEventDataHandler}
            noHandler={() => {
              setIsConfirmed(!isConfirmed)
            }}
          />
        )}
        <label className='profile-label'>EDIT PREVIOUS EVENTS*</label>
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
              defaultValue={data?.pastEvents[index]?.titleOfEvent}
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
              defaultValue={data?.pastEvents[index]?.date}
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
              defaultValue={data?.pastEvents[index]?.location}
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
              defaultValue={data?.pastEvents[index]?.numberOfAttendees}
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
              defaultValue={data?.pastEvents[index]?.field}
              onChange={(e) => setEventInputs(e.target.value, "field")}
            />
          </div>

          <div>
            <label className='profile-label-field' htmlFor='eventPhoto'>
              Event Image
            </label>
            <img style={{ width: "4rem", height: "2rem" }} src={data?.pastEvents[index]?.eventPhoto} alt='event' />
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
          onClick={() => {
            setIsConfirmed(true)
          }}
          className='edit'
          style={{ margin: "1rem auto" }}
          text1='Done'
        ></Button>
      </div>
    </>
  )
}

export default EditAddEvent
