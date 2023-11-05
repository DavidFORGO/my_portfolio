import React from "react";

export default function Experience(){
    return(
        <>
             <section className="section experience-section bg-g">
                <div className="container">
                    <div className="row gy-5">
                    <div className="col-lg-5">
                        <div className="section-heading">
                        <h6>Experience</h6>
                        <h2>My experience</h2>
                        <p>Hello there! My name is David FORGO. I am a web designer &amp; developer, and I'm very passionate and dedicated to my work.</p>
                        <div className="btn-bar">
                            <a className="px-btn dark" href="index.html#">
                            Download my resume <i className="bi-download" />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-7 ps-xl-5">
                        <ul className="resume-box">
                        <li>
                            <div className="r-meta">
                            <span>-2023 - Present</span>
                            <label>Web Design and Developer Student</label>
                            </div>
                            <h5>React, Angular, flutter...</h5>
                        </li>
                        <li>
                            <div className="r-meta">
                            <span>-October 2020 - 2022</span>
                            <label>-Pur developer Student at Virtuel university of Burkina Faso</label>
                            </div>
                            <h5>C, C++, Js, Java, Php...</h5>
                        </li>
                        <li>
                            <div className="r-meta">
                            <span>-October 2020 - 2022</span>
                            <label>-Network & Telecom Student at School of Management</label>
                            </div>
                            <h5>Cisco packet tracer...</h5>
                        </li>
                        <li>
                            <div className="r-meta">
                            <span>-2020 </span>
                            <label>-Bachelor degree in mathmatic</label>
                            </div>
                            <h5>.......</h5>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}