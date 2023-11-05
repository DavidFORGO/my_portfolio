import React from "react";

export default function Testimonial(){
    return(
        <>
            <section className="section testimonials-section bg-g">
            <div className="container">
                <div className="section-heading">
                <h6>Testimonial</h6>
                <h2>What they says</h2>
                </div>
                <div className="owl-carousel" data-items={2} data-nav-dots="true" data-lg-items={2} data-md-items={1} data-sm-items={1} data-xs-items={1} data-space={24} data-autoplay="false">
                <div className="testimonials-box mb-3">
                    <div className="row gy-4">
                        <div className="col-sm-7 col-lg-8">
                            <div className="t-text">
                            <p>“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”</p>
                            <div className="t-lead">
                                <h6>- Ema Watson</h6>
                                <span>Chief Executive Officer, Brazil</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-lg-4">
                            <div className="t-avatar">
                            <img src="assets/img/avatar-1.jpg" title="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials-box mb-3">
                    <div className="row gy-4">
                        <div className="col-sm-7 col-lg-8">
                            <div className="t-text">
                            <p>“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”</p>
                            <div className="t-lead">
                                <h6>- Ema Watson</h6>
                                <span>Chief Executive Officer, Brazil</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-lg-4">
                            <div className="t-avatar">
                            <img src="assets/img/avatar-2.jpg" title="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials-box mb-3">
                    <div className="row gy-4">
                        <div className="col-sm-7 col-lg-8">
                            <div className="t-text">
                            <p>“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”</p>
                            <div className="t-lead">
                                <h6>- Ema Watson</h6>
                                <span>Chief Executive Officer, Brazil</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-lg-4">
                            <div className="t-avatar">
                            <img src="assets/img/avatar-1.jpg" title="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials-box mb-3">
                    <div className="row gy-4">
                        <div className="col-sm-7 col-lg-8">
                            <div className="t-text">
                            <p>“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”</p>
                            <div className="t-lead">
                                <h6>- Ema Watson</h6>
                                <span>Chief Executive Officer, Brazil</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-lg-4">
                            <div className="t-avatar">
                            <img src="assets/img/avatar-2.jpg" title="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="testimonials-brand">
                <div className="owl-carousel" data-items={5} data-nav-dots="true" data-lg-items={4} data-md-items={3} data-sm-items={3} data-xs-items={2} data-space={24} data-autoplay="false">
                    <div className="brand-box">
                    <img src="assets/img/brand-1.png" title="" alt=""/>
                    </div>
                    <div className="brand-box">
                    <img src="assets/img/brand-2.png" title="" alt=""/>
                    </div>
                    <div className="brand-box">
                    <img src="assets/img/brand-3.png" title="" alt=""/>
                    </div>
                    <div className="brand-box">
                    <img src="assets/img/brand-4.png" title="" alt="" />
                    </div>
                </div>
                </div>
            </div>
            </section>

        </>
    )
}