import React from "react";
import { HiStar } from "react-icons/hi";
import "../../Components/HomeCSS/ReviewCard.css";

const ReviewCard = ({ profilePic, speakerName, occupation, review }) => {
  return (
    <div className="text-start reviewCards">
      <div className="d-flex justify-content-between">
        <div className="profilePics">
          <img src={profilePic} alt="profilePics" className="img-responsive" />
        </div>

        <div>
          <div className="">
            <h6 className="fw-semibold">{speakerName}</h6>
            <p className="designation">{occupation}</p>
          </div>

          <div className="reviewDetail">
            <div>
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
