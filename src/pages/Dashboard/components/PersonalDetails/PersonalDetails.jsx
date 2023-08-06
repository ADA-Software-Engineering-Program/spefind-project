/* eslint-disable react/no-unknown-property */
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
import usePostUserInfo from "../../../../hooks/usePostUserInfo"
import useGatherInputFields from "../../../../hooks/useGatherInputFields"
import useUploadImage from "../../../../hooks/useUploadImage"
import Confirmation from "./Modal/Confirmation"

const PersonalDetails = () => {
  const [enableInput, setEnableInput] = useState(true)
  const [addNewEvent, setAddNewEvent] = useState(false)
  const [newEventComponent, setNewEventComponent] = useState(false)
  const [selectedEventIndex, setSelectedEventIndex] = useState(null)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [eventId, setEventId] = useState("")
  const [inputDatas, setInputDatas] = useState()

  const { setEventInputs } = useGatherInputFields(setInputDatas)
  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)
  const { apiCallHandler: deleteEventHandler, loading: deleteDataIsLoading } = usePostUserInfo(
    `api/profile/event/delete?eventId=${eventId}`,
    "DELETE"
  )
  const { apiCallHandler: editUserDataHandler, loading: editUserDataIsLoading } = usePostUserInfo(`api/profile/update`, "PUT", inputDatas)
  const { uploadImageHandler: handleImageUpload, imageIsUploadLoading: uploadImageIsLoading } = useUploadImage(
    "bannerCover",
    "api/profile/cover/banner",
    "PUT"
  )
  const { uploadImageHandler: handleProfilePictureImageUpload, imageIsUploadLoading: profilePictureIsUploading } = useUploadImage(
    "photo",
    "api/profile/update",
    "PUT"
  )
  const confirmBoxShowHandler = (message, yesHandler, noHandler) => {
    return <Confirmation message={message} yesHandler={yesHandler} noHandler={noHandler} />
  }

  return (
    <div className='formContainer'>
      {(loading || deleteDataIsLoading || editUserDataIsLoading || uploadImageIsLoading || profilePictureIsUploading) && <Loader />}
      {isConfirmed &&
        confirmBoxShowHandler(
          "Are you sure you want to delete this event ?",
          () => {
            deleteEventHandler()
            setIsConfirmed(!isConfirmed)
          },
          () => {
            setIsConfirmed(!isConfirmed)
          }
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
      <form>
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
            id={fetchedUserData?.gender}
            type='radio'
            aria-label={fetchedUserData?.gender}
            className='check-checkbox'
            value={fetchedUserData?.gender}
            checked={fetchedUserData?.gender === fetchedUserData?.gender}
            name={"gender"}
            readOnly
          />
          <label className='check-label' htmlFor={fetchedUserData?.gender}>
            <span className='check-checkbox-button'></span>
            {fetchedUserData?.gender?.charAt(0).toUpperCase() + fetchedUserData?.gender?.slice(1)}
          </label>
        </div>
        <div>
          <label htmlFor='coverBanner'>Cover Banner and Profile Picture</label>
        </div>

        <div className='coverBannerAndProfilePicture'>
          <div className='coverBannerContainer'>
            <div className=''>
              <img src={fetchedUserData?.coverBanner ? fetchedUserData?.coverBanner : coverBanner} alt=' cover banner of the speaker' />
              <input
                type='file'
                name='coverBanner'
                id='coverBanner'
                aria-label='cover banner'
                accept='image/*'
                className='selectFile'
                disabled={enableInput}
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <div className='editProfilePicture'>
            <img src={fetchedUserData?.photo ? fetchedUserData?.photo : userImg} alt=' profile avatar' />
            <div className='btnWrapper'>
              <button type='button' className='btn'>
                Remove
              </button>
              <input
                type='file'
                name='profilePicture'
                id='profilePicture'
                accept='image/*'
                arial-label='profile Picture'
                className='changeProfilePicture'
                disabled={enableInput}
                onChange={handleProfilePictureImageUpload}
              />
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
            onChange={(e) => {
              setEventInputs(e.target.value, "country")
            }}
          />
          <input
            aria-label='city'
            placeholder='Type City'
            id='city'
            className='input'
            disabled={enableInput}
            defaultValue={fetchedUserData?.city}
            onChange={(e) => {
              setEventInputs(e.target.value, "city")
            }}
          />
        </div>
        <div>
          <label htmlFor='biography'>Biography</label>
        </div>
        <textarea
          placeholder='Type here'
          className='textArea'
          id='biography'
          rows={10}
          disabled={enableInput}
          defaultValue={fetchedUserData?.biography}
          onChange={(e) => {
            setEventInputs(e.target.value, "biography")
          }}
        ></textarea>

        <div>
          <label htmlFor='pastevents'>Past Events</label>
        </div>

        {fetchedUserData?.pastEvents?.length > 0 ? (
          fetchedUserData?.pastEvents?.map((event, index) => (
            <div className='pastEventsCointainer' key={index}>
              <div className='events'>
                <div className=''>
                  <img src={event.eventPhoto} alt='past event image' />
                </div>
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
                disabled={enableInput}
              >
                + Edit Event
              </button>
              <AiFillDelete
                className='delete'
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

        <div className='saveAndEdit'>
          <Button
            type='button'
            onClick={() => {
              setNewEventComponent(!newEventComponent)
            }}
            text1=' + Add New Event'
          />

          <Button type='button' text1='SAVE ' className='saveBtn' onClick={editUserDataHandler} />
        </div>

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
      </form>
    </div>
  )
}
export default PersonalDetails
