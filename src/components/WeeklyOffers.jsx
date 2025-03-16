import React from 'react'
import WeeklyOfferItem from './WeeklyOfferItem'
import { Carousel } from 'react-bootstrap';

function WeeklyOffers() {
    return (
        <div className="weekly-offers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading text-center">
                            <h2>Ny Markedsplass samt Byenstorget</h2>
                            <p>Alt du trenger til hverdagen! Hvor alt er levert av de lokale bedrifter som er klare for oppdrag</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="h-100  col-lg-6">
                        <div className="row">
                            <Carousel>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                            </Carousel>

                        </div>
                    </div>
                    <div className="h-100  col-lg-6">
                        <div className="row">
                            <Carousel>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <WeeklyOfferItem />
                                </Carousel.Item>
                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeeklyOffers