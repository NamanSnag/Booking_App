import React from "react";

import "./style.scss";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://media.istockphoto.com/id/864488728/photo/goli-otok-engine.jpg?b=1&s=170667a&w=0&k=20&c=01ufYoYRAeQ0qUzHB0AUs29LO0Jp8cBWI9wOrAu1_ZY="
        alt="imgff"
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">Tower Street Appartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">free airport taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
            Entire studio + 1 bathroom + 21 m.sq 1 full bed
        </span>
        <span className="siCancelOp">
           Free Cancellation
        </span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>

        <div className="siDetailTexts">
          <span className="siPrice"> $499 </span>
          <span className="siTaxOp"> Includes taxes and fees </span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
