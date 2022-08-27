import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo1.png"
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
            {/* eslint-disable-next-line  */}
                <Link to ='/' className="header__logo"><img alt='logo image' src={logo} className="header__logo-img"></img></Link>
                <BurgerMenu /> 
            </div>
            <div className="header__links">
                <Link to ="/about" className="header__links-item"><div>ABOUT</div></Link>
                <Link to ="/job" className="header__links-item"><div>JOB BOARD</div></Link>
                <Link to ="/jobs/add" className="header__links-item"><div>JOB POSTING</div></Link>
                <Link to ="/myaccount" className="header__links-item"><div>MY ACCOUNT</div></Link>
            </div>
        </header>
    )
}
export default Header;

