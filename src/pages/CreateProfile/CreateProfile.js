import React, { useEffect, useState, useRef } from "react"
import "./CreateProfile.css"
import AppLayout from "../../layout/AppLayout"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { useFormik } from "formik"
import Personal from "./Personal"
import Niche from "./Niche"
import Availability from "./Availability"
import Visibility from "./Visibility"
import Steppers from "./Steppers"
import validate from "./Validate"
import { API_LINK } from "../../utils/api"

const CreateProfile = () => {
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [error, setError] = useState("")
  const [neededData, setNeededData] = useState({
    eventTypes: [],
    availableToStates: [],
    price: [],
    fieldOptions: [],
    firstName: "",
    lastName: ""
  })

  const dataFetch = async () => {
    try {
      const getEventTypeData = await fetch(`${API_LINK}/api/event/type/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const eventTypeData = await getEventTypeData.json()
      // console.log(eventTypeData.data);
      const neededEventTypesArray = eventTypeData.data.slice(-6)
      setNeededData((prevData) => ({
        ...prevData,
        eventTypes: neededEventTypesArray
      }))

      const getAvailableToData = await fetch(`${API_LINK}/api/state/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const availableToData = await getAvailableToData.json()
      // console.log(availableToData);
      const neededAvailableToDataArray = availableToData.data.slice(-6)
      setNeededData((prevData) => ({
        ...prevData,
        availableToStates: neededAvailableToDataArray
      }))

      const getPriceData = await fetch(`${API_LINK}/api/pricing/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const priceData = await getPriceData.json()
      // console.log(priceData.data);
      const neededPriceArray = priceData.data.slice(-5)
      setNeededData((prevData) => ({
        ...prevData,
        price: neededPriceArray
      }))

      const getSpeakerFieldOption = await fetch(`${API_LINK}/api/field/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      // console.log(getSpeakerFieldOption);
      const speakerFieldOption = await getSpeakerFieldOption.json()
      // console.log(speakerFieldOption.data);
      setNeededData((prevData) => ({
        ...prevData,
        fieldOptions: speakerFieldOption.data
      }))

      const token = sessionStorage.getItem("token")
      const getUserData = await fetch(`${API_LINK}/api/profile/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      // console.log(getUserData);
      const userData = await getUserData.json()
      // console.log(userData.user);
      setNeededData((prevData) => ({
        ...prevData,
        firstName: userData?.user?.firstName,
        lastName: userData?.user?.lastName
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      // personal
      // firstName: "",
      // lastName: "",
      gender: "",
      country: "",
      city: "",
      biography: "",
      titleOfEvent: "",
      date: "",
      location: "",
      numberOfAttendees: "",
      field: "",
      // eventPictures: "",

      // niche
      speakerField: "",
      speakerSubField: "",
      education: "",
      jobTitle: "",
      yearsOfPractice: "",
      jobDescription: "",
      position: "",
      language: "",

      // availability
      eventType: [],
      availableTo: [],
      pricing: "",
      isVolunteer: "",

      // isVisible
      isVisible: ""
    },
    validate
  })

  // proceed to next step
  const nextStep = () => {
    // console.log(Object.keys(formik.errors));
    setStep(step + 1)
    ref.current.next()
    window.scrollTo(0, 0)
  }

  // go back to prev step
  const prevStep = () => {
    setStep(step - 1)
    ref.current.prev()
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const isInfoFilled = !!sessionStorage.getItem("userId")
    isInfoFilled && navigate("/dashboard")
    dataFetch()
  }, [navigate])

  const submit = async () => {
    formik.handleSubmit()
    try {
      const transformedData = {
        gender: formik.values.gender,
        availableTo: formik.values.availableTo,
        biography: formik.values.biography,
        // phone: "+2348033092399",
        // address: "A3C Crimson Avenue, Denmark",
        pastEvent: {
          titleOfEvent: formik.values.titleOfEvent,
          date: formik.values.date,
          location: formik.values.location,
          numberOfAttendees: formik.values.numberOfAttendees,
          field: formik.values.field
        },
        field: formik.values.speakerField,
        subField: formik.values.speakerSubField,
        education: formik.values.education,
        job: {
          title: formik.values.jobTitle,
          yearsOfPractice: Number(formik.values.yearsOfPractice),
          jobDescription: formik.values.jobDescription,
          position: formik.values.position
        },
        city: formik.values.city,
        country: formik.values.country,
        language: formik.values.language,
        pricing: formik.values.pricing,
        eventType: formik.values.eventType,
        isVolunteer: formik.values.isVolunteer,
        isVisible: formik.values.isVisible
      }
      console.log(transformedData)
      const token = sessionStorage.getItem("token")
      const saveUserData = await fetch(`${API_LINK}/api/profile/setup`, {
        method: "PUT",
        body: JSON.stringify(transformedData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          redirect: "follow"
        }
      })
      const data = await saveUserData.json()
      console.log(data)

      if (saveUserData.ok) {
        toast.success(`${data.message}`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px", border: "2px solid green" },
          className: ""
        })
        sessionStorage.setItem("userId", data.user._id)
        // navigate("/dashboard")
        window.scrollTo(0, 0)
      }

      if (!saveUserData) {
        setError("Please cross check your details and try again")
        throw new Error(error)
      }
      if (!saveUserData.ok) {
        setError("Your session might have expired, please try to log in again!")
        throw new Error(error)
      }
    } catch (error) {
      console.log(error)
      toast.error(`${error}`, {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px", border: "2px solid red" },
        className: ""
      })
    }
  }

  const ref = useRef(null)

  return (
    <AppLayout>
      <div className='create-profile'>
        <div className='form-header'>
          <h1>Create Your Profile</h1>
          <p>All data are automatically saved. You can come back later any time.</p>
        </div>

        <div className='form-container'>
          <form className='profile-form'>
            <div className='profile-steppers'>
              <Steppers ref={ref} />
            </div>

            {step === 0 && <Personal nextStep={nextStep} formik={formik} userData={neededData} />}
            {step === 1 && <Niche nextStep={nextStep} prevStep={prevStep} formik={formik} optionFields={neededData} />}
            {step === 2 && <Availability nextStep={nextStep} prevStep={prevStep} formik={formik} fetchData={neededData} />}
            {step === 3 && <Visibility submit={submit} prevStep={prevStep} formik={formik} />}
          </form>
        </div>
      </div>
    </AppLayout>
  )
}

export default CreateProfile
