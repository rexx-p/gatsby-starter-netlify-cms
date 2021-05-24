import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Abouttext(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="about-section pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-tile-gallery">
                            <img src={"/assets/img/tile-gallery/01.jpg"} alt="img" className="image-one" />
                            <img src={"/assets/img/tile-gallery/02.jpg"} alt="img" className="image-two" />
                            <img src={"/assets/img/tile-gallery/03.jpg"} alt="img" className="image-three" />
                            <img src={"/assets/img/tile-gallery/icon.png"} alt="icon" className="icon" />
                            <img src={"/assets/img/tile-gallery/icon-2.png"} alt="icon" className="zero-icon" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text pl-25">
                            <div className="section-title mb-40 left-border">
                                <span className="title-tag">About us</span>
                                <h2>Onitir help businesses elevate their value.</h2>
                            </div>
                            <p>
                                Over the years, a wide range of developments and innovations in the global IT arena have led
                                to many new IT-enabled devices and services being produced. Moreover, there is need for IT
                                today, not just in urban areas but rural regions as well.
          </p>
                            <div className="about-features mt-50">
                                <div className="sngle-features">
                                    <div className="progressbar-sec">
                                        <VisibilitySensor>
                                            {({ isVisible }) => {
                                                const percentage = isVisible ? 32 : 0;
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
                                            <CountUp start={focus ? 0 : null} end={32} duration={5} redraw={true}>
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
                                        <h4>Years of Experience</h4>
                                        <p>As a result, most of us need to know how to use computers. Our knowledge of
                  computers.</p>
                                    </div>
                                </div>
                                <div className="sngle-features">
                                    <div className="progressbar-sec">
                                        <VisibilitySensor>
                                            {({ isVisible }) => {
                                                const percentage = isVisible ? 99 : 0;
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
                                            <CountUp start={focus ? 0 : null} end={99} duration={5} redraw={true}>
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
                                        <h4>Project Done together</h4>
                                        <p>As a result, most of us need to know how to use computers. Our knowledge of
                  computers.</p>
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