"use client";

import React from 'react';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const photographyItems = [
  {
    title: "Blushing Skies",
    description: "The sky almost seems like it is blushing when it is sunkissed",
    image: "/about/Sunrise.jpg"
  },
  {
    title: "Footprints of Freedom",
    description: "Long walks on the beach when you come back home",
    image: "/about/footprint.jpg"
  },
  {
    title: "Sunset to my Struggle",
    description: "Nothing beats a sunset after a long tiring day",
    image: "/about/Hostel Sunset.jpg"
  },
  {
    title: "Anything for Ellie",
    description: "A Father who sacrifices his life for his so-called daughter",
    image: "/about/tlou1.jpg"
  },
  {
    title: "The Hunter chases the Spider",
    description: "With Great power comes Great Responsibility",
    image: "/about/spidey.jpg"
  },
  {
    title: "BrotherHood",
    description: "Tommy is that you?",
    image: "/about/tlou2.jpg"
  }
];

export function PhotographySection() {
  return (
    <div className="py-20 px-8">
      <div className="mb-10">
        <TextGenerateEffect 
          words="My Photography" 
          className="text-center text-[32px] md:text-[48px] lg:text-[56px] font-golos tracking-tight text-white"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {photographyItems.map((item, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto rounded-xl p-6 border border-white/[0.15]" style={{
              background: "linear-gradient(145deg, rgba(26, 27, 36, 0.95), rgba(40, 41, 54, 0.98))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)"
            }}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white font-golos"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2 font-golos"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={item.title}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
} 