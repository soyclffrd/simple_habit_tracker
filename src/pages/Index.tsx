import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};
const HomePage = () => {
  const today = new Date();
  const greeting = getGreeting();
  const navigate = useNavigate();
  return <div className="flex flex-col min-h-screen bg-[#030303]">
      <HeroGeometric badge={format(today, 'EEEE, MMM d')} title1={greeting} title2="Ready to build habits?" description="Track your progress, build consistency, and achieve your goals with our simple habit tracking system." />
      
      
      
      
    </div>;
};
export default HomePage;