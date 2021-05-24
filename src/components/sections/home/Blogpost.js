import React, { Component } from 'react';
import { Link } from "gatsby";
import blogpost from '../../../data/blog.json';

class Blogpost extends Component {
    render() {
        return (
            <section className="latetest-post pt-120 pb-90">
                <div className="container">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">Blog</span>
                        <h2>news feeds</h2>
                    </div>
                    {/* Blog Loop */}
                    <div className="row justify-content-center">
                        {blogpost.slice(0, 3).map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-10">
                                <div className="latest-post-box mb-30 text-center">
                                    <ul className="post-meta">
                                        <li><Link to={"/blog-details/" + item.id}><i className="fal fa-calendar-alt" />{item.postdate}</Link></li>
                                        <li><Link to={"/blog-details/" + item.id}><i className="fal fa-comments" />{item.reviews.length} Comments</Link></li>
                                    </ul>
                                    <div className="post-img mb" style={{ backgroundImage: "url(/" + item.image[0] + ")" }} />
                                    <div className="post-desc mt-35">
                                        <h3><Link to={"/blog-details/" + item.id}>{item.title.slice(0, 37)}</Link></h3>
                                        <p>{item.shortdescription.slice(0, 100)}</p>
                                        <Link to={"/blog-details/" + item.id} className="post-link"> Read More </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        );
    }
}

export default Blogpost;