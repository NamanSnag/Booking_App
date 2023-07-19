import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import { useSelector } from "react-redux";
import Search from "../search/Search";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerText">
          <h1 className="slogan">
            Experience <span style={{ color: "orange" }}>comfort</span>
            <br />
            at your <span style={{ color: "orange" }}>fingertips</span>
            <br />
            Book your next <br />
            <span style={{ color: "orange" }}>adventure</span> with us!
          </h1>

          <p className="headerDesc">
            Get rewarded for your travels – unlock instant savings of{" "}
            <span style={{ color: "rgb(255, 226, 4)" }}>10%</span> or more with
            a free <span style={{ color: "rgb(255, 226, 4)" }}>TravelNest</span>{" "}
            account
          </p>

          <Link to={"/login"}>
            {user ? null : (
              <button className="headerBtn">Sign in / Register</button>
            )}
          </Link>

          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
