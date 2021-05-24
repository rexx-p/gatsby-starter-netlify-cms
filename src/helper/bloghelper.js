import React from 'react-dom';
import { Link } from "gatsby";

import blogpost from "../data/blog.json";
import blogcategory from '../data/blogcategory.json';
import blogtags from '../data/blogtags.json';
import author from '../data/team.json';
// Get Category
function getCategories(items) {
    var elems = blogcategory.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Tags
function getTags(items) {
    var elems = blogtags.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}

// Client
function getAuthor(items) {
    var elems = author.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
function setCategoriesCount() {
    for (let i = 0; i < blogcategory.length; i++) {
        var count = blogpost.filter(post => { return post.categories.includes(parseInt(blogcategory[i].id)) });
        count = count.length;
        blogcategory[i].count = count;
    }
}
setCategoriesCount();
// Post details
function getBlog(id) {
    return blogpost.filter(blog => { return blog.id === parseInt(id) })[0];
}
// Pagination
function postnavigation(items, index) {
    var output = [],
        id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
        item = items[index - 1];
        id = item.id;
        // Show the previous button 
        output.push(<div key={id} className="prev-post">
            <span>Prev Post</span><Link to={"/blog-details/" + parseInt(id)}>{item.title.slice(0, 20)} </Link></div>);
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
        // Show next button 
        item = items[index + 1];
        id = item.id;
        output.push(<div key={id} className="next-post">
            <span>Next Post</span><Link to={"/blog-details/" + parseInt(id)}>{item.title.slice(0, 20)}</Link></div>);
    }

    return output;
}
// Filter
function getFilteredPosts(posts, filter = { cat: '', tag: '', author: '', searchQuery: '' }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    var authorFilter = filter.author !== undefined && filter.author !== null && filter.author !== '';
    var searchFilter = filter.searchQuery !== undefined && filter.searchQuery !== null && filter.searchQuery !== '';
    // Category filter
    if (catgoryFilter) {
        posts = posts.filter(post => {
            return (post.categories !== undefined && post.categories !== null) && post.categories.includes(parseInt(filter.cat))
        })
    }
    // Tag filter
    if (tagFilter) {
        posts = posts.filter(post => {
            return (post.tags !== undefined && post.tags !== null) && post.tags.includes(parseInt(filter.tag))
        })
    }
    // Author filter
    if (authorFilter) {
        posts = posts.filter(post => {
            return (post.author !== undefined && post.author !== null) && post.author.includes(parseInt(filter.author))
        })
    }
    if (searchFilter) {
        posts = posts.filter(post => {
            return (post.title !== undefined && post.title !== null) && post.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
        })
    }
    return posts;
}
export { getBlog, getCategories, getTags, getAuthor, getFilteredPosts, postnavigation };