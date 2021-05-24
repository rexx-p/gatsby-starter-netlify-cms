import React, { Component } from 'react';
import { Link } from "gatsby";

class Abouttext extends Component {
    render() {
        return (
            <div className="about-text-warp">
                <div className="container">
                    <div className="row no-gutters justify-content-center justify-content-lg-start">
                        <div className="col-lg-5 col-md-10">
                            <div className="about-text position-relative">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About us</span>
                                    <h2>Onitir help businesses elevate their value.</h2>
                                </div>
                                <p className="mb-30">Over the years, a wide range of developments and innovations in the global
                                IT
                                arena have led to many new IT-enabled devices and services being produced. Moreover,
                                there
            is need for IT today, not just in urban areas but rural regions as well.</p>
                                <p>Entrepreneurs, artist, athletes and other individuals who have excelled in their field
                                share
                                fun and inspiring stories from their journey to success. Individuals who have excelled
                                in
            their field share.</p>
                                <Link to="/about" className="main-btn btn-filled mt-40">Get Started Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mockup-img">
                    <img src={"/assets/img/about/about-mock.png"} alt="mockup-img" />
                </div>
                <div className="about-small-img">
                    <img src={"/assets/img/about/about.jpg"} alt="about-small-img" />
                </div>
            </div>
        );
    }
}

export default Abouttext;