const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="footer-widget">
                <div className="container">
                    <div className="row footer-widget-wrapper pt-50 pb-20">
                        <div className="col-md-12 text-center">
                            <div className="footer-widget-box about-us">
                                <a href="#" className="footer-logo">
                                    <img src="/img/logo/logo.png" alt="" />
                                </a>
                                <ul className="footer-contact">
                                    <li>
                                        <a href="tel:+21236547898">
                                            <i className="far fa-phone" />
                                            +60 111 667 4727
                                        </a>
                                    </li>
                                    <li>
                                        <i className="far fa-map-marker-alt" />
                                        Malaysia: Menara Centara, Kuala Lumpur
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="far fa-envelope" />
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="70191e161f301508111d001c155e131f1d"
                                            >
                                                info@timmins-consulting.com
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="footer-widget-box list">
                                <ul className="footer-list">
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-caret-right" /> Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-caret-right" /> Case Study
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-caret-right" /> Our Approch
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-caret-right" /> About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-caret-right" /> Our Solution
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-caret-right" />Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="copyright-wrapper">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <p className="copyright-text">
                                    © Copyright <span id="date" /> <a href="#"> Timmins </a> All Rights
                                    Reserved.
                                </p>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <ul className="footer-social">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-whatsapp" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
