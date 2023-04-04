import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
// style files
import "../../Components/HomeCSS/ReviewCard.css";
// images
import Gold from "../../images/Gold.png";
import Ola from "../../images/Ola.png";
import Tife from "../../images/Tife.png";
import Peace from "../../images/Peace.png";
import Tobe from "../../images/Tobe.png";
import Sola from "../../images/Sola.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "red",
        background: "green",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const speakers = [
  {
    id: 1,
    profilePic: Gold,
    speakerName: "Omorinwale Gold",
    occupation: "Abey Event Planning",
    review:
      "This has been such an important website for me. Finding quality public speakers can be quite difficult. But with this website, I just simply browse till I find the best fit for me",
  },
  {
    id: 2,
    profilePic: Ola,
    speakerName: "Ola Silver",
    occupation: "Lerd Events",
    review:
      "I love how you can browse through different categories on on website. Super time efficient!",
  },
  {
    id: 3,
    profilePic: Tife,
    speakerName: "Chike Tife",
    occupation: "Lerd Events",
    review: "I love this website so much!!!!",
  },
  {
    id: 4,
    profilePic: Peace,
    speakerName: "Ojukwu Peace",
    occupation: "Abey Event Planning",
    review:
      "This has been such an important website for me. Finding quality public speakers can be quite difficult. But with this website, I just simply browse till I find the best fit for me",
  },
  {
    id: 5,
    profilePic: Tobe,
    speakerName: "Tobi Tobe",
    occupation: "Lerd Events",
    review:
      "I love how you can browse through different categories on on website. Super time efficient!",
  },
  {
    id: 6,
    profilePic: Sola,
    speakerName: "Adesina Sola",
    occupation: "Lerd Events",
    review: "I love this website so much!!!!",
  },
];

function FeaturedReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="text-center reviewSection px-lg-5 px-md-4 px-3">
      <h3 className="header fw-bolder pt-5">Featured reviews</h3>

      <div className="review-box d-md-grid d-none">
        {speakers.map((slide, i) => {
          return (
            <ReviewCard
              profilePic={slide.profilePic}
              speakerName={slide.speakerName}
              occupation={slide.occupation}
              review={slide.review}
            />
          );
        })}
      </div>

      <div className="slick my-5 d-md-none d-block">
        <Slider {...settings} className="slick-box">
          {speakers.map((slide, i) => {
            return (
              <ReviewCard
                profilePic={slide.profilePic}
                speakerName={slide.speakerName}
                occupation={slide.occupation}
                review={slide.review}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedReview;
