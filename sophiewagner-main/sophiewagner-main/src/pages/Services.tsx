import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Users, Monitor, Heart, Target, Zap, ChevronRight, Clock, MapPin, Smartphone } from 'lucide-react';

const Services = () => {
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
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12">
              Ydelser
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight">
              Skræddersyet til <em className="text-warm-brown">dig</em>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-deep-brown/70 leading-relaxed font-light max-w-4xl mx-auto">
              Vælg den tilgang, der passer bedst til dit liv, dine mål og din livsstil. 
              Alle mine ydelser er designet til at give dig maksimale resultater med bæredygtige metoder.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-32 lg:py-40 bg-warm-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-cream/50 to-warm-brown/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Personal Training */}
            <div className="group bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 hover:bg-warm-cream hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/5">
              <div className="w-16 lg:w-20 h-16 lg:h-20 bg-warm-brown/10 rounded-2xl flex items-center justify-center mb-8 lg:mb-10 group-hover:bg-warm-brown/20 group-hover:scale-110 transition-all duration-500">
                <Dumbbell className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-deep-brown mb-6 lg:mb-8">Personlig Træning</h3>
              <p className="text-deep-brown/70 mb-8 lg:mb-10 leading-relaxed font-light text-lg">
                1:1 træning med fokus på styrke, mobilitet, vægttab eller generel sundhed. 
                Mulighed for small group træning med op til 2 personer.
              </p>
              <div className="space-y-4 text-deep-brown/60 font-light mb-8 lg:mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  <span>Individuel træningsplan</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  <span>Løbende støtte og motivation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  <span>Kostguidance og livsstilsrådgivning</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  <span>Fleksible tider og lokationer</span>
                </div>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-warm-brown text-warm-cream py-4 lg:py-5 rounded-full hover:bg-deep-brown hover:shadow-warm transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Book session
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Corporate Training */}
            <div className="group bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 hover:bg-warm-cream hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/5">
              <div className="w-16 lg:w-20 h-16 lg:h-20 bg-warm-brown/10 rounded-2xl flex items-center justify-center mb-8 lg:mb-10 group-hover:bg-warm-brown/20 group-hover:scale-110 transition-all duration-500">
                <Users className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-deep-brown mb-6 lg:mb-8">Firma Træning</h3>
              <p className="text-deep-brown/70 mb-8 lg:mb-10 leading-relaxed font-light text-lg">
                Skræddersyet træning for virksomheder med fokus på medarbejdertrivsel, 
                sundhed og teambuilding.
              </p>
              <div className="space-y-4 text-deep-brown/60 font-light mb-8 lg:mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  <span>Holdtræning på arbejdspladsen</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  <span>Ergonomi og bevægelse</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  <span>Stresshåndtering og mindfulness</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-brown rounded-full"></div>
                  <span>Teambuilding aktiviteter</span>
                </div>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-warm-brown text-warm-cream py-4 lg:py-5 rounded-full hover:bg-deep-brown hover:shadow-warm transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Få tilbud
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Online Coaching */}
            <div className="group bg-warm-brown text-warm-cream rounded-[2rem] p-8 lg:p-12 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll relative overflow-hidden transform scale-105">
              <div className="absolute top-6 lg:top-8 right-6 lg:right-8 bg-warm-cream/20 text-warm-cream text-xs font-light px-3 lg:px-4 py-2 rounded-full uppercase tracking-[0.1em]">
                Populær
              </div>
              <div className="absolute -top-20 -right-20 w-32 lg:w-40 h-32 lg:h-40 bg-warm-cream/5 rounded-full blur-2xl"></div>
              <div className="w-16 lg:w-20 h-16 lg:h-20 bg-warm-cream/20 rounded-2xl flex items-center justify-center mb-8 lg:mb-10 group-hover:bg-warm-cream/30 group-hover:scale-110 transition-all duration-500">
                <Monitor className="text-warm-cream" size={32} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light mb-6 lg:mb-8">Online Coaching</h3>
              <p className="text-warm-cream/80 mb-8 lg:mb-10 leading-relaxed font-light text-lg">
                Fleksibel træning via Beefit-app med personlig coaching, 
                ugentlige check-ins og løbende support.
              </p>
              <div className="space-y-4 text-warm-cream/70 font-light mb-8 lg:mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-cream rounded-full"></div>
                  <span>Træning hjemmefra eller i fitnesscenter</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-cream rounded-full"></div>
                  <span>Ugentlige video check-ins</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-cream rounded-full"></div>
                  <span>Fleksibel tidsplan der passer dig</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-warm-cream rounded-full"></div>
                  <span>24/7 support via app</span>
                </div>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-warm-cream text-warm-brown py-4 lg:py-5 rounded-full hover:bg-warm-beige hover:shadow-warm transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Start i dag
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-32 lg:py-40 bg-warm-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Hvad du får
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Komplet <em className="text-warm-brown">support</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll">
              <div className="space-y-8 lg:space-y-12">
                <div className="flex items-start gap-6 lg:gap-8">
                  <div className="w-14 lg:w-16 h-14 lg:h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="text-warm-brown" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Målsætning & Planlægning</h3>
                    <p className="text-deep-brown/70 font-light leading-relaxed text-lg">
                      Vi starter med en grundig analyse af dine mål, udfordringer og livsstil. 
                      Herefter laver jeg en skræddersyet plan, der passer perfekt til dig.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 lg:gap-8">
                  <div className="w-14 lg:w-16 h-14 lg:h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="text-warm-brown" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Holistisk Tilgang</h3>
                    <p className="text-deep-brown/70 font-light leading-relaxed text-lg">
                      Træning handler ikke kun om fysisk aktivitet. Jeg inkluderer mindfulness, 
                      stresshåndtering og livsstilsoptimering i alle mine programmer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 lg:gap-8">
                  <div className="w-14 lg:w-16 h-14 lg:h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="text-warm-brown" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Løbende Support</h3>
                    <p className="text-deep-brown/70 font-light leading-relaxed text-lg">
                      Du får kontinuerlig støtte, motivation og justeringer af dit program. 
                      Jeg er altid tilgængelig for spørgsmål og vejledning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="relative group">
                <div className="absolute -inset-4 bg-warm-brown/5 rounded-[2rem] blur-xl"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner personlig coaching session"
                    className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-brown/5 to-warm-beige/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Fordele
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Hvorfor vælge <em className="text-warm-brown">Sophie?</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Fleksible Tider</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Træning der passer ind i din hverdag - morgen, middag eller aften. 
                Vi finder en tid, der fungerer for dig.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Fleksible Lokationer</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Træn hjemme, i parken, på dit kontor eller i mit private studio. 
                Vi træner der, hvor du føler dig mest komfortabel.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">App Support</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Få adgang til din personlige træningsapp med øvelser, 
                fremskridt tracking og direkte kommunikation med mig.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Personlig Omsorg</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Jeg tager mig tid til at lære dig at kende og forstå dine behov. 
                Du er ikke bare et nummer - du er et helt menneske.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Målrettet Tilgang</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Hver træning er designet specifikt til dine mål. 
                Vi spilder ikke tid på øvelser, der ikke bringer dig tættere på dit mål.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Hurtige Resultater</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Med min erfaring og fokuserede tilgang ser de fleste klienter 
                resultater allerede efter 2-3 uger.
              </p>
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
              Klar til at starte?
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light mb-8 lg:mb-12 leading-tight">
              Vælg din <em className="text-warm-brown">ydelse</em><br />
              og kom i gang
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-warm-cream/70 leading-relaxed font-light max-w-4xl mx-auto mb-12 lg:mb-16">
              Book en gratis konsultation og lad os finde den perfekte løsning til dine behov og mål
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center justify-center">
              <Link
                to="/kontakt"
                className="group bg-warm-brown text-warm-cream px-10 lg:px-12 py-4 lg:py-5 rounded-full hover:bg-warm-brown/90 hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-4 transform hover:scale-105"
              >
                Book gratis konsultation
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              
              <Link to="/priser" className="group flex items-center gap-4 text-warm-cream/70 hover:text-warm-brown transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase">
                Se priser
                <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;