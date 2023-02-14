import React from "react";

import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <nav className="navContainer">
        <div className="logo">
            <img
                src="https://cdn-icons-png.flaticon.com/128/9360/9360923.png"
                alt="logo"
            />
            <p><span style={{color:'#ffaa00'}}>T</span>ravel<span style={{color:'#ffaa00'}}>N</span>est</p> 
        </div>
        {/* {user ? user.username : ( */}
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
            {/* )} */}
        </nav>
    </div>
  );
};

export default Navbar;
