import React from 'react';
import { Link } from "gatsby";


function Services({data}){
    const icon1 = data.services.servicecard1.icon && data.services.servicecard1.icon.childImageSharp ? data.services.servicecard1.icon.childImageSharp.fluid.src : data.services.servicecard1.icon;
    const icon2 = data.services.servicecard2.icon && data.services.servicecard2.icon.childImageSharp ? data.services.servicecard2.icon.childImageSharp.fluid.src : data.services.servicecard2.icon;
    const icon3 = data.services.servicecard3.icon && data.services.servicecard3.icon.childImageSharp ? data.services.servicecard3.icon.childImageSharp.fluid.src : data.services.servicecard3.icon;
        return (
            <section className="services-secton featured-service pt-100 pb-60">
                <div className="container">
                    <div className="section-title both-border text-center mb-80">
                        <span className="title-tag">{data.services.title}</span>
                        <h2>{data.services.heading}</h2>
                    </div>
                    <div className="services-loop">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center white-bg mb-60">
                                    <div className="icon">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <h4>{data.services.servicecard1.title}</h4>
                                    <p>{data.services.servicecard1.description}</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center secondary-bg doted mb-60">
                                    <div className="icon">
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    <h4>{data.services.servicecard2.title}</h4>
                                    <p>{data.services.servicecard2.description}</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center primary-bg mb-60">
                                    <div className="icon">
                                        <img src={icon3} alt="icon" />
                                    </div>
                                    <h4>{data.services.servicecard3.title}</h4>
                                    <p>{data.services.servicecard3.description}</p>
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