import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Heart, Target, Users, ChevronRight, Calendar, MapPin, Mail } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const observeElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
    };

    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-cream via-warm-beige/30 to-warm-brown/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-6 lg:-inset-8 bg-gradient-to-br from-warm-brown/10 to-warm-brown/5 rounded-[2rem] transform rotate-2 group-hover:rotate-1 transition-transform duration-700"></div>
                <div className="absolute -inset-3 lg:-inset-4 bg-warm-brown/5 rounded-[2rem] transform -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner - Certificeret personal trainer"
                    className="w-full h-[500px] lg:h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll order-1 lg:order-2 lg:pl-12 xl:pl-16">
              <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12">
                Om Sophie
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight">
                Jeg er <em className="text-warm-brown">Sophie Wagner</em>
              </h1>
              
              <div className="space-y-6 lg:space-y-8 text-lg lg:text-xl text-deep-brown/70 leading-relaxed font-light mb-12 lg:mb-16">
                <p>
                  Som certificeret personlig træner med specialisering i funktionel træning, 
                  styrketræning og mindfulness, har jeg hjulpet hundredvis af mennesker med at 
                  finde deres indre styrke gennem de seneste 7 år.
                </p>
                <p>
                  Min tilgang er rodfæstet i forståelsen af, at hver person er unik. Jeg skaber 
                  skræddersyede træningsprogrammer, der ikke kun transformerer din krop, men også 
                  styrker dit sind og øger dit velvære.
                </p>
                <p>
                  Jeg tror på, at ægte forandring kommer indefra, og at træning skal være en kilde 
                  til glæde og selvudvikling - ikke straf eller tvang.
                </p>
              </div>

              <Link
                to="/kontakt"
                className="group bg-warm-brown text-warm-cream px-10 lg:px-12 py-4 lg:py-5 rounded-full hover:bg-deep-brown hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-4 transform hover:scale-105 w-fit"
              >
                Book en samtale
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sophie's Journey */}
      <section className="py-32 lg:py-40 bg-warm-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-cream/50 to-warm-brown/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Min rejse
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Fra <em className="text-warm-brown">passion</em> til profession
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll">
              <div className="space-y-8 lg:space-y-12">
                <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 hover:shadow-warm transition-all duration-500">
                  <div className="w-12 h-12 bg-warm-brown/10 rounded-xl flex items-center justify-center mb-6">
                    <Calendar className="text-warm-brown" size={24} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">2017 - Begyndelsen</h3>
                  <p className="text-deep-brown/70 font-light leading-relaxed">
                    Startede min rejse som personlig træner efter at have oplevet træningens transformative kraft på egen krop. 
                    Blev certificeret gennem Danmarks Idrætshøjskole.
                  </p>
                </div>

                <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 hover:shadow-warm transition-all duration-500">
                  <div className="w-12 h-12 bg-warm-brown/10 rounded-xl flex items-center justify-center mb-6">
                    <Users className="text-warm-brown" size={24} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">2019 - Specialisering</h3>
                  <p className="text-deep-brown/70 font-light leading-relaxed">
                    Uddannede mig inden for funktionel træning og mindfulness. Begyndte at arbejde med virksomheder 
                    og deres medarbejderes sundhed og trivsel.
                  </p>
                </div>

                <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 hover:shadow-warm transition-all duration-500">
                  <div className="w-12 h-12 bg-warm-brown/10 rounded-xl flex items-center justify-center mb-6">
                    <Award className="text-warm-brown" size={24} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">2022 - Online coaching</h3>
                  <p className="text-deep-brown/70 font-light leading-relaxed">
                    Lancerede mit online coaching program for at hjælpe flere mennesker, uanset hvor de befinder sig. 
                    Har siden hjulpet over 350 klienter med at nå deres mål.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="relative group">
                <div className="absolute -inset-4 bg-warm-brown/5 rounded-[2rem] blur-xl"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner træner klient"
                    className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Qualifications */}
      <section className="py-32 lg:py-40 bg-warm-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Kvalifikationer
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Mine <em className="text-warm-brown">certificeringer</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Personal Trainer</h3>
              <p className="text-deep-brown/70 font-light">Danmarks Idrætshøjskole</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Certificeret 2017</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Funktionel Træning</h3>
              <p className="text-deep-brown/70 font-light">ACSM Specialisering</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Certificeret 2019</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Mindfulness Coach</h3>
              <p className="text-deep-brown/70 font-light">Mindfulness Center</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Certificeret 2020</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Ernæringsrådgiver</h3>
              <p className="text-deep-brown/70 font-light">Dansk Ernæringsinstitut</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Certificeret 2021</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Yoga Instruktør</h3>
              <p className="text-deep-brown/70 font-light">200 timer certificering</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Certificeret 2022</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Online Coaching</h3>
              <p className="text-deep-brown/70 font-light">Precision Nutrition</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Certificeret 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sophie's Personal Gallery */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-brown/5 to-warm-beige/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Sophie's verden
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Bag <em className="text-warm-brown">kulisserne</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group relative overflow-hidden rounded-[2rem] shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                alt="Sophie Wagner morgen rutine"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-warm-cream/90 text-sm font-light">Morgen meditation</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                alt="Sophie Wagner træning"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-warm-cream/90 text-sm font-light">Egen træning</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                alt="Sophie Wagner yoga"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-warm-cream/90 text-sm font-light">Yoga praksis</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                alt="Sophie Wagner outdoor træning"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-warm-cream/90 text-sm font-light">Outdoor træning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 bg-deep-brown text-warm-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-brown via-deep-brown/95 to-warm-brown/20"></div>
        <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/20 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12">
              Lad os mødes
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light mb-8 lg:mb-12 leading-tight">
              Klar til at <em className="text-warm-brown">starte</em><br />
              din transformation?
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-warm-cream/70 leading-relaxed font-light max-w-4xl mx-auto mb-12 lg:mb-16">
              Book en gratis konsultation og lad os snakke om, hvordan jeg kan hjælpe dig 
              med at nå dine mål og skabe den balance, du søger
            </p>
            
            <Link
              to="/kontakt"
              className="group bg-warm-brown text-warm-cream px-10 lg:px-12 py-4 lg:py-5 rounded-full hover:bg-warm-brown/90 hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-4 transform hover:scale-105 mx-auto w-fit"
            >
              Book gratis konsultation
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;