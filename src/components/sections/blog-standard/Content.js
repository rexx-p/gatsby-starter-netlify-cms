import React, { Component } from 'react';
import { Link } from "gatsby";
import Slider from 'react-slick';
import blogpost from '../../../data/blog.json';
import { getCategories, getAuthor, getFilteredPosts } from '../../../helper/bloghelper';
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 6
        }
    }
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var author = this.props.userId ? this.props.userId : '';
        var searchQuery = this.props.query ? this.props.query : '';
        var filteredItems = getFilteredPosts(blogpost, { cat, tag, author, searchQuery });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                    },
                },
            ]
        };
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="post-standard-box mb-40">
                {/* Standard */}
                {item.format === 'standard' || item.format === '' ?
                    <div className="post-media">
                        <img src={"/" + item.image[0]} alt={item.title} />
                    </div>
                    : ''}
                {/* Video */}
                {item.format === 'video' && item.video !== '' ?
                    <div className="post-media with-video">
                        <img src={"/" + item.image[0]} alt={item.title} />
                        <a rel={'external'} href={item.video} className="play-icon popup-video"><i className="fas fa-play" /></a>
                    </div>
                    : ''}
                {/* Gallery */}
                {item.format === 'gallery' ?
                    <Slider {...settings} className="post-media post-gallery">
                        {item.image.map((image, i) => (
                            <div className="post-gallery" key={i}>
                                <img src={"/" + image} alt={item.title} />
                            </div>
                        ))}
                    </Slider>
                    : ''}
                {/* Audio */}
                {item.format === 'audio' && item.audio !== '' ?
                    <div className="post-media sound-cloud-post">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title={item.title} className="embed-responsive-item" src={item.audio} />
                        </div>
                    </div>
                    : ''}
                {/* Quote */}
                {item.format === 'quote' && item.quote !== '' ?
                    <div className="post-media quote-post">
                        <div className="post-desc">
                            <h2>
                                <Link to="#">{item.quote}</Link>
                            </h2>
                            <ul className="post-meta">
                                <li>
                                    <Link to={"/blog-details/" + item.id}><i className="far fa-eye" />{item.views}Views</Link>
                                </li>
                                <li>
                                    <Link to={"/blog-details/" + item.id}><i className="far fa-comments" />{item.reviews.length} Comments</Link>
                                </li>
                                <li>
                                    <Link to={"/blog-details/" + item.id}><i className="far fa-calendar-alt" />{item.postdate}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    : ''}
                {/* Link */}
                {item.format === 'link' && item.link !== '' ?
                    <div className="post-media quote-post post-link">
                        <div className="post-desc">
                            <h2>
                                <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                            </h2>
                            <ul className="post-meta">
                                <li><a rel={'external'} href={item.link}><i className="far fa-link" />{item.link}</a></li>
                            </ul>
                        </div>
                    </div>
                    : ''}
                <div className="post-desc">
                    {getCategories(item.categories).map((category, i) => (
                        <Link to={"/blog/cat/" + category.id} className="cat" key={i}>{category.title}</Link>
                    ))}
                    <h2>
                        <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                    </h2>
                    <ul className="post-meta">
                        <li>
                            <Link to={"/blog-details/" + item.id}><i className="far fa-eye" />{item.views}Views</Link>
                        </li>
                        <li>
                            <Link to={"/blog-details/" + item.id}><i className="far fa-comments" />{item.reviews.length} Comments</Link>
                        </li>
                        <li>
                            <Link to={"/blog-details/" + item.id}><i className="far fa-calendar-alt" />{item.postdate}</Link>
                        </li>
                    </ul>
                    <p>{item.shortdescription}</p>
                    <div className="post-footer">
                        {getAuthor(item.author).map((author, i) => (
                            <div key={i} className="author">
                                <Link to={"/blog/user/" + author.id}>
                                    <img src={"/" + author.img} alt={author.name} /> by {author.name}
                                </Link>
                            </div>
                        ))}
                        <div className="read-more">
                            <Link to={"/blog-details/" + item.id}>
                                <i className="far fa-arrow-right" />Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>;
        });
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Blog Loop Start */}
                        <div className="col-lg-8 col-md-10">
                            <div className="blog-loop">
                                {paginationData}
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