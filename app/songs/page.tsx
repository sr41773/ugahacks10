"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart, Volume2 } from "lucide-react";
import { playSound, pauseSound, playNextSound } from "../../mp3/sleep.js";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(0); // Progress in percentage
  const [duration, setDuration] = useState(0); // Total duration of the track
  const [currentTime, setCurrentTime] = useState(0); // Current time of the audio playback

  const togglePlay = () => {
    if (isPlaying) {
      pauseSound();
    } else {
      playSound(setProgress, setDuration, setCurrentTime);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const skipForward = () => {
    playNextSound(setProgress, setDuration, setCurrentTime);
    setIsPlaying(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        const currentProgress = (currentTime / duration) * 100;
        setProgress(currentProgress);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  return (
    <div className="min-h-screen bg-[#F0EAD2] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">


        
          <div className="aspect-square mb-8 rounded-xl overflow-hidden bg-[#DDE5B6] relative group">
            <img
              src="/api/placeholder/400/400"
              alt="Album Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="w-20 h-20 rounded-full bg-[#ADC178] flex items-center justify-center text-white hover:bg-[#6C584C] transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10" />
                ) : (
                  <Play className="w-10 h-10 ml-1" />
                )}
              </button>
            </div>
          </div>

          

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#6C584C] mb-2">Relaxing Melody</h2>
            <p className="text-[#A98467]">Peaceful Tunes</p>
          </div>

          

          {isPlaying && (
            <div className="siri-wave mb-14">
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
              <div className="siri-wave-bar"></div>
            </div>
          )}

          

          <div className="mb-6">
            <div className="h-1 bg-[#DDE5B6] rounded-full">
              <div
                className="h-full bg-[#ADC178] rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-[#A98467]">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

        

          <div className="flex items-center justify-between mb-8">
            <button
              onClick={toggleLike}
              className={`p-2 rounded-full hover:bg-[#DDE5B6]/50 transition-colors ${isLiked ? "text-[#ADC178]" : "text-[#A98467]"}`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <div className="flex items-center gap-4">
              <button className="p-2 text-[#6C584C] hover:text-[#ADC178] transition-colors">
                <SkipBack className="w-8 h-8" />
              </button>
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-[#ADC178] flex items-center justify-center text-white hover:bg-[#6C584C] transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>
              <button
                onClick={skipForward}
                className="p-2 text-[#6C584C] hover:text-[#ADC178] transition-colors"
              >
                <SkipForward className="w-8 h-8" />
              </button>
            </div>
            <button className="p-2 text-[#A98467] hover:bg-[#DDE5B6]/50 rounded-full transition-colors">
              <Volume2 className="w-6 h-6" />
            </button>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center gap-4">
            <Volume2 className="w-4 h-4 text-[#A98467]" />
            <div className="flex-1 h-1 bg-[#DDE5B6] rounded-full">
              <div className="h-full w-3/4 bg-[#ADC178] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default MusicPlayer;
