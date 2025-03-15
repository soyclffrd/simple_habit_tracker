
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import HabitHeader from '../components/HabitHeader';
import ContentContainer from '../components/ContentContainer';

const TodayScreen = () => {
  const today = new Date();
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HabitHeader 
          badge={format(today, 'EEEE, MMM d')}
          title1="Today's"
          title2="Habits"
          description="Complete your daily habits to build consistency and achieve your goals."
        />
        
        <View style={styles.contentSection}>
          <ContentContainer title="Your habits for today">
            <Text style={styles.emptyText}>No habits added yet. Add your first habit to get started!</Text>
          </ContentContainer>
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
  scrollContent: {
    flexGrow: 1,
  },
  contentSection: {
    marginTop: -50,
    paddingBottom: 40,
  },
  emptyText: {
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    paddingVertical: 20,
  },
});

export default TodayScreen;
