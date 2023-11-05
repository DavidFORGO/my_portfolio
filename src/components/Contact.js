import React from "react";

export default function Contact(){
    return(
        <section id="contact" data-scroll-index={5} className="section contact-section">
            <div className="container">
                <div className="row gy-5">
                <div className="col-lg-5">
                    <div className="section-heading">
                    <h5>Contact</h5>
                    <h2>Reach out me</h2>
                    </div>
                    <div className="contact-info">
                    <ul>
                        <li>
                        <div className="icon">
                            <i className="bi-chat-left-dots-fill" />
                        </div>
                        <div className="text">
                            <label>Chat to us</label>
                            <p>Our friendly team is there to help. <span><a className="text-reset" href="mailto:davidforgo48@gmail.com">davidforgo48@gmail.com</a></span></p>
                        </div>
                        </li>
                        <li>
                        <div className="icon">
                            <i className="bi-compass" />
                        </div>
                        <div className="text">
                            <label>Visit us</label>
                            <p> Come say hello at our office HQ. <span>RN, <br />  3 Ouagadougou</span></p>
                        </div>
                        </li>
                        <li>
                        <div className="icon">
                            <i className="bi-phone" />
                        </div>
                        <div className="text">
                            <label>Call us</label>
                            <p>Mon-Fri from 8am to 5pm. <span>+226 65480439</span></p>
                        </div>
                        </li>
                    </ul>
                    <div className="google-map">
                        <div className="ratio ratio-21x9">
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7 ps-xl-5">
                    <div className="contact-form bg-g">
                    <div className="contact-head">
                        <h4>Got Ideas? We've got the skills. Let's team up.</h4>
                        <p>Tell us more about yourself and what you're got in mind.</p>
                    </div>
                    <form id="contact-form" method="POST">
                        <div className="row gx-3 gy-4">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label className="form-label">First name</label>
                            <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label className="form-label">Your Email</label>
                            <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                            <label className="form-label">Subject</label>
                            <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="form-label">Your message</label>
                            <textarea name="message" id="message" placeholder="Your message *" rows={6} className="form-control" defaultValue={""} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="send">
                            <button className="px-btn dark w-100" type="button" value="Send"> Send Message</button>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}