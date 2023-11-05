import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import About from "../components/About";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience"

export default function HomePage(){
    return(
        <>
            <Header/>
            <Home/>
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