
import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const HomePage = () => {
  const today = new Date();
  const greeting = getGreeting();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge={format(today, 'EEEE, MMM d')}
        title1={greeting}
        title2="Ready to build habits?"
        description="Track your progress, build consistency, and achieve your goals with our simple habit tracking system."
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Button 
            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            onClick={() => navigate("/add-habit")}
          >
            Get Started
          </Button>
          <Button 
            className="px-6 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 font-medium hover:bg-white/10 transition-colors"
            onClick={() => navigate("/view-habits")}
          >
            View Habits
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/30 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-1.5 h-8 rounded-full border border-white/20 flex justify-center overflow-hidden"
          >
            <motion.div className="w-1 h-2 bg-white/40 rounded-full mt-1" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
