import { useState } from "react"
import "./SignIn.css"
import toast from "react-hot-toast"
import Header from "../Navbar/Navbar"

import { API_LINK } from "../../utils/api"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const response = await fetch(` ${API_LINK}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        sessionStorage.setItem("token", data.token)
        toast.success(`${data.message},`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
        setLoading(false)
      }
      if (!response) {
        setLoading(false)
        throw new Error()
      }
      if (!response.ok) {
        setLoading(false)
        throw new Error()
      }
      if (data.data.isProfileCreated === true) {
        window.location.href = "/dashboard"
      }
      if (data.data.isProfileCreated === false) {
        window.location.href = "/create-profile"
      }
      if (data.data.userRole === "organizer") {
        window.location.href = "/explore"
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)

      toast.error(`Something went wrong ! Please crosscheck your details and try again`, {
        duration: 5000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: ""
      })
    }
  }
  return (
    <div className='signInCont'>
      <Header />
      <h1 className='miss mt-5 mt-md-4'>We missed you!</h1>

      <form className='SignInForm' onSubmit={handleSubmit}>
        <label htmlFor='email' className='logLabel'>
          Email Address
        </label>
        <br />
        <input
          id='email'
          name='email'
          className='inputForm'
          type='email'
          autoComplete='username'
          required={true}
          placeholder='Email address'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password' className='logLabel'>
          Password
        </label>
        <br />
        <input
          id='password'
          className='inputForm'
          type='password'
          required={true}
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Type here'
        />
        <br />
        <div className='forgot'>
          <div className='d-flex align-items-center gap-2'>
            <input type='checkbox' name='loggedIn' id='loggedIn' className='check-keep' />
            <label className='keep' htmlFor='loggedIn'>
              <span></span>
            </label>
            <p className='mb-0'>Keep logged in</p>
          </div>
          <p className='fw-semibold'>Forgot Password? </p>
        </div>

        <button className='btn btnSign' type='submit' disabled={loading}>
          {loading ? "Signing In..." : "Submit"}
        </button>
      </form>

      <p className='new'>
        New here? <a href='/register'> Sign up</a>{" "}
      </p>
    </div>
  )
}

export default SignIn
