import React, { Component } from 'react';
import { Link } from "gatsby";
import portfolio from '../../../data/portfolio.json';
import { getCategories } from '../../../helper/portfoliohelper';

class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio-section pt-120 pb-90">
                <div className="container">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">portfolio</span>
                        <h2>case study</h2>
                    </div>
                    {/* portfolio loop */}
                    <div className="row portfolio-masonary-loop">
                        {portfolio.slice(0,5).map((item, i) => (
                            <div className="col-lg-4 col-sm-6" key={i}>
                                <div className="portfolio-box height-extra" style={{ backgroundImage: "url(/" + item.img + ")" }}>
                                    <div className="portfolio-desc">
                                        {getCategories(item.category).slice(0, 1).map((cat, i) => (
                                            <span className="portfolio-cat" key={i}>{cat.title}</span>
                                        ))}
                                        <h4><Link to={"/portfolio-details/" + item.id}>{item.title}</Link></h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;