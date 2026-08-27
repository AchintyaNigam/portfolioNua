import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { literatureData } from '@/data/literature';

export default function NovelSection() {
  const novels = literatureData.novels;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!novels || novels.length === 0) return null;

  const data = novels[currentIndex];
  const hasMultiple = novels.length > 1;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % novels.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + novels.length) % novels.length);
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center p-8 border-b border-white/10">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="flex justify-center">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-blue-500 rounded-lg blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src={data.coverUrl} 
                alt={data.title} 
                className="w-72 md:w-96 rounded-lg shadow-2xl shadow-black/50 transform group-hover:scale-105 group-hover:rotate-y-6 transition-all duration-500 relative z-10"
              />
            </div>
          </div>
          
          <div className="text-white space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 font-semibold">Latest Novel</h2>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {data.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              {data.description}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <p className="text-sm text-gray-400">Published: {data.publishDate}</p>
            </div>
            <a 
              href={data.link}
              className="inline-block mt-4 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Purchase
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <div className="flex gap-4 mt-12 z-20">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </section>
  );
}
