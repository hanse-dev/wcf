import React from 'react';
import {  MapPin, Phone, Target, Zap, Activity, ChevronRight, Play } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const ConceptUrban: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-display overflow-x-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vh] bg-blue-600 blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vh] bg-purple-600 blur-[150px] opacity-20 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-3xl font-bold italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            WC/LÜBECK
          </div>
          <div className="hidden md:flex items-center gap-8 font-sans">
             {NAV_ITEMS.map((item) => (
               <a key={item.label} href={item.href} className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors">
                 {item.label}
               </a>
             ))}
             <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
               FREE TRIAL
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
              Modern Self Defense System
            </div>
            <h1 className="text-6xl md:text-8xl font-bold uppercase italic leading-none mb-6">
              Don't Just <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Survive.</span> <br/>
              Dominate.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-sans mb-8 max-w-md">
              High-intensity Wing Chun training in Lübeck. Real world application. No fluff. Pure efficiency.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold uppercase hover:bg-gray-200 transition-colors flex items-center gap-2">
                Start Training <ChevronRight />
              </button>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 scale-105 blur-sm opacity-50"></div>
             <img 
               src="https://picsum.photos/seed/fighter/800/800" 
               alt="Action" 
               className="relative z-10 rounded-2xl w-full shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 object-cover aspect-square"
             />
             <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-white/10 shadow-xl z-20 flex items-center gap-4">
                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                  <Activity size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-sans">Classes Today</div>
                  <div className="font-bold text-xl">18:00 - Sparring</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats/Ticker */}
      <div className="bg-blue-600 overflow-hidden py-4 rotate-1 scale-105 shadow-xl">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-xl font-bold italic uppercase text-white/90">
           <span>⚡ Speed & Power</span>
           <span>🛡️ Real Defense</span>
           <span>🥋 Wing Chun Lübeck</span>
           <span>👊 Close Quarters</span>
           <span>⚡ Speed & Power</span>
           <span>🛡️ Real Defense</span>
           <span>🥋 Wing Chun Lübeck</span>
           <span>👊 Close Quarters</span>
        </div>
      </div>

      {/* Cards Section */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="training">
        <h2 className="text-4xl font-bold mb-12 uppercase italic">Programs <span className="text-blue-500">.</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Street Defense", icon: Target, color: "from-red-500 to-orange-500" },
            { title: "Reflex Training", icon: Zap, color: "from-blue-500 to-cyan-500" },
            { title: "Conditioning", icon: Activity, color: "from-purple-500 to-pink-500" },
          ].map((item, i) => (
            <div key={i} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-slate-800 transition-colors group-hover:bg-slate-700"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase mb-2 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                  <p className="font-sans text-slate-400 text-sm">Train designed to push your limits.</p>
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <div className="bg-white text-black p-2 rounded-full">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Video/Media Placeholder */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
           <img src="https://picsum.photos/seed/action/1600/900" className="w-full aspect-video object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Video thumb"/>
           <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-full group-hover:scale-110 transition-transform">
                <Play fill="white" className="text-white w-12 h-12 ml-2" />
              </button>
           </div>
           <div className="absolute bottom-8 left-8">
             <h3 className="text-3xl font-bold italic">SEE US IN ACTION</h3>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900 pt-20 pb-10" id="contact">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-2xl font-bold italic text-white">WC/LÜBECK</div>
           <div className="flex gap-8 font-sans text-slate-400 text-sm">
             <span className="flex items-center gap-2"><MapPin size={16}/> Lübeck, DE</span>
             <span className="flex items-center gap-2"><Phone size={16}/> 0451-123456</span>
           </div>
           <div className="text-slate-600 text-xs font-sans">
             CONCEPT 3: URBAN DYNAMIC
           </div>
        </div>
      </footer>
    </div>
  );
};