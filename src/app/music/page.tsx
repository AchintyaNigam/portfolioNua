"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import BackgroundHero from "@/components/music/BackgroundHero";
import GenreSummary from "@/components/music/GenreSummary";
import AlbumSection from "@/components/music/AlbumSection";
import VideoSection from "@/components/music/VideoSection";
import AudioPlayer from "@/components/music/AudioPlayer";
import { albums, tracks } from "@/data/musicData";

export default function MusicPage() {
  const [currentTrackId, setCurrentTrackId] = useState<number | null>(null);

  const handlePlayTrack = (trackId: number) => {
    setCurrentTrackId(trackId);
  };

  const currentTrack = tracks.find(t => t.id === currentTrackId);
  const currentAlbum = albums.find(a => a.id === currentTrack?.albumId);

  const handleNext = () => {
    if (!currentTrack || !currentAlbum) return;
    const albumTracks = currentAlbum.tracks;
    const currentIndex = albumTracks.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % albumTracks.length;
    setCurrentTrackId(albumTracks[nextIndex].id);
  };

  const handlePrev = () => {
    if (!currentTrack || !currentAlbum) return;
    const albumTracks = currentAlbum.tracks;
    const currentIndex = albumTracks.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + albumTracks.length) % albumTracks.length;
    setCurrentTrackId(albumTracks[prevIndex].id);
  };

  return (
    <div className="absolute overflow-hidden bg-black w-screen h-screen z-0">
      <div className="z-100">
        <Navbar /> 
      </div>
      <div className="flex h-full w-screen bg-black">
        <div className="bg-zinc-950 w-full h-full overflow-y-auto text-white font-sans selection:bg-sky-500/30 pb-24 flex flex-col">
          <BackgroundHero />
          <div className="relative z-10">
            
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
      </div>
    </div>
  );
}
