"use client";
import React from "react";
import { motion } from "motion/react";

import SubHeading from "@/components/coding/SubHeading"
import Profile from "@/components/coding/contentComponents/Profile";
import Experience from "@/components/coding/contentComponents/Experience";
import Projects from "@/components/coding/contentComponents/Projects";

import { Particles } from "@/components/magicui/particles";
import { VideoText } from "@/components/magicui/video-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Content = () => {
  return (
    <div className="px-10 z-100 bg-transparent h-full w-full w-screen overflow-x-hidden pt-8 flex flex-col overflow-y-auto no-scrollbar">
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
            <h1 className="relative lg:h-[30vh] h-[10vh] w-full overflow-visible">
              <VideoText src="videos/abstractBlue.mp4" imageSrc="metallicTexture.png" fontSize={12}>
                DEVELOPMENT
              </VideoText>
            </h1>
          </div>
        </motion.div>
        <Profile />
        <div className="text-white lg:px-32 w-full">
          <Accordion type="multiple" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger><SubHeading text="Projects"/></AccordionTrigger>
              <AccordionContent>
                <Projects />  
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger><SubHeading text="Experience"/></AccordionTrigger>
              <AccordionContent>
                <Experience />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger><SubHeading text="Certifications"/></AccordionTrigger>
              <AccordionContent>
                <Experience />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger><SubHeading text="Education"/></AccordionTrigger>
              <AccordionContent>
                <Experience />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </div>
  );
};

export default Content;
