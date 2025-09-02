import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Forside', path: '/' },
    { name: 'Om Sophie', path: '/om-sophie' },
    { name: 'Pilates & Styrke', path: '/ydelser' },
    { name: 'Galleri', path: '/galleri' },
    { name: 'Anmeldelser', path: '/anmeldelser' },
    { name: 'Priser', path: '/priser' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-warm-cream/95 backdrop-blur-xl shadow-warm border-b border-warm-brown/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-4 lg:py-6">
            <Link to="/" className="text-xl lg:text-2xl xl:text-3xl font-serif font-light tracking-[0.15em] text-deep-brown hover:text-warm-brown transition-colors duration-500">
              SOPHIE WAGNER
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-deep-brown/70 hover:text-warm-brown transition-all duration-500 font-light tracking-[0.05em] text-sm relative group whitespace-nowrap ${
                    location.pathname === item.path ? 'text-warm-brown' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-warm-brown transition-all duration-500 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="bg-warm-brown text-warm-cream px-6 lg:px-8 py-3 lg:py-3.5 rounded-full hover:bg-deep-brown hover:shadow-warm-lg transition-all duration-500 font-light tracking-[0.05em] text-sm transform hover:scale-105 whitespace-nowrap"
              >
                Book konsultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-3 text-deep-brown hover:bg-warm-brown/10 rounded-full transition-all duration-300 relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-deep-brown/50 backdrop-blur-sm z-40 xl:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-warm-cream shadow-warm-xl z-40 xl:hidden transform transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 pt-24">
          <div className="space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-deep-brown/80 hover:text-warm-brown transition-all duration-300 font-light tracking-[0.05em] text-lg py-3 border-b border-warm-brown/10 ${
                  location.pathname === item.path ? 'text-warm-brown' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social Media Icons in Mobile Drawer */}
            <div className="pt-6 border-t border-warm-brown/10">
              <p className="text-deep-brown/60 font-light text-sm mb-4 uppercase tracking-[0.1em]">Følg Sophie</p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/sophiewagner_fitness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center hover:bg-warm-brown/20 hover:scale-110 transition-all duration-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Instagram size={20} className="text-warm-brown" />
                </a>
                <a 
                  href="https://facebook.com/sophiewagner.fitness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center hover:bg-warm-brown/20 hover:scale-110 transition-all duration-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Facebook size={20} className="text-warm-brown" />
                </a>
              </div>
            </div>
            
            <Link
              to="/kontakt"
              className="block w-full bg-warm-brown text-warm-cream py-4 rounded-full hover:bg-deep-brown transition-all duration-500 font-light tracking-[0.05em] text-sm text-center mt-8"
              onClick={() => setIsMenuOpen(false)}
            >
              Book konsultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* SEO & Copyright Comments */}
      {/* Sophie Wagner - Certificeret Pilates Instruktør København */}
      {/* Website by Panthure.dk - Premium fitness website solutions */}
    </>
  );
};

export default Navigation;