import React, { Component } from 'react';
import { Link } from "gatsby";
import blogpost from '../../../data/blog.json';
import { getBlog, getAuthor, getCategories, getTags, postnavigation } from '../../../helper/bloghelper';
import Sidebar from '../../layouts/Blogsidebar';

class Content extends Component {
    render() {
        const blogId = this.props.blogId;
        const item = getBlog(blogId);
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Blog Loop Start */}
                        <div className="col-lg-8">
                            <div className="blog-details-box">
                                <div className="entry-content">
                                    {getCategories(item.categories).map((category, i) => (
                                        <Link to={"/blog/cat/" + category.id} className="cat" key={i}>{category.title}</Link>
                                    ))}
                                    <h2 className="title">{item.title}</h2>
                                    <ul className="post-meta">
                                        {getAuthor(item.author).map((author, i) => (
                                            <li key={i}>
                                                <Link to={"/blog/user/" + author.id}>
                                                    <i className="far fa-user" />by {author.name}
                                                </Link>
                                            </li>
                                        ))}
                                        <li><Link to={"/blog-details/" + item.id}><i className="far fa-calendar-alt" />{item.postdate}</Link></li>
                                        <li><Link to={"/blog-details/" + item.id}><i className="far fa-comments" />{item.reviews.length} Comments</Link></li>
                                    </ul>
                                    <div dangerouslySetInnerHTML={{ __html: item.longdescription }}></div>
                                </div>
                                <div className="entry-footer">
                                    <div className="tag-and-share mt-50 mb-50 d-md-flex align-items-center justify-content-between">
                                        <div className="tag">
                                            <h5>Related Tags</h5>
                                            <ul>
                                                {getTags(item.tags).map((tags, i) => (
                                                    <li key={i}>
                                                        <Link to={"/blog/tag/" + tags.id}>{tags.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="share text-md-right">
                                            <h5>Social Share</h5>
                                            <ul>
                                                <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-medium" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-google-plus-g" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-tumblr" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post-nav d-md-flex align-items-center justify-content-between">
                                        {postnavigation(blogpost, blogpost.findIndex(item => parseInt(item.id) === parseInt(blogId)))}
                                    </div>
                                    <div className="related-post mt-50">
                                        <h3 className="mb-30">Related Post</h3>
                                        <div className="row">
                                            {blogpost.filter(post => { return parseInt(post.id) !== parseInt(blogId) && post.categories.some(r => item.categories.includes(r)) }).slice(0, 2).map((post, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <div className="related-post-box mb-50">
                                                        <div className="thumb" style={{ backgroundImage: "url(/" + post.image[0] + ")" }}>
                                                        </div>
                                                        <div className="desc">
                                                            <Link to={"/blog-details/" + post.id} className="date"><i className="far fa-calendar-alt" />{post.postdate}</Link>
                                                            <h4><Link to={"/blog-details/" + post.id}>{post.title.slice(0, 37)}</Link></h4>
                                                            <p>{post.shortdescription.slice(0, 100)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {getAuthor(item.author).map((author, i) => (
                                        <div className="author-info-box mb-45" key={i}>
                                            <div className="author-img">
                                                <img src={"/" + author.img} alt={author.name} />
                                            </div>
                                            <div className="info-text">
                                                <span>Written by</span>
                                                <h3>{author.name}</h3>
                                                <p>{author.longdescription}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="comment-template">
                                    <h3 className="box-title">{item.reviews.length} Comments</h3>
                                    <ul className="comments-list mb-40">
                                        {item.reviews.map((review, i) => (
                                            <li key={i}>
                                                {getAuthor(review.user).map((user, i) => (
                                                    <div key={i} className="comment-img">
                                                        <img src={"/" + user.img} alt={user.name} />
                                                    </div>
                                                ))}
                                                <div className="comment-desc">
                                                    <div className="desc-top">
                                                        {getAuthor(review.user).map((user, i) => (
                                                            <h6 key={i}>{user.name}</h6>
                                                        ))}
                                                        <span className="date">{review.date}</span>
                                                        <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                    </div>
                                                    <p>{review.comment}</p>
                                                </div>
                                                <ul className="children">
                                                    {review.replies.map((reply, i) => (
                                                        <li key={i}>
                                                            {getAuthor(reply.user).map((user, i) => (
                                                                <div key={i} className="comment-img">
                                                                    <img src={"/" + user.img} alt={user.name} />
                                                                </div>
                                                            ))}
                                                            <div className="comment-desc">
                                                                <div className="desc-top">
                                                                    {getAuthor(reply.user).map((user, i) => (
                                                                        <h6 key={i}>{user.name}</h6>
                                                                    ))}
                                                                    <span className="date">{reply.date}</span>
                                                                    <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                                </div>
                                                                <p>{reply.comment}</p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="box-title">Leave Comments</h3>
                                    <div className="comment-form">
                                        <form>
                                            <div className="input-group textarea mb-20">
                                                <textarea placeholder="Type your comments...." />
                                                <div className="icon"><i className="fas fa-pen" /></div>
                                            </div>
                                            <div className="input-group mb-20">
                                                <input type="text" placeholder="Type your Name...." />
                                                <div className="icon"><i className="fas fa-user" /></div>
                                            </div>
                                            <div className="input-group mb-20">
                                                <input type="email" placeholder="Type your email...." />
                                                <div className="icon"><i className="fas fa-envelope" /></div>
                                            </div>
                                            <div className="input-group mb-20">
                                                <input type="url" placeholder="Type your Website...." />
                                                <div className="icon"><i className="fas fa-globe" /></div>
                                            </div>
                                            <div className="input-group mt-30">
                                                <button type="submit" className="main-btn btn-filled"><i className="far fa-comments" />
                    Post Comment</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <div className="sidebar">
                                {/* About Author Widget */}
                                {getAuthor(item.author).map((author, i) => (
                                    <div key={i} className="widget about-author-widget mb-40">
                                        <h5 className="widget-title">About Me</h5>
                                        <div className="author-box">
                                            <img src={"/" + author.img} alt={author.name} />
                                            <h6>{author.name}</h6>
                                            <p>{author.shortdescription}</p>
                                            <ul className="social-icon">
                                                {author.social.map((icon, i) => (
                                                    <li key={i}>
                                                        <Link to={icon.url}><i className={icon.icon} /></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;