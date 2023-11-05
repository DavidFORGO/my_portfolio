import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function AboutPage(){
    return(
        <>
            <Header/>
            <About/>
            <Experience/>
            <Service/>
            <Portfolio/>
            <Testimonial/>
            <Blog/>
            <Contact/>
            <Footer/>
        </>
    )
}