import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Blogpost from './Blogpost';
import Counter from './Counter';
import Portfolio from './Portfolio';
import Services from './Services';

const Content = ({ data }) => {
    return (
        <Fragment>
            <Abouttext data={data}/>
            <Counter />
            <Services />
            {/* <Portfolio />
            <Blogpost /> */}
        </Fragment>
    );
}

export default Content;