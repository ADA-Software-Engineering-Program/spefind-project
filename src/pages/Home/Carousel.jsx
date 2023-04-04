import React, { useState } from "react";
import Gold from "../../images/Gold.png";
import Ola from "../../images/Ola.png";
import Tife from "../../images/Tife.png";
import Carousel from "react-bootstrap/Carousel";
import Peace from "../../images/Peace.png";
import Tobe from "../../images/Tobe.png";
import Sola from "../../images/Sola.png";
import ReviewCard from "./ReviewCard";

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

const Carousell = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="container my-5">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="mb-5"
        >
          {speakers.map((slide, i) => {
            return (
              <Carousel.Item>
                <ReviewCard
                  profilePic={slide.profilePic}
                  speakerName={slide.speakerName}
                  occupation={slide.occupation}
                  review={slide.review}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousell;
