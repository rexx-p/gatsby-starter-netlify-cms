import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Blogpost from './Blogpost';
import Counter from './Counter';
import Portfolio from './Portfolio';
import Services from './Services';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext/>
                <Counter/>
                <Services/>
                <Portfolio/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;