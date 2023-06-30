import Loader from "../../../../Components/Loader/Loader"
import Button from "../Button/Button"
import { API_LINK } from "../../../../utils/api"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const EditAddEvent = ({ showModal, setShowModal, data, id }) => {
  const navigate = useNavigate()
  const [eventData, setEventData] = useState(data?.pastEvents[0])
  const [loading, setLoading] = useState(false)

  const setEventInputs = (value, key) => {
    if (key === "image") {
      setEventData((prev) => ({
        ...prev,
        [key]: value,
        imageFile: value.name // Save the file name for display or other purposes
      }))
    } else {
      setEventData((prev) => ({
        ...prev,
        [key]: value
      }))
    }
  }

  const editEventDetailUpdateHandler = async () => {
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("image", eventData.image)
      formData.append("titleOfEvent", eventData.titleOfEvent)
      formData.append("date", eventData.date)
      formData.append("location", eventData.location)
      formData.append("numberOfAttendees", eventData.numberOfAttendees)
      formData.append("field", eventData.field)
      // console.log(eventData.image)

      // console.log(formData)
      // for (let pair of formData.entries()) {
      //   console.log(pair[0], pair[1])
      // }

      const token = sessionStorage.getItem("token")
      const updateEventData = await fetch(`${API_LINK}/api/profile/event/edit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(eventData)
        // body: formData
      })
      const response = await updateEventData.json()
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
        toast.success(`${response.message || response.msg}`, {
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
        <label className='profile-label'>ADD EVENTS*</label>
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
              defaultValue={data?.pastEvents[0]?.titleOfEvent}
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
              defaultValue={data?.pastEvents[0]?.date}
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
              defaultValue={data?.pastEvents[0]?.location}
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
              defaultValue={data?.pastEvents[0]?.numberOfAttendees}
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
              defaultValue={data?.pastEvents[0]?.field}
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
