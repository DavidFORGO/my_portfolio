import React from "react";
import Header from "../components/Header";
import Blog from "../components/Blog";
import BlogSingle from "../components/BlogSingle";

export default function BlogPage(){
    return(
        <>
            <Header/>
            <Blog/>
            <BlogSingle/>
        </>
    )
}