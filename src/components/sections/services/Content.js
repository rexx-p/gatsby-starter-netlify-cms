import React, { Component, Fragment } from 'react';
import Blogpost from './Blogpost';
import Client from './Client';
import Features from './Features';
import Framework from './Framework';
import Testimonials from './Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Features />
                <Framework />
                <section className="testimonials-clinet-section pt-120 pb-120">
                    <Testimonials />
                    <Client />
                </section>
                <Blogpost />
            </Fragment>
        );
    }
}

export default Content;