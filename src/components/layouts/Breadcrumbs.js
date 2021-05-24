import React, { Component } from 'react';
import { Link } from "gatsby";

class Breadcrumbs extends Component {
    render() {
        return (
            <section className="breadcrumb-section" style={{ backgroundImage: "url(/assets/img/breadcrumb.jpg)" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <h1>{this.props.breadcrumb.pagename}</h1>
                        <p>Your Partner for Software Innovation</p>
                    </div>
                    <ul className="breadcrumb-nav">
                        <li><Link to="/">Home</Link></li>
                        <li>{this.props.breadcrumb.pagename}</li>
                    </ul>
                    <span className="btg-text">onitir</span>
                </div>
                <div className="breadcrumb-shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z">
                        </path>
                    </svg>
                </div>
            </section>
        );
    }
}

export default Breadcrumbs;