import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const AadiNaadPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="naad" />
      <div className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl">
          {/* Founder Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Founder 1 - Dipanwita DasChakrabarty */}
            <Card className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/6e3b204b-bef5-4038-b242-c059b59a2d64.png" 
                    alt="Dipanwita DasChakrabarty"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left font-calibri text-sm leading-relaxed text-amber-900">
                  <div className="font-bold text-base mb-2">Dipanwita DasChakrabarty</div>
                  
                  <div className="italic mb-1">IIM Indore Alumna | Vision Architect</div>
                  <div className="font-bold mb-3">|<span className="font-samarkan">A</span>i & Vedic Researcher</div>
                  
                  <div className="mb-3">
                    The pioneering force in conscious education and applied <span className="font-samarkan">A</span>i. As Founder & Research Lead of 
                    <span className="font-samarkan"> AadiGenX</span>, she bridges ancient wisdom, modern science, and soulful innovation—reviving India's heritage through next-gen technologies.
                  </div>
                  
                  <div className="mb-3">
                    Her expertise spans neural networks, NLP, LLMs, transformer architectures, and agentic <span className="font-samarkan">A</span>i. With leadership roles at Toyota, Honda, PwC, IDFC, and Data Science Masterminds, <span className="italic">she's known for integrating ethics, technology, and human potential into transformative solutions.</span>
                  </div>
                  
                  <div className="mb-3">
                    Rooted in a rich musical legacy—granddaughter of Pandit Subodh Nandy and niece of Prof. Subir Nandy—Dipanwita merges rhythm, tradition, and <span className="font-samarkan">A</span>i in groundbreaking ways. She has led musical folklore workshops across India with her father, Late Sri <span className="font-bold">Pulok Kumar Das</span>, and continues to foster cross-cultural dialogue through sound and cognition.
                  </div>
                  
                  <div className="mb-3">
                    As the visionary behind <span className="italic font-bold">Cosmic Resonance</span>, her work fuses Vedic science, classical music, and <span className="font-samarkan">A</span>i to decode and preserve timeless knowledge. Her mission is to build scalable, soul-aligned learning systems that empower creators with both roots and wings.
                  </div>
                  
                  <div>
                    With Dipanwita at the helm, <span className="font-samarkan">AadiGenX</span> is more than a research lab—it is a movement <span className="underline">where</span> ancient resonance shapes future intelligence.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder 2 */}
            <Card className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
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
            <Card className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm md:col-span-2 lg:col-span-1">
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