import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      alt: "Sophie Wagner morgen meditation",
      category: "Mindfulness"
    },
    {
      src: "https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      alt: "Sophie Wagner styrketræning",
      category: "Styrketræning"
    },
    {
      src: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      alt: "Sophie Wagner yoga session",
      category: "Yoga"
    },
    {
      src: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      alt: "Sophie Wagner outdoor træning",
      category: "Outdoor"
    },
    {
      src: "https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      alt: "Sophie Wagner personlig coaching",
      category: "Coaching"
    },
    {
      src: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      alt: "Sophie Wagner funktionel træning",
      category: "Funktionel"
    },
    {
      src: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Sophie Wagner balance træning",
      category: "Balance"
    },
    {
      src: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Sophie Wagner cardio session",
      category: "Cardio"
    },
    {
      src: "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Sophie Wagner stretching",
      category: "Mobilitet"
    },
    {
      src: "https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Sophie Wagner group training",
      category: "Gruppe"
    },
    {
      src: "https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Sophie Wagner wellness coaching",
      category: "Wellness"
    },
    {
      src: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Sophie Wagner meditation guide",
      category: "Meditation"
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
              Galleri
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight">
              Sophie's <em className="text-warm-brown">verden</em>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-deep-brown/70 leading-relaxed font-light max-w-4xl mx-auto">
              Tag et kig bag kulisserne og se Sophie i aktion. Fra intensive træningssessioner 
              til rolige mindfulness øjeblikke - her får du et indblik i hendes tilgang til wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 lg:py-40 bg-warm-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-cream/50 to-warm-brown/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-warm-brown/80 text-warm-cream text-xs font-light rounded-full uppercase tracking-[0.1em]">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sophie's Training Philosophy */}
      <section className="py-32 lg:py-40 bg-warm-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12">
                Filosofi
              </span>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight">
                Træning som <em className="text-warm-brown">livsstil</em>
              </h2>
              
              <div className="space-y-6 lg:space-y-8 text-lg lg:text-xl text-deep-brown/70 leading-relaxed font-light">
                <p>
                  For mig handler træning ikke kun om at løfte tunge vægte eller løbe hurtigst muligt. 
                  Det handler om at skabe en bæredygtig livsstil, der giver dig energi og glæde.
                </p>
                <p>
                  Hver session er designet til at styrke både din krop og dit sind. Vi arbejder med 
                  funktionelle bevægelser, der hjælper dig i hverdagen, og vi inkluderer altid 
                  elementer af mindfulness og stresshåndtering.
                </p>
                <p>
                  Mit mål er at hjælpe dig med at finde en form for træning, som du elsker, 
                  og som bliver en naturlig del af dit liv - ikke en byrde.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="relative group">
                <div className="absolute -inset-6 lg:-inset-8 bg-gradient-to-br from-warm-brown/10 to-warm-brown/5 rounded-[2rem] transform rotate-2 group-hover:rotate-1 transition-transform duration-700"></div>
                <div className="absolute -inset-3 lg:-inset-4 bg-warm-brown/5 rounded-[2rem] transform -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner i dyb meditation"
                    className="w-full h-[500px] lg:h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-warm-brown/5 to-warm-beige/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 sm:px-6 py-2 bg-warm-brown/10 text-warm-brown font-light tracking-[0.3em] text-xs uppercase rounded-full mb-8 lg:mb-12 animate-on-scroll">
              Specialer
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-deep-brown mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Mine <em className="text-warm-brown">specialområder</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Styrketræning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Styrketræning</h3>
              <p className="text-deep-brown/70 font-light text-sm leading-relaxed">
                Byg muskler og styrke med funktionelle øvelser, der gør dig stærkere i hverdagen.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Yoga & Mindfulness"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Yoga & Mindfulness</h3>
              <p className="text-deep-brown/70 font-light text-sm leading-relaxed">
                Find indre ro og balance gennem yoga, meditation og mindfulness praksis.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Funktionel træning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Funktionel Træning</h3>
              <p className="text-deep-brown/70 font-light text-sm leading-relaxed">
                Træning der efterligner hverdagsbevægelser og forbedrer din funktionalitet.
              </p>
            </div>

            <div className="bg-warm-cream/80 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-warm-brown/10 text-center">
              <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Personlig coaching"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-deep-brown mb-4">Personlig Coaching</h3>
              <p className="text-deep-brown/70 font-light text-sm leading-relaxed">
                1:1 coaching der fokuserer på dine specifikke mål og udfordringer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-deep-brown/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-warm-cream/20 hover:bg-warm-cream/30 rounded-full flex items-center justify-center transition-all duration-300 z-10"
            >
              <X className="text-warm-cream" size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Sophie Wagner galleri billede"
              className="w-full h-full object-contain rounded-2xl shadow-warm-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;