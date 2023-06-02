import React, { useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router-dom"
import Logo from "../../images/footerLogo.png"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import toast from "react-hot-toast"
import { useFormik } from "formik"
import { useAuth } from "../../contexts/AuthContext"

function Register() {
  const navigate = useNavigate()

  const { signup, googleSignIn } = useAuth()
  const [loading, setLoading] = useState(false)

  //form submit function
  const onSubmit = async (values) => {
    setLoading(true)
    await signup(values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        setLoading(false)
        toast.success("Registration Successful, Please complete your registration", {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
        navigate("/create-profile")
      })
      .catch((error) => {
        const errorCode = error.code
        toast.error(errorCode)
        setLoading(false)
      })
  }

  //form validation
  const validate = (values) => {
    const errors = {}

    if (!values.password) {
      errors.password = "Required"
    } else if (values.password.length < 6) {
      errors.password = "Must be more than 6 characters"
    } else if (values.password.includes(" ")) {
      errors.password = "Invalid Password"
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Required"
    } else if (values.password.length < 6) {
      errors.confirmPassword = "Must be more than 6 characters"
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Confirm password is incorrect"
    } else if (values.confirmPassword.includes(" ")) {
      errors.confirmPassword = "Invalid Password"
    }

    if (!values.email) {
      errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address"
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    validate,
    onSubmit
  })

  const handleGoogleSignUp = async () => {
    try {
      await googleSignIn()
      toast.success("Registration Successful, Please complete your registration", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: ""
      })
      navigate("/create-profile")
    } catch (error) {
      return null
    }
  }

  return (
    <div>
      <div className='Bg-img'>
        <img src={Logo} alt='Logo' className='regLogo' />
        <form className='JoinForm' onSubmit={formik.handleSubmit}>
          <div className='ovalBG'></div>
          {/* <div className="NameCard">
                    <div className="me-3 mt-1">
                        <label className="labell">First Name</label><br/>
                        <input 
                          type="text" 
                          placeholder="First Name"  
                          className="regInput1" 
                          name='firstName'
                          {...formik.getFieldProps('firstName')}
                          required
                        />
                    { formik.errors.firstName ? <div className='text-danger mb-3 ' style={{fontSize: '0.7rem', textAlign: 'left', fontWeight: 'bold'}}>{ formik.errors.firstName }</div> : null }
                    </div>

                    <div className="mt-1">
                        <label className="labell">Last Name</label><br/>
                        <input 
                        type="text" 
                        placeholder="Last Name"  
                        className="regInput1" 
                        name='lastName'
                          {...formik.getFieldProps('lastName')}
                        required
                        />
                    { formik.errors.lastName ? <div className='text-danger mb-3 ' style={{fontSize: '0.7rem', textAlign: 'left', fontWeight: 'bold'}}>{ formik.errors.lastName }</div> : null }
                    </div>
                </div> */}
          <div>
            <label className='labelForm'>E-mail Address</label>
            <input type='email' name='email' {...formik.getFieldProps("email")} className='regInput mb-0' placeholder='Email address' />
            {formik.errors.email ? (
              <div
                className='text-danger mb-1'
                style={{
                  fontSize: "0.7rem",
                  textAlign: "left",
                  fontWeight: "bold"
                }}
              >
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div>
            <label className='labelForm'>Password</label>
            <input
              type='password'
              label='Create password'
              name='password'
              {...formik.getFieldProps("password")}
              required
              className='regInput'
              placeholder='Password'
            />
            {formik.errors.password ? (
              <div
                className='text-danger mb-1'
                style={{
                  fontSize: "0.7rem",
                  textAlign: "left",
                  fontWeight: "bold"
                }}
              >
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div>
            <label className='labelForm'>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm password'
              className='regInput'
              name='confirmPassword'
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.errors.confirmPassword ? (
              <div
                className='text-danger mb-1'
                style={{
                  fontSize: "0.7rem",
                  textAlign: "left",
                  fontWeight: "bold"
                }}
              >
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          <button className=' btn btnSign-up' type='submit'>
            {loading ? "Signing up..." : "Sign up"}
          </button>
          <p className='or'>OR</p>

          <div className='regIcon'>
            <FcGoogle className='regSocial' onClick={handleGoogleSignUp} style={{ cursor: "pointer" }} />
            <FaFacebookF className='regSocial text-primary' />
            <FaTwitter className='regSocial text-primary' />
          </div>
          <p className='acct'>
            Already have an account? <a href='/login'>Sign in</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
