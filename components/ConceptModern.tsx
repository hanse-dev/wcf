import React from 'react';
import { ArrowRight, CheckCircle, MapPin, Phone, Shield, Zap, Users } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const ConceptModern: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded-sm"></div>
            WING CHUN <span className="font-light text-gray-500">LÜBECK</span>
          </div>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium hover:text-brand-red transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <button className="hidden md:block px-6 py-2 bg-black text-white text-sm font-medium hover:bg-brand-red transition-colors">
            Free Trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gray-100 overflow-hidden">
             <img src="https://picsum.photos/seed/martialarts1/1920/1080" className="w-full h-full object-cover opacity-0 md:opacity-100 grayscale mix-blend-multiply" alt="Wing Chun background" />
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]">
              PURE <br/>
              <span className="text-brand-red">FOCUS.</span> <br/>
              REAL <br/>
              DEFENSE.
            </h1>
            <p className="text-xl text-gray-600 max-w-md border-l-4 border-brand-red pl-6">
              Efficiency over brute strength. Learn the art of Wing Chun in the heart of Lübeck.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-brand-red text-white font-bold hover:bg-red-700 transition-all flex items-center gap-2">
                Start Today <ArrowRight size={20}/>
              </button>
              <button className="px-8 py-4 border border-black font-bold hover:bg-black hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
          {/* Mobile Image replacement */}
          <div className="md:hidden h-64 bg-gray-200 w-full rounded-lg overflow-hidden">
             <img src="https://picsum.photos/seed/martialarts1/800/600" className="w-full h-full object-cover grayscale" alt="Training" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Efficiency", desc: "Maximum impact with minimum effort. Wing Chun is designed for real-world application." },
              { icon: Shield, title: "Self Defense", desc: "Practical techniques to protect yourself and your loved ones in any situation." },
              { icon: Users, title: "Community", desc: "Join a disciplined, supportive group of individuals striving for improvement." }
            ].map((f, i) => (
              <div key={i} className="group p-8 border border-gray-100 hover:border-brand-red transition-all hover:shadow-xl rounded-xl">
                <f.icon className="w-12 h-12 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Schedule Section */}
      <section className="flex flex-col md:flex-row bg-black text-white" id="schedule">
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-r border-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Weekly Schedule</h2>
          <div className="space-y-6">
            <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="font-bold text-lg">Mon & Wed</span>
              <span className="text-gray-400">18:00 - 19:30 (Adults)</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="font-bold text-lg">Tue & Thu</span>
              <span className="text-gray-400">16:30 - 17:30 (Kids)</span>
            </div>
             <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="font-bold text-lg">Friday</span>
              <span className="text-gray-400">19:00 - 20:30 (Sparring)</span>
            </div>
             <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="font-bold text-lg">Saturday</span>
              <span className="text-gray-400">10:00 - 12:00 (Open Mat)</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-[50vh] md:h-auto relative">
           <img src="https://picsum.photos/seed/training/800/800" className="w-full h-full object-cover opacity-60" alt="Training" />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-32 h-32 border-4 border-white rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="font-bold text-xl">JOIN US</span>
             </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100" id="contact">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="text-2xl font-bold tracking-tighter mb-6">WING CHUN LÜBECK</div>
             <p className="text-gray-500 max-w-sm">
               Dedicated to the preservation and teaching of authentic Wing Chun Kung Fu.
               Empowering individuals through discipline and skill.
             </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-center gap-2"><MapPin size={18} /> Musterstraße 123, 23552 Lübeck</li>
              <li className="flex items-center gap-2"><Phone size={18} /> +49 451 1234567</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-brand-red">Impressum</a></li>
              <li><a href="#" className="hover:text-brand-red">Datenschutz</a></li>
              <li><a href="#" className="hover:text-brand-red">Member Login</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          &copy; 2024 Wing Chun Lübeck. All rights reserved. Design Concept 1.
        </div>
      </footer>
    </div>
  );
};