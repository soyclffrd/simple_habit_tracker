
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HabitHeader from '../components/HabitHeader';

const AddHabitScreen = () => {
  return (
    <View style={styles.container}>
      <HabitHeader 
        badge="NEW HABIT"
        title1="Create New" 
        title2="Habits!" 
        description="Add new habits to your routine and set your goals for success."
      />
      <View style={styles.content}>
        <Text style={styles.placeholder}>Add habit form coming soon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
  },
  content: {
    marginTop: -60,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    color: '#9CA3AF',
    fontSize: 16,
    padding: 20,
    backgroundColor: 'rgba(18, 18, 18, 0.8)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
});

export default AddHabitScreen;
