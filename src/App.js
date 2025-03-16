import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Deals from './components/Deals';
import About from './components/About';
import Reservation from './components/Reservation';
import Company from './components/Company';
import CityCompanies from './components/CityCompanies';
import SingleCompany from './components/SingleCompany';


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/Companies" element={<Company />} />
        <Route path="/cityCompanies" element={<CityCompanies/>} />
        <Route path="/Company" element={<SingleCompany/>} />
      </Routes>
    </div>

  );
};

export default App;
