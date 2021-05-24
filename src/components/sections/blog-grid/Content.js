import React, { Component } from 'react';
import { Link } from "gatsby";
import blogpost from '../../../data/blog.json';
import { getCategories } from '../../../helper/bloghelper';
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: blogpost,
            activePage: 1,
            itemPerpage: 18
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-md-6">
                <div className="post-grid-box mb-30">
                    <ul className="post-cat">
                        {getCategories(item.categories).slice(0, 2).map((cat, i) => (
                            <li key={i}>
                                <Link to={"/blog/cat/" + cat.id}>{cat.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="post-desc">
                        <h4><Link to={"/blog-details/" + item.id}>{item.title.slice(0, 37)}</Link>
                        </h4>
                        <p>{item.shortdescription.slice(0, 100)}</p>
                    </div>
                    <ul className="post-meta">
                        <li><Link to={"/blog-details/" + item.id}><i className="fal fa-calendar-alt" />{item.postdate}</Link></li>
                        <li><Link to={"/blog-details/" + item.id}><i className="fal fa-comments" />{item.reviews.length} Comments</Link></li>
                    </ul>
                </div>
            </div>
        });
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Blog Loop Start */}
                        <div className="col-lg-8 col-md-8 col-sm-10">
                            <div className="blog-loop">
                                <div className="row justify-content-center">
                                    {paginationData}
                                </div>
                            </div>
                            <div className="pagination-wrap justify-content-center mt-4">
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.itemPerpage}
                                    totalItemsCount={this.state.data.length}
                                    pageRangeDisplayed={this.state.data.length}
                                    onChange={this.handlePageChange.bind(this)}
                                    innerClass=""
                                    activeClass="active"
                                    itemClass=""
                                    linkClass=""
                                />
                            </div>
                        </div>
                        {/* Blog Sidebar */}
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