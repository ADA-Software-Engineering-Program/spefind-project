import React, { useState } from "react";
import Gold from "../../images/Gold.png";
import Ola from "../../images/Ola.png";
import Tife from "../../images/Tife.png";
import Carousel from "react-bootstrap/Carousel";
import Peace from "../../images/Peace.png";
import Tobe from "../../images/Tobe.png";
import Sola from "../../images/Sola.png";
import ReviewCard from "./ReviewCard";

const data = [
  {
    image: Ola,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: Gold,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: Tife,
    caption: "Caption",
    description: "Description Here",
  },
];

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
    // <div
    //   id="carouselExampleControls"
    //   className="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       {/* <img src={Gold} className="d-block w-100" alt="..." /> */}
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
    //         quibusdam nulla, debitis hic soluta omnis quasi harum temporibus a
    //         sunt, delectus adipisci error assumenda reiciendis similique,
    //         tempore veritatis. Iusto, harum!
    //       </p>
    //     </div>
    //     <div className="carousel-item">
    //       {/* <img src={Ola} className="d-block w-100" alt="..." /> */}
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
    //         facere deleniti! Commodi animi veniam dignissimos. Fuga itaque,
    //         commodi ipsam officiis sapiente repellat. Fugit hic doloribus natus
    //         eos, esse possimus neque.
    //       </p>
    //     </div>
    //     <div className="carousel-item">
    //       {/* <img src={Tife} className="d-block w-100" alt="..." /> */}
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
    //         praesentium maiores excepturi a fugiat nobis nam sit nesciunt
    //         commodi eligendi.
    //       </p>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleControls"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleControls"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    // <div className="container">
    //   <div
    //     id="carouselExampleIndicators"
    //     className="carousel slide"
    //     data-bs-ride="carousel"
    //   >
    //     <div className="carousel-indicators">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //     </div>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img src={Ola} className="d-block w-100" alt="qwe" />
    //       </div>
    //       <div className="carousel-item">
    //         <img src={Gold} className="d-block w-100" alt="qas" />
    //       </div>
    //       <div className="carousel-item">
    //         <img src={Tife} className="d-block w-100" alt="wss" />
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
    <div>
      {/* <div className="container mb-5">
        <Carousel activeIndex={index} onSelect={handleSelect} className="mb-5">
          {data.map((slide, i) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="slider image"
                />
                <Carousel.Caption>
                  <h3>{slide.caption}</h3>
                  <p>{slide.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div> */}

      <div className="container my-5">
        <Carousel activeIndex={index} onSelect={handleSelect} className="mb-5">
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
