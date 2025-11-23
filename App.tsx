import React, { useState } from 'react';
import { DesignConcept } from './types';
import { ConceptModern } from './components/ConceptModern';
import { ConceptTraditional } from './components/ConceptTraditional';
import { ConceptUrban } from './components/ConceptUrban';
import { ConceptNature } from './components/ConceptNature';
import { ConceptBold } from './components/ConceptBold';
import { ConceptCinematic } from './components/ConceptCinematic';
import { ChatWidget } from './components/ChatWidget';
import { Monitor, Feather, Activity, Leaf, Zap, Film } from 'lucide-react';

const App: React.FC = () => {
  const [currentConcept, setCurrentConcept] = useState<DesignConcept>(DesignConcept.MODERN);

  const renderConcept = () => {
    switch (currentConcept) {
      case DesignConcept.MODERN:
        return <ConceptModern />;
      case DesignConcept.TRADITIONAL:
        return <ConceptTraditional />;
      case DesignConcept.URBAN:
        return <ConceptUrban />;
      case DesignConcept.NATURE:
        return <ConceptNature />;
      case DesignConcept.BOLD:
        return <ConceptBold />;
      case DesignConcept.CINEMATIC:
        return <ConceptCinematic />;
      default:
        return <ConceptModern />;
    }
  };

  const getButtonClass = (concept: DesignConcept, activeColorClass: string) => {
    return `flex items-center justify-center p-2 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all ${
      currentConcept === concept ? activeColorClass : 'hover:bg-white/20 text-gray-400 hover:text-white'
    }`;
  };

  return (
    <div>
      {/* Design Switcher - Always Visible */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] bg-black/90 backdrop-blur-md text-white px-3 py-2 rounded-full shadow-2xl border border-white/10 flex gap-2 overflow-x-auto max-w-[95vw]">
        
        <button onClick={() => setCurrentConcept(DesignConcept.MODERN)} className={getButtonClass(DesignConcept.MODERN, 'bg-white text-black')}>
          <Monitor size={16} className="md:mr-2" /> <span className="hidden md:inline">Modern</span>
        </button>
        
        <button onClick={() => setCurrentConcept(DesignConcept.TRADITIONAL)} className={getButtonClass(DesignConcept.TRADITIONAL, 'bg-[#C5A059] text-black')}>
          <Feather size={16} className="md:mr-2" /> <span className="hidden md:inline">Traditional</span>
        </button>
        
        <button onClick={() => setCurrentConcept(DesignConcept.URBAN)} className={getButtonClass(DesignConcept.URBAN, 'bg-blue-600 text-white')}>
          <Activity size={16} className="md:mr-2" /> <span className="hidden md:inline">Urban</span>
        </button>

        <div className="w-px bg-white/20 mx-1"></div>

        <button onClick={() => setCurrentConcept(DesignConcept.NATURE)} className={getButtonClass(DesignConcept.NATURE, 'bg-[#2C4A34] text-white')}>
          <Leaf size={16} className="md:mr-2" /> <span className="hidden md:inline">Nature</span>
        </button>

        <button onClick={() => setCurrentConcept(DesignConcept.BOLD)} className={getButtonClass(DesignConcept.BOLD, 'bg-[#FF3D00] text-black')}>
          <Zap size={16} className="md:mr-2" /> <span className="hidden md:inline">Bold</span>
        </button>

        <button onClick={() => setCurrentConcept(DesignConcept.CINEMATIC)} className={getButtonClass(DesignConcept.CINEMATIC, 'bg-amber-500 text-black')}>
          <Film size={16} className="md:mr-2" /> <span className="hidden md:inline">Cinematic</span>
        </button>
      </div>

      {/* Main Content */}
      <main>
        {renderConcept()}
      </main>

      {/* Global Features */}
      <ChatWidget />
    </div>
  );
};

export default App;