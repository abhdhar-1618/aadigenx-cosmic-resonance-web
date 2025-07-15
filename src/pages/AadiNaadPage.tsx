import React from 'react';
import { Navigation } from '@/components/Navigation';

const AadiNaadPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="naad" />
      <div className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl">
          {/* Profile Scroll */}
          <div className="relative">
            {/* Scroll Background */}
            <div 
              className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl overflow-hidden border-8 border-amber-800"
              style={{
                background: `linear-gradient(135deg, 
                  #d4a574 0%, 
                  #c9965f 15%, 
                  #be8a4a 30%, 
                  #b8834a 45%, 
                  #ad7a42 60%, 
                  #a67237 75%, 
                  #9e6b32 90%, 
                  #96632e 100%)`,
                boxShadow: `
                  inset 0 0 20px rgba(139, 69, 19, 0.3),
                  0 20px 40px rgba(0, 0, 0, 0.2),
                  0 0 0 3px #8B4513,
                  0 0 0 6px #A0522D
                `
              }}
            >
              {/* Scroll Texture Overlay */}
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent"></div>
              
              {/* Left Scroll Rod */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-l-full shadow-inner"></div>
              
              {/* Right Scroll Rod */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-r-full shadow-inner"></div>
              
              {/* Content */}
              <div className="px-16 py-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-amber-900 font-cinzel">
                    Founder & Research Lead, AadiGenX
                  </h2>
                </div>
                
                {/* Profile Content */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Left side - Text */}
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-bold text-amber-900 mb-3 font-cinzel">
                      Dipanwita DasChakrabarty
                    </h3>
                    
                    <div className="space-y-3 text-amber-900 font-crimson text-sm">
                      <p className="font-semibold">
                        IIM Indore Alumna | Vision Architect
                      </p>
                      <p className="font-semibold">
                        |AI & Vedic Researcher
                      </p>
                      
                      <p className="leading-relaxed">
                        The pioneering force in conscious education and applied AI. As Founder & Research Lead of AadiGenx, she bridges ancient wisdom, modern science, and soulful innovation—reviving India's heritage through next-gen technologies.
                      </p>
                      
                      <p className="leading-relaxed">
                        Her expertise spans neural networks, NLP, LLMs, transformer architectures, and agentic AI. With leadership roles at <span className="font-semibold">Toyota, Honda, PwC, IDFC and Bajaj Finance, and Space Masterminds</span>, she's known for integrating ethics, technology, and human potential into transformative solutions.
                      </p>
                      
                      <p className="leading-relaxed">
                        Rooted in a rich musical legacy—granddaughter of <span className="font-semibold">Pandit Subodh Nandy</span> and niece of <span className="font-semibold">Prof. Sujitra Nandy</span>—Dipanwita merges rhythm, tradition, and AI in groundbreaking ways. She has led musical folklore workshops across India with her father, <span className="font-semibold">Late Sri Pulak Kumar Das</span>, and continues to foster cross-cultural dialogue across East vs. West through sound and art.
                      </p>
                      
                      <p className="leading-relaxed">
                        As the visionary behind <span className="font-semibold italic">Cosmic Resonance</span>, her work fuses Vedic science, classical music, and AI to decode and preserve timeless knowledge. Her mission is to build scalable, soul-aligned learning systems that empower creators with both <span className="font-semibold">roots and wings</span>.
                      </p>
                      
                      <p className="leading-relaxed font-semibold">
                        With Dipanwita at the helm, AadiGenx is more than a research lab—it is a movement where ancient resonance shapes future intelligence.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right side - Image */}
                  <div className="lg:w-1/3 flex justify-center lg:justify-end">
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/4ade9b95-1ac8-4103-bf42-320859e56f7c.png"
                        alt="Dipanwita DasChakrabarty"
                        className="w-32 h-40 lg:w-40 lg:h-48 object-cover rounded-lg shadow-lg border-3 border-amber-800"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Scroll Detail */}
              <div className="absolute bottom-2 right-8">
                <div className="w-6 h-6 bg-amber-900 rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-3 h-3 bg-amber-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadiNaadPage;