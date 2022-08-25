import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.scss";
import loginpeople from "../../assets/icons/people-login.svg"
import lock from "../../assets/icons/lock.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import '../Fontawesome/Fontawesome';

class Login extends React.Component {

   
    render(){
        // const icon = <FontAwesomeIcon icon={faHome} />
        return(
            <>
            <div className="logo-container">
                {/* <Link to ="/" className="header__logo"><img alt ="Together logo"src ={logo}></img></Link> */}
            </div>

            <div className="login-container">
                
                <form className="login-form">
                    <img alt ="Together logo"src ={logo}></img>
                    <h2 className="login-form__tile">JOIN US</h2>
                    <div className="input__box-one">
                        <div className="input__box-one-container">
                            <img alt ="people login" src={loginpeople}></img>
                        </div>
                    
                        <div className="input-content">
                            <h5 className="input-content--username">Username</h5>
                            <input type ="email" className="input" placeholder="email address"></input>
                        </div>
                    </div>
                    <div className="input__box-two">
                        <div className="input__box-two-container">
                            <img alt ="lock img" src={lock}></img>
                        </div>
                        <div className="input-content">
                            <h5 className="input-content--password">Password</h5>
                            <input type="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <Link to ="/register" href="#">REGISTER</Link>
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
        </>
    )
    }
}
export default Login;

