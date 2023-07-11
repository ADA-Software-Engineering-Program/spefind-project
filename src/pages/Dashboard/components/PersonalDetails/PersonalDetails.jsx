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
// import usePOstDataWithFormData from "../../../../hooks/usePOstDataWithFormData"
import { API_LINK } from "../../../../utils/api"
import Confirmation from "./Modal/Confirmation"
import { toast } from "react-hot-toast"

const PersonalDetails = () => {
  // const [enableInput, setEnableInput] = useState(true)
  const [addNewEvent, setAddNewEvent] = useState(false)
  const [newEventComponent, setNewEventComponent] = useState(false)
  const [selectedEventIndex, setSelectedEventIndex] = useState(null)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [eventId, setEventId] = useState("")
  const [inputDatas, setInputDatas] = useState()
  const [imageIsUploadLoading, setImageIsUploadLoading] = useState(false)
  // const [imagefile, setImageFile] = useState(null)

  const { apiCallHandler: editUserDataHandler, loading: editDataIsLoading } = usePostUserInfo(`api/profile/setup`, "PUT", inputDatas)
  const { apiCallHandler: deleteEventHandler, loading: deleteDataIsLoading } = usePostUserInfo(
    `api/profile/event/delete?eventId=${eventId}`,
    "DELETE"
  )
  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)
  const { setEventInputs } = useGatherInputFields(setInputDatas)

  const editUserData = () => {
    console.log(inputDatas)
    editUserDataHandler()
  }
  // const { loading: isLoading, saveFormData } = usePOstDataWithFormData(null, `api/profile/event/cover/banner`, "PUT", "/dashboard")
  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0]
  //   console.log(file)
  //   if (file) {
  //     saveFormData(file)
  //   }
  // }

  const handleImageUpload = async (e) => {
    try {
      setImageIsUploadLoading(true)
      let formdata = new FormData()
      formdata.append("bannerCover", e.target.files[0])

      const token = sessionStorage.getItem("token")
      const response = await fetch(`${API_LINK}/api/profile/cover/banner`, {
        method: "PUT",
        body: formdata,
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (!response.ok || !response) {
        setImageIsUploadLoading(false)
        toast.error(`${data?.msg || data?.message}` || "Something Went Wrong!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      if (response.ok) {
        setImageIsUploadLoading(false)
        toast.success(`${data?.msg || data?.message}` || " please refresh the page to see your changes", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
        setImageIsUploadLoading(false)
        window.scrollTo(0, 0)
      }
      // console.log(data)
    } catch (error) {
      setImageIsUploadLoading(false)
      toast.error("Something Went Wrong!", {
        duration: 4000,
        position: "top-center",
        // Styling
        style: { fontSize: "13px" },
        className: ""
      })
      console.log(error)
    }
  }
  const confirmBoxShowHandler = (message, yesHandler, noHandler) => {
    return <Confirmation message={message} yesHandler={yesHandler} noHandler={noHandler} />
  }

  return (
    <div className='formContainer'>
      {(loading || editDataIsLoading || deleteDataIsLoading || imageIsUploadLoading) && <Loader />}
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
      {/* <div className='editContainer'>
        <Button
          text1={enableInput ? "Click to make your profile editable" : "Go ahead and edit the input fields now 😎"}
          className='edit'
          type='button'
          onClick={() => {
            setEnableInput(!enableInput)
          }}
        />
      </div> */}
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
            id='male'
            type='radio'
            aria-label='male'
            className='check-checkbox'
            value={"male"}
            checked={fetchedUserData?.gender === "male"}
            name={"gender"}
            readOnly
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
            readOnly
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
            readOnly
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
            <div className=''>
              <img src={fetchedUserData?.coverBanner ? fetchedUserData?.coverBanner : coverBanner} alt=' cover banner of the speaker' />
              <input
                type='file'
                name='coverBanner'
                id='coverBanner'
                aria-label='cover banner'
                accept='image/*'
                className='selectFile'
                onChange={handleImageUpload}
              />
            </div>
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

          <Button type='button' text1='SAVE ' className='saveBtn' onClick={editUserData} />
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
