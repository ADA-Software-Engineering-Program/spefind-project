import React, { useState } from "react"
import { Link } from "react-router-dom"
import footerLogo2 from "../../images/spefind-logo-white.png"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import toast from "react-hot-toast"

import useInput from "../../hooks/useInput"
import { API_LINK } from "../../utils/api"

function Footer() {
  const [loading, setLoading] = useState(false)

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

  let formIsValid = false

  if (emailInputvalue && !emailInputHasError && enteredEmailIsValid) {
    formIsValid = true
  }
  const emailSubscriptionHandler = async (e) => {
    setLoading(true)
    try {
      e.preventDefault()
      if (!formIsValid) {
        setLoading(false)
        return
      }
      if (!emailInputvalue) {
        setLoading(false)
        return
      }
      const saveUserEmail = await fetch(`${API_LINK}/api/news/letter/subscribe`, {
        method: "POST",
        body: JSON.stringify({
          email: emailInputvalue
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      setLoading(true)
      const data = await saveUserEmail.json()
      // console.log(data);
      if (saveUserEmail.ok) {
        setLoading(false)

        toast.success(`${data.message}`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      if (!saveUserEmail.ok) {
        setLoading(false)
        throw new Error("Something went wrong!")
      }
      if (!saveUserEmail) {
        setLoading(false)
        throw new Error("Please try again!")
      }
      resetEmailInput()
    } catch (error) {
      toast.error("Something went wrong! Please try again!", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: ""
      })
      resetEmailInput()
      setLoading(false)
    }
  }
  return (
    <section className='text-center justify-content-center footer'>
      <div className='btns p-5'>
        <Link to={"/"} className='btn btn-md eventBtn'>
          Event Organizer
        </Link>
        <Link to={"/"} className='btn btn-md eventBtn eventBtn1'>
          Speaker
        </Link>
      </div>

      <div className='px-3'>
        <form action='#' className='bg-white footerForm px-3'>
          <h5 className='news my-auto'>Subscribe to our newsletter</h5>
          <div className='d-flex gap-3'>
            <div className='footerInCont'>
              <input
                type='text'
                placeholder='Enter your email'
                className={emailInputHasError ? "invalidInput" : "footerInput"}
                // className="invalidInput"
                name='email'
                value={emailInputvalue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
            </div>
            <button type='submit' className='btn footBtn my-auto' disabled={!formIsValid && !loading} onClick={emailSubscriptionHandler}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {emailInputHasError && !enteredEmailIsValid && <p className={"errorText"}>Please enter a valid email !</p>}
        </form>
      </div>

      <div className='footerNav mx-auto w-75'>
        <div className='col-12 col-md-4 text-start'>
          <h6 className='fw-bold text-white'>NAVIGATION</h6>
          <ul className='list-unstyled'>
            <li className='mb-2'>
              <Link to={"/"} className='text-decoration-none text-white'>
                Home
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"/about"} className='text-decoration-none text-white'>
                About
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"/explore"} className='text-decoration-none text-white'>
                Explore
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"/blog"} className='text-decoration-none text-white'>
                Blog
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"/contact"} className='text-decoration-none text-white'>
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/login"} className='text-decoration-none text-white'>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-12 col-md-4 text-start'>
          <h6 className='fw-bold text-white'>LEGAL</h6>
          <ul className='list-unstyled'>
            <li className='mb-2'>
              <Link to={"/"} className='text-decoration-none text-white'>
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link to={"/"} className='text-decoration-none text-white'>
                Terms of service
              </Link>
            </li>
          </ul>
        </div>

        <div className='col-12 col-md-4 text-start'>
          <h6 className='fw-bold text-white'>TALK TO US</h6>
          <ul className='list-unstyled'>
            <li className='mb-2'>
              <Link to={"mailto:infospefind@gmail.com"} className='text-decoration-none text-white'>
                infospefind@gmail.com
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"tel:+2347059592726"} className='text-decoration-none text-white'>
                +2347059592726
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"/"} className='text-decoration-none text-white'>
                Contact Us
              </Link>
            </li>
            <li className='mb-2'>
              <Link
                to={"https://www.facebook.com/profile.php?id=100091891911041"}
                target='_blank'
                className='text-decoration-none text-white'
              >
                Facebook
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"https://www.linkedin.com/company/spefind/"} target='_blank' className='text-decoration-none text-white'>
                Linkedin
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"https://twitter.com/SpefindHq"} target='_blank' className='text-decoration-none text-white'>
                Twitter
              </Link>
            </li>
            <li className='mb-2'>
              <Link to={"https://www.instagram.com/spefindhq/"} target='_blank' className='text-decoration-none text-white'>
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='copySection mt-5  px-3 px-md-5'>
        <div className='footerLogo'>
          <img src={footerLogo2} alt='logo' className='w-100' />
        </div>
        <div className='mt-3 mt-md-0'>
          <p className='text-white copyRight'>&copy; {new Date().getFullYear()} Spefind. All right reserved.</p>
        </div>
        <div className='socialMedia mt-3 mt-md-0'>
          <div className='icon'>
            <Link
              to={"https://www.facebook.com/profile.php?id=100091891911041"}
              target='_blank'
              className='text-decoration-none text-white'
            >
              <FaFacebookF className='social' />
            </Link>
          </div>
          <div className='icon'>
            <Link to={"https://www.linkedin.com/company/spefind/"} target='_blank' className='text-decoration-none text-white'>
              <FaLinkedinIn className='social' />
            </Link>
          </div>
          <div className='icon'>
            <Link to={"https://twitter.com/SpefindHq"} target='_blank' className='text-decoration-none text-white'>
              <FaTwitter className='social' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
