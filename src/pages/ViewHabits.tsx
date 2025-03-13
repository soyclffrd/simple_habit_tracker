
import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

const ViewHabitsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge="All Your Habits"
        title1="View"
        title2="Habits"
        description="Manage all your habits in one place and track your progress."
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-[-100px]">
        <div className="bg-background/10 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-20">
          <h2 className="text-xl font-semibold text-white/90 mb-4">All Habits</h2>
          <div className="space-y-4">
            <p className="text-white/60">You haven't created any habits yet. Get started by adding your first habit!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHabitsPage;
