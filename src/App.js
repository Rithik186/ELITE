import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs'; // Import the ContactUs component
import HomePage from './components/pages/HomePage';
import CarsPage from './components/pages/CarsPage';
import CarDetailsPage from './components/pages/CarDetailsPage';
import LamboAven from './components/CAR DETAILS/LamboAven';
import FerrariLa from './components/CAR DETAILS/FerrariLa';
import BugattiChi from './components/CAR DETAILS/BugattiChi';
import RollsRoycePhant from './components/CAR DETAILS/RollsRoycePhant';
import Porsche911 from './components/CAR DETAILS/Porsche911';
import PaganiHuy from './components/CAR DETAILS/PaganiHuy';

function App() {
  return (
     <><title>ELITE CAR SHOWROOM</title><Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarDetailsPage />} />
        <Route path="/aboutus" element={<AboutUs />} /> {/* Route for AboutUs */}
        <Route path="/contact" element={<ContactUs />} /> {/* Route for ContactUs */}
        <Route path="/cars/lamborghini" element={<LamboAven />} /> {/* Lamborghini route */}
        <Route path="/cars/ferrari" element={<FerrariLa />} /> {/* Ferrari route */}
        <Route path="/cars/bugatti" element={<BugattiChi />} /> {/* Bugatti route */}
        <Route path="/cars/rolls-royce" element={<RollsRoycePhant />} />
        <Route path="/cars/porsche" element={<Porsche911 />} />
        <Route path="/cars/pagani" element={<PaganiHuy />} />
      </Routes>
      <Footer />
    </Router></>
  );
}

export default App;
