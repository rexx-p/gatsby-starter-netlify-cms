import React, { Component, Fragment } from 'react';
import { Link } from "gatsby";
import blogpost from '../../data/blog.json';

class Canvas extends Component {
    render() {
        return (
            <Fragment>
                <div className="widget recent-post">
                    <h4 className="widget-title">Recent Posts</h4>
                    <ul>
                        {blogpost.slice(0, 3).map((item, i) => (
                            <li key={i}>
                                <div className="post-img" style={{ backgroundImage: "url(/" + item.image[0] + ")" }}>
                                </div>
                                <div className="post-content">
                                    <h6>
                                        <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                                    </h6>
                                    <span className="time"><i className="far fa-clock" />{item.postdate}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="widget contact-widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <ul>
                        <li>
                            <i className="far fa-map-marker-alt" />
        305 Royal Track Suite 019, USA
      </li>
                        <li>
                            <i className="far fa-phone" />
                            <Link to="#">+10910-910920</Link>
                        </li>
                        <li>
                            <i className="far fa-envelope-open" />
                            <Link to="#">example@example.com</Link>
                        </li>
                    </ul>
                </div>
                <div className="widget social-widget">
                    <h4 className="widget-title">Follow Us</h4>
                    <ul>
                        <li>
                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                            <Link to="#"><i className="fab fa-twitter" /></Link>
                            <Link to="#"><i className="fab fa-instagram" /></Link>
                            <Link to="#"><i className="fab fa-behance" /></Link>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Canvas;