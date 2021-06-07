import React, { Component } from 'react';

const Abouttext = ({ data }) => {
    const img1 = data.img1 && data.img1.childImageSharp ? data.img1.childImageSharp.fluid.src : data.img1;
    const img2 = data.img2 && data.img2.childImageSharp ? data.img2.childImageSharp.fluid.src : data.img2;
    const img3 = data.img3 && data.img3.childImageSharp ? data.img3.childImageSharp.fluid.src : data.img3;
    
    return (
        <section className="about-section about-style-three pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-tile-gallery-two">
                            <img src={img1} alt="img" className="image-one" />
                            <img src={img2} alt="img" className="image-two" />
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
                                    <img src={img3} alt="img" />
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