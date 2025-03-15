
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

interface DockProps {
  className?: string
  items: {
    icon: LucideIcon
    label: string
    path: string
  }[]
  activePath?: string // Added the activePath prop
}

interface DockIconButtonProps {
  icon: LucideIcon
  label: string
  path: string
  isActive?: boolean
  className?: string
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, path, isActive, className }, ref) => {
    const navigate = useNavigate();

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(path)}
        className={cn(
          "relative group p-3 rounded-lg",
          "hover:bg-secondary transition-colors",
          isActive && "bg-secondary",
          className
        )}
      >
        <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
        <span className={cn(
          "absolute -top-8 left-1/2 -translate-x-1/2",
          "px-2 py-1 rounded text-xs",
          "bg-popover text-popover-foreground",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity whitespace-nowrap pointer-events-none"
        )}>
          {label}
        </span>
      </motion.button>
    )
  }
)
DockIconButton.displayName = "DockIconButton"

export function Dock({ items, className, activePath }: DockProps) {
  const location = useLocation();
  // Use the provided activePath if available, otherwise use location.pathname
  const currentPath = activePath || location.pathname;
  
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={floatingAnimation}
        className={cn(
          "flex items-center gap-1 p-2 rounded-full",
          "backdrop-blur-lg border shadow-lg",
          "bg-background/80 border-border",
          "hover:shadow-xl transition-shadow duration-300",
          className
        )}
      >
        {items.map((item) => (
          <DockIconButton 
            key={item.label} 
            {...item} 
            isActive={currentPath === item.path} 
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
