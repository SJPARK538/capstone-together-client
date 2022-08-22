import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Footer.scss";




const Footer = () => {
  return(
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__container-content">
            &copy;Together Inc. All Rights Reserved
            </div>
        </div>
    </footer>
  )
};

export default Footer;