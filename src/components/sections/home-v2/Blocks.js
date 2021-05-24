import React, { Component } from 'react';
import blocks from '../../../data/blocks.json';

class Blocks extends Component {
    render() {
        return (
            <div className="about-iconic-boxes">
                <div className="container">
                    <div className="row justify-content-center">
                        {blocks.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-8">
                                <div className="iconic-box">
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                    <span className="icon"><i className="fal fa-check" /></span>
                                    <span className="count">0{1 + i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blocks;