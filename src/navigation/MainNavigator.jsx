
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { Calendar, CheckCircle, PlusCircle, Award, BarChart2 } from 'react-native-svg';

// Screens
import TodayScreen from '../screens/TodayScreen';
import ViewHabitsScreen from '../screens/ViewHabitsScreen';
import AddHabitScreen from '../screens/AddHabitScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProgressScreen from '../screens/ProgressScreen';
import AchievementsScreen from '../screens/AchievementsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Custom tab bar icon
const TabIcon = ({ focused, icon: Icon, label }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icon width={24} height={24} color={focused ? '#7C3AED' : '#9CA3AF'} />
      <Text style={{ color: focused ? '#7C3AED' : '#9CA3AF', fontSize: 12, marginTop: 4 }}>
        {label}
      </Text>
    </View>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#333',
          height: 60,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen 
        name="Today" 
        component={TodayScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={CheckCircle} label="Today" />
          ),
        }}
      />
      <Tab.Screen 
        name="ViewHabits" 
        component={ViewHabitsScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={() => <Text style={{fontSize: 24, color: focused ? '#7C3AED' : '#9CA3AF'}}>☰</Text>} label="Habits" />
          ),
        }}
      />
      <Tab.Screen 
        name="AddHabit" 
        component={AddHabitScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={PlusCircle} label="Add" />
          ),
        }}
      />
      <Tab.Screen 
        name="Calendar" 
        component={CalendarScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Calendar} label="Calendar" />
          ),
        }}
      />
      <Tab.Screen 
        name="Progress" 
        component={ProgressScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={BarChart2} label="Progress" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
