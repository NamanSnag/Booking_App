import axios from "axios";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { base_URL } from "../../base";
import { currentHotel } from "../../store/hotel";
import {AiFillStar} from 'react-icons/ai'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import "./style.scss";

const Rooms = () => {
  const hotel = useSelector((state) => state.hotels.viewHotel);
  const { hotelId } = useParams();
  const sliderRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hotel?.name) {
      fetchHotel(hotelId);
    }
  }, []);

  const fetchHotel = async (hotelId) => {
    try {
      const res = await axios.get(`${base_URL}/api/hotel/${hotelId}`);
      dispatch(currentHotel(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevClick = () => {
    const track = sliderRef.current.querySelector(".container");
    const next = sliderRef.current.querySelector(".next-btn");

    next.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft - track.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    const track = sliderRef.current.querySelector(".container");
    const prev = sliderRef.current.querySelector(".prev-btn");

    prev.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft + track.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleTrackScroll = () => {
    const track = sliderRef.current.querySelector(".container");
    const prev = sliderRef.current.querySelector(".prev-btn");
    const next = sliderRef.current.querySelector(".next-btn");

    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "disabled");
    }

    if (track.scrollLeft >= track.scrollWidth - track.offsetWidth) {
      next.setAttribute("disabled", "disabled");
    }
  };

  return (
    <div className="rooms">
      <div className="hotel__container" ref={sliderRef}>
        <div className="container" onScroll={handleTrackScroll}>
          <div className="slider-item">
            <img
              className="exp__img"
              src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="Imell"
            />
          </div>
          <button className="prev-btn" onClick={handlePrevClick}>
            <BsFillCaretLeftFill />
          </button>
          <button className="next-btn" onClick={handleNextClick}>
            <BsFillCaretRightFill />
          </button>
        </div>

        <div className="hotel__detail">
          <h2>{hotel.name}</h2>
          <div className="hotel__c">
            <p>
              Contact : <span>{hotel.phone}</span>
            </p>
            <p>
              Rating : <span>{hotel.rating} <AiFillStar className="star"/></span>
            </p>
          </div>

          <p>
            Descriptions : <span>{hotel.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
