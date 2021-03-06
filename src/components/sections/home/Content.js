import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Blogpost from './Blogpost';
import Cta from './Cta';
import Features from './Features';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';
import Team from './Team';
import Testimonials from './Testimonials';
import Video from './Video';

const Content = ( {data} ) => {
        return (
            <Fragment>
                <Banner data={data}/>
                <Abouttext data={data.aboutUs}/>
                <Services data={data.services}/>
                <Cta data={data.quote}/>
                <Features data={data.whyus}/>
                {/* <Video/> */}
                {/* <Team/> */}
                <Skills data={data.skillset}/>
                {/* <Portfolio/>
                <Testimonials/> */}
                {/* <Blogpost/> */}
            </Fragment>
        );
}

export default Content;