import React from 'react';
import { Link } from "gatsby";


function Services({data}){
        return (
            <section className="services-secton featured-service pt-100 pb-60">
                <div className="container">
                    <div className="section-title both-border text-center mb-80">
                        <span className="title-tag">Services</span>
                        <h2>what we do</h2>
                    </div>
                    <div className="services-loop">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center white-bg mb-60">
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
                                <div className="single-service text-center secondary-bg doted mb-60">
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
                                <div className="single-service text-center primary-bg mb-60">
                                    <div className="icon">
                                        <img src={"/assets/img/services/icon-3.png"} alt="icon" />
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