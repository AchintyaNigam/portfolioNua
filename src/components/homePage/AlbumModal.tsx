import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export const albumPages = [
  {
    number: "01",
    title: "WELCOME",
    image: "/album/welcome.jpg",
    content: (
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl font-serif italic text-teal-300 mb-4">Welcome.</h2>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          This is my little corner of the internet.
        </p>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          You'll find things I've built, music I've made, stories I've written, and things I'm currently learning.
        </p>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          Take a look around.
        </p>
      </div>
    ),
  },
  {
    number: "02",
    title: "MUSIC",
    image: "/album/music.jpg",
    content: (
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl font-serif italic text-teal-300 mb-4">MUSIC</h2>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          I've always liked making things that don't necessarily need words.
        </p>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          I write, produce, experiment, and occasionally spend far too adjusting an EQ for a part of the song that nobody will notice.
        </p>
        <Link href="/music" className="mt-8 self-start px-6 py-2 border border-neutral-600 hover:bg-teal-100 hover:text-black transition-colors font-mono tracking-widest text-sm inline-block">
          EXPLORE MUSIC &rarr;
        </Link>
      </div>
    ),
  },
  {
    number: "03",
    title: "BUILDING",
    image: "/album/building.jpg",
    content: (
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl font-serif text-teal-300 italic mb-4">BUILDING</h2>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          I like understanding how things work,<br />
          and then taking them apart to find out what happens.
        </p>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          Software. Systems. Networks. Security.
        </p>
        <Link href="/security-engineering" className="mt-8 self-start px-6 py-2 border border-neutral-600 hover:bg-teal-100 hover:text-black transition-colors font-mono tracking-widest text-sm inline-block">
          VIEW PROJECTS &rarr;
        </Link>
      </div>
    ),
  },
  {
    number: "04",
    title: "SECURITY",
    image: "/album/security.jpg",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 text-xs font-mono tracking-widest text-neutral-500 mb-2">
          <span>FIELD NOTES</span>
          <span>NETWORK</span>
          <span>SYSTEMS</span>
          <span>CRYPTOGRAPHY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-teal-300 italic mb-4">SECURITY</h2>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          I'm interested in the places where software, networks and people intersect.
        </p>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          Currently exploring cybersecurity, systems, cryptography and the wonderfully strange world of packets.
        </p>
      </div>
    ),
  },
  {
    number: "05",
    title: "LITERATURE",
    image: "/album/literature.jpg",
    content: (
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl text-teal-300 font-serif italic mb-4">LITERATURE</h2>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          Sometimes I build worlds instead of software.
        </p>
        <p className="text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
          I've written stories, a novel, characters that refuse to behave, and probably far too many unfinished ideas. (Also I happen to research cryptography, but you didn't hear that from me...I mean you did, but...)
        </p>
        <Link href="/literature" className="mt-8 self-start px-6 py-2 border border-neutral-600 hover:bg-teal-100 hover:text-black transition-colors font-mono tracking-widest text-sm inline-block">
          READ &rarr;
        </Link>
      </div>
    ),
  },
  {
    number: "06",
    title: "EVERYTHING ELSE",
    image: "/images/album/placeholder-06.jpg", // Kept simple to maintain array structure, handled uniquely in render
    content: (
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-3xl md:text-5xl text-teal-300 font-serif italic mb-8">EVERYTHING ELSE</h2>
        
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-800/40 aspect-square w-full rounded-sm overflow-hidden relative">
              <img src="/album/mountains.jpg" alt="Scrapbook 1" className="object-cover w-full h-full opacity-50" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <p className="text-xs font-mono text-neutral-400 italic">"I like Mountains. And the color blue."</p>
          </div>
          
          <div className="flex flex-col gap-2 mt-8 md:mt-16">
            <div className="bg-neutral-800/40 aspect-[3/4] w-full rounded-sm overflow-hidden relative">
              <img src="/album/missingX.jpg" alt="Scrapbook 2" className="object-cover w-full h-full opacity-50" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <p className="text-xs font-mono text-neutral-400 italic">"Three hours debugging. The problem was a missing x in tsx."</p>
          </div>
          
          <div className="flex flex-col gap-2 -mt-4 md:-mt-12">
            <div className="bg-neutral-800/40 aspect-[4/3] w-full rounded-sm overflow-hidden relative">
              <img src="/album/NoContext.jpg" alt="Scrapbook 3" className="object-cover w-full h-full opacity-50" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <p className="text-xs font-mono text-neutral-400 italic">"No context required."</p>
          </div>

          <div className="flex flex-col gap-2 mt-6 md:mt-8">
            <div className="bg-neutral-800/40 aspect-square w-full rounded-sm overflow-hidden relative">
              <img src="/album/partOftheEnvironment.jpg" alt="Scrapbook 4" className="object-cover w-full h-full opacity-50" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <p className="text-xs font-mono text-neutral-400 italic">"This is technically part of the development environment."</p>
          </div>
        </div>
      </div>
    ),
    isScrapbook: true
  },
  {
    number: "07",
    title: "NOW",
    image: "/album/now.jpg",
    content: (
      <div className="flex flex-col gap-8 h-full justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl text-teal-300 font-serif italic mb-6">NOW</h2>
          <div className="space-y-6 text-lg md:text-xl font-mono leading-relaxed text-neutral-300">
            <p>
              MSc Cybersecurity<br />
              Cork, Ireland
            </p>
            <p>
              Making music.<br />
              Building things.<br />
              Learning security.<br />
              Writing stories.
            </p>
            <p className="italic text-neutral-400">
              And figuring out what's next.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-8 border-t border-neutral-800">
          <Link href="/music" className="text-left font-mono text-sm tracking-widest hover:text-teal-200 hover:cursor-pointer text-neutral-400 transition-colors">
            MUSIC &rarr;
          </Link>
          <Link href="/security-engineering" className="text-left font-mono text-sm tracking-widest hover:text-teal-200 hover:cursor-pointer text-neutral-400 transition-colors">
            SECURITY & ENGINEERING &rarr;
          </Link>
          <Link href="/literature" className="text-left font-mono text-sm tracking-widest hover:text-teal-200 hover:cursor-pointer text-neutral-400 transition-colors">
            LITERATURE &rarr;
          </Link>
        </div>
      </div>
    ),
  }
];

interface AlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlbumModal: React.FC<AlbumModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Reset to first page when opening
  useEffect(() => {
    if (isOpen) setCurrentPage(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentPage]);

  const handleNext = () => {
    if (currentPage < albumPages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const page = albumPages[currentPage];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="The Album"
        >
          {/* Close Background Overlay */}
          <div className="absolute inset-0 z-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            className="relative z-10 w-full max-w-6xl h-full max-h-[85vh] bg-black/40 rounded-sm flex flex-col md:flex-row overflow-hidden border border-teal-800 shadow-2xl"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 text-neutral-400 hover:text-teal-200 hover:cursor-pointer transition-colors p-2"
              aria-label="Close album"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row w-full h-full overflow-y-auto custom-scrollbar"
              >
                {/* Left/Top: Image Area */}
                {!page.isScrapbook && (
                  <div className="w-full md:w-1/2 min-h-[40vh] md:h-full p-4 md:p-8 flex items-center justify-center bg-neutral-900/30">
                    <motion.div 
                      className="w-full h-full relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-sm"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <img
                        src={page.image}
                        alt={`Album illustration for ${page.title}`}
                        className="w-full h-full object-cover opacity-60"
                        onError={(e) => {
                          // Fallback styling if placeholder isn't created yet
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Placeholder Text if image is broken/missing */}
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-mono text-sm -z-10">
                        [ {page.title} IMAGE ]
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Right/Bottom: Text Content */}
                <div className={`w-full ${page.isScrapbook ? 'md:w-full' : 'md:w-1/2'} min-h-[50vh] md:h-full p-6 md:p-12 lg:p-16 flex flex-col justify-between`}>
                  <div className="max-w-xl mx-auto w-full">
                    {page.content}
                  </div>
                  
                  {/* Navigation Footer */}
                  <div className="mt-12 flex items-center justify-between font-mono text-sm tracking-widest text-neutral-500 max-w-xl mx-auto w-full pb-4">
                    <button
                      onClick={handlePrev}
                      className={`hover:text-teal-200 hover:cursor-pointer transition-colors py-2 pr-4 ${currentPage === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                      disabled={currentPage === 0}
                      aria-label="Previous page"
                    >
                      &larr; PREV
                    </button>
                    
                    <div className="select-none">
                      {page.number} / {String(albumPages.length).padStart(2, '0')}
                    </div>
                    
                    <button
                      onClick={handleNext}
                      className={`hover:text-teal-200 hover:cursor-pointer transition-colors py-2 pl-4 ${currentPage === albumPages.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                      disabled={currentPage === albumPages.length - 1}
                      aria-label="Next page"
                    >
                      NEXT &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlbumModal;
