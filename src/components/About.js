import React from "react";

export default function About(){
    return(
        <>
             {/* About Section */}
            <section id="about" data-scroll-index={1} className="section about-section">
            <div className="container">
                <div className="section-heading text-center text-lg-start">
                <h6>Nice to meet you!</h6>
                <h2>Welcome to...</h2>
                </div>
                <div className="row gy-4">
                <div className="col-lg-5">
                    <div className="about-left">
                    <div className="about-avatar">
                        <img src="assets/img/about_dav.png" title="" alt='' />
                    </div>
                    <h3>David FORGO</h3>
                    <p>Web Designer <span>based in</span> Burkina Faso</p>
                    <div className="btn-bar">
                        <a className="px-btn" href="index.html#">
                        Download CV <i className="bi-download" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7 ps-xl-5">
                    <div className="about-bio">
                    <p>Born in 2002, AB type living in Burkina Faso. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.</p>
                    </div>
                    <div className="about-contact row gx-lg-5">
                    <div className="col-sm-6">
                        <p><i className="bi-phone" /> <span>+226 65480439</span> </p>
                    </div>
                    <div className="col-sm-6">
                        <p><i className="bi-person" /> <span>David FORGO</span> </p>
                    </div>
                    <div className="col-sm-6">
                        <p><i className="bi-envelope" /> <span>davidforgo48@gmail.com</span> </p>
                    </div>
                    <div className="col-sm-6">
                        <p><i className="bi-map" /> <span>Ouagadougou, Burkina Faso</span> </p>
                    </div>
                    </div>
                    <div className="about-exp">
                    <div className="row gy-4">
                        <div className="col-md-6">
                        <div className="a-number">
                            <h6>3+</h6>
                            <span>Years<br />experience...</span>
                        </div>
                        <p className="lead">Hello there! My name is <span>David FORGO</span>. I am a web designer &amp; developer, and I'm very passionate and dedicated to my work.</p>
                        </div>
                        <div className="col-md-6">
                        <div className="a-number">
                            <h6>30+</h6>
                            <span>Clients<br />Worldwide...</span>
                        </div>
                        <p className="lead">With 3+ years experience as a professional designer, I have acquired the skills to make your project a success.</p>
                        </div>
                    </div>
                    <blockquote>
                        <i className="fa-solid fa-quote-left" />
                        <p>“Ton engagement détermine ton élévation. Alors décide et engage toi.”</p>
                    </blockquote>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* End About Section */}
        </>
    )
}