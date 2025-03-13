
import React, { useState } from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';
import { Button } from '@/components/ui/button';

// Example habit data
const demoHabits = [
  { id: 1, name: 'Morning Meditation', color: 'bg-primary/70', completedDates: [1, 3, 5, 7, 9, 11, 12, 14, 15, 17, 20, 21, 22, 25, 26, 28].map(day => new Date(new Date().getFullYear(), new Date().getMonth(), day)) },
  { id: 2, name: 'Read 30 minutes', color: 'bg-amber-500/70', completedDates: [2, 4, 5, 8, 10, 11, 13, 16, 19, 22, 23, 25, 27, 29].map(day => new Date(new Date().getFullYear(), new Date().getMonth(), day)) },
  { id: 3, name: 'Exercise', color: 'bg-emerald-500/70', completedDates: [1, 2, 5, 6, 8, 9, 12, 15, 16, 19, 20, 22, 23, 26, 29, 30].map(day => new Date(new Date().getFullYear(), new Date().getMonth(), day)) },
];

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedHabit, setSelectedHabit] = useState(demoHabits[0]);
  
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const isHabitCompletedOnDay = (habit, date) => {
    return habit.completedDates.some(completedDate => isSameDay(completedDate, date));
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric 
        badge="Track Your Progress"
        title1="Monthly"
        title2="Overview"
        description="See your habit completion history and track your consistency over time."
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-[-100px] mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-background/10 backdrop-blur-md border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <CalendarIcon className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-white/90">Calendar View</h2>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                onClick={prevMonth} 
                size="icon" 
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h3 className="text-lg font-medium text-white/80 w-36 text-center">
                {format(currentMonth, 'MMMM yyyy')}
              </h3>
              <Button 
                onClick={nextMonth} 
                size="icon" 
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {demoHabits.map(habit => (
                <motion.button 
                  key={habit.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedHabit(habit)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                    selectedHabit.id === habit.id 
                      ? 'bg-primary/20 border border-primary/30 text-white'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {habit.name}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map(day => (
              <div key={day} className="text-center text-white/50 text-sm py-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, i) => {
              const isCompleted = isHabitCompletedOnDay(selectedHabit, day);
              
              return (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center ${
                    isToday(day) 
                      ? 'border border-primary/30' 
                      : 'border border-white/5'
                  } ${
                    isCompleted 
                      ? `${selectedHabit.color} bg-opacity-20`
                      : 'bg-white/5'
                  } ${
                    !isSameMonth(day, currentMonth) ? 'opacity-30' : ''
                  }`}
                >
                  <span className={`text-sm ${
                    isToday(day) ? 'text-primary font-medium' : 'text-white/70'
                  }`}>
                    {format(day, 'd')}
                  </span>
                  
                  {isCompleted ? (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-1"
                    >
                      <Check className="h-3 w-3 text-emerald-500" />
                    </motion.div>
                  ) : (
                    isSameMonth(day, currentMonth) && (
                      <div className="mt-1">
                        <X className="h-3 w-3 text-white/20" />
                      </div>
                    )
                  )}
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <h3 className="text-lg font-medium text-white/80 mb-3">
              {selectedHabit.name} Statistics
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="text-white/50 text-sm mb-1">Completion Rate</h4>
                <p className="text-2xl font-semibold text-white">
                  {Math.round((selectedHabit.completedDates.length / days.length) * 100)}%
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="text-white/50 text-sm mb-1">Days Completed</h4>
                <p className="text-2xl font-semibold text-white">
                  {selectedHabit.completedDates.filter(date => 
                    isSameMonth(date, currentMonth)
                  ).length}
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="text-white/50 text-sm mb-1">Longest Streak</h4>
                <p className="text-2xl font-semibold text-white">7</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarPage;
