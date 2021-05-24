import React, { Component } from 'react';
import faqs from '../../../data/faqs.json';
import { Accordion, Button } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <section className="faq-wrapper pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <Accordion defaultActiveKey={1} className="faq-accordion faq-loop accordion">
                                {faqs.map((item, i) => (
                                    <div key={i} className="card">
                                        <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                            <div className="card-body">
                                                {item.text}
                                            </div>
                                        </Accordion.Collapse>
                                        <div className="card-header">
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                                {item.title}
                                                <span className="icon"><span>+</span></span>
                                            </Accordion.Toggle>
                                        </div>
                                    </div>
                                ))}
                            </Accordion>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            {/* Page Sidebar */}
                            <div className="sidebar">
                                {/* Contact Widget */}
                                <div className="widget contact-widget mb-40">
                                    <h5 className="widget-title">Contact Us</h5>
                                    <form>
                                        <div className="input-group">
                                            <span className="icon"><i className="fas fa-user" /></span>
                                            <input type="text" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="input-group">
                                            <span className="icon"><i className="fas fa-envelope" /></span>
                                            <input type="email" placeholder="Enter email" />
                                        </div>
                                        <div className="input-group textarea">
                                            <span className="icon"><i className="fas fa-edit" /></span>
                                            <textarea placeholder="Enter message" />
                                        </div>
                                        <div className="text-center mt-20">
                                            <button type="submit" className="main-btn btn-filled">Get A Quote</button>
                                        </div>
                                    </form>
                                </div>
                                {/* Bannner Widget */}
                                <div className="widget banner-ad-widget">
                                    <img src={"/assets/img/banner-widget-2.jpg"} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;