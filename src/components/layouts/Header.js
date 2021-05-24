import React from 'react';
import { Link } from "gatsby";
import HeaderComponent from '../../helper/navhelper';
import navigationmenu from '../../data/navigation.json';
import classNames from 'classnames';
import Canvas from './Canvas';
import Mobilemenu from './Mobilemenu';

class Header extends HeaderComponent {
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        return (
            <header className={"header-absolute sticky-header " + stickyheader} id="can-sticky">
                <div className="container-fluid custom-container-one">
                    <div className="header-top-area">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-sm-7">
                                <ul className="contact-list">
                                    <li><Link to="#">info@example.com</Link></li>
                                    <li><Link to="#">+988 987 876 87 67 6</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-5">
                                <ul className="social-link">
                                    <li><Link to="#">fb</Link></li>
                                    <li><Link to="#">tw</Link></li>
                                    <li><Link to="#">be</Link></li>
                                    <li><Link to="#">yu</Link></li>
                                    <li><Link to="#">li</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mainmenu-area">
                        <div className="d-flex align-items-center justify-content-between">
                            <nav className="main-menu">
                                <div className="logo">
                                    <Link to="/"><img src={"/assets/img/logo.png"} alt="logo" /></Link>
                                </div>
                                <div className="menu-items">
                                    <ul>
                                        {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                            <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                                {item.child ?
                                                    <ul className="submenu" role="menu">
                                                        {item.submenu.map((sub_item, i) => (
                                                            <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                {sub_item.submenu ?
                                                                    <ul className="submenu">
                                                                        {sub_item.submenu.map((third_item, i) => (
                                                                            <li className="menu-item" key={i}><Link
                                                                                to={third_item.link}>{third_item.linkText}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul> : null}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : null
                                                }
                                            </li>
                                        )) : null}
                                    </ul>
                                </div>
                            </nav>
                            <div className="main-right">
                                <Link to="/contact" className="main-btn btn-borderd">
                                    Get A Quote
                                </Link>
                                <Link to="#" className="offcanvas-trigger" onClick={this.canvasToggle}>
                                    <i className="far fa-ellipsis-v" />
                                </Link>
                                {/* OFF CANVAS WRAP START */}
                                <div className={classNames("off-canvas-wrap", { "show-off-canvas": this.state.canvasmethod })}>
                                    <div className={classNames("overly", { "show-overly": this.state.canvasmethod })} onClick={this.canvasToggle}>
                                    </div>
                                    <div className="off-canvas-widget">
                                        <Link to="#" className="off-canvas-close" onClick={this.canvasToggle}><i className="fal fa-times" /></Link>
                                        <Canvas />
                                    </div>
                                </div>
                                {/* OFF CANVAS WRAP END */}
                            </div>
                            <div className={classNames("hamburgerbtn", { "active": this.state.navToggle })} onClick={this.toggleNav}>
                                <div className="menubtn">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    <div className={classNames("mobile-menu", { "open": this.state.navToggle })}>
                        <button className="close-nav" onClick={this.toggleNav}>X</button>
                        <Mobilemenu />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;