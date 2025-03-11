
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, BookOpen, Dumbbell, Droplets, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface HabitProps {
  habit: {
    id: string;
    name: string;
    icon: string;
    completed: boolean;
    streak: number;
    category: string;
    time: string;
  };
  onToggle: () => void;
}

const HabitCard = ({ habit, onToggle }: HabitProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen size={18} />;
      case 'Dumbbell':
        return <Dumbbell size={18} />;
      case 'Droplets':
        return <Droplets size={18} />;
      case 'Sparkles':
        return <Sparkles size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  const categoryColors = {
    wellness: 'bg-blue-100 text-blue-800',
    learning: 'bg-purple-100 text-purple-800',
    fitness: 'bg-green-100 text-green-800',
    health: 'bg-teal-100 text-teal-800',
  };

  const categoryColor = categoryColors[habit.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800';

  return (
    <Card 
      className={cn(
        "card-hover overflow-hidden border",
        habit.completed ? "border-primary/30 bg-primary/5" : "border-border"
      )}
    >
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggle}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors",
              habit.completed 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-muted-foreground"
            )}
          >
            {habit.completed ? <Check size={18} /> : getIcon(habit.icon)}
          </motion.div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className={cn(
                "font-medium transition-colors",
                habit.completed ? "text-foreground" : "text-foreground"
              )}>
                {habit.name}
              </h3>
              <span className={cn(
                "inline-flex text-xs px-2 py-0.5 rounded-full", 
                categoryColor
              )}>
                {habit.category}
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <Clock size={12} />
              <span>{habit.time}</span>
              <span className="mx-1.5">•</span>
              <span>{habit.streak} day streak</span>
            </div>
          </div>
        </div>
        
        <motion.div 
          whileTap={{ scale: 0.9 }}
          onClick={onToggle}
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all",
            habit.completed 
              ? "border-primary bg-primary" 
              : "border-muted-foreground"
          )}
        >
          {habit.completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Check size={14} className="text-primary-foreground" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </Card>
  );
};

export default HabitCard;
