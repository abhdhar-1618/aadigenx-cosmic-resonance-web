import React, { useState } from 'react';

const aboutContent = {
  mission: {
    title: "Mission",
    content: `
      <div id="mission" class="about-text space-y-6" style="display: none;">
  <div class="title">
    <span class="calibri">M</span><span class="samarkan">ission</span><span class="calibri">: Expanding the Horizons of </span><span class="samarkan">A</span><span class="calibri">I</span>
  </div>

  <p><span class="calibri">At </span><span class="calibri">A</span><span class="samarkan">adi</span><span class="calibri">G</span><span class="samarkan">en</span><span class="calibri">X</span><span class="calibri">, we are on a mission to:</span></p>

  <p>
    <span class="calibri">✤ </span><strong><span class="calibri">Reconstruct Intelligence from Lost Civilizations</span></strong><span class="calibri"> – We integrate </span>
    <span class="calibri">A</span><span class="samarkan">I</span><span class="calibri"> with ancient scriptures, Sanskrit NLP, Vedic mathematics, and cosmic structures to extract scientific and computational insights lost in time.</span>
  </p>

  <p>
    <span class="calibri">✤ </span><strong><span class="calibri">Align </span><span class="samarkan">A</span><span class="calibri">I & Robotics for Next-Gen Automation</span></strong><span class="calibri"> – Our research bridges the gap between machine learning and robotics, ensuring intelligent, adaptive, and ethically driven </span>
    <span class="calibri">A</span><span class="samarkan">I</span><span class="calibri"> systems that enhance rather than replace human intelligence.</span>
  </p>

  <p>
    <span class="calibri">✤ </span><strong><span class="calibri">Evolve </span><span class="samarkan">A</span><span class="calibri">I from Machine Learning to Conscious Learning</span></strong><span class="calibri"> – Our work in Cosmic Resonance & Neuro</span>
    <span class="samarkan">A</span><span class="calibri">I pushes </span><span class="samarkan">A</span><span class="calibri">I beyond deep learning, into self-adaptive intelligence that understands context, thought patterns, and cognitive evolution.</span>
  </p>

  <p>
    <span class="calibri">✤ </span><strong><span class="calibri">Unify No-Code, Low-Code & Hardcore </span><span class="samarkan">A</span><span class="calibri">I Development</span></strong><span class="calibri"> – We cater to every level of </span>
    <span class="calibri">A</span><span class="samarkan">I</span><span class="calibri"> accessibility, from democratized </span><span class="samarkan">A</span><span class="calibri">I applications to advanced research in Quantum </span>
    <span class="samarkan">A</span><span class="calibri">I, Agentic Systems, and </span><span class="samarkan">Neuro</span><span class="calibri">symbolic Computing.</span>
  </p>
</div>

    `
  },
  vision: {
    title: "Vision",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-yellow-400 mb-6 samarkan">
          <span class="calibri">V</span><span class="samarkan">ision</span>: <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> as a Bridge between the Lost & the Future
        </h3>
        <div class="space-y-4 calibri">
          <p><strong><span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span> is not just an <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> venture—it is a <strong>movement to rediscover intelligence</strong>. We believe <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> is not confined to automation but serves as a <strong>living force that bridges ancient wisdom, futuristic sciences, and conscious evolution</strong>.</p>
          <p>Our research extends into <strong>Cosmic Resonance, Vedic algorithms, neuro-symbolic <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span>, and robotics</strong>, pushing beyond conventional <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> applications. We seek to <strong>decode lost knowledge, reconstruct hidden scientific truths, and align intelligence across dimensions—mathematical, philosophical, computational, and quantum</strong>.</p>
          <p><span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> is an <strong>art and a science</strong>, a <strong>language and an evolution</strong>, a <strong>tool and a philosophy</strong>. We are here to <strong>reshape how intelligence is perceived, developed, and integrated into human progress</strong>.</p>
        </div>
      </div>
    `
  },
  whatwedo: {
    title: "What We Do",
    content: `
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-yellow-400 mb-6 samarkan">
          <span class="calibri">What </span><span class="samarkan">we do</span><span class="calibri">: Beyond <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span>, We Engineer Knowledge</span>
        </h3>
        <div class="space-y-4 calibri">
          <p><span class="text-yellow-400">✓</span> <strong>Cosmic Resonance & <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> Pattern Recognition</strong> – We explore the <strong>harmonic structures of intelligence</strong>, studying how <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> can <strong>decode vibrational patterns, ancient algorithms, and universal computation models</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong><span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span>-Driven Cognitive Search & Knowledge Reconstruction</strong> – Our <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> systems are designed to <strong>extract deep insights from historical texts, scientific manuscripts, and philosophical treatises</strong>, reviving lost <strong>knowledge and computational wisdom</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Human-<span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> Synergy & Neuro<span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> Research</strong> – We develop <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> <strong>that interacts intuitively with human cognition</strong>, exploring <strong>brain-<span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> interfaces, cognitive robotics, and semi-agentic <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> models</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Next-Gen Robotics & <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> Alignment</strong> – We focus on <strong>adaptive <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span>-powered robotics</strong>, ensuring machines <strong>learn, evolve, and interact naturally with human workflows</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong><span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> in Interdisciplinary Sciences</strong> – <span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span> operates at the intersection of <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span>, <strong>defense, music, linguistics, environmental sciences, archaeology, and quantum physics</strong>, proving that <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> is <strong>not confined to data—it is intelligence in its truest form</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong>Vedic Algorithms & Quantum Computation</strong> – Where <strong>ancient algorithmic principles outperform modern ML models</strong>, we infuse them into <strong><span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> architectures</strong>, unlocking <strong>faster, more efficient, and naturally intelligent computation</strong>.</p>
          <p><span class="text-yellow-400">✓</span> <strong><span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> for Strategic Decision-Making & Innovation</strong> – We build <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span>-driven systems that <strong>redefine business intelligence, global policy frameworks, and knowledge-based economic models</strong>, empowering leaders to <strong>make smarter, data-driven decisions</strong>.</p>
        </div>
      </div>
    `
  },
  howwework: {
    title: "How We Work",
    content: `
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-yellow-400 mb-4">
          <span class="calibri">H</span><span class="samarkan">ow</span> <span class="calibri">W</span><span class="samarkan">e</span> <span class="calibri">W</span><span class="samarkan">ork</span>: The <span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span> Ethos
        </h3>
        <div class="space-y-4">
          <p><strong>✤ Reimagining <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> as a Thought Process, Not Just a Codebase</strong> – Intelligence is <strong>not about repetition but evolution</strong>—we engineer <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> that <strong>adapts, learns, and expands human potential</strong>.</p>
          <p><strong>✤ Building Bridges Between Ancient & Future Sciences</strong> – Our research in <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> + Ancient Wisdom ensures that intelligence <strong>transcends time, restoring lost knowledge while shaping new frontiers</strong>.</p>
          <p><strong>✤ Breaking the Constraints of Traditional <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> Development</strong> – Our models operate <strong>beyond structured data</strong>, integrating <strong>multi-domain intelligence, abstract learning, and intuitive <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> processing</strong>.</p>
          <p><strong>✤ Scalable, Ethical & Explainable <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span></strong> – Every solution we build is <strong>transparent, adaptable, and ethically responsible</strong>, ensuring <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> is a <strong>tool for empowerment, not control</strong>.</p>
          <p><strong>✤ Pioneering the Next Scientific & Consciousness Renaissance</strong> – <span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span> is not just an <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> research lab—it is a movement that seeks to <strong>reshape intelligence through holistic, interdisciplinary innovation</strong>.</p>
        </div>
      </div>
    `
  },
  aadigenXway: {
    title: "The AadiGenX Way",
    content: `
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-yellow-400 mb-4">
          <span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span>: Awakening the Future of Intelligence
        </h3>
        <div class="space-y-4">
          <p><strong>✣ We are not just building <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span></strong>—we are <strong>redefining intelligence itself</strong>.</p>
          <p><strong>✣ We are decoding lost wisdom, aligning Robotics, and reshaping the future.</strong></p>
          <p><strong>✣ We are pushing <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></strong> beyond automation—into the realm of <strong>discovery, consciousness, and evolution</strong>.</p>
          <p><strong>✣ We are <span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span></strong>. We are the Future. And we are awakening the next generation.</p>
          <br />
          <p><strong>Unlock Your Future with <span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span></strong> – Be a Pioneer, Not Just a Learner</p>
          <p>At <span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span>, we <strong>don't</strong> just teach <span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span>—we <strong>engineer pioneers</strong> who will <strong>lead the next wave of intelligence, discovery, and interdisciplinary revolutions</strong>.</p>
          <p><span class="ai-brand"><span class="letter-A-ai">A</span><span class="letter-i-ai">i</span></span> is not just a skill—it is an evolving ecosystem of <strong>knowledge, innovation, and disruption</strong>.</p>
          <p>At <span class="aadigenx-brand"><span class="letter-A1">A</span><span class="letter-a1">a</span><span class="letter-a2">a</span><span class="letter-d1">d</span><span class="letter-i">i</span><span class="letter-G">G</span><span class="letter-e">e</span><span class="letter-n">n</span><span class="letter-X">X</span></span>, we ensure that <strong>every individual who joins us—whether a student, researcher, or professional—gets transformed into a future leader</strong>.</p>
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
