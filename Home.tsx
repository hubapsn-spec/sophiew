import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Award, Heart, Target, Zap, Star, User, ArrowDown, Instagram, Facebook } from 'lucide-react';

const Home = () => {
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
    <div className="pt-0">
      {/* Hero Section - Sophie's Authentic Introduction */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-warm-cream via-warm-beige/30 to-warm-brown/10">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 lg:w-64 h-32 lg:h-64 bg-warm-brown/3 rounded-full blur-2xl"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Text Content - Mobile First */}
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="mb-6 lg:mb-8">
                <span className="inline-block px-4 lg:px-6 py-2 lg:py-3 bg-warm-brown/10 backdrop-blur-sm text-warm-brown font-light tracking-[0.2em] lg:tracking-[0.3em] text-xs uppercase rounded-full mb-6 lg:mb-8">
                  Certificeret Personal Træner
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-4 lg:mb-6 leading-[0.9] lg:leading-[0.85] tracking-tight">
                Sophie<br />
                <span className="italic text-warm-brown relative">
                  Wagner
                  <div className="absolute -bottom-2 lg:-bottom-4 left-0 w-20 lg:w-32 h-1 lg:h-2 bg-warm-brown/30 rounded-full"></div>
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl text-warm-brown mb-4 lg:mb-6 font-medium leading-relaxed">
                Styrketræning, funktionel movement, pilates, løb, ernæring og balance i hverdagen
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-deep-brown/80 mb-6 lg:mb-8 font-light leading-relaxed">
                <strong className="text-warm-brown">Styrke, balance og bevægelsesglæde – indefra og ud</strong>
              </p>
              
              <div className="space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg text-deep-brown/70 mb-8 lg:mb-12 font-light leading-relaxed">
                <p>
                  Certificeret personlig træner, holdtræner og kostvejleder – med fokus på at skabe resultater, 
                  der passer ind i din hverdag.
                </p>
                <p>
                  Jeg hjælper dig med at opbygge styrke, forbedre din mobilitet og finde balancen mellem 
                  træning, ernæring og et aktivt liv.
                </p>
                <p>
                  Mit mål er ikke kun at gøre dig stærkere fysisk – men også at hjælpe dig med at udvikle 
                  dig indefra og ud: at booste dit potentiale, din selvtillid og dit selvværd.
                </p>
                <p className="text-warm-brown font-medium">
                  👉 Book en uforpligtende samtale i dag og tag første skridt mod et stærkere og mere balanceret liv.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-start">
                <Link
                  to="/kontakt"
                  className="group bg-warm-brown text-warm-cream px-6 lg:px-10 py-3 lg:py-4 rounded-full hover:bg-deep-brown hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-3 transform hover:scale-105 w-full sm:w-auto justify-center"
                >
                  Book uforpligtende samtale
                  <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
                
                <Link to="/om-sophie" className="group flex items-center gap-4 text-deep-brown/70 hover:text-warm-brown transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase justify-center sm:justify-start w-full sm:w-auto">
                  <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full border-2 border-deep-brown/20 group-hover:border-warm-brown flex items-center justify-center transition-all duration-500 group-hover:shadow-warm backdrop-blur-sm bg-warm-cream/20">
                    <Play size={14} className="ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  Læs mere om Sophie
                </Link>
              </div>
            </div>

            {/* Sophie's Hero Image - Mobile Optimized */}
            <div className="animate-on-scroll order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 lg:-inset-8 bg-gradient-to-br from-warm-brown/10 to-warm-brown/5 rounded-[2rem] lg:rounded-[3rem] transform rotate-2 lg:rotate-3 group-hover:rotate-1 lg:group-hover:rotate-2 transition-transform duration-1000"></div>
                <div className="absolute -inset-2 lg:-inset-4 bg-warm-brown/5 rounded-[2rem] lg:rounded-[3rem] transform -rotate-1 lg:-rotate-2 group-hover:rotate-0 transition-transform duration-1000"></div>
                <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner - Certificeret personal træner, styrketræning, pilates og ernæring København"
                    className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-brown/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-warm-brown/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Sophie's Background - Fra passion til profession */}
      <section className="py-24 lg:py-32 bg-warm-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-br from-warm-brown/10 to-warm-brown/5 rounded-[3rem] transform rotate-3 group-hover:rotate-2 transition-transform duration-1000"></div>
                <div className="absolute -inset-4 bg-warm-brown/5 rounded-[3rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-1000"></div>
                <div className="relative overflow-hidden rounded-[3rem] shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner - Fra New Zealand til København, personlig træner og kostvejleder"
                    className="w-full h-[500px] lg:h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll order-1 lg:order-2">
              <span className="inline-block px-6 py-3 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-12">
                Om Sophie
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight">
                Fra <em className="text-warm-brown">passion</em><br />
                til profession
              </h2>
              
              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-deep-brown/70 leading-relaxed font-light mb-12 lg:mb-16">
                <p>
                  Jeg er 27 år og født og opvokset i New Zealand af danske forældre, hvor jeg tidligt 
                  fandt glæden ved bevægelse. Siden jeg kan huske, har jeg dyrket fitness, styrketræning, 
                  løb, dans og sejlads – og med 14 års baggrund som balletdanser har kroppen altid været 
                  en central del af mit liv.
                </p>
                <p>
                  Efter at have læst naturvidenskab på Københavns Universitet valgte jeg at gå all in på træning. 
                  Jeg tog et intenst år på Paul Petersens Idrætsinstitut, hvor jeg fordybede mig i anatomi, 
                  fysiologi og træningslære – og fik værktøjerne til at arbejde professionelt med krop og bevægelse.
                </p>
                <p>
                  De seneste par år har jeg arbejdet som fuldtids selvstændig personlig træner og hjulpet 
                  hundredvis af mennesker i København med at finde styrke, balance og glæde i deres træning og hverdag.
                </p>
              </div>

              <Link
                to="/om-sophie"
                className="group bg-warm-brown text-warm-cream px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:bg-deep-brown hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-4 transform hover:scale-105 w-fit"
              >
                Læs hele historien
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sophie's Approach - Min tilgang */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-warm-beige via-warm-cream/50 to-warm-brown/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20 lg:mb-24">
            <span className="inline-block px-6 py-3 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Min tilgang
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll max-w-5xl mx-auto">
              Funktionel træning der <em className="text-warm-brown">styrker</em><br />
              både krop og sind
            </h2>
            <p className="text-lg lg:text-xl text-deep-brown/70 leading-relaxed font-light max-w-4xl mx-auto animate-on-scroll">
              Jeg kombinerer funktionel styrketræning, funktionel movement, mobilitet, pilates og personlig 
              ernæringsvejledning. På den måde skaber jeg skræddersyede programmer, der styrker både krop og sind 
              – og hjælper dig med at arbejde med din krop i stedet for imod den.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 lg:mb-24">
            <div className="animate-on-scroll">
              <div className="relative group">
                <div className="absolute -inset-4 bg-warm-brown/5 rounded-[2rem] blur-xl"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner funktionel træning og styrketræning København"
                    className="w-full h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-deep-brown/70 leading-relaxed font-light">
                <p>
                  For mig er det vigtigt, at hver enkelt klient ikke kun oplever fremgang i træningen, 
                  men også får styrket deres potentiale, selvtillid og selvværd.
                </p>
                <p>
                  Jeg tror på balance fremfor perfektion, og at varig forandring sker indefra og ud – 
                  fordi træning og sundhed skal støtte dit liv, ikke kontrollere det.
                </p>
                <div className="bg-warm-brown/10 rounded-2xl p-6 lg:p-8">
                  <h3 className="text-lg lg:text-xl font-serif text-deep-brown mb-4">Mine specialer:</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm lg:text-base">
                    <div className="flex items-center gap-3">
                      <span className="text-warm-brown">💪</span>
                      <span>Styrketræning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-warm-brown">🤸</span>
                      <span>Funktionel Movement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-warm-brown">✨</span>
                      <span>Pilates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-warm-brown">🥗</span>
                      <span>Ernæring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-warm-brown">🧘</span>
                      <span>Mindfulness</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-warm-brown">🏃</span>
                      <span>Løb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sophie's Certifications */}
      <section className="py-24 lg:py-32 bg-warm-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Certificeringer & Baggrund
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Solid <em className="text-warm-brown">faglig ballast</em>
            </h2>
            <p className="text-lg lg:text-xl text-deep-brown/70 leading-relaxed font-light max-w-4xl mx-auto animate-on-scroll">
              Jeg bygger min træning på både erfaring og en solid faglig ballast. 
              Denne kombination giver mig en unik tilgang, hvor klassisk træning, funktionel fitness 
              og holistiske principper smelter sammen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">EREPS-certificeret</h3>
              <p className="text-deep-brown/70 font-light">Personlig træner</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Paul Petersens Idrætsinstitut</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Yoga Instruktør</h3>
              <p className="text-deep-brown/70 font-light">100 timers certificering</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Mindfulness & Balance</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏋️</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Kostvejleder</h3>
              <p className="text-deep-brown/70 font-light">Ernæring & Livsstil</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Holistisk tilgang</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Løbecoach</h3>
              <p className="text-deep-brown/70 font-light">Løbeteknik & Udholdenhed</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Funktionel løbetræning</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⛵</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Yachtskipper</h3>
              <p className="text-deep-brown/70 font-light">3. grad certificering</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Disciplin & Teamwork</p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Balletdanser</h3>
              <p className="text-deep-brown/70 font-light">14 års erfaring</p>
              <p className="text-sm text-deep-brown/50 font-light mt-2">Kropsbevisthed & Teknik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sophie's Current Work */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-warm-brown/5 to-warm-beige/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Hvor finder du Sophie
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Aktiv i <em className="text-warm-brown">København</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center animate-on-scroll">
              <div className="relative mb-8 lg:mb-12">
                <div className="w-full h-64 lg:h-80 rounded-[2rem] overflow-hidden shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner personlig træner Sporting Health Club København"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-12 bg-warm-cream/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                      <Heart className="text-warm-cream" size={24} />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Sporting Health Club</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Personlig træner med fokus på funktionel styrketræning og individuelle programmer 
                tilpasset hver klients behov og mål.
              </p>
            </div>

            <div className="group text-center animate-on-scroll">
              <div className="relative mb-8 lg:mb-12">
                <div className="w-full h-64 lg:h-80 rounded-[2rem] overflow-hidden shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner Barry's Copenhagen holdtræning"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-12 bg-warm-cream/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                      <Target className="text-warm-cream" size={24} />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Barry's Copenhagen</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Holdtræner med energiske og motiverende træningsprogrammer, der kombinerer 
                styrke og kondition i et fællesskab.
              </p>
            </div>

            <div className="group text-center animate-on-scroll">
              <div className="relative mb-8 lg:mb-12">
                <div className="w-full h-64 lg:h-80 rounded-[2rem] overflow-hidden shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner outdoor bootcamp København"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-12 bg-warm-cream/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                      <Zap className="text-warm-cream" size={24} />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Outdoor Bootcamps</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Udendørs bootcamps for private og virksomheder med fokus på team spirit, 
                funktionel træning og bevægelsesglæde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sophie's Services Overview */}
      <section className="py-24 lg:py-32 bg-warm-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-cream/50 to-warm-brown/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Ydelser
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Skræddersyet til <em className="text-warm-brown">dig</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Personal Training */}
            <div className="bg-warm-cream/90 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-deep-brown mb-6">Personlig Træning</h3>
              <p className="text-deep-brown/70 mb-8 leading-relaxed font-light text-lg">
                1:1 træning med fuld fokus på dig og dine mål – styrke, mobilitet, vægttab eller generel sundhed. 
                Jeg tilbyder også small group træning for to personer – f.eks. veninder, venner eller par.
              </p>
              <div className="bg-warm-brown/10 rounded-xl p-4 mb-8">
                <p className="text-warm-brown font-medium text-center">👉 Kontakt for pris</p>
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
            <div className="bg-warm-cream/90 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-deep-brown mb-6">Firma Træning</h3>
              <p className="text-deep-brown/70 mb-8 leading-relaxed font-light text-lg">
                Skræddersyede træningsforløb til virksomheder, der ønsker at styrke sundhed, trivsel og 
                fællesskab på arbejdspladsen. Jeg kan komme ud til jer – uanset om I har udstyr eller ej.
              </p>
              <div className="bg-warm-brown/10 rounded-xl p-4 mb-8">
                <p className="text-warm-brown font-medium text-center">👉 Kontakt for pris</p>
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
            <div className="bg-warm-cream/90 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-deep-brown mb-6">Online Coaching</h3>
              <p className="text-deep-brown/70 mb-8 leading-relaxed font-light text-lg">
                Fleksibel træning med løbende sparring, programmer og check-ins via app. 
                Klienter kan følge deres forløb, stille spørgsmål og få kontinuerlig feedback.
              </p>
              <div className="bg-warm-brown/10 rounded-xl p-4 mb-8">
                <p className="text-warm-brown font-medium text-center">👉 Kontakt for pris</p>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-warm-brown text-warm-cream py-4 lg:py-5 rounded-full hover:bg-deep-brown hover:shadow-warm transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Start i dag
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Hjemme Pilates */}
            <div className="bg-warm-cream/90 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10">
              <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-deep-brown mb-6">Hjemme Pilates Træning</h3>
              <p className="text-deep-brown/70 mb-8 leading-relaxed font-light text-lg">
                Personlig pilatestræning i trygge rammer hjemme hos dig, tilpasset dit niveau og dine mål. 
                Fokus på core styrke, fleksibilitet og kropsbevisthed.
              </p>
              <div className="bg-warm-brown/10 rounded-xl p-4 mb-8">
                <p className="text-warm-brown font-medium text-center">👉 Kontakt for pris</p>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-warm-brown text-warm-cream py-4 lg:py-5 rounded-full hover:bg-deep-brown hover:shadow-warm transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Book pilates
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/ydelser"
              className="group bg-warm-brown text-warm-cream px-10 py-5 rounded-full hover:bg-deep-brown hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-4 transform hover:scale-105 mx-auto w-fit"
            >
              Se alle ydelser
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 lg:py-32 bg-warm-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Følg Sophie
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Sophie på <em className="text-warm-brown">Instagram</em>
            </h2>
            <p className="text-lg lg:text-xl text-deep-brown/70 leading-relaxed font-light max-w-4xl mx-auto animate-on-scroll">
              Få daglig inspiration, træningsvideos og tips til styrketræning, pilates og ernæring. 
              Følg Sophie's rejse og bliv en del af fællesskabet.
            </p>
          </div>

          {/* Instagram Feed Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {/* Instagram Post 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll aspect-square">
              <img
                src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Sophie Wagner Instagram - Styrketræning tips"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-warm-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram className="text-warm-cream" size={16} />
              </div>
            </div>

            {/* Instagram Post 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll aspect-square">
              <img
                src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Sophie Wagner Instagram - Funktionel movement"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-warm-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram className="text-warm-cream" size={16} />
              </div>
            </div>

            {/* Instagram Post 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll aspect-square">
              <img
                src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Sophie Wagner Instagram - Pilates og balance"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-warm-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram className="text-warm-cream" size={16} />
              </div>
            </div>

            {/* Instagram Post 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll aspect-square">
              <img
                src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Sophie Wagner Instagram - Ernæring og livsstil"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-warm-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram className="text-warm-cream" size={16} />
              </div>
            </div>

            {/* Instagram Post 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll aspect-square">
              <img
                src="https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Sophie Wagner Instagram - Bootcamp træning"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-warm-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram className="text-warm-cream" size={16} />
              </div>
            </div>

            {/* Instagram Post 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll aspect-square">
              <img
                src="https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Sophie Wagner Instagram - Mindfulness og balance"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-warm-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram className="text-warm-cream" size={16} />
              </div>
            </div>
          </div>

          {/* Instagram CTA */}
          <div className="text-center">
            <a
              href="https://instagram.com/sophiewagner_fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full hover:from-pink-600 hover:to-purple-700 hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-4 transform hover:scale-105 mx-auto w-fit"
            >
              <Instagram size={20} />
              Følg @sophiewagner_fitness
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - FIXED TEXT READABILITY */}
      <section className="py-24 lg:py-32 bg-deep-brown text-warm-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-brown via-deep-brown/95 to-warm-brown/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate-on-scroll">
            <span className="inline-block px-6 py-3 bg-warm-brown/40 text-white font-medium tracking-[0.3em] text-xs uppercase rounded-full mb-12 border border-warm-brown/30">
              Klar til at starte?
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light mb-8 lg:mb-12 leading-tight text-warm-cream">
              Start din <em className="text-warm-brown">transformation</em><br />
              med Sophie
            </h2>
            
            <p className="text-lg lg:text-xl text-warm-cream/80 leading-relaxed font-light max-w-4xl mx-auto mb-12 lg:mb-16">
              Book en uforpligtende samtale med Sophie Wagner og oplev forskellen ved 
              professionel træning, der styrker dig indefra og ud.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center justify-center">
              <Link
                to="/kontakt"
                className="group bg-warm-brown text-warm-cream px-10 lg:px-12 py-4 lg:py-5 rounded-full hover:bg-warm-brown/90 hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase flex items-center gap-4 transform hover:scale-105"
              >
                Book uforpligtende samtale
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

export default Home;