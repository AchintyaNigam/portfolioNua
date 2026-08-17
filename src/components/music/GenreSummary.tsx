"use client";
import React from 'react';
import { motion } from 'motion/react';
import { platforms } from '@/data/musicData';
import { Headphones, ExternalLink } from 'lucide-react';

export default function GenreSummary() {
  return (
    <section className="relative z-10 py-12 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 flex items-center gap-4">
          <Headphones className="text-sky-400" size={40} />
          Sonic Landscape
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8 drop-shadow-md bg-zinc-950/40 p-6 rounded-2xl backdrop-blur-sm border border-zinc-800/50">
          My music is a blend of ambient soundscapes, synthwave energy, and acoustic storytelling. 
          I explore the space between organic instrumentation and electronic textures, aiming to create 
          immersive experiences that resonate on an emotional level.
        </p>
        
        <div className="flex flex-wrap gap-4">
          {platforms.map(platform => (
            <a 
              key={platform.id}
              href={platform.url}
              className="flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-600 px-5 py-2.5 rounded-full text-zinc-100 hover:text-white transition-all backdrop-blur-md shadow-lg group"
            >
              <span className="font-semibold tracking-wide">{platform.name}</span>
              <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
