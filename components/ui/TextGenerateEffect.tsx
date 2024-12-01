"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// Simplified cn utility with improved type handling
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const wordsArray = words.split(" ");
  
  const animate = useCallback(() => {
    if (scopeRef.current) {
      const spans = scopeRef.current.querySelectorAll('span');
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.filter = filter ? 'blur(0px)' : 'none';
        }, index * (duration * 1000));
      });
    }
  }, [filter, duration]);
  
  useEffect(() => {
    animate();
  }, [animate]);
  
  const renderWords = () => {
    return (
      <motion.div ref={scopeRef}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx > 3 
                  ? "text-purple-500" 
                  : "dark:text-white text-black"
              } opacity-0 transition-all duration-300`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  
  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
