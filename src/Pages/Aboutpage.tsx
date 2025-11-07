import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Aboutpage = () => {
    return (
        <><Navbar />
            <section className='Pop up search'>
                <div className="search-popup">
                    <button className="close-search">
                        <span className="far fa-times" />
                    </button>
                    <form action="#">
                        <div className="form-group">
                            <input
                                type="search"
                                name="search-field"
                                placeholder="Search Here..."

                            />
                            <button type="submit">
                                <i className="far fa-search" />
                            </button>
                        </div>
                    </form>
                </div>

            </section>

            <section className='About timmins'>
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
                                                            <img src="assets/img/icon/teacher-2.svg" alt="" />
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
                                                            <img src="assets/img/icon/course-material.svg" alt="" />
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
                                                            <img src="assets/img/icon/online-course.svg" alt="" />
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
                                                            <img src="assets/img/icon/money.svg" alt="" />
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
                                    <img src="assets/img/choose/01.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className=' about area'>
                <div className="about-area py-120">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                                    <div className="about-img">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <img className="img-1" src="/img/about/01.jpg" alt="" />
                                                <div className="about-experience mt-4">
                                                    <div className="about-experience-icon">
                                                        <img src="/img/icon/exchange-idea.svg" alt="" />
                                                    </div>
                                                    <b className="text-start">
                                                        30 Years Of <br /> Quality Service
                                                    </b>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img className="img-2" src="/img/about/02.jpg" alt="" />
                                                <img
                                                    className="img-3 mt-4"
                                                    src="/img/about/03.jpg"
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
                                                        <img src="/img/icon/open-book.svg" alt="" />
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
                                                        <img src="/img/icon/global-education.svg" alt="" />
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

            <section className='our poupose, our value, our mission, our approach'>
                <div className="py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="terms-content">
                                    <h3>Our Performance</h3>
                                    <p>
                                        Sed ac sollicitudin ipsum. Vivamus vulputate, enim sit amet aliquet
                                        lacinia, ex mauris aliquam elit, vel pharetra augue arcu ultricies
                                        magna. Suspendisse justo erat, dignissim ut imperdiet ut, convallis
                                        vitae urna. Vivamus tincidunt lacinia metus sed suscipit. Phasellus
                                        luctus rhoncus mauris ut euismod. Aliquam elementum malesuada erat,
                                        vitae bibendum ex rutrum eget. Mauris sed nunc mauris. Curabitur
                                        semper sed justo a pellentesque. In hac habitasse platea dictumst.
                                        Mauris semper volutpat iaculis. Vestibulum ante ipsum primis in
                                        faucibus orci luctus et ultrices posuere cubilia curae; Curabitur
                                        consectetur dignissim nulla id ornare. Praesent placerat dolor vitae
                                        tellus lacinia, a malesuada est sodales. Praesent at consectetur
                                        sem, sed scelerisque arcu. Maecenas malesuada lorem id sagittis
                                        scelerisque. In hac habitasse platea dictumst.
                                    </p>
                                </div>
                                <div className="terms-content">
                                    <h3>Cookie</h3>
                                    <p>
                                        Pellentesque sit amet nulla facilisis, lobortis ex at, consequat
                                        diam. Pellentesque sed dui lorem. Aliquam vel euismod nunc. Nulla
                                        facilisi. Donec consectetur faucibus rutrum. Pellentesque ac
                                        ultricies sapien, ac iaculis erat. Vivamus posuere eget nulla sit
                                        amet vehicula. Donec finibus maximus eros, at tincidunt ipsum
                                        vestibulum ac. Integer vel metus vehicula, consequat velit a,
                                        eleifend mi. Curabitur erat mauris, luctus non dictum vel, fringilla
                                        dignissim quam. Phasellus eleifend porta fermentum. Pellentesque
                                        posuere massa vitae odio pulvinar feugiat. Fusce a risus sodales,
                                        maximus sapien sit amet, pharetra ipsum. Vivamus varius eros ac
                                        sapien pulvinar, nec tincidunt dui bibendum. Proin consectetur nibh
                                        tortor, nec vulputate ex posuere eget.
                                    </p>
                                </div>
                                <div className="terms-content">
                                    <h3>Payments</h3>
                                    <p>
                                        Amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque
                                        sed dui lorem. Aliquam vel euismod nunc. Nulla facilisi. Donec
                                        consectetur faucibus rutrum. Pellentesque ac ultricies sapien, ac
                                        iaculis erat. Vivamus posuere eget nulla sit amet vehicula. Donec
                                        finibus maximus eros, at tincidunt ipsum vestibulum ac. Integer vel
                                        metus vehicula, consequat velit a, eleifend mi. Curabitur erat
                                        mauris, luctus non dictum vel, fringilla dignissim quam. Phasellus
                                        eleifend porta fermentum. Pellentesque posuere massa vitae odio
                                        pulvinar feugiat. Fusce a risus sodales, maximus sapien sit amet,
                                        pharetra ipsum. Vivamus varius eros ac sapien pulvinar, nec
                                        tincidunt dui bibendum. Proin consectetur nibh tortor, nec vulputate
                                        ex posuere eget.
                                    </p>
                                </div>
                                <div className="terms-content">
                                    <h3>Refund Policy</h3>
                                    <p>
                                        Donec ut vestibulum sem, in faucibus mauris. Nulla et luctus nulla.
                                        Vestibulum consectetur nisi nec lobortis pretium. Fusce dignissim in
                                        sem in bibendum. Vivamus fermentum massa et egestas gravida.
                                        Suspendisse at vulputate ante, id tempus nunc. Curabitur sed dolor a
                                        elit ornare commodo. Curabitur blandit enim nulla, ornare suscipit
                                        risus pretium ut. Nullam rhoncus, sem eget dapibus elementum, purus
                                        dolor rutrum magna, nec laoreet odio sapien sit amet erat.
                                    </p>
                                    <p>
                                        Proin non ante purus. Donec ante enim, semper vel mauris at, rutrum
                                        blandit mauris. Vivamus at ante sit amet leo consequat viverra quis
                                        at odio. Proin arcu magna, placerat sed lorem id, rutrum convallis
                                        ante.
                                    </p>
                                    <p>
                                        Nam venenatis vestibulum mauris ut viverra. Ut porta consequat lorem
                                        a ullamcorper. In et arcu quam. Nunc tristique justo nec lectus
                                        ornare placerat. Nulla ut fringilla mi. Vestibulum ante ipsum primis
                                        in faucibus orci luctus et ultrices posuere cubilia curae.
                                    </p>
                                </div>
                                <div className="terms-content">
                                    <h3>Hyperlinking to our Content</h3>
                                    <p>
                                        Sed ac sollicitudin ipsum ivamus vulputate enim sit amet aliquet
                                        lacinia mauris aliquam elit:
                                    </p>
                                    <ul className="terms-list ms-4">
                                        <li>1. Ut scelerisque hendrerit venenatis</li>
                                        <li>2. Proin fermentum lacus nec augue blandit placerat</li>
                                        <li>3. Ut vestibulum elit justo suscipit sem ultricies</li>
                                        <li>4. Integer fermentum vitae magna in condimentum</li>
                                        <li>5. Aenean ultrices neque id pellentesque tincidunt</li>
                                        <li>6. Donec ut vestibulum sem, in faucibus mauris.</li>
                                    </ul>
                                </div>
                                <div className="terms-content">
                                    <h3>Disclaimer</h3>
                                    <p>
                                        Donec facilisis consequat nisi. Vivamus euismod at ipsum a gravida.
                                        Quisque vitae augue maximus elit iaculis tincidunt. Quisque dapibus
                                        dui non justo iaculis volutpat. Phasellus vulputate tempus lorem
                                        vitae vehicula. Maecenas interdum venenatis ante, scelerisque porta
                                        nibh mollis vitae. Curabitur in erat porttitor, imperdiet lectus
                                        non, porttitor odio. Donec efficitur efficitur dapibus. Aenean sit
                                        amet tortor id lorem ultricies rhoncus. Etiam ornare eros eu commodo
                                        vehicula. Curabitur vel enim eget velit tincidunt viverra eu in
                                        risus. Aliquam suscipit tellus eu fermentum facilisis. Pellentesque
                                        volutpat posuere ligula. Fusce et consequat mi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <section className='our values'>
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
                                    <img src="assets/img/event/01.jpg" alt="" />
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
                                    <img src="assets/img/event/02.jpg" alt="" />
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
                                    <img src="assets/img/event/03.jpg" alt="" />
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

            <section className='our mission'>
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

            </section> */}

            {/* <section className='counter area'>
                <div className="counter-area pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="icon">
                                        <img src="assets/img/icon/course.svg" alt="" />
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
                                        <img src="assets/img/icon/graduation.svg" alt="" />
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
                                        <img src="assets/img/icon/teacher-2.svg" alt="" />
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
                                        <img src="assets/img/icon/award.svg" alt="" />
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

            <section className='testimonial area'>
                <div className="testimonial-area bg py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <span className="site-title-tagline">
                                        <i className="far fa-book-open-reader" /> Testimonials
                                    </span>
                                    <h2 className="site-title">
                                        What Our Students <span>Say's</span>
                                    </h2>
                                    <p>
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
                                        <img src="/img/testimonial/01.jpg" alt="" />
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
                                        <img src="/img/testimonial/02.jpg" alt="" />
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
                                        <img src="/img/testimonial/03.jpg" alt="" />
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
                                        <img src="/img/testimonial/04.jpg" alt="" />
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
                                        <img src="/img/testimonial/05.jpg" alt="" />
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

            </section> */}

            <section className='team-area'>
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
                                        <img src="/img/team/01.jpg" alt="thumb" />
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
                                                <a href="#">Angela T. Vigil</a>
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
                                        <img src="/img/team/02.jpg" alt="thumb" />
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
                                                <a href="#">Frank A. Mitchell</a>
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
                                        <img src="/img/team/03.jpg" alt="thumb" />
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
                                                <a href="#">Susan D. Lunsford</a>
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
                                        <img src="/img/team/04.jpg" alt="thumb" />
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
                                                <a href="#">Dennis A. Pruitt</a>
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

            <section className=' partner area '>
                <div className="partner-area bg pt-50 pb-50">
                    <div className="container">
                        <div className="partner-wrapper partner-slider owl-carousel owl-theme">
                            <img src="/img/partner/01.png" alt="thumb" />
                            <img src="/img/partner/02.png" alt="thumb" />
                            <img src="/img/partner/03.png" alt="thumb" />
                            <img src="/img/partner/04.png" alt="thumb" />
                            <img src="/img/partner/01.png" alt="thumb" />
                            <img src="/img/partner/02.png" alt="thumb" />
                            <img src="/img/partner/04.png" alt="thumb" />
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Aboutpage;
