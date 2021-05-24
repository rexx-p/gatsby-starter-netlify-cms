import React, { Component } from 'react';
import { Link } from "gatsby";

class Cta extends Component {
    render() {
        return (
            <section className="call-to-action">
                <div className="container">
                    <div className="cta-inner">
                        <div className="cat-img">
                            <img src={"/assets/img/cta/cta-img.png"} alt="img" />
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
}

export default Cta;