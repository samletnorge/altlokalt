import React from 'react'

function WeeklyOfferItem() {
    return (
    
        <div className="item col-lg-8">
            <div className="thumb">
                <img src="assets/images/offers-02.jpg" alt="" />
                <div className="text">
                    <h4>Kingston<br /><span><i className="fa fa-users"></i> 234 Check Ins</span></h4>
                    <h6>$420<br /><span>/person</span></h6>
                    <div className="line-dec"></div>
                    <ul>
                        <li>Deal Includes:</li>
                        <li><i className="fa fa-taxi"></i> 5 Days Trip , Hotel Included</li>
                        <li><i className="fa fa-plane"></i> Airplane Bill Included</li>
                        <li><i className="fa fa-building"></i> Daily Places Visit</li>
                    </ul>
                    <div className="main-button">
                        <a href="company">Make a Reservation</a>
                    </div>
                </div>
            </div>
        </div>
 
    )
}

export default WeeklyOfferItem