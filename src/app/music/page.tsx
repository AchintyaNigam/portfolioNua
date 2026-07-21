"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Mic2, MonitorSpeaker, ListMusic, Maximize2 } from "lucide-react";
import Navbar from "@/components/Navbar";

// Dummy data for albums
const albums = [
  { id: 1, title: "Midnight Echoes", year: "2023", color: "from-purple-500 to-indigo-600" },
  { id: 2, title: "Solar Drift", year: "2022", color: "from-amber-400 to-orange-600" },
  { id: 3, title: "Neon Nights", year: "2021", color: "from-pink-500 to-rose-600" },
  { id: 4, title: "Ocean Breeze", year: "2024", color: "from-teal-400 to-emerald-600" },
  { id: 5, title: "Urban Pulse", year: "2020", color: "from-slate-500 to-zinc-700" },
  { id: 6, title: "Celestial Sound", year: "2023", color: "from-sky-400 to-blue-600" },
];

const videos = [
  { id: 1, title: "Midnight Echoes (Official Video)", views: "1.2M views", color: "from-red-500 to-orange-600" },
  { id: 2, title: "Neon Nights (Live at The Roxy)", views: "850K views", color: "from-blue-500 to-cyan-600" },
  { id: 3, title: "Solar Drift (Acoustic Cover)", views: "420K views", color: "from-emerald-500 to-teal-600" },
];

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-sky-500/30 pb-24">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Albums Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
              My Albums
            </h1>
            <p className="text-zinc-400 text-lg">
              Explore my discography and latest releases.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover="hover"
                className="bg-zinc-900/40 p-4 rounded-xl hover:bg-zinc-800/60 transition-colors duration-300 cursor-pointer group flex flex-col"
              >
                {/* Album Cover Placeholder */}
                <div className="relative w-full aspect-square rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.5)] mb-4 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${album.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Play Button Overlay */}
                  <motion.div
                    variants={{
                      hover: { opacity: 1, y: 0, scale: 1 },
                      initial: { opacity: 0, y: 10, scale: 0.95 }
                    }}
                    initial="initial"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute bottom-3 right-3 shadow-xl shadow-black/40 bg-green-500 rounded-full p-3 text-black flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all duration-200"
                  >
                    <Play size={24} fill="currentColor" />
                  </motion.div>
                </div>

                {/* Album Info */}
                <h3 className="font-semibold text-zinc-100 truncate mb-1">
                  {album.title}
                </h3>
                <p className="text-sm text-zinc-400 font-medium">
                  {album.year} • Album
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              Music Videos & Covers
            </h2>
            <p className="text-zinc-400 text-lg">
              Watch my latest performances and official videos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover="hover"
                className="bg-zinc-900/40 p-4 rounded-xl hover:bg-zinc-800/60 transition-colors duration-300 cursor-pointer group flex flex-col"
              >
                {/* Video Thumbnail Placeholder */}
                <div className="relative w-full aspect-video rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.5)] mb-4 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                     <Play size={48} className="text-white/50 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Video Info */}
                <h3 className="font-semibold text-zinc-100 truncate mb-1">
                  {video.title}
                </h3>
                <p className="text-sm text-zinc-400 font-medium">
                  {video.views}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Player UI */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between px-4 lg:px-6 z-50">
        
        {/* Now Playing Info */}
        <div className="flex items-center gap-4 w-1/4 min-w-[180px]">
          <div className="w-14 h-14 rounded bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg flex-shrink-0"></div>
          <div className="flex flex-col hidden sm:flex truncate">
            <span className="text-sm font-semibold text-white hover:underline cursor-pointer truncate">Midnight Echoes</span>
            <span className="text-xs text-zinc-400 hover:underline cursor-pointer truncate">Nua</span>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center max-w-[40%] w-full gap-2">
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-zinc-400 hover:text-white transition-colors hidden sm:block"><Shuffle size={18} /></button>
            <button className="text-zinc-400 hover:text-white transition-colors"><SkipBack size={24} fill="currentColor" /></button>
            <button 
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition-transform"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors"><SkipForward size={24} fill="currentColor" /></button>
            <button className="text-zinc-400 hover:text-white transition-colors hidden sm:block"><Repeat size={18} /></button>
          </div>
          <div className="w-full flex items-center gap-2 hidden sm:flex">
            <span className="text-xs text-zinc-400">1:23</span>
            <div className="h-1 flex-1 bg-zinc-800 rounded-full group cursor-pointer flex items-center">
              <div className="h-full w-1/3 bg-white group-hover:bg-green-500 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md"></div>
              </div>
            </div>
            <span className="text-xs text-zinc-400">3:45</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center justify-end gap-3 w-1/4 min-w-[150px] text-zinc-400 hidden md:flex">
          <button className="hover:text-white transition-colors"><Mic2 size={18} /></button>
          <button className="hover:text-white transition-colors"><ListMusic size={18} /></button>
          <button className="hover:text-white transition-colors"><MonitorSpeaker size={18} /></button>
          <div className="flex items-center gap-2 w-24">
            <button className="hover:text-white transition-colors"><Volume2 size={18} /></button>
            <div className="h-1 flex-1 bg-zinc-800 rounded-full group cursor-pointer flex items-center">
              <div className="h-full w-2/3 bg-white group-hover:bg-green-500 rounded-full relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md"></div>
              </div>
            </div>
          </div>
          <button className="hover:text-white transition-colors"><Maximize2 size={18} /></button>
        </div>

      </div>
    </div>
  );
}
