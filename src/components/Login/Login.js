import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import "./Login.scss";


class Login extends React.Component {
    render(){
        return(
            <>
            <div className="logo-container">
                <Link to ="/" className="header__logo"><img alt ="Together logo"src ={logo}></img></Link>
            </div>

            <div className="login-container">
                <h1>JOIN US</h1>
                <form className="login-form">
                    <input type="email" placeholder="E-mail Address"></input>
                    <input type="password" placeholder="Password"></input>
                <div className="login-register">
                    <Link to ="/register" href="#">REGISTER</Link>
                </div>
                <div className="button-container">
                    <button className="button-container--login"type="submit">LOG-IN</button>
                </div>
            </form>
        </div>
        </>
    )
    }
}
export default Login;

