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
            <a className="navbar-brand" href="index.html#">
                {/* <img className="logo-dark" title alt='' src="assets/img/logo.svg" />
                <img className="logo-light" title alt='' src="assets/img/logo-light.svg" /> */}
               <h1> <span>DF</span></h1>
            </a>
            </div>
            {/* / */}
            <ul className="main-menu">
            <li class="icon-box">
                <a data-scroll-nav={0} href="index.html#home">
                Home 
                {/* <i class="fa fa-home"></i> */}
                </a>
            </li>
            <li>
                <a data-scroll-nav={1} href="index.html#about">
                About
                </a>
            </li>
            <li>
                <a data-scroll-nav={2} href="index.html#services">
                Services
                </a>
            </li>
            <li>
                <a data-scroll-nav={3} href="index.html#work">
                Portfolio
                </a>
            </li>
            <li>
                <a data-scroll-nav={4} href="index.html#blog">
                Blog
                </a>
            </li>
            <li>
                <a data-scroll-nav={5} href="index.html#contact">
                Contact
                </a>
            </li>
            </ul>
            <ul className="nav social-link">
            <li>
                <a href="index.html#"><i className="fab fa-twitter" /></a>
            </li>
            <li>
                <a href="index.html#"><i className="fab fa-instagram" /></a>
            </li>
            <li>
                <a href="index.html#"><i className="fab fa-facebook" /></a>
            </li>
            <li>
                <a href="index.html#"><i className="fab fa-pinterest" /></a>
            </li>
            </ul>
        </div>
        {/* End Header Top */}
        </>
    );
}