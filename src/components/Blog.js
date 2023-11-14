import React from "react";

export default function Blog(){
    return(
        <section id="blog" data-scroll-index={4} className="section blog-section bg-dark">
            <div className="container">
                <div className="section-heading">
                <h6>Our Blogs</h6>
                <h2>Our Latest Update</h2>
                </div>
                <div className="row gy-4">
                <div className="col-lg-3 col-sm-6">
                    <div className="blog-post">
                    <div className="blog-post-img">
                        <a className="px_modal" href="index.html#blog_1">
                        <img src="assets/img/blog-1.jpg" alt='' />
                        </a>
                    </div>
                    <div className="blog-post-info">
                        <h6>10 July, 2022</h6>
                        <h2><a className="px_modal" href="index.html#blog_1">12 unique example of portfolio websites</a></h2>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="blog-post">
                    <div className="blog-post-img">
                        <a className="px_modal" href="index.html#blog_2">
                        <img src="assets/img/blog-2.jpg" title="" alt='' />
                        </a>
                    </div>
                    <div className="blog-post-info">
                        <h6>10 Otobre, 2023</h6>
                        <h2><a className="px_modal" href="index.html#blog_2"> NgModel & driven form en angular</a></h2>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="blog-post">
                    <div className="blog-post-img">
                        <a className="px_modal" href="index.html#blog_3">
                        <img src="assets/img/blog-3.jpg" title="" alt='' />
                        </a>
                    </div>
                    <div className="blog-post-info">
                        <h6>10 July, 2022</h6>
                        <h2><a className="px_modal" href="index.html#blog_3">12 unique example of portfolio websites</a></h2>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="blog-post">
                    <div className="blog-post-img">
                        <a className="px_modal" href="index.html#blog_4">
                        <img src="assets/img/blog-4.jpg" alt=''/>
                        </a>
                    </div>
                    <div className="blog-post-info">
                        <h6>10 July, 2022</h6>
                        <h2><a className="px_modal" href="index.html#blog_4">12 unique example of portfolio websites</a></h2>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}