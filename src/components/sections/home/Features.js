import React, { Component } from 'react';
import { Link } from "gatsby";

function Features({data}){
        return (
            <section className="features-boxes pt-120 pb-110">
                <div className="container">
                    {/* Section Title */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7">
                            <div className="section-title left-border">
                                <span className="title-tag">{data.title}</span>
                                <h2>{data.heading}</h2>
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
                                    <h4><i className="fal fa-browser" />{data.option1.title}</h4>
                                    <p>{data.option1.description}</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-cog" /> {data.option2.title}</h4>
                                    <p>{data.option2.description}</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-headphones-alt" /> {data.option3.title}</h4>
                                    <p>{data.option3.description}</p>
                                </div>
                            </div>
                            <div className="gap-for-img" />
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                <div className="feature-box">
                                    <h4><i className="fal fa-desktop" /> {data.option4.title}</h4>
                                    <p>{data.option4.description}</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-globe" /> {data.option5.title}</h4>
                                    <p>{data.option5.description}</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-lock" /> {data.option6.title}</h4>
                                    <p>{data.option6.description}</p>
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

export default Features;