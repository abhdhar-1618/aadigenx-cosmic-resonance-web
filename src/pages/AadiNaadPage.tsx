import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const AadiNaadPage = () => {
  const [showDetailedProfile, setShowDetailedProfile] = useState(false);
  
  if (showDetailedProfile) {
    return (
      <div className="min-h-screen scroll-background">
        <Navigation currentSection="naad" />
        <div className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setShowDetailedProfile(false)}
              className="flex items-center gap-2 mb-8 text-amber-800 hover:text-amber-900 transition-colors font-calibri"
            >
              <ArrowLeft size={20} />
              Back to Profiles
            </button>
            
            <div className="bg-amber-50/90 border-2 border-amber-800/60 rounded-lg p-8 backdrop-blur-sm shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 border-2 border-amber-800/40 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/b798b80c-d4cb-40bb-b626-b7882f45559e.png" 
                      alt="Dipanwita DasChakrabarty" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="font-calibri">
                  <h1 className="text-3xl font-bold text-amber-900 mb-2">Dipanwita DasChakrabarty</h1>
                  <p className="text-amber-800 text-lg mb-1 italic">IIM Indore Alumna | Vision Architect</p>
                   <p className="text-amber-800 text-lg font-bold">
                     |A<span className="samarkan">I</span> & Vedic Researcher
                   </p>
                </div>
              </div>
              
              <div className="font-calibri text-amber-800 leading-relaxed space-y-4">
                <p>
                  The pioneering force in conscious education and applied A<span className="samarkan">I</span>. As Founder & Research Lead of 
                  <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>, she bridges ancient wisdom, modern science, and soulful innovation—reviving India's heritage through next-gen technologies.
                </p>
                
                <p>
                  Her expertise spans neural networks, NLP, LLMs, transformer architectures, and agentic A<span className="samarkan">I</span>. With leadership roles at Toyota, Honda, PwC, IDFC, and Data Science Masterminds, <em>she's known for integrating ethics, technology, and human potential into transformative solutions.</em>
                </p>
                
                <p>
                  Rooted in a rich musical legacy—granddaughter of <strong>Pandit Subodh Nandy</strong> and niece of <strong>Prof. Subir Nandy</strong> and late <strong>Prof. Sudip Nandy</strong> — Dipanwita merges rhythm, tradition, and A<span className="samarkan">I</span> in groundbreaking ways. She has led musical folklore workshops across India with her father, Late Sri <strong>Pulok Kumar Das</strong>, and continues to foster cross-cultural dialogue through sound and cognition.
                </p>
                
                <p>
                  As the visionary behind <em><strong>Cosmic Resonance</strong></em>, her work fuses Vedic science, classical music, and A<span className="samarkan">I</span> to decode and preserve timeless knowledge. Her mission is to build scalable, soul-aligned learning systems that empower creators with both roots and wings.
                </p>
                
                <p>
                  With Dipanwita at the helm, <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span> is more than a research lab—it is a movement where ancient resonance shapes future intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="naad" />
      <div className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl">
          {/* Founder Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Founder 1 */}
            <Card 
              className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              onClick={() => setShowDetailedProfile(true)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/b798b80c-d4cb-40bb-b626-b7882f45559e.png" 
                    alt="Dipanwita DasChakrabarty" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-calibri">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Dipanwita DasChakrabarty</h3>
                  <p className="text-amber-800 text-sm mb-1 italic">IIM Indore Alumna | Vision Architect</p>
                   <p className="text-amber-800 text-sm font-bold mb-3">
                     |A<span className="samarkan">I</span> & Vedic Researcher
                   </p>
                </div>
              </CardContent>
            </Card>

            {/* Founder 2 */}
            <Card className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-amber-200 rounded-full mx-auto mb-4 border-2 border-amber-800/40"></div>
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-samarkan">Founder Name</h3>
                <p className="text-amber-800 font-merriweather text-sm mb-3">Title/Position</p>
                <p className="text-amber-700/80 text-sm leading-relaxed">
                  Brief description about the founder and their role in the organization.
                </p>
              </CardContent>
            </Card>

            {/* Founder 3 */}
            <Card className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-amber-200 rounded-full mx-auto mb-4 border-2 border-amber-800/40"></div>
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-samarkan">Founder Name</h3>
                <p className="text-amber-800 font-merriweather text-sm mb-3">Title/Position</p>
                <p className="text-amber-700/80 text-sm leading-relaxed">
                  Brief description about the founder and their role in the organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadiNaadPage;
