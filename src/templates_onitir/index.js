import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Content from '../components/sections/home/Content';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../../node_modules/slick-carousel/slick/slick.css"; 
// import "../../node_modules/slick-carousel/slick/slick.css";
// import '../../node_modules/magnific-popup/dist/magnific-popup.css';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/pe-icon-7-stroke.css';
import '../assets/css/default.css';
import '../assets/css/style.css';
import '../index.css';



const pagelocation = 'Homepage'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Onitir - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Content/>
                <Footer  footer={{ style:"", logo:"assets/img/logo-white.png" }}/>
            </Fragment>
        );
    }
}

export default Home;