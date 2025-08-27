
import React from 'react';

export const GallerySection = () => {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/lovable-uploads/436bbf9d-755e-48d5-b4da-3bedfa04fc6e.png)`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content Container - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-4xl mx-auto">
          <div className="bg-black/15 backdrop-blur-md rounded-lg p-6 sm:p-8 md:p-12 border border-white/10 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
              <span className="text-yellow-400">G</span>allery
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/80 mb-4 md:mb-6">
              <span className="font-light">C</span>
              <span className="font-bold">oming </span>
              <span className="font-light">S</span>
              <span className="font-bold">oon</span>
            </div>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
            <p className="text-white/60 mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Our visual journey through ancient wisdom and future technology powered by <span className="ai-brand"><span className="letter-A-ai">A</span><span className="letter-i-ai">i</span></span> is being curated.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Roll Bar Text */}
      <div className="absolute bottom-0 w-full bg-transparent z-10">
        <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-base sm:text-lg md:text-xl overflow-hidden">
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
};
