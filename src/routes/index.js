import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";



export default function MonRouter() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/service" element={<ServicePage/>} />
            <Route path="/portfolio" element={<PortfolioPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            
          </Routes>
      </BrowserRouter>
    );
  }