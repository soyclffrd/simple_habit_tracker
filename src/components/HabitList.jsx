
import React from 'react';
import { View, StyleSheet } from 'react-native';
import HabitCard from './HabitCard';

const HabitList = ({ habits, onToggle }) => {
  return (
    <View style={styles.container}>
      {habits.map(habit => (
        <HabitCard 
          key={habit.id}
          habit={habit}
          onToggle={() => onToggle(habit.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 12,
  },
});

export default HabitList;
