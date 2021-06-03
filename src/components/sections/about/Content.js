import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Blogpost from './Blogpost';
import Counter from './Counter';
import Framework from './Framework';
import Serviceblock from './Serviceblock';

const Content = ({ data }) => {
        return (
            <Fragment>
                <Abouttext data ={data.aboutUs}/>
                <Serviceblock data ={data.services}/>
                <Framework data ={data.framework}/>
                {/* <Counter />
                <Blogpost /> */}
            </Fragment>
        );
}

export default Content;