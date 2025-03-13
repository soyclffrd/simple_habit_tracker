
import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const AchievementsPage = () => {
  // Example achievements that would normally come from a database
  const achievements = [
    { id: 1, name: "Getting Started", description: "Create your first habit", unlocked: false },
    { id: 2, name: "Consistency", description: "Complete a habit for 7 days in a row", unlocked: false },
    { id: 3, name: "Habit Master", description: "Complete all habits for 30 days", unlocked: false },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge="Celebrate Success"
        title1="Your"
        title2="Achievements"
        description="Unlock achievements as you build consistency and reach your goals."
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-[-100px]">
        <div className="bg-background/10 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-20">
          <h2 className="text-xl font-semibold text-white/90 mb-4">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * achievement.id }}
                className={`p-4 rounded-lg border ${achievement.unlocked 
                  ? 'bg-primary/10 border-primary/30' 
                  : 'bg-background/20 border-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${achievement.unlocked 
                    ? 'bg-primary/20' 
                    : 'bg-background/30'}`}>
                    <Award className={`h-6 w-6 ${achievement.unlocked 
                      ? 'text-primary' 
                      : 'text-white/30'}`} />
                  </div>
                  <div>
                    <h3 className={`font-medium ${achievement.unlocked 
                      ? 'text-white' 
                      : 'text-white/50'}`}>
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-white/40">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
