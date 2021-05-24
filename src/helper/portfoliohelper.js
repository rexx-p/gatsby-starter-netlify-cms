import portfoliopost from "../data/portfolio.json";
import portfoliocategory from '../data/portfoliocategory.json';
import blogtags from '../data/blogtags.json';
import team from '../data/team.json';
// Get Category
function getCategories(items) {
    var elems = portfoliocategory.filter((item) => {
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
function getClient(items) {
    var elems = team.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Post details
function getPortfolio(id) {
    return portfoliopost.filter(portfolio => { return portfolio.id === parseInt(id) })[0];
}
export { getPortfolio, getCategories, getTags, getClient };