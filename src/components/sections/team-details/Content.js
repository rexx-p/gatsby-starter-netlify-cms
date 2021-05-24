import React, { Component, Fragment } from 'react';
import { Link } from "gatsby";
import { getMember } from '../../../helper/teamhelper';
import Portfolio from './Portfolio';

class Content extends Component {
    render() {
        const teamId = this.props.teamId;
        const item = getMember(teamId);
        return (
            <Fragment>
                <section className="team-details pt-150 pb-120">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5 col-md-9">
                                <div className="member-img">
                                    <img src={"/" + item.img} alt={item.name} />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-9">
                                <div className="member-information">
                                    <div className="member-info-top d-sm-flex align-items-center justify-content-between">
                                        <div className="title">
                                            <h2>{item.name}</h2>
                                            <span>{item.designation}</span>
                                        </div>
                                        <div className="link">
                                            <Link to="/contact" className="main-btn btn-filled">Get Appointment</Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-9 col-md-11">
                                            <ul className="contact-list">
                                                {item.contactinfo.map((item, i) => (
                                                    <li key={i}>
                                                        <i className={item.icon} />
                                                        <span className="title">{item.title} : </span>
                                                        {item.text.map((name, i) => (
                                                            <a rel={'external'} href={name} key={i}>{name},</a>
                                                        ))}
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul className="social-list">
                                                {item.social.map((item, i) => (
                                                    <li key={i}>
                                                        <i className={item.icon} />
                                                        <span className="title">{item.title} : </span>
                                                        <a rel={'external'} href={item.url}>{item.url}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Portfolio />
            </Fragment>
        );
    }
}

export default Content;