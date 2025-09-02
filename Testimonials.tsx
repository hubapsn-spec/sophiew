import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, User, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Anne Larsen",
      age: "34 år",
      profession: "Arkitekt",
      rating: 5,
      text: "Sophie har helt ændret min tilgang til træning. Hun lytter virkelig og tilpasser træningen til præcis det, jeg har brug for. Jeg føler mig stærkere og mere energisk end nogensinde før. Hendes holistiske tilgang har hjulpet mig med at finde balance i både krop og sind.",
      result: "Tabte 12 kg og fandt indre styrke",
      image: "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Louise Nielsen",
      age: "41 år",
      profession: "Projektleder",
      rating: 5,
      text: "Som travl mor var det svært at finde tid til træning. Sophie's online coaching har givet mig fleksibiliteten til at træne, når det passer mig. Resultatet taler for sig selv. Hun er altid tilgængelig med støtte og motivation, selv når jeg har svære dage.",
      result: "Øgede energi og bedre søvn",
      image: "https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Thomas Andersen",
      age: "28 år",
      profession: "Softwareudvikler",
      rating: 5,
      text: "Jeg var helt nybegynder, men Sophie fik mig til at føle mig tryg og velkommen. Hun er så professionel og motiverende. Kan ikke anbefale hende nok! Hendes tålmodighed og ekspertise har gjort træning til noget, jeg ser frem til.",
      result: "Byggede muskler og selvtillid",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Maria Sørensen",
      age: "45 år",
      profession: "Læge",
      rating: 5,
      text: "Efter en stressfuld periode havde jeg brug for at komme tilbage til mig selv. Sophie's mindfulness-baserede træning var præcis det, jeg havde brug for. Hun forstår virkelig sammenhængen mellem fysisk og mental sundhed.",
      result: "Reducerede stress og øgede velvære",
      image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Peter Hansen",
      age: "52 år",
      profession: "Direktør",
      rating: 5,
      text: "Sophie's firma træning har transformeret vores arbejdsplads. Medarbejderne er mere energiske, og sygefraværet er faldet markant. Hun forstår virkelig, hvordan man integrerer sundhed i en travl hverdag.",
      result: "Forbedret arbejdsglæde og produktivitet",
      image: "https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Camilla Johansen",
      age: "29 år",
      profession: "Marketing Manager",
      rating: 5,
      text: "Jeg havde prøvet mange personlige trænere før, men ingen som Sophie. Hun ser hele mennesket og skaber programmer, der passer til mit liv. Hendes positive energi er smittende, og jeg glæder mig altid til vores sessioner.",
      result: "Fandt glæden ved træning igen",
      image: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-cream via-warm-beige/30 to-warm-brown/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12">
              Anmeldelser
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight">
              Hvad mine klienter <em className="text-warm-brown">siger</em>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-deep-brown/70 leading-relaxed font-light max-w-4xl mx-auto">
              Læs om de transformationer og resultater, som mine klienter har opnået. 
              Deres historier er min største inspiration og motivation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-32 lg:py-40 bg-warm-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-cream/50 to-warm-brown/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
            {/* Featured Testimonial 1 */}
            <div className="bg-warm-cream/90 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 relative">
              <div className="absolute top-6 right-6 w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center">
                <Quote className="text-warm-brown" size={20} />
              </div>
              <div className="flex mb-8 lg:mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-warm-brown fill-current" size={20} />
                ))}
              </div>
              <p className="text-lg lg:text-xl text-deep-brown/80 mb-8 lg:mb-10 leading-relaxed font-light italic">
                "{testimonials[0].text}"
              </p>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 lg:w-16 h-14 lg:h-16 rounded-full overflow-hidden">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-light text-deep-brown text-lg">{testimonials[0].name}</div>
                  <div className="text-sm text-deep-brown/60 tracking-wide">{testimonials[0].age}, {testimonials[0].profession}</div>
                </div>
              </div>
              <div className="bg-warm-brown/10 rounded-xl p-4">
                <p className="text-warm-brown font-light text-sm">✨ {testimonials[0].result}</p>
              </div>
            </div>

            {/* Featured Testimonial 2 */}
            <div className="bg-warm-cream/90 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 relative">
              <div className="absolute top-6 right-6 w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center">
                <Quote className="text-warm-brown" size={20} />
              </div>
              <div className="flex mb-8 lg:mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-warm-brown fill-current" size={20} />
                ))}
              </div>
              <p className="text-lg lg:text-xl text-deep-brown/80 mb-8 lg:mb-10 leading-relaxed font-light italic">
                "{testimonials[1].text}"
              </p>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 lg:w-16 h-14 lg:h-16 rounded-full overflow-hidden">
                  <img
                    src={testimonials[1].image}
                    alt={testimonials[1].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-light text-deep-brown text-lg">{testimonials[1].name}</div>
                  <div className="text-sm text-deep-brown/60 tracking-wide">{testimonials[1].age}, {testimonials[1].profession}</div>
                </div>
              </div>
              <div className="bg-warm-brown/10 rounded-xl p-4">
                <p className="text-warm-brown font-light text-sm">✨ {testimonials[1].result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-32 lg:py-40 bg-warm-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Alle anmeldelser
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Mere end 350 <em className="text-warm-brown">succeshistorier</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.slice(2).map((testimonial, index) => (
              <div
                key={index}
                className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-warm-brown fill-current" size={18} />
                  ))}
                </div>
                <p className="text-deep-brown/80 mb-8 leading-relaxed font-light italic text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-light text-deep-brown">{testimonial.name}</div>
                    <div className="text-sm text-deep-brown/60">{testimonial.age}, {testimonial.profession}</div>
                  </div>
                </div>
                <div className="bg-warm-brown/10 rounded-xl p-3">
                  <p className="text-warm-brown font-light text-sm">✨ {testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-brown/5 to-warm-beige/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Resultater
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Sophie's <em className="text-warm-brown">track record</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center group animate-on-scroll">
              <div className="w-20 h-20 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-brown/20 group-hover:scale-110 transition-all duration-500">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-4xl lg:text-5xl font-serif text-warm-brown mb-3 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
              <div className="text-sm text-deep-brown/60 font-light tracking-[0.1em] uppercase">Gennemsnitlig rating</div>
            </div>
            
            <div className="text-center group animate-on-scroll">
              <div className="w-20 h-20 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-brown/20 group-hover:scale-110 transition-all duration-500">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="text-4xl lg:text-5xl font-serif text-warm-brown mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm text-deep-brown/60 font-light tracking-[0.1em] uppercase">Måleopnåelse</div>
            </div>
            
            <div className="text-center group animate-on-scroll">
              <div className="w-20 h-20 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-brown/20 group-hover:scale-110 transition-all duration-500">
                <span className="text-2xl">💪</span>
              </div>
              <div className="text-4xl lg:text-5xl font-serif text-warm-brown mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-sm text-deep-brown/60 font-light tracking-[0.1em] uppercase">Fortsætter træning</div>
            </div>
            
            <div className="text-center group animate-on-scroll">
              <div className="w-20 h-20 bg-warm-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-brown/20 group-hover:scale-110 transition-all duration-500">
                <span className="text-2xl">❤️</span>
              </div>
              <div className="text-4xl lg:text-5xl font-serif text-warm-brown mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm text-deep-brown/60 font-light tracking-[0.1em] uppercase">Vil anbefale</div>
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
              Bliv den næste
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light mb-8 lg:mb-12 leading-tight">
              Klar til din <em className="text-warm-brown">transformation?</em>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-warm-cream/70 leading-relaxed font-light max-w-4xl mx-auto mb-12 lg:mb-16">
              Bliv en del af Sophie's succeshistorier. Book en gratis konsultation 
              og tag det første skridt mod dit bedste selv.
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

export default Testimonials;