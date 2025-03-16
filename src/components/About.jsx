import React from 'react'
import CallToAction from './CallToAction'
import Footer from './Footer'
import Header from './Header'
import Preloader from './Preloader'

function About() {
  return (
    <div>
  
    <Header/>
    {/* ***** Main Banner Area Start ***** */}
    <section id="section-1">
      <div className="content-slider">
        <input type="radio" id="banner1" className="sec-1-input" name="banner" defaultChecked />
        <input type="radio" id="banner2" className="sec-1-input" name="banner" />
        <input type="radio" id="banner3" className="sec-1-input" name="banner" />
        <input type="radio" id="banner4" className="sec-1-input" name="banner" />
        <div className="slider">
          <div id="top-banner-1" className="banner">
            <div className="banner-inner-wrapper header-text">
              <div className="main-caption">
                <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                <h1>Caribbean</h1>
                <div className="border-button"><a href="about.html">Go There</a></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="more-info">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-user" />
                          <h4><span>Population:</span><br />44.48 M</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-globe" />
                          <h4><span>Territory:</span><br />275.400 KM<em>2</em></h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-home" />
                          <h4><span>AVG Price:</span><br />$946.000</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <div className="main-button">
                            <a href="about.html">Explore More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="top-banner-2" className="banner">
            <div className="banner-inner-wrapper header-text">
              <div className="main-caption">
                <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                <h1>Switzerland</h1>
                <div className="border-button"><a href="about.html">Go There</a></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="more-info">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-user" />
                          <h4><span>Population:</span><br />8.66 M</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-globe" />
                          <h4><span>Territory:</span><br />41.290 KM<em>2</em></h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-home" />
                          <h4><span>AVG Price:</span><br />$1.100.200</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <div className="main-button">
                            <a href="about.html">Explore More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="top-banner-3" className="banner">
            <div className="banner-inner-wrapper header-text">
              <div className="main-caption">
                <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                <h1>France</h1>
                <div className="border-button"><a href="about.html">Go There</a></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="more-info">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-user" />
                          <h4><span>Population:</span><br />67.41 M</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-globe" />
                          <h4><span>Territory:</span><br />551.500 KM<em>2</em></h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-home" />
                          <h4><span>AVG Price:</span><br />$425.600</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <div className="main-button">
                            <a href="about.html">Explore More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="top-banner-4" className="banner">
            <div className="banner-inner-wrapper header-text">
              <div className="main-caption">
                <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                <h1>Thailand</h1>
                <div className="border-button"><a href="about.html">Go There</a></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="more-info">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-user" />
                          <h4><span>Population:</span><br />69.86 M</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-globe" />
                          <h4><span>Territory:</span><br />513.120 KM<em>2</em></h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <i className="fa fa-home" />
                          <h4><span>AVG Price:</span><br />$165.450</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <div className="main-button">
                            <a href="about.html">Explore More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="controls">
            <label htmlFor="banner1"><span className="progressbar"><span className="progressbar-fill" /></span><span className="text">1</span></label>
            <label htmlFor="banner2"><span className="progressbar"><span className="progressbar-fill" /></span><span className="text">2</span></label>
            <label htmlFor="banner3"><span className="progressbar"><span className="progressbar-fill" /></span><span className="text">3</span></label>
            <label htmlFor="banner4"><span className="progressbar"><span className="progressbar-fill" /></span><span className="text">4</span></label>
          </div>
        </nav>
      </div>
    </section>
    {/* ***** Main Banner Area End ***** */}
    <div className="visit-country">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-heading">
              <h2>Visit One Of Our Countries Now</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="items">
              <div className="row">
                <div className="col-lg-12">
                  <div className="item">
                    <div className="row">
                      <div className="col-lg-4 col-sm-5">
                        <div className="image">
                          <img src="assets/images/country-01.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8 col-sm-7">
                        <div className="right-content">
                          <h4>SWITZERLAND</h4>
                          <span>Europe</span>
                          <div className="main-button">
                            <a href="about.html">Explore More</a>
                          </div>
                          <p>Woox Travel is a professional Bootstrap 5 theme HTML CSS layout for your website. You can use this layout for your commercial work.</p>
                          <ul className="info">
                            <li><i className="fa fa-user" /> 8.66 Mil People</li>
                            <li><i className="fa fa-globe" /> 41.290 km2</li>
                            <li><i className="fa fa-home" /> $1.100.200</li>
                          </ul>
                          <div className="text-button">
                            <a href="about.html">Need Directions ? <i className="fa fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item">
                    <div className="row">
                      <div className="col-lg-4 col-sm-5">
                        <div className="image">
                          <img src="assets/images/country-02.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8 col-sm-7">
                        <div className="right-content">
                          <h4>CARIBBEAN</h4>
                          <span>North America</span>
                          <div className="main-button">
                            <a href="about.html">Explore More</a>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                          <ul className="info">
                            <li><i className="fa fa-user" /> 44.48 Mil People</li>
                            <li><i className="fa fa-globe" /> 275.400 km2</li>
                            <li><i className="fa fa-home" /> $946.000</li>
                          </ul>
                          <div className="text-button">
                            <a href="about.html">Need Directions ? <i className="fa fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item last-item">
                    <div className="row">
                      <div className="col-lg-4 col-sm-5">
                        <div className="image">
                          <img src="assets/images/country-03.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8 col-sm-7">
                        <div className="right-content">
                          <h4>FRANCE</h4>
                          <span>Europe</span>
                          <div className="main-button">
                            <a href="about.html">Explore More</a>
                          </div>
                          <p>We hope this WoOx template is useful for you, please support us a <a href="https://paypal.me/templatemo" target="_blank">small amount of PayPal</a> to info [at] templatemo.com for our survival. We really appreciate your contribution.</p>
                          <ul className="info">
                            <li><i className="fa fa-user" /> 67.41 Mil People</li>
                            <li><i className="fa fa-globe" /> 551.500 km2</li>
                            <li><i className="fa fa-home" /> $425.600</li>
                          </ul>
                          <div className="text-button">
                            <a href="about.html">Need Directions ? <i className="fa fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <ul className="page-numbers">
                    <li><a href="#"><i className="fa fa-arrow-left" /></a></li>
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i className="fa fa-arrow-right" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="side-bar-map">
              <div className="row">
                <div className="col-lg-12">
                  <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="550px" frameBorder={0} style={{border: 0, borderRadius: '23px'}} allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallToAction/>
    <Footer/>
  </div>
  )
}

export default About