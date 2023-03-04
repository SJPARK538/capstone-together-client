import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import bg from "../../assets/images/login-photo.svg";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const navigate = useNavigate();

    const iconEmail = <FontAwesomeIcon icon={faEnvelope} />;
    const iconLock = <FontAwesomeIcon icon={faLock} />;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const res = await axios.post("http://localhost:8080/user/login", {
            email,
            password,
          });
          if (res.status === 200) {
            localStorage.setItem("userLoggedIn", JSON.stringify(res.data));
            setUserLoggedIn(res.data.data);
            navigate("/");
            console.log(res.data.data)
          }
        } catch (err) {
          setError(err.response.data.message);
        }
      };
    


  return (
    <div className="login">
      <div className="login__photo">
        <img
          alt="people gathering"
          className="login__photo-together"
          src={bg}
        ></img>
      </div>
      <div className="login__container">
        <form className="login-form" onSubmit={handleSubmit}>
          <img
            alt="Together logo"
            src={logo}
            className="login-form__img"
          ></img>
          <h2 className="login-form__title">JOIN US</h2>
          <div className="login__box">
            <div className="login__box-one">
              <div className="input-content">
                <div className="input-content__box">
                  <i className="icon">{iconEmail}</i>
                  <h5 className="input-content--label">EMAIL</h5>
                </div>
                <input
                  type="email"
                  name="email"
                  className="input-content--value"
                  placeholder="Email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="login__box-two">
              <div className="input-content">
                <div className="input-content__box">
                  <i className="icon">{iconLock}</i>
                  <h5 className="input-content--label">PASSWORD</h5>
                </div>
                <input
                  type="password"
                  name="password"
                  className="input-content--value"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <Link
            to="/register"
            href="#"
            className="input-content--link"
          >
            REGISTER
          </Link>
          <button type="submit" className="btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}






  



