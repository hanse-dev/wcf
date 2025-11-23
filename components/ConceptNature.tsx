import React from 'react';
import { Leaf, Wind, Droplets, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const ConceptNature: React.FC = () => {
  return (
    <div className="min-h-screen bg-nature-light text-nature-green font-sans">
      {/* Soft Nav */}
      <nav className="fixed w-full z-40 bg-nature-light/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="font-nature text-2xl font-semibold tracking-wide flex items-center gap-2">
            <Leaf className="text-[#8FB397]" size={24} />
            Wing Chun Lübeck
          </div>
          <div className="hidden md:flex gap-10">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-nature-green/70 hover:text-nature-green text-sm transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <button className="bg-[#8FB397] text-white px-6 py-2 rounded-full font-nature italic hover:bg-[#7A9E7E] transition-colors">
            Book Class
          </button>
        </div>
      </nav>

      {/* Organic Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Abstract organic shapes in background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E1E8E2] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4DFD6] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 opacity-60 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <span className="font-nature italic text-xl text-[#8FB397]">The art of natural movement</span>
            <h1 className="font-nature text-6xl md:text-7xl leading-[1.1] text-nature-green">
              Restore Your <br/>
              Natural <span className="italic relative inline-block">
                Power
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#8FB397]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-nature-green/70 leading-relaxed max-w-md">
              Wing Chun is more than fighting. It is structural harmony, mindful movement, and the effortless redirection of force.
            </p>
            <div className="flex gap-4 pt-4">
               <button className="bg-nature-green text-white px-8 py-4 rounded-tl-3xl rounded-br-3xl hover:rounded-xl transition-all duration-300 shadow-lg shadow-nature-green/10 flex items-center gap-3">
                 Start Journey <ArrowRight size={18} />
               </button>
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://picsum.photos/seed/yoga/800/1000" 
               alt="Mindful movement" 
               className="rounded-[3rem] object-cover h-[600px] w-full shadow-2xl shadow-[#8FB397]/20"
             />
             <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="font-nature italic text-lg mb-2">"Structure over strength."</p>
                <div className="flex items-center gap-2 text-sm text-nature-green/60">
                   <div className="w-8 h-8 rounded-full bg-[#E1E8E2] flex items-center justify-center">
                     <Wind size={14} />
                   </div>
                   <span>Internal & External Balance</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-24 bg-white" id="training">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-nature text-4xl mb-4">Cultivate Your Skill</h2>
            <div className="w-16 h-1 bg-[#E1E8E2] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: "Fluidity", text: "Learn to flow around obstacles rather than crashing into them." },
              { icon: Leaf, title: "Growth", text: "A progressive system that grows with your physical capabilities." },
              { icon: Wind, title: "Breath", text: "Integrate breathing with movement for explosive, relaxed power." }
            ].map((item, i) => (
              <div key={i} className="bg-nature-light p-10 rounded-[2rem] hover:bg-[#EAF0EB] transition-colors group cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-[#8FB397] group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="font-nature text-2xl mb-4">{item.title}</h3>
                <p className="text-nature-green/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nature-green text-nature-light py-16" id="contact">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="font-nature text-3xl mb-6 flex items-center gap-2">
              <Leaf /> Wing Chun Lübeck
            </div>
            <p className="max-w-sm opacity-80 leading-relaxed">
              Located in the quiet heart of Lübeck. A space for concentration, health, and effective self-protection.
            </p>
          </div>
          <div className="md:text-right space-y-4">
             <h4 className="font-nature text-xl opacity-90">Visit Us</h4>
             <p className="opacity-70">Holstenstraße 15, Lübeck</p>
             <p className="opacity-70">hello@wingchun-luebeck.de</p>
             <div className="pt-8 text-xs opacity-40 uppercase tracking-widest">
               Concept 4: Nature & Balance
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};