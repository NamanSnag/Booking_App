import React from "react";

import "./style.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          alt="mm"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h2>India</h2>
          <h3>123 properties</h3>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          alt="mm"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h2>Berlin</h2>
          <h3>323 properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="mm"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h2>Singapor</h2>
          <h3>426 properties</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
