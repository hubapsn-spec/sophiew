import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-warm-cream">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-sophie" element={<About />} />
          <Route path="/ydelser" element={<Services />} />
          <Route path="/galleri" element={<Gallery />} />
          <Route path="/anmeldelser" element={<Testimonials />} />
          <Route path="/priser" element={<Pricing />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;