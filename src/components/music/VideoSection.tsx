"use client";
import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import videoData from "@/data/videoData.json";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function VideoSection() {
  return (
    <section className="relative z-10 pt-10 pb-12">
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
        {videoData.map((video, index) => (
          <Dialog key={video.id}>
            <DialogTrigger
              render={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover="hover"
                  className="bg-zinc-900/40 p-4 rounded-xl hover:bg-zinc-800/60 transition-colors duration-300 cursor-pointer group flex flex-col backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 shadow-xl"
                />
              }
            >
              {/* Video Thumbnail Placeholder */}
              <div className="relative w-full aspect-video rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.5)] mb-4 overflow-hidden bg-zinc-900">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg')` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-40 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play size={48} className="text-white/80 group-hover:text-white transition-colors duration-300 drop-shadow-lg group-hover:scale-110" fill="currentColor" />
                </div>
              </div>

              {/* Video Info */}
              <h3 className="font-semibold text-zinc-100 truncate mb-1">
                {video.title}
              </h3>
            </DialogTrigger>

            <DialogContent className="max-w-6xl sm:max-w-6xl w-[95vw] p-0 bg-zinc-950 border-zinc-800 text-white overflow-hidden rounded-xl">
              <DialogHeader className="p-4 pb-0 absolute top-0 left-0 w-full z-10 pointer-events-none opacity-0">
                <DialogTitle>{video.title}</DialogTitle>
              </DialogHeader>
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
