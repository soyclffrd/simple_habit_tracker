
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HabitHeader from '../components/HabitHeader';
import HabitList from '../components/HabitList';

const mockHabits = [
  { id: '1', name: 'Morning Meditation', icon: 'Sparkles', completed: false, streak: 5, category: 'wellness', time: '8:00 AM' },
  { id: '2', name: 'Read 30 pages', icon: 'BookOpen', completed: true, streak: 12, category: 'learning', time: '9:00 PM' },
  { id: '3', name: 'Workout Session', icon: 'Dumbbell', completed: false, streak: 3, category: 'fitness', time: '6:30 PM' },
  { id: '4', name: 'Drink Water', icon: 'Droplets', completed: true, streak: 8, category: 'health', time: 'All day' },
];

const TodayScreen = () => {
  const [habits, setHabits] = useState(mockHabits);

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <HabitHeader 
          badge="TODAY'S HABITS"
          title1="Keeping the" 
          title2="Streak Alive!" 
          description="Stay on track with your daily habits and build lasting routines."
        />
        
        <View style={styles.content}>
          <HabitList habits={habits} onToggle={toggleHabit} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
  },
  content: {
    marginTop: -80,
    paddingBottom: 100,
  },
});

export default TodayScreen;
