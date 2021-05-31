import React, { Component } from 'react';
import { Link } from "gatsby";

const Cta = ( {data} ) => {

    const quoteImageSrc = data.quoteImage && data.quoteImage.childImageSharp ? data.quoteImage.childImageSharp.fluid.src : data.quoteImage;

        return (
            <section className="call-to-action">
                <div className="container">
                    <div className="cta-inner">
                        <div className="cat-img">
                            <img src={quoteImageSrc} alt="img" />
                        </div>
                        <div className="cta-text">
                            <div className="row align-items-end">
                                <div className="col-lg-5 offset-lg-5 col-md-7 offset-md-5">
                                    <div className="section-title pl-30 left-border">
                                        <span className="title-tag">Get A Quote</span>
                                        <h2>We are here for your estimate price.</h2>
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className="cat-link"><i className="fal fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Cta;