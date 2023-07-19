import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { base_URL } from "../../base";
import axios from "axios";

import "../style.scss";
import { useState } from "react";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const URL = `${base_URL}/api/user/register`;
      const response = await axios.post(URL, signupData);
      alert(`${response.data.msg}`)
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth flex">
      {/* left section */}
      <section className="auth__left">
        <p className="auth__lefth">TravelNest</p>
      </section>
      {/* End left section */}

      {/* right section */}
      <section className="auth__right flex">
        <div className="auth__rightwrapper">
          <h1 className="auth__title">Sign Up</h1>

          <p className="auth__subhead">Sign in to your account</p>

          {/* auth form */}
          <div className="auth__form flex">
            <div className="auth__inp">
              <label htmlFor="name" className="auth__lable">
                Name
              </label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                id="name"
                className="auth__i"
                onChange={handleInputChange}
              />
            </div>

            <div className="auth__inp">
              <label htmlFor="email" className="auth__lable">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                id="email"
                className="auth__i"
                onChange={handleInputChange}
              />
            </div>

            <div className="auth__inp">
              <label htmlFor="password" className="auth__lable">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="auth__i"
                onChange={handleInputChange}
              />
            </div>

            <button className="auth__btn" onClick={handleSignup}>
              <a>Sign Up</a>
            </button>
          </div>
          {/* End auth form */}

          {/* auth ways */}
          <div className="auth__ways flex">
            <div className="auth__social flex">
              <FcGoogle />
              Sign up with Google
            </div>
          </div>
          {/* End auth ways */}

          <p className="auth__acc">
            Already! have an account?{" "}
            <Link to={"/login"} className="ll">
              <span className="auth__link">Login here</span>
            </Link>
          </p>
        </div>
      </section>
      {/* End right section */}
    </div>
  );
};

export default Signup;
