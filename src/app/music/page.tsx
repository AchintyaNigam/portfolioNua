"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import BackgroundHero from "@/components/music/BackgroundHero";
import GenreSummary from "@/components/music/GenreSummary";
import AlbumSection from "@/components/music/AlbumSection";
import VideoSection from "@/components/music/VideoSection";
import AudioPlayer from "@/components/music/AudioPlayer";
import { tracks } from "@/data/musicData";

export default function MusicPage() {
  const [currentTrackId, setCurrentTrackId] = useState<number | null>(null);

  const handlePlayTrack = (trackId: number) => {
    setCurrentTrackId(trackId);
  };

  const handleNext = () => {
    if (!currentTrackId) return;
    const currentIndex = tracks.findIndex(t => t.id === currentTrackId);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrackId(tracks[nextIndex].id);
  };

  const handlePrev = () => {
    if (!currentTrackId) return;
    const currentIndex = tracks.findIndex(t => t.id === currentTrackId);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackId(tracks[prevIndex].id);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-sky-500/30 pb-24 relative">
      <BackgroundHero />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 space-y-8">
          <GenreSummary />
          <AlbumSection onPlayTrack={handlePlayTrack} />
          <VideoSection />
        </main>
      </div>

      <AudioPlayer 
        currentTrackId={currentTrackId} 
        onNext={handleNext} 
        onPrev={handlePrev} 
      />
    </div>
  );
}
