import React from "react";

export default function Home(){
    return(
        <>
             {/* Home Banner */}
            <section id="home" data-scroll-index={0} className="home-section bg-dark">
            <div className="container">
                <div className="row  min-vh-100 align-items-center">
                <div className="col-lg-7 col-xl-7 col-xxl-6">
                    <div className="hb-text">
                    <h1>My name <br />is <b>David</b> <span><br /> FORGO...</span></h1>
                    <p className="lead"><span>Developer</span> based in <span>Burkina Faso</span></p>
                    <div className="btn-bar">
                        <a className="px-btn" href="index.html#">
                        Work with me <i className="bi-arrow-up-right" />
                        </a>
                    </div>
                    <div className="info-bar">
                        <p><i className="bi-phone" /> <span>+226 65480439</span></p>
                        <p><i className="bi-envelope" /> <span>davidforgo48@gmail.com</span></p>
                    </div>
                    </div>
                    <div className="btn-bar">
                        <a href="file:///E:\UVL3\react\david-portfolio\src\pages/carte_visite_GL.pdf" 
                        className="px-btn" title="Download CV as PDF" id="down">DOWLOAD CV</a>
                        {/*<a >Download CV</a>*/}
                    </div>

                </div>
                </div>
            </div>
            <div className="hb-me" style={{backgroundImage: 'url(assets/img/dav_home4.png)'}} />
            <div className="social-fix">
                <div className="social-links">
                <a href="https://telegram.org/"><i className="fab fa-telegram" /></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                <a href="https://web.facebook.com/"><i className="fab fa-facebook" /></a>
                </div>
            </div>
            </section>
            {/* End Home Banner */}
        </>
    );
}