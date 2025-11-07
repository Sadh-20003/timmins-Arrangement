import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className='popup search'>
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

      <main className="main">
        <section className='breadcrumb'>
          <div
            className="site-breadcrumb"
            style={{ background: "url(./src/assets/img/breadcrumb/01.jpg)" }}
          >
            <div className="container">
              <h2 className="breadcrumb-title">Contact Us</h2>
              <ul className="breadcrumb-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Contact Us</li>
              </ul>
            </div>
          </div>

        </section>

        <section className='contact area'>
          <div className="contact-area py-120">
            <div className="container">
              <div className="contact-content">
                <div className="row">
                  <div className="col-md-3">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <i className="fal fa-map-location-dot" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Office Address</h5>
                        <p>25/B Milford, New York, USA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <i className="fal fa-phone-volume" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Call Us</h5>
                        <p>+2 123 4565 789</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <i className="fal fa-envelopes" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Email Us</h5>
                        <p>
                          <a
                            href="https://live.themewild.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="0b62656d644b6e736a667b676e25686466"
                          >
                            [email&nbsp;protected]
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <i className="fal fa-alarm-clock" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Open Time</h5>
                        <p>Mon - Sat (10.00AM - 05.30PM)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-wrapper">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="contact-img">
                      <img src="./src/assets/img/contact/01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7 align-self-center">
                    <div className="contact-form">
                      <div className="contact-form-header">
                        <h2>Get In Touch</h2>
                        <p>
                          It is a long established fact that a reader will be distracted
                          by the readable content of a page randomised words which don't
                          look even slightly when looking at its layout.{" "}
                        </p>
                      </div>
                      <form
                        method="post"
                        action="https://live.themewild.com/eduka/assets/php/contact.php"
                        id="contact-form"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Your Name"

                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"

                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Your Subject"

                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            cols={30}
                            rows={5}
                            className="form-control"
                            placeholder="Write Your Message"
                            defaultValue={""}
                          />
                        </div>
                        <button type="submit" className="theme-btn">
                          Send Message <i className="far fa-paper-plane" />
                        </button>
                        <div className="col-md-12 mt-3">
                          <div className="form-messege text-success" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className='send us message'>
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

        <section className='map'>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
              style={{ border: 0 }}
              // allowFullScreen="yes"
              loading="lazy"
            />
          </div>

        </section>

        <section className='still deciding'>
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

      </main>

      <Footer />


    </>
  )
}

export default Contact;
