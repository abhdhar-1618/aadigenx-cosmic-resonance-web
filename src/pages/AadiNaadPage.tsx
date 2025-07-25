import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const AadiNaadPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  
  if (selectedProfile === 'dipanwita') {
    return (
      <div className="min-h-screen scroll-background">
        <Navigation currentSection="naad" />
        <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
          <div className="h-full overflow-y-auto custom-scrollbar">
            <div className="pt-12 px-4">
              <div className="max-w-4xl mx-auto">
                <button 
                  onClick={() => setSelectedProfile(null)}
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
        </div>
        
        {/* Bottom Roll Bar Text */}
        <div className="fixed bottom-0 w-full bg-transparent z-10">
          <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
            <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
              प्राचीनानां निनादः भविष्यस्य संरचना
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedProfile === 'subir') {
    return (
      <div className="min-h-screen scroll-background">
        <Navigation currentSection="naad" />
        <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
          <div className="h-full overflow-y-auto custom-scrollbar">
            <div className="pt-8 px-4">
              <div className="max-w-4xl mx-auto">
                <button 
                  onClick={() => setSelectedProfile(null)}
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
                          src="/lovable-uploads/3a9c3557-6d9c-474f-b244-37b97da061b4.png" 
                          alt="Prof. Subir Nandy" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="font-calibri">
                      <h1 className="text-3xl font-bold text-amber-900 mb-2">Prof. Subir Nandy</h1>
                      <p className="text-amber-800 text-lg mb-1 italic">Visionary Maestro, Educator, Institution-Builder</p>
                       <p className="text-amber-800 text-lg font-bold">
                         Co-Founder & Head of Music
                       </p>
                    </div>
                  </div>
                  
                  <div className="font-calibri text-amber-800 leading-relaxed space-y-4">
                    <p>
                      A visionary maestro, educator, and institution-builder leading the musical frontier at <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>. As Director & Head of Music, he fuses India's classical traditions with conscious, future-ready pedagogy.
                    </p>
                    
                    <p>
                      Trained under musical legends—his father <strong>Pt. Subodh Nandy</strong>, <strong>Ustad Rahim Fahimuddin Dagar</strong>, <strong>Smt. Kaberi Kar</strong>, and others—Prof. Nandy is a rare dual master of rhythm (Tabla, Pakhawaj, Andhya Badya) and melody (Dhrupad, Rabindric vocal).
                    </p>
                    
                    <p>
                      He has performed across India's top platforms—All India Radio, Doordarshan, Tansen Festival, and leading channels like Zee Bangla and Tara Muzic. His depth as a performer is matched by his impact as an educator—founding <strong>Neelava</strong>, mentoring at <strong>Gitabitan School</strong>, and teaching at <strong>Rabindra Bharati University</strong> and through the <strong>British Council</strong>. His international experience, including training students at <strong>Japan's Soka University</strong>, embodies <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>'s commitment to making Indian knowledge global and accessible.
                    </p>
                    
                    <p>
                      As editor of <em><strong>Bharatiya Sangeet Tal-O-Chhanda</strong></em> and a global mentor, he bridges tradition with innovation. At <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>, he leads the <strong>Rhythm Intelligence vertical</strong>, shaping a new wave of learners through curricula that blend ancient rhythm theory, classical voice training, and digital tools.
                    </p>
                    
                    <p>
                      With Prof. Nandy at the helm, <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span> becomes a confluence of rigor, creativity, and cultural evolution—where tradition empowers technology and every rhythm shapes tomorrow's change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Roll Bar Text */}
        <div className="fixed bottom-0 w-full bg-transparent z-10">
          <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
            <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
              प्राचीनानां निनादः भविष्यस्य संरचना
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedProfile === 'abhik') {
    return (
      <div className="min-h-screen scroll-background">
        <Navigation currentSection="naad" />
        <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
          <div className="h-full overflow-y-auto custom-scrollbar">
            <div className="pt-8 px-4">
              <div className="max-w-4xl mx-auto">
                <button 
                  onClick={() => setSelectedProfile(null)}
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
                          src="/lovable-uploads/1f8da09e-fd08-42be-9804-c0fab1f5075e.png" 
                          alt="Abhik Dhar" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="font-calibri">
                      <h1 className="text-3xl font-bold text-amber-900 mb-2">Abhik Dhar</h1>
                      <p className="text-amber-800 text-lg mb-1 italic">Data Strategist | Risk Architect | Process Designer</p>
                       <p className="text-amber-800 text-lg font-bold">
                         IIM Indore Alumnus
                       </p>
                    </div>
                  </div>
                  
                  <div className="font-calibri text-amber-800 leading-relaxed space-y-4">
                    <p>
                      The operational backbone of <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>, driving precision, compliance, and scale. With a decade of cross-industry experience—including key roles at <strong>Capgemini</strong> and <strong>Flipkart</strong>—he brings a rare blend of strategic insight and real-world execution.
                    </p>
                    
                    <p>
                      He takes pride in designing processes—across everything from operations to grant management—that are transparent, efficient, and built for real-world results. His approach is direct: ensure compliance, minimize risk, and always keep the organization's mission at the forefront.
                    </p>
                    
                    <p>
                      Abhik's experience in <strong>e-commerce</strong>, <strong>finance</strong>, and <strong>edtech</strong> gives him a strong foundation to anticipate challenges and turn them into strengths. At <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>, he focuses on making sure every resource—be it time, talent, or funding—is put to its best use. When it comes to grant-funded projects, he ensures all reporting and tracking are clear and reliable, fostering trust without unnecessary complexity.
                    </p>
                    
                    <p>
                      In line with the <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span> vision, Abhik believes that real progress comes from discipline, accountability, and empowering teams to do their best work. He's not just a process expert; he's a builder of strong foundations that let big ideas become lasting realities.
                    </p>
                    
                    <p>
                      With Abhik Dhar in operations, <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span> stands on a platform of integrity, clarity, and sustained impact—moving forward with confidence, every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Roll Bar Text */}
        <div className="fixed bottom-0 w-full bg-transparent z-10">
          <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
            <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
              प्राचीनानां निनादः भविष्यस्य संरचना
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="naad" />
      <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
        <div className="h-full overflow-y-auto scroll-smooth custom-scrollbar">
          <div className="pt-8 pb-8 px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* First Row */}
              <div className="h-[50vh] flex items-center justify-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {/* Card 1 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm cursor-pointer h-64 w-full"
                    onClick={() => setSelectedProfile('dipanwita')}
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden">
                        <img 
                          src="/lovable-uploads/b798b80c-d4cb-40bb-b626-b7882f45559e.png" 
                          alt="Dipanwita DasChakrabarty" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-lg font-bold text-amber-900 mb-1">Dipanwita DasChakrabarty</h3>
                        <p className="text-amber-800 text-sm">
                          Founder & Research Lead, <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 2 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm cursor-pointer h-64 w-full"
                    onClick={() => setSelectedProfile('subir')}
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden">
                        <img 
                          src="/lovable-uploads/3a9c3557-6d9c-474f-b244-37b97da061b4.png" 
                          alt="Prof. Subir Nandy" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Card 2</h3>
                        <p className="text-amber-800 text-base font-bold">
                          Prof. Subir Nandy
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 3 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm cursor-pointer h-64 w-full"
                    onClick={() => setSelectedProfile('abhik')}
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden">
                        <img 
                          src="/lovable-uploads/1f8da09e-fd08-42be-9804-c0fab1f5075e.png" 
                          alt="Abhik Dhar" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Card 3</h3>
                        <p className="text-amber-800 text-base font-bold">
                          Abhik Dhar
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Second Row */}
              <div className="h-[50vh] flex items-center justify-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {/* Card 4 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm h-64 w-full"
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden bg-amber-100">
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Card 4</h3>
                        <p className="text-amber-800 text-base font-bold">
                          Coming Soon
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 5 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm h-64 w-full"
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden bg-amber-100">
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Card 5</h3>
                        <p className="text-amber-800 text-base font-bold">
                          Coming Soon
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 6 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm h-64 w-full"
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden bg-amber-100">
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Card 6</h3>
                        <p className="text-amber-800 text-base font-bold">
                          Coming Soon
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Third Row */}
              <div className="h-[50vh] flex items-center justify-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {/* Card 7 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm h-64 w-full"
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden bg-amber-100">
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Card 7</h3>
                        <p className="text-amber-800 text-base font-bold">
                          Coming Soon
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 8 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm h-64 w-full"
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden bg-amber-100">
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Card 8</h3>
                        <p className="text-amber-800 text-base font-bold">
                          Coming Soon
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 9 */}
                  <Card 
                    className="bg-amber-50/80 border-2 border-amber-800/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm h-64 w-full"
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-amber-800/40 rounded-full overflow-hidden bg-amber-100">
                      </div>
                      <div className="font-calibri">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Card 9</h3>
                        <p className="text-amber-800 text-base font-bold">
                          Coming Soon
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Roll Bar Text */}
      <div className="fixed bottom-0 w-full bg-transparent z-10">
        <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadiNaadPage;
