import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import counter from '../../../data/counter.json';

function Counter(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="counter-section">
            <div className="container">
                <div className="counter-inner">
                    <div className="row">
                        {counter.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-3 col-6">
                                <div className="counter-box">
                                    <h1>
                                        <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                            {({ countUpRef }) => (
                                                <Fragment>
                                                    <span ref={countUpRef} className="counter" />
                                                    <VisibilitySensor
                                                        onChange={isVisible => {
                                                            if (isVisible) {
                                                                setFocus(true);
                                                            }
                                                        }}
                                                    >
                                                        <span>K+</span>
                                                    </VisibilitySensor>
                                                </Fragment>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <p className="title">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <span className="big-text">
                        Onitir
      </span>
                </div>
            </div>
        </section>
    );
}

export default Counter;