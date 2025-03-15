
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';
import HabitHeader from '../components/HabitHeader';
import ContentContainer from '../components/ContentContainer';

// Example habit data
const demoHabits = [
  { 
    id: 1, 
    name: 'Morning Meditation', 
    color: '#7C3AED', 
    completedDates: [1, 3, 5, 7, 9, 11, 12, 14, 15, 17, 20, 21, 22, 25, 26, 28].map(day => new Date(new Date().getFullYear(), new Date().getMonth(), day))
  },
  { 
    id: 2, 
    name: 'Read 30 minutes', 
    color: '#F59E0B', 
    completedDates: [2, 4, 5, 8, 10, 11, 13, 16, 19, 22, 23, 25, 27, 29].map(day => new Date(new Date().getFullYear(), new Date().getMonth(), day))
  },
  { 
    id: 3, 
    name: 'Exercise', 
    color: '#10B981', 
    completedDates: [1, 2, 5, 6, 8, 9, 12, 15, 16, 19, 20, 22, 23, 26, 29, 30].map(day => new Date(new Date().getFullYear(), new Date().getMonth(), day))
  },
];

const CalendarScreen = () => {
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HabitHeader 
          badge="Track Your Progress"
          title1="Monthly"
          title2="Overview"
          description="See your habit completion history and track your consistency over time."
        />
        
        <View style={styles.contentSection}>
          <ContentContainer title="Calendar View">
            <View style={styles.calendarHeader}>
              <TouchableOpacity onPress={prevMonth} style={styles.arrowButton}>
                <Text style={styles.arrowText}>←</Text>
              </TouchableOpacity>
              
              <Text style={styles.monthTitle}>
                {format(currentMonth, 'MMMM yyyy')}
              </Text>
              
              <TouchableOpacity onPress={nextMonth} style={styles.arrowButton}>
                <Text style={styles.arrowText}>→</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.habitsScroll}>
              {demoHabits.map(habit => (
                <TouchableOpacity 
                  key={habit.id}
                  onPress={() => setSelectedHabit(habit)}
                  style={[
                    styles.habitButton,
                    selectedHabit.id === habit.id && styles.selectedHabitButton,
                    { borderColor: habit.color }
                  ]}
                >
                  <Text 
                    style={[
                      styles.habitButtonText,
                      selectedHabit.id === habit.id && styles.selectedHabitText
                    ]}
                  >
                    {habit.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            
            <View style={styles.calendarContainer}>
              <View style={styles.weekdayHeader}>
                {dayNames.map(day => (
                  <View key={day} style={styles.weekdayCell}>
                    <Text style={styles.weekdayText}>{day}</Text>
                  </View>
                ))}
              </View>
              
              <View style={styles.calendarGrid}>
                {days.map((day, i) => {
                  const isCompleted = isHabitCompletedOnDay(selectedHabit, day);
                  
                  return (
                    <View 
                      key={i}
                      style={[
                        styles.dayCell,
                        isToday(day) && styles.todayCell,
                        !isSameMonth(day, currentMonth) && styles.differentMonthCell,
                        isCompleted && { 
                          backgroundColor: `${selectedHabit.color}30`,
                          borderColor: selectedHabit.color
                        }
                      ]}
                    >
                      <Text style={[
                        styles.dayNumber,
                        isToday(day) && styles.todayText
                      ]}>
                        {format(day, 'd')}
                      </Text>
                      
                      {isCompleted ? (
                        <View style={styles.completionIndicator}>
                          <Text style={styles.checkmark}>✓</Text>
                        </View>
                      ) : (
                        isSameMonth(day, currentMonth) && (
                          <View style={styles.emptyIndicator}>
                            <Text style={styles.xmark}>×</Text>
                          </View>
                        )
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
            
            <View style={styles.statsContainer}>
              <Text style={styles.statsTitle}>{selectedHabit.name} Statistics</Text>
              
              <View style={styles.statsGrid}>
                <View style={styles.statCard}>
                  <Text style={styles.statLabel}>Completion Rate</Text>
                  <Text style={styles.statValue}>
                    {Math.round((selectedHabit.completedDates.length / days.length) * 100)}%
                  </Text>
                </View>
                
                <View style={styles.statCard}>
                  <Text style={styles.statLabel}>Days Completed</Text>
                  <Text style={styles.statValue}>
                    {selectedHabit.completedDates.filter(date => 
                      isSameMonth(date, currentMonth)
                    ).length}
                  </Text>
                </View>
                
                <View style={styles.statCard}>
                  <Text style={styles.statLabel}>Longest Streak</Text>
                  <Text style={styles.statValue}>7</Text>
                </View>
              </View>
            </View>
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
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  arrowButton: {
    padding: 8,
  },
  arrowText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
  },
  monthTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  habitsScroll: {
    marginBottom: 16,
  },
  habitButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(30, 30, 30, 0.6)',
  },
  selectedHabitButton: {
    backgroundColor: 'rgba(124, 58, 237, 0.2)', // Default to purple, will be overridden by habit color
  },
  habitButtonText: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  selectedHabitText: {
    color: 'white',
    fontWeight: '500',
  },
  calendarContainer: {
    marginBottom: 20,
  },
  weekdayHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekdayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  weekdayText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    margin: 1,
    backgroundColor: 'rgba(30, 30, 30, 0.4)',
  },
  todayCell: {
    borderColor: '#7C3AED',
    borderWidth: 1,
  },
  differentMonthCell: {
    opacity: 0.3,
  },
  dayNumber: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  todayText: {
    color: '#7C3AED',
    fontWeight: '600',
  },
  completionIndicator: {
    marginTop: 2,
  },
  checkmark: {
    color: '#10B981',
    fontSize: 14,
  },
  emptyIndicator: {
    marginTop: 2,
  },
  xmark: {
    color: 'rgba(255, 255, 255, 0.2)',
    fontSize: 14,
  },
  statsContainer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 16,
  },
  statsTitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(30, 30, 30, 0.6)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    marginHorizontal: 4,
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default CalendarScreen;
