
import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

const CalendarPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge="Track Your Progress"
        title1="Monthly"
        title2="Overview"
        description="See your habit completion history and track your consistency over time."
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-[-100px]">
        <div className="bg-background/10 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-20">
          <h2 className="text-xl font-semibold text-white/90 mb-4">Calendar View</h2>
          <div className="space-y-4">
            <p className="text-white/60">Your habit calendar will appear here once you start tracking habits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
