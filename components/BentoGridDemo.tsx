"use client";

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub } from 'react-icons/fa';

type BentoItem = {
  title: string;
  description: string;
  header: React.ReactNode;
  className?: string;
};

export const BentoGridDemo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-golos">
        My Projects
      </h2>
      <BentoGrid className="mx-auto max-w-6xl">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            isVisible={isMounted}
            index={i}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-4 max-w-7xl mx-auto px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  title,
  description,
  header,
  isVisible,
  index,
}: {
  title?: string;
  description?: string;
  header?: React.ReactNode;
  isVisible: boolean;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento cursor-pointer relative overflow-hidden border border-white/[0.15] hover:scale-[1.02] transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        background: "linear-gradient(145deg, rgba(26, 27, 36, 0.95), rgba(40, 41, 54, 0.98))",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 z-10 bg-black/20" />
        {header}
      </div>
      <div className="relative z-20 h-full w-full p-4">
        <div className="h-full w-full">
          <h2 className="font-golos text-xl font-bold text-white mt-4">{title}</h2>
          <p className="font-golos text-sm text-neutral-300 mt-2">{description}</p>
          {index === 0 && (
            <a href="https://taligntest.onrender.com/" target="_blank" rel="noopener noreferrer">
              <button
                className="absolute bottom-4 right-4 px-4 py-2 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, rgba(26, 27, 36, 0.95), rgba(40, 41, 54, 0.98))",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
                  color: "white"
                }}
              >
                Live Demo
              </button>
            </a>
          )}
          {index === 1 && (
            <a href="https://github.com/your-repo-url" target="_blank" rel="noopener noreferrer">
              <button
                className="absolute bottom-4 right-4 px-4 py-2 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, rgba(26, 27, 36, 0.95), rgba(40, 41, 54, 0.98))",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
                  color: "white"
                }}
              >
                <FaGithub />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const items: BentoItem[] = [
  {
    title: "TalignChat",
    description: "An Ephemerel Messaging Application",
    header: <Image src="/about/TalignChat.png" alt="Full Stack" width={500} height={500} className="object-cover w-full h-full opacity-50" />,
  },
  {
    title: "Pokemon XPLORE",
    description: "A Pokemon ROM-Hack made for the XPLORE Symposium 2024",
    header: <Image src="/about/pokemon.jpg" alt="UI/UX" width={500} height={500} className="object-cover w-full h-full opacity-50" />,
  },
  {
    title: "Talign",
    description: "A Matchmaking app to find your hackathon teammates",
    header: <Image src="/about/black.jpg" alt="Mobile" width={500} height={500} className="object-cover w-full h-full opacity-50" />,
  },
  {
    title: "Parkin",
    description: "A Parking service based application that allows you to book your parking space in a city",
    header: <Image src="/about/black.jpg" alt="Cloud" width={500} height={500} className="object-cover w-full h-full opacity-50" />,
  },
  {
    title: "In Development",
    description: "Development in Progress",
    header: <Image src="/about/black.jpg" alt="DevOps" width={500} height={500} className="object-cover w-full h-full opacity-50" />,
  },
  {
    title: "In Development",
    description: "Development in Progress",
    header: <Image src="/about/black.jpg" alt="API" width={500} height={500} className="object-cover w-full h-full opacity-50" />,
  }
]; 