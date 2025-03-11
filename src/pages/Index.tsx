
import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { 
  CheckCircle2, 
  PlusCircle, 
  Calendar, 
  Award,
  Sparkles
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const HomePage = () => {
  const isMobile = useIsMobile();
  const today = new Date();
  const greeting = getGreeting();

  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge={format(today, 'EEEE, MMM d')}
        title1={greeting}
        title2="Ready to build habits?"
        description="Track your progress, build consistency, and achieve your goals with our simple habit tracking system."
      />
      
      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border p-4 flex justify-around items-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 30 }}
      >
        <Button variant="ghost" className="flex flex-col items-center px-4">
          <CheckCircle2 size={24} className="text-primary" />
          <span className="text-xs mt-1">Today</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center px-4">
          <Calendar size={24} className="text-muted-foreground" />
          <span className="text-xs mt-1">Calendar</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center px-4">
          <Award size={24} className="text-muted-foreground" />
          <span className="text-xs mt-1">Progress</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default HomePage;
