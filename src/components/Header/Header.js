import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png"

const Header = () => {
    return (
        <header className="header">
            <div className="header__links">
                <Link to ="/" className="header__links-item"><div>HOME</div></Link>
                <Link to ="/about" className="header__links-item"><div>ABOUT</div></Link>
                <Link to ="/jobboard" className="header__links-item"><div>JOB BOARD</div></Link>
                <Link to ="/jobposting" className="header__links-item"><div>JOB POSTING</div></Link>
                <Link to ="/myaccount" className="header__links-item"><div>MY ACCOUNT</div></Link>
            </div>
        </header>
    )
}
export default Header;