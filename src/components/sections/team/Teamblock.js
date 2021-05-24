import React, { Component } from 'react';
import { Link } from "gatsby";
import teamblock from '../../../data/team.json';
import Pagination from "react-js-pagination";

class Teamblock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: teamblock,
            activePage: 1,
            itemPerpage:6
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-lg-4 col-sm-6">
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
            </div>;
        });
        return (
            <section className="team-section pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center team-loop">
                        {paginationData}
                    </div>
                    <div className="pagination-wrap justify-content-center mt-4">
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemPerpage}
                            totalItemsCount={this.state.data.length}
                            pageRangeDisplayed={this.state.data.length}
                            onChange={this.handlePageChange.bind(this)}
                            innerClass=""
                            activeClass="active"
                            itemClass=""
                            linkClass=""
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Teamblock;