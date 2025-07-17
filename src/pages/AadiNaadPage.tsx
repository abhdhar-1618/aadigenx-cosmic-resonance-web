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
            {/* Founder 1 */}
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