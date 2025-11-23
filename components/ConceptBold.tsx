import React from 'react';
import {  ArrowUpRight, Star, Hexagon } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const ConceptBold: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Heavy Border Nav */}
      <nav className="border-b-4 border-black sticky top-0 bg-white z-50">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="text-3xl font-display font-bold uppercase tracking-tighter">
            WC<span className="text-bold-orange">/</span>HL
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="font-bold uppercase tracking-wide hover:underline decoration-4 underline-offset-4 decoration-bold-orange">
                {item.label}
              </a>
            ))}
          </div>
          <button className="bg-black text-white px-8 py-3 font-bold uppercase hover:bg-bold-orange hover:text-black transition-colors border-2 border-transparent">
            Join Now
          </button>
        </div>
      </nav>

      {/* Grid Hero */}
      <section className="max-w-[1600px] mx-auto border-x-4 border-black min-h-[calc(100vh-5rem)] grid grid-cols-1 lg:grid-cols-12">
        {/* Left Text Area */}
        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-bold-orange/5">
           <h1 className="text-7xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-12">
             NO <br/>
             NON<span className="text-bold-orange">SENSE</span> <br/>
             KUNG FU
           </h1>
           <p className="text-xl md:text-2xl font-bold max-w-xl mb-12 leading-tight">
             Direct. Efficient. Explosive. The premier Wing Chun academy in Northern Germany.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <button className="px-8 py-6 bg-black text-white text-xl font-bold uppercase hover:translate-x-2 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,61,0,1)] transition-all">
               Start Training
             </button>
             <button className="px-8 py-6 border-4 border-black text-black text-xl font-bold uppercase hover:bg-black hover:text-white transition-colors">
               View Schedule
             </button>
           </div>
        </div>

        {/* Right Image Area */}
        <div className="lg:col-span-5 relative overflow-hidden group">
           <img 
             src="https://picsum.photos/seed/boxing/900/1200" 
             className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
             alt="Punch" 
           />
           <div className="absolute inset-0 bg-bold-orange mix-blend-multiply opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>
           <div className="absolute bottom-0 left-0 bg-black text-white p-6 border-t-4 border-r-4 border-black">
             <span className="font-display font-bold text-4xl">100% FOCUS</span>
           </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y-4 border-black bg-bold-orange overflow-hidden py-3">
        <div className="flex gap-16 animate-marquee whitespace-nowrap font-display font-bold text-4xl text-black uppercase">
          <span>Wing Chun Lübeck</span>
          <Star className="inline fill-black" size={32} />
          <span>Self Defense</span>
          <Star className="inline fill-black" size={32} />
          <span>Fitness</span>
          <Star className="inline fill-black" size={32} />
          <span>Discipline</span>
          <Star className="inline fill-black" size={32} />
          <span>Wing Chun Lübeck</span>
          <Star className="inline fill-black" size={32} />
          <span>Self Defense</span>
        </div>
      </div>

      {/* Bento Grid Features */}
      <section className="max-w-[1600px] mx-auto border-x-4 border-b-4 border-black p-4 md:p-8 bg-neutral-100" id="about">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000]">
              <Hexagon size={48} className="mb-6 text-bold-orange" />
              <h3 className="font-display text-4xl font-bold mb-4 uppercase">Structure</h3>
              <p className="font-bold text-gray-500">A strong foundation is key. We build your body mechanics from the ground up to handle any pressure.</p>
            </div>
            <div className="bg-black text-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#FF3D00]">
              <ArrowUpRight size={48} className="mb-6 text-bold-orange" />
              <h3 className="font-display text-4xl font-bold mb-4 uppercase">Directness</h3>
              <p className="font-bold text-gray-400">The shortest distance between two points is a straight line. We don't waste movement.</p>
            </div>
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000] md:col-span-2 lg:col-span-1">
              <Star size={48} className="mb-6 text-bold-orange" />
              <h3 className="font-display text-4xl font-bold mb-4 uppercase">Mindset</h3>
              <p className="font-bold text-gray-500">Train your mind to stay calm under chaos. Emotional control is the ultimate weapon.</p>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-bold-orange py-20" id="contact">
         <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h2 className="font-display text-6xl font-bold uppercase mb-2">Ready?</h2>
              <a href="#" className="text-2xl font-bold text-bold-orange underline decoration-2 underline-offset-4 hover:text-white transition-colors">
                Book your free trial session ->
              </a>
            </div>
            <div className="text-right">
              <div className="font-display font-bold text-3xl uppercase mb-4">Wing Chun Lübeck</div>
              <p className="font-mono text-gray-400">Musterstraße 123, Lübeck</p>
              <p className="font-mono text-gray-400 mt-2">CONCEPT 5: BOLD</p>
            </div>
         </div>
      </footer>
    </div>
  );
};