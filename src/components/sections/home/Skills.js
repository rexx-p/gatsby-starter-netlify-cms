import React, { Component } from 'react';
import { Link } from "gatsby";
import skills from '../../../data/skills.json';

function Skills({data}){
    const banner = data.skillsetbanner && data.skillsetbanner.childImageSharp ? data.skillsetbanner.childImageSharp.fluid.src : data.skillsetbanner;
        return (
            <section className="skills-section pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-bars">
                                <div className="section-title mb-60 left-border">
                                    <span className="title-tag">{data.title}</span>
                                    <h2>{data.heading}</h2>
                                </div>
                                {Object.keys(data).slice(3,6).map((item, i) => (
                                    <div key={i} className="skill-progress mb-45">
                                        <div className="title d-flex justify-content-between">
                                            <span>{data[item].title}</span>
                                            <span>{data[item].skillvalue}%</span>
                                        </div>
                                        <div className="progressbar-wrap">
                                            <div className="progressbar" style={{ width: (item.value) + "%" }}>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-img text-right">
                                <img src={banner} alt="img" />
                            </div>
                        </div>
                        <Link to="/contact" className="main-btn btn-filled hire-btn">Hire Us Now</Link>
                    </div>
                </div>
            </section>
        );
}

export default Skills;