import React, { Component } from 'react';
import { Tab, Nav } from 'react-bootstrap'
import frameworktabs from '../../../data/frameworktabs.json';

function Framework({data}){
        return (
            <section className="framework-section padding-bottom-extra">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="framework-img">
                                <img src={"/assets/img/framework.jpg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="framework-text pl-20">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">{data.title}</span>
                                    <h2>{data.heading}</h2>
                                </div>
                                <Tab.Container defaultActiveKey="tab0">
                                    <Tab.Content>
                                        {Object.keys(data).slice(3,7).map((item, i) => (
                                            <Tab.Pane key={i} eventKey={"tab" + i}>
                                                <p>
                                                    {data[item].description}
                                                </p>
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                    <Nav variant="tabs" className="framework-list nav nav-pills mt-25">
                                        {Object.keys(data).slice(3,7).map((item, i) => (
                                            <Nav.Item key={i}>
                                                <Nav.Link eventKey={"tab" + i}>
                                                    <span className="icon">
                                                        <i className={data[item].icon}></i>
                                                    </span>
                                                    {data[item].title}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Framework;