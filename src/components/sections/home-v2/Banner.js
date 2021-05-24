import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <section className="banner-section banner-style-two">
                <div className="single-banner">
                    <div className="container-fluid custom-container-two">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="banner-img">
                                    <img src={"/assets/img/banner/circle-icon.png"} alt="icon" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="banner-text">
                                    <a rel={'external'} href={"https://www.youtube.com/watch?v=TKnufs85hXk"} className="video-icon popup-video"><i className="fas fa-play" /></a>
                                    <h1>We Create Perfect Brand Goods Value</h1>
                                    <p>Bring your ideas to life with us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;