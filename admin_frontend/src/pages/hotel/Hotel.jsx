import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer, MailList, Navbar } from "../../components";

import useFetch from "../../hooks/useFetch";

import "./style.scss";

const Hotel = () => {
  const [slider, setSlider] = useState(0);
  const [sliderOpen, setSliderOpen] = useState(false);

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const { data, loading, error, reFetchData } = useFetch(
    `/hotel/find/${id}`
  );

  const handleSlide = (index) => {
    setSlider(index);
    setSliderOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    // if (direction === "left") {
    //   newSlideNumber = slider === 0 ? (photos.length - 1) : slider - 1;
    // } else {
    //   newSlideNumber = slider === (photos.length - 1) ? 0 : slider + 1;
    // }

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
              <img src='' alt="sfd" className="sliderImg" />
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
          <h1 className="hotelTitle">{data.name}</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>

          <span className="hotelDistance">
            Excellent location - ${data.distance}m from center
          </span>

          <span className="hotelPriceHighlight">
            Book a stay over $ 114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {/* {photos.map((item, i) => {
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
            })} */}
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
      <div className="fter">
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
