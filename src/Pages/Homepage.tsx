import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Homepage = () => {
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
                            </div>
                            <div
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
                            </div>
                            <div
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
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            <section className='feature'>
                <div className="feature-area fa-negative">
                    <div className="col-xl-9 ms-auto">
                        <div className="feature-wrapper">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item">
                                        <span className="count">01</span>
                                        <div className="feature-icon">
                                            <img src="assets/img/icon/scholarship.svg" alt="" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Scholarship Facility</h4>
                                            <p>
                                                It is a long established fact that a reader will be distracted.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item">
                                        <span className="count">02</span>
                                        <div className="feature-icon">
                                            <img src="assets/img/icon/teacher.svg" alt="" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Skilled Lecturers</h4>
                                            <p>
                                                It is a long established fact that a reader will be distracted.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item">
                                        <span className="count">03</span>
                                        <div className="feature-icon">
                                            <img src="./assets/img/icon/library.svg" alt="" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Book Library Facility</h4>
                                            <p>
                                                It is a long established fact that a reader will be distracted.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item">
                                        <span className="count">04</span>
                                        <div className="feature-icon">
                                            <img src="assets/img/icon/money.svg" alt="" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Affordable Price</h4>
                                            <p>
                                                It is a long established fact that a reader will be distracted.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='about'>

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
                                            <i className="far fa-book-open-reader" /> About Us
                                        </span>
                                        <h2 className="site-title">
                                            Our Edukation System <span>Inspires</span> You More.
                                        </h2>
                                    </div>
                                    <p className="about-text">
                                        There are many variations of passages available but the majority
                                        have suffered alteration in some form by injected humour randomised
                                        words which don't look even slightly believable. If you are going to
                                        use passage.
                                    </p>
                                    <div className="about-content">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="about-item">
                                                    <div className="about-item-icon">
                                                        <img src="./src/assets/img/icon/open-book.svg" alt="" />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>Edukation Services</h5>
                                                        <p>
                                                            It is a long established fact that reader will to using
                                                            content.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="about-item">
                                                    <div className="about-item-icon">
                                                        <img src="./src/assets/img/icon/global-education.svg" alt="" />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>International Hubs</h5>
                                                        <p>
                                                            It is a long established fact that reader will to using
                                                            content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="about-quote">
                                                    <p>
                                                        It is a long established fact that a reader will be
                                                        distracted by the content of a page when looking at its
                                                        reader for the long words layout.
                                                    </p>
                                                    <i className="far fa-quote-right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-bottom">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className='counter'>
                <div className="counter-area pt-60 pb-60">
                    <div className="container">
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
                                            500
                                        </span>
                                        <h6 className="title">+ Total Cources </h6>
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
                                            1900
                                        </span>
                                        <h6 className="title">+ Our Students</h6>
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
                                            750
                                        </span>
                                        <h6 className="title">+ Skilled Lecturers</h6>
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
                                            30
                                        </span>
                                        <h6 className="title">+ Win Awards</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='course'>

                <div className="course-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Our Courses
                                    </span>
                                    <h2 className="site-title">
                                        Let's Check Our <span>Courses</span>
                                    </h2>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="course-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="course-img">
                                        <span className="course-tag">
                                            <i className="far fa-bookmark" /> Drama
                                        </span>
                                        <img src="./src/assets/img/course/01.jpg" alt="" />
                                        <a href="course-single.html" className="btn">
                                            <i className="far fa-link" />
                                        </a>
                                    </div>
                                    <div className="course-content">
                                        <div className="course-meta">
                                            <span className="course-meta-left">
                                                <i className="far fa-book" /> 10 Lessons
                                            </span>
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <span>(4.0)</span>
                                            </div>
                                        </div>
                                        <h4 className="course-title">
                                            <a href="course-single.html">Acting And Drama</a>
                                        </h4>
                                        <p className="course-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="course-bottom">
                                            <div className="course-bottom-left">
                                                <span>
                                                    <i className="far fa-users" />
                                                    75 Seats
                                                </span>
                                                <span>
                                                    <i className="far fa-clock" />
                                                    04 Years
                                                </span>
                                            </div>
                                            <span className="course-price">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="course-item wow fadeInUp" data-wow-delay=".50s">
                                    <div className="course-img">
                                        <span className="course-tag">
                                            <i className="far fa-bookmark" /> Design
                                        </span>
                                        <img src="./src/assets/img/course/02.jpg" alt="" />
                                        <a href="course-single.html" className="btn">
                                            <i className="far fa-link" />
                                        </a>
                                    </div>
                                    <div className="course-content">
                                        <div className="course-meta">
                                            <span className="course-meta-left">
                                                <i className="far fa-book" /> 10 Lessons
                                            </span>
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <span>(4.0)</span>
                                            </div>
                                        </div>
                                        <h4 className="course-title">
                                            <a href="course-single.html">Art And Design</a>
                                        </h4>
                                        <p className="course-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="course-bottom">
                                            <div className="course-bottom-left">
                                                <span>
                                                    <i className="far fa-users" />
                                                    75 Seats
                                                </span>
                                                <span>
                                                    <i className="far fa-clock" />
                                                    04 Years
                                                </span>
                                            </div>
                                            <span className="course-price">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="course-item wow fadeInUp" data-wow-delay=".75s">
                                    <div className="course-img">
                                        <span className="course-tag">
                                            <i className="far fa-bookmark" /> Science
                                        </span>
                                        <img src="./src/assets/img/course/03.jpg" alt="" />
                                        <a href="course-single.html" className="btn">
                                            <i className="far fa-link" />
                                        </a>
                                    </div>
                                    <div className="course-content">
                                        <div className="course-meta">
                                            <span className="course-meta-left">
                                                <i className="far fa-book" /> 10 Lessons
                                            </span>
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <span>(4.0)</span>
                                            </div>
                                        </div>
                                        <h4 className="course-title">
                                            <a href="course-single.html">Biology And Conservation</a>
                                        </h4>
                                        <p className="course-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="course-bottom">
                                            <div className="course-bottom-left">
                                                <span>
                                                    <i className="far fa-users" />
                                                    75 Seats
                                                </span>
                                                <span>
                                                    <i className="far fa-clock" />
                                                    04 Years
                                                </span>
                                            </div>
                                            <span className="course-price">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="course-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="course-img">
                                        <span className="course-tag">
                                            <i className="far fa-bookmark" /> Science
                                        </span>
                                        <img src="./src/assets/img/course/04.jpg" alt="" />
                                        <a href="course-single.html" className="btn">
                                            <i className="far fa-link" />
                                        </a>
                                    </div>
                                    <div className="course-content">
                                        <div className="course-meta">
                                            <span className="course-meta-left">
                                                <i className="far fa-book" /> 10 Lessons
                                            </span>
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <span>(4.0)</span>
                                            </div>
                                        </div>
                                        <h4 className="course-title">
                                            <a href="course-single.html">Science And Engineering</a>
                                        </h4>
                                        <p className="course-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="course-bottom">
                                            <div className="course-bottom-left">
                                                <span>
                                                    <i className="far fa-users" />
                                                    75 Seats
                                                </span>
                                                <span>
                                                    <i className="far fa-clock" />
                                                    04 Years
                                                </span>
                                            </div>
                                            <span className="course-price">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="course-item wow fadeInUp" data-wow-delay=".50s">
                                    <div className="course-img">
                                        <span className="course-tag">
                                            <i className="far fa-bookmark" /> Health
                                        </span>
                                        <img src="./src/assets/img/course/05.jpg" alt="" />
                                        <a href="course-single.html" className="btn">
                                            <i className="far fa-link" />
                                        </a>
                                    </div>
                                    <div className="course-content">
                                        <div className="course-meta">
                                            <span className="course-meta-left">
                                                <i className="far fa-book" /> 10 Lessons
                                            </span>
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <span>(4.0)</span>
                                            </div>
                                        </div>
                                        <h4 className="course-title">
                                            <a href="course-single.html">Health Administration</a>
                                        </h4>
                                        <p className="course-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="course-bottom">
                                            <div className="course-bottom-left">
                                                <span>
                                                    <i className="far fa-users" />
                                                    75 Seats
                                                </span>
                                                <span>
                                                    <i className="far fa-clock" />
                                                    04 Years
                                                </span>
                                            </div>
                                            <span className="course-price">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="course-item wow fadeInUp" data-wow-delay=".75s">
                                    <div className="course-img">
                                        <span className="course-tag">
                                            <i className="far fa-bookmark" /> Finance
                                        </span>
                                        <img src="./src/assets/img/course/06.jpg" alt="" />
                                        <a href="course-single.html" className="btn">
                                            <i className="far fa-link" />
                                        </a>
                                    </div>
                                    <div className="course-content">
                                        <div className="course-meta">
                                            <span className="course-meta-left">
                                                <i className="far fa-book" /> 10 Lessons
                                            </span>
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <span>(4.0)</span>
                                            </div>
                                        </div>
                                        <h4 className="course-title">
                                            <a href="course-single.html">Accounting And Finance</a>
                                        </h4>
                                        <p className="course-text">
                                            There are many variations of passages orem psum available but the
                                            majority have suffer alteration in some form by injected.
                                        </p>
                                        <div className="course-bottom">
                                            <div className="course-bottom-left">
                                                <span>
                                                    <i className="far fa-users" />
                                                    75 Seats
                                                </span>
                                                <span>
                                                    <i className="far fa-clock" />
                                                    04 Years
                                                </span>
                                            </div>
                                            <span className="course-price">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className='vedio'>
                <div className="video-area">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".25s">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Latest Video
                                    </span>
                                    <h2 className="site-title">
                                        Let's Check Our <span>Latest</span> Video
                                    </h2>
                                </div>
                                <p className="about-text">
                                    There are many variations of passages available but the majority have
                                    suffered alteration in some form by injected humour look even slightly
                                    believable.
                                </p>
                                <a href="about.html" className="theme-btn mt-30">
                                    Learn More
                                    <i className="fas fa-arrow-right-long" />
                                </a>
                            </div>
                            <div className="col-lg-8 wow fadeInRight" data-wow-delay=".25s">
                                <div
                                    className="video-content"
                                    style={{ backgroundImage: "url(./src/assets/img/video/01.jpg)" }}
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-12">
                                            <div className="video-wrapper">
                                                <a
                                                    className="play-btn popup-youtube"
                                                    href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                                                >
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='team -area'>
                <div className="team-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Our Teachers
                                    </span>
                                    <h2 className="site-title">
                                        Meet With Our <span>Teachers</span>
                                    </h2>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="team-img">
                                        <img src="./src/assets/img/team/01.jpg" alt="thumb" />
                                    </div>
                                    <div className="team-social">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-whatsapp" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                    <div className="team-content">
                                        <div className="team-bio">
                                            <h5>
                                                <a href="teacher-single.html">Angela T. Vigil</a>
                                            </h5>
                                            <span>Associate Professor</span>
                                        </div>
                                    </div>
                                    <span className="team-social-btn">
                                        <i className="far fa-share-nodes" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                                    <div className="team-img">
                                        <img src="./src/assets/img/team/02.jpg" alt="thumb" />
                                    </div>
                                    <div className="team-social">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-whatsapp" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                    <div className="team-content">
                                        <div className="team-bio">
                                            <h5>
                                                <a href="teacher-single.html">Frank A. Mitchell</a>
                                            </h5>
                                            <span>Associate Professor</span>
                                        </div>
                                    </div>
                                    <span className="team-social-btn">
                                        <i className="far fa-share-nodes" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                                    <div className="team-img">
                                        <img src="./src/assets/img/team/03.jpg" alt="thumb" />
                                    </div>
                                    <div className="team-social">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-whatsapp" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                    <div className="team-content">
                                        <div className="team-bio">
                                            <h5>
                                                <a href="teacher-single.html">Susan D. Lunsford</a>
                                            </h5>
                                            <span>CEO &amp; Founder</span>
                                        </div>
                                    </div>
                                    <span className="team-social-btn">
                                        <i className="far fa-share-nodes" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="team-item wow fadeInUp" data-wow-delay="1s">
                                    <div className="team-img">
                                        <img src="./src/assets/img/team/04.jpg" alt="thumb" />
                                    </div>
                                    <div className="team-social">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-whatsapp" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                    <div className="team-content">
                                        <div className="team-bio">
                                            <h5>
                                                <a href="teacher-single.html">Dennis A. Pruitt</a>
                                            </h5>
                                            <span>Associate Professor</span>
                                        </div>
                                    </div>
                                    <span className="team-social-btn">
                                        <i className="far fa-share-nodes" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='choose area'>
                <div className="choose-area pt-80 pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="choose-content wow fadeInUp" data-wow-delay=".25s">
                                    <div className="choose-content-info">
                                        <div className="site-heading mb-0">
                                            <span className="site-title-tagline">
                                                <i className="far fa-book-open-reader" /> Why Choose Us
                                            </span>
                                            <h2 className="site-title text-white mb-10">
                                                We Are Expert &amp; <span>Do Our Best</span> For Your Goal
                                            </h2>
                                            <p className="text-white">
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when many desktop and web page
                                                editors looking at its layout.
                                            </p>
                                        </div>
                                        <div className="choose-content-wrap">
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="choose-item">
                                                        <div className="choose-item-icon">
                                                            <img src="./src/assets/img/icon/teacher-2.svg" alt="" />
                                                        </div>
                                                        <div className="choose-item-info">
                                                            <h4>Expert Teachers</h4>
                                                            <p>There are many variation of the suffered.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="choose-item">
                                                        <div className="choose-item-icon">
                                                            <img src="./src/assets/img/icon/course-material.svg" alt="" />
                                                        </div>
                                                        <div className="choose-item-info">
                                                            <h4>Courses Material</h4>
                                                            <p>There are many variation of the suffered.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="choose-item">
                                                        <div className="choose-item-icon">
                                                            <img src="./src/assets/img/icon/online-course.svg" alt="" />
                                                        </div>
                                                        <div className="choose-item-info">
                                                            <h4>Online Courses</h4>
                                                            <p>There are many variation of the suffered.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="choose-item">
                                                        <div className="choose-item-icon">
                                                            <img src="./src/assets/img/icon/money.svg" alt="" />
                                                        </div>
                                                        <div className="choose-item-info">
                                                            <h4>Affordable Price</h4>
                                                            <p>There are many variation of the suffered.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="choose-img wow fadeInRight" data-wow-delay=".25s">
                                    <img src="./src/assets/img/choose/01.jpg" alt="" />
                                </div>
                            </div>
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
                                        Our Photo <span>Gallery</span>
                                    </h2>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
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

            <section className='cta'>
                <div className="cta-area">
                    <div className="container">
                        <div className="cta-wrapper">
                            <div className="row align-items-center">
                                <div className="col-lg-5 ms-lg-auto">
                                    <div className="cta-content">
                                        <h1>Our 20% Offer Running - Join Today For Your Course</h1>
                                        <p>
                                            There are many variations of passages available but the majority
                                            have suffered alteration in some form by injected humour
                                            randomised words which don't look even slightly believable.
                                        </p>
                                        <div className="cta-btn">
                                            <a href="application-form.html" className="theme-btn">
                                                Apply Now
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

            <section className='event'>
                <div className="event-area bg py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Events
                                    </span>
                                    <h2 className="site-title">
                                        Our Upcoming <span>Events</span>
                                    </h2>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="event-slider owl-carousel owl-theme">
                            <div className="event-item">
                                <div className="event-location">
                                    <span>
                                        <i className="far fa-map-marker-alt" /> 25/B Milford Road, New York
                                    </span>
                                </div>
                                <div className="event-img">
                                    <img src="./src/assets/img/event/01.jpg" alt="" />
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
                                        <a href="event-single.html">High School Program 2024</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="event-btn">
                                        <a href="event-single.html" className="theme-btn">
                                            Join Event
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="event-location">
                                    <span>
                                        <i className="far fa-map-marker-alt" /> 25/B Milford Road, New York
                                    </span>
                                </div>
                                <div className="event-img">
                                    <img src="./src/assets/img/event/02.jpg" alt="" />
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
                                        <a href="event-single.html">High School Program 2024</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="event-btn">
                                        <a href="event-single.html" className="theme-btn">
                                            Join Event
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="event-location">
                                    <span>
                                        <i className="far fa-map-marker-alt" /> 25/B Milford Road, New York
                                    </span>
                                </div>
                                <div className="event-img">
                                    <img src="./src/assets/img/event/03.jpg" alt="" />
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
                                        <a href="event-single.html">High School Program 2024</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="event-btn">
                                        <a href="event-single.html" className="theme-btn">
                                            Join Event
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="event-location">
                                    <span>
                                        <i className="far fa-map-marker-alt" /> 25/B Milford Road, New York
                                    </span>
                                </div>
                                <div className="event-img">
                                    <img src="./src/assets/img/event/04.jpg" alt="" />
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
                                        <a href="event-single.html">High School Program 2024</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="event-btn">
                                        <a href="event-single.html" className="theme-btn">
                                            Join Event
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='enroll'>
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

            </section>

            <section className='department'>
                <div className="department-area bg py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Department
                                    </span>
                                    <h2 className="site-title">
                                        Browse Our <span>Department</span>
                                    </h2>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="department-slider owl-carousel owl-theme">
                            <div className="department-item">
                                <div className="department-icon">
                                    <img src="./src/assets/img/icon/monitor.svg" alt="" />
                                </div>
                                <div className="department-info">
                                    <h4 className="department-title">
                                        <a href="academic-single.html">Business And Finance</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="department-btn">
                                        <a href="academic-single.html">
                                            Read More
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="department-item">
                                <div className="department-icon">
                                    <img src="./src/assets/img/icon/law.svg" alt="" />
                                </div>
                                <div className="department-info">
                                    <h4 className="department-title">
                                        <a href="academic-single.html">Law And Criminology</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="department-btn">
                                        <a href="academic-single.html">
                                            Read More
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="department-item">
                                <div className="department-icon">
                                    <img src="./src/assets/img/icon/data.svg" alt="" />
                                </div>
                                <div className="department-info">
                                    <h4 className="department-title">
                                        <a href="academic-single.html">IT And Data Science</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="department-btn">
                                        <a href="academic-single.html">
                                            Read More
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="department-item">
                                <div className="department-icon">
                                    <img src="./src/assets/img/icon/health.svg" alt="" />
                                </div>
                                <div className="department-info">
                                    <h4 className="department-title">
                                        <a href="academic-single.html">Health And Medicine</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="department-btn">
                                        <a href="academic-single.html">
                                            Read More
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="department-item">
                                <div className="department-icon">
                                    <img src="./src/assets/img/icon/art.svg" alt="" />
                                </div>
                                <div className="department-info">
                                    <h4 className="department-title">
                                        <a href="academic-single.html">Art And Design</a>
                                    </h4>
                                    <p>
                                        There are many variations of passages the majority have some
                                        injected humour.
                                    </p>
                                    <div className="department-btn">
                                        <a href="academic-single.html">
                                            Read More
                                            <i className="fas fa-arrow-right-long" />
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
                                        <img src="./src/assets/img/testimonial/01.jpg" alt="" />
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
                                        <img src="/src/assets/img/testimonial/02.jpg" alt="" />
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
                                        <img src="./src/assets/img/testimonial/03.jpg" alt="" />
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
                                        <img src="./src/assets/img/testimonial/04.jpg" alt="" />
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
                                        <img src="./src/assets/img/testimonial/05.jpg" alt="" />
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
                <div className="blog-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Our Blog
                                    </span>
                                    <h2 className="site-title">
                                        Latest News &amp; <span>Blog</span>
                                    </h2>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                                    <div className="blog-date">
                                        <i className="fal fa-calendar-alt" /> June 18, 2024
                                    </div>
                                    <div className="blog-item-img">
                                        <img src="./src/assets/img/blog/01.jpg" alt="Thumb" />
                                    </div>
                                    <div className="blog-item-info">
                                        <div className="blog-item-meta">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-user-circle" /> By Alicia Davis
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-comments" /> 03 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="blog-title">
                                            <a href="blog-single.html">
                                                There are many variations passage have suffered available.
                                            </a>
                                        </h4>
                                        <a className="theme-btn" href="blog-single.html">
                                            Read More
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="blog-item wow fadeInUp" data-wow-delay=".50s">
                                    <div className="blog-date">
                                        <i className="fal fa-calendar-alt" /> June 18, 2024
                                    </div>
                                    <div className="blog-item-img">
                                        <img src="./src/assets/img/blog/02.jpg" alt="Thumb" />
                                    </div>
                                    <div className="blog-item-info">
                                        <div className="blog-item-meta">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-user-circle" /> By Alicia Davis
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-comments" /> 03 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="blog-title">
                                            <a href="blog-single.html">
                                                There are many variations passage have suffered available.
                                            </a>
                                        </h4>
                                        <a className="theme-btn" href="blog-single.html">
                                            Read More
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="blog-item wow fadeInUp" data-wow-delay=".75s">
                                    <div className="blog-date">
                                        <i className="fal fa-calendar-alt" /> June 18, 2024
                                    </div>
                                    <div className="blog-item-img">
                                        <img src="./src/assets/img/blog/03.jpg" alt="Thumb" />
                                    </div>
                                    <div className="blog-item-info">
                                        <div className="blog-item-meta">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-user-circle" /> By Alicia Davis
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-comments" /> 03 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="blog-title">
                                            <a href="blog-single.html">
                                                There are many variations passage have suffered available.
                                            </a>
                                        </h4>
                                        <a className="theme-btn" href="blog-single.html">
                                            Read More
                                            <i className="fas fa-arrow-right-long" />
                                        </a>
                                    </div>
                                </div>
                            </div>
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
