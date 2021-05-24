import React, { Component } from 'react';
import Slider from 'react-slick';
import testimonials from '../../../data/testimonials.json';

class Testimonials extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        };
        return (
            <div className="container">
                <div className="section-title both-border text-center pb-80">
                    <span className="title-tag">Testimonials</span>
                    <h2>Client Feedbacks</h2>
                </div>
                <div className="testimonials-section pb-125">
                    <Slider {...settings} className="testimonials-slider-two row">
                        {testimonials.map((item, i) => (
                            <div key={i} className="col-lg-12">
                                <div className="single-testimonial-two">
                                    <p>{item.comment}</p>
                                    <div className="testimonial-author">
                                        <div className="author-img">
                                            <img src={"/" + item.image} alt={item.name} />
                                        </div>
                                        <div className="author-info">
                                            <h5>{item.name}</h5>
                                            <span>{item.designation}</span>
                                        </div>
                                    </div>
                                    <span className="quote-icon">
                                        <img src={"/assets/img/testimonials/quote.png"} alt="icon" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Testimonials;