"use client";
import React from "react";
import { VideoText } from "@/components/magicui/video-text";

import LightningRod from "@/components/coding/LightningRod";
import ExperienceDescriptor from "@/components/coding/contentComponents/ExperienceDescriptor";

const Experience = () => {
  return (
    <div className="flex flex-col text-white p-10">
      <h1 className="lg:text-8xl text-6xl text-white font-bold pb-0">
        Experience
        <div className="lg:block hidden ">
          <h1 className="relative lg:h-[10vh] h-[10vh] w-full overflow-visible lg:-ml-96 lg:-mt-12 -ml-24 -mt-8">
            <VideoText
              src="videos/abstractBlue.mp4"
              fontSize={12}
              dominantBaseline="none"
            >
              ________
            </VideoText>
          </h1>
        </div>
      </h1>
      <div className="flex flex-row mt-8">
        <div>
          <LightningRod />
        </div>
        <div className="flex flex-col">
          <ExperienceDescriptor
            title="Junior Software Developer"
            company="Xlancr"
            date="December, 2024 - March, 2025"
            description="Built and deployed a cross-platform Android app using React Native and Kotlin, achieving 100% client satisfaction. Developed responsive web apps using React.js, Next.js, and Tailwind CSS, reducing page load time by 30%"
          />
          <ExperienceDescriptor
            title="Frontend Developer Intern"
            company="Xlancr"
            date="August, 2024 - November, 2024"
            description="Developed dynamic and visually engaging frontend web pages using React.js, Next.js, and Tailwind
              CSS, improving user engagement by 30% through enhanced UI/UX. Utilized Framer Motion to implement smooth animations, resulting in a 25% increase in user
              interaction and overall satisfaction, while reducing page load time by 15% through optimized animation
              performance.experience"
          />
          <ExperienceDescriptor
            title="Software Engineer Intern Trainee"
            company="Alumnus Software"
            date="January, 2024 - June, 2024"
            description="Built and deployed a cross-platform Android app using React Native and Kotlin, 
              achieving 100% client satisfaction. Developed responsive web apps using React.js, 
              Next.js, and Tailwind CSS, reducing page load time by 30%"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
