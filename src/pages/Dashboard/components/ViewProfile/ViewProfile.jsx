import "./ViewProfile.css";
import coverBanner from "../../assets/coverBanner.svg";
import userImg from "../../assets/userImg.svg";

const ViewProfile = () => {
  return (
    <div className="coverBanner">
      <img src={coverBanner} alt="cover banner of the speaker" />
      <div className="speakerDetails">
        <h4>Hi! I’m Titilayo</h4>
        <p>Media speaker</p>
      </div>
      <div className="about">
        <div className="imgContainer">
          <img src={userImg} alt=" the speaker " />
          <button>Edit Profile</button>
        </div>
        <div className="aboutTextContainer">
          <h5>ABOUT ME</h5>
          <p>
            A Lagos State resident in charge of drafting over 10 statements per
            mount and speaking with radio and television media about the
            clients' ongoing or forthcoming events organize and arrange more
            than 20 speaking appearances. Conduct Training in product usage and
            product demos for clients, new hires, and independent contractors.
            Prepare concepts for new clients who use commercial spots to market
            their brands.
            <p>show more</p>
          </p>
          <div className="speakerRating">
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
    </div>
  );
};

export default ViewProfile;
