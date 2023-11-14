import React from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function PortfolioPage(){
    return(
        <>
            <Header/>
            <Portfolio/>
            <Testimonial/>
            <Blog/>
            <Contact/>
            <Footer/>
        </>
    )
}