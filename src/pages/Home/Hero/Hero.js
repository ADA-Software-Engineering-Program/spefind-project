import React from "react"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import microphone from "../../../images/microphone-21.jpg"
// import microphone from "../../images/microphone.png";
import "./Hero.css"

function Hero() {
  return (
    <div className='heroContainer'>
      <div className='heroText'>
        <p className='speakers'>Connecting Events, Amplifying Voices.</p>
        <h2 className='heroTextHeading'>
          genius comes in all <span className='heroColor'>colours</span>
        </h2>
        <p className='heroTextSubHeading'>
          Find the perfect communicator for your next event from our pool of diverse and highly curated selection of communicators, ranging
          from motivational speakers to niche-specific speakers, thought leaders, and performing artists. No matter your industry or the
          uniqueness of your event, we&apos;ve got someone for you.
        </p>

        <div>
          <Link to='/signup' className='getBtn d-flex align-items-center'>
            Start for Free
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className='heroImage'>
        <img src={microphone} alt='speakers' className='' />
      </div>
    </div>
  )
}

export default Hero
