import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Client from './Client';
import Contact from './Contact';
import Cta from './Cta';
import Featuredservices from './Featuredservices';
import Portfolio from './Portfolio';
import Services from './Services';
import Team from './Team';
import Video from './Video';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Featuredservices />
                <Abouttext />
                <Services />
                <Portfolio />
                <Cta />
                <Team />
                <Video />
                <section className="contact-section pt-110 pb-110">
                    <Contact />
                    <Client />
                </section>
            </Fragment>
        );
    }
}

export default Content;