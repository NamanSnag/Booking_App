import React, { useRef } from "react";
import { explore } from "./data";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import "./style.scss";

const Explore = () => {
  const sliderRef = useRef(null);

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
      prev.setAttribute("disabled", "");
    }

    if (track.scrollLeft >= track.scrollWidth - track.offsetWidth) {
      next.setAttribute("disabled", "");
    }
  };

  return (
    <div className="explore-slider" ref={sliderRef}>
      <div className="container" onScroll={handleTrackScroll}>
        {/* Your slider content here */}
        {explore.map((city) => (
          <div className="slider-item" key={city.id}>
            <img className="exp__img" src={city.imageUrl} alt="Image 1" />
            <h3>{city.city}</h3>
            <p>{city.propertyCount} Properties</p>
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrevClick}>
        <BsFillCaretLeftFill />
      </button>
      <button className="next-btn" onClick={handleNextClick}>
        <BsFillCaretRightFill/>
      </button>
    </div>
  );
};

export default Explore;
