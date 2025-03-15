
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HabitHeader from '../components/HabitHeader';
import ContentContainer from '../components/ContentContainer';

const ViewHabitsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HabitHeader 
          badge="All Your Habits"
          title1="View"
          title2="Habits"
          description="Manage all your habits in one place and track your progress."
        />
        
        <View style={styles.contentSection}>
          <ContentContainer title="All Habits">
            <Text style={styles.emptyText}>You haven't created any habits yet. Get started by adding your first habit!</Text>
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

export default ViewHabitsScreen;
