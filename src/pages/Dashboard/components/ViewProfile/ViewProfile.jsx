import React, { useCallback, useEffect, useState } from "react"
import "./ViewProfile.module.css"
import coverBanner from "../../assets/coverBanner.svg"
import userImg from "../../assets/userImg.svg"
import styles from "./ViewProfile.module.css"

import toast from "react-hot-toast"

import { API_LINK } from "../../../../utils/api"
import Loader from "../../../../Components/Loader/Loader"
const ViewProfile = () => {
  const [loading, setLoading] = useState(false)

  const [fetchedUserData, setFetchedUserData] = useState({})

  const fetchUserHandler = useCallback(async () => {
    setLoading(true)
    try {
      const token = sessionStorage.getItem("token")
      const getUserData = await fetch(`${API_LINK}/api/profile/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      const userData = await getUserData.json()
      // console.log(getUserData)
      if (!getUserData.ok || !getUserData) {
        setLoading(false)
        toast.error(`${userData?.msg} Please login again!`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      // console.log(userData)
      setFetchedUserData(userData.user)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUserHandler()
  }, [fetchUserHandler])

  return (
    <div className={styles.coverBanner}>
      {loading && <Loader />}
      <img src={coverBanner} alt='cover banner of the speaker' />
      <div className={styles.speakerDetails}>
        <h4>Hi! I’m {fetchedUserData?.firstName}</h4>
        <p>{fetchedUserData?.job?.title}</p>
      </div>
      <div className={styles.about}>
        <div className={styles.imgContainer}>
          <img src={userImg} alt=' the speaker ' />
          <button>Edit Profile</button>
        </div>
        <div className={styles.aboutTextContainer}>
          <h5>ABOUT ME</h5>
          <p>{fetchedUserData?.biography}</p>
          <div className={styles.speakerRating}>
            <span>
              100% <p>Jobs Completed</p>
            </span>
            <span>
              100% <p>On A Budget</p>
            </span>
            <span>
              100% <p>On Time</p>
            </span>
            <span>
              100% <p>Professional</p>
            </span>
          </div>
        </div>
      </div>
      <h4 className={styles.pasteventsHeading}>PAST EVENTS</h4>
      <div className={styles.pastEventsContainer}>
        {fetchedUserData?.pastEvents?.map((event, index) => {
          return (
            <div key={index}>
              <div className={styles.singleEvents}>
                <img src={event} alt='past event image' />
                <div className={styles.eventDetails}>
                  <h6>{event.titleOfEvent}</h6>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
              </div>
              <button>View Details</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ViewProfile
