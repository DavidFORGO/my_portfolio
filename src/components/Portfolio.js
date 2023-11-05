import React from "react";

export default function Portfolio(){
    return(
        <section id="work" data-scroll-index={3} className="section work-section">
            <div className="container">
                <div className="section-heading">
                <h6>My Work</h6>
                <h2>Recent project</h2>
                </div>
                <div className="row gy-5 lightbox-gallery">
                <div className="col-lg-6">
                    <div className="work-box">
                    <div className="work-img">
                        <img src="assets/img/services-1.jpg" title="" alt='' />
                    </div>
                    <div className="work-text">
                        <h6>UX case study</h6>
                        <h4>
                        Bally Website Research
                        </h4>
                        <div className="btn-bar">
                        <a className="gallery-link" href="assets/img/services-1.jpg"><i className="bi-arrow-up-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="work-box">
                    <div className="work-img">
                        <img src="assets/img/services-2.jpg" title="" alt='' />
                    </div>
                    <div className="work-text">
                        <h6>UX case study</h6>
                        <h4>
                        Bally Website Research
                        </h4>
                        <div className="btn-bar">
                        <a className="gallery-link" href="assets/img/services-2.jpg"><i className="bi-arrow-up-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="work-box">
                    <div className="work-img">
                        <img src="assets/img/services-3.jpg" title="" alt='' />
                    </div>
                    <div className="work-text">
                        <h6>UX case study</h6>
                        <h4>
                        Bally Website Research
                        </h4>
                        <div className="btn-bar">
                        <a className="gallery-link" href="assets/img/services-3.jpg"><i className="bi-arrow-up-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="work-box">
                    <div className="work-img">
                        <img src="assets/img/project-4.jpg" title="" alt='' />
                    </div>
                    <div className="work-text">
                        <h6>UX case study</h6>
                        <h4>
                        Bally Website Research
                        </h4>
                        <div className="btn-bar">
                        <a className="gallery-link" href="assets/img/project-4.jpg"><i className="bi-arrow-up-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}