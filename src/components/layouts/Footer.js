import React, { Component, Fragment } from 'react';
import { Link } from "gatsby";
import Backtotop from './Backtotop';
import blogpost from '../../data/blog.json';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Backtotop />
                <footer className={this.props.footer.style}>
                 <div className="copy-right-area">
                        <div className="container">
                            <div className="copyrigt-text d-sm-flex justify-content-between">
                                <p>Copyright By@<Link to="#">Yourweb</Link> - 2021</p>
                                <p>Design By@<Link to="#">Yourweb</Link> - 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;