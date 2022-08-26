import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.scss";
import loginpeople from "../../assets/icons/people-login.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import bg from "../../assets/images/bg-together.jpg"


class Login extends React.Component {

   
    render(){
        const iconEmail = <FontAwesomeIcon icon={faEnvelope} />
        const iconLock = <FontAwesomeIcon icon={faLock} />

        return(
            <div className="login">
            <div className="login__photo">
               <img className="login__photo-together" src={bg}></img>
            </div>

            <div className="login__container">
                
                <form className="login-form">
                    <img alt ="Together logo"src ={logo} className="login-form__img"></img>
                    <h2 className="login-form__title">JOIN US</h2>
                    <div className="login__box-one">
                        <div className="input-content">
                            <div className="input-content__box">
                                <i className="icon">{iconEmail}</i>
                                <h5 className="input-content--label">EMAIL</h5>
                            </div>
                            <input type ="email" className="input-content--value" placeholder="email address"></input>
                        </div>
                    </div>
                    <div className="login__box-two">
                        <div className="input-content">
                            <div className="input-content__box">
                                <i className="icon">{iconLock}</i>
                                <h5 className="input-content--label">PASSWORD</h5>
                            </div>
                            <input type="password" className="input-content--value" placeholder="Password"></input>
                        </div>
                    </div>
                    <Link to ="/register" href="#" className="input-content--link">REGISTER</Link>
                    <button className="btn" type="submit">SUBMIT</button>
                </form>
{/* 
                        <input type="email" placeholder="E-mail Address"></input>
                        <input type="password" placeholder="Password"></input>
                <div className="login-register">
                    <Link to ="/register" href="#">REGISTER</Link>
                </div>
                <div className="button-container">

                    <button className="button-container--login"type="submit">LOG-IN</button>
                </div> */}
           
        </div>
        </div>
    )
    }
}
export default Login;

