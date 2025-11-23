import React from 'react';
import {  Play, ChevronDown, Award, Users, Shield } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const ConceptCinematic: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Immersive Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="text-xl font-serif font-bold tracking-widest text-amber-500">
            LÜBECK<span className="text-white mx-2">|</span>WING CHUN
          </div>
          <div className="hidden md:flex gap-12">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-amber-500 transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Cinematic Hero */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/martialarts2/1920/1080" 
            className="w-full h-full object-cover animate-[pulse_10s_ease-in-out_infinite] scale-105" // Simulating slow breathe
            alt="Cinematic Background" 
          />
          <div className="absolute inset-0 bg-slate-950/70 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl space-y-8 animate-[fadeIn_1s_ease-out]">
          <span className="text-amber-500 font-serif italic text-xl md:text-2xl tracking-wide">The Legacy Continues</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-none drop-shadow-2xl">
            MASTER <br/> YOURSELF
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Step into the shadows of the dojo. Discover a timeless discipline that shapes the body and sharpens the mind.
          </p>
          
          <div className="pt-8 flex items-center justify-center gap-6">
            <button className="px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-500 transition-colors">
              Start Your Story
            </button>
            <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-amber-500 transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-amber-500">
                <Play size={12} fill="currentColor" />
              </div>
              Watch Film
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown className="text-white" size={32} />
        </div>
      </header>

      {/* Narrative Section */}
      <section className="py-32 px-6 bg-slate-950" id="about">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
             <div className="w-12 h-[1px] bg-amber-500"></div>
             <h2 className="text-4xl md:text-5xl font-serif text-white">More Than <br/> <span className="text-slate-600">A Fight.</span></h2>
             <p className="text-slate-400 leading-8 font-light">
               In a world of noise, we teach silence. In a world of chaos, we teach structure. Wing Chun is an ancient system developed for efficiency, 
               allowing a smaller practitioner to overcome a larger opponent through physics and sensitivity.
             </p>
             <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                   <span className="block text-3xl font-serif text-white mb-2">300+</span>
                   <span className="text-xs uppercase tracking-widest text-amber-500">Students</span>
                </div>
                <div>
                   <span className="block text-3xl font-serif text-white mb-2">25</span>
                   <span className="text-xs uppercase tracking-widest text-amber-500">Years Exp.</span>
                </div>
             </div>
           </div>
           <div className="relative">
             <div className="absolute -inset-4 border border-amber-500/20 rounded-sm"></div>
             <img src="https://picsum.photos/seed/training2/600/800" className="w-full h-auto grayscale opacity-80 hover:opacity-100 transition-opacity duration-700" alt="Training" />
           </div>
        </div>
      </section>

      {/* Feature Cards (Cinematic) */}
      <section className="py-20 bg-slate-900 border-t border-slate-800" id="training">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
             {[
               { icon: Shield, title: "Defense", desc: "Impenetrable structure." },
               { icon: Award, title: "Mastery", desc: "A lifetime of growth." },
               { icon: Users, title: "Honor", desc: "Respect for the lineage." }
             ].map((f, i) => (
               <div key={i} className="group bg-slate-950 p-12 border border-slate-800 hover:border-amber-500/50 transition-colors relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity text-amber-500">
                   <f.icon size={64} />
                 </div>
                 <h3 className="text-xl font-serif text-white mb-4 relative z-10">{f.title}</h3>
                 <p className="text-slate-500 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                   {f.desc}
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-slate-900" id="contact">
        <div className="max-w-4xl mx-auto text-center px-6">
           <h2 className="text-3xl font-serif text-white mb-8">Begin Your Transformation</h2>
           <p className="text-slate-500 mb-12 max-w-lg mx-auto">
             The journey of a thousand miles begins with a single step. Join us in Lübeck.
           </p>
           <button className="px-10 py-4 border border-slate-700 text-slate-300 text-xs uppercase tracking-[0.3em] hover:border-amber-500 hover:text-amber-500 transition-all">
             Contact The School
           </button>
           <div className="mt-20 text-xs text-slate-700 uppercase tracking-widest">
             Concept 6: Cinematic
           </div>
        </div>
      </footer>

    </div>
  );
};