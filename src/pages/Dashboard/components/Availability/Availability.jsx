import React, { useState } from "react"
import styles from "./Availability.module.css"
import Button from "../Button/Button"
import Loader from "../../../../Components/Loader/Loader"
import useFetchUserInfo from "../../../../hooks/useFetchUserInfo"

const Availability = () => {
  const [enableInput, setEnableInput] = useState(true)
  const [showOtherStates, setShowOtherStates] = useState(false)

  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)

  return (
    <form className={styles.availability}>
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

      <div>
        <label htmlFor='eventType'>Types of events you're interested in</label>
        {fetchedUserData?.eventType?.map((event, index) => {
          return (
            <>
              <div className='' key={index}>
                <input
                  type='checkbox'
                  aria-label={event}
                  id={event}
                  name={event}
                  className='check-checkbox'
                  disabled={enableInput}
                  defaultChecked={event === event}
                />
                <label htmlFor={event} className='check-label'>
                  <span className='check-checkbox-button'></span>
                  {event.charAt(0).toUpperCase() + event.slice(1)}
                </label>
              </div>
            </>
          )
        })}
        <button
          type='button'
          className={styles.editEvent}
          onClick={() => {
            setShowOtherStates(!showOtherStates)
          }}
          disabled={enableInput}
        >
          Add New
        </button>
        <input
          type='text'
          name='newEvent'
          id='newEvent'
          placeholder='Type new event here'
          className={showOtherStates ? "otherState-input displayBlock" : "otherState-input"}
        />
      </div>

      <div>
        <label htmlFor='availableTo'>Available To</label>
        {fetchedUserData?.availableTo?.map((availability, index) => {
          return (
            <>
              <div className='' key={index}>
                <input
                  type='checkbox'
                  aria-label={availability}
                  id={availability}
                  name={availability}
                  className='check-checkbox'
                  disabled={enableInput}
                  defaultChecked={availability === availability}
                />
                <label htmlFor={availability} className='check-label'>
                  <span className='check-checkbox-button'></span>
                  {availability.charAt(0).toUpperCase() + availability.slice(1)}
                </label>
              </div>
            </>
          )
        })}
        <button
          type='button'
          className={styles.editEvent}
          onClick={() => {
            setShowOtherStates(!showOtherStates)
          }}
          disabled={enableInput}
        >
          Add New
        </button>
        <input
          type='text'
          name='availableTo'
          id='availableTo'
          placeholder='Type new place here'
          className={showOtherStates ? "otherState-input displayBlock" : "otherState-input"}
          disabled={enableInput}
        />
      </div>

      <div>
        <label htmlFor='fee'>Fee</label>
        <div className=''>
          <input
            type='checkbox'
            aria-label={fetchedUserData?.pricing}
            id={fetchedUserData?.pricing}
            name='pricing'
            className='check-checkbox'
            defaultChecked={fetchedUserData?.pricing === fetchedUserData?.pricing}
            disabled={enableInput}
          />
          <label htmlFor={fetchedUserData?.pricing} className='check-label'>
            <span className='check-checkbox-button'></span>
            {fetchedUserData?.pricing}
          </label>
        </div>
        <button
          type='button'
          className={styles.editEvent}
          onClick={() => {
            setShowOtherStates(!showOtherStates)
          }}
          disabled={enableInput}
        >
          Add New
        </button>
        <input
          type='text'
          name='pricing'
          id='pricing'
          placeholder='Type new price here'
          disabled={enableInput}
          className={showOtherStates ? "otherState-input displayBlock" : "otherState-input"}
        />
      </div>

      <div>
        <label htmlFor='volunteer'>Would you love to volunteer?</label>
        <div className=''>
          <input
            type='radio'
            aria-label='volunteer'
            id='volunteerYes'
            name='volunteer'
            className='check-checkbox'
            disabled={enableInput}
            checked={fetchedUserData?.isVolunteer === "yes"}
          />
          <label htmlFor='volunteerYes' className='check-label'>
            <span className='check-checkbox-button'></span>Yes
          </label>
        </div>
        <div className=''>
          <input
            type='radio'
            aria-label='volunteer'
            id='volunteerNo'
            name='volunteer'
            className='check-checkbox'
            disabled={enableInput}
            checked={fetchedUserData?.isVolunteer === "no"}
          />
          <label htmlFor='volunteerNo' className='check-label'>
            <span className='check-checkbox-button'></span>No
          </label>
        </div>
      </div>

      <div className='editContainer'>
        <Button type='submit' text1='SAVE ' className='saveBtn' />
      </div>
    </form>
  )
}

export default Availability

// <div className=''>
//   <input
//     type='checkbox'
//     aria-label='Conference (Full-day
//   Event)'
//     id='Conference(FulldayEvent)'
//     name='Conference (Full-day
//   Event)'
//     className='check-checkbox'
//     disabled={enableInput}
//   />
//   <label htmlFor='Conference(FulldayEvent)' className='check-label'>
//     <span className='check-checkbox-button'></span>Conference (Full-day Event)
//   </label>
// </div>
// <div className=''>
//   <input
//     type='checkbox'
//     aria-label='Ogun'
//     id='Workshop(3+hourevent)'
//     name='Workshop (3+ hour event)'
//     className='check-checkbox'
//     disabled={enableInput}
//   />
//   <label htmlFor='Workshop(3+hourevent)' className='check-label'>
//     <span className='check-checkbox-button'></span>Workshop (3+ hour event)
//   </label>
// </div>
// <div className=''>
//   <input type='checkbox' aria-label='Moderator' id='Moderator' name='Moderator' className='check-checkbox' disabled={enableInput} />
//   <label htmlFor='Moderator' className='check-label'>
//     <span className='check-checkbox-button'></span>Moderator
//   </label>
// </div>
// <div className=''>
//   <input
//     type='checkbox'
//     aria-label='Webinar (virtual event)'
//     id='Webinar(virtual event)'
//     name='Webinar(virtual event)'
//     className='check-checkbox'
//     disabled={enableInput}
//   />
//   <label htmlFor='Webinar(virtual event)' className='check-label'>
//     <span className='check-checkbox-button'></span>Webinar (virtual event)
//   </label>
// </div>
// <div className=''>
//   <input type='checkbox' aria-label='School' id='School' name='School' className='check-checkbox' disabled={enableInput} />
//   <label htmlFor='School' className='check-label'>
//     <span className='check-checkbox-button'></span>School
//   </label>
// </div>
