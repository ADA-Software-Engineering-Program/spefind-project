import "./ViewProfile.module.css"
import coverBanner from "../../assets/coverBanner.svg"
import userImg from "../../assets/userImg.svg"
import styles from "./ViewProfile.module.css"
import Loader from "../../../../Components/Loader/Loader"
import useFetchUserInfo from "../../../../hooks/useFetchUserInfo"
import { Link } from "react-router-dom"
import { ROUTE_NAMES } from "../../../../utils/constants"

const ViewProfile = () => {
  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)

  return (
    <div className={styles.coverBanner}>
      {loading && <Loader />}
      <img src={fetchedUserData?.coverBanner ? fetchedUserData?.coverBanner : coverBanner} alt='cover banner of the speaker' />
      <div className={styles.speakerDetails}>
        <h4>Hi! I’m {fetchedUserData?.firstName}</h4>
        <p>{fetchedUserData?.job?.title}</p>
      </div>
      <div className={styles.about}>
        <div className={styles.imgContainer}>
          <img src={fetchedUserData?.photo ? fetchedUserData?.photo : userImg} alt=' the speaker ' />
          <Link to={ROUTE_NAMES.PERSONAL_DETAILS}>
            <button onClick={() => window.scrollTo(90, 90)}>Edit Profile</button>
          </Link>
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
            <div className={styles.singleEvents} key={index}>
              <img src={event.eventPhoto} alt='past event image' />
              <div className={styles.eventDetails}>
                <h6>{event.titleOfEvent}</h6>
                <p>{event.date}</p>
                <p>{event.location}</p>
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
