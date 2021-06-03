import React, { Component } from 'react';
import { Link } from "gatsby";

const Services = ({data}) => {
    const icon1 = data.servicecard1.icon && data.servicecard1.icon.childImageSharp ? data.servicecard1.icon.childImageSharp.fluid.src : data.servicecard1.icon;
    const icon2 = data.servicecard2.icon && data.servicecard2.icon.childImageSharp ? data.servicecard2.icon.childImageSharp.fluid.src : data.servicecard2.icon;
    const icon3 = data.servicecard3.icon && data.servicecard3.icon.childImageSharp ? data.servicecard3.icon.childImageSharp.fluid.src : data.servicecard3.icon;
        return (
            <section className="services-secton pt-120 pb-200">
                <div className="container">
                    <div className="section-title mb-80 text-center both-border">
                        <span className="title-tag">{data.title}</span>
                        <h2>{data.heading}</h2>
                    </div>
                    <div className="services-loop">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center white-bg">
                                    <div className="icon">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <h4>{data.servicecard1.title}</h4>
                                    <p>{data.servicecard1.description}</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center secondary-bg doted mt-60">
                                    <div className="icon">
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    <h4>{data.servicecard2.title}</h4>
                                    <p>{data.servicecard2.description}</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center primary-bg mt-120">
                                    <div className="icon">
                                        <img src={icon3} alt="icon" />
                                    </div>
                                    <h4>{data.servicecard3.title}</h4>
                                    <p>{data.servicecard3.description}</p>
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