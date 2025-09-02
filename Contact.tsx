import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-cream via-warm-beige/30 to-warm-brown/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 lg:w-96 h-64 lg:h-96 bg-warm-brown/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12">
              Kontakt
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight">
              Lad os <em className="text-warm-brown">starte</em><br />
              din rejse
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-deep-brown/70 leading-relaxed font-light max-w-4xl mx-auto">
              Book en gratis konsultation og lad os snakke om dine mål, udfordringer 
              og hvordan jeg kan hjælpe dig med at skabe den forandring, du ønsker.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 lg:py-40 bg-warm-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-cream/50 to-warm-brown/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-warm-cream/90 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 shadow-warm border border-warm-brown/10">
                <h2 className="text-3xl lg:text-4xl font-serif font-light text-deep-brown mb-8 lg:mb-12">
                  Book din gratis konsultation
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-serif text-deep-brown mb-4">Tak for din besked!</h3>
                    <p className="text-deep-brown/70 font-light">
                      Jeg vender tilbage til dig inden for 24 timer.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-light text-deep-brown/70 mb-3 tracking-wide uppercase">
                          Fulde navn *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-warm-beige/50 border border-warm-brown/20 rounded-2xl focus:outline-none focus:border-warm-brown focus:bg-warm-cream transition-all duration-300 font-light"
                          placeholder="Dit fulde navn"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-light text-deep-brown/70 mb-3 tracking-wide uppercase">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-warm-beige/50 border border-warm-brown/20 rounded-2xl focus:outline-none focus:border-warm-brown focus:bg-warm-cream transition-all duration-300 font-light"
                          placeholder="Dit telefonnummer"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-light text-deep-brown/70 mb-3 tracking-wide uppercase">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-warm-beige/50 border border-warm-brown/20 rounded-2xl focus:outline-none focus:border-warm-brown focus:bg-warm-cream transition-all duration-300 font-light"
                        placeholder="din@email.dk"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-light text-deep-brown/70 mb-3 tracking-wide uppercase">
                        Interesseret i
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-warm-beige/50 border border-warm-brown/20 rounded-2xl focus:outline-none focus:border-warm-brown focus:bg-warm-cream transition-all duration-300 font-light"
                      >
                        <option value="">Vælg en ydelse</option>
                        <option value="personal-training">Personlig Træning</option>
                        <option value="online-coaching">Online Coaching</option>
                        <option value="corporate-training">Firma Træning</option>
                        <option value="consultation">Gratis Konsultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-light text-deep-brown/70 mb-3 tracking-wide uppercase">
                        Besked
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-6 py-4 bg-warm-beige/50 border border-warm-brown/20 rounded-2xl focus:outline-none focus:border-warm-brown focus:bg-warm-cream transition-all duration-300 font-light resize-none"
                        placeholder="Fortæl mig om dine mål og hvad du gerne vil opnå..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-warm-brown text-warm-cream py-4 lg:py-5 rounded-full hover:bg-deep-brown hover:shadow-warm-xl transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                      Send besked
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & Sophie Image */}
            <div className="animate-on-scroll space-y-8 lg:space-y-12">
              {/* Sophie's Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-warm-brown/5 rounded-[2rem] blur-xl"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Sophie Wagner klar til at hjælpe dig"
                    className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-6 lg:p-8 border border-warm-brown/10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-warm-brown/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-warm-brown" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-light text-deep-brown mb-2">Email</h3>
                      <p className="text-deep-brown/70 font-light">sophie@wagnertraining.dk</p>
                      <p className="text-sm text-deep-brown/50 font-light mt-1">Jeg svarer inden for 24 timer</p>
                    </div>
                  </div>
                </div>

                <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-6 lg:p-8 border border-warm-brown/10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-warm-brown/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-warm-brown" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-light text-deep-brown mb-2">Telefon</h3>
                      <p className="text-deep-brown/70 font-light">+45 23 45 67 89</p>
                      <p className="text-sm text-deep-brown/50 font-light mt-1">Hverdage 9-17, weekend efter aftale</p>
                    </div>
                  </div>
                </div>

                <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-6 lg:p-8 border border-warm-brown/10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-warm-brown/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-warm-brown" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-light text-deep-brown mb-2">Lokation</h3>
                      <p className="text-deep-brown/70 font-light">København & omegn</p>
                      <p className="text-sm text-deep-brown/50 font-light mt-1">Hjemme, udendørs eller i mit studio</p>
                    </div>
                  </div>
                </div>

                <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-6 lg:p-8 border border-warm-brown/10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-warm-brown/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-warm-brown" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-light text-deep-brown mb-2">Åbningstider</h3>
                      <div className="text-deep-brown/70 font-light space-y-1">
                        <p>Mandag - Fredag: 6:00 - 20:00</p>
                        <p>Lørdag: 8:00 - 16:00</p>
                        <p>Søndag: Efter aftale</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Hvad sker der ved den gratis konsultation?</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Vi mødes i 45-60 minutter, hvor vi gennemgår dine mål, sundhedsstatus og livsstil. 
                Jeg laver en kort fysisk vurdering og forklarer, hvordan jeg kan hjælpe dig. 
                Der er ingen forpligtelser - det er en chance for os begge at se, om vi passer sammen.
              </p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 animate-on-scroll">
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Hvor hurtigt kan jeg starte?</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Typisk kan vi booke din første session inden for en uge efter konsultationen. 
                For online coaching kan du starte samme dag, hvis du er klar til det.
              </p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 animate-on-scroll">
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Skal jeg være i god form for at starte?</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Absolut ikke! Jeg arbejder med mennesker på alle niveauer - fra komplette begyndere 
                til erfarne atleter. Vi starter der, hvor du er, og bygger gradvist op.
              </p>
            </div>

            <div className="bg-warm-beige/50 rounded-[2rem] p-8 lg:p-10 border border-warm-brown/10 animate-on-scroll">
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Hvad skal jeg medbringe til første session?</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Kom i komfortabelt træningstøj og medbringe en vandflaske. Hvis vi træner udendørs, 
                sørger jeg for alt udstyr. Til indendørs træning afhænger det af lokationen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-brown/5 to-warm-beige/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Hvor træner vi?
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Fleksible <em className="text-warm-brown">lokationer</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Outdoor træning i København"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Udendørs Træning</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Parker, strande og grønne områder rundt om i København. 
                Frisk luft og naturens energi gør træningen endnu bedre.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Hjemme træning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Hjemme Hos Dig</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Træn i trygge omgivelser hjemme i din stue eller have. 
                Jeg medbringer alt nødvendigt udstyr.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Sophie's private studio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Mit Private Studio</h3>
              <p className="text-deep-brown/70 font-light leading-relaxed">
                Et roligt og inspirerende rum designet til optimal træning 
                og mindfulness praksis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;