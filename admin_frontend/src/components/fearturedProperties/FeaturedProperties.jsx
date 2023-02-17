import React from "react";
import useFetch from "../../hooks/useFetch";

import "./style.scss";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotel?top=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading, Plz wait..."
      ) : (
        <>
          {data.map((data, i) => {
            return (
              <div className="fpItem" key={`fp${i}`}>
                <img
                  src={data.photos[0]}
                  alt="fp"
                  className="fpImg"
                />
                <span className="fpName">{data.name}</span>
                <span className="fpCity">{data.city}</span>
                <span className="fpPrice">Starting from ${data.cheapest_Price}</span>
                <div className="fpRating">
                {
                  data.rating && 
                  <button>{data.rating}</button>
                } 
                  <span>Excellent</span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
