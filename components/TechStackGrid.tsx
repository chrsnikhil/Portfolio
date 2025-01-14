"use client";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiArduino,
  SiTailwindcss, 
  SiC, 
  SiFramer,
  SiGit,
  SiVercel,
  SiFlask,
  SiFigma,
  
} from "react-icons/si";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaJava } from "react-icons/fa";

// Define highlight colors for each tech
const highlightColors = [
  "hover:bg-blue-400/30",   // React - Brighter blue
  "hover:bg-gray-300/30",   // Next.js - Lighter gray instead of white
  "hover:bg-blue-300/30",   // TypeScript - Lighter blue
  "hover:bg-cyan-300/30",   // Tailwind - Brighter cyan
  "hover:bg-cyan-400/30",  // Node.js - Brighter green
  "hover:bg-yellow-300/30", // Prisma - Bright indigo instead of slate
  "hover:bg-orange-400/30",// MongoDB - Bright emerald
  "hover:bg-sky-400/30",    // PostgreSQL - Bright sky blue
  "hover:bg-orange-400/30", // Git - Brighter orange
  "hover:bg-violet-400/30", // Vercel - Bright violet instead of slate
  "hover:bg-fuchsia-400/30",// Vite - Bright fuchsia
  "hover:bg-rose-400/30",   // Framer - Bright rose instead of pink
];

export function TechStackGrid() {
  const words = "Tech Stack";

  return (
    <div className="py-20 px-8">
      <div className="mb-10">
        <motion.div
          className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold font-golos drop-shadow-xl text-white"
          whileHover={{ scale: 1.1 }}
        >
          <TextGenerateEffect 
            words={words} 
            className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 drop-shadow-xl font-golos"
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {techStack.map((item, i) => (
          <motion.div
            key={i}
            className={`flex flex-col items-center justify-center h-32 border border-transparent rounded-lg bg-white/10 backdrop-blur-[8px] transition-all duration-300 shadow-lg border border-white/30 will-change-transform ${highlightColors[i]}`}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            initial={false}
          >
            <div className="text-4xl text-white drop-shadow-xl">{item.icon}</div>
            <span className="mt-2 text-sm text-white font-golos drop-shadow-lg font-medium tracking-wide">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const techStack = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Arduino", icon: <SiArduino /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C programming", icon: <SiC /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Framer", icon: <SiFramer /> },
];