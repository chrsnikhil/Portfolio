import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-6 mt-20">
      <div className="container mx-auto px-4">
        <div 
          className="w-full max-w-4xl mx-auto p-4 rounded-2xl"
          style={{
            background: "linear-gradient(145deg, rgba(26, 27, 36, 0.95), rgba(40, 41, 54, 0.98))",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-neutral-400 text-sm">
              © 2024 Chris Nikhil. All rights reserved.
            </p>
            <p className="text-neutral-500 text-xs">
              Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}