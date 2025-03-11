
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { 
  Calendar, 
  CheckCircle2, 
  PlusCircle, 
  BarChart3,
  Settings,
  Award,
  TrendingUp,
  Sparkles
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HabitCard from '@/components/HabitCard';
import StreakCounter from '@/components/StreakCounter';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock data - will be replaced with AsyncStorage in future implementation
const MOCK_HABITS = [
  { 
    id: '1', 
    name: 'Morning Meditation', 
    icon: 'Sparkles',
    completed: true, 
    streak: 12,
    category: 'wellness',
    time: '7:00 AM'
  },
  { 
    id: '2', 
    name: 'Read for 30 mins', 
    icon: 'BookOpen',
    completed: false, 
    streak: 5,
    category: 'learning',
    time: '9:00 PM'
  },
  { 
    id: '3', 
    name: 'Workout', 
    icon: 'Dumbbell',
    completed: true, 
    streak: 8,
    category: 'fitness',
    time: '6:00 PM'
  },
  { 
    id: '4', 
    name: 'Drink 8 glasses of water', 
    icon: 'Droplets',
    completed: false, 
    streak: 3,
    category: 'health',
    time: 'All day'
  },
];

const HomePage = () => {
  const isMobile = useIsMobile();
  const [progress, setProgress] = useState(50);
  const [greeting, setGreeting] = useState('');
  const [habits, setHabits] = useState(MOCK_HABITS);
  const [longestStreak, setLongestStreak] = useState(12);
  const today = new Date();
  
  // Set greeting based on time of day
  useEffect(() => {
    const hour = today.getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }

    // Calculate progress
    const completedHabits = habits.filter(habit => habit.completed).length;
    const newProgress = Math.round((completedHabits / habits.length) * 100);
    setProgress(newProgress);

    // Find longest streak
    const maxStreak = Math.max(...habits.map(habit => habit.streak));
    setLongestStreak(maxStreak);
  }, [habits]);

  const toggleHabitCompletion = (id: string) => {
    setHabits(prevHabits => 
      prevHabits.map(habit => 
        habit.id === id 
          ? { 
              ...habit, 
              completed: !habit.completed,
              streak: !habit.completed ? habit.streak + 1 : habit.streak - 1
            } 
          : habit
      )
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-32">
      <motion.div 
        className="pt-12 pb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-start mb-2">
          <div>
            <motion.div 
              className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles size={12} className="mr-1" />
              <span>{format(today, 'EEEE, MMM d')}</span>
            </motion.div>
            <motion.h1 
              className="text-3xl font-display font-bold text-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {greeting}
            </motion.h1>
            <motion.p 
              className="text-muted-foreground mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Track your daily progress
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <Button variant="outline" size="icon" className="rounded-full mr-2">
              <Settings size={20} />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass p-5 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-foreground/70 text-sm mb-1">Today's Progress</p>
                <h3 className="text-2xl font-bold text-foreground">{progress}%</h3>
              </div>
              <StreakCounter count={longestStreak} />
            </div>
            <Progress value={progress} className="h-2 mt-1" />
          </Card>
        </motion.div>
      </motion.div>

      <Tabs defaultValue="today" className="mt-6">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="all">All Habits</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {habits.map((habit) => (
              <motion.div key={habit.id} variants={itemVariants}>
                <HabitCard 
                  habit={habit} 
                  onToggle={() => toggleHabitCompletion(habit.id)} 
                />
              </motion.div>
            ))}
            <motion.div 
              variants={itemVariants}
              className="mt-4 flex justify-center"
            >
              <Button className="w-full rounded-xl flex items-center justify-center gap-2 h-14">
                <PlusCircle size={20} />
                <span>Add New Habit</span>
              </Button>
            </motion.div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="all">
          <div className="text-center py-8">
            <BarChart3 size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">All Habits View</h3>
            <p className="text-muted-foreground">Coming in the next version</p>
          </div>
        </TabsContent>
        
        <TabsContent value="stats">
          <div className="text-center py-8">
            <TrendingUp size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Statistics View</h3>
            <p className="text-muted-foreground">Coming in the next version</p>
          </div>
        </TabsContent>
      </Tabs>

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
