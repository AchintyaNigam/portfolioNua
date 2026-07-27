"use client";
import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { albums, tracks } from "./data";

export default function AlbumSection({ onPlayTrack }: { onPlayTrack?: (trackId: number) => void }) {
  // We'll just map clicking an album to playing the first track for now, 
  // since we only have one main track duplicated.
  const defaultTrackId = tracks[0]?.id;

  return (
    <section className="relative z-10 pt-4">
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
            onClick={() => onPlayTrack && defaultTrackId && onPlayTrack(defaultTrackId)}
            className="bg-zinc-900/40 p-4 rounded-xl hover:bg-zinc-800/60 transition-colors duration-300 cursor-pointer group flex flex-col backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 shadow-xl"
          >
            {/* Album Cover */}
            <div className="relative w-full aspect-square rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.5)] mb-4 overflow-hidden">
              {album.coverSrc ? (
                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${album.coverSrc}')` }} />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${album.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
              )}
              
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
  );
}
