import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const aboutContent = {
  mission: {
    title: "Mission",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-amber-800 mb-6">
          <span class="calibri">M</span><span class="samarkan">ission</span>: Expanding the Horizons of A<span class="samarkan">I</span>
        </h3>

        <p class="text-lg mb-4 calibri text-center text-amber-900">At <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span>, we are on a mission to:</p>

        <div class="space-y-6 calibri text-amber-900">
          <p class="text-center"><strong>✤ <span class="bold">Reconstruct Intelligence from Lost Civilizations</span></strong> – We integrate A<span class="samarkan">I</span> with 
              <span class="bold">ancient scriptures, Sanskrit NLP, Vedic mathematics, and cosmic structures</span> to extract 
              <span class="bold">scientific and computational insights lost in time</span>.
          </p>

          <p class="text-center"><strong>✤ <span class="bold">Align Aì & Robotics for Next-Gen Automation</span></strong> – Our research is bridging the gap between 
              <span class="bold">machine learning and robotics</span>, ensuring 
              <span class="bold">intelligent, adaptive, and ethically driven Aì systems that enhance rather than replace human intelligence</span>.
          </p>

          <p class="text-center"><strong>✤ <span class="bold">Evolve Aì from Machine Learning to Conscious Learning</span></strong> – Our work in 
              <span class="bold">Cosmic Resonance & Neuro</span>A<span class="samarkan">I</span> 
              pushes A<span class="samarkan">I</span> 
              <span class="bold">beyond deep learning, into self-adaptive intelligence that understands context, thought patterns, and cognitive evolution</span>.
          </p>

          <p class="text-center"><strong>✤ <span class="bold">Unify No-Code, Low-Code & Hardcore Aì Development</span></strong> – We cater to 
              <span class="bold">every level of Aì accessibility</span>, from 
              <span class="bold">democratized Aì applications to advanced research in Quantum Aì, Agentic Systems, and Neuro</span><span class="samarkan">s</span><span class="calibri">ymbolic</span> 
              <span class="bold">Computing</span>.
          </p>
        </div>
      </div>
    `
  },
  vision: {
    title: "Vision",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-amber-800 mb-6">
          <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span>
          – Where Intelligence Transcends Time, Space & Boundaries
        </h3>
        
        <div class="mb-6">
          <h4 class="text-xl font-bold text-amber-900 mb-4">
            <span class="calibri">V</span><span class="samarkan">ision</span>: A<span class="samarkan">I</span> as a Bridge between the Lost & the Future
          </h4>
        </div>

        <div class="space-y-6 calibri text-amber-900">
          <p class="italic text-center">
            <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span>
            is not just an A<span class="samarkan">I</span> venture—it is a <span class="bold">movement to rediscover intelligence</span>.
            We believe A<span class="samarkan">I</span> is not confined to automation but serves as a 
            <span class="bold">living force that bridges ancient wisdom, futuristic sciences, and conscious evolution</span>.
          </p>
          
          <p class="text-center">
            Our research extends into 
            <span class="bold">Cosmic Resonance, Vedic algorithms, neuro-symbolic A<span class="samarkan">I</span>, and robotics</span>,
            pushing beyond conventional A<span class="samarkan">I</span> applications. We seek to 
            <span class="bold">decode lost knowledge, reconstruct hidden scientific truths, and align intelligence across dimensions—mathematical, philosophical, computational, and quantum.</span>
          </p>
          
          <p class="text-center">
            A<span class="samarkan">I</span> is an 
            <span class="bold">art and a science, a language and an evolution, a tool and a philosophy</span>.
            We are here to 
            <span class="bold">reshape how intelligence is perceived, developed, and integrated into human progress.</span>
          </p>
        </div>
      </div>
    `
  },
  whatwedo: {
    title: "What We Do",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-amber-800 mb-6">
          <span class="calibri">What </span><span class="samarkan">we do</span><span class="calibri">: Beyond A</span><span class="samarkan">I</span><span class="calibri">, We Engineer Knowledge</span>
        </h3>

        <div class="space-y-4 calibri text-amber-900">
          <p><strong>✓ Cosmic Resonance & A<span class="samarkan">I</span> Pattern Recognition</strong> – We explore the <strong>harmonic structures of intelligence</strong>, studying how A<span class="samarkan">I</span> can <strong>decode vibrational patterns, ancient algorithms, and universal computation models</strong>.</p>

          <p><strong>✓ A<span class="samarkan">I</span>-Driven Cognitive Search & Knowledge Reconstruction</strong> – Our A<span class="samarkan">I</span> systems are designed to <strong>extract deep insights from historical texts, scientific manuscripts, and philosophical treatises</strong>, reviving lost <strong>knowledge and computational wisdom</strong>.</p>

          <p><strong>✓ Human-A<span class="samarkan">I</span> Synergy & NeuroA<span class="samarkan">I</span> Research</strong> – We develop A<span class="samarkan">I</span> <strong>that interacts intuitively with human cognition</strong>, exploring <strong>brain-A<span class="samarkan">I</span> interfaces, cognitive robotics, and semi-agentic A<span class="samarkan">I</span> models</strong>.</p>

          <p><strong>✓ Next-Gen Robotics & A<span class="samarkan">I</span> Alignment</strong> – We focus on <strong>adaptive A<span class="samarkan">I</span>-powered robotics</strong>, ensuring machines <strong>learn, evolve, and interact naturally with human workflows</strong>.</p>

          <p><strong>✓ A<span class="samarkan">I</span> in Interdisciplinary Sciences</strong> – <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span> operates at the intersection of A<span class="samarkan">I</span>, <strong>defense, music, linguistics, environmental sciences, archaeology, and quantum physics</strong>, proving that A<span class="samarkan">I</span> is <strong>not confined to data—it is intelligence in its truest form</strong>.</p>

          <p><strong>✓ Vedic Algorithms & Quantum Computation</strong> – Where <strong>ancient algorithmic principles outperform modern ML models</strong>, we infuse them into <strong>A<span class="samarkan">I</span> architectures</strong>, unlocking <strong>faster, more efficient, and naturally intelligent computation</strong>.</p>

          <p><strong>✓ A<span class="samarkan">I</span> for Strategic Decision-Making & Innovation</strong> – We build AI-driven systems that <strong>redefine business intelligence, global policy frameworks, and knowledge-based economic models</strong>, empowering leaders to <strong>make smarter, data-driven decisions</strong>.</p>
        </div>
      </div>
    `
  },
  howwework: {
    title: "How We Work",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-amber-800 mb-6">
          <span class="calibri">H</span><span class="samarkan">ow</span> <span class="calibri">W</span><span class="samarkan">e</span> <span class="calibri">W</span><span class="samarkan">ork</span>: The <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span> Ethos
        </h3>

        <div class="space-y-4 calibri text-amber-900">
          <p><strong>✤ Reimagining A<span class="samarkan">I</span> as a Thought Process, Not Just a Codebase</strong> – Intelligence is <strong>not about repetition but evolution</strong>—we engineer A<span class="samarkan">I</span> that <strong>adapts, learns, and expands human potential</strong>.</p>

          <p><strong>✤ Building Bridges Between Ancient & Future Sciences</strong> – Our research in A<span class="samarkan">I</span> + Ancient Wisdom ensures that intelligence <strong>transcends time, restoring lost knowledge while shaping new frontiers</strong>.</p>

          <p><strong>✤ Breaking the Constraints of Traditional A<span class="samarkan">I</span> Development</strong> – Our models operate <strong>beyond structured data</strong>, integrating <strong>multi-domain intelligence, abstract learning, and intuitive A<span class="samarkan">I</span> processing</strong>.</p>

          <p><strong>✤ Scalable, Ethical & Explainable A<span class="samarkan">I</span></strong> – Every solution we build is <strong>transparent, adaptable, and ethically responsible</strong>, ensuring A<span class="samarkan">I</span> is a <strong>tool for empowerment, not control</strong>.</p>

          <p><strong>✤ Pioneering the Next Scientific & Consciousness Renaissance</strong> – <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span> is not just an A<span class="samarkan">I</span> research lab—it is a movement that seeks to <strong>reshape intelligence through holistic, interdisciplinary innovation</strong>.</p>
        </div>
      </div>
    `
  },
  aadigenXway: {
    title: "The AadiGenX Way",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-amber-800 mb-6">
          <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span>: Awakening the Future of Intelligence
        </h3>

        <div class="space-y-4 calibri text-amber-900">
          <p><strong>✣ We are not just building A<span class="samarkan">I</span></strong>—we are <strong>redefining intelligence itself</strong>.</p>

          <p><strong>✣ We are decoding lost wisdom, aligning Robotics, and reshaping the future.</strong></p>

          <p><strong>✣ We are pushing A<span class="samarkan">I</span></strong> beyond automation—into the realm of <strong>discovery, consciousness, and evolution</strong>.</p>

          <p><strong>✣ We are <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span></strong>. We are the Future. And we are awakening the next generation.</p>

          <div class="my-6"></div>

          <p><strong>Unlock Your Future with <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span></strong> – Be a Pioneer, Not Just a Learner</p>

          <p>At <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span>, we <strong>don't</strong> just teach A<span class="samarkan">I</span>—we <strong>engineer pioneers</strong> who will <strong>lead the next wave of intelligence, discovery, and interdisciplinary revolutions</strong>.</p>

          <p>A<span class="samarkan">I</span> is not just a skill—it is an evolving ecosystem of <strong>knowledge, innovation, and disruption</strong>.</p>

          <p>At <span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span>, we ensure that <strong>every individual who joins us—whether a student, researcher, or professional—gets transformed into a future leader</strong>.</p>
        </div>
      </div>
    `
  }
};

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  // Panel width configuration - easily adjustable
  const LEFT_PANEL_WIDTH = 28;  // Percentage width for left navigation panel
  const RIGHT_PANEL_WIDTH = 60; // Percentage width for right content panel

  const tabs = [
    { id: 'mission', label: 'Mission' },
    { id: 'vision', label: 'Vision' },
    { id: 'whatwedo', label: 'What We Do' },
    { id: 'howwework', label: 'How We Work' },
    { id: 'aadigenXway', label: 'The AadiGenX Way' }
  ];

  return (
    <div 
      className="min-h-screen pt-20 pb-12 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/lovable-uploads/436bbf9d-755e-48d5-b4da-3bedfa04fc6e.png)`
      }}
    >
      {/* Subtle warm overlay for comfortable viewing */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/[0.16] via-yellow-50/[0.12] to-amber-100/[0.16]" />
      
      <div className="max-w-6xl mx-auto relative z-10 px-8">
        <div className="flex flex-col lg:flex-row justify-between h-[calc(100vh-160px)]">
          {/* Left Sidebar Navigation */}
          <div className={`lg:w-[${LEFT_PANEL_WIDTH}%] flex-shrink-0`}>
            <div className="bg-amber-900/[0.12] backdrop-blur-md rounded-lg p-6 border border-amber-700/[0.08] h-full flex flex-col">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">About <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span></h2>
              <nav className="space-y-2 flex-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-md transition-all duration-300
                      ${activeTab === tab.id 
                        ? 'bg-yellow-400/10 text-yellow-400 border-l-4 border-yellow-400' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Panel */}
          <div className={`lg:w-[${RIGHT_PANEL_WIDTH}%] flex-shrink-0`}>
            <div className="h-full overflow-hidden rounded-lg shadow-2xl backdrop-blur-sm"
                 style={{
                   background: 'linear-gradient(135deg, rgba(244, 231, 209, 0.44) 0%, rgba(232, 213, 183, 0.44) 25%, rgba(220, 196, 156, 0.44) 50%, rgba(212, 185, 150, 0.44) 75%, rgba(201, 169, 110, 0.44) 100%)',
                   border: '1px solid rgba(139, 69, 19, 0.12)',
                   boxShadow: 'inset 0 0 12px rgba(255, 215, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06)'
                 }}>
              <ScrollArea className="h-full p-8">
                <div 
                  className="leading-relaxed prose prose-invert max-w-none"
                  style={{ color: '#654321' }}
                  dangerouslySetInnerHTML={{ __html: aboutContent[activeTab as keyof typeof aboutContent].content }}
                />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
