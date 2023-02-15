import React from "react";

import "./style.scss";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDescription">
        Sign Up and we'll send the best deals to you
      </span>
      <div className="mailInput">
        <input type="text" placeholder='Your Email address' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
