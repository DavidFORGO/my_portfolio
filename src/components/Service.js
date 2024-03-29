import React from "react";

export default function Service(){
    return(
        <>
             <section id="services" data-scroll-index={2} className="section services-section bg-dark">
                <div className="container">
                    <div className="section-heading">
                    <h6>My Service</h6>
                    <h2>My Specialties</h2>
                    </div>
                    <div className="accordion accordion-flush" id="accordion_services">
                    <div className="accordion-item">
                        <div className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            <span className="services-title">Infographie</span>
                            <span className="services-small-desc">You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template</span>
                            <span className="accordion-icon" />
                        </button>
                        </div>
                        <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion_services">
                        <div className="accordion-body">
                            <div className="row gy-4">
                            <div className="col-sm-6 col-md-4">
                                <div className="s-img">
                                <img src="assets/img/services-5.jpg" title="" alt='' />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-8">
                                <h3>Web Design</h3>
                                <div className="s-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <span className="services-title">UI/UX Design</span>
                            <span className="services-small-desc">You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template</span>
                            <span className="accordion-icon" />
                        </button>
                        </div>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion_services">
                        <div className="accordion-body">
                            <div className="row gy-4">
                            <div className="col-sm-6 col-md-4">
                                <div className="s-img">
                                <img src="assets/img/project-2.jpg" title="" alt='' />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-8">
                                <h3>UI/UX Design</h3>
                                <div className="s-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <span className="services-title">Mobile Application</span>
                            <span className="services-small-desc">You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template</span>
                            <span className="accordion-icon" />
                        </button>
                        </div>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion_services">
                        <div className="accordion-body">
                            <div className="row gy-4">
                            <div className="col-sm-6 col-md-4">
                                <div className="s-img">
                                <img src="assets/img/project-3.jpg" title="" alt='' />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-8">
                                <h3>Mobile Application</h3>
                                <div className="s-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <span className="services-title">Website</span>
                            <span className="services-small-desc">You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template</span>
                            <span className="accordion-icon" />
                        </button>
                        </div>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion_services">
                        <div className="accordion-body">
                            <div className="row gy-4">
                            <div className="col-sm-6 col-md-4">
                                <div className="s-img">
                                <img src="assets/img/project-3.jpg" title="" alt='' />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-8">
                                <h3>Website</h3>
                                <div className="s-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                            <span className="services-title">User research</span>
                            <span className="services-small-desc">You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template</span>
                            <span className="accordion-icon" />
                        </button>
                        </div>
                        <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordion_services">
                        <div className="accordion-body">
                            <div className="row gy-4">
                            <div className="col-sm-6 col-md-4">
                                <div className="s-img">
                                <img src="assets/img/project-4.jpg" title alt='' />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-8">
                                <h3>User research</h3>
                                <div className="s-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}