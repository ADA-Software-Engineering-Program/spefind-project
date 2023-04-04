import React from 'react'
import tick from './tick.png'
import './Congratulation.css'
const Congratulation = () => {
  return (
    <div className='congratulation'>
        <div className="header">
            <h1>Congratulations!</h1>
        </div>
        <div className="tick">
            <img src={tick} alt="" />
        </div>
        <div className="paragraph">
            <p>
            You have a booking request! Let the Event Coordinator know 
if you will be available to speak at the event by clicking on Accept. </p>
        </div>

        <div className="paragraph-two">
        Click on accept to approve and reject to disapprove the request. 
        </div>

<div className="buttons">
    <button className='one'>Accept</button>
    <button className='two'>Reject</button>
</div>


    </div>
  )
}

export default Congratulation