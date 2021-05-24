import React, { Component } from 'react';
import Sidebar from '../../layouts/Servicesidebar';
import faqs from '../../../data/faqs.json';
import { Accordion, Button } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <section className="service-details-wrap pt-150 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="service-details">
                                <div className="thmb mb-50">
                                    <img src={"/assets/img/details/01.jpg"} alt="img" />
                                </div>
                                <div className="details-text mb-50">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">it consultancy</span>
                                        <h2>Dedicated IT Solutions with 25 Years Experience in this field.</h2>
                                    </div>
                                    <p className="mb-30">
                                        Once a business owner defined the needs to take a business to the next
                                        level, a decision maker will define a scope, cost and a time frame of the project.[1]
                                        The role of the IT consultancy company is to support and nurture the company from the
                                        very beginning of the project until the end, and deliver the project not only in the
                                        scope, time and cost but also with complete customer satisfaction.
            </p>
                                    <p>
                                        The scope of a project is linked intimately to the proposed business processes and
                                        systems that the project is going to deliver. Regardless of whether the project is to
                                        launch a new product range or discontinue unprofitable parts of the business, the change
                                        will have some impact on business processes and systems. The documentation of your
                                        business processes and system requirements are as fundamental to project scoping as an
                                        architects plans would be to the costing and scoping of the construction of a building.
                                        The most successful business projects are always those that are driven by an employee
                                        who has the authority, vision and influence to drive the required changes in a business.
                                        It is highly unlikely that a business owner (decision maker or similar) will realize the
                                        changes unless one has one of these people in the employment. However, the project
                                        leadership role typically requires significant experience and skills which are not
                                        usually found within a company focused on day-to-day operations. Due to this requirement
                                        within more significant business change projects/programs, outside expertise is often
                                        sought from firms which can bring this specific skill set to the company.
            </p>
                                </div>
                                <div className="feature-list-wrap mb-50">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">features</span>
                                        <h2>Why Choose Us</h2>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row align-items-center">
                                            <div className="col-sm-5">
                                                <div className="list-img">
                                                    <img src={"/assets/img/details/02.jpg"} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-sm-7">
                                                <div className="list-text">
                                                    <p>The most successful business projects are always those that are driven by
                                                    an employee who has the authority, vision and influence to drive the
                      required changes in a business.</p>
                                                    <ul>
                                                        <li><i className="fal fa-check" /> Advisory skills</li>
                                                        <li><i className="fal fa-check" /> Technical skills</li>
                                                        <li><i className="fal fa-check" /> Management skills</li>
                                                        <li><i className="fal fa-check" /> Business and management language</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">faq</span>
                                        <h2>get every answers here</h2>
                                    </div>
                                    <Accordion defaultActiveKey={1} className="faq-accordion faq-loop accordion">
                                        {faqs.slice(0, 5).map((item, i) => (
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
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;