
import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { format } from 'date-fns';

const TodayPage = () => {
  const today = new Date();
  
  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge={format(today, 'EEEE, MMM d')}
        title1="Today's"
        title2="Habits"
        description="Complete your daily habits to build consistency and achieve your goals."
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-[-100px]">
        <div className="bg-background/10 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-20">
          <h2 className="text-xl font-semibold text-white/90 mb-4">Your habits for today</h2>
          <div className="space-y-4">
            <p className="text-white/60">No habits added yet. Add your first habit to get started!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayPage;
