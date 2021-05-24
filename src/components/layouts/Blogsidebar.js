import React, { Component } from 'react';
import { Link } from "gatsby";
import blogpost from '../../data/blog.json';
import blogcategory from '../../data/blogcategory.json';
import tags from '../../data/blogtags.json';
import twitterpost from '../../data/twitterpost.json';
import instapost from '../../data/instapost.json';

class Blogsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/blog/search/" + this.state.searchText);
        }
    }
    render() {
        return (
            <div className="sidebar">
                {/* Search Widget */}
                <div className="widget search-widget mb-40">
                    <h5 className="widget-title">Search Objects</h5>
                    <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                            <input type="text" className="form-control" placeholder="Search your keyword..." name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                            <button type="submit"><i className="far fa-search" /></button>
                    </form>
                </div>
                {/* Popular Post Widget */}
                <div className="widget popular-feeds mb-40">
                    <h5 className="widget-title">Popular Feeds</h5>
                    <div className="popular-feed-loop">
                        {blogpost.slice(0, 3).map((item, i) => (
                            <div className="single-popular-feed" key={i}>
                                <div className="feed-img">
                                    <img src={"/" + item.image[0]} alt={item.title} />
                                </div>
                                <div className="feed-desc">
                                    <h6><Link to={"/blog-details/" + item.id}>{item.title.slice(0, 37)}</Link></h6>
                                    <span className="time"><i className="far fa-calendar-alt" /> {item.postdate}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Categories Widget */}
                <div className="widget categories-widget mb-40">
                    <h5 className="widget-title">Categories</h5>
                    <ul>
                        {blogcategory.map((item, i) => (
                            <li key={i}>
                                <Link to={"/blog/cat/" + item.id}>{item.title}<span>{item.count}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Social Icon Widget */}
                <div className="widget socail-widget mb-40">
                    <h5 className="widget-title">Never Miss News</h5>
                    <ul>
                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                        <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                        <li><Link to="#"><i className="fab fa-pinterest" /></Link></li>
                    </ul>
                </div>
                {/* Twitter Feeds Widget */}
                <div className="widget twitter-feed-widget mb-40">
                    <h5 className="widget-title">Twitter Feeds</h5>
                    <ul>
                        {twitterpost.map((item, i) => (
                            <li key={i}>
                                <Link to="#">{item.tweet}</Link>
                                <span className="date">{item.tweetdate}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Instagram Feeds Widget */}
                <div className="widget instagram-feed-widget mb-40">
                    <h5 className="widget-title">Instagram Feeds</h5>
                    <ul>
                        {instapost.map((item, i) => (
                            <li key={i}>
                                <img src={"/" + item.img} alt="img" />
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Popular Tags Widget */}
                <div className="widget popular-tag-widget mb-40">
                    <h5 className="widget-title">Popular Tags</h5>
                    <ul>
                        {tags.map((item, i) => (
                            <li key={i}>
                                <Link to={"/blog/tag/" + item.id}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Banner Ad Widget */}
                <div className="widget banner-ad-widget">
                    <img src={"/assets/img/banner-widget.jpg"} alt="img" />
                </div>
            </div>
        );
    }
}

export default Blogsidebar;