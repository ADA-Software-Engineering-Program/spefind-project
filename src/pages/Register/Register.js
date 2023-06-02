import React, { useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router-dom"

import Logo from "./logo new 1 2.png"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import toast from "react-hot-toast"

import useInput from "../../hooks/useInput"
import styles from "./Register.module.css"

import AppLayout from "../../layout/AppLayout"
import { API_LINK } from "../../utils/api"

function Register() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const handleGoogleSignUp = async () => {
    try {
      // await googleSignIn()
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
  const {
    value: firstNameInputValue,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput((value) => value.length >= 3 && value.trim() !== "")
  const {
    value: lastNameInputValue,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput((value) => value.length >= 3 && value.trim() !== "")

  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const {
    value: emailInputvalue,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes("@") && value.match(emailRegex))
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/
  const {
    value: passwordInputValue,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput
  } = useInput((value) => value.length >= 6 && value.trim() !== "" && value.match(passwordRegex))

  const {
    value: confirmPasswordInputValue,
    isValid: enteredconfirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPasswordInput
  } = useInput(
    (value) => value.trim() !== "" && value.length >= 6 && value.trim().match(passwordInputValue) && value.trim() === passwordInputValue
  )

  let formIsValid = false

  if (
    emailInputvalue &&
    !emailInputHasError &&
    enteredEmailIsValid &&
    passwordInputValue &&
    !passwordInputHasError &&
    enteredPasswordIsValid &&
    confirmPasswordInputValue &&
    !confirmPasswordInputHasError &&
    enteredconfirmPasswordIsValid &&
    firstNameInputValue &&
    !firstNameInputHasError &&
    enteredFirstNameIsValid &&
    lastNameInputValue &&
    !lastNameInputHasError &&
    enteredLastNameIsValid
  ) {
    formIsValid = true
  }

  const signUpSubmitHandler = async (e) => {
    setLoading(true)
    try {
      e.preventDefault()

      if (!formIsValid) {
        setLoading(false)
        return
      }

      if (!emailInputvalue && !passwordInputValue && !confirmPasswordInputValue && !firstNameInputValue && !lastNameInputValue) {
        setLoading(false)
        return
      }

      const saveUserData = await fetch(`${API_LINK}/api/auth/speaker/signup`, {
        method: "POST",
        body: JSON.stringify({
          firstName: firstNameInputValue,
          lastName: lastNameInputValue,
          email: emailInputvalue,
          password: passwordInputValue
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      setLoading(true)
      console.log(saveUserData)

      const data = await saveUserData.json()
      console.log(data)

      if (saveUserData.ok) {
        sessionStorage.setItem("token", data.token)
        setLoading(false)
        formIsValid = false

        toast.success(`${data.message}, " Please complete your registration"`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
        navigate("/create-profile")
      }

      if (!saveUserData.ok) {
        setLoading(false)
        formIsValid = false

        toast.error(`${data.message},`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
        throw new Error()
      }
      if (!saveUserData) {
        setLoading(false)
        formIsValid = false

        throw new Error()
      }
      resetFirstNameInput()
      resetLastNameInput()
      resetEmailInput()
      resetPasswordInput()
      resetConfirmPasswordInput()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppLayout>
      <div className='Bg-img w-100 min-vh-100'>
        <div className='regCont w-100 d-flex mx-auto align-items-center justify-content-md-between justify-content-center'>
          <div className='regLogoCont mw-100'>
            <img src={Logo} alt='spefind logo' className='w-100' />
          </div>

          <form className='JoinForm' onSubmit={signUpSubmitHandler}>
            <div className='w-100 mb-4' style={{ display: "flex", gap: "1rem" }}>
              <div>
                <label className='labelForm'>First Name</label>
                <input
                  type='text'
                  name='firstName'
                  required
                  className={firstNameInputHasError ? `${styles.invalidInput} regInput mb-0` : "regInput mb-0"}
                  placeholder='Type Here'
                  value={firstNameInputValue}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                />
                {firstNameInputHasError && !enteredFirstNameIsValid && (
                  <p className={styles.errorText}>Please enter at least 3 letters !</p>
                )}
              </div>
              <div>
                <label className='labelForm'>Last Name</label>
                <input
                  type='text'
                  name='lastName'
                  required
                  className={lastNameInputHasError ? `${styles.invalidInput} regInput mb-0` : "regInput mb-0"}
                  placeholder='Type here'
                  value={lastNameInputValue}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameInputHasError && !enteredLastNameIsValid && <p className={styles.errorText}>Please enter at least 3 letters !</p>}
              </div>
            </div>

            <div className='w-100 mb-4'>
              <label className='labelForm'>E-mail Address</label>
              <input
                type='email'
                name='email'
                required
                className={emailInputHasError ? `${styles.invalidInput} regInput mb-0` : "regInput mb-0"}
                placeholder='Email address'
                value={emailInputvalue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailInputHasError && !enteredEmailIsValid && <p className={styles.errorText}>Please enter a valid email !</p>}
            </div>

            <div className='w-100 mb-4'>
              <label className='labelForm'>Password</label>
              <input
                type='password'
                label='Create password'
                name='password'
                required
                className={passwordInputHasError ? `${styles.invalidInput} regInput mb-0` : "regInput mb-0"}
                placeholder='Password'
                value={passwordInputValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordInputHasError && !enteredPasswordIsValid && (
                <p className={styles.errorText}>
                  Password must be greater than 6 characters, and must contain at least 1 lowercase, 1 uppercase, 1 number and one special
                  character !
                </p>
              )}
            </div>

            <div className='w-100 mb-4'>
              <label className='labelForm'>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm password'
                required
                className={confirmPasswordInputHasError ? `${styles.invalidInput} regInput mb-0` : "regInput mb-0"}
                name='confirmPassword'
                value={confirmPasswordInputValue}
                onChange={confirmPasswordChangeHandler}
                onBlur={confirmPasswordBlurHandler}
              />
              {confirmPasswordInputHasError && !enteredconfirmPasswordIsValid && (
                <p className={styles.errorText}>Passwords do not match !</p>
              )}
            </div>

            <div className='w-100 mb-4'>
              <button className=' btn btnSign-up' type='submit' disabled={!formIsValid && !loading}>
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </div>

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
    </AppLayout>
  )
}

export default Register
