import React, { Component } from 'react';
import { Link } from "gatsby";

const Content = ( {data} ) => {


    const quoteImageSrc = data.quoteImage && data.quoteImage.childImageSharp ? data.quoteImage.childImageSharp.fluid.src : data.quoteImage;
        return (
            <section className="services-secton pt-120 pb-200">
                <div className="container">
                    <div className="section-title mb-80 text-center both-border">
                        <span className="title-tag">Services</span>
                        <h2>What We Do</h2>
                    </div>
                    <div className="services-loop">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center white-bg">
                                    <div className="icon">
                                        <img src={"/assets/img/services/icon-1.png"} alt="icon" />
                                    </div>
                                    <h4>Date Research Analysis</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center secondary-bg doted mt-60">
                                    <div className="icon">
                                        <img src={"/assets/img/services/icon-2.png"} alt="icon" />
                                    </div>
                                    <h4>Date Research Analysis</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center primary-bg mt-120">
                                    <div className="icon">
                                        <img src={quoteImageSrc} alt="icon" />
                                    </div>
                                    <h4>Maintainance &amp; Data sent</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Services;