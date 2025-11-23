import React from 'react';
import {  MapPin, Phone, Flower2, Scroll, Wind } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const ConceptTraditional: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-100 font-serif text-stone-800">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]"></div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-6 bg-stone-900 text-brand-gold shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="text-xs uppercase tracking-[0.3em] mb-2 text-stone-400">Est. 1998</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-6">Wing Chun Lübeck</h1>
          <nav>
            <ul className="flex flex-wrap justify-center gap-8 md:gap-12">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-stone-300 hover:text-brand-gold text-sm uppercase tracking-widest transition-colors pb-1 border-b border-transparent hover:border-brand-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero with Parallax Feel */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/kungfu/1920/1080" 
          alt="Dojo" 
          className="absolute inset-0 w-full h-full object-cover filter sepia brightness-50"
        />
        <div className="relative z-10 text-center text-stone-100 p-8 border-y-2 border-brand-gold bg-black/30 backdrop-blur-sm max-w-3xl">
          <h2 className="text-3xl md:text-5xl italic mb-4 font-light">"Be like water, my friend."</h2>
          <p className="text-lg md:text-xl font-sans font-light tracking-wide text-stone-300">
            Discover the ancient art of flow and precision in Lübeck's premier traditional school.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-stone-900 transition-colors uppercase tracking-widest text-sm">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Flower2 className="w-12 h-12 text-stone-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-stone-900 mb-4">The Philosophy</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="prose prose-stone lg:prose-lg font-light leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-gold first-letter:mr-3 float-left">
              W
            </p>
            <p>
              ing Chun is not merely a method of fighting; it is a vehicle for personal growth. 
              Originating from the Shaolin temple, this art emphasizes strict economy of movement.
            </p>
            <p>
              In our Lübeck kwoon (school), we adhere to the traditional lineage, focusing on the forms 
              (Siu Nim Tao, Chum Kiu, Biu Jee) to build structure, and Chi Sao (sticky hands) to develop sensitivity.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 border-2 border-stone-300 transform translate-x-4 translate-y-4 z-0"></div>
             <img src="https://picsum.photos/seed/meditation/600/800" alt="Meditation" className="relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* Classes Tiles */}
      <section className="bg-stone-200 py-24 relative z-10" id="training">
        <div className="max-w-6xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Foundations", sub: "Siu Nim Tao", icon: Scroll, text: "For beginners. Learn the structure, the stance, and the centerline theory." },
               { title: "Sensitivity", sub: "Chi Sao", icon: Wind, text: "The soul of Wing Chun. Learn to feel your opponent's intent before they move." },
               { title: "Application", sub: "Wooden Dummy", icon: Flower2, text: "Advanced training for conditioning, angles, and fluid power generation." }
             ].map((c, i) => (
               <div key={i} className="bg-stone-100 p-8 shadow-md border-t-4 border-brand-gold hover:-translate-y-2 transition-transform">
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <h3 className="text-xl font-bold text-stone-900">{c.title}</h3>
                     <span className="text-xs uppercase tracking-widest text-brand-gold">{c.sub}</span>
                   </div>
                   <c.icon className="text-stone-300" />
                 </div>
                 <p className="text-stone-600 font-sans leading-relaxed text-sm">{c.text}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-brand-gold" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl text-stone-100 font-serif mb-8">Visit the Kwoon</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12 font-sans font-light">
             <div className="flex items-center gap-3 justify-center">
               <MapPin className="text-brand-gold" size={20} />
               <span>Altstadt Lübeck, Germany</span>
             </div>
             <div className="flex items-center gap-3 justify-center">
               <Phone className="text-brand-gold" size={20} />
               <span>+49 451 9876543</span>
             </div>
          </div>
          <div className="text-xs tracking-widest uppercase opacity-50">
            Concept 2: Heritage & Tradition
          </div>
        </div>
      </footer>
    </div>
  );
};