
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HabitHeader from '../components/HabitHeader';
import ContentContainer from '../components/ContentContainer';

const AchievementsScreen = () => {
  // Example achievements that would normally come from a database
  const achievements = [
    { id: 1, name: "Getting Started", description: "Create your first habit", unlocked: false },
    { id: 2, name: "Consistency", description: "Complete a habit for 7 days in a row", unlocked: false },
    { id: 3, name: "Habit Master", description: "Complete all habits for 30 days", unlocked: false },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HabitHeader 
          badge="Celebrate Success"
          title1="Your"
          title2="Achievements"
          description="Unlock achievements as you build consistency and reach your goals."
        />
        
        <View style={styles.contentSection}>
          <ContentContainer title="Achievements">
            {achievements.map((achievement) => (
              <View
                key={achievement.id}
                style={[
                  styles.achievementCard,
                  achievement.unlocked ? styles.unlockedCard : styles.lockedCard
                ]}
              >
                <View style={[
                  styles.iconContainer,
                  achievement.unlocked ? styles.unlockedIcon : styles.lockedIcon
                ]}>
                  <Text style={styles.iconText}>🏆</Text>
                </View>
                
                <View style={styles.achievementDetails}>
                  <Text style={[
                    styles.achievementName,
                    achievement.unlocked ? styles.unlockedName : styles.lockedName
                  ]}>
                    {achievement.name}
                  </Text>
                  <Text style={styles.achievementDescription}>
                    {achievement.description}
                  </Text>
                </View>
              </View>
            ))}
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
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
  },
  unlockedCard: {
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
    borderColor: 'rgba(124, 58, 237, 0.3)',
  },
  lockedCard: {
    backgroundColor: 'rgba(30, 30, 30, 0.4)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  unlockedIcon: {
    backgroundColor: 'rgba(124, 58, 237, 0.2)',
  },
  lockedIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  iconText: {
    fontSize: 20,
  },
  achievementDetails: {
    flex: 1,
  },
  achievementName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  unlockedName: {
    color: 'white',
  },
  lockedName: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  achievementDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.4)',
  },
});

export default AchievementsScreen;
