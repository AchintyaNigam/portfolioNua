"use client";
import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { albums, tracks } from "@/data/musicData";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

export default function AlbumSection({ onPlayTrack }: { onPlayTrack?: (trackId: number) => void }) {
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
          <Dialog key={album.id}>
            <DialogTrigger
              render={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover="hover"
                  className="bg-zinc-900/40 p-4 rounded-xl hover:bg-zinc-800/60 transition-colors duration-300 cursor-pointer group flex flex-col backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 shadow-xl"
                />
              }
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
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-zinc-950 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>{album.title}</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Album Tracks
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-1 mt-4">
                {album.tracks.map((track, trackIdx) => (
                  <DialogClose 
                    key={track.id}
                    render={
                      <div 
                        className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded-md cursor-pointer transition-colors group/track"
                        onClick={() => onPlayTrack && onPlayTrack(track.id)}
                      />
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-500 w-4 text-sm font-medium group-hover/track:text-zinc-300">{trackIdx + 1}</span>
                      <span className="text-zinc-200 text-sm font-medium">{track.title}</span>
                    </div>
                    <Play size={14} className="text-zinc-500 group-hover/track:text-white" />
                  </DialogClose>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
