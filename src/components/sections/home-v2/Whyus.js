import React, { Component } from 'react';
import { Link } from "gatsby";
import Masonry from 'react-masonry-component';
import blocks from '../../../data/whyusblocks.json';

class Whyus extends Component {
    render() {
        return (
            <section className="features-boxes-two pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="features-boxes-loop">
                                {/* Loop start */}
                                <Masonry className="row fetaure-masonary">
                                    {blocks.map((item, i) => (
                                        <div className="col-md-6 col-sm-6" key={i}>
                                            <div className={"feature-box-two text-center " + item.extclass}>
                                                <div className="icon text-center">
                                                    <i className={item.icon} />
                                                </div>
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                                <span className="count">0{1 + i}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Masonry>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="feature-text pl-50">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">COLLABRATION WITH US</span>
                                    <h2>Dedicated IT Solutions with 25 Years Experience.</h2>
                                </div>
                                <p>Over the years, a wide range of developments and innovations in the global IT arena have led
                                to many new IT-enabled devices and services being produced. Moreover, there is need for IT
            today, not just in urban areas but rural regions as well.</p>
                                <ul className="feature-icon mt-40">
                                    <li>
                                        <img src={"/assets/img/services/icon-1.png"} alt="icon" />
                                        <h6>Date Research Analysis</h6>
                                    </li>
                                    <li>
                                        <img src={"/assets/img/services/icon-3.png"} alt="icon" />
                                        <h6>Date Research Analysis</h6>
                                    </li>
                                </ul>
                                <Link to="/services" className="main-btn btn-filled mt-40">Our Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Whyus;