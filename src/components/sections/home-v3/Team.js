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
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992,
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
            <section className="team-section pt-120 pb-90">
                <div className="container">
                    <div className="section-title both-border text-center mb-80">
                        <span className="title-tag">Team</span>
                        <h2>Our Team Members</h2>
                    </div>
                    <Slider {...settings} className="row team-loop team-slider-two">
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