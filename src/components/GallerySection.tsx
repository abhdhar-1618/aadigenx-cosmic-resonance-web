
import React from 'react';

export const GallerySection = () => {
  return (
    <div 
      className="min-h-screen pt-16 md:pt-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/lovable-uploads/436bbf9d-755e-48d5-b4da-3bedfa04fc6e.png)`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="text-center px-4 relative z-10">
        <div className="bg-black/5 backdrop-blur-md rounded-lg p-6 md:p-12 border border-white/10 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            <span className="text-yellow-400">G</span>allery
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-4 md:mb-6">
            <span className="font-light">C</span>
            <span className="font-bold">oming </span>
            <span className="font-light">S</span>
            <span className="font-bold">oon</span>
          </div>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
          <p className="text-white/60 mt-4 md:mt-6 text-base md:text-lg leading-relaxed">
            Our visual journey through ancient wisdom and future technology powered by <span className="ai-brand"><span className="letter-A-ai">A</span><span className="letter-i-ai">i</span></span> is being curated.
          </p>
        </div>
      </div>
    </div>
  );
};
