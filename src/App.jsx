import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Work from './components/work/portfolio';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Info from './components/Info/info';
import Info2 from './components/Info/info2';
import './custom.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about-us" element={<AboutUs />} />
  <Route path="/work" element={<Work />} />
  <Route path="/portfolio/protfolio/:id" element={<Info />} />
  <Route path="/portfolio/portfolio/:id" element={<Info2 />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact-us" element={<ContactUs />} />
</Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;