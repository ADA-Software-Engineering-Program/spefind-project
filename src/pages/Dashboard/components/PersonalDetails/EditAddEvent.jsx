import Button from "../Button/Button"

const EditAddEvent = ({ showModal, setShowModal, data }) => {
  console.log(data?.pastEvents?.titleOfEvent)

  return (
    <>
      <div
        className='addEventContainerModalOverlay'
        onClick={() => {
          setShowModal(!showModal)
        }}
      ></div>

      <div className='addEventContainer'>
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
              defaultValue={data?.pastEvents?.titleOfEvent}
            />
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
            setShowModal(!showModal)
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
