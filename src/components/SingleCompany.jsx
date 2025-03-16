import React from 'react'

function SingleCompany(props) {
  return (
    <div>
    <div className="second-page-heading">
        <h4>{props.name}</h4>
        <h2>Company Profile</h2>
        <p>{props.description}</p>
        <div className="main-button">
            <a href="reservation">Learn More</a>
        </div>
    </div>
    <div className="reservation-info">
        <div className="more-info">
            <div className="info-item">
                <i className="fas fa-building"></i>
                <h4>{props.location}</h4>
                <a href="#">View on map</a>
            </div>
            <div className="info-item">
                <i className="fas fa-phone"></i>
                <h4>{props.phone}</h4>
                <a href="#">Contact Us</a>
            </div>
            <div className="info-item">
                <i className="fas fa-link"></i>
                <h4>{props.website}</h4>
                <a href={props.website}>Visit Website</a>
            </div>
        </div>
    </div>
    <div className="reservation-form">
        <div id="map"></div>
        <div id="reservation-form">
            <h4>Contact <em>{props.name}</em></h4>
            <form>
                <label>Name:</label>
                <input type="text" placeholder="Your name" required />
                <label>Email:</label>
                <input type="email" placeholder="Your email" required />
                <label>Phone:</label>
                <input type="tel" placeholder="Your phone number" required />
                <label>Message:</label>
                <textarea placeholder="Your message" required></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </div>
    </div>
</div>
  )
}

export default SingleCompany