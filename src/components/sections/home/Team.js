import React, { Component } from 'react';
import { Link } from "gatsby";
import Slider from 'react-slick';
import teamblock from '../../../data/team.json';

class Team extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
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
        };
        return (
            <section className="team-section has-slider pt-120 pb-120">
                <div className="container-fluid">
                    <Slider {...settings} className="row team-loop team-slider-one">
                        {teamblock.map((item, i) => (
                            <div key={i} className="col-12">
                                <div className="member-box">
                                    <div className="member-img">
                                        <img src={"/" + item.img} alt={item.name} />
                                    </div>
                                    <div className="member-info">
                                        <h3>{item.name}</h3>
                                        <span>{item.designation}</span>
                                    </div>
                                    <Link to={"/team-details/" + item.id} className="socail-trigger">+</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Team;