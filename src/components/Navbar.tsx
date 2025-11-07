import React from 'react'

const Navbar = () => {
    return (
        <header className="header">
            {/* header top */}
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrap">
                        <div className="header-top-left">
                            <div className="header-top-social">
                            </div>
                        </div>
                        <div className="header-top-right">
                            <div className="header-top-contact">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="far fa-envelopes" />{" "}
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="e0898e868fa08598818d908c85ce838f8d"
                                            >
                                                info@timmins-consulting.com
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+21236547898">
                                            <i className="far fa-phone-volume" /> +60 111 667 4727
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container position-relative">
                        <a className="navbar-brand" href="index.html">
                            <img src="/img/logo/logo.png" alt="logo" />
                        </a>
                        <div className="mobile-menu-right">
                            <div className="search-btn">
                                <button type="button" className="nav-right-link search-box-outer">
                                    <i className="far fa-search" />
                                </button>
                            </div>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#main_nav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-mobile-icon">
                                    <i className="far fa-bars" />
                                </span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <a
                                        className="nav-link active"
                                        href="#"
                                        data-bs-toggle=""
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a
                                        className="nav-link "
                                        href="#"
                                        data-bs-toggle=""
                                    >
                                        Case Studies
                                    </a>
                                </li>
                                <li className="nav-item mega-menu ">
                                    <a
                                        className="nav-link "
                                        href="#"
                                        data-bs-toggle=""
                                    >
                                        Our Approch
                                    </a>
                                   
                                </li>
                                <li className="nav-item ">
                                    <a
                                        className="nav-link "
                                        href="#"
                                        data-bs-toggle=""
                                    >
                                        About us
                                    </a>
                                   
                                  
                                </li>
                                <li className="nav-item ">
                                    <a
                                        className="nav-link "
                                        href="#"
                                        data-bs-toggle=""
                                    >
                                        Our solution
                                    </a>
                                   
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="nav-right">
                                <div className="nav-right-btn mt-2">
                                    <a href="application-form.html" className="theme-btn">
                                        <span className="fal fa-pencil" />
                                        Reach Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default Navbar
