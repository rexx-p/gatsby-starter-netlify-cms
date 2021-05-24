import React, { Component } from 'react';
import Slider from 'react-slick';
import testimonials from '../../../data/testimonials.json';
import { Rating } from '../../../helper/helper';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const settings = {
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const settingsThumb = {
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        }
        return (
            <section className="testimonial-section pt-120 pb-120">
                <div className="container">
                    {/* testimonial Content Slider*/}
                    <Slider {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="testimonial-slider mb-45">
                        {testimonials.map((item, i) => (
                            <div key={i}>
                                <div className="single-testimonial">
                                    <div className="author-img">
                                        <img src={"/" + item.image} alt={item.name} />
                                    </div>
                                    <div className="desc">
                                        <div className="rateing mb-20">
                                            {Rating(item.rating)}
                                        </div>
                                        <h2>{item.comment}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* Author Info Slider */}
                    <div className="row no-gutters justify-content-center">
                        <div className="col-lg-9">
                            <Slider {...settingsThumb} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} className="testimonial-author-slider">
                                {testimonials.map((item, i) => (
                                    <div key={i}>
                                        <div className="single-slider">
                                            <h4>{item.name}</h4>
                                            <span>{item.designation}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;