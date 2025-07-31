import React from 'react';

const AadianPage = () => {
  return (
    <div className="w-full h-screen">
      <iframe 
        src="https://aadigenix.com/" 
        className="w-full h-full border-0"
        title="AadiGenix"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default AadianPage;