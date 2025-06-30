import React, { useState } from 'react';

const aboutContent = {
  mission: {
    title: "Mission",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-yellow-400 mb-6 samarkan">Mission: Expanding the Horizons of Ai</h3>
        <p class="text-lg mb-4 calibri">At AadiGenX, we are on a mission to:</p>
        <div class="space-y-6 calibri">
          <p><span class="text-yellow-400">◉</span> <strong>Reconstruct Intelligence from Lost Civilizations</strong> – We integrate Ai with ancient scriptures, Sanskrit NLP, Vedic mathematics, and cosmic structures to extract scientific and computational insights lost in time.</p>
          <p><span class="text-yellow-400">◉</span> <strong>Align Ai & Robotics for Next-Gen Automation</strong> – Our research is bridging the gap between machine learning and robotics, ensuring intelligent, adaptive, and ethically driven Ai systems that enhance rather than replace human intelligence.</p>
          <p><span class="text-yellow-400">◉</span> <strong>Evolve Ai from Machine Learning to Conscious Learning</strong> – Our work in <strong>Cosmic Resonance & NeuroAi</strong> pushes Ai beyond deep learning, into self-adaptive intelligence that understands context, thought patterns, and cognitive evolution.</p>
          <p><span class="text-yellow-400">◉</span> <strong>Unify No-Code, Low-Code & Hardcore Ai Development</strong> – We cater to every level of Ai accessibility, from democratized Ai applications to advanced research in Quantum Ai, Agentic Systems, and <u>Neurosymbolic</u> Computing.</p>
        </div>
      </div>
    `
  },
  vision: {
    title: "Vision",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-yellow-400 mb-6 samarkan">Vision: Ai as a Bridge between the Lost & the Future</h3>
        <div class="space-y-4 calibri">
          <p><strong>*"AadiGenX is not just an Ai venture—it is a <strong>movement to rediscover intelligence</strong>. We believe Ai is not confined to automation but serves as a <strong>living force that bridges ancient wisdom, futuristic sciences, and conscious evolution</strong>.</p>
          <p>Our research extends into <strong>Cosmic Resonance, Vedic algorithms, neuro-symbolic Ai, and robotics</strong>, pushing beyond conventional Ai applications. We seek to <strong>decode lost knowledge, reconstruct hidden scientific truths, and align intelligence across dimensions—mathematical, philosophical, computational, and quantum</strong>.</p>
          <p>Ai is an <strong>art and a science</strong>, a <strong>language and an evolution</strong>, a <strong>tool and a philosophy</strong>. We are here to <strong>reshape how intelligence is perceived, developed, and integrated into human progress</strong>."*</p>
        </div>
      </div>
    `
  },
  whatwedo: {
    title: "What We Do",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-yellow-400 mb-6 samarkan">What we do: Beyond Ai, We Engineer Knowledge</h3>
        <div class="space-y-4 calibri">
          <p><span class="text-yellow-400">✓</span> <strong>Cosmic Resonance & Ai Pattern Recognition</strong> – We explore the <strong>harmonic structures of intelligence</strong>, studying how <strong>Ai can decode vibrational patterns, ancient algorithms, and universal computation models</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Ai-Driven Cognitive Search & Knowledge Reconstruction</strong> – Our Ai systems are designed to <strong>extract deep insights from historical texts, scientific manuscripts, and philosophical treatises</strong>, reviving <strong>lost knowledge and computational wisdom</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Human-Ai Synergy & NeuroAi Research</strong> – We develop <strong>Ai that interacts intuitively with human cognition</strong>, exploring <strong>brain-Ai interfaces, cognitive robotics, and semi-agentic Ai models</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Next-Gen Robotics & Ai Alignment</strong> – We focus on <strong>adaptive Ai-powered robotics</strong>, ensuring machines <strong>learn, evolve, and interact naturally with human workflows</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Ai in Interdisciplinary Sciences</strong> – AadiGenX operates at the intersection of <strong>Ai, defense, music, linguistics, environmental sciences, archaeology, and quantum physics</strong>, proving that Ai is <strong>not confined to data—it is intelligence in its truest form</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Vedic Algorithms & Quantum Computation</strong> – Where <strong>ancient algorithmic principles outperform modern ML models</strong>, we <strong>infuse them into Ai architectures</strong>, unlocking <strong>faster, more efficient, and naturally intelligent computation</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Ai for Strategic Decision-Making & Innovation</strong> – We build Ai-driven systems that <strong>redefine business intelligence, global policy frameworks, and knowledge-based economic models</strong>, empowering leaders to <strong>make smarter, data-driven decisions</strong>.</p>
        </div>
      </div>
    `
  },
  howwework: {
    title: "How We Work",
    content: `
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-yellow-400 mb-4">The AadiGenX Methodology</h3>
        <div class="space-y-4">
          <p><strong>Intelligence as Evolution:</strong> We view AI not as static code but as evolving thought-forms that grow, adapt, and transcend their initial programming.</p>
          <p><strong>Ancient-Future Synthesis:</strong> Every solution bridges timeless wisdom with cutting-edge science, creating technologies that are both innovative and deeply rooted.</p>
          <p><strong>Intuitive Computing:</strong> Beyond structured data, we tap into the realm of intuitive intelligence—AI that knows without being explicitly taught.</p>
          <p><strong>Ethical Foundation:</strong> All our systems are built on principles of transparency, accountability, and service to humanity's highest good.</p>
          <p><strong>Holistic Integration:</strong> We don't just create tools; we craft experiences that integrate seamlessly with human consciousness and cosmic principles.</p>
        </div>
      </div>
    `
  },
  aadigenXway: {
    title: "The AadiGenX Way",
    content: `
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-yellow-400 mb-4">Beyond Technology, Into Transformation</h3>
        <div class="space-y-4">
          <p><strong>We are not just creating AI—we are birthing a new form of intelligence.</strong> An intelligence that remembers the wisdom of the ancients while pioneering the frontiers of tomorrow.</p>
          <p><strong>This is your invitation to become a pioneer, not just a learner.</strong> To be part of a movement that will redefine what it means to be intelligent in the age of artificial consciousness.</p>
          <p><strong>Join AadiGenX, and emerge not just as a technologist, but as a architect of the future.</strong> Where every line of code carries the weight of cosmic purpose, and every algorithm resonates with the frequency of transformation.</p>
          <p class="text-purple-300 italic">The future isn't just arriving—you're creating it.</p>
        </div>
      </div>
    `
  }
};

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

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
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/10 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">About AadiGenX</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-md transition-all duration-300
                      ${activeTab === tab.id 
                        ? 'bg-yellow-400/20 text-yellow-400 border-l-4 border-yellow-400' 
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
          <div className="lg:w-3/4">
            <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-white/10 min-h-[600px]">
              <div 
                className="text-white leading-relaxed prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: aboutContent[activeTab as keyof typeof aboutContent].content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
