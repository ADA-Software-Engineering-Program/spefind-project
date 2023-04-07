import React from "react";
import Zainab from "../../images/Zainab.png";
import Mide from "../../images/Mide.png";
import Tayo from "../../images/Tayo.png";
import Seki from "../../images/Seki.png";
import Sina from "../../images/Sina.png";
import Bola from "../../images/Bola.png";
import FeaturedSpeakersCard from "./FeaturedSpeakersCard";
import "./FeaturedSpeakersCard.css";
import { CgSearch } from "react-icons/cg";
import Slider from "react-slick";

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
    speakerImage: Zainab,
    speakerName: "Zainab Yakub",
  },
  {
    id: 2,
    speakerImage: Mide,
    speakerName: "Olumide Salami",
  },
  {
    id: 3,
    speakerImage: Tayo,
    speakerName: "Titilayo Chibuike",
  },
  {
    id: 4,
    speakerImage: Seki,
    speakerName: "Sekinat Ndukwu",
  },
  {
    id: 5,
    speakerImage: Sina,
    speakerName: "Mohammed Adesina",
  },
  {
    id: 6,
    speakerImage: Bola,
    speakerName: "Augustina Mobolaji",
  },
];

function SpeakersCard() {
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
    <div className="text-center featCard px-lg-5 px-md-4 px-3">
      <div>
        <input
          type="text"
          placeholder="Search for speaker..."
          className="featInput"
        />
        <CgSearch className="search" />
      </div>
      <h3 className="header fw-bolder">
        Top overall featured <span className="heroColor">communicators</span>
      </h3>

      <div className="row speaker-cont d-md-flex d-none">
        {speakers.map((item) => (
          <div key={item.id} className="col-lg-4 col-sm-6 g-4">
            <FeaturedSpeakersCard
              speakerImage={item.speakerImage}
              speakerName={item.speakerName}
            />
          </div>
        ))}
      </div>

      <div className="slick my-5 d-md-none d-block">
        <Slider {...settings} className="slick-box">
          {speakers.map((item, key) => {
            return (
              <FeaturedSpeakersCard
                speakerImage={item.speakerImage}
                speakerName={item.speakerName}
                key={key}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SpeakersCard;
