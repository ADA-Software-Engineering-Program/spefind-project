import { useState, useEffect } from "react"
import "./SignIn.css"
import toast from "react-hot-toast"
import Header from "../Navbar/Navbar"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/auth-slice"
import { API_LINK } from "../../utils/api"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import mixpanel from "mixpanel-browser"
import { ROUTE_NAMES } from "../../utils/constants"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      // console.log(data)
      if (response.ok) {
        sessionStorage.setItem("token", data.token)
        toast.success(`${data.message},`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
        data.data.isProfileCreated === true && navigate(ROUTE_NAMES.DASHBOARD, { state: null, replace: true })
        data.data.isProfileCreated === false && navigate(ROUTE_NAMES.CREATE_PROFILE, { state: null, replace: true })
        dispatch(authActions.setIsLoggedIn())
        setLoading(false)

        mixpanel.identify(data?.data?.email)

        mixpanel.track("Sign In", {
          signInTime: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" }),
          userName: data?.data?.email,
          userRole: data?.data?.userRole,
          isProfileCreated: data?.data?.isProfileCreated
        })
      }
      if (!response) {
        setLoading(false)
        throw new Error()
      }
      if (!response.ok) {
        setLoading(false)
        throw new Error()
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)

      toast.error(`Something went wrong ! Please cross check your details and try again`, {
        duration: 5000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: ""
      })
    }
  }
  // check if user is logged in or not
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  useEffect(() => {
    isAuthenticated && navigate("/dashboard")
    mixpanel.init("f70c5b20ede9fa1fafe32f3c5c187ce2", { debug: true, track_pageview: true, persistence: "localStorage" })
  }, [])
  return (
    <div className='signInCont'>
      <Header />
      <h1 className='miss mt-5 mt-md-4'>We missed you!</h1>

      <form className='SignInForm'>
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

        <button className='btn btnSign' type='submit' disabled={loading} onClick={handleSubmit}>
          {loading ? "Signing In..." : "Submit"}
        </button>
      </form>

      <p className='new'>
        New here? <Link to='/signup'> Sign up</Link>
      </p>
    </div>
  )
}

export default SignIn
