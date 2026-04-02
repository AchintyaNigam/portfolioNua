"use client";
import React from "react";
import { motion } from "motion/react";

import Profile from "@/components/coding/contentComponents/Profile";
import Experience from "@/components/coding/contentComponents/Experience";
import Projects from "@/components/coding/contentComponents/Projects";

import { Particles } from "@/components/magicui/particles";
import { VideoText } from "@/components/magicui/video-text";

const Content = () => {
  return (
    <div className="z-100 bg-transparent h-full lg:w-[70vw] w-screen overflow-x-hidden pt-8 flex flex-col overflow-y-auto no-scrollbar">
      <Particles
        className="absolute inset-0 z-0 mt-32"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="z-10 pb-32">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="lg:block hidden">
            <h1 className="relative lg:h-[30vh] h-[10vh] w-full overflow-visible lg:-ml-72 -ml-16">
              <VideoText src="videos/abstractBlue.mp4" fontSize={12}>
                CODING
              </VideoText>
            </h1>
          </div>
          <div className="lg:hidden block">
            <h1 className="relative lg:h-[30vh] h-[10vh] w-full overflow-visible lg:-ml-72 -ml-4">
              <VideoText src="videos/abstractBlue.mp4" fontSize={20}>
                CODING
              </VideoText>
            </h1>
          </div>
        </motion.div>

        <Profile />
        <Projects />
        <Experience />
      </div>
    </div>
  );
};

export default Content;
