
import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const AddHabitPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge="Build Better Habits"
        title1="Create New"
        title2="Habit"
        description="Start your journey to consistency by adding a new habit to track."
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-[-100px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-background/10 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-20"
        >
          <h2 className="text-xl font-semibold text-white/90 mb-4">Create a new habit</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-white/70 text-sm">Habit Name</label>
              <input 
                type="text" 
                placeholder="e.g., Read for 30 minutes" 
                className="w-full bg-background/20 border border-white/20 rounded-lg px-4 py-2 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/70 text-sm">Description (Optional)</label>
              <textarea 
                placeholder="Why is this habit important to you?" 
                className="w-full bg-background/20 border border-white/20 rounded-lg px-4 py-2 text-white"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/70 text-sm">Frequency</label>
              <select className="w-full bg-background/20 border border-white/20 rounded-lg px-4 py-2 text-white">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Custom</option>
              </select>
            </div>
            
            <div className="pt-4">
              <Button className="w-full">Create Habit</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AddHabitPage;
