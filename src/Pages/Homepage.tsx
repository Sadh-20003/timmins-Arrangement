import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Homepage = () => {
    useEffect(() => {
        if (window.$) {
            $('.hero-slider').owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                margin: 0,
                autoplay: true,
                autoplayHoverPause: true,
                autoplayTimeout: 5000,
                items: 1,
                navText: [
                    "<i class='far fa-long-arrow-left'></i>",
                    "<i class='far fa-long-arrow-right'></i>"
                ],

                onInitialized: function (event) {
                    var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
                    doAnimations($firstAnimatingElements);
                },

                onChanged: function (event) {
                    var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
                    doAnimations($firstAnimatingElements);
                }
            });

            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function () {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationDuration = $this.data('duration');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay,
                        'animation-duration': $animationDuration,
                        '-webkit-animation-duration': $animationDuration,
                    });
                    $this.addClass($animationType).one(animationEndEvents, function () {
                        $this.removeClass($animationType);
                    });
                });
            }

            $('.testimonial-slider').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        }
    }, []);

    return (
        <>
            <Navbar />

            {/* <div className="search-popup">
                <button className="close-search">
                    <span className="far fa-times" />
                </button>
                <form action="#">
                    <div className="form-group">
                        <input
                            type="search"
                            name="search-field"
                            placeholder="Search Here..."
                        // required=""
                        />
                        <button type="submit">
                            <i className="far fa-search" />
                        </button>
                    </div>
                </form>
            </div> */}
            <section className='banner'>
                <main className="main">
                    {/* hero slider */}
                    <div className="hero-section">
                        <div className="hero-slider owl-carousel owl-theme">
                            <div
                                className="hero-single"
                                style={{ background: "url(./src/assets/img/slider/slider-1.jpg)" }}
                            >
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-lg-7">
                                            <div className="hero-content">
                                                <h6
                                                    className="hero-sub-title"
                                                    data-animation="fadeInDown"
                                                    data-delay=".25s"
                                                >
                                                    <i className="far fa-book-open-reader" />
                                                    Empowering Teams. Enabling Growth.
                                                </h6>
                                                <h1
                                                    className="hero-title"
                                                    data-animation="fadeInRight"
                                                    data-delay=".50s"
                                                >
                                                    10 Years of HRDC-Claimable <span>HRDC-Claimable</span> Learning Excellence.
                                                </h1>
                                                <p data-animation="fadeInLeft" data-delay=".75s">
                                                    For over a decade, Timmins Training Consulting has delivered HRDC-claimable corporate training programs that transform how people learn, grow, and perform — across AI, 5G, Embedded Systems, Cloud, and Data Analytics.
                                                </p>

                                                <h6
                                                    className="hero-sub-title"
                                                    data-animation="fadeInDown"
                                                    data-delay=".25s"
                                                >
                                                    <i className="far fa-book-open-reader" />
                                                    All Courses Are HRDC-Claimable

                                                </h6>

                                                <div
                                                    className="hero-btn"
                                                    data-animation="fadeInUp"
                                                    data-delay="1s"
                                                >
                                                    <a href="about.html" className="theme-btn">
                                                        Explore Course
                                                        <i className="fas fa-arrow-right-long" />
                                                    </a>
                                                    <a href="contact.html" className="theme-btn theme-btn3">
                                                        Join a public class
                                                        <i className="fas fa-arrow-right-long" />
                                                    </a>

                                                    <a href="contact.html" className="theme-btn  theme-btn4">
                                                        Download company Profile
                                                        <i className="fas fa-arrow-right-long" />
                                                    </a>





                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div
                                className="hero-single"
                                style={{ background: "url(./src/assets/img/slider/slider-2.jpg)" }}
                            >
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-lg-7">
                                            <div className="hero-content">
                                                <h6
                                                    className="hero-sub-title"
                                                    data-animation="fadeInDown"
                                                    data-delay=".25s"
                                                >
                                                    <i className="far fa-book-open-reader" />

                                                    Empowering Teams. Enabling Growth.

                                                </h6>
                                                <h1
                                                    className="hero-title"
                                                    data-animation="fadeInRight"
                                                    data-delay=".50s"
                                                >
                                                    10 Years of <span>HRDC-Claimable</span> Learning Excellenc
                                                </h1>
                                                <p data-animation="fadeInLeft" data-delay=".75s">
                                                    For over a decade, Timmins Training Consulting has delivered HRDC-claimable corporate training programs that transform how people learn, grow, and perform — across AI, 5G, Embedded Systems, Cloud, and Data Analytics.
                                                </p>
                                                <div
                                                    className="hero-btn"
                                                    data-animation="fadeInUp"
                                                    data-delay="1s"
                                                >
                                                    <a href="about.html" className="theme-btn">
                                                        About More
                                                        <i className="fas fa-arrow-right-long" />
                                                    </a>
                                                    <a href="contact.html" className="theme-btn theme-btn2">
                                                        Learn More
                                                        <i className="fas fa-arrow-right-long" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div
                                className="hero-single"
                                style={{ background: "url(./src/assets/img/slider/slider-3.jpg)" }}
                            >
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-lg-7">
                                            <div className="hero-content">
                                                <h6
                                                    className="hero-sub-title"
                                                    data-animation="fadeInDown"
                                                    data-delay=".25s"
                                                >
                                                    <i className="far fa-book-open-reader" />
                                                    Welcome To Eduka!
                                                </h6>
                                                <h1
                                                    className="hero-title"
                                                    data-animation="fadeInRight"
                                                    data-delay=".50s"
                                                >
                                                    Start Your Beautiful And <span>Bright</span> Future
                                                </h1>
                                                <p data-animation="fadeInLeft" data-delay=".75s">
                                                    There are many variations of passages orem psum available but
                                                    the majority have suffered alteration in some repeat
                                                    predefined chunks form injected humour.
                                                </p>
                                                <div
                                                    className="hero-btn"
                                                    data-animation="fadeInUp"
                                                    data-delay="1s"
                                                >
                                                    <a href="about.html" className="theme-btn">
                                                        About More
                                                        <i className="fas fa-arrow-right-long" />
                                                    </a>
                                                    <a href="contact.html" className="theme-btn theme-btn2">
                                                        Learn More
                                                        <i className="fas fa-arrow-right-long" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </main>
            </section>



            <section className='HRDC'>

                <div className="about-area py-120">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                                    <div className="about-img">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <img className="img-1" src="./src/assets/img/about/01.jpg" alt="" />
                                                <div className="about-experience mt-4">
                                                    <div className="about-experience-icon">
                                                        <img src="./src/assets/img/icon/exchange-idea.svg" alt="" />
                                                    </div>
                                                    <b className="text-start">
                                                        30 Years Of <br /> Quality Service
                                                    </b>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img className="img-2" src="./src/assets/img/about/02.jpg" alt="" />
                                                <img
                                                    className="img-3 mt-4"
                                                    src="./src/assets/img/about/03.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-right wow fadeInRight" data-wow-delay=".25s">
                                    <div className="site-heading mb-3">
                                        <span className="site-title-tagline">
                                            <i className="far fa-book-open-reader" />HRDC TRUST STRIP
                                        </span>
                                        <h2 className="site-title">
                                            Your Trusted HRD Corp Registered Training Provider

                                        </h2>
                                    </div>
                                    <p className="about-text">
                                        Every Timmins course is HRDC-claimable — complete with documentation, claim support, and attendance reporting.
                                        We make compliance simple so your team can focus on learning.
                                    </p>
                                    <div className="about-content">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="about-item">
                                                    <div className="about-item-icon">
                                                        <img src="./src/assets/img/icon/open-book.svg" alt="" />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>Documentation</h5>
                                                        {/* <p>
                                                            It is a long established fact that reader will to using
                                                            content.
                                                        </p> */}
                                                    </div>
                                                </div>
                                                <div className="about-item">
                                                    <div className="about-item-icon">
                                                        <img src="./src/assets/img/icon/global-education.svg" alt="" />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>Claim Support</h5>
                                                        {/* <p>
                                                            It is a long established fact that reader will to using
                                                            content.
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-item">
                                                <div className="about-item-icon">
                                                    <img src="./src/assets/img/icon/global-education.svg" alt="" />
                                                </div>
                                                <div className="about-item-content">
                                                    <h5> Training Reports</h5>
                                                    {/* <p>
                                                            It is a long established fact that reader will to using
                                                            content.
                                                        </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="about-bottom">
                                        <a href="about.html" className="theme-btn">
                                            Discover More
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                        <div className="about-phone">
                                            <div className="icon">
                                                <i className="fal fa-headset" />
                                            </div>
                                            <div className="number">
                                                <span>Call Now</span>
                                                <h6>
                                                    <a href="tel:+21236547898">+2 123 654 7898</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>




            <section className='celebration'>
                <div className="how-apply pt-120 pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="content-info wow fadeInUp" data-wow-delay=".25s">
                                    <div className="site-heading mb-3">
                                        <span className="site-title-tagline">
                                            <i className="far fa-book-open-reader" /> Timmins
                                        </span>
                                        <h2 className="site-title">
                                            CELEBRATING <span>10 YEARS</span> OF IMPACT (2015–2025)
                                        </h2>
                                    </div>
                                    <p className="content-text">
                                        10 Years of Timmins — A Decade of Learning, Growth & Innovation
                                        Founded in Malaysia in 2015, Timmins has grown into a trusted global partner for corporate learning — expanding to Indonesia in 2017 and Canada in 2019.
                                        Over 10 years, we’ve empowered 5,000+ professionals, delivered 200+ customized programs, and partnered with 100+ global clients.
                                        10 years of innovation. 10 years of partnership. 10 years of measurable impact.

                                    </p>
                                    {/* <p className="content-text mt-2">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium veritatis et quasi architecto beatae vitae dicta sunt
                                        explicabo.
                                    </p> */}
                                    {/* <div className="row my-3">
                                        <div className="col-md-6">
                                            <ul className="content-list">
                                                <li>
                                                    <i className="fas fa-check-circle" />
                                                    Start Online Submission
                                                </li>
                                                <li>
                                                    <i className="fas fa-check-circle" />
                                                    Submit The Form
                                                </li>
                                                <li>
                                                    <i className="fas fa-check-circle" />
                                                    Review The Submission
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="content-list">
                                                <li>
                                                    <i className="fas fa-check-circle" />
                                                    Gather Necessary Documents
                                                </li>
                                                <li>
                                                    <i className="fas fa-check-circle" />
                                                    Interviewing Process
                                                </li>
                                                <li>
                                                    <i className="fas fa-check-circle" />
                                                    Last Decision
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="content-btn">
                                        <a href="#" className="theme-btn">
                                            Apply Now
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="content-img wow fadeInRight" data-wow-delay=".25s">
                                    <img src="./src/assets/img/apply/celebration.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </section>



            <section className='STATS'>
                <div className="counter-area pt-60 pb-60">
                    <div className="container">
                        <span className="site-title-tagline">
                            <i className="far fa-book-open-reader" />  Our Global Footprint in Numbers
                        </span>
                        <div className="row">

                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">

                                    <div className="icon">
                                        <img src="./src/assets/img/icon/course.svg" alt="" />
                                    </div>
                                    <div>
                                        <span
                                            className="counter"
                                            data-count="+"
                                            data-to={500}
                                            data-speed={3000}
                                        >

                                            200+


                                        </span>
                                        <h6 className="title">+Customized Courses </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="icon">
                                        <img src="./src/assets/img/icon/graduation.svg" alt="" />
                                    </div>
                                    <div>
                                        <span
                                            className="counter"
                                            data-count="+"
                                            data-to={1900}
                                            data-speed={3000}
                                        >
                                            5,000
                                        </span>
                                        <h6 className="title">+ Professionals Trained</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="icon">
                                        <img src="./src/assets/img/icon/teacher-2.svg" alt="" />
                                    </div>
                                    <div>
                                        <span
                                            className="counter"
                                            data-count="+"
                                            data-to={750}
                                            data-speed={3000}
                                        >
                                            100
                                        </span>
                                        <h6 className="title">+ Corporate Clients</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="icon">
                                        <img src="./src/assets/img/icon/award.svg" alt="" />
                                    </div>
                                    <div>
                                        <span
                                            className="counter"
                                            data-count="+"
                                            data-to={30}
                                            data-speed={3000}
                                        >
                                            10+
                                        </span>
                                        <h6 className="title">+ Countries Reached</h6>
                                    </div>
                                </div>
                            </div>
                            <h5>
                                <a href="teacher-single.html">Languages Delivered
                                    English & Mandarin

                                </a>
                            </h5>
                            {/* <p className="text-white">
                                From Malaysia to Canada, Timmins continues to build capability across Asia and North America — bringing global expertise to every learning experience.

                            </p> */}
                            {/* <div className="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
                                        style={{ border: 0 }}
                                        // allowFullScreen="yes"
                                        loading="lazy"
                                    />
                                </div> */}

                        </div>
                    </div>
                </div>

            </section>

            <section className='map'>
                <div className="map-container">
                    <div className="map-card">
                        <h2 className="map-title">From Malaysia to Canada, Timmins continues to build capability across Asia and North America — bringing global expertise to every learning experience.</h2>
                        <div className="map-frame">
                            <iframe
                                title="Guggenheim Museum Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>



            <section className='solution'>
                <div className="portfolio-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Solution
                                    </span>
                                    <h2 className="site-title">
                                        <span> End-to-End </span> Learning for Every Stage”
                                    </h2>
                                    <p>
                                        We deliver structured, HRDC-claimable learning solutions designed for every phase of workforce growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="portfolio-item">
                                    <div className="portfolio-img">
                                        <img src="./src/assets/img/portfolio/01.jpg" alt="" />
                                    </div>
                                    <div className="portfolio-content">
                                        <div className="portfolio-info">
                                            <div className="portfolio-title-info">
                                                <h5 className="portfolio-subtitle">
                                                    <span></span>Fresh Graduate Onboarding
                                                </h5>
                                                <a href="#">
                                                    <h4 className="portfolio-title">Transform fresh hires into project-ready professionals.</h4>
                                                </a>
                                            </div>
                                            <a href="#" className="portfolio-btn">
                                                <i className="far fa-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="portfolio-item">
                                    <div className="portfolio-img">
                                        <img src="./src/assets/img/portfolio/04.jpg" alt="" />
                                    </div>
                                    <div className="portfolio-content">
                                        <div className="portfolio-info">
                                            <div className="portfolio-title-info">
                                                <h5 className="portfolio-subtitle">
                                                    <span></span> Upskill teams on AI, 5G, Cloud, and IoT.
                                                </h5>
                                                <a href="#">
                                                    <h4 className="portfolio-title">Technology Transformation Programs</h4>
                                                </a>
                                            </div>
                                            <a href="#" className="portfolio-btn">
                                                <i className="far fa-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="portfolio-item">
                                    <div className="portfolio-img">
                                        <img src="./src/assets/img/portfolio/03.jpg" alt="" />
                                    </div>
                                    <div className="portfolio-content">
                                        <div className="portfolio-info">
                                            <div className="portfolio-title-info">
                                                <h5 className="portfolio-subtitle">
                                                    <span></span> Build your internal pool of certified trainers.
                                                </h5>
                                                <a href="#">
                                                    <h4 className="portfolio-title">Prepare leaders for the digital age.</h4>
                                                </a>
                                            </div>
                                            <a href="#" className="portfolio-btn">
                                                <i className="far fa-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="portfolio-item">
                                    <div className="portfolio-img">
                                        <img src="./src/assets/img/portfolio/06.jpg" alt="" />
                                    </div>
                                    <div className="portfolio-content">
                                        <div className="portfolio-info">
                                            <div className="portfolio-title-info">
                                                <h5 className="portfolio-subtitle">
                                                    <span></span> Leadership & C-Level Learning
                                                </h5>
                                                <a href="#">
                                                    <h4 className="portfolio-title">Prepare leaders for the digital age.</h4>
                                                </a>
                                            </div>
                                            <a href="#" className="portfolio-btn">
                                                <i className="far fa-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-img">
                                        <img src="assets/img/portfolio/05.html" alt="" />
                                    </div>
                                    <div className="portfolio-content">
                                        <div className="portfolio-info">
                                            <div className="portfolio-title-info">
                                                <h5 className="portfolio-subtitle">
                                                    <span>//</span> Health
                                                </h5>
                                                <a href="#">
                                                    <h4 className="portfolio-title">Student Health Care</h4>
                                                </a>
                                            </div>
                                            <a href="#" className="portfolio-btn">
                                                <i className="far fa-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-md-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-img">
                                        <img src="assets/img/portfolio/06.jpg" alt="" />
                                    </div>
                                    <div className="portfolio-content">
                                        <div className="portfolio-info">
                                            <div className="portfolio-title-info">
                                                <h5 className="portfolio-subtitle">
                                                    <span>//</span> Health
                                                </h5>
                                                <a href="#">
                                                    <h4 className="portfolio-title">Student Health Care</h4>
                                                </a>
                                            </div>
                                            <a href="#" className="portfolio-btn">
                                                <i className="far fa-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </section>





            {/* <section className='feature'>
                <div className="feature-area fa-negative">
                    <div className="col-xl-9 ms-auto">
                        <div className="feature-wrapper">
                            <span className="site-title-tagline">
                                <i className="far fa-book-open-reader" />  FEATURED COURSES
                            </span>
                            <h2 className="site-title">
                                Explore Our <span>Most-Requested</span> Programs
                            </h2>
                            <h5>
                                <a href="teacher-single.html">  All programs are HRDC-claimable and led by subject matter experts.</a>
                            </h5>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item">
                                        <span className="count">5 Days</span>
                                        <div className="feature-icon">
                                            <img src="./src/assets/img/icon/scholarship.svg" alt="" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Face-to-Face</h4>
                                            <p>
                                                Embedded Linux System Internals
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item">
                                        <span className="count">2 Days</span>
                                        <div className="feature-icon">
                                            <img src="./src/assets/img/icon/teacher.svg" alt="" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Face-to-Face</h4>
                                            <p>
                                                Power BI: From Data to Decisions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item">
                                        <span className="count">2 Days</span>
                                        <div className="feature-icon">
                                            <img src="./src/assets/img/icon/library.svg" alt="" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Online</h4>
                                            <p>
                                                Generative AI with LangChain
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item">
                                        <span className="count">4 Days</span>
                                        <div className="feature-icon">
                                            <img src="./src/assets/img/icon/money.svg" alt="" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Face-to-Face</h4>
                                            <p>
                                                Kotlin Fundamentals
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="about.html" className="theme-btn mt-30">
                                    View Full Course Catalog
                                    <i className="fas fa-arrow-right-long" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}


            {/* <section className='enroll'>
                <div className="enroll-area pt-80 pb-80">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <div className="enroll-left wow fadeInLeft" data-wow-delay=".25s">
                                        <div className="enroll-form">
                                            <div className="enroll-form-header">
                                                <h3>Start Your Enrollment</h3>
                                                <p>We are variations of passages the have suffered.</p>
                                            </div>
                                            <form action="#">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <select className="form-select" name="service">
                                                        <option value="">Choose Course</option>
                                                        <option value={1}>Art And Design</option>
                                                        <option value={2}>Acting And Drama</option>
                                                        <option value={3}>Accounting And Finance</option>
                                                        <option value={4}>Biology And Conservation</option>
                                                        <option value={5}>Science And Engineering</option>
                                                        <option value={6}>Health Administration</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        placeholder="Type Message"
                                                        rows={4}
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <button className="theme-btn">
                                                    Enroll Now
                                                    <i className="fas fa-arrow-right-long" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="enroll-right wow fadeInUp" data-wow-delay=".25s">
                                        <div className="skill-content">
                                            <div className="site-heading mb-3">
                                                <span className="site-title-tagline">
                                                    <i className="far fa-book-open-reader" /> Our Skills
                                                </span>
                                                <h2 className="site-title text-white">
                                                    Explore Your <span>Creativity And Talent</span> With Us
                                                </h2>
                                            </div>
                                            <p className="text-white">
                                                There are many variations of passages available but the majority
                                                have suffered alteration in some form by injected humour
                                                randomised words which don't look even slightly believable. If
                                                you are going to use passage you need sure there anything
                                                embarrassing first true generator on the Internet.
                                            </p>
                                            <div className="skills-section">
                                                <div className="progress-box">
                                                    <h5>
                                                        Our Students <span className="pull-right">85%</span>
                                                    </h5>
                                                    <div className="progress" data-value={85}>
                                                        <div className="progress-bar" role="progressbar" />
                                                    </div>
                                                </div>
                                                <div className="progress-box">
                                                    <h5>
                                                        Our Teachers <span className="pull-right">65%</span>
                                                    </h5>
                                                    <div className="progress" data-value={65}>
                                                        <div className="progress-bar" role="progressbar" />
                                                    </div>
                                                </div>
                                                <div className="progress-box">
                                                    <h5>
                                                        Our Courses <span className="pull-right">75%</span>
                                                    </h5>
                                                    <div className="progress" data-value={75}>
                                                        <div className="progress-bar" role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="contact.html" className="theme-btn mt-5">
                                                Learn More
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}

            <section className='Scaled Agile'>
                <div className="cta-area">
                    <div className="container">
                        <div className="cta-wrapper">
                            <div className="row align-items-center">
                                <div className="col-lg-5 ms-lg-auto">
                                    <div className="cta-content">
                                        <h1>SCALED AGILE (SAFe®) </h1>
                                        <h2>“Certified. Scalable. Strategic.”</h2>
                                        <h2 className="site-title">
                                            <u><i>Scale Agility. Empower Teams. Lead with SAFe®.</i></u>

                                        </h2>
                                        <p>
                                            As an official Bronze Partner of Scaled Agile Inc., Timmins delivers globally recognized SAFe® certification programs designed to help enterprises implement agile at scale.
                                            From Leading SAFe® to Agile Product Management and Scrum Master Certification, our courses combine real-world context with expert instruction to accelerate transformation.
                                            All programs are HRDC-claimable and facilitated by certified SAFe® practitioners.
                                        </p>
                                        <div className="cta-btn">
                                            <a href="application-form.html" className="theme-btn">
                                                Explore SAFe® Certifications
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className='Public class'>
                <div className="event-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Public Class
                                    </span>
                                    <h2 className="site-title">
                                        Join Our Upcoming Public Classes
                                    </h2>
                                    {/* <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="event-item">
                                    <div className="event-location">
                                        <span>
                                            <i className="far fa-map-marker-alt" />
                                            Kuala Lumpur
                                        </span>
                                    </div>
                                    <div className="event-img">
                                        <img src="assets/img/event/01.jpg" alt="" />
                                    </div>
                                    <div className="event-info">
                                        <div className="event-meta">
                                            <span className="event-date">
                                                <i className="far fa-calendar-alt" />
                                                17–21 2025
                                            </span>
                                            {/* <span className="event-time">
                                                <i className="far fa-clock" />
                                                10.00AM - 04.00PM
                                            </span> */}
                                        </div>
                                        <h4 className="event-title">
                                            <a href="#">Embedded Linux System Internals</a>
                                        </h4>
                                        {/* <p>
                                            There are many variations of passages the majority have some
                                            injected humour.
                                        </p> */}
                                        <div className="event-btn">
                                            <a href="#" className="theme-btn">
                                                View Full Calendar
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="event-item">
                                    <div className="event-location">
                                        <span>
                                            <i className="far fa-map-marker-alt" />
                                            Penang
                                        </span>
                                    </div>
                                    <div className="event-img">
                                        <img src="assets/img/event/02.jpg" alt="" />
                                    </div>
                                    <div className="event-info">
                                        <div className="event-meta">
                                            <span className="event-date">
                                                <i className="far fa-calendar-alt" />
                                                Mar 10–11 2025
                                            </span>
                                            {/* <span className="event-time">
                                                <i className="far fa-clock" />
                                                10.00AM - 04.00PM
                                            </span> */}
                                        </div>
                                        <h4 className="event-title">
                                            <a href="#">Power BI Bootcamp </a>
                                        </h4>
                                        {/* <p>
                                            There are many variations of passages the majority have some
                                            injected humour.
                                        </p> */}
                                        <div className="event-btn">
                                            <a href="#" className="theme-btn">
                                                View Full Calenda
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="event-item">
                                    <div className="event-location">
                                        <span>
                                            <i className="far fa-map-marker-alt" />
                                            Online
                                        </span>
                                    </div>
                                    <div className="event-img">
                                        <img src="assets/img/event/gai.jpeg" alt="" />
                                    </div>
                                    <div className="event-info">
                                        <div className="event-meta">
                                            <span className="event-date">
                                                <i className="far fa-calendar-alt" />
                                                Apr 5–6 2025
                                            </span>
                                            {/* <span className="event-time">
                                                <i className="far fa-clock" />
                                                10.00AM - 04.00PM
                                            </span> */}
                                        </div>
                                        <h4 className="event-title">
                                            <a href="#">Generative AI with LangChain</a>
                                        </h4>
                                        {/* <p>
                                            There are many variations of passages the majority have some
                                            injected humour.
                                        </p> */}
                                        <div className="event-btn">
                                            <a href="#" className="theme-btn">
                                                View Full Calendar
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4">
                                <div className="event-item">
                                    <div className="event-location">
                                        <span>
                                            <i className="far fa-map-marker-alt" /> 25/B Milford Road, New
                                            York
                                        </span>
                                    </div>
                                    <div className="event-img">
                                        <img src="assets/img/event/04.jpg" alt="" />
                                    </div>
                                    <div className="event-info">
                                        <div className="event-meta">
                                            <span className="event-date">
                                                <i className="far fa-calendar-alt" />
                                                16 June, 2024
                                            </span>
                                            <span className="event-time">
                                                <i className="far fa-clock" />
                                                10.00AM - 04.00PM
                                            </span>
                                        </div>
                                        <h4 className="event-title">
                                            <a href="#">High School Program 2024</a>
                                        </h4>
                                        <p>
                                            There are many variations of passages the majority have some
                                            injected humour.
                                        </p>
                                        <div className="event-btn">
                                            <a href="#" className="theme-btn">
                                                Join Event
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-4">
                                <div className="event-item">
                                    <div className="event-location">
                                        <span>
                                            <i className="far fa-map-marker-alt" /> 25/B Milford Road, New
                                            York
                                        </span>
                                    </div>
                                    <div className="event-img">
                                        <img src="assets/img/event/05.html" alt="" />
                                    </div>
                                    <div className="event-info">
                                        <div className="event-meta">
                                            <span className="event-date">
                                                <i className="far fa-calendar-alt" />
                                                16 June, 2024
                                            </span>
                                            <span className="event-time">
                                                <i className="far fa-clock" />
                                                10.00AM - 04.00PM
                                            </span>
                                        </div>
                                        <h4 className="event-title">
                                            <a href="#">High School Program 2024</a>
                                        </h4>
                                        <p>
                                            There are many variations of passages the majority have some
                                            injected humour.
                                        </p>
                                        <div className="event-btn">
                                            <a href="#" className="theme-btn">
                                                Join Event
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-4">
                                <div className="event-item">
                                    <div className="event-location">
                                        <span>
                                            <i className="far fa-map-marker-alt" /> 25/B Milford Road, New
                                            York
                                        </span>
                                    </div>
                                    <div className="event-img">
                                        <img src="assets/img/event/06.html" alt="" />
                                    </div>
                                    <div className="event-info">
                                        <div className="event-meta">
                                            <span className="event-date">
                                                <i className="far fa-calendar-alt" />
                                                16 June, 2024
                                            </span>
                                            <span className="event-time">
                                                <i className="far fa-clock" />
                                                10.00AM - 04.00PM
                                            </span>
                                        </div>
                                        <h4 className="event-title">
                                            <a href="#">High School Program 2024</a>
                                        </h4>
                                        <p>
                                            There are many variations of passages the majority have some
                                            injected humour.
                                        </p>
                                        <div className="event-btn">
                                            <a href="#" className="theme-btn">
                                                Join Event
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* pagination */}
                        <div className="pagination-area">
                            <div aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">
                                                <i className="far fa-arrow-left" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">
                                                <i className="far fa-arrow-right" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* pagination end */}
                    </div>
                </div>

            </section>



            <section className='event'>
                <div className="facility-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" />CASE STUDIES & IMPACT STORIES
                                    </span>
                                    <h2 className="site-title">
                                        A Decade of Results That Speak for Themselves
                                    </h2>
                                    {/* <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="./src/assets/img/facility/employee.   " alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Global Semiconductor Company (Confidential): Fresh Graduate Onboarding Program (10 Years)
                                            </a>
                                        </h3>
                                        {/* <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p> */}
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                View All Case Studies
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInDown" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="./src/assets/img/facility/gen ai." alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Motorola Mobility: Mobile Development Upskilling (8 Years)</a>
                                        </h3>
                                        {/* <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p> */}
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                View All Case Studies
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="./src/assets/img/facility/03." alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">DBS Bank: AI Transformation Journey (7 Years)</a>
                                        </h3>
                                        {/* <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p> */}
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                View All Case Studies
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="assets/img/facility/04.jpg" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Transport Facility</a>
                                        </h3>
                                        <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read More
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInDown" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="assets/img/facility/05.jpg" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Lab Facility</a>
                                        </h3>
                                        <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read More
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="assets/img/facility/06.html" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Gymnasium Facility</a>
                                        </h3>
                                        <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read More
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>


            </section>


            <section className='gallery'>
                <div className="gallery-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Gallery
                                    </span>
                                    <h2 className="site-title">
                                        “ <span>I</span>nside the Timmins Experienc<span>e</span>”
                                    </h2>
                                    <p>
                                        A glimpse into our classrooms, collaborations, and celebrations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row popup-gallery">
                            <div className="col-md-4 wow fadeInUp" data-wow-delay=".25s">
                                <div className="gallery-item">
                                    <div className="gallery-img">
                                        <img src="./src/assets/img/gallery/01.jpg" alt="" />
                                    </div>
                                    <div className="gallery-content">
                                        <a
                                            className="popup-img gallery-link"
                                            href="./src/assets/img/gallery/01.jpg"
                                        >
                                            <i className="fal fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-img">
                                        <img src="./src/assets/img/gallery/02.jpg" alt="" />
                                    </div>
                                    <div className="gallery-content">
                                        <a
                                            className="popup-img gallery-link"
                                            href="./src/assets/img/gallery/02.jpg"
                                        >
                                            <i className="fal fa-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeInUp" data-wow-delay=".50s">
                                <div className="gallery-item">
                                    <div className="gallery-img">
                                        <img src="./src/assets/img/gallery/03.jpg" alt="" />
                                    </div>
                                    <div className="gallery-content">
                                        <a
                                            className="popup-img gallery-link"
                                            href="./src/assets/img/gallery/03.jpg"
                                        >
                                            <i className="fal fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-img">
                                        <img src="./src/assets/img/gallery/04.jpg" alt="" />
                                    </div>
                                    <div className="gallery-content">
                                        <a
                                            className="popup-img gallery-link"
                                            href="./src/assets/img/gallery/04.jpg"
                                        >
                                            <i className="fal fa-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeInUp" data-wow-delay=".75s">
                                <div className="gallery-item">
                                    <div className="gallery-img">
                                        <img src="./src/assets/img/gallery/05.jpg" alt="" />
                                    </div>
                                    <div className="gallery-content">
                                        <a
                                            className="popup-img gallery-link"
                                            href="./src/assets/img/gallery/05.jpg"
                                        >
                                            <i className="fal fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-img">
                                        <img src="./src/assets/img/gallery/06.jpg" alt="" />
                                    </div>
                                    <div className="gallery-content">
                                        <a
                                            className="popup-img gallery-link"
                                            href="./src/assets/img/gallery/06.jpg"
                                        >
                                            <i className="fal fa-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className='testimonial'>
                <div className="testimonial-area ts-bg pt-80 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Testimonials
                                    </span>
                                    <h2 className="site-title text-white">
                                        What Our Students <span>Say's</span>
                                    </h2>
                                    <p className="text-white">
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slider owl-carousel owl-theme">
                            <div className="testimonial-item">
                                <div className="testimonial-rate">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <div className="testimonial-quote">
                                    <p>
                                        There are many variations of tend to repeat chunks some all form
                                        necessary injected for the going are humour words.
                                    </p>
                                </div>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img">
                                        <img src="./src/assets/img/testimonial/01.jp" alt="" />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>Anthony Nicoll</h4>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <span className="testimonial-quote-icon">
                                    <i className="far fa-quote-right" />
                                </span>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-rate">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <div className="testimonial-quote">
                                    <p>
                                        There are many variations of tend to repeat chunks some all form
                                        necessary injected for the going are humour words.
                                    </p>
                                </div>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img">
                                        <img src="/src/assets/img/testimonial/02.jg" alt="" />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>Richard Lock</h4>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <span className="testimonial-quote-icon">
                                    <i className="far fa-quote-right" />
                                </span>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-rate">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <div className="testimonial-quote">
                                    <p>
                                        There are many variations of tend to repeat chunks some all form
                                        necessary injected for the going are humour words.
                                    </p>
                                </div>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img">
                                        <img src="./src/assets/img/testimonial/03.jg" alt="" />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>Randal Grand</h4>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <span className="testimonial-quote-icon">
                                    <i className="far fa-quote-right" />
                                </span>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-rate">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <div className="testimonial-quote">
                                    <p>
                                        There are many variations of tend to repeat chunks some all form
                                        necessary injected for the going are humour words.
                                    </p>
                                </div>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img">
                                        <img src="./src/assets/img/testimonial/04.jg" alt="" />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>Edward Miles</h4>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <span className="testimonial-quote-icon">
                                    <i className="far fa-quote-right" />
                                </span>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-rate">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <div className="testimonial-quote">
                                    <p>
                                        There are many variations of tend to repeat chunks some all form
                                        necessary injected for the going are humour words.
                                    </p>
                                </div>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img">
                                        <img src="./src/assets/img/testimonial/" alt="" />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>Ninal Gordon</h4>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <span className="testimonial-quote-icon">
                                    <i className="far fa-quote-right" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className=''>
                <div className="facility-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> INSIGHTS & THOUGHT LEADERSHIP
                                    </span>
                                    <h2 className="site-title">
                                        Exploring the Future of Learning & Technology
                                    </h2>
                                    {/* <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="./src/assets/img/facility/employee.webp" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Designing Onboarding That Accelerates ROI</a>
                                        </h3>
                                        {/* <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p> */}
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read Insights
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInDown" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="./src/assets/img/facility/gen ai.png" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Generative AI in Learning – What’s Changing</a>
                                        </h3>
                                        {/* <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p> */}
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read Insights
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="./src/assets/img/facility/03.jpg" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Building Future-Ready Engineering Teams</a>
                                        </h3>
                                        {/* <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p> */}
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read Insights
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="assets/img/facility/04.jpg" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Transport Facility</a>
                                        </h3>
                                        <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read More
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInDown" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="assets/img/facility/05.jpg" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Lab Facility</a>
                                        </h3>
                                        <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read More
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-md-6 col-lg-4">
                                <div className="facility-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="facility-img">
                                        <img src="assets/img/facility/06.html" alt="" />
                                    </div>
                                    <div className="facility-content">
                                        <h3 className="facility-title">
                                            <a href="#">Gymnasium Facility</a>
                                        </h3>
                                        <p className="facility-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="facility-arrow">
                                            <a href="#" className="theme-btn">
                                                Read More
                                                <i className="fas fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>


            </section>

            <section className='partner'>
                <div className="partner-area bg pt-50 pb-50">
                    <div className="container">
                        <div className="partner-wrapper partner-slider owl-carousel owl-theme">
                            <img src="./src/assets/img/partner/01.png" alt="thumb" />
                            <img src="./src/assets/img/partner/02.png" alt="thumb" />
                            <img src="./src/assets/img/partner/03.png" alt="thumb" />
                            <img src="./src/assets/img/partner/04.png" alt="thumb" />
                            <img src="./src/assets/img/partner/01.png" alt="thumb" />
                            <img src="./src/assets/img/partner/02.png" alt="thumb" />
                            <img src="./src/assets/img/partner/04.png" alt="thumb" />
                        </div>
                    </div>
                </div>

            </section>

            <Footer />

            <section className='scroll top'>
                <a href="#" id="scroll-top">
                    <i className="far fa-arrow-up-from-arc" />
                </a>

            </section>
        </>
    )
}

export default Homepage
