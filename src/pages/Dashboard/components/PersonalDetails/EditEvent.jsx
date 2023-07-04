import Loader from "../../../../Components/Loader/Loader"
import Button from "../Button/Button"
import { API_LINK } from "../../../../utils/api"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const EditAddEvent = ({ showModal, setShowModal, data, id, index }) => {
  const navigate = useNavigate()

  const [eventData, setEventData] = useState(data?.pastEvents[index])
  const [loading, setLoading] = useState(false)

  // console.log(index)
  // console.log(id)
  const setEventInputs = (value, key) => {
    if (key === "eventPhoto") {
      setEventData((prev) => ({
        ...prev,
        [key]: value,
        eventPhoto: value // Save the file name for display or other purposes
      }))
    } else {
      setEventData((prev) => ({
        ...prev,
        [key]: value
      }))
    }
  }
  // console.log(data?.pastEvents[position]._id)
  const editEventDetailUpdateHandler = async () => {
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("titleOfEvent", eventData.titleOfEvent)
      formData.append("date", eventData.date)
      formData.append("location", eventData.location)
      formData.append("numberOfAttendees", eventData.numberOfAttendees)
      formData.append("field", eventData.field)
      // formData.append("eventPhoto", eventData.eventPhoto)

      // console.log(eventData.eventPhoto)
      // for (let pair of formData.entries()) {
      //   console.log(pair[0], pair[1])
      // }
      console.log(eventData)
      const token = sessionStorage.getItem("token")
      const updateEventData = await fetch(`${API_LINK}/api/profile/event/edit/${id}`, {
        method: "PATCH",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: formData
        // body: JSON.stringify(eventData)
      })
      // console.log(updateEventData)
      const response = await updateEventData.json()
      console.log(response)
      if (!updateEventData.ok || !updateEventData) {
        setLoading(false)
        toast.error(`${response?.message || response?.msg}` || "Something Went Wrong!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }

      if (updateEventData.ok) {
        setLoading(false)
        toast.success(`${response.message || response.msg}, please refresh the page to see your changes`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px", border: "2px solid green" },
          className: ""
        })
        setShowModal(!showModal)
        navigate("/dashboard")
        window.scrollTo(0, 0)
      }
      setLoading(false)
      //   console.log(response)
    } catch (error) {
      setLoading(false)
      console.log(error)
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
            // setShowModal(!showModal)
            editEventDetailUpdateHandler()
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
