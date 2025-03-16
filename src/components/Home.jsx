import React from 'react'
import Header from './Header';
import MainContent from './MainContent';
import Preloader from './Preloader';
import CitiesBlock from './CitiesBlock';
import WeeklyOffers from './WeeklyOffers';
import CallToAction from './CallToAction';
import Footer from './Footer';
import MoreAbout from './MoreAbout';

function Home() {

  return (
    <div>
    
      <Header />
      <MainContent />
      <CitiesBlock />
      <WeeklyOffers />
      <MoreAbout />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home