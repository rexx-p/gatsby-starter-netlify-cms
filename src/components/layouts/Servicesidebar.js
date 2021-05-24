import React, { Component } from 'react';
import { Link } from "gatsby";
import blogcategory from '../../data/blogcategory.json';

class Servicesidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* Service cat */}
                <div className="widget service-cat-widget mb-40">
                    <h5 className="widget-title">Category</h5>
                    <ul>
                        {blogcategory.map((item, i) => (
                            <li key={i}>
                                <Link to={"/blog/cat/" + item.id}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Brouchers widget */}
                <div className="widget brouchers-widget mb-40">
                    <h5 className="widget-title">Brouchers</h5>
                    <ul>
                        <li><Link to="#"><i className="fas fa-file-pdf" />DOWNLOAD PDF FILE</Link></li>
                        <li><Link to="#"><i className="fas fa-file-powerpoint" />OUR ISO CERTIFICATES</Link></li>
                        <li><Link to="#"><i className="fas fa-file-image" />OUR ISO CERTIFICATES</Link></li>
                    </ul>
                </div>
                {/* Contact Widget */}
                <div className="widget contact-widget mb-40">
                    <h5 className="widget-title">Contact Us</h5>
                    <form>
                        <div className="input-group">
                            <span className="icon"><i className="fas fa-user" /></span>
                            <input type="text" placeholder="Enter Your Name" />
                        </div>
                        <div className="input-group">
                            <span className="icon"><i className="fas fa-envelope" /></span>
                            <input type="email" placeholder="Enter email" />
                        </div>
                        <div className="input-group textarea">
                            <span className="icon"><i className="fas fa-edit" /></span>
                            <textarea placeholder="Enter message" />
                        </div>
                        <div className="text-center mt-20">
                            <button type="submit" className="main-btn btn-filled">Get A Quote</button>
                        </div>
                    </form>
                </div>
                {/* Bannner Widget */}
                <div className="widget banner-ad-widget">
                    <img src={"/assets/img/banner-widget-2.jpg"} alt="img" />
                </div>
            </div>
        );
    }
}

export default Servicesidebar;