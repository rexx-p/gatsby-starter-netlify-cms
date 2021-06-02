import React, { Component } from 'react';

const Abouttext = ({ data }) => {
    return (
        <section className="about-section about-style-three pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-tile-gallery-two">
                            <img src={"/assets/img/tile-gallery/04.jpg"} alt="img" className="image-one" />
                            <img src={"/assets/img/tile-gallery/05.jpg"} alt="img" className="image-two" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text pl-30">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">{data.title}</span>
                                <h2>{data.heading}</h2>
                            </div>
                            <p>{data.description}</p>
                            <div className="about-extra">
                                {data.extra}
                                <div className="experience-tag">
                                    <img src={"/assets/img/experience-tag.png"} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Abouttext;