"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CursorFollow = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, 1000);
    }
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1]"
      onMouseDown={handleMouseDown}
      style={{ pointerEvents: 'none' }}
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ 
              scale: 0,
              x: ripple.x - 50,
              y: ripple.y - 50,
              opacity: 0.8,
            }}
            animate={{ 
              scale: 2,
              opacity: 0,
            }}
            exit={{ 
              scale: 2,
              opacity: 0,
            }}
            transition={{ 
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute w-[100px] h-[100px] pointer-events-none"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}; 