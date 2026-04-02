'use client';

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/homePage/Hero";
import MainMenu from "@/components/homePage/MainMenu";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollDown, setScrollDown] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null); 
  const mainMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollDown && mainMenuRef.current) {
      
      mainMenuRef.current.scrollIntoView({ behavior: 'smooth' });

      // Reset scrollDown to prevent repeated scrolling
      setScrollDown(false);
    }
  }, [scrollDown]);

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe visibility relative to the viewport
      threshold: 0.95, // Trigger when at least 50% of the element is visible
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowHeader(true);
        }
      });
    }, observerOptions);

    const mainMenuObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowHeader(false);
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    if (mainMenuRef.current) {
      mainMenuObserver.observe(mainMenuRef.current);
    }

    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
      if (mainMenuRef.current) {
        mainMenuObserver.unobserve(mainMenuRef.current);
      }
    };
  }, []);

  const handleScrollDownClick = () => {
    setScrollDown(true);
  }

  return (
    <div className="relative h-screen overflow-scroll m-0">
      {/* AnimatePresence for Header */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            className="z-10 fixed w-full"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

        
      <div className="relative flex-col snap-y snap-mandatory scroll-smooth">
        <div className="snap-end" ref={heroRef}>
          <Hero handleScrollDownClick={handleScrollDownClick} />
        </div>
        <div className="snap-end" ref={mainMenuRef}>
          <MainMenu />
        </div>
      </div>
    </div>
  );
}

