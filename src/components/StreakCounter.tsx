
import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StreakCounterProps {
  count: number;
  className?: string;
}

const StreakCounter = ({ count, className }: StreakCounterProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        delay: 0.6 
      }}
      className={cn(
        "flex items-center bg-amber-500/10 text-amber-600 px-3 py-1.5 rounded-full", 
        className
      )}
    >
      <Flame size={16} className="mr-1 text-amber-500" />
      <span className="text-sm font-medium">{count} day streak</span>
    </motion.div>
  );
};

export default StreakCounter;
