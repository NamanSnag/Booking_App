import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const refLogin = useRef(null);

  // const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const user = useSelector(state=> state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className="navbar">
      <nav className="navContainer">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9360/9360923.png"
              alt="logo"
            />
            <p>TravelNest</p>
          </div>
        </Link>
        <div className="navItems">
          {user ? (
            <>
              <button
                className="navButton"
                style={{
                  color: "yellow",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                {user}
              </button>
              <button className="navButton" ref={refLogin} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/signup"}>
                <button className="navButton">Register</button>
              </Link>
              <Link to={"/login"}>
                <button className="navButton" ref={refLogin}>
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
