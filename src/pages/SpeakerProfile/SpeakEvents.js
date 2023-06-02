import React from "react"
import "./SpeakerProfile.css"

const SpeakEvents = ({ eventPics }) => {
  return (
    <div className='text-start'>
      <picture>
        <img src={eventPics} alt='Events' className='img-responsive eventPics' />
      </picture>
      <h4 className='speakEventTitle'>Led the #mychoice women rally</h4>
      <span className='speakEventP'>Jun 02, 2020</span>
      <br />
      <span className='speakEventP'>Lagos, Nigeria</span>
    </div>
  )
}

export default SpeakEvents
