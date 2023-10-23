import "./OrganizerProfile.module.css"
import coverBanner from "../../../../images/organizer-banner.png"
import userImg from "../../../../images/organizer-image.png"
import styles from "./OrganizerProfile.module.css"
import Loader from "../../../../Components/Loader/Loader"
import useFetchUserInfo from "../../../../hooks/useFetchUserInfo"
import { Link } from "react-router-dom"
import { ROUTE_NAMES } from "../../../../utils/constants"

const OrganizerProfile = () => {
  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)

  return (
    <div className={styles.coverBanner}>
      {loading && <Loader />}
      <div
        className={styles.speakerDetails}
        style={{
          backgroundImage: fetchedUserData?.coverBanner ? `url(${fetchedUserData?.coverBanner})` : `url(${coverBanner})`
        }}
      >
        <h4>BELLA EVENTS{fetchedUserData?.firstName}</h4>
        <p>Cooperate Event Organizers {fetchedUserData?.job?.title}</p>
      </div>

      <div className={styles.about}>
        <div className={styles.imgContainer}>
          <img src={fetchedUserData?.photo ? fetchedUserData?.photo : userImg} alt=' the speaker ' />
          <Link to={ROUTE_NAMES.PERSONAL_DETAILS}>
            <button onClick={() => window.scrollTo(90, 90)}>Edit Profile</button>
          </Link>
        </div>
        <div className={styles.aboutTextContainer}>
          <h5>ABOUT BELLA EVENTS</h5>
          <p>
            Bella Events was incorporated in June 2003. We Organize different kinds of Cooperate Events. We’re always on the look out for
            Public Speakers, MCs,{" "}
          </p>
          <p>{fetchedUserData?.biography}</p>
          <div className={styles.speakerRating}>
            <span>
              100% <p>Work Experience</p>
            </span>
            <span>
              100% <p>Pays on Time</p>
            </span>
            <span>
              100% <p>Quick Response</p>
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

export default OrganizerProfile
