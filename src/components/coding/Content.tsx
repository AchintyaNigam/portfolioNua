"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from 'lucide-react';

import SubHeading from "@/components/coding/SubHeading";
import Profile from "@/components/coding/contentComponents/Profile";
import Experience from "@/components/coding/contentComponents/Experience";
import Projects from "@/components/coding/contentComponents/Projects";

import { Particles } from "@/components/magicui/particles";
import { VideoText } from "@/components/magicui/video-text";

const sections = [
  { id: "projects", title: "Projects", content: <Projects /> },
  { id: "experience", title: "Experience", content: <Experience /> },
  { id: "certifications", title: "Certifications", content: <Experience /> },
  { id: "education", title: "Education", content: <Experience /> },
];

const Content = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contentRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    projects: projectsRef,
    experience: experienceRef, 
    certifications: certificationsRef,
    education: educationRef,
  };

  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const handleAnimationComplete = (id: string) => {
    const el = contentRefs[id]?.current;
    const container = containerRef.current;
  
    if (!el || !container) return;
  
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
  
    const elementCenter =
      elRect.top - containerRect.top + elRect.height / 2;
  
    const containerCenter = container.clientHeight / 2;
  
    const scrollTop =
      elementCenter - containerCenter + container.scrollTop;
  
    container.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  };

  const { scrollYProgress } = useScroll({ container: containerRef, });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  return (
    <div
      ref={containerRef}
      className="lg:px-32 p-8 bg-transparent h-full w-full overflow-y-auto no-scrollbar  flex flex-col pt-8"
    >
      <Particles
        className="absolute inset-0 z-0 pointer-events-none mt-32"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div className="absolute inset-0 mt-18 w-screen">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          style = {{opacity}}
        >
        <div className="lg:block hidden">
           <h1 className="relative lg:h-[30vh] h-[10vh] w-full opacity-80">
             <VideoText
               src="videos/abstractBlue.mp4"
               imageSrc="metallicTexture.png"
               fontSize={8}
               >
                DEVELOPMENT
             </VideoText>
           </h1>
        </div>
        </motion.div>
      </div>
      <div className="z-10 pb-28">
        <div className="lg:mt-44">
        <Profile />
        </div>

        <div className="text-white w-full space-y-4 lg:block hidden">
          {sections.map((section) => {
            const isOpen = openItems.includes(section.id);

            return (
              <div key={section.id} className="not-last:border-b border-white/20">
                <button
                  onClick={() => toggleItem(section.id)}
                  className="w-full text-left py-4 flex flex-row justify-between cursor-pointer"
                >
                  <SubHeading text={section.title} />
                  <ChevronDown
                    className={`lg:block hidden size-18 transition-transform duration-300 ${
                      openItems.includes(section.id) ? "rotate-180" : "rotate-0"
                    }`}
                  />
  
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                  onAnimationComplete={() => {
                    if (isOpen) handleAnimationComplete(section.id);
                  }}
                >
                  <div ref={contentRefs[section.id]} className="pb-4">
                    {section.content}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        <div className="text-white w-full space-y-4 block lg:hidden">
          {sections.map((section) => { return (
            <div className="border-b border-white/20">
              <SubHeading text={section.title} />
              <div className="pb-4">
                {section.content}
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
