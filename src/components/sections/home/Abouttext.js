import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Abouttext({data}) {
    const [focus, setFocus] = React.useState(false);
    const img1 = data.img1 && data.img1.childImageSharp ? data.img1.childImageSharp.fluid.src : data.img1;
    const img2 = data.img2 && data.img2.childImageSharp ? data.img2.childImageSharp.fluid.src : data.img2;
    const img3 = data.img3 && data.img3.childImageSharp ? data.img3.childImageSharp.fluid.src : data.img3;
    return (
        <section className="about-section pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-tile-gallery">
                            <img src={img1} alt="img" className="image-one" />
                            <img src={img2} alt="img" className="image-two" />
                            <img src={img3} alt="img" className="image-three" />
                            <img src={"/assets/img/tile-gallery/icon.png"} alt="icon" className="icon" />
                            <img src={"/assets/img/tile-gallery/icon-2.png"} alt="icon" className="zero-icon" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text pl-25">
                            <div className="section-title mb-40 left-border">
                                <span className="title-tag">About us</span>
                                <h2>{data.title}</h2>
                            </div>
                            <p>{data.description}</p>
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
                                        <p>{data.projects.description}</p>
                                    </div>
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