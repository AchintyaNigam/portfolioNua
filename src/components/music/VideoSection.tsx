"use client";
import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { videos } from "@/data/musicData";

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
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover="hover"
            className="bg-zinc-900/40 p-4 rounded-xl hover:bg-zinc-800/60 transition-colors duration-300 cursor-pointer group flex flex-col backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 shadow-xl"
          >
            {/* Video Thumbnail Placeholder */}
            <div className="relative w-full aspect-video rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.5)] mb-4 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                 <Play size={48} className="text-white/50 group-hover:text-white transition-colors duration-300 drop-shadow-lg group-hover:scale-110" />
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
  );
}
