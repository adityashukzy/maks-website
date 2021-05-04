import React, { useRef } from "react";
import "./common.css";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const Login = () => {
  const history = useHistory();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const onClickHandler = (e) => {
    e.preventDefault();
    let email=emailInput.current.value
    axios
      .post("http://localhost:5000/users/login", {
        email,
        password: passwordInput.current.value,
      })
      .then(function (response) {
        if(response.status===200){
          localStorage.setItem("email",email)
          history.push("/admin");
        }
        else if (response.status === 400) {
          alert("Login failed");
        }
      });

  };
  return (
    <>
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
	      <link rel="icon" href="https://maks-images-aws-bucket.s3.ap-south-1.amazonaws.com/maks-logo.png" type="image/icon"/>
        <title>Login | Maks ~ safety, simplified.</title>
      </Helmet>
      <Navbar />
      <div className="session">
        <div className="left">
          <img
            id="image"
            src="https://maks-images-aws-bucket.s3.ap-south-1.amazonaws.com/maks-logo.png"
            alt="icon"
          />
        </div>
        <form action="" className="log-in" autoComplete="on">
          <h4>
            Welcome to <span>MAKS</span>
          </h4>
          <p>Log in to your account to view your venue's violators!</p>
          <div className="floating-label">
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              ref={emailInput}
            />
            <label htmlFor="email">Email</label>
            <div className="icon">
              <svg
                enableBackground="new 0 0 100 100"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(0 -952.36)">
                  <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                </g>
                <rect className="st0" width="100" height="100" />
              </svg>
            </div>
          </div>
          <div className="floating-label">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              ref={passwordInput}
            />
            <label htmlFor="password">Password</label>
            <div className="icon">
              <svg
                enableBackground="new 0 0 24 24"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect className="st0" width="24" height="24" />
                <path className="st1" d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
                <path
                  className="st1"
                  d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z"
                />
                <path
                  className="st1"
                  d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z"
                />
              </svg>
            </div>
          </div>
          <button type="submit" onClick={onClickHandler}>
            Log in
          </button>
          <Link className="a" to="/register">
            Register for an account
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
