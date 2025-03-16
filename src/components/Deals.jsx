import React from 'react'
import CallToAction from './CallToAction'
import Footer from './Footer'
import Header from './Header'
import Preloader from './Preloader'

function Deals() {
  function click() {
    
  }
  return (
    <div>
      
       <Header/>
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4>Discover Our Weekly Offers</h4>
                <h2>Amazing Prices &amp; More</h2>
                <div className="border-button"><a href="about.html">Discover More</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form id="search-form" name="gs" method="submit" role="search" action="#">
                  <div className="row">
                    <div className="col-lg-2">
                      <h4>Sort Deals By:</h4>
                    </div>
                    <div className="col-lg-4">
                      <fieldset>
                        <select name="Location" className="form-select" aria-label="Default select example" id="chooseLocation" onChange={()=>{this.form.click()}}>
                          <option selected>Destinations</option>
                          <option type="checkbox" name="option1" value="Italy">Italy</option>
                          <option value="France">France</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Australia">Australia</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Singapore">Singapore</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-4">
                      <fieldset>
                        <select name="Price" className="form-select" aria-label="Default select example" id="choosePrice" onChange={()=>{this.form.click()}}>
                          <option selected>Price Range</option>
                          <option value={100}>$100 - $250</option>
                          <option value={250}>$250 - $500</option>
                          <option value={500}>$500 - $1,000</option>
                          <option value={1000}>$1,000 - $2,500</option>
                          <option value="2500+">$2,500+</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-2">                        
                      <fieldset>
                        <button className="border-button">Search Results</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="amazing-deals">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading text-center">
                  <h2>Best Weekly Offers In Each City</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image">
                        <img src="assets/images/deals-01.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="content">
                        <span className="info">*Limited Offer Today</span>
                        <h4>Glasgow City Lorem</h4>
                        <div className="row">
                          <div className="col-6">
                            <i className="fa fa-clock" />
                            <span className="list">5 Days</span>
                          </div>
                          <div className="col-6">
                            <i className="fa fa-map" />
                            <span className="list">Daily Places</span>
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet dire consectetur adipiscing elit.</p>
                        <div className="main-button">
                          <a href="reservation.html">Make a Reservation</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image">
                        <img src="assets/images/deals-02.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="content">
                        <span className="info">*Today &amp; Tomorrow Only</span>
                        <h4>Venezia Italy Ipsum</h4>
                        <div className="row">
                          <div className="col-6">
                            <i className="fa fa-clock" />
                            <span className="list">5 Days</span>
                          </div>
                          <div className="col-6">
                            <i className="fa fa-map" />
                            <span className="list">Daily Places</span>
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet dire consectetur adipiscing elit.</p>
                        <div className="main-button">
                          <a href="reservation.html">Make a Reservation</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image">
                        <img src="assets/images/deals-03.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="content">
                        <span className="info">**Undefined</span>
                        <h4>Glasgow City Lorem</h4>
                        <div className="row">
                          <div className="col-6">
                            <i className="fa fa-clock" />
                            <span className="list">5 Days</span>
                          </div>
                          <div className="col-6">
                            <i className="fa fa-map" />
                            <span className="list">Daily Places</span>
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet dire consectetur adipiscing elit.</p>
                        <div className="main-button">
                          <a href="reservation.html">Make a Reservation</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image">
                        <img src="assets/images/deals-04.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="content">
                        <span className="info">*Offer Until 24th March</span>
                        <h4>Glasgow City Lorem</h4>
                        <div className="row">
                          <div className="col-6">
                            <i className="fa fa-clock" />
                            <span className="list">5 Days</span>
                          </div>
                          <div className="col-6">
                            <i className="fa fa-map" />
                            <span className="list">Daily Places</span>
                          </div>
                        </div>
                        <p>This free CSS template is provided by Template Mo website.</p>
                        <div className="main-button">
                          <a href="reservation.html">Make a Reservation</a>
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
       <CallToAction/>
       <Footer/>
      </div>
  )
}

export default Deals