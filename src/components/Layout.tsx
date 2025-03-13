
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Dock } from '@/components/ui/dock';
import { 
  CheckCircle2, 
  Calendar, 
  PlusCircle, 
  Award, 
  Sparkles 
} from 'lucide-react';

const Layout = () => {
  const navItems = [
    { icon: CheckCircle2, label: "Today", path: "/today" },
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: PlusCircle, label: "Add Habit", path: "/add-habit" },
    { icon: Award, label: "Progress", path: "/progress" },
    { icon: Sparkles, label: "Achievements", path: "/achievements" },
  ];

  return (
    <>
      <Outlet />
      <Dock items={navItems} />
    </>
  );
};

export default Layout;
