import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes - FIXED
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Changed to 'auto' for instant scroll
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 lg:bottom-10 right-6 lg:right-10 w-14 lg:w-16 h-14 lg:h-16 bg-warm-brown text-warm-cream rounded-full shadow-warm-xl hover:bg-deep-brown transition-all duration-500 flex items-center justify-center z-50 hover:scale-110 backdrop-blur-sm"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;