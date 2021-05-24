import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../components/layouts/Headerthree';
import Breadcrumbs from '../components/layouts/Breadcrumbs';
import Footer from '../components/layouts/Footer';
import Content from '../components/sections/blog-standard/Content';

const pagelocation = 'Blog Standard'

class Blogstandard extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Onitir - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                {/* <Content
                    catId={this.props.match.params.catId}
                    tagId={this.props.match.params.tagId}
                    userId={this.props.match.params.userId}
                    query={this.props.match.params.query}
                /> */}
                <Footer footer={{ style: "footer-style-three", logo: "assets/img/logo.png" }} />
            </Fragment>
        );
    }
}

export default Blogstandard;