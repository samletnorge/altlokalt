import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Preloader from './Preloader'

function Reservation() {
  function click() {
    this.form.click()
  }
  return (
    <div>
   
    <Header/>
    <div className="second-page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4>Book Prefered Deal Here</h4>
            <h2>Make Your Reservation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttersi labore et dolore magna aliqua is ipsum suspendisse ultrices gravida</p>
            <div className="main-button"><a href="about.html">Discover More</a></div>
          </div>
        </div>
      </div>
    </div>
    <div className="more-info reservation-info">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="info-item">
              <i className="fa fa-phone" />
              <h4>Make a Phone Call</h4>
              <a href="#">+123 456 789 (0)</a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="info-item">
              <i className="fa fa-envelope" />
              <h4>Contact Us via Email</h4>
              <a href="#">company@email.com</a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="info-item">
              <i className="fa fa-map-marker" />
              <h4>Visit Our Offices</h4>
              <a href="#">24th Street North Avenue London, UK</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="reservation-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameBorder={0} style={{border: 0, borderTopLeftRadius: '23px', borderTopRightRadius: '23px'}} allowFullScreen />
            </div>
          </div>
          <div className="col-lg-12">
            <form id="reservation-form" name="gs" method="submit" role="search" action="#">
              <div className="row">
                <div className="col-lg-12">
                  <h4>Make Your <em>Reservation</em> Through This <em>Form</em></h4>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <label htmlFor="Name" className="form-label">Your Name</label>
                    <input type="text" name="Name" className="Name" placeholder="Ex. John Smithee" autoComplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <label htmlFor="Number" className="form-label">Your Phone Number</label>
                    <input type="text" name="Number" className="Number" placeholder="Ex. +xxx xxx xxx" autoComplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <label htmlFor="chooseGuests" className="form-label">Number Of Guests</label>
                    <select name="Guests" className="form-select" aria-label="Default select example" id="chooseGuests" onChange={()=>{this.form.click()}}>
                      <option defaultValue>ex. 3 or 4 or 5</option>
                      <option type="checkbox" name="option1" value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value="4+">4+</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <label htmlFor="Number" className="form-label">Check In Date</label>
                    <input type="date" name="date" className="date" required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <label htmlFor="chooseDestination" className="form-label">Choose Your Destination</label>
                    <select name="Destination" className="form-select" aria-label="Default select example" id="chooseCategory" onChange={()=>{this.form.click()}}>
                      <option defaultValue>ex. Switzerland, Lausanne</option>
                      <option value="Italy, Roma">Italy, Roma</option>
                      <option value="France, Paris">France, Paris</option>
                      <option value="Engaland, London">Engaland, London</option>
                      <option value="Switzerland, Lausanne">Switzerland, Lausanne</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-12">                        
                  <fieldset>
                    <button className="main-button">Make Your Reservation Now</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Reservation