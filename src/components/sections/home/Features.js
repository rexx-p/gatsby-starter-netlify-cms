import React, { Component } from 'react';
import { Link } from "gatsby";

class Features extends Component {
    render() {
        return (
            <section className="features-boxes pt-120 pb-110">
                <div className="container">
                    {/* Section Title */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7">
                            <div className="section-title left-border">
                                <span className="title-tag">Why Us</span>
                                <h2>Why Choose Us</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="text-right">
                                <Link to="/whyus" className="main-btn btn-filled">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature boxes loop */}
                    <div className="features-boxes-loop mt-100">
                        <div className="row justify-content-center justify-content-md-between">
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                <div className="feature-box">
                                    <h4><i className="fal fa-browser" /> unlimited layout</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-cog" /> Easy to customize</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-headphones-alt" /> 24/7 online support</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                            <div className="gap-for-img" />
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                <div className="feature-box">
                                    <h4><i className="fal fa-desktop" /> Retina ready work</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-globe" /> Global language</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-lock" /> High quality security</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* feature-img */}
                    <div className="feature-img">
                        <img src={"/assets/img/feature-img.png"} alt="img" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;