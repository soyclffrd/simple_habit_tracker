
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HabitHeader from '../components/HabitHeader';
import ContentContainer from '../components/ContentContainer';

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HabitHeader 
          badge="Your Journey"
          title1="Habit"
          title2="Progress"
          description="See how consistent you've been with your habits over time."
        />
        
        <View style={styles.contentSection}>
          <ContentContainer title="Your Progress">
            <Text style={styles.emptyText}>Start tracking habits to see your progress charts here.</Text>
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

export default ProgressScreen;
