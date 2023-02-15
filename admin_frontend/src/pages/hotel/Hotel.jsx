import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Footer, MailList, Navbar } from "../../components";

import "./style.scss";

const Hotel = () => {
  const [slider, setSlider] = useState(0);
  const [sliderOpen, setSliderOpen] = useState(false);

  const photos = [
    "https://a0.muscache.com/im/pictures/8c4f3027-8339-4559-8992-7e6eb4a536a5.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/2fde35ef-6fe4-4cef-8985-5ea853c93c6f.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/bc3397e3-cd74-4f8d-9aae-075d2dd87930.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/47753f2b-5edb-43f6-8f4f-b0fd7178bb6f.jpg?im_w=720",
  ];

  const handleSlide = (index) => {
    setSlider(index);
    setSliderOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slider === 0 ? (photos.length - 1) : slider - 1;
    } else {
      newSlideNumber = slider === (photos.length - 1) ? 0 : slider + 1;
    }

    setSlider(newSlideNumber);
  };

  return (
    <div className="hotel">
      <Navbar />
      <div className="marginTop"></div>
      <div className="hotelContainer">
        {sliderOpen && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faXmark}
              className="close"
              onClick={() => setSliderOpen(!sliderOpen)}
            />
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className="arrow"
              onClick={() => handleMove("left")}
            />
            <div className="sliderWrapper">
              <img src={photos[slider]} alt="sfd" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="arrow"
              onClick={() => handleMove("right")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 123 New york</span>
          </div>

          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>

          <span className="hotelPriceHighlight">
            Book a stay over $ 114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((item, i) => {
              return (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    className="hotelImg "
                    src={item}
                    alt="ooo"
                    onClick={() => handleSlide(i)}
                  />
                </div>
              );
            })}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">TiTle</h1>
              <p className="hotelDesc">dfdsfdfsfdsfdfdfsfdsdfsdfdfs</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a days-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$44003</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
