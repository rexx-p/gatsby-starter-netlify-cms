import React, { Component } from 'react';
import { Link } from "gatsby";
import Slider from 'react-slick';
import portfolio from '../../../data/portfolio.json';
import { getCategories } from '../../../helper/portfoliohelper';

class Portfolio extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            speed: 900,
            centerPadding: '25%',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerPadding: '20%',
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '10%',
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: '5%',
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        centerPadding: '0',
                    },
                },
            ]
        }
        return (
            <section className="portfolio-slider-section with-section-bg pt-120 pb-120">
                <div className="container-fluid">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">portfolio</span>
                        <h2>case study</h2>
                    </div>
                    {/* portfolio loop */}
                    <Slider {...settings} className="row portfolio-slider-loop portfolio-slider">
                        {portfolio.map((item, i) => (
                            <div key={i} className="col-12">
                                <div className="portfolio-box">
                                    <div className="portfolio-img-wrap">
                                        <div className="portfolio-img" style={{ backgroundImage: "url(/" + item.slideimg + ")" }}>
                                        </div>
                                    </div>
                                    <div className="portfolio-desc">
                                        {getCategories(item.category).slice(0, 1).map((cat, i) => (
                                            <span className="portfolio-cat" key={i}>{cat.title}</span>
                                        ))}
                                        <h2><Link to={"/portfolio-details/" + item.id}>{item.title}</Link></h2>
                                        <Link to={"/portfolio-details/" + item.id} className="portfolio-link">
                                            <i className="fal fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Portfolio;