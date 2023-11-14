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
                        <img src="assets/img/ena.png" title="" alt='' />
                    </div>
                    <div className="work-text">
                        <h6>Présentation des universités publique</h6>
                        <h4>
                        Modèle de Site du gouvernement  
                        </h4>
                        <div className="btn-bar">
                        <a className="gallery-link" href="assets/img/ecomm.png"><i className="bi-arrow-up-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="work-box">
                    <div className="work-img">
                        <img src="assets/img/food.png" title="" alt='' />
                    </div>
                    <div className="work-text">
                        <h6>Restaurant en ligne</h6>
                        <h4>
                        Site de fast food
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
                        <img src="assets/img/ecomm.png" title="" alt='' />
                    </div>
                    <div className="work-text">
                        <h6>Vente des appareils mobile</h6>
                        <h4>
                        Site Ecommerce 
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
                        <img src="assets/img/logoOBM.png" title="" alt='' />
                    </div>
                    <div className="work-text">
                        <h6>Logo des entrprises</h6>
                        <h4>
                        Modèle de logo conçu
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