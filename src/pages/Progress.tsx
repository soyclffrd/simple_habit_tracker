
import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

const ProgressPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge="Your Journey"
        title1="Habit"
        title2="Progress"
        description="See how consistent you've been with your habits over time."
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-[-100px]">
        <div className="bg-background/10 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-20">
          <h2 className="text-xl font-semibold text-white/90 mb-4">Your Progress</h2>
          <div className="space-y-4">
            <p className="text-white/60">Start tracking habits to see your progress charts here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
