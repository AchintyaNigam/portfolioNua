"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { tracks } from "./data";

export default function AudioPlayer({ 
  currentTrackId, 
  onNext, 
  onPrev 
}: { 
  currentTrackId: number | null, 
  onNext: () => void, 
  onPrev: () => void 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks.find(t => t.id === currentTrackId) || tracks[0];

  useEffect(() => {
    if (audioRef.current && currentTrackId !== null) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Playback failed:", e));
    }
  }, [currentTrackId]);

  useEffect(() => {
    if (audioRef.current && currentTrackId !== null) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackId]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (currentTrackId !== null) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    if (isMuted) setIsMuted(false);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentTrackId) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800 flex items-center justify-between px-4 lg:px-6 z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      <audio 
        ref={audioRef} 
        src={currentTrack.audioSrc} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={onNext}
      />
      
      {/* Now Playing Info */}
      <div className="flex items-center gap-4 w-1/4 min-w-[180px]">
        {currentTrack.coverSrc ? (
          <img src={currentTrack.coverSrc} alt={currentTrack.title} className="w-14 h-14 rounded-md object-cover shadow-lg flex-shrink-0 border border-zinc-800" />
        ) : (
          <div className="w-14 h-14 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg flex-shrink-0 border border-zinc-800"></div>
        )}
        <div className="flex flex-col hidden sm:flex truncate">
          <span className="text-sm font-semibold text-white hover:underline cursor-pointer truncate tracking-wide">{currentTrack.title}</span>
          <span className="text-xs text-zinc-400 hover:underline cursor-pointer truncate">{currentTrack.artist}</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center max-w-[40%] w-full gap-2">
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={onPrev} className="text-zinc-400 hover:text-white transition-colors"><SkipBack size={24} fill="currentColor" /></button>
          <button 
            className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition-transform shadow-md"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
          </button>
          <button onClick={onNext} className="text-zinc-400 hover:text-white transition-colors"><SkipForward size={24} fill="currentColor" /></button>
        </div>
        <div className="w-full flex items-center gap-3 hidden sm:flex">
          <span className="text-xs text-zinc-400 min-w-[40px] text-right font-medium">{formatTime(progress)}</span>
          <input 
            type="range" 
            min="0" 
            max={duration || 100} 
            value={progress} 
            onChange={handleProgressChange}
            className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-green-500 transition-all"
          />
          <span className="text-xs text-zinc-400 min-w-[40px] font-medium">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center justify-end gap-3 w-1/4 min-w-[150px] text-zinc-400 hidden md:flex">
        <div className="flex items-center gap-3 w-32">
          <button onClick={toggleMute} className="hover:text-white transition-colors">
            {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={isMuted ? 0 : volume} 
            onChange={handleVolumeChange}
            className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-green-500 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
