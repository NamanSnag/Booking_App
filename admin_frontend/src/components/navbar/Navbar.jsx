import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./style.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const refLogin = useRef(null);

  const { user } = useContext(AuthContext);

  const handleselect = () => {
    navigate('/login');
  }

  return (
    <div className="navbar">
      <nav className="navContainer">
        <Link to={'/'} style={{textDecoration:'none'}}>
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9360/9360923.png"
              alt="logo"
            />
            <p>
              <span style={{ color: "#ffaa00" }}>T</span>ravel
              <span style={{ color: "#ffaa00" }}>N</span>est
            </p>
          </div>
        </Link>
        {user ? (
          <div className="navItems">
            <h3 style={{color: 'yellow'}}>{user.username}</h3>
          </div>
        )
         : (
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" ref={refLogin} onClick={handleselect}>Login</button>
        </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
