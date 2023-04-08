import React from "react";
import { HiStar } from "react-icons/hi";
import "../../Components/HomeCSS/ReviewCard.css";

const ReviewCard = ({ profilePic, speakerName, occupation, review }) => {
  return (
    <div className="text-start reviewCards">
      <div className="reviewCont">
        <div className="profilePics">
          <img src={profilePic} alt="profilePics" className="img-responsive" />
        </div>

        <div>
          <div className="">
            <h6 className="speaker-name">{speakerName}</h6>
            <p className="speaker-occu">{occupation}</p>
          </div>

          <div className="reviewDetail">
            <div className="mb-2">
              <HiStar className="starRating" />
              <HiStar className="starRating" />
              <HiStar className="starRating" />
              <HiStar className="starRating" />
              <HiStar className="starRating" />
            </div>
            <p className="reviewDetailText">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
