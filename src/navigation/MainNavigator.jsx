
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { CheckCircle, Calendar, PlusCircle, Award, BarChart2 } from 'react-native-feather';

// Screens
import TodayScreen from '../screens/TodayScreen';
import CalendarScreen from '../screens/CalendarScreen';
import AddHabitScreen from '../screens/AddHabitScreen';
import ProgressScreen from '../screens/ProgressScreen';
import AchievementsScreen from '../screens/AchievementsScreen';

const Tab = createBottomTabNavigator();

// Custom tab bar icon
const TabIcon = ({ focused, icon: Icon, label }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icon stroke={focused ? '#7C3AED' : '#9CA3AF'} width={24} height={24} />
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
        name="Calendar" 
        component={CalendarScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Calendar} label="Calendar" />
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
        name="Progress" 
        component={ProgressScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={BarChart2} label="Progress" />
          ),
        }}
      />
      <Tab.Screen 
        name="Achievements" 
        component={AchievementsScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Award} label="Achievements" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
