"use client";

import React from 'react';
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const facts = [
  {
    quote: "I am really into niche topics, and I love to learn about them. Oh Game Theory?, I love it.",
    name: "I love Learning",
    designation: "Random Facts",
    src: "/about/1.jpg"
  },
  {
    quote: "Been emulating every single console since I was 10 years old- Mario,Sonic,Pokemon, you name it I've emulated it.",
    name: "Emulation",
    designation: "Random Facts",
    src: "/about/2.jpg"
  },
  {
    quote: "Photography is my creative outlet. I capture moments that tell stories and make you feel like you're there.",
    name: "Photos and Editing",
    designation: "Random Facts",
    src: "/about/3.jpg"
  },
  {
    quote: "When it comes to the kitchen,you can call me Cus D'Amato.",
    name: "I CAN COOK!",
    designation: "Random Facts",
    src: "/about/4.jpg"
  },
  {
    quote: "Pokemon was one of the first franchises I got into, and I've been a fan ever since.",
    name: "Childhood",
    designation: "Random Facts",
    src: "/about/5.jpg"
  }
];

export function AboutMeSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-[30px] p-6 md:p-8 border border-white/[0.15]" style={{
          background: "linear-gradient(145deg, rgba(26, 27, 36, 0.95), rgba(40, 41, 54, 0.98))",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
          willChange: "transform"
        }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 font-golos">
            About Me
          </h2>
          <AnimatedTestimonials testimonials={facts} />
        </div>
      </div>
    </section>
  );
} 