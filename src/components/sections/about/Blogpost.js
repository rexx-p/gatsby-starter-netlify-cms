import React, { Component } from 'react';
import { Link } from "gatsby";
import blogpost from '../../../data/blog.json';
import { getCategories } from '../../../helper/bloghelper';

class Blogpost extends Component {
    render() {
        return (
            <section className="latetest-post pt-120 pb-90">
                <div className="container">
                    {/* Section  Title */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7 col-6">
                            <div className="section-title left-border">
                                <span className="title-tag">Blog</span>
                                <h2>news feeds</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 col-6">
                            <div className="blog-btn text-right">
                                <Link to="/blog-grid" className="main-btn btn-filled">learn more</Link>
                            </div>
                        </div>
                    </div>
                    {/* post Loop */}
                    <div className="post-loop mt-70">
                        <div className="row justify-content-center">
                            {blogpost.slice(0, 3).map((item, i) => (
                                <div key={i} className="col-lg-4 col-md-6">
                                    <div className="post-grid-box mb-30">
                                        <ul className="post-cat">
                                            {getCategories(item.categories).slice(0, 2).map((cat, i) => (
                                                <li key={i}>
                                                    <Link to={"/blog/cat/" + cat.id}>{cat.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="post-desc">
                                            <h4><Link to={"/blog-details/" + item.id}>{item.title.slice(0, 37)}</Link>
                                            </h4>
                                            <p>{item.shortdescription.slice(0, 100)}</p>
                                        </div>
                                        <ul className="post-meta">
                                            <li><Link to={"/blog-details/" + item.id}><i className="fal fa-calendar-alt" />{item.postdate}</Link></li>
                                            <li><Link to={"/blog-details/" + item.id}><i className="fal fa-comments" />{item.reviews.length} Comments</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogpost;