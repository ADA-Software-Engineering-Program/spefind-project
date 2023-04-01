import React from 'react'
import tick from './tick.png'
import './Congratulation.css'

const Congratulation2 = () => {
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
        The Speaker just approved your request and will be available to deliver 
an excellent presentation at your event. Proceed to make Payment. </p>
    </div>

    <div className="paragraph-two">
    Click on accept to approve and reject to disapprove the request. 
    </div>

<div className="buttons">
<button className='one'>Make Payment</button>
<button className='two'>Cancel Payment</button>
</div>


</div>
  )
}

export default Congratulation2