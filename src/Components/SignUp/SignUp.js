import React from "react"
import { Link } from "react-router-dom"
import "./SignUp.css"
import Navbar from "../Navbar/Navbar"

function SignUp() {
  return (
    <div className='signup vh-100'>
      <Navbar />
      <div className='d-flex justify-content-center align-items-center signup-cont h-100'>
        <div className='px-3 mt-5'>
          <div>
            <h1 className='welcome-header text-center'>Welcome!</h1>
            <p className='welcome-text text-center'>Your very first step to ease and convenience </p>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-4 flex-wrap btn-cont'>
            <Link to='/register' class='btn-signup'>
              Communicator
            </Link>

            <Link to='/event-register' class='btn-signup'>
              Event Organizer
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
