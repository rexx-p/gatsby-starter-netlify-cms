import React, { Component } from 'react';
import { Link } from "gatsby";
import Slider from 'react-slick';
import clients from '../../../data/clients.json';

class Client extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        }
        return (
            <div className="clinet-section">
                <div className="container-fluid custom-width-three">
                    <Slider {...settings} className="clinet-slider">
                        {clients.map((item, i) => (
                            <div key={i} className="clinet-item">
                                <Link to="#">
                                    <img src={"/" + item.image} alt={item.companyname} />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Client;