import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Star } from 'lucide-react';

const Pricing = () => {
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
              Priser
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight">
              Investering i <em className="text-warm-brown">dig selv</em>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-deep-brown/70 leading-relaxed font-light max-w-4xl mx-auto">
              Skræddersyede løsninger til dit budget og dine behov. Alle pakker inkluderer 
              personlig support, skræddersyede programmer og løbende opfølgning.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-32 lg:py-40 bg-warm-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-cream/50 to-warm-brown/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Personal Training */}
            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10">
              <div className="text-center mb-8 lg:mb-10">
                <h3 className="text-2xl lg:text-3xl font-serif font-light text-deep-brown mb-4">Personlig Træning</h3>
                <p className="text-deep-brown/70 mb-6 font-light">1:1 eller small group træning</p>
                <div className="text-4xl lg:text-5xl font-serif text-warm-brown mb-2">Fra 800 kr</div>
                <div className="text-sm text-deep-brown/60 font-light tracking-wide">per session</div>
              </div>
              
              <div className="space-y-4 mb-8 lg:mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Individuel træningsplan</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Kostguidance inkluderet</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Fleksible tider og lokationer</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Løbende support mellem sessioner</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Mindfulness og stresshåndtering</span>
                </div>
              </div>
              
              <Link
                to="/kontakt"
                className="w-full bg-warm-brown text-warm-cream py-4 lg:py-5 rounded-full hover:bg-deep-brown hover:shadow-warm transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Book konsultation
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Online Coaching - Featured */}
            <div className="bg-warm-brown text-warm-cream rounded-[2rem] p-8 lg:p-12 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll relative overflow-hidden transform scale-105">
              <div className="absolute top-6 lg:top-8 right-6 lg:right-8 bg-warm-cream/20 text-warm-cream text-xs font-light px-3 lg:px-4 py-2 rounded-full uppercase tracking-[0.1em]">
                Mest populær
              </div>
              <div className="absolute -top-20 -right-20 w-32 lg:w-40 h-32 lg:h-40 bg-warm-cream/5 rounded-full blur-2xl"></div>
              
              <div className="text-center mb-8 lg:mb-10">
                <h3 className="text-2xl lg:text-3xl font-serif font-light mb-4">Online Coaching</h3>
                <p className="text-warm-cream/80 mb-6 font-light">Fleksibel træning hjemmefra</p>
                <div className="text-4xl lg:text-5xl font-serif mb-2">Fra 1.200 kr</div>
                <div className="text-sm text-warm-cream/60 font-light tracking-wide">per måned</div>
              </div>
              
              <div className="space-y-4 mb-8 lg:mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-cream/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-cream" size={12} />
                  </div>
                  <span className="text-warm-cream/80 font-light">Personlig træningsapp</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-cream/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-cream" size={12} />
                  </div>
                  <span className="text-warm-cream/80 font-light">Ugentlige video check-ins</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-cream/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-cream" size={12} />
                  </div>
                  <span className="text-warm-cream/80 font-light">24/7 support via app</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-cream/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-cream" size={12} />
                  </div>
                  <span className="text-warm-cream/80 font-light">Månedsvis programjustering</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-cream/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-cream" size={12} />
                  </div>
                  <span className="text-warm-cream/80 font-light">Ernæringsplan inkluderet</span>
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

            {/* Corporate Training */}
            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10">
              <div className="text-center mb-8 lg:mb-10">
                <h3 className="text-2xl lg:text-3xl font-serif font-light text-deep-brown mb-4">Firma Træning</h3>
                <p className="text-deep-brown/70 mb-6 font-light">Gruppetræning for virksomheder</p>
                <div className="text-4xl lg:text-5xl font-serif text-warm-brown mb-2">Kontakt</div>
                <div className="text-sm text-deep-brown/60 font-light tracking-wide">for skræddersyet tilbud</div>
              </div>
              
              <div className="space-y-4 mb-8 lg:mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Holdtræning på arbejdspladsen</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Ergonomi workshops</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Stresshåndtering kurser</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Teambuilding aktiviteter</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-warm-brown" size={12} />
                  </div>
                  <span className="text-deep-brown/70 font-light">Sundhedsscreening</span>
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
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-32 lg:py-40 bg-warm-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Pakke detaljer
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Hvad er <em className="text-warm-brown">inkluderet?</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll">
              <div className="space-y-8 lg:space-y-12">
                <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10">
                  <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-6">Personlig Træning Pakker</h3>
                  <div className="space-y-4 text-deep-brown/70 font-light">
                    <div className="flex justify-between items-center py-2 border-b border-warm-brown/10">
                      <span>Enkelt session</span>
                      <span className="font-medium">800 kr</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-warm-brown/10">
                      <span>5 sessioner</span>
                      <span className="font-medium">3.750 kr <span className="text-sm text-warm-brown">(750 kr/session)</span></span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-warm-brown/10">
                      <span>10 sessioner</span>
                      <span className="font-medium">7.000 kr <span className="text-sm text-warm-brown">(700 kr/session)</span></span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Small group (2 personer)</span>
                      <span className="font-medium">1.200 kr <span className="text-sm text-warm-brown">(600 kr/person)</span></span>
                    </div>
                  </div>
                </div>

                <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10">
                  <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-6">Online Coaching Pakker</h3>
                  <div className="space-y-4 text-deep-brown/70 font-light">
                    <div className="flex justify-between items-center py-2 border-b border-warm-brown/10">
                      <span>Basic (1 måned)</span>
                      <span className="font-medium">1.200 kr</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-warm-brown/10">
                      <span>Standard (3 måneder)</span>
                      <span className="font-medium">3.300 kr <span className="text-sm text-warm-brown">(1.100 kr/måned)</span></span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Premium (6 måneder)</span>
                      <span className="font-medium">6.000 kr <span className="text-sm text-warm-brown">(1.000 kr/måned)</span></span>
                    </div>
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
                    alt="Sophie Wagner personlig træning session"
                    className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-brown/5 to-warm-beige/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Værdi
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Hvorfor Sophie's <em className="text-warm-brown">priser?</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-warm-brown" size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Premium Kvalitet</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                7+ års erfaring, certificeringer fra anerkendte institutioner og 
                en holistisk tilgang til sundhed og velvære.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Garanterede Resultater</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                98% af mine klienter når deres mål. Hvis du ikke ser resultater 
                efter 8 uger, får du pengene tilbage.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Komplet Support</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Ikke bare træning - du får kostguidance, mindfulness coaching 
                og 24/7 support inkluderet i alle pakker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 lg:py-40 bg-warm-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Ofte stillede spørgsmål
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Har du <em className="text-warm-brown">spørgsmål?</em>
            </h2>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 animate-on-scroll">
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Hvad er inkluderet i den gratis konsultation?</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Den gratis konsultation inkluderer en grundig gennemgang af dine mål, 
                sundhedsstatus og livsstil. Vi laver også en kort fysisk vurdering og 
                diskuterer, hvilken træningsform der passer bedst til dig.
              </p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 animate-on-scroll">
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Kan jeg opsige mit online coaching abonnement?</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Ja, du kan opsige dit abonnement med 30 dages varsel. Jeg anbefaler dog 
                minimum 3 måneder for at se de bedste resultater.
              </p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 animate-on-scroll">
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Hvad hvis jeg ikke kan møde op til en session?</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Du kan aflyse eller flytte en session med minimum 24 timers varsel. 
                Ved aflysning med kortere varsel vil sessionen blive trukket fra din pakke.
              </p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 animate-on-scroll">
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Tilbyder du rabat for studerende eller pensionister?</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Ja, jeg tilbyder 15% rabat til studerende og pensionister på alle pakker. 
                Kontakt mig for at høre mere om betingelserne.
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
              Klar til at investere?
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light mb-8 lg:mb-12 leading-tight">
              Start din <em className="text-warm-brown">transformation</em><br />
              i dag
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-warm-cream/70 leading-relaxed font-light max-w-4xl mx-auto mb-12 lg:mb-16">
              Book en gratis konsultation og lad os finde den perfekte pakke til dine behov og budget
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center justify-center">
              <Link
                to="/kontakt"
                className="group bg-warm-brown text-warm-cream px-10 lg:px-12 py-4 lg:py-5 rounded-full hover:bg-warm-brown/90 hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-4 transform hover:scale-105"
              >
                Book gratis konsultation
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              
              <Link to="/ydelser" className="group flex items-center gap-4 text-warm-cream/70 hover:text-warm-brown transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase">
                Se alle ydelser
                <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;