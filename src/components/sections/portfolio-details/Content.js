import React, { Component } from 'react';
import { Link } from "gatsby";
import { getPortfolio, getClient, getTags, getCategories } from '../../../helper/portfoliohelper';
import Sidebar from '../../layouts/Portfoliosidebar';

class Content extends Component {
    render() {
        const portfolioId = this.props.portfolioId;
        const item = getPortfolio(portfolioId);
        return (
            <section className="portfolio-details-wrap pt-150 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="portfolio-thumb mb-60" style={{ backgroundImage: "url(/" + item.slideimg + ")" }}>
                                <div className="portfolio-info">
                                    <ul>
                                        <li>
                                            <span className="title">Project Name</span>
                                            <p>{item.title}</p>
                                        </li>
                                        <li>
                                            <span className="title">Client Name</span>
                                            {getClient(item.author).map((client, i) => (
                                                <p key={i}>{client.name}</p>
                                            ))}
                                        </li>
                                        <li>
                                            <span className="title">Date</span>
                                            <p>{item.postdate}</p>
                                        </li>
                                        <li>
                                            <span className="title">Tag</span>
                                            <p>
                                                {getTags(item.tags).slice(0, 3).map((tags, i) => (
                                                    <Link to={"/blog/cat/" + tags.id} key={i}>{tags.title},</Link>
                                                ))}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="portfolio-details">
                                <div className="section-title left-border mb-40">
                                    {getCategories(item.category).map((category, i) => (
                                        <span className="title-tag" key={i}>{category.title}</span>
                                    ))}
                                    <h2>{item.title}</h2>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.longdescription }} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;