"use client";
import React from "react";
import { VideoText } from "@/components/magicui/video-text";

import SubHeading from "@/components/coding/SubHeading";
import LightningRod from "@/components/coding/LightningRod";
import ExperienceDescriptor from "@/components/coding/contentComponents/ExperienceDescriptor";

const experiences = [
  {
    id: "exp1",
    title: "Junior Software Developer",
    company: "Xlancr",
    date: "December, 2024 - March, 2025",
    description: "Built and deployed a cross-platform Android app using React Native and Kotlin, achieving 100% client satisfaction. Developed responsive web apps using React.js, Next.js, and Tailwind CSS, reducing page load time by 30%"
  },
  {
    id: "exp2",
    title: "Frontend Developer Intern",
    company: "Xlancr",
    date: "August, 2024 - November, 2024",
    description: "Developed dynamic and visually engaging frontend web pages using React.js, Next.js, and Tailwind CSS, improving user engagement by 30% through enhanced UI/UX. Utilized Framer Motion to implement smooth animations, resulting in a 25% increase in user interaction and overall satisfaction, while reducing page load time by 15% through optimized animations performance.experience"},
  {
    id: "exp3",
    title: "Software Engineer Intern Trainee",
    company: "Alumnus Software",
    date: "January, 2024 - June, 2024",
    description: "Built and deployed a cross-platform Android app using React Native and Kotlin, achieving 100% client satisfaction. Developed responsive web apps using React.js,Next.js, and Tailwind CSS, reducing page load time by 30%"
  }
]

  
const Experience = () => {
  return (
    <div className="flex flex-col text-white mb-8">
      <div className="flex flex-row mt-8">
        <div className="flex items-stretch">
          <LightningRod />
        </div>
        <div className="lg:pl-12 pl-4 flex flex-col">
        {experiences.map((experience) => (
          <ExperienceDescriptor
            key = {experience.id}
            title = {experience.title}
            company = {experience.company}
            date = {experience.date}
            description = {experience.description}
          />))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
