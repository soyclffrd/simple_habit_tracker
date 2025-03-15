
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HabitHeader = ({ badge, title1, title2, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>{title1}</Text>
        <Text style={styles.title2}>{title2}</Text>
      </View>
      
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 100,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  badgeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 20,
  },
  badgeText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
  titleContainer: {
    marginBottom: 12,
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  title2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7C3AED', // Purple color
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.4)',
    textAlign: 'center',
    maxWidth: '80%',
  },
});

export default HabitHeader;
