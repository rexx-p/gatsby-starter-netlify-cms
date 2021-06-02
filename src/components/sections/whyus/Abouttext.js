import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Abouttext({data}) {
    const [focus, setFocus] = React.useState(false);
    const whyUsImage = data.whyUsImage && data.whyUsImage.childImageSharp ? data.whyUsImage.childImageSharp.fluid.src : data.whyUsImage;

    return (
        <section className="about-section">
            <div className="container">
                <div className="with-man-shape">
                    <div className="row justify-content-center justify-content-lg-end">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text">
                                <div className="section-title mb-40 left-border">
                                    <span className="title-tag">{data.aboutUs.title}</span>
                                    <h2>{data.aboutUs.heading}</h2>
                                </div>
                                <p>{data.aboutUs.description}</p>
                                <div className="about-features mt-50">
                                    <div className="sngle-features">
                                        <div className="progressbar-sec">
                                            <VisibilitySensor>
                                                {({ isVisible }) => {
                                                    const percentage = isVisible ? data.experience.total : 0;
                                                    return (
                                                        <CircularProgressbar className="chart"
                                                            value={percentage}
                                                            strokeWidth={5}
                                                            styles={buildStyles({
                                                                pathTransitionDuration: 1,
                                                                pathColor: '#ffaa17',
                                                                trailColor: '#e2e8ee',
                                                            })} />
                                                    );
                                                }}
                                            </VisibilitySensor>

                                            <span className="icon"><i className="fas fa-award" /></span>
                                        </div>
                                        <div className="counter-box">
                                            <span className="timer">
                                                <CountUp start={focus ? 0 : null} end={data.experience.total} duration={5} redraw={true}>
                                                    {({ countUpRef }) => (
                                                        <Fragment>
                                                            <span ref={countUpRef} />
                                                            <VisibilitySensor
                                                                onChange={isVisible => {
                                                                    if (isVisible) {
                                                                        setFocus(true);
                                                                    }
                                                                }}
                                                            >
                                                                <span>+</span>
                                                            </VisibilitySensor>
                                                        </Fragment>
                                                    )}
                                                </CountUp>
                                            </span>
                                        </div>
                                        <div className="desc">
                                            <h4>{data.experience.title}</h4>
                                            <p>{data.experience.description}</p>
                                        </div>
                                    </div>
                                    <div className="sngle-features">
                                        <div className="progressbar-sec">
                                            <VisibilitySensor>
                                                {({ isVisible }) => {
                                                    const percentage = isVisible ? data.projects.total : 0;
                                                    return (
                                                        <CircularProgressbar className="chart"
                                                            value={percentage}
                                                            strokeWidth={5}
                                                            styles={buildStyles({
                                                                pathTransitionDuration: 1,
                                                                pathColor: '#ffaa17',
                                                                trailColor: '#e2e8ee',
                                                            })} />
                                                    );
                                                }}
                                            </VisibilitySensor>

                                            <span className="icon"><i className="fas fa-globe" /></span>
                                        </div>
                                        <div className="counter-box">
                                            <span className="timer">
                                                <CountUp start={focus ? 0 : null} end={data.projects.total} duration={5} redraw={true}>
                                                    {({ countUpRef }) => (
                                                        <Fragment>
                                                            <span ref={countUpRef} />
                                                            <VisibilitySensor
                                                                onChange={isVisible => {
                                                                    if (isVisible) {
                                                                        setFocus(true);
                                                                    }
                                                                }}
                                                            >
                                                                <span>+</span>
                                                            </VisibilitySensor>
                                                        </Fragment>
                                                    )}
                                                </CountUp>
                                            </span>
                                        </div>
                                        <div className="desc">
                                            <h4>{data.projects.title}</h4>
                                            <p>{ data.projects.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-man-img">
                        <div className="shape">
                            <img src={whyUsImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Abouttext;