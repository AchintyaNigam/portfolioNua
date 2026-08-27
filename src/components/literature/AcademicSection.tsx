import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { literatureData } from '@/data/literature';

export default function AcademicSection() {
  const academics = literatureData.academics;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!academics || academics.length === 0) return null;

  const data = academics[currentIndex];
  const hasMultiple = academics.length > 1;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % academics.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + academics.length) % academics.length);
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center p-8">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full"
        >
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Subtle gradient background effect */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">Academic Research</h2>
                <span className="text-xs text-gray-500 border border-gray-700 rounded-full px-3 py-1 bg-gray-900/50">{data.publishDate}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {data.title}
              </h1>
              
              <div className="mb-6 pb-6 border-b border-white/10">
                <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Abstract</h3>
                <p className="text-gray-300 text-lg leading-relaxed italic border-l-2 border-emerald-500/50 pl-4">
                  {data.abstract}
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider">Published In</h3>
                  <p className="text-white font-medium">{data.journal}</p>
                </div>
                
                <a 
                  href={data.link}
                  className="inline-flex items-center justify-center px-6 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full transition-all group-hover:border-emerald-400/50"
                >
                  Read Paper
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <div className="flex gap-4 mt-8 z-20">
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
