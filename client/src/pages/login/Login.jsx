import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { base_URL } from "../../base";
import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../../store/userAuth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(state=> state.user.loading);

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch( loginStart());
   
    try {
      const URL = `${base_URL}/api/user/login`;
      const response = await axios.post(URL, loginData);
      console.log(response)
      if (response.status != 200) {
        dispatch(loginFailure(response.data.msg));
        
        return;
      }
      dispatch( loginSuccess({
        user: response.data.user,
        token: response.data.token,
      }));
      // alert(`${response.data.msg}`);
      navigate("/");
    } catch (error) {
      dispatch( loginFailure(error));
    }
  };

  if(loading){
    return (<div className="loading">
      <p>...Loading</p>
      </div>)
  }

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
          <h1 className="auth__title">Sign In</h1>

          <p className="auth__subhead">Sign in to your account</p>

          {/* auth form */}
          <div className="auth__form flex">
            <div className="auth__inp">
              <label htmlFor="email" className="auth__lable">
                Email address
              </label>
              <input
                type="email"
                name="email"
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

            <button className="auth__btn" onClick={handleLogin
            }>
              <a href="/dashboard">Sign Up</a>
            </button>
          </div>
          {/* End auth form */}

          {/* auth ways */}
          <div className="auth__ways flex">
            <div className="auth__social flex">
              <FcGoogle />
              Sign in with Google
            </div>
          </div>
          {/* End auth ways */}

          <p className="auth__acc">
            Don't have an account?{" "}
            <Link to={"/signup"} className="ll">
              <span className="auth__link">Register here</span>
            </Link>
          </p>
        </div>
      </section>
      {/* End right section */}
    </div>
  );
};

export default Login;
