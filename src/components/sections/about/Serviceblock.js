import React, { Component } from 'react';
import { Link } from "gatsby";
import services from '../../../data/services.json';

function Serviceblock ({data}){
        return (
            <section className="services-secton services-secton-three pt-120 pb-120">
                <div className="container">
                    {/* Section Title */}
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5 col-md-8 col-sm-7">
                            <div className="section-title left-border">
                                <span className="title-tag">{data.title}</span>
                                <h2>{data.heading}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="service-page-link- text-right">
                                <Link to="/services" className="main-btn btn-filled">learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="services-loop mt-50">
                        <div className="row justify-content-center">
                            {data.slice(2, 6).map((item, i) => (
                                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-service-two white-bg">
                                        <div className="top-icon">
                                            <i className="fal fa-long-arrow-right" />
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <div className="bottom-icon">
                                            <i className={item.icon} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Serviceblock;