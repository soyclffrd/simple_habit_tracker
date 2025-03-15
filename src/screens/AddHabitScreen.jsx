
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import HabitHeader from '../components/HabitHeader';
import ContentContainer from '../components/ContentContainer';

const AddHabitScreen = () => {
  const [habitName, setHabitName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('Daily');

  const handleCreateHabit = () => {
    // Create habit logic would go here
    console.log({ habitName, description, frequency });
    // Reset form
    setHabitName('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HabitHeader 
          badge="Build Better Habits"
          title1="Create New"
          title2="Habit"
          description="Start your journey to consistency by adding a new habit to track."
        />
        
        <View style={styles.contentSection}>
          <ContentContainer title="Create a new habit">
            <View style={styles.formContainer}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Habit Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., Read for 30 minutes"
                  placeholderTextColor="rgba(255, 255, 255, 0.3)"
                  value={habitName}
                  onChangeText={setHabitName}
                />
              </View>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>Description (Optional)</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Why is this habit important to you?"
                  placeholderTextColor="rgba(255, 255, 255, 0.3)"
                  multiline
                  numberOfLines={3}
                  value={description}
                  onChangeText={setDescription}
                />
              </View>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>Frequency</Text>
                <View style={styles.frequencyContainer}>
                  {['Daily', 'Weekly', 'Custom'].map((option) => (
                    <TouchableOpacity 
                      key={option}
                      style={[
                        styles.frequencyOption, 
                        frequency === option && styles.selectedFrequency
                      ]}
                      onPress={() => setFrequency(option)}
                    >
                      <Text 
                        style={[
                          styles.frequencyText,
                          frequency === option && styles.selectedFrequencyText
                        ]}
                      >
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              
              <TouchableOpacity 
                style={styles.createButton}
                onPress={handleCreateHabit}
              >
                <Text style={styles.createButtonText}>Create Habit</Text>
              </TouchableOpacity>
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
  formContainer: {
    width: '100%',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    color: 'white',
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  frequencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frequencyOption: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  selectedFrequency: {
    backgroundColor: 'rgba(124, 58, 237, 0.2)',
    borderColor: '#7C3AED',
  },
  frequencyText: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  selectedFrequencyText: {
    color: '#7C3AED',
    fontWeight: '600',
  },
  createButton: {
    backgroundColor: '#7C3AED',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddHabitScreen;
