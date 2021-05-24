import React, { Component, Fragment } from 'react';
import Cta from '../../layouts/Cta';
import { Link } from "gatsby";
import productcategory from '../../../data/portfoliocategory.json'
import products from '../../../data/portfolio.json'
import Masonry from 'react-masonry-component';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: products,
            activeItem: -1
        };
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.masonry-item',
            percentPosition: true,
            resize: true,
            fitWidth: true
        };
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div key={i} className="col-lg-4 col-sm-6 masonry-item">
                <div className="portfolio-grid-box">
                    <div className="portfolio-img" style={{ backgroundImage: "url(/" + item.img + ")" }} />
                    <Link to={"/portfolio-details/" + item.id} className="portfolio-link">
                        <i className="far fa-expand" />
                    </Link>
                </div>
            </div>
        ));
        return (
            <Fragment>
                <section className="portfolio-section pt-120 pb-90">
                    <div className="container">
                        {/* portfolio filter */}
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="portfolio-filter grid-filter">
                                    <ul>
                                        <li className={this.state.activeItem === -1 ? 'active' : ''} onClick={this.handleClick.bind(this, -1)}>All works</li>
                                        {productcategory.map((item) => (
                                            <li key={item.id} className={this.state.activeItem === parseInt(item.id) ? 'active' : ''} onClick={this.handleClick.bind(this, item.id)}>
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* portfolio loop */}
                        <Masonry className="row portfolio-grid-loop grid-isotope" imagesLoadedOptions={imagesLoadedOptions}>
                            {renderAll}
                        </Masonry>
                    </div>
                </section>
                <section className="call-to-action cta-style-two mb-120">
                    <Cta />
                </section>
            </Fragment>
        );
    }
}

export default Content;