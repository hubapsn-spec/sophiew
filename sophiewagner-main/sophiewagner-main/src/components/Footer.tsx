import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-warm-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-brown via-deep-brown/95 to-warm-brown/20"></div>
      <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl lg:text-4xl font-serif font-light mb-6 lg:mb-8 text-warm-cream tracking-[0.15em]">
              SOPHIE WAGNER
            </div>
            <p className="text-warm-cream/80 mb-8 lg:mb-12 font-light text-lg leading-relaxed max-w-md">
              Certificeret Pilates instruktør og personal trainer med specialisering i 
              styrketræning, ernæring og mindfulness. Find din styrke, skab balance.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-6">
              <a href="https://instagram.com/sophiewagner_pilates" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-warm-brown/20 rounded-full flex items-center justify-center hover:bg-warm-brown/30 hover:scale-110 transition-all duration-500">
                <Instagram size={20} className="text-warm-brown" />
              </a>
              <a href="#" className="w-12 h-12 bg-warm-brown/20 rounded-full flex items-center justify-center hover:bg-warm-brown/30 hover:scale-110 transition-all duration-500">
                <Facebook size={20} className="text-warm-brown" />
              </a>
              <a href="#" className="w-12 h-12 bg-warm-brown/20 rounded-full flex items-center justify-center hover:bg-warm-brown/30 hover:scale-110 transition-all duration-500">
                <Youtube size={20} className="text-warm-brown" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg lg:text-xl font-serif font-medium text-warm-cream mb-6 lg:mb-8">Hurtige Links</h3>
            <div className="space-y-4">
              {[
                { name: 'Om Sophie', path: '/om-sophie' },
                { name: 'Pilates & Styrketræning', path: '/ydelser' },
                { name: 'Galleri', path: '/galleri' },
                { name: 'Anmeldelser', path: '/anmeldelser' },
                { name: 'Priser', path: '/priser' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-warm-cream/80 hover:text-warm-brown transition-all duration-300 font-light"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg lg:text-xl font-serif font-medium text-warm-cream mb-6 lg:mb-8">Kontakt Sophie</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warm-brown/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="text-warm-brown" size={18} />
                </div>
                <div>
                  <p className="text-warm-cream/90 font-light">sophie@wagnertraining.dk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warm-brown/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="text-warm-brown" size={18} />
                </div>
                <div>
                  <p className="text-warm-cream/90 font-light">+45 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warm-brown/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="text-warm-brown" size={18} />
                </div>
                <div>
                  <p className="text-warm-cream/90 font-light">København & online</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
              <a href="https://panthure.dk" target="_blank" rel="noopener noreferrer" className="hover:text-warm-brown transition-colors duration-300">
                Lavet af Panthure.dk
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Notice - Hidden but present for SEO */}
      {/* 
        Website Design & Development by Panthure.dk
        Premium web solutions for fitness professionals
        Copyright © 2025 Panthure.dk - All rights reserved
      */}
    </footer>
  );
};

export default Footer;