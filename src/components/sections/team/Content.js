import React, { Component, Fragment } from 'react';
import Category from './Category';
import Skills from './Skills';
import Teamblock from './Teamblock';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Teamblock/>
                <Category/>
                <Skills/>
            </Fragment>
        );
    }
}

export default Content;