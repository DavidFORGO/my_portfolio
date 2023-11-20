import React from "react";

export default function Header(){
    return(
        <>
            {/* Mob header */}
        <div className="mob-header">
            <div className="mob-h-left">
            <a className="navbar-brand" href="/">
                <img className="logo-dark" title alt='' src="assets/img/logo.svg" />
                <img className="logo-light" title alt='' src="assets/img/logo-light.svg" />
            </a>
            </div>
            <div className="mob-h-right">
            <button className="toggler-menu">
                <span />
            </button>
            </div>
        </div>
        {/* End */}
        {/* Header Top */}
        <div className="header-left-fixed one-page-nav">
            {/* Brand */}
            <div className="logo">
            <a className="navbar-brand" href="/">
            {/* <a className="navbar-brand" href="index.hthml#"> */}
                {/* <img className="logo-dark" title alt='' src="assets/img/logo.svg" />
                <img className="logo-light" title alt='' src="assets/img/logo-light.svg" /> */}
               <h1> <span>DF</span></h1>
            </a>
            </div>
            {/* / */}
            <ul className="main-menu">
            <li class="icon-box">
                <a data-scroll-nav={0} href="/home">
                Home 
                {/* <i class="fa fa-home"></i> */}
                </a>
            </li>
            <li>
                <a data-scroll-nav={1} href="/about">
                About
                </a>
            </li>
            <li>
                <a data-scroll-nav={2} href="/service">
                Services
                </a>
            </li>
            <li>
                <a data-scroll-nav={3} href="/portfolio">
                Portfolio
                </a>
            </li>
            <li>
                <a data-scroll-nav={4} href="/blog">
                Blog
                </a>
            </li>
            <li>
                <a data-scroll-nav={5} href="/contact">
                Contact
                </a>
            </li>
            </ul>
            <ul className="nav social-link">
            <li>
                <a href="https://telegram.org/"><i className="fab fa-telegram" /></a>
            </li>
            <li>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
            </li>
            <li>
                <a href="https://web.facebook.com/"><i className="fab fa-facebook" /></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/david-forgo-1462a5271"><i className="fab fa-linkedin" /></a>
            </li>
            </ul>
        </div>
        {/* End Header Top */}
        </>
    );
}