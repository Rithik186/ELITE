import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs'; // Import the ContactUs component
import HomePage from './components/pages/HomePage';
import CarsPage from './components/pages/CarsPage';
import CarDetailsPage from './components/pages/CarDetailsPage';
import Lambo_Aven from './components/CAR DETAILS/Lambo_Aven';
import Ferrari_La from './components/CAR DETAILS/Ferrari_La';
import Bugatti_Chi from './components/CAR DETAILS/Bugatti_Chi';
import RollsRoyce_Phant from './components/CAR DETAILS/RollsRoyce_Phant';
import Porsche_911 from './components/CAR DETAILS/Porsche_911';
import Pagani_Huy from './components/CAR DETAILS/Pagani_Huy';

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
        <Route path="/cars/lamborghini" element={<Lambo_Aven />} /> {/* Lamborghini route */}
        <Route path="/cars/ferrari" element={<Ferrari_La />} /> {/* Ferrari route */}
        <Route path="/cars/bugatti" element={<Bugatti_Chi />} /> {/* Bugatti route */}
        <Route path="/cars/rolls-royce" element={<RollsRoyce_Phant />} />
        <Route path="/cars/porsche" element={<Porsche_911 />} />
        <Route path="/cars/pagani" element={<Pagani_Huy />} />
      </Routes>
      <Footer />
    </Router></>
  );
}

export default App;
