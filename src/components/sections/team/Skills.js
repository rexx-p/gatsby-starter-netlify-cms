import React, { Component } from 'react';
import skills from '../../../data/skills.json';

class Skills extends Component {
    render() {
        return (
            <section className="skills-section bg-transparent pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-bars">
                                <div className="section-title mb-60 left-border">
                                    <span className="title-tag">skillset</span>
                                    <h2> Check Skillset &amp; Manupulation </h2>
                                </div>
                                {skills.slice(0, 3).map((item, i) => (
                                    <div key={i} className="skill-progress mb-45">
                                        <div className="title d-flex justify-content-between">
                                            <span>{item.title}</span>
                                            <span>{item.value}%</span>
                                        </div>
                                        <div className="progressbar-wrap">
                                            <div className="progressbar" style={{ width: (item.value) + "%" }}>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-img text-right">
                                <img src={"/assets/img/skill-img-2.jpg"} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Skills;