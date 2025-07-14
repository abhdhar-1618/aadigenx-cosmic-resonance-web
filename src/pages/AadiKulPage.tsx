import React from 'react';
import { Navigation } from '@/components/Navigation';

const AadiKulPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="kul" />
      <div className="pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">K</span><span className="samarkan">ul</span>
          </h1>
          <p className="text-xl text-muted-foreground">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default AadiKulPage;