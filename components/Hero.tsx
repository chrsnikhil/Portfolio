"use client";

import React, { useState, useRef } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { ResumeModal } from './ResumeModal'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='pb-20 pt-36'>
      <audio ref={audioRef} src='/about/music.mp3' loop />
      <button
        onClick={togglePlay}
        className='absolute top-4 left-1/2 transform -translate-x-1/2 p-2 rounded-full flex items-center justify-center'
        style={{
          background: "linear-gradient(145deg, rgba(26, 27, 36, 0.95), rgba(40, 41, 54, 0.98))",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)"
        }}
      >
        {isPlaying ? <FaVolumeUp className='text-white' /> : <FaVolumeMute className='text-white' />}
      </button>
      <div className="fixed inset-0 -z-10">
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-[60vh] will-change-transform' fill="white"/>
        <Spotlight className='top-10 left-full h-[40vh] w-[30vw] will-change-transform' fill="purple"/>
        <Spotlight className='top-28 left-80 h-[40vh] w-[30vw] will-change-transform' fill="blue"/>
      </div>
      <div>
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-3xl lg:max-w-[65vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-200 max-w-80 font-golos mb-8 drop-shadow-lg font-medium'>
              Improving 1% everyday
            </h2>
            <div className="w-full max-w-4xl mx-auto">
              <TextGenerateEffect 
                className='!text-center !text-[32px] !leading-tight md:!text-[48px] lg:!text-[56px] font-golos !tracking-tight text-white drop-shadow-2xl font-bold'
                words='From imagination to existence, Creating experiences that inspire.'
              />
            </div>
            <p className='text-center tracking-wider mt-8 mb-4 text-sm md:text-base lg:text-lg font-golos text-white drop-shadow-xl font-medium'>
              Hey there! This is Nikhil, a developer based in Chennai
            </p>
            <div className="mt-8">
              <ResumeModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
