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
                     A<span className="samarkan">I</span> & Vedic Researcher
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
                  With Dipanwita at the helm, <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span> is more than a research lab... it is a movement where ancient resonance shapes future intelligence.
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
            {/* Card 1 */}
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
                  <p className="text-amber-800 text-base font-bold">
                    Founder & Research Lead, <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/3a9c3557-6d9c-474f-b244-37b97da061b4.png" 
                    alt="Prof. Subir Nandy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-calibri text-left space-y-3">
                  <h3 className="text-xl font-bold text-amber-900 text-center mb-2">Prof. Subir Nandy</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    A visionary maestro, educator, and institution- builder leading the musical frontier at <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>. As Director & Head of Music, he fuses India's classical traditions with conscious, future-ready pedagogy.
                  </p>
                  
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Trained under musical legends—his father <strong>Pt. Subodh Nandy</strong>, <strong>Ustad Rahim Fahimuddin Dagar</strong>, <strong>Smt. Kaberi Kar</strong>, and others—Prof. Nandy is a rare dual master of rhythm (Tabla, Pakhawaj, Andhya Badya) and melody (Dhrupad, Rabindric vocal).
                  </p>
                  
                  <p className="text-amber-800 text-sm leading-relaxed">
                    He has performed across India's top platforms—All India Radio, Doordarshan, Tansen Festival, and leading channels like Zee Bangla and Tara Muzic. His depth as a performer is matched by his impact as an educator—founding <strong>Neelava</strong>, mentoring at <strong>Gitabitan School</strong>, and teaching at <strong>Rabindra Bharati University</strong> and through the <strong>British Council</strong>. His international experience, including training students at <strong>Japan's Soka University</strong>, embodies <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>'s commitment to making Indian knowledge global and accessible.
                  </p>
                  
                  <p className="text-amber-800 text-sm leading-relaxed">
                    As editor of <em>Bharatiya Sangeet Tal-O-Chhanda</em> and a global mentor, he bridges tradition with innovation. At <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>, he leads the <strong>Rhythm Intelligence</strong> vertical, shaping a new wave of learners through curricula that blend ancient rhythm theory, classical voice training, and digital tools.
                  </p>
                  
                  <p className="text-amber-800 text-sm leading-relaxed">
                    With Prof. Nandy at the helm, <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span> becomes a confluence of rigor, creativity, and cultural evolution—where tradition empowers technology and every rhythm shapes tomorrow's change.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
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
