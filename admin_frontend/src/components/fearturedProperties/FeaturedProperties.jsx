import React from "react";

import "./style.scss";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src='https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60' alt="" className="fpImg" />
        <span className="fpName">Taj Mahal</span>
        <span className="fpCity">Agra</span>
        <span className="fpPrice">Starting from $233</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src='https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60' alt="" className="fpImg" />
        <span className="fpName">Taj Mahal</span>
        <span className="fpCity">Agra</span>
        <span className="fpPrice">Starting from $233</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
      
      <div className="fpItem">
        <img src='https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60' alt="" className="fpImg" />
        <span className="fpName">Taj Mahal</span>
        <span className="fpCity">Agra</span>
        <span className="fpPrice">Starting from $233</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
