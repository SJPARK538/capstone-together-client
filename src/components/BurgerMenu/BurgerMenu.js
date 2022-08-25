import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
                <Link to ="/about" className="header__links-item"><div>ABOUT</div></Link>
                <Link to ="/job" className="header__links-item"><div>JOB BOARD</div></Link>
                <Link to ="/jobs/add" className="header__links-item"><div>JOB POSTING</div></Link>
                <Link to ="/myaccount" className="header__links-item"><div>MY ACCOUNT</div></Link>
    </Menu>
  );
};

export default BurgerMenu;
