
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Check, Clock, BookOpen, Dumbbell, Droplets, Sparkles } from 'react-native-feather';

const HabitCard = ({ habit, onToggle }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen stroke="#9CA3AF" width={18} height={18} />;
      case 'Dumbbell':
        return <Dumbbell stroke="#9CA3AF" width={18} height={18} />;
      case 'Droplets':
        return <Droplets stroke="#9CA3AF" width={18} height={18} />;
      case 'Sparkles':
        return <Sparkles stroke="#9CA3AF" width={18} height={18} />;
      default:
        return <Sparkles stroke="#9CA3AF" width={18} height={18} />;
    }
  };

  const getCategoryStyle = (category) => {
    switch (category) {
      case 'wellness':
        return styles.categoryWellness;
      case 'learning':
        return styles.categoryLearning;
      case 'fitness':
        return styles.categoryFitness;
      case 'health':
        return styles.categoryHealth;
      default:
        return styles.categoryDefault;
    }
  };

  const getCategoryTextStyle = (category) => {
    switch (category) {
      case 'wellness':
        return styles.categoryWellnessText;
      case 'learning':
        return styles.categoryLearningText;
      case 'fitness':
        return styles.categoryFitnessText;
      case 'health':
        return styles.categoryHealthText;
      default:
        return styles.categoryDefaultText;
    }
  };

  return (
    <View style={[styles.card, habit.completed && styles.cardCompleted]}>
      <View style={styles.cardContent}>
        <TouchableOpacity 
          style={[styles.iconContainer, habit.completed && styles.iconContainerCompleted]} 
          onPress={onToggle}
        >
          {habit.completed ? <Check stroke="#fff" width={18} height={18} /> : getIcon(habit.icon)}
        </TouchableOpacity>
        
        <View style={styles.habitInfo}>
          <View style={styles.titleRow}>
            <Text style={styles.habitName}>{habit.name}</Text>
            <View style={[styles.categoryBadge, getCategoryStyle(habit.category)]}>
              <Text style={[styles.categoryText, getCategoryTextStyle(habit.category)]}>
                {habit.category}
              </Text>
            </View>
          </View>
          
          <View style={styles.habitMeta}>
            <Clock stroke="#6B7280" width={12} height={12} />
            <Text style={styles.metaText}>{habit.time}</Text>
            <Text style={styles.metaDot}>•</Text>
            <Text style={styles.metaText}>{habit.streak} day streak</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={[styles.checkButton, habit.completed && styles.checkButtonCompleted]} 
          onPress={onToggle}
        >
          {habit.completed && <Check stroke="#fff" width={14} height={14} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(18, 18, 18, 0.8)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    marginBottom: 12,
  },
  cardCompleted: {
    borderColor: 'rgba(124, 58, 237, 0.3)',
    backgroundColor: 'rgba(124, 58, 237, 0.05)',
  },
  cardContent: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerCompleted: {
    backgroundColor: '#7C3AED',
  },
  habitInfo: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  habitName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  habitMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  metaDot: {
    fontSize: 12,
    color: '#6B7280',
    marginHorizontal: 6,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  categoryWellness: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
  categoryLearning: {
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
  },
  categoryFitness: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
  },
  categoryHealth: {
    backgroundColor: 'rgba(20, 184, 166, 0.1)',
  },
  categoryDefault: {
    backgroundColor: 'rgba(107, 114, 128, 0.1)',
  },
  categoryWellnessText: {
    color: '#60A5FA',
    fontSize: 10,
    fontWeight: '500',
  },
  categoryLearningText: {
    color: '#A78BFA',
    fontSize: 10,
    fontWeight: '500',
  },
  categoryFitnessText: {
    color: '#34D399',
    fontSize: 10,
    fontWeight: '500',
  },
  categoryHealthText: {
    color: '#2DD4BF',
    fontSize: 10,
    fontWeight: '500',
  },
  categoryDefaultText: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '500',
  },
  checkButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6B7280',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkButtonCompleted: {
    borderColor: '#7C3AED',
    backgroundColor: '#7C3AED',
  },
});

export default HabitCard;
